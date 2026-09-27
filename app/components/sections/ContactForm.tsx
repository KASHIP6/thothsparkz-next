"use client";

import { useState, type FormEvent } from "react";
import Button from "@/app/components/ui/Button";

type Fields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", email: "", subject: "", message: "" };

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (!fields.name.trim()) errors.name = "Please enter your name.";
  if (!fields.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!fields.subject.trim()) errors.subject = "Please add a subject.";
  if (!fields.message.trim()) errors.message = "Please write a short message.";
  return errors;
}

const fieldClass =
  "w-full rounded-xl border bg-base px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-gold";

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const update =
    (key: keyof Fields) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setFields((f) => ({ ...f, [key]: e.target.value }));
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      // Presentational only — no backend submission.
      setSubmitted(true);
      setFields(empty);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-line bg-surface p-10 text-center shadow-[var(--shadow-card)]">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-soft text-gold">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="mt-5 text-2xl font-semibold text-ink">
          Message sent
        </h3>
        <p className="mt-2 text-muted">
          Thanks for reaching out — we’ll get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 font-label text-xs font-semibold uppercase tracking-[0.14em] text-gold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-line bg-surface p-8 shadow-[var(--shadow-card)] sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="eyebrow text-muted">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            value={fields.name}
            onChange={update("name")}
            placeholder="John Doe"
            className={`mt-2 ${fieldClass} ${
              errors.name ? "border-red-400" : "border-line"
            }`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-600">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="eyebrow text-muted">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={fields.email}
            onChange={update("email")}
            placeholder="john@example.com"
            className={`mt-2 ${fieldClass} ${
              errors.email ? "border-red-400" : "border-line"
            }`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-600">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="subject" className="eyebrow text-muted">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          value={fields.subject}
          onChange={update("subject")}
          placeholder="Project Inquiry"
          className={`mt-2 ${fieldClass} ${
            errors.subject ? "border-red-400" : "border-line"
          }`}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1 text-xs text-red-600">{errors.subject}</p>
        )}
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="eyebrow text-muted">
          Message
        </label>
        <textarea
          id="message"
          value={fields.message}
          onChange={update("message")}
          placeholder="Tell us about your project…"
          rows={5}
          className={`mt-2 resize-none ${fieldClass} ${
            errors.message ? "border-red-400" : "border-line"
          }`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-600">{errors.message}</p>
        )}
      </div>

      <Button type="submit" variant="gold" size="lg" className="mt-7 w-full">
        Send Message
      </Button>
    </form>
  );
}
