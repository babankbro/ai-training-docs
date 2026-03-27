import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  CheckCircle2,
  Lightbulb,
  Wrench,
  Layers,
} from "lucide-react";

export default function Module71Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 lg:py-14 animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs text-text-muted mb-6 flex-wrap">
        <Link href="/" className="hover:text-text-secondary transition-colors">หน้าแรก</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/manual" className="hover:text-text-secondary transition-colors">คู่มือการอบรม</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/manual/module-7" className="hover:text-text-secondary transition-colors">โมดูล 7</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-text-secondary">7.1 Infographic / Slide / ใบงาน PISA</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-blue-300 bg-blue-100 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-blue-200 flex items-center justify-center shrink-0">
            <Layers className="w-6 h-6 text-blue-700" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-blue-700">โมดูล 7 · หัวข้อ 7.1</span>
              <span className="flex items-center gap-1 text-xs text-blue-500">
                <Clock className="w-3.5 h-3.5" /> 2 ชม. · 5 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">Infographic / Slide / ใบงาน PISA-style</h1>
            <p className="text-sm font-medium text-blue-700/80 mb-2">AI-Powered Visual Media: Infographic, Presentation Slides & PISA Worksheets</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              สร้าง Infographic ด้วย Canva AI, ออกแบบ Slide ตามหลัก 10-20-30 และสร้างใบงาน PISA-style ที่วัด RL/CT ได้ครบทุกระดับ
            </p>
          </div>
        </div>
      </div>

      {/* Learning Outcomes */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-base font-bold text-text-primary mb-3">
          <CheckCircle2 className="w-4 h-4 text-blue-700" />
          ผลลัพธ์การเรียนรู้
        </h2>
        <ul className="space-y-2">
          {[
            "เลือกประเภท Infographic ที่เหมาะกับเนื้อหาและวัตถุประสงค์ได้",
            "ใช้ Canva AI / ChatGPT + Canva สร้าง Infographic ภายใน 30 นาที",
            "ออกแบบ Slide ตามหลัก 10-20-30 Rule ที่บูรณาการ Active Learning",
            "สร้างใบงาน PISA-style ที่ครอบคลุม RL1-RL4 ด้วย AI",
            "ประเมินคุณภาพสื่อด้วยกรอบ SAFE-T ได้",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[10px] font-bold text-blue-700 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 7.1.1 ประเภท Infographic */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">7.1.1 ประเภทของ Infographic สำหรับการสอน</h2>
        <div className="space-y-2">
          {[
            { type: "Timeline Infographic", use: "ลำดับเหตุการณ์ / ประวัติศาสตร์ / วิวัฒนาการ", example: "ประวัติการพัฒนาเทคโนโลยีการสอน, วิวัฒนาการของสิ่งมีชีวิต", icon: "📅" },
            { type: "Comparison Infographic", use: "เปรียบเทียบ 2+ สิ่ง / ข้อดี-ข้อเสีย", example: "เปรียบเทียบ TPS vs. 5E, Fixed vs. Growth Mindset", icon: "⚖️" },
            { type: "Process Flow Infographic", use: "ขั้นตอน / กระบวนการ / วงจร", example: "ขั้นตอนวิธีการทางวิทยาศาสตร์, กระบวนการ Peer Review", icon: "🔄" },
            { type: "Data Visualization Infographic", use: "ข้อมูลสถิติ / กราฟ / ตัวเลข", example: "สถิติผลการเรียน, ข้อมูลสำรวจนักเรียน", icon: "📊" },
            { type: "Concept Map Infographic", use: "ความสัมพันธ์ระหว่างแนวคิด", example: "แผนผัง RL+CT+PERMA, Concept Web ของหน่วยการเรียนรู้", icon: "🕸️" },
          ].map((t) => (
            <div key={t.type} className="flex items-start gap-3 p-3 rounded-xl border border-blue-100 bg-white">
              <span className="text-xl shrink-0">{t.icon}</span>
              <div>
                <p className="text-sm font-bold text-blue-700">{t.type}</p>
                <p className="text-xs text-text-primary">{t.use}</p>
                <p className="text-[11px] text-text-muted mt-0.5 italic">เช่น: {t.example}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7.1.2 AI Tools */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">7.1.2 AI Tools สำหรับสร้าง Infographic และ Slide</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              tool: "Canva AI",
              desc: "Template หลากหลาย + Drag-and-drop + Magic Edit (Text-to-Image)",
              pros: "ใช้งานง่าย มีทั้งฟรีและ Pro",
              cons: "การปรับแต่งขั้นสูงอาจจำกัด",
              best: "Infographic ทุกประเภท",
              color: "border-blue-200 bg-blue-50",
            },
            {
              tool: "ChatGPT + Canva",
              desc: "ChatGPT สร้างโครงสร้าง → Canva สร้าง Visual",
              pros: "รวมกำลัง 2 เครื่องมือ ได้ผลลัพธ์ที่ดีที่สุด",
              cons: "ต้องใช้ 2 แพลตฟอร์มสลับกัน",
              best: "ใบงาน PISA + Infographic ซับซ้อน",
              color: "border-green-200 bg-green-50",
            },
            {
              tool: "Gemini + Google Slides",
              desc: "บูรณาการกับ Google Workspace โดยตรง",
              pros: "ทำงานใน Google ได้เลย ไม่ต้องส่งออก",
              cons: "ต้องมี Google account",
              best: "Slide บรรยาย + Presentation",
              color: "border-amber-200 bg-amber-50",
            },
            {
              tool: "DALL-E 3",
              desc: "สร้างภาพ Illustration Original ที่ไม่ซ้ำใคร",
              pros: "ภาพเป็นเอกลักษณ์ สร้างสรรค์สูง",
              cons: "ต้องระบุ Prompt ภาพได้ดี",
              best: "ภาพประกอบ Infographic เฉพาะทาง",
              color: "border-violet-200 bg-violet-50",
            },
          ].map((t) => (
            <div key={t.tool} className={`rounded-xl border p-3 ${t.color}`}>
              <p className="text-xs font-bold text-text-primary mb-1">{t.tool}</p>
              <p className="text-[11px] text-text-secondary mb-1.5">{t.desc}</p>
              <p className="text-[11px] text-green-700">✓ {t.pros}</p>
              <p className="text-[11px] text-red-600">✗ {t.cons}</p>
              <p className="text-[11px] font-medium text-blue-700 mt-1">🎯 {t.best}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7.1.3 10-20-30 Rule */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">7.1.3 หลักการออกแบบ Slide: 10-20-30 Rule</h2>
        <p className="text-sm text-text-secondary mb-3">กฎ <strong>10-20-30</strong> พัฒนาโดย <strong>Guy Kawasaki</strong> (Apple Evangelist) — เป็นมาตรฐานสากลสำหรับการออกแบบ Presentation ที่กระชับ น่าสนใจ และอ่านได้ชัดเจน</p>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { num: "10", label: "Slides", desc: "ไม่เกิน 10 Slide ต่อ Presentation — มากกว่านี้ผู้ฟังจำไม่ไหว", color: "border-blue-200 bg-blue-50 text-blue-700" },
            { num: "20", label: "Minutes", desc: "นำเสนอไม่เกิน 20 นาที — หลัง 20 นาทีสมาธิลดลงอย่างมีนัยสำคัญ", color: "border-green-200 bg-green-50 text-green-700" },
            { num: "30", label: "Point Font", desc: "ฟอนต์ไม่ต่ำกว่า 30 pt — อ่านได้ชัดจากทุกที่ในห้องเรียน", color: "border-amber-200 bg-amber-50 text-amber-700" },
          ].map((r) => (
            <div key={r.num} className={`rounded-xl border p-3 text-center ${r.color}`}>
              <p className={`text-3xl font-black mb-0.5 ${r.color.split(' ')[2]}`}>{r.num}</p>
              <p className="text-xs font-bold text-text-primary mb-1">{r.label}</p>
              <p className="text-[10px] text-text-secondary leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <div className="px-4 py-2 bg-blue-50 border-b border-blue-100">
            <p className="text-xs font-semibold text-blue-700">โครงสร้าง Slide 4 ส่วนสำหรับ Active Learning</p>
          </div>
          <div className="divide-y divide-card-border text-xs">
            {[
              { part: "Opening Slide (Hook)", desc: "คำถามกระตุ้น / ภาพ / สถิติน่าสนใจ — ดึงความสนใจก่อนเริ่มเนื้อหา" },
              { part: "Main Content Slide", desc: "Key Concept + Visual ที่ชัดเจน — ข้อความน้อย ภาพมาก 1 Concept/Slide" },
              { part: "Interactive Slide", desc: "Poll / คำถาม Think-Pair-Share / Kahoot — นักเรียนมีส่วนร่วม Active" },
              { part: "Reflection Slide", desc: "Exit Ticket / Reflection Prompt / Summary — ปิดด้วยการสรุปความรู้" },
            ].map((s, i) => (
              <div key={i} className="flex gap-3 px-4 py-2.5">
                <span className="w-5 h-5 rounded bg-blue-100 text-blue-700 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                <div>
                  <p className="font-semibold text-text-primary">{s.part}</p>
                  <p className="text-text-muted mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7.1.4 โครงสร้างใบงาน PISA */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">7.1.4 โครงสร้างใบงาน PISA-style</h2>
        <div className="space-y-2 mb-4">
          {[
            { part: "Stimulus", label: "ส่วนที่ 1", desc: "สถานการณ์/บริบท — ข้อความ บทความ กราฟ หรือภาพ ที่สร้างบริบทสำหรับคำถามทั้งหมด" },
            { part: "RL Level 1", label: "ส่วนที่ 2", desc: "การเข้าใจข้อมูลพื้นฐาน — ระบุ ค้นหา ตอบตรงจาก Stimulus" },
            { part: "RL Level 2", label: "ส่วนที่ 3", desc: "การตีความและวิเคราะห์ — อ่านระหว่างบรรทัด เชื่อมโยง สรุปใจความ" },
            { part: "RL Level 3", label: "ส่วนที่ 4", desc: "การประเมินและตัดสินใจ — วิจารณ์ ประเมินหลักฐาน ตัดสินใจพร้อมเหตุผล" },
            { part: "RL Level 4", label: "ส่วนที่ 5", desc: "Critical Thinking Challenge — สร้างสรรค์ แก้ปัญหาใหม่ สะท้อนมุมมองจากนอกบริบท" },
            { part: "Reflection", label: "ส่วนที่ 6", desc: "สะท้อนการเรียนรู้ — เชื่อมกับชีวิตจริง Growth Mindset + PERMA-A" },
          ].map((s) => (
            <div key={s.part} className="flex items-start gap-3 rounded-xl border border-blue-100 bg-white p-3">
              <div className="text-right shrink-0 w-16">
                <p className="text-[10px] text-text-muted">{s.label}</p>
                <p className="text-xs font-bold text-blue-700">{s.part}</p>
              </div>
              <div className="w-px bg-blue-100 self-stretch shrink-0" />
              <p className="text-xs text-text-secondary">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* SAFE-T Framework */}
        <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-4">
          <p className="text-xs font-bold text-blue-700 mb-3">กรอบประเมินคุณภาพสื่อ SAFE-T</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { letter: "S", name: "Safe", desc: "เนื้อหาปลอดภัย เหมาะสมกับวัย ไม่มีอคติ" },
              { letter: "A", name: "Accurate", desc: "ข้อมูลถูกต้อง ทันสมัย อ้างอิงได้" },
              { letter: "F", name: "Free / Affordable", desc: "ไม่มีค่าใช้จ่ายหรือราคาที่โรงเรียนจ่ายได้" },
              { letter: "E", name: "Easy to Use", desc: "ครูและนักเรียนใช้ได้ทันที ไม่ต้องฝึกนาน" },
              { letter: "T", name: "Teaching-fit", desc: "สอดคล้องกับวัตถุประสงค์และ Curriculum" },
            ].map((f) => (
              <div key={f.letter} className="flex items-start gap-2 text-xs">
                <span className="w-6 h-6 rounded-lg bg-blue-700 text-white font-bold text-[11px] flex items-center justify-center shrink-0">{f.letter}</span>
                <div>
                  <span className="font-semibold text-text-primary">{f.name}: </span>
                  <span className="text-text-muted">{f.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prompt Templates */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">Prompt Templates สำหรับสร้างสื่อ</h2>
        <div className="space-y-3">
          {[
            {
              label: "Prompt 1: สร้าง Timeline Infographic",
              prompt: "ช่วยฉันสร้าง Timeline ของ [หัวข้อ] ตั้งแต่ [จุดเริ่ม] จนถึง [ปัจจุบัน] | อยากให้มี 8 จุดสำคัญในประวัติศาสตร์ | ให้ข้อมูลวันที่และคำอธิบายสั้นๆ สำหรับแต่ละจุด | ให้คำแนะนำเกี่ยวกับสีและ Visual ที่เหมาะสม → ผลลัพธ์: Content พร้อมนำไปทำใน Canva ทันที",
            },
            {
              label: "Prompt 2: ออกแบบ Presentation 10 Slide",
              prompt: "ช่วยฉันออกแบบ Presentation 10 Slide สำหรับสอนเรื่อง [หัวข้อ] ระดับ [ชั้น] | ให้โครงสร้าง Slide พร้อม Outline ของแต่ละ Slide | บอกว่าจะเพิ่ม Interactive Element (Poll / Think-Pair-Share) ตรงไหน | ใช้หลัก 10-20-30 Rule → ผลลัพธ์: Slide Blueprint ครบ 10 หน้าพร้อม Note",
            },
            {
              label: "Prompt 3: สร้างใบงาน PISA ระดับ RL3 และ RL4",
              prompt: "สร้างใบงาน PISA เกี่ยวกับ [หัวข้อ] สำหรับนักเรียน [ชั้น] | Stimulus: [อธิบายสถานการณ์ที่ต้องการ] | RL1: คำถามเข้าใจพื้นฐาน 2 ข้อ | RL2: คำถามตีความ 2 ข้อ | RL3: คำถามประเมิน-ตัดสินใจ 2 ข้อ | RL4: Critical Thinking 1 ข้อ | Reflection: 1 ข้อ → ผลลัพธ์: ใบงานพร้อมเฉลยและ Rubric",
            },
            {
              label: "Prompt 4: ประเมินสื่อด้วยกรอบ SAFE-T",
              prompt: "ช่วยฉันประเมินว่าสื่อต่อไปนี้มีคุณภาพดีตามกรอบ SAFE-T หรือไม่: [อธิบายสื่อ] | ประเมินทีละด้าน: Safe / Accurate / Free / Easy / Teaching-fit | ให้ Checklist ที่ครูใช้ประเมินสื่อทุกชิ้น | ให้ข้อเสนอแนะในการปรับปรุง → ผลลัพธ์: SAFE-T Assessment Report + Actionable Improvements",
            },
          ].map((t) => (
            <div key={t.label} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <p className="text-[11px] font-semibold text-text-primary mb-1">{t.label}</p>
              <p className="text-[11px] text-text-muted font-mono leading-relaxed">{t.prompt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workshops */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-lg font-bold text-text-primary mb-3">
          <Wrench className="w-4.5 h-4.5 text-blue-700" />
          กิจกรรม Workshop (3 หัวข้อ · รวม ~75 นาที)
        </h2>
        <div className="space-y-4">
          {[
            {
              num: "1", title: "สร้าง Infographic ด้วย Canva AI",
              time: "30 นาที", format: "เดี่ยว",
              goal: "Infographic 1 ชิ้นพร้อมนำไปใช้สอน",
              steps: [
                "เลือกหัวข้อจากวิชาที่สอน และเลือกประเภท Infographic ที่เหมาะ (Timeline / Comparison / Process)",
                "เปิด Canva เลือก Template Infographic แล้วปรับแต่งด้วยสีและฟอนต์",
                "ป้อนเนื้อหาที่ AI ช่วยสรุป และใช้ Magic Edit เพื่อปรับปรุง Visual",
                "ประเมินด้วย SAFE-T Checklist: ครบ 5 ด้านไหม?",
              ],
            },
            {
              num: "2", title: "ออกแบบ Slide ตามหลัก 10-20-30",
              time: "35 นาที", format: "เดี่ยว",
              goal: "Slide Deck 10 หน้าพร้อม Interactive Element",
              steps: [
                "เลือกหัวข้อบทเรียนและเขียน Learning Objective 1 ข้อ",
                "สร้างโครงสร้าง 10 Slide: Opening + 7 Content + Interactive + Reflection",
                "เพิ่ม Visual ให้สมดุล — ข้อความน้อย ภาพมาก 30pt+ font ทุก Slide",
                "เพิ่ม Interactive Element 1 อย่างในหน้า 7–8 (Poll หรือ Think)",
              ],
            },
            {
              num: "3", title: "สร้างใบงาน PISA ด้วย ChatGPT",
              time: "40 นาที", format: "เดี่ยว",
              goal: "ใบงาน PISA ครบ RL1-RL4 พร้อม Rubric",
              steps: [
                "เลือกหัวข้อและสร้าง Stimulus (บทอ่าน/กราฟ 150-200 คำ) ด้วย AI",
                "ใช้ ChatGPT สร้างคำถาม RL1-RL2 ก่อน แล้วตรวจสอบระดับ",
                "เพิ่มคำถาม RL3-RL4 และ Reflection Prompt ด้วย Prompt ที่ให้",
                "ตรวจสอบด้วย SAFE-T: Accurate และ Teaching-fit สำคัญที่สุด",
              ],
            },
          ].map((ws) => (
            <div key={ws.num} className="rounded-xl border border-blue-200 bg-white overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 bg-blue-50 border-b border-blue-100">
                <span className="w-7 h-7 rounded-lg bg-blue-700 text-white text-xs font-bold flex items-center justify-center">W{ws.num}</span>
                <div>
                  <p className="text-sm font-bold text-text-primary">{ws.title}</p>
                  <p className="text-[11px] text-blue-500">{ws.time} · {ws.format}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs font-medium text-blue-700 mb-2">🎯 {ws.goal}</p>
                <ul className="space-y-1.5">
                  {ws.steps.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                      <span className="w-4 h-4 rounded bg-blue-100 text-blue-700 text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-lg font-bold text-text-primary mb-3">
          <Lightbulb className="w-4.5 h-4.5 text-blue-700" />
          Key Takeaways
        </h2>
        <div className="space-y-2">
          {[
            "เลือกประเภท Infographic ให้ตรงกับโครงสร้างเนื้อหา — ไม่ใช่แค่สวยงาม",
            "10-20-30 Rule ช่วยให้ Slide มีประสิทธิภาพสูง — น้อยแต่ทรงพลัง",
            "ใบงาน PISA ที่ดีต้องมี Stimulus ก่อน — คำถามทั้งหมดอ้างอิงกลับ",
            "SAFE-T ใช้ประเมินสื่อทุกชิ้น — เป็น Quality Gate ก่อนนำไปสอน",
            "AI Draft ภายใน 10 นาที + ครูปรับ 20 นาที = สื่อคุณภาพในครึ่งชั่วโมง",
          ].map((k, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-blue-50 border border-blue-100">
              <span className="w-5 h-5 rounded-full bg-blue-700 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-text-secondary">{k}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-card-border">
        <Link href="/manual/module-6/6-4" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">6.4 Workshop + Peer Review</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <Link href="/manual/module-7/7-2" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <div className="text-right">
            <p className="text-[10px] text-text-muted">ถัดไป</p>
            <p className="font-medium">7.2 Exit Ticket / Interactive Lesson</p>
          </div>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
