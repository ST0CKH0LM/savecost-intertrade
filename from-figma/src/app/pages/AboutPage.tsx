import { Eye, Rocket, CheckCircle, Infinity, DollarSign } from "lucide-react";

export function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[716px] flex items-center px-8 md:px-24 overflow-hidden mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full max-w-screen-2xl mx-auto">
          <div className="md:col-span-6 z-10">
            <span className="text-xs uppercase tracking-[0.2em] text-[#005ea3] font-bold mb-4 block">
              Our Identity
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-tight">
              เกี่ยวกับเรา.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Savecost Intertrade คือผู้เชี่ยวชาญด้านงานวิศวกรรมและการจัดหาโซลูชันครบวงจรสำหรับภาคอุตสาหกรรม
              เรามุ่งมั่นในการส่งมอบบริการที่มีคุณภาพสูงสุด เพื่อเพิ่มประสิทธิภาพและลดต้นทุนให้กับธุรกิจของคุณ
              ด้วยประสบการณ์และความเชี่ยวชาญที่สั่งสมมาอย่างยาวนาน
            </p>
          </div>
          <div className="md:col-span-6 relative h-[500px] md:h-[650px]">
            <div className="absolute inset-0 bg-slate-100 rounded-xl -rotate-2"></div>
            <img
              alt="Industrial Worker Operating Machinery"
              className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl z-20"
              src="https://images.unsplash.com/photo-1582036683005-b95da0de191b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHdvcmtlciUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3NzU0Njg4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-slate-50 px-8 md:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white p-12 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-8">
                <Eye className="text-[#005ea3]" size={32} />
              </div>
              <h2 className="text-3xl font-black tracking-tight mb-6">วิสัยทัศน์ (Vision)</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                มุ่งสู่การเป็นผู้นำในการให้บริการด้านวิศวกรรมและการจัดหาสินค้าอุตสาหกรรมแบบครบวงจร
                ที่ได้รับความไว้วางใจสูงสุดในระดับภูมิภาค
              </p>
            </div>
            <div className="bg-white p-12 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-slate-200 rounded-xl flex items-center justify-center mb-8">
                <Rocket className="text-slate-700" size={32} />
              </div>
              <h2 className="text-3xl font-black tracking-tight mb-6">พันธกิจ (Mission)</h2>
              <ul className="space-y-4 text-slate-600 text-lg">
                <li className="flex gap-4">
                  <span className="text-[#005ea3] font-bold">01</span>
                  <span>ให้บริการที่เป็นเลิศด้วยมาตรฐานทางวิศวกรรมระดับสากล</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#005ea3] font-bold">02</span>
                  <span>คัดสรรผลิตภัณฑ์ที่มีคุณภาพและคุ้มค่าที่สุดสำหรับลูกค้า</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#005ea3] font-bold">03</span>
                  <span>พัฒนาบุคลากรให้มีความเชี่ยวชาญอย่างต่อเนื่อง</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 px-8 md:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-black tracking-tighter mb-4">ประวัติความเป็นมา (Our History)</h2>
            <div className="w-24 h-1 bg-[#005ea3]"></div>
          </div>
          <div className="relative space-y-12">
            <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-slate-300"></div>

            <div className="relative flex flex-col md:flex-row items-center">
              <div className="flex-1 md:text-right md:pr-16 mb-4 md:mb-0">
                <h3 className="text-2xl font-bold text-[#005ea3] mb-2">2015</h3>
                <p className="text-slate-600">จุดเริ่มต้นจากการรวมตัวของกลุ่มวิศวกรผู้เชี่ยวชาญ</p>
              </div>
              <div className="z-10 w-10 h-10 rounded-full bg-[#005ea3] flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              <div className="flex-1 md:pl-16"></div>
            </div>

            <div className="relative flex flex-col md:flex-row items-center">
              <div className="flex-1 md:pr-16"></div>
              <div className="z-10 w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#005ea3]"></div>
              </div>
              <div className="flex-1 md:pl-16 mb-4 md:mb-0">
                <h3 className="text-2xl font-bold text-[#005ea3] mb-2">2018</h3>
                <p className="text-slate-600">
                  ขยายขอบเขตการบริการสู่การจัดซื้อจัดจ้างแบบ One-Stop Service
                </p>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row items-center">
              <div className="flex-1 md:text-right md:pr-16 mb-4 md:mb-0">
                <h3 className="text-2xl font-bold text-[#005ea3] mb-2">ปัจจุบัน</h3>
                <p className="text-slate-600">
                  ยกระดับสู่การเป็นพาร์ทเนอร์ด้านเทคโนโลยีอุตสาหกรรมครบวงจร
                </p>
              </div>
              <div className="z-10 w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#005ea3]"></div>
              </div>
              <div className="flex-1 md:pl-16"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-[#f6f9ff] px-8 md:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-4xl font-black tracking-tighter mb-16 text-center">
            ค่านิยมหลักของเรา (Core Values)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <CheckCircle className="text-5xl text-[#005ea3] mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4">Quality First</h3>
              <p className="text-slate-600">
                มุ่งเน้นคุณภาพในทุกกระบวนการทำงานและการคัดสรรผลิตภัณฑ์
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <Infinity className="text-5xl text-[#005ea3] mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4">One-Stop Service</h3>
              <p className="text-slate-600">
                ตอบโจทย์ทุกความต้องการด้านอุตสาหกรรมในที่เดียวอย่างมีประสิทธิภาพ
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <DollarSign className="text-5xl text-[#005ea3] mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4">Cost Efficiency</h3>
              <p className="text-slate-600">
                ช่วยลูกค้าลดต้นทุนและเพิ่มผลกำไรด้วยโซลูชันที่ชาญฉลาด
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50 px-8 md:px-24 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-[#005ea3] font-bold mb-4 block">
                Expertise
              </span>
              <h2 className="text-5xl font-black tracking-tighter mb-6 leading-tight">
                บริการของเรา (Our Services)
              </h2>
              <p className="text-lg text-slate-600">
                โซลูชันวิศวกรรมที่ออกแบบมาเพื่อความแม่นยำและความทนทานในระยะยาว
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Service 1 */}
            <div className="group relative bg-white overflow-hidden rounded-xl aspect-[4/5]">
              <img
                alt="Factory Worker with Machinery"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1577894947058-cfdae4276bef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHdvcmtlciUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3NzU0Njg4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-0 p-8 z-20 text-white">
                <h3 className="text-2xl font-bold mb-2">Maintenance Services</h3>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  บริการบำรุงรักษาเชิงป้องกันเพื่อลดความเสี่ยงในการหยุดชะงักของสายการผลิต
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-white overflow-hidden rounded-xl aspect-[4/5]">
              <img
                alt="Engineer with Blueprint at Construction Site"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1716037991590-c975184b37df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxlbmdpbmVlciUyMHRlY2huaWNpYW4lMjB3b3JraW5nJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc3NTQ2ODg4MXww&ixlib=rb-4.1.0&q=80&w=1080"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-0 p-8 z-20 text-white">
                <h3 className="text-2xl font-bold mb-2">Engineering Consultation</h3>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  คำปรึกษาทางด้านวิศวกรรมจากผู้เชี่ยวชาญที่มีประสบการณ์
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative bg-white overflow-hidden rounded-xl aspect-[4/5]">
              <img
                alt="Industrial Tools and Equipment Warehouse"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1633155569441-9d9c1d437b7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxpbmR1c3RyaWFsJTIwZXF1aXBtZW50JTIwdG9vbHMlMjB3YXJlaG91c2V8ZW58MXx8fHwxNzc1NDY4ODgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-0 p-8 z-20 text-white">
                <h3 className="text-2xl font-bold mb-2">Equipment Supply</h3>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  จัดหาอุปกรณ์อุตสาหกรรมคุณภาพสูงจากแบรนด์ชั้นนำ
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="group relative bg-white overflow-hidden rounded-xl aspect-[4/5]">
              <img
                alt="Worker with Safety Equipment at Construction Site"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1759542877976-5d870f7cd0a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxlbmdpbmVlciUyMHRlY2huaWNpYW4lMjB3b3JraW5nJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc3NTQ2ODg4MXww&ixlib=rb-4.1.0&q=80&w=1080"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-0 p-8 z-20 text-white">
                <h3 className="text-2xl font-bold mb-2">Technical Support</h3>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  ทีมงานซัพพอร์ตพร้อมให้บริการตลอด 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
