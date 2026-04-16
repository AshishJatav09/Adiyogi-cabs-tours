import { contactConfig } from "@/features/site/config/contact";
import type { Destination, InquiryFormValues, TravelPackage } from "@/shared/types/site";

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getGeneralBookingMessage() {
  return `Namaste ${contactConfig.brandName}, I would like to explore a spiritual travel booking.`;
}

export function getGeneralBookingLink() {
  return buildWhatsAppLink(getGeneralBookingMessage());
}

export function getPackageInquiryMessage(pkg: TravelPackage) {
  return [
    `Namaste ${contactConfig.brandName}, I want details for this package.`,
    `Package: ${pkg.title}`,
    `Duration: ${pkg.duration}`,
    `Destinations: ${pkg.destinations.join(", ")}`,
  ].join("\n");
}

export function getPackageInquiryLink(pkg: TravelPackage) {
  return buildWhatsAppLink(getPackageInquiryMessage(pkg));
}

export function getCustomPackageMessage() {
  return [
    `Namaste ${contactConfig.brandName}, I want to plan a custom spiritual package.`,
    "Please help me with route, stay, and travel options.",
  ].join("\n");
}

export function getCustomPackageLink() {
  return buildWhatsAppLink(getCustomPackageMessage());
}

export function getDestinationInquiryMessage(destination: Destination) {
  return [
    `Namaste ${contactConfig.brandName}, I want to enquire about travel for ${destination.name}.`,
    `Destination: ${destination.name}`,
    `Category: ${destination.category}`,
  ].join("\n");
}

export function getDestinationInquiryLink(destination: Destination) {
  return buildWhatsAppLink(getDestinationInquiryMessage(destination));
}

export function getContactInquiryMessage(values: InquiryFormValues) {
  return [
    `Namaste ${contactConfig.brandName}, I want to send an inquiry.`,
    `Inquiry Type: ${values.inquiryType || "-"}`,
    `Full Name: ${values.fullName || "-"}`,
    `Phone Number: ${values.phoneNumber || "-"}`,
    `Travel Date: ${values.travelDate || "-"}`,
    `Pickup Location: ${values.pickupLocation || "-"}`,
    `Travelers: ${values.travelers || "-"}`,
    `Package Selection: ${values.packageSelection || "-"}`,
    `Hotel Required: ${values.hotelRequired || "-"}`,
    `Food Required: ${values.foodRequired || "-"}`,
    `Preferred Destinations: ${
      values.preferredDestinations.length > 0
        ? values.preferredDestinations.join(", ")
        : "-"
    }`,
    `Message: ${values.message || "-"}`,
  ].join("\n");
}

export function getContactInquiryLink(values: InquiryFormValues) {
  return buildWhatsAppLink(getContactInquiryMessage(values));
}

