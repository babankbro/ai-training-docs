import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  CheckCircle2,
  Lightbulb,
  Wrench,
  FileEdit,
} from "lucide-react";

export default function Module61Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 lg:py-14 animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs text-text-muted mb-6 flex-wrap">
        <Link href="/" className="hover:text-text-secondary transition-colors">หน้าแรก</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/manual" className="hover:text-text-secondary transition-colors">คู่มือการอบรม</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/manual/module-6" className="hover:text-text-secondary transition-colors">โมดูล 6</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-text-secondary">6.1 โครงสร้างมาตรฐาน 13 หัวข้อ</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-indigo-300 bg-indigo-100 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-indigo-200 flex items-center justify-center shrink-0">
            <FileEdit className="w-6 h-6 text-indigo-700" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-indigo-700">โมดูล 6 · หัวข้อ 6.1</span>
              <span className="flex items-center gap-1 text-xs text-indigo-500">
                <Clock className="w-3.5 h-3.5" /> 1.5 ชม. · 5 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">โครงสร้างมาตรฐาน 13 หัวข้อ + Assessment Framework</h1>
            <p className="text-sm font-medium text-indigo-700/80 mb-2">Standard 13-Topic Lesson Plan Structure + K/P/A Assessment Framework</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              เข้าใจโครงสร้างแผนการสอนมาตรฐาน สพฐ. 13 หัวข้อ ออกแบบ K/P/A Objectives ที่วัดได้ และรู้ว่า AI ช่วยได้มากที่สุดในส่วนใด
            </p>
          </div>
        </div>
      </div>

      {/* Learning Outcomes */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-base font-bold text-text-primary mb-3">
          <CheckCircle2 className="w-4 h-4 text-indigo-700" />
          ผลลัพธ์การเรียนรู้
        </h2>
        <ul className="space-y-2">
          {[
            "อธิบายหน้าที่ของแต่ละหัวข้อใน 13 หัวข้อมาตรฐานได้",
            "เขียน K/P/A Objectives ที่ชัดเจน วัดได้ และสอดคล้องกับ Bloom's Taxonomy",
            "ตรวจสอบแผนการสอนด้วย 13-Topic Checklist ได้",
            "ระบุ 5 ส่วนที่ AI ช่วยได้ทรงพลังที่สุดและใช้ Prompt ได้ทันที",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center text-[10px] font-bold text-indigo-700 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 6.1.1 13 หัวข้อ */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">6.1.1 โครงสร้าง 13 หัวข้อมาตรฐาน สพฐ.</h2>
        <p className="text-sm text-text-secondary mb-4">
          แผนการสอนมาตรฐานมี <strong>13 หัวข้อ</strong> — แต่ละหัวข้อมีหน้าที่เฉพาะ ไม่ใช่แค่รูปแบบ ครูที่เข้าใจหน้าที่ของแต่ละหัวข้อจะออกแบบการสอนได้ครบมิติมากกว่า
        </p>
        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <div className="px-4 py-2 bg-indigo-50 border-b border-indigo-100">
            <p className="text-xs font-semibold text-indigo-700">13 หัวข้อมาตรฐานแผนการสอน สพฐ.</p>
          </div>
          <div className="divide-y divide-card-border text-xs">
            {[
              { num: "1", name: "มาตรฐานการเรียนรู้/ตัวชี้วัด", role: "เป็น Blueprint ของแผน — ทุกกิจกรรมต้องสอดคล้องกับตัวชี้วัด" },
              { num: "2", name: "สาระสำคัญ/Concept", role: "สรุป Big Idea — นักเรียนควรรู้อะไรหลังเรียนจบ" },
              { num: "3", name: "จุดประสงค์การเรียนรู้ K/P/A", role: "กำหนดเป้าหมาย 3 มิติ: ความรู้ / ทักษะ / เจตคติ วัดได้ชัดเจน" },
              { num: "4", name: "สมรรถนะสำคัญ RL/CT", role: "ระบุสมรรถนะที่พัฒนา: Reading Literacy ระดับ PISA / Computational Thinking" },
              { num: "5", name: "คุณลักษณะอันพึงประสงค์", role: "ใฝ่เรียนรู้ / มุ่งมั่นในการทำงาน / ซื่อสัตย์สุจริต ตาม สพฐ." },
              { num: "6", name: "เนื้อหาสาระ", role: "Key Concepts ที่สอน — ครบแต่กระชับ เชื่อมกับ Objectives ข้อ 3" },
              { num: "7", name: "ชิ้นงาน/ภาระงาน", role: "สิ่งที่นักเรียนผลิต — ต้องออกแบบก่อนกิจกรรม ไม่ใช่หลัง" },
              { num: "8", name: "กิจกรรมการเรียนรู้ (Active Learning)", role: "TPS หรือ 5E — ขั้นตอนชัดเจน Timeline สมเหตุสมผล" },
              { num: "9", name: "สื่อและแหล่งเรียนรู้", role: "รายการสื่อที่ต้องใช้จริง หาได้จริง ไม่เกินความจำเป็น" },
              { num: "10", name: "การวัดและประเมินผล K/P/A + RL/CT", role: "Formative + Summative ครบ 3 มิติ + RL/CT ระบุชัด" },
              { num: "11", name: "บันทึกหลังสอน", role: "Reflection ครูหลังสอน — ปัญหา / วิธีแก้ / แนวทางปรับปรุง" },
              { num: "12-13", name: "ความเห็นผู้บริหาร (2 ระดับ)", role: "หัวหน้ากลุ่มสาระ + ผู้บริหาร ลงนามรับรองคุณภาพแผน" },
            ].map((h) => (
              <div key={h.num} className="flex gap-3 px-4 py-2.5">
                <span className="w-8 h-5 rounded bg-indigo-100 text-indigo-700 text-[10px] font-bold flex items-center justify-center shrink-0">{h.num}</span>
                <div>
                  <p className="font-semibold text-text-primary">{h.name}</p>
                  <p className="text-text-muted mt-0.5">{h.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.1.2 Assessment Framework */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">6.1.2 Assessment Framework 5 มิติ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {[
            { label: "K — ความรู้", weight: "60–70%", desc: "ทดสอบ / Quiz ความถูกต้องของเนื้อหา", color: "border-blue-200 bg-blue-50", badge: "bg-blue-100 text-blue-700" },
            { label: "P — ทักษะ", weight: "ระดับ 3+", desc: "กระบวนการ ทักษะปฏิบัติ ประเมินด้วย Rubric", color: "border-green-200 bg-green-50", badge: "bg-green-100 text-green-700" },
            { label: "A — เจตคติ", weight: "ดี+", desc: "ความใส่ใจ ความร่วมมือ สังเกตพฤติกรรม", color: "border-amber-200 bg-amber-50", badge: "bg-amber-100 text-amber-700" },
            { label: "RL — Reading Literacy", weight: "L2+", desc: "PISA L1-L4 ระบุระดับที่ฝึก ฝังในกิจกรรม", color: "border-violet-200 bg-violet-50", badge: "bg-violet-100 text-violet-700" },
            { label: "CT — Computational Thinking", weight: "2+ องค์ประกอบ", desc: "Decomp/Pattern/Abstraction/Algorithm/Analysis/Eval", color: "border-indigo-200 bg-indigo-50", badge: "bg-indigo-100 text-indigo-700" },
          ].map((f) => (
            <div key={f.label} className={`rounded-xl border p-3 ${f.color}`}>
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${f.badge}`}>{f.weight}</span>
                <span className="text-xs font-bold text-text-primary">{f.label}</span>
              </div>
              <p className="text-[11px] text-text-secondary">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6.1.3 Top 5 AI ช่วยได้ */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">6.1.3 Top 5 ส่วนที่ AI ช่วยได้มากที่สุด</h2>
        <div className="space-y-2">
          {[
            { num: "1", title: "เขียนวัตถุประสงค์ K/P/A", detail: "AI เขียนได้ทันทีถ้าบอกหัวข้อและระดับชั้น — ได้ Draft ครบ 3 มิติใน 30 วินาที" },
            { num: "2", title: "ออกแบบกิจกรรม TPS/5E", detail: "AI สร้าง Activity Draft พร้อม Timeline ใน 30 วินาที — ครูปรับบริบทและเพิ่ม GM" },
            { num: "3", title: "สร้าง Rubric ประเมิน", detail: "AI สร้าง 4-level Rubric พร้อมตัวอย่างงานระดับ 4 และ 2 ทันที" },
            { num: "4", title: "เขียน Reflection Prompt", detail: "AI สร้างคำถาม Reflection ที่กระตุ้น Higher Thinking สำหรับบันทึกหลังสอน" },
            { num: "5", title: "บูรณาการ RL+CT+PERMA", detail: "AI Mapping RL Level, CT Component, PERMA ลงในแผนที่มีอยู่ได้อย่างเป็นระบบ" },
          ].map((s) => (
            <div key={s.num} className="flex items-start gap-3 p-3 rounded-xl border border-indigo-100 bg-indigo-50/50">
              <span className="w-6 h-6 rounded-lg bg-indigo-700 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">{s.num}</span>
              <div>
                <p className="text-sm font-semibold text-text-primary">{s.title}</p>
                <p className="text-xs text-text-secondary">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prompt Templates */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">Prompt Templates สำหรับโครงสร้างแผน</h2>
        <div className="space-y-3">
          {[
            {
              label: "Prompt 1: สร้างโครงสร้างแผนการสอนครบ 13 หัวข้อ",
              prompt: "สร้างโครงสร้างแผนการจัดการเรียนรู้มาตรฐาน 13 หัวข้อสำหรับ | วิชา: [ชื่อวิชา] | หน่วย: [ชื่อหน่วย] | ระดับ: [ชั้น] | เวลา: [จำนวน] ชั่วโมง | ให้ครอบคลุม: K/P/A Objectives / กิจกรรม TPS หรือ 5E / Rubric / RL+CT Integration → ผลลัพธ์: แผน Draft ครบ 13 หัวข้อ พร้อม Review",
            },
            {
              label: "Prompt 2: เขียน K/P/A Learning Objectives",
              prompt: "เขียน Learning Objectives แบบ K/P/A สำหรับหน่วย [หัวข้อ] วิชา [วิชา] | K: 3 ข้อ ระดับ Remember-Understand | P: 2 ข้อ ระดับ Apply-Analyze | A: 2 ข้อ ด้านเจตคติ | เขียนให้ชัดเจน วัดได้ สอดคล้องกับมาตรฐาน สพฐ. → ผลลัพธ์: K/P/A Objectives ครบ 7 ข้อ พร้อมระบุระดับ Bloom's แต่ละข้อ",
            },
            {
              label: "Prompt 3: เชื่อมโยงแผนกับมาตรฐาน สพฐ.",
              prompt: "เชื่อมโยงแผนการสอนต่อไปนี้กับมาตรฐานการเรียนรู้หลักสูตรแกนกลาง 2551 | วิชา: [วิชา] | ระดับ: [ชั้น] | หน่วย: [หัวข้อ] | ระบุ: มาตรฐาน / ตัวชี้วัด / สมรรถนะสำคัญ / คุณลักษณะอันพึงประสงค์ → ผลลัพธ์: Curriculum Alignment Document พร้อมยื่นหัวหน้ากลุ่มสาระ",
            },
            {
              label: "Prompt 4: ปรับ Assessment ให้ครบ K/P/A",
              prompt: "วิเคราะห์การวัดผลในแผนนี้ว่าครบ K/P/A หรือไม่: [วางส่วนการวัดผลจากแผนการสอน] | ถ้าขาด: เสนอเครื่องมือวัดผลที่เหมาะสมสำหรับมิติที่ขาด พร้อมวิธีการใช้ → ผลลัพธ์: Assessment Plan ครบ K/P/A พร้อมใช้ในแผนจริง",
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
          <Wrench className="w-4.5 h-4.5 text-indigo-700" />
          กิจกรรม Workshop (3 หัวข้อ · รวม ~65 นาที)
        </h2>
        <div className="space-y-4">
          {[
            {
              num: "1", title: "Audit แผนการสอนของตนเองด้วย 13 หัวข้อ",
              time: "20 นาที", format: "เดี่ยว",
              goal: "ระบุหัวข้อที่ครบ ขาด และต้องพัฒนา",
              steps: [
                "นำแผนการสอนที่ใช้บ่อย 1 แผน มาตรวจสอบว่ามีครบ 13 หัวข้อไหม",
                "ทำ Checklist ระบุว่าหัวข้อใดครบ / ไม่ครบ / ต้องพัฒนา",
                "ระบุ 3 หัวข้อที่ต้องการพัฒนาที่สุด และ AI จะช่วยได้อย่างไร",
                "เปรียบเทียบกับเพื่อนครู: แผนของใครครบกว่า? เรียนรู้อะไรได้บ้าง?",
              ],
            },
            {
              num: "2", title: "เขียน K/P/A Objectives ด้วย AI",
              time: "20 นาที", format: "เดี่ยว",
              goal: "เขียน K/P/A Objectives ที่พร้อมใช้ในแผนจริง",
              steps: [
                "เลือกหน่วยการเรียนรู้ 1 หน่วยที่จะสอน",
                "ใช้ AI เขียนวัตถุประสงค์ K/P/A ครบ 3 มิติ (อย่างน้อย 2 ข้อต่อมิติ)",
                "ตรวจสอบด้วย Bloom's Taxonomy ว่าครอบคลุม Remember-Create ไหม",
                "ตรวจสอบ: วัดได้จริงไหม? Rubric สำหรับ P และ A มีหน้าตาอย่างไร?",
              ],
            },
            {
              num: "3", title: "สร้างโครงสร้างแผน 13 หัวข้อด้วย AI",
              time: "25 นาที", format: "เดี่ยว → Peer Check",
              goal: "สร้างแผน Draft ครบ 13 หัวข้อพร้อม Review",
              steps: [
                "ใช้ Mega Prompt: 'สร้างโครงสร้างแผนการสอนวิชา [วิชา] หน่วย [หน่วย] ระดับ [ชั้น] ครบ 13 หัวข้อ'",
                "ตรวจสอบและเติมเต็มส่วนที่ขาดด้วยความรู้ของตนเอง",
                "ประเมินกับเพื่อนครูว่า K/P/A ครบและสมเหตุสมผลไหม",
                "ระบุ 2 ส่วนที่จะนำไปพัฒนาต่อใน Workshop 6.3",
              ],
            },
          ].map((ws) => (
            <div key={ws.num} className="rounded-xl border border-indigo-200 bg-white overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 bg-indigo-50 border-b border-indigo-100">
                <span className="w-7 h-7 rounded-lg bg-indigo-700 text-white text-xs font-bold flex items-center justify-center">W{ws.num}</span>
                <div>
                  <p className="text-sm font-bold text-text-primary">{ws.title}</p>
                  <p className="text-[11px] text-indigo-500">{ws.time} · {ws.format}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs font-medium text-indigo-700 mb-2">🎯 {ws.goal}</p>
                <ul className="space-y-1.5">
                  {ws.steps.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                      <span className="w-4 h-4 rounded bg-indigo-100 text-indigo-700 text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
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
          <Lightbulb className="w-4.5 h-4.5 text-indigo-700" />
          Key Takeaways
        </h2>
        <div className="space-y-2">
          {[
            "13 หัวข้อไม่ใช่แค่รูปแบบ — แต่ละหัวข้อมีหน้าที่เฉพาะในการออกแบบการสอน",
            "K/P/A ทำให้แผนครบมิติ — ไม่ใช่แค่วัดความรู้แต่วัดทักษะและเจตคติด้วย",
            "AI ช่วยได้มากที่สุดใน 5 ส่วน — Objectives, กิจกรรม, Rubric, Reflection, RL+CT+PERMA",
            "แผนดีต้องสอดคล้องมาตรฐาน — ตัวชี้วัดจาก สพฐ. เป็น Blueprint ของแผน",
            "Template + AI = ความเร็ว — ครูที่มี Template ที่ดีใช้ AI ได้เร็วกว่า 3–5 เท่า",
          ].map((k, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-indigo-50 border border-indigo-100">
              <span className="w-5 h-5 rounded-full bg-indigo-700 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-text-secondary">{k}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-indigo-300 bg-indigo-700 p-4 text-white">
          <p className="text-xs font-bold text-indigo-200 mb-1">🎯 ภารกิจต่อเนื่อง (Take-Home Mission 6.1)</p>
          <p className="text-sm">นำแผนการสอนของตนเองมาทำ K/P/A Analysis ระบุว่าแต่ละวัตถุประสงค์เป็น K, P หรือ A และหาว่ามิติใดที่ขาดหรือน้อยเกินไป นำผลมาแลกเปลี่ยนในหัวข้อ 6.2</p>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-card-border">
        <Link href="/manual/module-5/5-4" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">5.4 AI ช่วยออกแบบ GM + PERMA</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <Link href="/manual/module-6/6-2" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <div className="text-right">
            <p className="text-[10px] text-text-muted">ถัดไป</p>
            <p className="font-medium">6.2 ชิ้นงานจากแผนการสอนจริง</p>
          </div>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
