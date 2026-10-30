import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Check } from "lucide-react"
import Field from "./Field"
import Button from "../common/Button"
import { validateField, validateForm } from "../../utils/validators"
import { submitContact, isDemoMode } from "../../utils/submitContact"

const fields = [
  { name: "name", label: "Full name", placeholder: "Enter your full name", helper: "Your first and last name.", autoComplete: "name" },
  { name: "email", label: "Email address", placeholder: "you@example.com", helper: "We will reply to this address.", type: "email", autoComplete: "email" },
  { name: "subject", label: "Subject", placeholder: "e.g. Membership enquiry", helper: "What is your message about?" },
  { name: "message", label: "Message", placeholder: "Tell us how we can help…", helper: "Minimum 10 characters.", multiline: true },
]

export default function ContactForm({ initialSubject = "" }) {
  const [values, setValues] = useState({ name: "", email: "", subject: initialSubject, message: "" })
  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle") // idle | submitting | success
  const [submitError, setSubmitError] = useState("")
  const formRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (touched[name]) setErrors((er) => ({ ...er, [name]: validateField(name, value) }))
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors((er) => ({ ...er, [name]: validateField(name, value) }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError("")
    const found = validateForm(values)
    setErrors(found)
    setTouched({ name: true, email: true, subject: true, message: true })
    const firstInvalid = fields.find((f) => found[f.name])
    if (firstInvalid) {
      formRef.current?.querySelector(`[name="${firstInvalid.name}"]`)?.focus()
      return
    }
    setStatus("submitting")
    try {
      await submitContact(values)
      setStatus("success")
    } catch {
      setStatus("idle")
      setSubmitError("Something went wrong while sending your message. Please try again.")
    }
  }

  const reset = () => {
    setValues({ name: "", email: "", subject: "", message: "" })
    setTouched({}); setErrors({}); setStatus("idle")
  }

  const errorCount = Object.values(errors).filter(Boolean).length

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-5 rounded-[20px] border border-line bg-panel px-8 py-16 text-center" role="status">
        <span className="flex h-[88px] w-[88px] items-center justify-center rounded-full border-2 border-success bg-success/15 text-success">
          <Check size={40} strokeWidth={3} aria-hidden="true" />
        </span>
        <h2 className="text-4xl font-bold leading-tight tracking-tight">Message sent!</h2>
        <p className="max-w-[440px] leading-[26px] text-soft">
          Thanks, {values.name.trim().split(" ")[0]}. Our team will reply to {values.email.trim()} within one business day.
        </p>
        {isDemoMode && (
          <p className="max-w-[440px] rounded-xl border border-line bg-raised px-4 py-3 text-xs text-muted">
            Demo mode: no message was actually sent because no form endpoint is configured (see README).
          </p>
        )}
        <div className="flex flex-col gap-4 pt-2 sm:flex-row">
          <Button to="/">Back to Home</Button>
          <Button variant="secondary" onClick={reset}>Send Another Message</Button>
        </div>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-6 rounded-[20px] border border-line bg-panel p-6 sm:p-10">
      <h2 className="text-[28px] font-bold leading-9">Send us a message</h2>

      {errorCount > 0 && (
        <div role="alert" className="flex items-center gap-3 rounded-xl border-[1.2px] border-danger bg-danger/10 px-5 py-4 text-sm font-semibold text-danger">
          <span aria-hidden="true" className="font-extrabold">!</span>
          Please fix {errorCount} {errorCount === 1 ? "error" : "errors"} before sending your message.
        </div>
      )}
      {submitError && (
        <div role="alert" className="rounded-xl border-[1.2px] border-danger bg-danger/10 px-5 py-4 text-sm font-semibold text-danger">{submitError}</div>
      )}

      {fields.map((f) => (
        <Field
          key={f.name}
          id={`contact-${f.name}`}
          {...f}
          value={values[f.name]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched[f.name] ? errors[f.name] : ""}
          valid={touched[f.name] && !errors[f.name] && values[f.name].trim() !== ""}
        />
      ))}

      <Button type="submit" full disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>
      <p className="text-center text-xs text-muted">
        By sending this form you agree to our <Link to="/contact" className="underline hover:text-white">privacy policy</Link>.
      </p>
    </form>
  )
}
