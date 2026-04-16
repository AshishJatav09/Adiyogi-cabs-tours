import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import type { InquiryFormValues, InquiryRecord } from "@/shared/types/site";

const storageDirectory = path.join(process.cwd(), "storage");
const inquiryStorePath = path.join(storageDirectory, "inquiries.json");

async function ensureStoreFile() {
  await mkdir(storageDirectory, { recursive: true });

  try {
    await readFile(inquiryStorePath, "utf8");
  } catch {
    await writeFile(inquiryStorePath, "[]\n", "utf8");
  }
}

async function readInquiryStore() {
  await ensureStoreFile();

  try {
    const content = await readFile(inquiryStorePath, "utf8");
    const parsed = JSON.parse(content);

    return Array.isArray(parsed) ? (parsed as InquiryRecord[]) : [];
  } catch {
    return [];
  }
}

export async function createInquiry(values: InquiryFormValues) {
  const inquiries = await readInquiryStore();

  const inquiry: InquiryRecord = {
    ...values,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    source: "website-contact-form",
  };

  inquiries.unshift(inquiry);

  await writeFile(inquiryStorePath, `${JSON.stringify(inquiries, null, 2)}\n`, "utf8");

  return inquiry;
}
