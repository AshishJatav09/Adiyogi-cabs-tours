import type { InquiryFormErrors, InquiryFormValues } from "@/shared/types/site";

function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeMultiValue(value: unknown) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.map((item) => normalizeText(item)).filter(Boolean);
}

export function parseInquiryPayload(payload: unknown): InquiryFormValues {
  const record =
    payload && typeof payload === "object" ? (payload as Record<string, unknown>) : {};

  return {
    inquiryType: normalizeText(record.inquiryType) || "Tour Package",
    fullName: normalizeText(record.fullName),
    phoneNumber: normalizeText(record.phoneNumber),
    travelDate: normalizeText(record.travelDate),
    pickupLocation: normalizeText(record.pickupLocation),
    travelers: normalizeText(record.travelers),
    packageSelection: normalizeText(record.packageSelection),
    hotelRequired: normalizeText(record.hotelRequired) || "No",
    foodRequired: normalizeText(record.foodRequired) || "No",
    preferredDestinations: normalizeMultiValue(record.preferredDestinations),
    message: normalizeText(record.message),
  };
}

export function validateInquiry(values: InquiryFormValues): InquiryFormErrors {
  const errors: InquiryFormErrors = {};

  if (!values.fullName) {
    errors.fullName = "Please enter your full name.";
  }

  if (!/^\+?[0-9 ]{10,15}$/.test(values.phoneNumber)) {
    errors.phoneNumber = "Please enter a valid phone number.";
  }

  if (!values.travelDate) {
    errors.travelDate = "Please choose a travel date.";
  }

  if (!values.pickupLocation) {
    errors.pickupLocation = "Please enter your pickup location.";
  }

  if (!values.travelers) {
    errors.travelers = "Please mention number of travelers.";
  }

  if (!values.packageSelection) {
    errors.packageSelection = "Please choose a package or custom plan.";
  }

  return errors;
}
