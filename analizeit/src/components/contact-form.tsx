"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "./icons";

type FormErrors = Partial<Record<"name" | "email" | "message" | "consent", string>>;
type SubmitState = "idle" | "sending" | "success" | "error";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const nextErrors: FormErrors = {};
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const company = String(form.get("company") || "").trim();
    const message = String(form.get("message") || "").trim();
    const consent = form.get("consent");
    const website = String(form.get("website") || "").trim();

    if (website) return;
    if (name.length < 2) nextErrors.name = "Wpisz imię i nazwisko.";
    if (!emailPattern.test(email)) nextErrors.email = "Wpisz poprawny adres e-mail.";
    if (message.length < 20) nextErrors.message = "Opisz temat w co najmniej 20 znakach.";
    if (!consent) nextErrors.consent = "Zaznacz zgodę, aby wysłać wiadomość.";

    setErrors(nextErrors);
    setSubmitMessage("");

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState("idle");
      return;
    }

    setSubmitState("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message, website }),
      });

      const payload = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(payload?.message || "Nie udało się wysłać wiadomości.");
      }

      formElement.reset();
      setErrors({});
      setSubmitState("success");
      setSubmitMessage("Wiadomość została wysłana. Odpowiem na podany adres e-mail.");
    } catch (error) {
      setSubmitState("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz przez LinkedIn.",
      );
    }
  }

  return (
    <form aria-busy={submitState === "sending"} className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="form-row">
        <label className="field">
          <span>Imię i nazwisko</span>
          <input
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={Boolean(errors.name)}
            autoComplete="name"
            name="name"
            placeholder="Jak się do Ciebie zwracać?"
          />
          {errors.name ? <small className="field-error" id="name-error">{errors.name}</small> : null}
        </label>

        <label className="field">
          <span>E-mail</span>
          <input
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={Boolean(errors.email)}
            autoComplete="email"
            inputMode="email"
            name="email"
            placeholder="nazwa@firma.pl"
            type="email"
          />
          {errors.email ? <small className="field-error" id="email-error">{errors.email}</small> : null}
        </label>
      </div>

      <label className="field">
        <span>Firma <em>opcjonalnie</em></span>
        <input autoComplete="organization" name="company" placeholder="Nazwa organizacji" />
      </label>

      <label className="field">
        <span>O czym porozmawiamy?</span>
        <textarea
          className="resize-none"
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={Boolean(errors.message)}
          name="message"
          placeholder="Proces, etap projektu, najważniejsze wyzwanie…"
          rows={6}
        />
        {errors.message ? <small className="field-error" id="message-error">{errors.message}</small> : null}
      </label>

      <label aria-hidden="true" className="honeypot">
        Strona internetowa
        <input autoComplete="off" name="website" tabIndex={-1} />
      </label>

      <label className="consent">
        <input
          aria-describedby={errors.consent ? "consent-error" : undefined}
          aria-invalid={Boolean(errors.consent)}
          name="consent"
          type="checkbox"
        />
        <span>
          Zapoznałem/am się z <a href="/polityka-prywatnosci">informacją o prywatności</a>
          {" "}i chcę przesłać wiadomość.
        </span>
      </label>

      {errors.consent ? (
        <small className="field-error field-error--consent" id="consent-error">
          {errors.consent}
        </small>
      ) : null}

      <div className="form-submit">
        <button
          className="button button--dark"
          disabled={submitState === "sending"}
          type="submit"
        >
          {submitState === "sending" ? "Wysyłanie…" : "Wyślij wiadomość"}
          <ArrowUpRight size={20} />
        </button>
        <span className="form-submit__note">
          Odpowiedź otrzymasz na podany adres e-mail.
        </span>
      </div>

      {submitMessage ? (
        <div
          aria-live="polite"
          className={`form-notice form-notice--${submitState}`}
          role="status"
        >
          {submitMessage}
        </div>
      ) : null}
    </form>
  );
}
