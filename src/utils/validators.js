const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

// Returns an error message for one contact-form field, or "" when valid.
export function validateField(name, value) {
  const text = (value || "").trim()
  switch (name) {
    case "name":
      if (!text) return "Please enter your full name."
      if (text.length < 2) return "Name must be at least 2 characters."
      return ""
    case "email":
      if (!text) return "Please enter your email address."
      if (!EMAIL_PATTERN.test(text)) return "Please enter a valid email address."
      return ""
    case "subject":
      if (!text) return "Please enter a subject for your message."
      return ""
    case "message":
      if (!text) return "Please write a message."
      if (text.length < 10) return "Message must be at least 10 characters."
      return ""
    default:
      return ""
  }
}

export function validateForm(values) {
  const errors = {}
  for (const key of ["name", "email", "subject", "message"]) {
    const message = validateField(key, values[key])
    if (message) errors[key] = message
  }
  return errors
}
