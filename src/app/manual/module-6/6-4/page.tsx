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

export default function Module64Page() {
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
        <span className="text-text-secondary">6.4 Workshop + Peer Review</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-indigo-300 bg-indigo-100 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-indigo-200 flex items-center justify-center shrink-0">
            <FileEdit className="w-6 h-6 text-indigo-700" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-indigo-700">โมดูล 6 · หัวข้อ 6.4</span>
              <span className="flex items-center gap-1 text-xs text-indigo-500">
                <Clock className="w-3.5 h-3.5" /> 1.5 ชม. · 5 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">Workshop: เขียนแผน + Peer Review</h1>
            <p className="text-sm font-medium text-indigo-700/80 mb-2">Lesson Plan Writing Sprint + Structured Peer Review Protocol</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              เขียนแผนการสอนด้วย AI ใน 30 นาที ตรวจสอบด้วยเกณฑ์ 10 ข้อ และ Peer Review ด้วย STAR Framework เพื่อให้ได้ Final Plan พร้อมนำไปสอนจริง
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
            "เขียนแผนการสอนฉบับสมบูรณ์ด้วย AI ใน 30 นาทีได้",
            "ประเมินแผนตนเองและแผนเพื่อนด้วยเกณฑ์ 10 ข้อ (0–20 คะแนน)",
            "ให้ Peer Review Feedback ด้วย STAR Framework ได้",
            "ปรับแผนตาม Feedback และสร้าง Final Lesson Plan พร้อมสอนจริง",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center text-[10px] font-bold text-indigo-700 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 6.4.1 Peer Review Protocol */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">6.4.1 Peer Review Protocol 6 ขั้นตอน</h2>
        <p className="text-sm text-text-secondary mb-4">
          Peer Review ที่มีโครงสร้างชัดเจนดีกว่า Self-review 3 เท่า — Blind Spot หายเพราะมีคู่ที่มองจากมุมอื่น
        </p>
        <div className="space-y-2">
          {[
            { step: "1", title: "Read (10 นาที)", desc: "Reviewer อ่านแผนทั้งหมดโดยไม่หยุดตรงไหน — อ่านเพื่อเข้าใจภาพรวมก่อน", icon: "📖" },
            { step: "2", title: "Silently Note (5 นาที)", desc: "Reviewer จดโน้ต: จุดแข็ง 2–3 ข้อ + สิ่งที่น่าพัฒนา 2–3 ข้อ ยังไม่บอกผู้เขียน", icon: "📝" },
            { step: "3", title: "Give Feedback: STAR (10 นาที)", desc: "Reviewer ให้ Feedback ตาม STAR Framework — ผู้เขียนฟังอย่างเดียว ไม่โต้แย้ง", icon: "⭐" },
            { step: "4", title: "Clarify (5 นาที)", desc: "ผู้เขียนถามคำถามเพื่อให้ Feedback ชัดขึ้น — Reviewer ตอบอย่างตรงไปตรงมา", icon: "❓" },
            { step: "5", title: "Revise (15 นาที)", desc: "ผู้เขียนปรับแผนตาม Feedback ที่เห็นด้วย — ใช้ AI ช่วยถ้าต้องการ", icon: "✏️" },
            { step: "6", title: "Share Out (5 นาที)", desc: "ผู้เขียน Share สิ่งที่ปรับและเหตุผลกับกลุ่มใหญ่ — เรียนรู้ร่วมกัน", icon: "🗣️" },
          ].map((s) => (
            <div key={s.step} className="flex items-start gap-3 p-3 rounded-xl border border-indigo-100 bg-white">
              <span className="text-base shrink-0 mt-0.5">{s.icon}</span>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs font-black text-indigo-700">ขั้น {s.step}:</span>
                  <span className="text-xs font-semibold text-text-primary">{s.title}</span>
                </div>
                <p className="text-[11px] text-text-secondary">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6.4.2 Lesson Plan Criteria 10 ข้อ */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">6.4.2 เกณฑ์ประเมิน Lesson Plan 10 ข้อ (0–20 คะแนน)</h2>
        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <div className="px-4 py-2 bg-indigo-50 border-b border-indigo-100">
            <p className="text-xs font-semibold text-indigo-700">แต่ละข้อให้คะแนน 0–2 · คะแนนรวม 20 คะแนน · ผ่านเกณฑ์ที่ 16+</p>
          </div>
          <div className="divide-y divide-card-border text-xs">
            {[
              { num: "1", criterion: "Objectives ชัดเจน", check: "K/P/A ครบ? วัดได้? สอดคล้องมาตรฐาน?" },
              { num: "2", criterion: "กิจกรรม Active Learning", check: "TPS/5E ชัดเจน? นักเรียน Active มากกว่า 60%?" },
              { num: "3", criterion: "RL บูรณาการ", check: "มี Reading Literacy ระดับ L2+ อย่างน้อย 1 ส่วน?" },
              { num: "4", criterion: "CT บูรณาการ", check: "มี CT อย่างน้อย 2 องค์ประกอบชัดเจน?" },
              { num: "5", criterion: "PERMA ครอบคลุม", check: "มี P/E/R อย่างน้อย 3 องค์ประกอบ?" },
              { num: "6", criterion: "Assessment ครบ", check: "Rubric ชัด? K/P/A? Formative+Summative?" },
              { num: "7", criterion: "Timeline สมเหตุสมผล", check: "เวลาแต่ละส่วนสมดุล? ไม่ Rush? ไม่ว่างเกิน?" },
              { num: "8", criterion: "สื่อ/วัสดุ พร้อม", check: "รายการสื่อครบ? หาได้จริง? ไม่ต้องการสิ่งที่ไม่มี?" },
              { num: "9", criterion: "Growth Mindset", check: "มีคำพูดครู GM? Error-positive? Process-praise?" },
              { num: "10", criterion: "นำไปใช้ได้จริง", check: "ครูคนอื่น Pick up & Teach ได้เลยไหม?" },
            ].map((c) => (
              <div key={c.num} className="flex gap-3 px-4 py-2.5">
                <span className="w-6 h-5 rounded bg-indigo-100 text-indigo-700 text-[10px] font-bold flex items-center justify-center shrink-0">{c.num}</span>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <span className="font-semibold text-text-primary">{c.criterion}</span>
                    <span className="text-[10px] text-indigo-700 bg-indigo-50 rounded px-1.5 py-0.5 shrink-0">0–2 คะแนน</span>
                  </div>
                  <p className="text-text-muted mt-0.5">{c.check}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.4.3 STAR Feedback */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">6.4.3 STAR Feedback Framework</h2>
        <div className="space-y-2 mb-4">
          {[
            { letter: "S", name: "Strength — จุดแข็ง", color: "border-green-200 bg-green-50", badge: "bg-green-100 text-green-700", example: "'กิจกรรม Pair ในขั้น Explore ดีมาก — นักเรียนได้คิดก่อนฟัง'" },
            { letter: "T", name: "Thinking — ข้อสังเกต/ข้อเสนอแนะ", color: "border-blue-200 bg-blue-50", badge: "bg-blue-100 text-blue-700", example: "'ลองเพิ่ม CT Decomposition ในขั้น Think เพื่อให้นักเรียนแบ่งปัญหาก่อนคิด...'" },
            { letter: "A", name: "Action — สิ่งที่แนะนำให้ทำ", color: "border-amber-200 bg-amber-50", badge: "bg-amber-100 text-amber-700", example: "'ปรับ Rubric Criteria ข้อ 3 ให้ Specific ขึ้น เช่น ระบุ Bloom's Level ที่ต้องการ'" },
            { letter: "R", name: "Result — ผลที่คาดหวัง", color: "border-violet-200 bg-violet-50", badge: "bg-violet-100 text-violet-700", example: "'ถ้าปรับแล้ว นักเรียนจะเห็นภาพรวม CT ชัดขึ้น และตอบ Exit Ticket ได้ดีกว่า'" },
          ].map((s) => (
            <div key={s.letter} className={`rounded-xl border p-3.5 ${s.color}`}>
              <div className="flex items-start gap-3">
                <span className={`text-base font-black px-2 py-0.5 rounded shrink-0 ${s.badge}`}>{s.letter}</span>
                <div>
                  <p className="text-xs font-bold text-text-primary mb-1">{s.name}</p>
                  <p className="text-[11px] text-text-muted italic">{s.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-3">
          <p className="text-xs font-semibold text-indigo-700 mb-2">✅ Iteration Checklist หลัง Peer Review</p>
          <ul className="space-y-1 text-xs text-text-secondary">
            {[
              "รับ Feedback ที่เห็นด้วย และระบุ Justification สำหรับแต่ละข้อ",
              "ปรับอย่างน้อย 2 จุดตาม STAR Feedback",
              "ตรวจสอบ 10-Criteria อีกครั้งหลังปรับ — คะแนนเพิ่มขึ้นไหม?",
              "ส่ง Final Plan ผ่าน Google Drive / LMS ของโรงเรียน",
            ].map((item, i) => (
              <li key={i} className="flex gap-1.5">
                <span className="text-green-600 shrink-0">✓</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Prompt Templates */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">Prompt Templates สำหรับ Peer Review</h2>
        <div className="space-y-3">
          {[
            {
              label: "Prompt 1: AI เป็น Peer Reviewer",
              prompt: "รีวิวแผนการสอนต่อไปนี้ตาม Criteria 10 ข้อ ให้คะแนน 0-2 แต่ละข้อ: [วางแผนการสอนที่ต้องการรีวิว] | สรุป: จุดแข็ง 3 ข้อ + สิ่งที่ต้องปรับ 3 ข้อ พร้อมวิธีแก้ที่เฉพาะเจาะจง → ผลลัพธ์: Peer Review Report พร้อม Action Items ชัดเจน",
            },
            {
              label: "Prompt 2: ปรับแผนตาม Peer Feedback",
              prompt: "Feedback จาก Peer Review บอกว่า: [สรุป Feedback ที่ได้รับ] | ปรับแผนการสอนต่อไปนี้ตาม Feedback นั้น: [วางแผน Draft] | อธิบายการเปลี่ยนแปลงแต่ละจุดและเหตุผล → ผลลัพธ์: Revised Lesson Plan พร้อม Change Log",
            },
            {
              label: "Prompt 3: สร้าง Peer Review Form",
              prompt: "สร้าง Peer Review Form สำหรับการ Review แผนการสอนระหว่างครู | ใช้ STAR Framework + Criteria 10 ข้อ | ให้กรอกได้ใน 10 นาที มีทั้งส่วน Checklist และ Open-ended → ผลลัพธ์: Peer Review Form ที่ใช้ได้ในโรงเรียน พร้อม Print",
            },
            {
              label: "Prompt 4: สร้าง Lesson Plan Showcase Package",
              prompt: "จัด Format แผนการสอนต่อไปนี้ให้สวยงามและอ่านง่ายสำหรับการแชร์กับเพื่อนครู: [วางแผนสุดท้ายที่ Finalize แล้ว] | ให้มี: Executive Summary 1 หน้า + แผนเต็ม + Rubric + Quick-Start Guide → ผลลัพธ์: Shareable Lesson Plan Package ที่ครูอื่น Pick-and-Teach ได้เลย",
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
          กิจกรรม Workshop (3 หัวข้อ · รวม ~95 นาที)
        </h2>
        <div className="space-y-4">
          {[
            {
              num: "1", title: "เขียนแผนด้วย AI — 30 นาที Sprint",
              time: "30 นาที", format: "เดี่ยว",
              goal: "Draft แผนการสอนที่พร้อม Peer Review",
              steps: [
                "เปิด AI Tool และใช้ Personal Prompt Template จากหัวข้อ 6.3",
                "เติม Context ของตนเองและ Run — อย่าหยุด Refine นานเกิน 5 นาทีต่อ Iteration",
                "ทำ 3-Iteration Refine: Content → Format → Assessment",
                "ประเมินตนเองด้วย 10-Criteria ก่อน Peer Review",
              ],
            },
            {
              num: "2", title: "Peer Review Round — Protocol 6 ขั้น",
              time: "45 นาที", format: "คู่",
              goal: "Written STAR Feedback 1 ชุด",
              steps: [
                "จับคู่กับเพื่อนครู 1 คน ที่สอนต่างวิชาหรือต่างระดับ",
                "ทำตาม Protocol ครบ 6 ขั้น — วิทยากรจับเวลาแต่ละขั้น",
                "Reviewer: ใช้ STAR Framework ในการให้ Feedback ทุกครั้ง",
                "สลับบทบาท: เป็น Reviewer ให้เพื่อน แล้วเพื่อน Review แผนของเรา",
              ],
            },
            {
              num: "3", title: "Revise & Finalize Plan",
              time: "20 นาที", format: "เดี่ยว → Share Out",
              goal: "Final Lesson Plan ที่พร้อมนำไปสอนจริง",
              steps: [
                "เลือก Feedback 2–3 ข้อที่เห็นด้วยและจะปรับ",
                "ปรับแผนตาม Feedback โดยใช้ AI หากต้องการ",
                "Finalize และ Share แผนสุดท้ายกับกลุ่ม พร้อมบอกว่าปรับอะไรและเพราะอะไร",
                "บันทึก: ต่อไปจะ Peer Review กับใคร? ทำซ้ำทุกหน่วยได้ไหม?",
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

      {/* Module 6 Summary */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">สรุปโมดูล 6 — ออกแบบแผนการสอนด้วย AI</h2>
        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <div className="px-4 py-2 bg-indigo-50 border-b border-indigo-100">
            <p className="text-xs font-semibold text-indigo-700">สิ่งที่คุณมีหลังจากโมดูล 6</p>
          </div>
          <div className="divide-y divide-card-border text-xs">
            {[
              { sec: "6.1 โครงสร้าง 13 หัวข้อ", sum: "K/P/A Framework + 5 ส่วนที่ AI ช่วยได้มากที่สุด + Template + AI สร้าง Objectives ใน 30 วินาที" },
              { sec: "6.2 ชิ้นงาน 4 ประเภท", sum: "Product/Performance/Process/Paper-based + Multi-type Task + Rubric AI 2 นาที + RL/CT Alignment" },
              { sec: "6.3 Mega Prompt", sum: "6-Part Mega Prompt + Chain Prompting 5 ขั้น + 3 Iterations (Content/Format/Assessment) + Personal Template" },
              { sec: "6.4 Workshop + Peer Review", sum: "Protocol 6 ขั้น + เกณฑ์ 10 ข้อ + STAR Feedback + Final Plan พร้อมสอนจริง" },
            ].map((s) => (
              <div key={s.sec} className="flex gap-3 px-4 py-3">
                <span className="text-xs font-bold text-indigo-700 w-36 shrink-0">{s.sec}</span>
                <p className="text-xs text-text-secondary">{s.sum}</p>
              </div>
            ))}
          </div>
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
            "13 หัวข้อ + K/P/A คือโครงกระดูกของแผนที่ดี — AI เติมเนื้อให้ครู",
            "ชิ้นงาน Multi-type วัด K/P/A ได้ครบ — ออกแบบก่อนสอนเสมอ",
            "Mega Prompt + 3 Iterations = แผนคุณภาพ — ใน 30–45 นาที",
            "Peer Review ดีกว่า Self-review 3 เท่า — Blind Spot หายเพราะมีคู่",
            "Module 6 สร้างนิสัย — 'เขียนแผนดีด้วย AI' ต้องทำซ้ำทุกหน่วย",
          ].map((k, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-indigo-50 border border-indigo-100">
              <span className="w-5 h-5 rounded-full bg-indigo-700 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-text-secondary">{k}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-indigo-300 bg-indigo-700 p-4 text-white">
          <p className="text-xs font-bold text-indigo-200 mb-1">🎯 ภารกิจก่อน Module 7</p>
          <p className="text-sm">นำ <strong>Final Lesson Plan</strong> จาก Workshop 6.4 ไปสอนจริง 1 คาบ บันทึก Reflection: (1) AI Output ตรงกับห้องเรียนจริงแค่ไหน? (2) ปรับอะไรระหว่างสอน? (3) จะใช้ AI ช่วยแผนต่อไปอย่างไร?</p>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-card-border">
        <Link href="/manual/module-6/6-3" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">6.3 Mega Prompt เขียนแผน</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <div className="text-right">
            <p className="text-[10px]">ถัดไป</p>
            <p className="font-medium text-text-secondary">โมดูล 7</p>
          </div>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
