import type { Metadata } from "next";
import { QuoteForm } from "./quote-form";

export const metadata: Metadata = {
  title: "ขอใบเสนอราคา | Savecost Intertrade",
  description: "ส่งรายการสินค้าและข้อมูลการใช้งานให้ทีม Savecost Intertrade ช่วยจัดหาและเสนอราคาอุปกรณ์อุตสาหกรรม",
};

export default function QuotePage() {
  return <QuoteForm />;
}
