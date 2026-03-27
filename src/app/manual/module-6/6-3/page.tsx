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

export default function Module63Page() {
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
        <span className="text-text-secondary">6.3 Mega Prompt เขียนแผน</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-indigo-300 bg-indigo-100 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-indigo-200 flex items-center justify-center shrink-0">
            <FileEdit className="w-6 h-6 text-indigo-700" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-indigo-700">โมดูล 6 · หัวข้อ 6.3</span>
              <span className="flex items-center gap-1 text-xs text-indigo-500">
                <Clock className="w-3.5 h-3.5" /> 2 ชม. · 4 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">Mega Prompt เขียนแผนด้วย AI</h1>
            <p className="text-sm font-medium text-indigo-700/80 mb-2">Mega Prompt for AI-Assisted Lesson Plan Writing</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              เขียนแผนการสอนฉบับสมบูรณ์ด้วย AI ใน 30 นาที ด้วย Mega Prompt Template + Chain Prompting + Iterative Refinement 3 รอบ
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
            "เข้าใจโครงสร้าง Mega Prompt 6 ส่วนและเหตุผลของแต่ละส่วน",
            "ใช้ Mega Prompt เขียนแผนการสอนฉบับสมบูรณ์ด้วย AI ได้ใน 30 นาที",
            "ใช้ Chain Prompting สร้างแผนทีละส่วนตามลำดับที่ถูกต้อง",
            "Refine AI Output ด้วย 3 รอบ: Content → Format → Assessment",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center text-[10px] font-bold text-indigo-700 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 6.3.1 Anatomy of Mega Prompt */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">6.3.1 Anatomy of Mega Prompt — 6 ส่วนสำคัญ</h2>
        <p className="text-sm text-text-secondary mb-4">
          Mega Prompt ที่ดีประกอบด้วย 6 ส่วน — แต่ละส่วนมีหน้าที่เฉพาะ ยิ่งระบุชัดเจน AI Output ยิ่งตรงกับที่ต้องการ
        </p>
        <div className="space-y-2">
          {[
            { part: "Role", icon: "👤", desc: "ให้ AI เป็น 'ครูผู้เชี่ยวชาญและนักออกแบบหลักสูตร'", why: "AI จะใช้ Knowledge ด้านการสอน ไม่ใช่แค่ข้อมูลทั่วไป" },
            { part: "Context", icon: "🏫", desc: "บอกบริบทห้องเรียน: โรงเรียน / ชั้น / จำนวนนักเรียน / สภาพห้อง", why: "AI จะ Tailor Output ให้เหมาะกับนักเรียนกลุ่มนั้นโดยเฉพาะ" },
            { part: "Task", icon: "📋", desc: "ระบุงานที่ต้องการชัดเจน: วิชา / หน่วย / เวลา / รูปแบบ TPS หรือ 5E", why: "ยิ่งระบุชัด Output ยิ่งตรงกับที่ต้องการ ลด Iteration" },
            { part: "Format", icon: "📄", desc: "บอก Template ที่ต้องการ: 13 หัวข้อ สพฐ. + K/P/A + RL/CT", why: "AI จะ Output ตาม Structure ที่กำหนด ไม่ต้องปรับรูปแบบใหม่" },
            { part: "Constraints", icon: "⚠️", desc: "ข้อจำกัดสำคัญ: ต้องบูรณาการ RL L2-L3 + CT อย่างน้อย 3 องค์ประกอบ", why: "บอก AI ว่าอะไรที่ห้ามทำหรือต้องระวัง — กรองสิ่งที่ไม่ต้องการ" },
            { part: "Examples", icon: "💡", desc: "ตัวอย่างที่ดี (Optional) — วางแผนเก่าหรือส่วนของแผนที่ดีมาเป็นต้นแบบ", why: "AI จะ Follow Style ของตัวอย่างที่ให้ — ผลลัพธ์ใกล้เคียงกับที่ต้องการที่สุด" },
          ].map((s) => (
            <div key={s.part} className="rounded-xl border border-indigo-100 bg-white p-3.5">
              <div className="flex items-start gap-3">
                <span className="text-base shrink-0 mt-0.5">{s.icon}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-black text-indigo-700">{s.part}:</span>
                    <span className="text-xs text-text-primary">{s.desc}</span>
                  </div>
                  <p className="text-[11px] text-text-muted">→ {s.why}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6.3.2 Mega Prompt Template */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">6.3.2 Mega Prompt Template สำหรับแผนครบ 13 หัวข้อ</h2>
        <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-4 mb-4">
          <p className="text-xs font-bold text-indigo-700 mb-3">Mega Prompt สำเร็จรูป — เติม [ ] แล้วใช้ได้ทันที</p>
          <div className="space-y-2 text-xs font-mono">
            {[
              ["Role:", "คุณเป็นครูผู้เชี่ยวชาญและนักออกแบบหลักสูตรระดับมัธยมศึกษา"],
              ["Context:", "โรงเรียน [ชื่อ] ระดับ [ชั้น] นักเรียน [จำนวน] คน ห้องเรียน [สภาพห้อง]"],
              ["Task:", "เขียนแผนการจัดการเรียนรู้ วิชา [วิชา] หน่วย [หน่วย] เวลา [ชม.] ชั่วโมง"],
              ["Format:", "ตาม 13 หัวข้อมาตรฐาน สพฐ. + K/P/A Objectives + TPS หรือ 5E"],
              ["Constraints:", "ต้องบูรณาการ RL (PISA L2-L3) + CT (อย่างน้อย 3 องค์ประกอบ)"],
              ["Output:", "เอกสาร Word format พร้อม Rubric และ Exit Ticket"],
            ].map(([label, val]) => (
              <div key={label} className="flex gap-2">
                <span className="text-indigo-700 font-bold w-20 shrink-0">{label}</span>
                <span className="text-text-secondary">{val}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs text-text-muted ml-1">เวลาเฉลี่ย: 30 นาทีจากกรอก Prompt จนได้ Draft แผนครบ 13 หัวข้อ</p>
      </section>

      {/* 6.3.3 Chain Prompting */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">6.3.3 Chain Prompting — สร้างแผนทีละส่วน</h2>
        <p className="text-sm text-text-secondary mb-4">
          Chain Prompting คือการส่ง Prompt เป็นลำดับ โดย Output ของ Prompt ก่อนหน้าเป็น Input ของ Prompt ถัดไป — ได้แผนที่สอดคล้องกันทุกส่วน
        </p>
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-indigo-100" />
          <div className="space-y-3">
            {[
              { step: "1", prompt: "Prompt 1: สร้าง K/P/A Objectives", purpose: "กำหนดจุดหมายก่อนออกแบบกิจกรรม — เป็น Input ของ Prompt 2" },
              { step: "2", prompt: "Prompt 2: ออกแบบกิจกรรม TPS/5E", purpose: "ใช้ Objectives เป็น Input — กิจกรรมตอบโจทย์ทุก Objective" },
              { step: "3", prompt: "Prompt 3: สร้าง Rubric K/P/A", purpose: "ใช้ Objectives + Activities เป็น Input — Rubric ตรงกับงาน" },
              { step: "4", prompt: "Prompt 4: เพิ่ม RL+CT Integration", purpose: "ปรับกิจกรรมเดิมให้บูรณาการ RL Level + CT Component ชัดขึ้น" },
              { step: "5", prompt: "Prompt 5: เขียน Reflection Questions", purpose: "ใช้ทั้งหมดเพื่อสร้าง Closing ที่สมบูรณ์สำหรับบันทึกหลังสอน" },
            ].map((c) => (
              <div key={c.step} className="flex items-start gap-4 pl-2">
                <span className="w-7 h-7 rounded-full bg-indigo-700 text-white text-xs font-bold flex items-center justify-center shrink-0 z-10">{c.step}</span>
                <div className="flex-1 rounded-xl border border-indigo-100 bg-white p-3">
                  <p className="text-xs font-semibold text-indigo-700 mb-0.5">{c.prompt}</p>
                  <p className="text-[11px] text-text-secondary">{c.purpose}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.3.4 Iterative Refinement */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">6.3.4 Iterative Refinement — 3 รอบ</h2>
        <div className="space-y-3">
          {[
            {
              round: "รอบ 1", title: "Content — ปรับเนื้อหา",
              color: "border-blue-200 bg-blue-50", badge: "bg-blue-100 text-blue-700",
              prompts: ["'เพิ่มตัวอย่างจากบริบทไทย'", "'ปรับระดับความยากให้เหมาะ [ชั้น]'", "'เชื่อมกับชีวิตประจำวันของนักเรียน [จังหวัด/ชุมชน]'"],
            },
            {
              round: "รอบ 2", title: "Format — ปรับรูปแบบ",
              color: "border-green-200 bg-green-50", badge: "bg-green-100 text-green-700",
              prompts: ["'จัด Timeline ให้ชัดขึ้น — ระบุเวลาแต่ละกิจกรรม'", "'เพิ่มคำถามกระตุ้นสำหรับแต่ละขั้น 5E'", "'จัดรูปแบบให้อ่านง่าย แยกส่วน TPS/5E ชัดเจน'"],
            },
            {
              round: "รอบ 3", title: "Assessment — ปรับการวัดผล",
              color: "border-amber-200 bg-amber-50", badge: "bg-amber-100 text-amber-700",
              prompts: ["'Rubric ต้องชัดกว่านี้ — เพิ่ม Behavioral Descriptor ระดับ 2 และ 4'", "'เพิ่ม Exit Ticket 3 ข้อ (RL/CT/PERMA-A)'", "'Formative Assessment ในแต่ละขั้นมีหรือไม่? เพิ่มถ้าขาด'"],
            },
          ].map((r) => (
            <div key={r.round} className={`rounded-xl border p-4 ${r.color}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${r.badge}`}>{r.round}</span>
                <span className="text-sm font-bold text-text-primary">{r.title}</span>
              </div>
              <ul className="space-y-1">
                {r.prompts.map((p, i) => (
                  <li key={i} className="flex gap-1.5 text-xs text-text-secondary font-mono">
                    <span className="text-text-muted shrink-0">▸</span>{p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-indigo-100 bg-indigo-50/50 p-3">
          <p className="text-xs font-semibold text-indigo-700 mb-1">⚡ เวลาเฉลี่ยต่อรอบ: 5–10 นาที · รวม 3 รอบ = 30–45 นาที</p>
          <p className="text-xs text-text-secondary">อย่าหยุด Refine นานเกิน 5 นาทีต่อ Iteration — ถ้าติด ให้ขยับไป Iteration ถัดไปแล้วค่อยกลับมา</p>
        </div>
      </section>

      {/* Prompt Templates */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">Prompt Templates สำหรับ Mega Prompt</h2>
        <div className="space-y-3">
          {[
            {
              label: "Prompt 1: Mega Prompt สร้างแผนครบ 13 หัวข้อ",
              prompt: "Role: คุณเป็นครูผู้เชี่ยวชาญและนักออกแบบหลักสูตรระดับมัธยมศึกษา | Context: โรงเรียน [ชื่อ] ระดับ [ชั้น] นักเรียน [จำนวน] คน | Task: เขียนแผนการจัดการเรียนรู้ วิชา [วิชา] หน่วย [หน่วย] เวลา [ชม.] | Format: 13 หัวข้อ สพฐ. + K/P/A + TPS/5E | Constraints: RL L2-L3 + CT 3 องค์ประกอบ → ผลลัพธ์: Draft แผนครบ 13 หัวข้อ",
            },
            {
              label: "Prompt 2: Chain — สร้าง TPS/5E Activity จาก Objectives",
              prompt: "จากวัตถุประสงค์ K/P/A ต่อไปนี้: [วาง K/P/A Objectives] | ออกแบบกิจกรรม Think-Pair-Share หรือ 5E ที่ตอบโจทย์ทุก Objective | ระบุเวลาแต่ละขั้น คำถามกระตุ้น และ Success Criteria → ผลลัพธ์: Activity Blueprint ที่สอดคล้องกับ Objectives ทุกข้อ",
            },
            {
              label: "Prompt 3: Refine — เพิ่ม RL+CT ในแผนที่มีอยู่",
              prompt: "เพิ่ม RL และ CT Integration ในแผนการสอนต่อไปนี้: [วางแผน Draft] | RL: ระบุ Level PISA L1-L4 ในแต่ละกิจกรรม | CT: ระบุองค์ประกอบ CT ที่ฝึกในแต่ละขั้น | ห้ามเปลี่ยนโครงสร้างหลักหรือ Timeline → ผลลัพธ์: แผนเดิมที่บูรณาการ RL+CT อย่างชัดเจน",
            },
            {
              label: "Prompt 4: สร้าง Personal Prompt Template",
              prompt: "ช่วยสร้าง Prompt Template ส่วนตัวสำหรับครู [วิชา] ระดับ [ชั้น] โรงเรียน [บริบท] | Template ต้องใช้ซ้ำได้ทุกหน่วย ปรับแค่ [วิชา]/[หน่วย]/[เวลา] | รวม Role+Context+Format+Constraints ที่เหมาะกับบริบทของฉัน → ผลลัพธ์: Personal Mega Prompt Template พร้อมใช้ทันที",
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
          กิจกรรม Workshop (3 หัวข้อ · รวม ~70 นาที)
        </h2>
        <div className="space-y-4">
          {[
            {
              num: "1", title: "เขียนแผนครบ 13 หัวข้อด้วย Mega Prompt",
              time: "30 นาที", format: "เดี่ยว (Sprint)",
              goal: "Draft แผนการสอนครบ 13 หัวข้อพร้อม Peer Review",
              steps: [
                "กรอก Mega Prompt Template ด้วยบริบทของตนเอง",
                "Run Prompt และรับ Draft แผน (ไม่หยุด Refine นานเกิน 5 นาที)",
                "ทำ 3-Iteration Refine: รอบ 1 Content → รอบ 2 Format → รอบ 3 Assessment",
                "ตรวจสอบ: K/P/A ครบ? RL+CT ระบุชัด? Timeline สมเหตุสมผล?",
              ],
            },
            {
              num: "2", title: "Chain Prompting Sprint",
              time: "20 นาที", format: "เดี่ยว",
              goal: "ฝึก Chain Prompting สร้างแผนทีละส่วน",
              steps: [
                "เลือก 1 ส่วนในแผนที่ต้องการพัฒนา (เช่น กิจกรรมหรือ Rubric)",
                "ใช้ Chain Prompting 3 ขั้น: Objectives → Activity → Rubric",
                "เปรียบเทียบผล: Chain Prompting vs. Mega Prompt — ต่างกันอย่างไร?",
              ],
            },
            {
              num: "3", title: "สร้าง Personal Prompt Template",
              time: "20 นาที", format: "เดี่ยว",
              goal: "Personal Mega Prompt Template ที่ใช้ซ้ำได้ทุกหน่วย",
              steps: [
                "ระบุบริบทคงที่ของตนเอง: โรงเรียน ชั้น ลักษณะนักเรียน",
                "สร้าง Personal Prompt Template ที่มี Role+Context ตายตัว",
                "ทดสอบ Template กับหน่วยใหม่ — ปรับแค่ Task ได้ผลลัพธ์ที่ดีไหม?",
                "บันทึก Template ไว้ใน Notion/Google Keep สำหรับใช้ทุกครั้ง",
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
            "Mega Prompt 6 ส่วน (Role/Context/Task/Format/Constraints/Examples) ทำให้ AI Output ตรงและครบที่สุด",
            "Chain Prompting ดีกว่า Single Prompt — ทุกส่วนสอดคล้องกันเพราะ Output แต่ละขั้นเชื่อมกัน",
            "3 Iterations (Content → Format → Assessment) เพียงพอสำหรับแผนคุณภาพสูง",
            "Personal Template ลงทุนครั้งเดียว ใช้ทุกหน่วย — ปรับแค่ Task เท่านั้น",
            "AI Draft คือจุดเริ่มต้น ไม่ใช่ Final — ครูเพิ่ม Context ที่ AI ไม่รู้",
          ].map((k, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-indigo-50 border border-indigo-100">
              <span className="w-5 h-5 rounded-full bg-indigo-700 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-text-secondary">{k}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-card-border">
        <Link href="/manual/module-6/6-2" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">6.2 ชิ้นงานจากแผนการสอนจริง</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <Link href="/manual/module-6/6-4" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <div className="text-right">
            <p className="text-[10px] text-text-muted">ถัดไป</p>
            <p className="font-medium">6.4 Workshop + Peer Review</p>
          </div>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
