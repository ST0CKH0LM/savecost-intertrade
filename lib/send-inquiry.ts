import { officeEmail, salesRegions, type SalesRegion } from "@/lib/contacts";

// Public Web3Forms access key (safe to expose). Without it, forms fall back to a prefilled email.
const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export type InquiryResult = { status: "sent" } | { status: "fallback"; href: string };

/** Salesperson responsible for a region value from the form; unknown values go to the office. */
export function regionOwner(value: string | undefined): SalesRegion {
  return salesRegions.find((item) => item.value === value) ?? salesRegions[salesRegions.length - 1];
}

/**
 * Sends a website inquiry. Uses Web3Forms when configured; otherwise (or on failure) returns a mailto link
 * addressed to the regional salesperson with the office in CC, for the caller to open.
 */
export async function sendInquiry({
  topic,
  title,
  lines,
  data,
}: {
  topic: string;
  title: string;
  lines: string[];
  data: Record<string, string>;
}): Promise<InquiryResult> {
  const owner = regionOwner(data.region);
  const subject = `[${owner.label} - ${owner.contact}] ${topic} - ${title}`;
  const body = [...lines, `พื้นที่: ${owner.label}`, `ผู้ดูแล: ${owner.contact} (${owner.email})`].join("\n");

  if (web3formsKey) {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: web3formsKey,
          subject,
          from_name: "เว็บไซต์ SaveCost Intertrade",
          ...data,
          region: owner.label,
          sales_contact: `${owner.contact} (${owner.email})`,
        }),
      });
      const result = await response.json();
      if (result.success) return { status: "sent" };
    } catch {
      // fall through to the email fallback
    }
  }

  const cc = owner.email === officeEmail ? "" : `&cc=${officeEmail}`;
  return { status: "fallback", href: `mailto:${owner.email}?subject=${encodeURIComponent(subject)}${cc}&body=${encodeURIComponent(body)}` };
}
