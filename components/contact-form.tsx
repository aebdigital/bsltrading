"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { AnimatedButtonText } from "@/components/animated-button-text";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  website: string;
};

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const payload = (await response.json().catch(() => null)) as
        | { message?: string; error?: string }
        | null;

      if (!response.ok) {
        throw new Error(payload?.error ?? "Formulár sa nepodarilo odoslať. Skúste to prosím znova.");
      }

      setStatus("success");
      setFeedback(payload?.message ?? "Správa bola úspešne odoslaná.");
      setFormData(initialFormData);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error ? error.message : "Formulár sa nepodarilo odoslať. Skúste to prosím znova.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <article className="border border-black/5 bg-white p-6 shadow-[0_12px_35px_rgba(0,0,0,0.05)] md:col-span-2 md:p-8">
      <div className="max-w-2xl">
        <p className="text-[11px] font-black uppercase tracking-normal text-primary">
          Napíšte nám
        </p>
        <h3 className="mt-3 text-3xl font-black uppercase tracking-tight text-navy">
          Kontaktný formulár
        </h3>
        <p className="mt-4 text-base leading-relaxed text-navy/70">
          Váš dotaz doručíme priamo na náš firemný e-mail. Pre rýchlejšiu odozvu odporúčame uviesť aj vaše telefónne číslo.
        </p>
      </div>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-[11px] font-black uppercase tracking-normal text-navy/60">
              Meno a priezvisko
            </span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              required
              maxLength={120}
              className="w-full border border-black/10 bg-zinc-50 px-5 py-4 text-base text-navy outline-none transition-colors focus:border-primary focus:bg-white"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-[11px] font-black uppercase tracking-normal text-navy/60">
              E-mail
            </span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
              maxLength={160}
              className="w-full border border-black/10 bg-zinc-50 px-5 py-4 text-base text-navy outline-none transition-colors focus:border-primary focus:bg-white"
            />
          </label>

          <label className="block md:col-span-2">
            <span className="mb-2 block text-[11px] font-black uppercase tracking-normal text-navy/60">
              Telefón
            </span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              maxLength={60}
              className="w-full border border-black/10 bg-zinc-50 px-5 py-4 text-base text-navy outline-none transition-colors focus:border-primary focus:bg-white"
            />
          </label>

          <label className="block md:col-span-2">
            <span className="mb-2 block text-[11px] font-black uppercase tracking-normal text-navy/60">
              Správa
            </span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              minLength={10}
              maxLength={5000}
              rows={7}
              className="min-h-[12rem] w-full border border-black/10 bg-zinc-50 px-5 py-4 text-base text-navy outline-none transition-colors focus:border-primary focus:bg-white"
            />
          </label>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative inline-flex items-center justify-center overflow-hidden bg-navy px-8 py-4 text-[11px] font-black uppercase tracking-normal text-white transition-colors hover:bg-primary disabled:cursor-not-allowed disabled:bg-navy/40"
          >
            <AnimatedButtonText>
              {isSubmitting ? "Odosielam..." : "Odoslať správu"}
            </AnimatedButtonText>
          </button>
          <p className="text-sm text-navy/55">Po odoslaní sa vám ozveme cez e-mail alebo telefón.</p>
        </div>

        {feedback ? (
          <div
            aria-live="polite"
            className={`border px-5 py-4 text-sm leading-relaxed ${
              status === "success"
                ? "border-primary/25 bg-primary/10 text-navy"
                : "border-red-200 bg-red-50 text-red-700"
            }`}
          >
            {feedback}
          </div>
        ) : null}
      </form>
    </article>
  );
}
