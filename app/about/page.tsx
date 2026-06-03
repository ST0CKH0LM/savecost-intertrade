import { CheckCircle, DollarSign, Eye, Infinity, Rocket } from "lucide-react";

const missions = [
  "ให้บริการที่เป็นเลิศด้วยมาตรฐานทางวิศวกรรมระดับสากล",
  "คัดสรรผลิตภัณฑ์ที่มีคุณภาพและคุ้มค่าที่สุดสำหรับลูกค้า",
  "พัฒนาบุคลากรให้มีความเชี่ยวชาญอย่างต่อเนื่อง",
];

const values = [
  {
    icon: CheckCircle,
    title: "Quality First",
    text: "มุ่งเน้นคุณภาพในทุกกระบวนการทำงานและการคัดสรรผลิตภัณฑ์",
  },
  {
    icon: Infinity,
    title: "One-Stop Service",
    text: "ตอบโจทย์ทุกความต้องการด้านอุตสาหกรรมในที่เดียวอย่างมีประสิทธิภาพ",
  },
  {
    icon: DollarSign,
    title: "Cost Efficiency",
    text: "ช่วยลูกค้าลดต้นทุนและเพิ่มผลกำไรด้วยโซลูชันที่ชาญฉลาด",
  },
];

const services = [
  {
    title: "Maintenance Services",
    text: "บริการบำรุงรักษาเชิงป้องกันเพื่อลดความเสี่ยงในการหยุดชะงักของสายการผลิต",
    image:
      "https://images.unsplash.com/photo-1577894947058-cfdae4276bef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHdvcmtlciUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3NzU0Njg4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Engineering Consultation",
    text: "คำปรึกษาทางด้านวิศวกรรมจากผู้เชี่ยวชาญที่มีประสบการณ์",
    image:
      "https://images.unsplash.com/photo-1716037991590-c975184b37df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxlbmdpbmVlciUyMHRlY2huaWNpYW4lMjB3b3JraW5nJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc3NTQ2ODg4MXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Equipment Supply",
    text: "จัดหาอุปกรณ์อุตสาหกรรมคุณภาพสูงจากแบรนด์ชั้นนำ",
    image:
      "https://images.unsplash.com/photo-1633155569441-9d9c1d437b7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxpbmR1c3RyaWFsJTIwZXF1aXBtZW50JTIwdG9vbHMlMjB3YXJlaG91c2V8ZW58MXx8fHwxNzc1NDY4ODgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Technical Support",
    text: "สนับสนุนข้อมูลทางเทคนิคและช่วยเทียบรุ่นสินค้าตามหน้างานจริง",
    image:
      "https://images.unsplash.com/photo-1581092919535-7146ff1a590b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative mb-24 flex min-h-[716px] items-center overflow-hidden px-8 pt-24 max-md:mb-14 max-md:min-h-0 max-md:px-6 max-md:pt-28 md:px-24">
        <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 items-center gap-12 max-md:gap-8 lg:grid-cols-12">
          <div className="z-10 lg:col-span-6">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#005ea3]">Our Identity</span>
            <h1 className="mb-8 text-6xl font-black leading-tight tracking-tighter max-md:mb-5 max-md:text-4xl md:text-8xl">เกี่ยวกับเรา.</h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-600 max-md:text-base max-md:leading-7">
              บริษัทก่อตั้งในปี 2015 และดูแลลูกค้าไม่ต่ำกว่า 30 โรงงานในพื้นที่ชลบุรี ฉะเชิงเทรา ระยอง
              สมุทรปราการ สมุทรสาคร และนครราชสีมา เราจัดจำหน่ายเคมีปรับปรุงคุณภาพน้ำ เคมีภัณฑ์ซ่อมบำรุง
              สารกรองน้ำ และสินค้าสำหรับอุตสาหกรรมการผลิตแบบครบวงจร
            </p>
          </div>
          <div className="relative h-[500px] max-md:h-80 lg:col-span-6 lg:h-[650px]">
            <div className="absolute inset-0 -rotate-2 rounded-xl bg-slate-100" />
            <img
              alt="Industrial worker operating machinery"
              className="absolute inset-0 z-20 h-full w-full rounded-xl object-cover shadow-2xl"
              src="https://images.unsplash.com/photo-1582036683005-b95da0de191b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHdvcmtlciUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3NzU0Njg4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-8 py-24 max-md:px-5 max-md:py-14 md:px-24">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 gap-16 max-md:gap-5 md:grid-cols-2">
            <div className="rounded-xl bg-white p-12 shadow-sm max-md:p-6">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100">
                <Eye className="text-[#005ea3]" size={32} />
              </div>
              <h2 className="mb-6 text-3xl font-black tracking-tight max-md:text-2xl">วิสัยทัศน์ (Vision)</h2>
              <p className="text-lg leading-relaxed text-slate-600 max-md:text-base max-md:leading-7">
                มุ่งสู่การเป็นผู้นำในการให้บริการด้านวิศวกรรมและการจัดหาสินค้าอุตสาหกรรมแบบครบวงจร
                ที่ได้รับความไว้วางใจจากโรงงานอุตสาหกรรมในระดับภูมิภาค
              </p>
            </div>
            <div className="rounded-xl bg-white p-12 shadow-sm max-md:p-6">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-xl bg-slate-200">
                <Rocket className="text-slate-700" size={32} />
              </div>
              <h2 className="mb-6 text-3xl font-black tracking-tight max-md:text-2xl">พันธกิจ (Mission)</h2>
              <ul className="space-y-4 text-lg text-slate-600 max-md:text-base">
                {missions.map((mission, index) => (
                  <li className="flex gap-4" key={mission}>
                    <span className="font-bold text-[#005ea3]">{String(index + 1).padStart(2, "0")}</span>
                    <span>{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-24 max-md:px-5 max-md:py-14 md:px-24">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-16">
            <h2 className="mb-4 text-4xl font-black tracking-tighter max-md:text-3xl">ประวัติความเป็นมา (Our History)</h2>
            <div className="h-1 w-24 bg-[#005ea3]" />
          </div>
          <div className="relative space-y-10 md:space-y-12">
            <div className="absolute bottom-0 left-5 top-0 w-px bg-slate-300 md:left-1/2" />
            <Timeline year="2015" text="เริ่มต้นบริษัทเพื่อจัดหาเคมีภัณฑ์และสินค้าซ่อมบำรุงสำหรับโรงงานอุตสาหกรรม" side="left" />
            <Timeline year="30+ โรงงาน" text="ขยายฐานลูกค้าในพื้นที่อุตสาหกรรมหลัก เช่น ชลบุรี ฉะเชิงเทรา ระยอง และสมุทรปราการ" side="right" />
            <Timeline year="ปัจจุบัน" text="ให้บริการแบบครบจบในที่เดียว ทั้งสินค้า คุณภาพ บริการจัดส่ง และการช่วยลดต้นทุน" side="left" />
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9ff] px-8 py-24 max-md:px-5 max-md:py-14 md:px-24">
        <div className="mx-auto max-w-screen-2xl">
          <h2 className="mb-16 text-center text-4xl font-black tracking-tighter max-md:mb-8 max-md:text-3xl">ค่านิยมหลักของเรา (Core Values)</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="rounded-xl border border-slate-200 bg-white p-8 transition-shadow duration-300 hover:shadow-xl max-md:p-6">
                  <Icon className="mb-6 text-[#005ea3]" size={48} />
                  <h3 className="mb-4 text-2xl font-bold">{value.title}</h3>
                  <p className="text-slate-600">{value.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-slate-50 px-8 py-24 max-md:px-5 max-md:py-14 md:px-24">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-16 flex flex-col items-end justify-between gap-8 max-md:mb-8 md:flex-row">
            <div className="max-w-2xl">
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#005ea3]">Expertise</span>
              <h2 className="mb-6 text-5xl font-black leading-tight tracking-tighter max-md:text-3xl">บริการของเรา (Our Services)</h2>
              <p className="text-lg text-slate-600 max-md:text-base max-md:leading-7">โซลูชันวิศวกรรมที่ออกแบบมาเพื่อความแม่นยำและความทนทานในระยะยาว</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-white max-md:aspect-[4/3]">
                <img alt={service.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={service.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-0 z-20 p-8 text-white max-md:p-5">
                  <h3 className="mb-2 text-2xl font-bold max-md:text-xl">{service.title}</h3>
                  <p className="text-sm text-slate-300 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Timeline({ side, text, year }: { side: "left" | "right"; text: string; year: string }) {
  const left = side === "left";
  return (
    <div className="relative grid grid-cols-[40px_1fr] gap-5 md:flex md:items-center md:gap-0">
      <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#005ea3] shadow-lg md:absolute md:left-1/2 md:-translate-x-1/2">
        <div className="h-3 w-3 rounded-full bg-white" />
      </div>

      <div className="md:hidden">
        <h3 className="mb-2 text-[1.35rem] font-bold leading-tight text-[#005ea3]">{year}</h3>
        <p className="leading-7 text-slate-600">{text}</p>
      </div>

      <div className={`hidden flex-1 md:block ${left ? "md:pr-16 md:text-right" : "md:pr-16"}`}>
        {left ? (
          <>
            <h3 className="mb-2 text-2xl font-bold text-[#005ea3]">{year}</h3>
            <p className="text-slate-600">{text}</p>
          </>
        ) : null}
      </div>
      <div className={`hidden flex-1 md:block ${left ? "md:pl-16" : "md:pl-16"}`}>
        {!left ? (
          <>
            <h3 className="mb-2 text-2xl font-bold text-[#005ea3]">{year}</h3>
            <p className="text-slate-600">{text}</p>
          </>
        ) : null}
      </div>
    </div>
  );
}
