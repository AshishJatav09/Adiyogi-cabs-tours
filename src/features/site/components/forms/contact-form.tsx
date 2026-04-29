"use client";

import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, LoaderCircle, Send } from "lucide-react";

import { destinations, packages } from "@/features/site/content";
import { initialInquiryFormValues, validateInquiryForm } from "@/features/site/lib/inquiry-form";
import type { InquiryFormErrors, InquiryFormValues } from "@/shared/types/site";

const fieldClass =
  "rounded-xl border border-[var(--color-line)] bg-[rgba(255,255,255,0.88)] px-4 py-3 text-sm outline-none transition focus:border-[var(--color-gold-soft)] focus:bg-white";

export function ContactForm() {
  const [form, setForm] = useState<InquiryFormValues>(initialInquiryFormValues);
  const [errors, setErrors] = useState<InquiryFormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const preferredDestinationsLabel = useMemo(
    () => form.preferredDestinations.join(", "),
    [form.preferredDestinations],
  );

  function validate() {
    const nextErrors = validateInquiryForm(form);
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

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

    if (!validate()) return;

    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
        setStatusMessage(result.message ?? "We could not save your inquiry right now. Please try again.");
        return;
      }

      setStatus("success");
      setStatusMessage("Your inquiry has been saved. WhatsApp opened with your prefilled message.");
      setForm(initialInquiryFormValues);

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
      className="rounded-[2rem] border border-[var(--color-line)] bg-[linear-gradient(170deg,rgba(255,251,244,0.98),rgba(226,242,249,0.94))] p-5 shadow-[var(--shadow-card)] sm:p-7"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Inquiry Type"
          input={
            <select
              value={form.inquiryType}
              onChange={(event) => updateField("inquiryType", event.target.value)}
              className={fieldClass}
            >
              <option>Tour Package</option>
              <option>Puja Service</option>
              <option>Custom Yatra</option>
              <option>Hotel + Cab</option>
              <option>Cab Only</option>
              <option>Hotel Stay</option>
              <option>VIP Darshan</option>
              <option>Group Tour</option>
              <option>Callback Request</option>
            </select>
          }
        />
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
        <Field
          label="Pickup Location"
          error={errors.pickupLocation}
          input={
            <input
              value={form.pickupLocation}
              onChange={(event) => updateField("pickupLocation", event.target.value)}
              className={fieldClass}
              placeholder="Indore Airport, Hotel, Station..."
            />
          }
        />
        <Field
          label="Number of Travelers"
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
        <Field
          label="Package Selection"
          error={errors.packageSelection}
          input={
            <select
              value={form.packageSelection}
              onChange={(event) => updateField("packageSelection", event.target.value)}
              className={fieldClass}
            >
              <option value="">Select a package or service</option>
              {packages.map((pkg) => (
                <option key={pkg.id} value={pkg.title}>
                  {pkg.title}
                </option>
              ))}
              <option value="Kaal Sarp Dosh Puja">Kaal Sarp Dosh Puja</option>
              <option value="Rudrabhishek Puja">Rudrabhishek Puja</option>
              <option value="Mahamrityunjay Jaap">Mahamrityunjay Jaap</option>
              <option value="Custom Spiritual Tour Package">Custom Spiritual Tour Package</option>
            </select>
          }
        />
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field
          label="Hotel Required"
          input={
            <select
              value={form.hotelRequired}
              onChange={(event) => updateField("hotelRequired", event.target.value)}
              className={fieldClass}
            >
              <option>Yes</option>
              <option>No</option>
              <option>Maybe</option>
            </select>
          }
        />
        <Field
          label="Food Required"
          input={
            <select
              value={form.foodRequired}
              onChange={(event) => updateField("foodRequired", event.target.value)}
              className={fieldClass}
            >
              <option>Yes</option>
              <option>No</option>
              <option>Maybe</option>
            </select>
          }
        />
      </div>

      <div className="mt-5 grid gap-2 text-sm font-medium text-[var(--color-ink)]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span>Preferred Destinations</span>
          {preferredDestinationsLabel ? (
            <span className="text-sm font-normal text-[var(--color-muted)]">
              Selected: {preferredDestinationsLabel}
            </span>
          ) : null}
        </div>
        <div className="rounded-[1.3rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.7)] p-4 sm:p-5">
          <div className="flex flex-wrap gap-3">
            {destinations.map((destination) => {
              const selected = form.preferredDestinations.includes(destination.name);

              return (
                <button
                  key={destination.slug}
                  type="button"
                  onClick={() =>
                    updateField(
                      "preferredDestinations",
                      selected
                        ? form.preferredDestinations.filter((item) => item !== destination.name)
                        : [...form.preferredDestinations, destination.name],
                    )
                  }
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    selected
                      ? "bg-[var(--color-accent)] text-white"
                      : "border border-[var(--color-line)] bg-white text-[var(--color-muted)]"
                  }`}
                >
                  {destination.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <Field
        label="Message"
        className="mt-5"
        input={
          <textarea
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            className={`min-h-32 ${fieldClass}`}
            placeholder="Tell us your route preferences, elder support needs, darshan priorities, or hotel expectations."
          />
        }
      />

      {status === "success" ? (
        <div className="mt-6 flex items-center gap-3 rounded-[1.1rem] border border-[rgba(27,140,87,0.28)] bg-[rgba(30,142,90,0.12)] px-4 py-4 text-sm text-[#166c44]">
          <CheckCircle2 className="h-5 w-5" />
          {statusMessage}
        </div>
      ) : null}

      {status === "error" ? (
        <div className="mt-6 rounded-[1.1rem] border border-[rgba(151,53,40,0.28)] bg-[rgba(168,65,48,0.12)] px-4 py-4 text-sm text-[#8f2f22]">
          {statusMessage}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-strong)] disabled:opacity-80 sm:w-auto"
      >
        {status === "loading" ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {status === "loading" ? "Saving your inquiry..." : "Send Inquiry on WhatsApp"}
      </button>
    </form>
  );
}

type FieldProps = {
  label: string;
  input: ReactNode;
  error?: string;
  className?: string;
};

function Field({ label, input, error, className }: FieldProps) {
  return (
    <label className={`grid gap-2 text-sm font-medium text-[var(--color-ink)] ${className || ""}`}>
      {label}
      {input}
      {error ? <span className="text-xs text-[var(--color-accent)]">{error}</span> : null}
    </label>
  );
}

