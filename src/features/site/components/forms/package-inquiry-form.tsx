"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, LoaderCircle, Send } from "lucide-react";

import { initialInquiryFormValues, validateInquiryForm } from "@/features/site/lib/inquiry-form";
import type { InquiryFormErrors, InquiryFormValues, TravelPackage } from "@/shared/types/site";

type PackageInquiryFormProps = {
  pkg: TravelPackage;
};

const fieldClass =
  "rounded-xl border border-[var(--color-line)] bg-[rgba(255,255,255,0.88)] px-4 py-3 text-sm outline-none transition focus:border-[var(--color-gold-soft)] focus:bg-white";

export function PackageInquiryForm({ pkg }: PackageInquiryFormProps) {
  const [form, setForm] = useState<InquiryFormValues>({
    ...initialInquiryFormValues,
    packageSelection: pkg.title,
    preferredDestinations: pkg.destinations.filter((item) => item.length < 24).slice(0, 5),
    inquiryType: "Tour Package",
    hotelRequired: pkg.badges.includes("Hotel Available") ? "Yes" : "Maybe",
    foodRequired: pkg.badges.includes("Food Add-on") ? "Maybe" : "No",
    message: `I want details for ${pkg.title}. Please guide me on stay, cab type, and darshan planning.`,
  });
  const [errors, setErrors] = useState<InquiryFormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function updateField<K extends keyof InquiryFormValues>(field: K, value: InquiryFormValues[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    if (status !== "idle") {
      setStatus("idle");
      setStatusMessage("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateInquiryForm(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as {
        ok: boolean;
        message?: string;
        errors?: InquiryFormErrors;
        whatsappLink?: string;
      };

      if (!response.ok || !result.ok) {
        setErrors(result.errors ?? {});
        setStatus("error");
        setStatusMessage(result.message ?? "We could not save your package inquiry right now.");
        return;
      }

      setStatus("success");
      setStatusMessage("Package inquiry saved. WhatsApp opened with your prefilled request.");

      if (result.whatsappLink) {
        window.open(result.whatsappLink, "_blank", "noopener,noreferrer");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Network issue aa gaya. Thoda der baad phir try kariye.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.8rem] border border-[var(--color-line)] bg-[linear-gradient(170deg,rgba(255,251,244,0.98),rgba(226,242,249,0.94))] p-6 shadow-[var(--shadow-card)]"
    >
      <p className="inline-flex rounded-full border border-[rgba(181,106,47,0.18)] bg-[rgba(181,106,47,0.08)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
        Package Inquiry
      </p>
      <h3 className="mt-3 text-2xl font-semibold text-[var(--color-ink)] sm:text-3xl">
        Get this route planned for your dates.
      </h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
        Share your travel date, group size, and pickup city. We will save the inquiry and open
        WhatsApp with your package request.
      </p>

      <div className="mt-5 grid gap-4">
        <Field
          label="Full Name"
          error={errors.fullName}
          input={
            <input
              value={form.fullName}
              onChange={(event) => updateField("fullName", event.target.value)}
              className={fieldClass}
              placeholder="Your name"
            />
          }
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Phone Number"
            error={errors.phoneNumber}
            input={
              <input
                value={form.phoneNumber}
                onChange={(event) => updateField("phoneNumber", event.target.value)}
                className={fieldClass}
                placeholder="+91..."
              />
            }
          />
          <Field
            label="Travel Date"
            error={errors.travelDate}
            input={
              <input
                type="date"
                value={form.travelDate}
                onChange={(event) => updateField("travelDate", event.target.value)}
                className={fieldClass}
              />
            }
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Pickup Location"
            error={errors.pickupLocation}
            input={
              <input
                value={form.pickupLocation}
                onChange={(event) => updateField("pickupLocation", event.target.value)}
                className={fieldClass}
                placeholder="Indore Airport, hotel, station..."
              />
            }
          />
          <Field
            label="Travelers"
            error={errors.travelers}
            input={
              <input
                value={form.travelers}
                onChange={(event) => updateField("travelers", event.target.value)}
                className={fieldClass}
                placeholder="2 adults, 1 senior"
              />
            }
          />
        </div>
        <Field
          label="Message"
          input={
            <textarea
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              className={`min-h-28 ${fieldClass}`}
            />
          }
        />
      </div>

      {status === "success" ? (
        <div className="mt-5 flex items-center gap-3 rounded-[1.1rem] border border-[rgba(27,140,87,0.28)] bg-[rgba(30,142,90,0.12)] px-4 py-4 text-sm text-[#166c44]">
          <CheckCircle2 className="h-5 w-5" />
          {statusMessage}
        </div>
      ) : null}

      {status === "error" ? (
        <div className="mt-5 rounded-[1.1rem] border border-[rgba(151,53,40,0.28)] bg-[rgba(168,65,48,0.12)] px-4 py-4 text-sm text-[#8f2f22]">
          {statusMessage}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-strong)] disabled:opacity-80 sm:w-auto"
      >
        {status === "loading" ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {status === "loading" ? "Saving inquiry..." : "Enquire for this Package"}
      </button>
    </form>
  );
}

type FieldProps = {
  label: string;
  input: ReactNode;
  error?: string;
};

function Field({ label, input, error }: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)]">
      {label}
      {input}
      {error ? <span className="text-xs text-[var(--color-accent)]">{error}</span> : null}
    </label>
  );
}

