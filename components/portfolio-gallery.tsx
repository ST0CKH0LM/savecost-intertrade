"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { publicPath } from "@/lib/site-paths";

type Category = "cooling" | "filter" | "survey";

const categories: { key: Category | "all"; label: string }[] = [
  { key: "all", label: "ทั้งหมด" },
  { key: "cooling", label: "ล้างคู⁠ล⁠ลิ่ง⁠ทาวเวอร์" },
  { key: "filter", label: "ระบบกรองน้ำ" },
  { key: "survey", label: "สำรวจและให้คำปรึกษา" },
];

const works: { file: string; category: Category; caption: string }[] = [
  { file: "work-01.jpg", category: "cooling", caption: "ทีมงานดูแลคู⁠ล⁠ลิ่ง⁠ทาวเวอร์ขนาดใหญ่ในโรงงานอุตสาหกรรม" },
  { file: "work-02.jpg", category: "cooling", caption: "ฉีดล้างทำความสะอาดคู⁠ล⁠ลิ่ง⁠ทาวเวอร์ด้วยแรงดันสูง" },
  { file: "work-03.jpg", category: "cooling", caption: "ติดตั้งแผ่นกรองอากาศเข้าคู⁠ล⁠ลิ่ง⁠ทาวเวอร์" },
  { file: "work-04.jpg", category: "cooling", caption: "ฉีดล้างแผ่นฟิลล์คู⁠ล⁠ลิ่ง⁠ทาวเวอร์แบบเหลี่ยม" },
  { file: "work-05.jpg", category: "cooling", caption: "ล้างคู⁠ล⁠ลิ่ง⁠ทาวเวอร์ทรงกลมบนดาดฟ้าอาคาร" },
  { file: "work-06.jpg", category: "cooling", caption: "คู⁠ล⁠ลิ่ง⁠ทาวเวอร์หลังทำความสะอาดเสร็จ" },
  { file: "work-07.jpg", category: "survey", caption: "ทีมงานตรวจสภาพคู⁠ล⁠ลิ่ง⁠ทาวเวอร์ก่อนเริ่มงาน" },
  { file: "work-08.jpg", category: "cooling", caption: "ซ่อมบำรุงและเปลี่ยนแผ่นฟิลล์คู⁠ล⁠ลิ่ง⁠ทาวเวอร์" },
  { file: "work-09.jpg", category: "cooling", caption: "ล้างคู⁠ล⁠ลิ่ง⁠ทาวเวอร์แบบเหลี่ยมขนาดใหญ่" },
  { file: "work-10.jpg", category: "cooling", caption: "ติดตั้งแผ่นฟิลล์ใหม่ภายในคู⁠ล⁠ลิ่ง⁠ทาวเวอร์" },
  { file: "work-11.jpg", category: "cooling", caption: "ทีมงานขนย้ายแผ่นฟิลล์เพื่อติดตั้ง" },
  { file: "work-12.jpg", category: "cooling", caption: "ล้างและเติมน้ำยาเคมีในคู⁠ล⁠ลิ่ง⁠ทาวเวอร์" },
  { file: "work-13.jpg", category: "cooling", caption: "ติดตั้งตะแกรงกันสิ่งสกปรกรอบคู⁠ล⁠ลิ่ง⁠ทาวเวอร์" },
  { file: "work-14.jpg", category: "survey", caption: "ตรวจสอบระบบคู⁠ล⁠ลิ่ง⁠ทาวเวอร์หน้างาน" },
  { file: "work-15.jpg", category: "cooling", caption: "ส่งมอบน้ำยาเคมีสำหรับระบบคู⁠ล⁠ลิ่ง⁠ทาวเวอร์" },
  { file: "work-16.jpg", category: "survey", caption: "ตรวจสภาพคู⁠ล⁠ลิ่ง⁠ทาวเวอร์บนดาดฟ้าโรงงาน" },
  { file: "work-17.jpg", category: "cooling", caption: "ทีมงานพร้อมให้บริการล้างคู⁠ล⁠ลิ่ง⁠ทาวเวอร์" },
  { file: "work-18.jpg", category: "filter", caption: "ตรวจเช็กระบบถังกรองน้ำในโรงงาน" },
  { file: "work-19.jpg", category: "filter", caption: "ล้างทำความสะอาดถังกรองน้ำสแตนเลส" },
  { file: "work-20.jpg", category: "filter", caption: "เติมสารกรองใหม่ในถังกรองน้ำ" },
  { file: "work-21.jpg", category: "filter", caption: "ระบบกรองน้ำหลังติดตั้งเสร็จสมบูรณ์" },
  { file: "work-22.jpg", category: "filter", caption: "ถังกรองน้ำพร้อมระบบท่อที่ติดตั้งใหม่" },
  { file: "work-23.jpg", category: "filter", caption: "เปลี่ยนสารกรองในถังกรองน้ำสแตนเลส" },
  { file: "work-24.jpg", category: "filter", caption: "ซ่อมบำรุงถังกรองน้ำหน้างาน" },
  { file: "work-25.jpg", category: "filter", caption: "เติมคาร์บอนในถังกรองน้ำ" },
  { file: "work-26.jpg", category: "filter", caption: "ตรวจสอบระบบกรองน้ำในโรงงาน" },
  { file: "work-27.jpg", category: "survey", caption: "ประชุมหน้างานร่วมกับลูกค้า" },
  { file: "work-28.jpg", category: "survey", caption: "ให้คำปรึกษาและตรวจสอบระบบร่วมกับลูกค้า" },
];

