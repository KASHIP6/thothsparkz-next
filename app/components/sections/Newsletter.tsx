"use client";

import { useState, type FormEvent } from "react";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setError("Please enter a valid email address.");
      return;
    }
    // Presentational only — no backend.
    setError("");
    setDone(true);
    setEmail("");
  };

  return (
    <section className="border-y border-line bg-surface">
      <Container className="flex flex-col items-center justify-between gap-8 py-14 md:flex-row">
        <div className="max-w-md text-center md:text-left">
          <h3 className="font-display text-3xl font-semibold text-ink">
            Stay in the light
          </h3>
          <p className="mt-2 text-muted">
            Get our latest projects, insights, and digital trends — no noise.
          </p>
        </div>
        <form
          onSubmit={onSubmit}
          className="w-full max-w-md"
          noValidate
          aria-label="Newsletter signup"
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
                if (done) setDone(false);
              }}
              placeholder="Enter your email address"
              aria-label="Email address"
              className="w-full rounded-full border border-line bg-base px-5 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-gold"
            />
            <Button type="submit" variant="primary" size="md" className="shrink-0">
              Subscribe
            </Button>
          </div>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          {done && (
            <p className="mt-2 text-sm text-gold">
              Thanks — you’re on the list.
            </p>
          )}
        </form>
      </Container>
    </section>
  );
}
