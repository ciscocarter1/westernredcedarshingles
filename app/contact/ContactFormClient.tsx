"use client";

import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "sonner";

const SUBJECTS = [
  "General product question",
  "Bulk / contractor order",
  "Installation help",
  "Custom project guidance",
  "Press / partnership",
  "Other",
];

const ContactSchema = z.object({
  full_name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(30, "Phone number is too long").optional().or(z.literal("")),
  subject: z.string().trim().min(1, "Please choose a subject").max(200),
  message: z.string().trim().min(1, "Please add a short message").max(2000),
});

const inputCx =
  "font-body block w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground shadow-sm placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";

export default function ContactFormClient({ contactEmail }: { contactEmail: string }) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = ContactSchema.safeParse({
      full_name: fd.get("full_name"),
      email: fd.get("email"),
      phone: fd.get("phone") || "",
      subject: fd.get("subject"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }
    setSubmitting(true);
    const payload = { ...parsed.data, phone: parsed.data.phone ? parsed.data.phone : null };
    const { error } = await supabase.from("contact_inquiries").insert(payload);
    setSubmitting(false);
    if (error) {
      console.error(error);
      toast.error("Something went wrong. Please email us directly.");
      return;
    }
    setSubmitted(true);
    toast.success("Inquiry received — we'll be in touch soon.");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <>
      <Toaster richColors />
      {submitted ? (
        <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
          <h2 className="font-display text-2xl font-bold text-primary">Thanks — message received</h2>
          <p className="font-body mt-3 text-foreground/80">
            We've logged your inquiry and someone will follow up within 1–2 business days. For
            anything urgent, email us directly at{" "}
            <a href={`mailto:${contactEmail}`} className="font-semibold text-accent hover:underline">
              {contactEmail}
            </a>
            .
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="font-ui mt-6 inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" required>
              <input name="full_name" required maxLength={100} autoComplete="name" className={inputCx} placeholder="Jane Doe" />
            </Field>
            <Field label="Email address" required>
              <input type="email" name="email" required maxLength={255} autoComplete="email" className={inputCx} placeholder="you@example.com" />
            </Field>
            <Field label="Phone (optional)">
              <input type="tel" name="phone" maxLength={30} autoComplete="tel" className={inputCx} placeholder="(555) 555-5555" />
            </Field>
            <Field label="Subject" required>
              <select name="subject" required className={inputCx} defaultValue="">
                <option value="" disabled>Choose one…</option>
                {SUBJECTS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </Field>
          </div>
          <div className="mt-5">
            <Field label="Message" required>
              <textarea name="message" required maxLength={2000} rows={6} className={`${inputCx} resize-y`} placeholder="Tell us about your project, product, or question…" />
            </Field>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="font-ui text-xs text-foreground/60">
              We'll only use your contact info to reply to this inquiry.
            </p>
            <button
              type="submit"
              disabled={submitting}
              className="font-ui inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
            >
              {submitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
              {submitting ? "Sending…" : "Send inquiry"}
            </button>
          </div>
        </form>
      )}
    </>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="font-ui mb-1.5 block text-sm font-semibold text-foreground">
        {label}
        {required && <span className="ml-0.5 text-accent">*</span>}
      </span>
      {children}
    </label>
  );
}
