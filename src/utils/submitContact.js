// Contact form submission.
// - If VITE_FORM_ENDPOINT is set (e.g. a Formspree URL) the form data is POSTed there.
// - Otherwise it runs in DEMO MODE: nothing is sent anywhere.
const ENDPOINT = import.meta.env?.VITE_FORM_ENDPOINT

export const isDemoMode = !ENDPOINT

export async function submitContact(values) {
  if (!ENDPOINT) {
    await new Promise((resolve) => setTimeout(resolve, 600))
    return { ok: true, demo: true }
  }
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(values),
  })
  if (!response.ok) throw new Error("Request failed")
  return { ok: true, demo: false }
}
