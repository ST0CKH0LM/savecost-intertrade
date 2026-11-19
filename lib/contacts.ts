export const officeEmail = "savecost.info@gmail.com";

export type SalesRegion = {
  value: string;
  label: string;
  contact: string;
  email: string;
};

/** Sales owner per customer region. Quote requests are addressed to the matching salesperson, with the office in CC. */
export const salesRegions: SalesRegion[] = [
  { value: "east", label: "ภาคตะวันออก", contact: "คุณมิว", email: "savecost.sales01@gmail.com" },
  { value: "central", label: "ภาคกลาง (รวมกรุงเทพฯ และปริมณฑล)", contact: "คุณมุก", email: "savecost.sales02@gmail.com" },
  { value: "other", label: "ภาคอื่น ๆ / ไม่แน่ใจ", contact: "ฝ่ายขาย (ออฟฟิศ)", email: officeEmail },
];