const initialCount = 12;

export function PortfolioGallery() {
  const [category, setCategory] = useState<Category | "all">("all");
  const [showAll, setShowAll] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = category === "all" ? works : works.filter((work) => work.category === category);
  const visible = showAll ? filtered : filtered.slice(0, initialCount);

  const step = useCallback(
    (delta: number) => setOpenIndex((index) => (index === null ? null : (index + delta + filtered.length) % filtered.length)),
    [filtered.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenIndex(null);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, step]);

  const open = openIndex === null ? null : filtered[openIndex];

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2 max-md:mb-6">
        {categories.map((item) => (
          <button
            key={item.key}
            className={`rounded-full px-5 py-2 text-sm font-bold transition-colors max-md:px-4 ${
              category === item.key ? "bg-[#005ea3] text-white" : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100"
            }`}
            onClick={() => {
              setCategory(item.key);
              setShowAll(false);
            }}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 max-md:gap-2 md:grid-cols-3 lg:grid-cols-4">
        {visible.map((work, index) => (
          <button
            key={work.file}
            aria-label={`ดูภาพขยาย: ${work.caption}`}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200"
            onClick={() => setOpenIndex(index)}
            type="button"
          >
            <img
              alt={work.caption}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              src={publicPath(`/images/portfolio/thumb/${work.file}`)}
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 text-left opacity-0 transition-opacity group-hover:opacity-100 max-md:hidden">
              <span className="text-sm font-medium leading-snug text-white">{work.caption}</span>
            </div>
          </button>
        ))}
      </div>

      {filtered.length > initialCount && (
        <div className="mt-10 text-center max-md:mt-8">
          <button
            className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-700 transition-colors hover:bg-slate-100"
            onClick={() => setShowAll((value) => !value)}
            type="button"
          >
            {showAll ? "แสดงน้อยลง" : `ดูผลงานเพิ่มเติม (${filtered.length - initialCount})`}
          </button>
        </div>
      )}

      {open && (
        <div
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setOpenIndex(null)}
          role="dialog"
        >
          <button aria-label="ปิด" className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" type="button">
            <X size={24} />
          </button>
          <button
            aria-label="ภาพก่อนหน้า"
            className="absolute left-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 max-md:left-2"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
            type="button"
          >
            <ChevronLeft size={28} />
          </button>
          <figure className="flex max-h-full max-w-5xl flex-col items-center" onClick={(event) => event.stopPropagation()}>
            <img alt={open.caption} className="max-h-[80vh] w-auto rounded-lg object-contain" src={publicPath(`/images/portfolio/full/${open.file}`)} />
            <figcaption className="mt-4 text-center text-white/90">
              {open.caption}
              <span className="ml-3 text-sm text-white/50">
                {openIndex! + 1} / {filtered.length}
              </span>
            </figcaption>
          </figure>
          <button
            aria-label="ภาพถัดไป"
            className="absolute right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 max-md:right-2"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
            type="button"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </>
  );
}
