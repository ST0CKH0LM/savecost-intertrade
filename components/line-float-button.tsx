import { LineIcon } from "@/components/line-icon";
import { lineId, lineUrl } from "@/lib/social";

export function LineFloatButton() {
  return (
    <a
      aria-label={`แชทกับเราทาง LINE (${lineId})`}
      className="line-float-wiggle fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#06c755] py-3 pl-3 pr-5 font-bold text-white shadow-xl transition-transform hover:scale-105 max-md:bottom-4 max-md:right-4 max-md:pr-3"
      href={lineUrl}
      rel="noopener noreferrer"
      target="_blank"
    >
      <LineIcon size={28} />
      <span className="max-md:hidden">แชทกับเรา</span>
    </a>
  );
}
