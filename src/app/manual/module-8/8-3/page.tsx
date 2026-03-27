import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  CheckCircle2,
  Lightbulb,
  Wrench,
  ClipboardCheck,
} from "lucide-react";

export default function Module83Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 lg:py-14 animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs text-text-muted mb-6 flex-wrap">
        <Link href="/" className="hover:text-text-secondary transition-colors">หน้าแรก</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/manual" className="hover:text-text-secondary transition-colors">คู่มือการอบรม</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/manual/module-8" className="hover:text-text-secondary transition-colors">โมดูล 8</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-text-secondary">8.3 AI Tools สร้างข้อสอบ Formative</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-violet-300 bg-violet-100 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-violet-200 flex items-center justify-center shrink-0">
            <ClipboardCheck className="w-6 h-6 text-violet-700" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-violet-700">โมดูล 8 · หัวข้อ 8.3</span>
              <span className="flex items-center gap-1 text-xs text-violet-500">
                <Clock className="w-3.5 h-3.5" /> 1 ชม. · 5 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">AI Tools สร้างข้อสอบ Formative Assessment</h1>
            <p className="text-sm font-medium text-violet-700/80 mb-2">AI-Assisted Quiz Creation: MCQ, Short Answer, Bloom's Taxonomy Alignment & Item Analysis</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              ใช้ AI สร้างข้อสอบทุกประเภทตาม Bloom's Taxonomy วิเคราะห์คุณภาพด้วย Item Analysis และตรวจสอบ Quality Control ก่อนนำไปใช้
            </p>
          </div>
        </div>
      </div>

      {/* Learning Outcomes */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-base font-bold text-text-primary mb-3">
          <CheckCircle2 className="w-4 h-4 text-violet-700" />
          ผลลัพธ์การเรียนรู้
        </h2>
        <ul className="space-y-2">
          {[
            "แยกความแตกต่างระหว่าง Formative และ Summative Assessment ได้",
            "เลือกประเภทข้อสอบให้ตรงกับระดับ Bloom's Taxonomy ได้",
            "ใช้ AI สร้าง MCQ / Short Answer / Open-ended ที่มีคุณภาพ",
            "วิเคราะห์คุณภาพข้อสอบด้วย Difficulty Index และ Discrimination Index",
            "ตรวจสอบคุณภาพข้อสอบด้วย Quality Control Checklist 6 ด้าน",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-violet-50 border border-violet-200 flex items-center justify-center text-[10px] font-bold text-violet-700 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 8.3.1 Formative vs Summative */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">8.3.1 Formative vs Summative Assessment</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {[
            {
              type: "Formative Assessment",
              thai: "การประเมินตามสภาพการณ์",
              when: "ระหว่างการเรียน — ทุกคาบหรือทุกหน่วย",
              purpose: "วัดความเข้าใจเพื่อปรับการสอน",
              examples: "Exit Ticket, Quiz ท้ายคาบ, Poll, Peer Review, Observation",
              feedback: "ทันทีหรือภายในวันเดียวกัน",
              color: "border-green-200 bg-green-50",
              badge: "bg-green-100 text-green-700",
            },
            {
              type: "Summative Assessment",
              thai: "การประเมินผลรวบรวม",
              when: "ปลายหน่วย / ปลายภาคเรียน",
              purpose: "วัดผลสัมฤทธิ์รวมเพื่อตัดสิน",
              examples: "สอบกลางภาค สอบปลายภาค โปรเจกต์ รายงานสิ้นปี",
              feedback: "หลังสอบ / ปลายภาค",
              color: "border-blue-200 bg-blue-50",
              badge: "bg-blue-100 text-blue-700",
            },
          ].map((t) => (
            <div key={t.type} className={`rounded-xl border p-4 ${t.color}`}>
              <span className={`text-xs font-bold px-2 py-0.5 rounded ${t.badge} block w-fit mb-2`}>{t.type}</span>
              <p className="text-[11px] text-text-muted mb-1">{t.thai}</p>
              <div className="space-y-1 text-xs text-text-secondary">
                <p><span className="font-medium text-text-primary">เมื่อไร:</span> {t.when}</p>
                <p><span className="font-medium text-text-primary">วัตถุประสงค์:</span> {t.purpose}</p>
                <p><span className="font-medium text-text-primary">ตัวอย่าง:</span> {t.examples}</p>
                <p><span className="font-medium text-text-primary">Feedback:</span> {t.feedback}</p>
              </div>
            </div>
          ))}
        </div>

        {/* AI Tools */}
        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <div className="px-4 py-2 bg-violet-50 border-b border-violet-100">
            <p className="text-xs font-semibold text-violet-700">AI Tools สำหรับสร้างข้อสอบ — เปรียบเทียบ 5 เครื่องมือ</p>
          </div>
          <div className="divide-y divide-card-border text-xs">
            {[
              { tool: "ChatGPT (OpenAI)", strength: "สร้าง MCQ / Short Answer / Essay ได้ทุกรูปแบบ ปรับระดับ Bloom's ได้ดี" },
              { tool: "Google Gemini", strength: "บูรณาการ Google Forms ได้โดยตรง เหมาะสร้าง Quiz แล้วส่งออกทันที" },
              { tool: "Claude (Anthropic)", strength: "เขียนคำอธิบาย Rubric และ Feedback ได้ละเอียดและเป็นธรรมชาติสูง" },
              { tool: "Quizgecko", strength: "สร้าง Quiz จาก Text / PDF โดยอัตโนมัติ Export ไป Google Forms / PDF" },
              { tool: "Formative.com", strength: "Digital Assessment Platform + Auto-grade + Teacher Dashboard Real-time" },
            ].map((r) => (
              <div key={r.tool} className="flex gap-3 px-4 py-2.5">
                <span className="font-bold text-violet-700 w-36 shrink-0">{r.tool}</span>
                <p className="text-text-secondary">{r.strength}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8.3.2 Bloom's Taxonomy + ประเภทข้อสอบ */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">8.3.2 Bloom's Taxonomy กับประเภทข้อสอบที่เหมาะสม</h2>
        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
                <th className="text-left px-4 py-2">ระดับ Bloom's</th>
                <th className="text-left px-4 py-2">ทักษะ</th>
                <th className="text-left px-4 py-2">ประเภทข้อสอบที่เหมาะ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border">
              {[
                { level: "L1 Remember", skill: "ระลึก จำได้", types: "MCQ · True/False", color: "text-blue-600" },
                { level: "L2 Understand", skill: "เข้าใจ อธิบาย", types: "Short Answer · Matching", color: "text-green-600" },
                { level: "L3 Apply", skill: "ประยุกต์ใช้", types: "MCQ (Scenario) · Short Answer", color: "text-amber-600" },
                { level: "L4 Analyze", skill: "วิเคราะห์", types: "Essay · Open-ended", color: "text-orange-600" },
                { level: "L5 Evaluate", skill: "ประเมิน ตัดสิน", types: "Essay · Project", color: "text-red-600" },
                { level: "L6 Create", skill: "สร้างสรรค์", types: "Project · Portfolio", color: "text-violet-600" },
              ].map((r) => (
                <tr key={r.level} className="hover:bg-slate-50">
                  <td className={`px-4 py-2.5 font-bold ${r.color}`}>{r.level}</td>
                  <td className="px-4 py-2.5 text-text-secondary">{r.skill}</td>
                  <td className="px-4 py-2.5 text-text-secondary">{r.types}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 5 ประเภทข้อสอบ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { type: "MCQ", desc: "4 ตัวเลือก — ตัวเลือกผิดต้องสมเหตุสมผล (Plausible Distractors)", bloom: "L1–L3", icon: "⭕" },
            { type: "Short Answer", desc: "ตอบ 1–3 ประโยค — ระบุ Expected Answer และ Partial Credit", bloom: "L2–L3", icon: "✏️" },
            { type: "Matching", desc: "จับคู่แนวคิด/คำศัพท์ — ไม่ควรมี Column ที่ยาวเกิน 8 คู่", bloom: "L1–L2", icon: "🔗" },
            { type: "True/False", desc: "ประโยคที่ถูกหรือผิดชัดเจน — หลีกเลี่ยง Always/Never", bloom: "L1", icon: "✅" },
            { type: "Open-ended", desc: "เขียนอธิบายอย่างละเอียด — ต้องมี Rubric ที่ชัดเจน", bloom: "L4–L6", icon: "📝" },
          ].map((t) => (
            <div key={t.type} className="flex items-start gap-2.5 p-3 rounded-xl border border-violet-100 bg-white">
              <span className="text-base shrink-0">{t.icon}</span>
              <div>
                <p className="text-xs font-bold text-violet-700">{t.type} <span className="text-[10px] font-normal text-text-muted">Bloom's {t.bloom}</span></p>
                <p className="text-[11px] text-text-secondary mt-0.5">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8.3.3 Item Analysis */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">8.3.3 Item Analysis: วิเคราะห์คุณภาพข้อสอบ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="text-xs font-bold text-blue-700 mb-1">Difficulty Index (p)</p>
            <p className="text-[11px] text-text-secondary mb-2">สัดส่วนนักเรียนที่ตอบถูก — ยิ่งสูง = ง่ายยิ่ง</p>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between"><span className="text-text-muted">p &gt; 0.80</span><span className="text-red-600">ง่ายเกินไป ตัดทิ้ง</span></div>
              <div className="flex justify-between"><span className="text-text-muted">p = 0.30–0.70</span><span className="text-green-600">เหมาะสม ✓</span></div>
              <div className="flex justify-between"><span className="text-text-muted">p &lt; 0.20</span><span className="text-red-600">ยากเกินไป ปรับ</span></div>
            </div>
          </div>
          <div className="rounded-xl border border-violet-200 bg-violet-50 p-4">
            <p className="text-xs font-bold text-violet-700 mb-1">Discrimination Index (D)</p>
            <p className="text-[11px] text-text-secondary mb-2">ความสามารถแยกนักเรียนเก่ง-อ่อน — ยิ่งสูง = แยกได้ดี</p>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between"><span className="text-text-muted">D &gt; 0.40</span><span className="text-green-600">แยกได้ดีมาก ✓</span></div>
              <div className="flex justify-between"><span className="text-text-muted">D = 0.20–0.39</span><span className="text-amber-600">ยอมรับได้ ปรับเพิ่ม</span></div>
              <div className="flex justify-between"><span className="text-text-muted">D &lt; 0.20</span><span className="text-red-600">ตัดออก / ปรับใหม่</span></div>
            </div>
          </div>
        </div>

        {/* Quality Control */}
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-xs font-bold text-amber-700 mb-2">Quality Control Checklist — ตรวจ 6 ด้านก่อนใช้</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-text-secondary">
            {[
              { check: "Accuracy", desc: "คำตอบถูกต้องหรือไม่?" },
              { check: "Relevance", desc: "เกี่ยวข้องกับ Curriculum/Objective?" },
              { check: "Clarity", desc: "คำถามชัดเจน อ่านแล้วเข้าใจทันที?" },
              { check: "Difficulty", desc: "ระดับความยากเหมาะสมกับระดับชั้น?" },
              { check: "Bias", desc: "ไม่มีอคติทางวัฒนธรรม/เพศ/กลุ่ม?" },
              { check: "Options", desc: "ตัวเลือก MCQ ถูกต้องและยาวใกล้เคียงกัน?" },
            ].map((c) => (
              <div key={c.check} className="flex gap-2 items-start">
                <span className="w-5 h-5 rounded bg-amber-700 text-white text-[9px] font-bold flex items-center justify-center shrink-0">✓</span>
                <div>
                  <span className="font-bold text-text-primary">{c.check}: </span>
                  <span>{c.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Tools */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">8.3.4 Digital Formative Assessment Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { tool: "Google Forms", use: "Free, Auto-grade, Drive Integration", best: "Exit Ticket, Quiz ทั่วไป" },
            { tool: "Kahoot", use: "Game-based, Real-time Leaderboard", best: "Review ก่อนสอบ" },
            { tool: "Quizizz", use: "Self-paced, Meme Feedback, Homework mode", best: "Quiz บ้าน + Formative" },
            { tool: "Socrative", use: "Space Race, Quick Question, Exit Ticket", best: "Real-time Formative ทุกคาบ" },
          ].map((t) => (
            <div key={t.tool} className="rounded-xl border border-violet-100 bg-white p-3 text-center">
              <p className="text-xs font-bold text-violet-700 mb-1">{t.tool}</p>
              <p className="text-[10px] text-text-secondary mb-1">{t.use}</p>
              <p className="text-[10px] font-medium text-violet-500">🎯 {t.best}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prompt Templates */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">Prompt Templates สำหรับสร้างข้อสอบ</h2>
        <div className="space-y-3">
          {[
            {
              label: "Prompt 1: สร้างข้อสอบ MCQ",
              prompt: "Create 5 multiple choice questions about [หัวข้อ] for [ระดับชั้น]. | Each question should test [Bloom's Level: Remember/Understand/Apply/Analyze]. | Provide: question stem, 4 options (A-D), correct answer, brief explanation. | Make sure options are plausible but only one is correct. → ผลลัพธ์: MCQ 5 ข้อพร้อมเฉลยและคำอธิบาย",
            },
            {
              label: "Prompt 2: สร้างข้อ Short Answer",
              prompt: "Create 3 short answer questions about [หัวข้อ] for [ระดับชั้น]. | Questions should test Understand/Apply/Analyze level. | Include: question, expected answer (1–3 sentences), rubric for partial credit. | Provide example rubric: Full Credit = ... / Partial Credit = ... / No Credit = ... → ผลลัพธ์: Short Answer 3 ข้อพร้อม Scoring Rubric",
            },
            {
              label: "Prompt 3: ตรวจสอบและปรับปรุงข้อสอบ",
              prompt: "Here are my quiz questions: [วางข้อสอบ]. | Please review them for: (1) Clarity and directness of language (2) Accuracy of correct answers and distractors (3) Bloom's Taxonomy alignment (4) Potential bias or ambiguity | Suggest rewording and improvements for each question. → ผลลัพธ์: Revised Quiz + Explanation ทุกข้อที่ปรับ",
            },
            {
              label: "Prompt 4: สร้าง Rubric สำหรับ Open-ended",
              prompt: "I have this open-ended question: [วางคำถาม]. | Create a rubric for grading student responses with 4 levels: Excellent (100%): [Descriptor] | Good (75%): [Descriptor] | Fair (50%): [Descriptor] | Needs Improvement (0%): [Descriptor] | Provide example student answer for each level. → ผลลัพธ์: Grading Rubric 4 ระดับพร้อม Exemplar",
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
          <Wrench className="w-4.5 h-4.5 text-violet-700" />
          กิจกรรม Workshop (2 หัวข้อ · รวม ~55 นาที)
        </h2>
        <div className="space-y-4">
          {[
            {
              num: "1", title: "ใช้ AI สร้างข้อสอบ MCQ + Validate",
              time: "30 นาที", format: "เดี่ยว",
              goal: "MCQ 5 ข้อผ่าน Quality Control พร้อมอัปโหลด Google Forms",
              steps: [
                "เลือกหัวข้อ ระดับชั้น และ Bloom's Level เป้าหมาย (2 นาที)",
                "ใช้ Prompt 1 ให้ AI สร้าง MCQ 5 ข้อพร้อมเฉลย (5 นาที)",
                "ตรวจสอบด้วย Quality Control Checklist 6 ด้าน (8 นาที)",
                "ปรับข้อที่ไม่ผ่าน — Prompt 3 ขอ Revision (5 นาที)",
                "อัปโหลดไป Google Forms หรือ Kahoot ทดสอบ (10 นาที)",
              ],
            },
            {
              num: "2", title: "Item Analysis และปรับปรุงข้อสอบ",
              time: "25 นาที", format: "เดี่ยว/คู่",
              goal: "ข้อสอบที่ผ่าน Difficulty Index และ Discrimination Index",
              steps: [
                "เก็บข้อมูลการตอบของนักเรียนจาก Google Forms / Kahoot",
                "คำนวณ Difficulty Index (p) ของแต่ละข้อ",
                "คำนวณ Discrimination Index (D) สำหรับข้อที่น่าสงสัย",
                "ระบุข้อที่ต้องปรับ (p > 0.80 หรือ D < 0.20)",
                "ให้ AI เสนอการปรับปรุงข้อที่ไม่ผ่านเกณฑ์",
              ],
            },
          ].map((ws) => (
            <div key={ws.num} className="rounded-xl border border-violet-200 bg-white overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 bg-violet-50 border-b border-violet-100">
                <span className="w-7 h-7 rounded-lg bg-violet-700 text-white text-xs font-bold flex items-center justify-center">W{ws.num}</span>
                <div>
                  <p className="text-sm font-bold text-text-primary">{ws.title}</p>
                  <p className="text-[11px] text-violet-500">{ws.time} · {ws.format}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs font-medium text-violet-700 mb-2">🎯 {ws.goal}</p>
                <ul className="space-y-1.5">
                  {ws.steps.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                      <span className="w-4 h-4 rounded bg-violet-100 text-violet-700 text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Module 8 Summary */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">สรุปโมดูล 8 — วัดและประเมินผลด้วย AI</h2>
        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <div className="px-4 py-2 bg-violet-50 border-b border-violet-100">
            <p className="text-xs font-semibold text-violet-700">สิ่งที่คุณมีหลังจากโมดูล 8</p>
          </div>
          <div className="divide-y divide-card-border text-xs">
            {[
              { sec: "8.1 Rubric KPA+RL+CT", sum: "KPA Rubric 4 ระดับ + RL L1–L4 + CT 6 องค์ประกอบ + Exemplar + Peer Calibration" },
              { sec: "8.2 PISA Assessment", sum: "Authentic PISA Task + Stimulus 3 ระดับ + Scoring Guide Full/Partial/No + AI-assisted Creation" },
              { sec: "8.3 AI Formative Tools", sum: "MCQ/Short Answer/Open-ended + Bloom's Alignment + Item Analysis + QC Checklist 6 ด้าน" },
            ].map((s) => (
              <div key={s.sec} className="flex gap-3 px-4 py-3">
                <span className="text-xs font-bold text-violet-700 w-36 shrink-0">{s.sec}</span>
                <p className="text-xs text-text-secondary">{s.sum}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-lg font-bold text-text-primary mb-3">
          <Lightbulb className="w-4.5 h-4.5 text-violet-700" />
          Key Takeaways
        </h2>
        <div className="space-y-2">
          {[
            "Formative Assessment ทุกคาบ = ข้อมูลปรับการสอน ไม่ใช่แค่ตัดเกรด",
            "Bloom's Level ต้องตรงกับประเภทข้อสอบ — MCQ ไม่ได้วัดแค่ L1",
            "Quality Control Checklist 6 ด้านต้องผ่านก่อนนำข้อสอบไปใช้จริง",
            "Item Analysis หลังสอบ = Feedback ที่ดีที่สุดสำหรับปรับปรุงข้อสอบ",
            "AI Draft ข้อสอบใน 5 นาที + ครูตรวจ 10 นาที = ข้อสอบคุณภาพใน 15 นาที",
          ].map((k, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-violet-50 border border-violet-100">
              <span className="w-5 h-5 rounded-full bg-violet-700 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-text-secondary">{k}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-violet-300 bg-violet-700 p-4 text-white">
          <p className="text-xs font-bold text-violet-200 mb-1">🎯 ภารกิจก่อน Module 9</p>
          <p className="text-sm">สร้าง <strong>Formative Assessment 1 ชุด</strong> สำหรับบทเรียนถัดไป โดยใช้ AI: (1) MCQ 5 ข้อผ่าน QC Checklist + (2) PISA Exit Ticket 1 ข้อระดับ L3 + (3) วิเคราะห์ผลและ Reflect: นักเรียนส่วนใหญ่อยู่ระดับ Bloom's ไหน?</p>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-card-border">
        <Link href="/manual/module-8/8-2" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">8.2 PISA-style Assessment</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <div className="text-right">
            <p className="text-[10px]">ถัดไป</p>
            <p className="font-medium text-text-secondary">โมดูล 9</p>
          </div>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
