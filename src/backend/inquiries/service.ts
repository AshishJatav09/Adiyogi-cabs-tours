import { createInquiry } from "@/backend/inquiries/repository";
import { parseInquiryPayload, validateInquiry } from "@/backend/inquiries/validator";
import { getContactInquiryLink } from "@/features/site/lib/whatsapp";

export async function submitInquiry(payload: unknown) {
  const values = parseInquiryPayload(payload);
  const errors = validateInquiry(values);

  if (Object.keys(errors).length > 0) {
    return {
      ok: false as const,
      message: "Please fix the highlighted fields and try again.",
      errors,
    };
  }

  const inquiry = await createInquiry(values);

  return {
    ok: true as const,
    inquiryId: inquiry.id,
    whatsappLink: getContactInquiryLink(values),
    message: "Inquiry saved successfully.",
  };
}
