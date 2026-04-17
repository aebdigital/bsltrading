import { NextResponse } from "next/server";

export const runtime = "nodejs";

const smtp2goUrl = "https://api.smtp2go.com/v3/email/send";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Neplatné dáta formulára." }, { status: 400 });
  }

  const body = typeof payload === "object" && payload !== null ? payload : {};

  const name = readString(Reflect.get(body, "name"));
  const email = readString(Reflect.get(body, "email"));
  const phone = readString(Reflect.get(body, "phone"));
  const message = readString(Reflect.get(body, "message"));
  const website = readString(Reflect.get(body, "website"));

  if (website) {
    return NextResponse.json({ message: "Správa bola prijatá." });
  }

  if (name.length < 2 || name.length > 120) {
    return NextResponse.json({ error: "Zadajte prosím platné meno." }, { status: 400 });
  }

  if (!emailPattern.test(email) || email.length > 160) {
    return NextResponse.json({ error: "Zadajte prosím platný e-mail." }, { status: 400 });
  }

  if (phone.length > 60) {
    return NextResponse.json({ error: "Telefónne číslo je príliš dlhé." }, { status: 400 });
  }

  if (message.length < 10 || message.length > 5000) {
    return NextResponse.json({ error: "Správa musí mať aspoň 10 znakov." }, { status: 400 });
  }

  const apiKey = process.env.SMTP2GO_API_KEY;
  const sender = process.env.SMTP2GO_SENDER;
  const recipients = process.env.CONTACT_FORM_RECIPIENT?.split(/[;,]/)
    .map((value) => value.trim())
    .filter(Boolean);

  if (!apiKey || !sender || !recipients?.length) {
    return NextResponse.json(
      { error: "Kontaktný formulár ešte nie je nakonfigurovaný. Doplňte SMTP premenné prostredia." },
      { status: 500 },
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "neuvedené");
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  const textBody = [
    "Nová správa z kontaktného formulára BSL TRADING",
    "",
    `Meno: ${name}`,
    `E-mail: ${email}`,
    `Telefón: ${phone || "neuvedené"}`,
    "",
    "Správa:",
    message,
  ].join("\n");

  const htmlBody = `
    <h1>Nová správa z kontaktného formulára BSL TRADING</h1>
    <p><strong>Meno:</strong> ${safeName}</p>
    <p><strong>E-mail:</strong> ${safeEmail}</p>
    <p><strong>Telefón:</strong> ${safePhone}</p>
    <p><strong>Správa:</strong></p>
    <p>${safeMessage}</p>
  `;

  let smtp2goPayload: unknown = null;

  try {
    const response = await fetch(smtp2goUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "X-Smtp2go-Api-Key": apiKey,
      },
      body: JSON.stringify({
        sender,
        to: recipients,
        subject: `BSL TRADING | Kontakt z webu | ${name}`,
        text_body: textBody,
        html_body: htmlBody,
      }),
      cache: "no-store",
    });

    smtp2goPayload = await response.json().catch(() => null);

    const smtpData =
      typeof smtp2goPayload === "object" && smtp2goPayload !== null && "data" in smtp2goPayload
        ? Reflect.get(smtp2goPayload, "data")
        : null;

    const failed =
      typeof smtpData === "object" && smtpData !== null ? Reflect.get(smtpData, "failed") : null;

    const error =
      typeof smtpData === "object" && smtpData !== null ? Reflect.get(smtpData, "error") : null;

    if (!response.ok || error || (typeof failed === "number" && failed > 0)) {
      const apiError =
        typeof error === "string" && error.length > 0
          ? error
          : "SMTP2GO vrátil chybu pri odosielaní správy.";

      return NextResponse.json({ error: apiError }, { status: 502 });
    }
  } catch {
    return NextResponse.json(
      { error: "Nepodarilo sa spojiť so službou SMTP2GO. Skúste to prosím znova." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: "Ďakujeme, správa bola úspešne odoslaná. Ozveme sa vám čo najskôr.",
  });
}
