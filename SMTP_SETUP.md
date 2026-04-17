# SMTP2GO Setup

This Next.js rebuild uses SMTP2GO through the App Router API route instead of Netlify Functions, but the flow is intentionally equivalent.

## Files involved

1. `app/api/contact/route.ts`
   The server-side endpoint that validates form data and calls the official SMTP2GO `/email/send` API.
2. `components/contact-form.tsx`
   The client-side form logic for loading state, submission, validation feedback, and success/error messages.
3. `app/kontakt/page.tsx`
   The contact page that renders the company data and the actual form UI.
4. `.env.example`
   Template for the three required environment variables.
5. `SMTP_SETUP.md`
   This setup guide.

## Environment variables

Set these exact variables in your hosting provider:

1. `CONTACT_FORM_RECIPIENT`
   The recipient address that should receive website contact submissions.
2. `SMTP2GO_API_KEY`
   Your SMTP2GO API key.
3. `SMTP2GO_SENDER`
   A sender address verified inside SMTP2GO, for example `no-reply@bsltrading.sk`.

If you are deploying on Netlify, add them in Site configuration > Environment variables and keep them available in all scopes unless you have a reason to split deploy contexts.

## Flow

1. User submits the form on `/kontakt`.
2. The client component sends JSON to `/api/contact`.
3. The API route validates the payload and calls SMTP2GO.
4. The page shows either a success message or an error state.

## Notes

1. The API integration follows SMTP2GO's official `POST /v3/email/send` documentation.
   Source: https://developers.smtp2go.com/docs/send-an-email
2. The form includes a hidden honeypot field to reduce basic spam bot submissions.
3. No extra mail library is required because the route uses `fetch` against SMTP2GO directly.
