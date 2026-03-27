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

export default function Module73Page() {
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
        <span className="text-text-secondary">7.3 Workshop: สร้างสื่อ</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-blue-300 bg-blue-100 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-blue-200 flex items-center justify-center shrink-0">
            <Layers className="w-6 h-6 text-blue-700" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-blue-700">โมดูล 7 · หัวข้อ 7.3</span>
              <span className="flex items-center gap-1 text-xs text-blue-500">
                <Clock className="w-3.5 h-3.5" /> 1 ชม. · 5 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">Workshop: สร้างสื่อ 1 ชิ้น + Peer Review</h1>
            <p className="text-sm font-medium text-blue-700/80 mb-2">Media Creation Sprint + Peer Review + Action Plan for Classroom Implementation</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              สร้างสื่อการสอน 1 ชิ้นผ่าน 4 Phase ใน 1 ชั่วโมง รับ Peer Feedback ที่สร้างสรรค์ และวางแผนนำสื่อไปใช้ในห้องเรียนจริง
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
            "สร้างสื่อการสอน 1 ชิ้นที่พร้อมใช้จริงด้วย AI ใน 1 ชั่วโมง",
            "ประเมินคุณภาพสื่อด้วยเกณฑ์ Peer Review 4 ด้านได้",
            "ให้ Feedback แบบ Positive-Constructive-Actionable ได้",
            "วางแผนนำสื่อไปใช้ในห้องเรียนจริงพร้อม Pre/Post Activity",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[10px] font-bold text-blue-700 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 7.3.1 4 Phase Media Creation */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">7.3.1 กระบวนการสร้างสื่อ 4 Phase ใน 60 นาที</h2>
        <div className="space-y-3">
          {[
            {
              phase: "Phase 1", title: "Planning", time: "15 นาที",
              color: "border-blue-200 bg-blue-50", badge: "bg-blue-100 text-blue-700",
              steps: [
                "เลือกหัวข้อบทเรียนที่จะสอนจริงในเดือนถัดไป",
                "กำหนด Learning Objective 1 ข้อที่ชัดเจนและวัดได้",
                "ตัดสินใจรูปแบบสื่อ: Infographic / Slide / Exit Ticket / Interactive Lesson",
                "วางแผนโครงสร้างเนื้อหาและ Prompt ที่จะใช้",
              ],
            },
            {
              phase: "Phase 2", title: "Drafting with AI", time: "25 นาที",
              color: "border-green-200 bg-green-50", badge: "bg-green-100 text-green-700",
              steps: [
                "ใช้ AI Tools สร้างเนื้อหา Structure และ Visual Draft",
                "ปรับแต่งตามบริบทห้องเรียนและระดับนักเรียนของตนเอง",
                "อย่าสมบูรณ์แบบตั้งแต่แรก — Draft ไว้ก่อน Refine ทีหลัง",
                "ตรวจสอบเบื้องต้นด้วย SAFE-T: Safe, Accurate, Teaching-fit",
              ],
            },
            {
              phase: "Phase 3", title: "Testing & Refinement", time: "15 นาที",
              color: "border-amber-200 bg-amber-50", badge: "bg-amber-100 text-amber-700",
              steps: [
                "ให้เพื่อนข้างๆ ลองใช้สื่อ 2–3 นาที สังเกตปฏิกิริยา",
                "รับความเห็นเบื้องต้นแบบไม่เป็นทางการ",
                "ปรับแต่งจุดที่งงหรือไม่ชัดเจน",
                "ตรวจสอบ Technical Quality: โหลดเร็ว อ่านได้บนทุก Device",
              ],
            },
            {
              phase: "Phase 4", title: "Presentation", time: "5 นาที",
              color: "border-violet-200 bg-violet-50", badge: "bg-violet-100 text-violet-700",
              steps: [
                "Opening: แนะนำตัวเองและสื่อ (1 นาที)",
                "Objective & Context: บอก Learning Objective และบริบทนักเรียน (1 นาที)",
                "Live Demo: แสดงสื่อจริง 2–3 ส่วนสำคัญ (2 นาที)",
                "Closing: ถาม Feedback และบอกสิ่งที่ต้องการ Input (1 นาที)",
              ],
            },
          ].map((p) => (
            <div key={p.phase} className={`rounded-xl border p-4 ${p.color}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${p.badge}`}>{p.phase}: {p.title}</span>
                <span className="text-xs text-text-muted">{p.time}</span>
              </div>
              <ul className="space-y-1">
                {p.steps.map((s, i) => (
                  <li key={i} className="flex gap-1.5 text-xs text-text-secondary">
                    <span className="text-text-muted shrink-0">▸</span>{s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 7.3.2 Peer Review Criteria */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">7.3.2 เกณฑ์ Peer Review 4 ด้าน</h2>
        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-blue-50 border-b border-blue-100">
            <p className="text-xs font-semibold text-blue-700">ให้คะแนนแต่ละด้าน 1–5 และ Comment สั้นๆ</p>
          </div>
          <div className="divide-y divide-card-border text-xs">
            {[
              { area: "Content Quality", check: "เนื้อหาถูกต้องครบถ้วน? สอดคล้องกับ Curriculum? ระดับเหมาะสม?" },
              { area: "Design & Visual", check: "อ่านง่าย? สีเหมาะสม? Visual ช่วยเข้าใจ? ไม่รก?" },
              { area: "Learning Engagement", check: "นักเรียนจะ Active ไหม? มีส่วนร่วมได้อย่างไร? น่าสนใจ?" },
              { area: "Technical Quality", check: "โหลดเร็ว? ใช้ได้บนทุก Device? ไม่มี Bug? เผยแพร่ง่าย?" },
            ].map((c, i) => (
              <div key={i} className="flex gap-3 px-4 py-2.5">
                <span className="text-xs font-bold text-blue-700 w-32 shrink-0">{c.area}</span>
                <p className="text-text-secondary">{c.check}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feedback Framework */}
        <div className="space-y-2">
          <p className="text-sm font-bold text-text-primary">โครงสร้าง Feedback ที่ดี: Positive → Constructive → Actionable</p>
          {[
            { type: "Positive", desc: "บอกสิ่งที่ดีก่อนเสมอ — อะไรทำได้ดี? ทำไมถึงดี?", example: "'ชอบที่ใช้ Timeline เพราะนักเรียนเห็นลำดับเวลาได้ทันที'", color: "border-green-200 bg-green-50" },
            { type: "Constructive", desc: "บอกสิ่งที่ปรับปรุงได้ด้วยความเมตตา — ไม่วิจารณ์ เสนอแนะ", example: "'ลองลดขนาดตัวหนังสือลงและเพิ่ม Visual อาจช่วยให้อ่านง่ายขึ้น'", color: "border-amber-200 bg-amber-50" },
            { type: "Actionable", desc: "ให้ข้อเสนอแนะที่ทำได้จริง — Concrete, Specific, Doable", example: "'ปรับ Font เป็น Prompt 20pt+ และเพิ่มภาพตัวอย่าง 1 ภาพในส่วน RL3'", color: "border-blue-200 bg-blue-50" },
          ].map((f) => (
            <div key={f.type} className={`rounded-xl border p-3 ${f.color}`}>
              <p className="text-xs font-bold text-text-primary mb-0.5">{f.type}</p>
              <p className="text-[11px] text-text-secondary mb-1">{f.desc}</p>
              <p className="text-[11px] text-text-muted italic">{f.example}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7.3.3 Action Plan */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">7.3.3 Action Plan: นำสื่อไปใช้ในห้องเรียน</h2>

        <div className="space-y-3 mb-4">
          {[
            {
              title: "ตรวจสอบความพร้อมก่อนนำไปใช้",
              items: [
                "อุปกรณ์เทคโนโลยี: มีคอมพิวเตอร์/โปรเจคเตอร์และ Internet พอ?",
                "Device นักเรียน: มีสมาร์ทโฟนหรือ Tablet พร้อมใช้?",
                "ความรู้นักเรียน: นักเรียนใช้เครื่องมือ (Kahoot/Mentimeter) เป็นไหม?",
              ],
              color: "border-blue-200 bg-blue-50",
            },
            {
              title: "วางแผนการสอน",
              items: [
                "ตรวจสอบว่าสื่อตรงกับ Curriculum และ Learning Objective",
                "ตรวจสอบว่าเวลาสอนเพียงพอสำหรับสื่อนี้",
                "วางแผน Pre-lesson Activity (กระตุ้นความรู้เดิม) ก่อนใช้สื่อ",
                "วางแผน Post-lesson Activity (Exit Ticket / Reflection) หลังใช้สื่อ",
              ],
              color: "border-green-200 bg-green-50",
            },
            {
              title: "เตรียมการก่อนบทเรียน",
              items: [
                "ทดสอบสื่อในห้องเรียนจริงก่อนสอน — Check เทคนิคทุกอย่าง",
                "เตรียม Exit Ticket หรือ Assessment ให้พร้อม",
                "เตรียมทางเลือกการสอนหากเทคโนโลยีใช้ไม่ได้ (Contingency Plan)",
              ],
              color: "border-amber-200 bg-amber-50",
            },
          ].map((s) => (
            <div key={s.title} className={`rounded-xl border p-4 ${s.color}`}>
              <p className="text-xs font-bold text-text-primary mb-2">{s.title}</p>
              <ul className="space-y-1">
                {s.items.map((item, i) => (
                  <li key={i} className="flex gap-1.5 text-xs text-text-secondary">
                    <span className="text-blue-600 shrink-0">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Reflection Questions */}
        <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-4">
          <p className="text-xs font-bold text-blue-700 mb-2">คำถาม Reflection หลังนำสื่อไปใช้จริง</p>
          <div className="space-y-1.5 text-xs text-text-secondary">
            {[
              ["กระบวนการ", "ฉันเรียนรู้อะไรจากการสร้างสื่อชิ้นนี้?"],
              ["ความท้าทาย", "อุปสรรคใหญ่ที่สุดในการสร้างและนำสื่อไปใช้คืออะไร?"],
              ["AI ช่วยได้", "การใช้ AI ช่วยฉันมากเพียงไร? ส่วนใดยังต้องปรับด้วยตนเอง?"],
              ["อนาคต", "ฉันจะปรับปรุงสื่อชิ้นนี้อย่างไรสำหรับการสอนครั้งถัดไป?"],
              ["ผลต่อนักเรียน", "สื่อชิ้นนี้ช่วยให้นักเรียนเรียนรู้ได้ดีขึ้นอย่างไร?"],
            ].map(([topic, q], i) => (
              <div key={i} className="flex gap-2">
                <span className="text-blue-700 font-bold shrink-0 w-24">{topic}:</span>
                <span>{q}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prompt Templates */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">Prompt Templates สำหรับ Workshop</h2>
        <div className="space-y-3">
          {[
            {
              label: "Prompt 1: ออกแบบสื่อจาก Learning Objective",
              prompt: "ฉันต้องการสร้างสื่อการสอนสำหรับเรื่อง [หัวข้อ] ระดับ [ชั้น] | Learning Objective: [ระบุ] | เวลาในชั้นเรียน: [จำนวน] นาที | ควรสร้าง Infographic / Slide / Exit Ticket หรือ Interactive Lesson? | ให้เหตุผลและเคล็ดลับในการวางแผนเนื้อหา → ผลลัพธ์: Media Choice + Content Outline พร้อม Sprint",
            },
            {
              label: "Prompt 2: ปรับปรุงสื่อที่มีอยู่",
              prompt: "ฉันสร้างสื่อ [อธิบายสื่อ] แล้ว แต่รู้สึกว่าบางส่วนยังไม่ดีพอ | [วางเนื้อหาหรืออธิบาย] | ให้ข้อเสนอแนะในการปรับปรุง 3 ด้าน: เนื้อหา / Visual / Engagement | ให้ความเห็นเกี่ยวกับการใช้สี, ฟอนต์, เลย์เอาต์ → ผลลัพธ์: Specific Improvement Plan พร้อม Priority",
            },
            {
              label: "Prompt 3: วางแผนนำสื่อไปใช้ในห้องเรียน",
              prompt: "ฉันสร้างสื่อเกี่ยวกับ [หัวข้อ] แล้ว | นักเรียน: [ระดับชั้น, จำนวน, บริบทห้องเรียน] | อยากเตรียมความพร้อมในการนำไปใช้จริง | บอก Pre-lesson Activity 2 แบบ | บอก Post-lesson Activity (Exit Ticket) 1 แบบ → ผลลัพธ์: Lesson Integration Plan พร้อม Checklist",
            },
            {
              label: "Prompt 4: สะท้อนการเรียนรู้จากการสร้างสื่อ",
              prompt: "ฉันเพิ่งเสร็จการสร้างสื่อการสอนด้วย AI และนำไปใช้แล้ว | [อธิบายประสบการณ์สั้นๆ] | ช่วยให้คำถาม Reflection 5 ข้อที่ช่วยให้ฉันคิด Deep | ให้ Reflection Template ง่ายๆ สำหรับใช้ทุกครั้งหลังสร้างสื่อ → ผลลัพธ์: Reflection Template ที่ใช้ซ้ำได้",
            },
          ].map((t) => (
            <div key={t.label} className="space-y-1.5">
              <p className="text-[11px] font-semibold text-text-primary mb-1">{t.label}</p>
              <p className="prompt-block">{t.prompt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workshops */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-lg font-bold text-text-primary mb-3">
          <Wrench className="w-4.5 h-4.5 text-blue-700" />
          กิจกรรม Workshop (2 หัวข้อ · รวม ~65 นาที)
        </h2>
        <div className="space-y-4">
          {[
            {
              num: "1", title: "สร้างสื่อ 1 ชิ้น — Full Sprint",
              time: "50 นาที", format: "เดี่ยว (4 Phase)",
              goal: "สื่อ 1 ชิ้นพร้อมนำเสนอและ Peer Review",
              steps: [
                "Phase 1 Planning (10 นาที): เลือกหัวข้อ กำหนด Objective เลือกรูปแบบ",
                "Phase 2 Drafting (25 นาที): สร้างสื่อด้วย AI Tool ที่เลือก ปรับตามบริบท",
                "Phase 3 Testing (10 นาที): ให้เพื่อนลองใช้ รับความเห็น ปรับ 2–3 จุด",
                "Phase 4 Presentation (5 นาที): นำเสนอ 5 นาที ตาม Opening-Demo-Feedback",
              ],
            },
            {
              num: "2", title: "Peer Review Workshop",
              time: "15 นาที", format: "กลุ่ม 3–4 คน",
              goal: "Written Feedback ที่ Actionable สำหรับทุกคน",
              steps: [
                "แบ่งกลุ่ม 3–4 คน (2 นาที) — ผสมวิชาต่างกัน",
                "ทำความเข้าใจเกณฑ์ Peer Review 4 ด้านก่อน (2 นาที)",
                "ประเมินสื่อของเพื่อนคนละ 1 ชิ้น ให้คะแนน + Comment (8 นาที)",
                "บอก Feedback แบบ Positive-Constructive-Actionable (3 นาที)",
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

      {/* Module 7 Summary */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">สรุปโมดูล 7 — สร้างสื่อการสอนด้วย AI</h2>
        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <div className="px-4 py-2 bg-blue-50 border-b border-blue-100">
            <p className="text-xs font-semibold text-blue-700">สิ่งที่คุณมีหลังจากโมดูล 7</p>
          </div>
          <div className="divide-y divide-card-border text-xs">
            {[
              { sec: "7.1 Infographic/Slide/PISA", sum: "5 ประเภท Infographic + 10-20-30 Rule + โครงสร้าง PISA RL1–RL4 + กรอบ SAFE-T + 3 Workshops" },
              { sec: "7.2 Exit Ticket/Interactive", sum: "4 รูปแบบ Exit Ticket + เปรียบเทียบ 5 เครื่องมือ + โครงสร้าง Interactive 40 นาที + 3 Workshops" },
              { sec: "7.3 Workshop Sprint", sum: "4 Phase Media Creation + Peer Review 4 ด้าน + Action Plan + Reflection Template" },
            ].map((s) => (
              <div key={s.sec} className="flex gap-3 px-4 py-3">
                <span className="text-xs font-bold text-blue-700 w-40 shrink-0">{s.sec}</span>
                <p className="text-xs text-text-secondary">{s.sum}</p>
              </div>
            ))}
          </div>
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
            "4 Phase (Plan → Draft → Test → Present) ใช้ได้กับทุกประเภทสื่อ",
            "Peer Feedback ที่ดีต้อง Positive-Constructive-Actionable ครบ 3 ส่วน",
            "วางแผน Pre/Post Activity ก่อนนำสื่อไปใช้ — สื่อดีคู่กับแผนที่ดี",
            "Contingency Plan สำคัญ — เทคโนโลยีอาจล้มเหลว ครูต้องพร้อมสอนโดยไม่มีสื่อ",
            "Reflection หลังใช้สื่อทุกครั้ง = วงจรพัฒนาที่ไม่มีวันหยุด",
          ].map((k, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-blue-50 border border-blue-100">
              <span className="w-5 h-5 rounded-full bg-blue-700 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-text-secondary">{k}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-blue-300 bg-blue-700 p-4 text-white">
          <p className="text-xs font-bold text-blue-200 mb-1">🎯 ภารกิจก่อน Module 8</p>
          <p className="text-sm">นำ <strong>สื่อที่สร้างใน Workshop 7.3</strong> ไปใช้จริงอย่างน้อย 1 คาบ บันทึก Reflection: (1) นักเรียนมีส่วนร่วมอย่างไร? (2) SAFE-T ผ่านทุกข้อในห้องเรียนจริงไหม? (3) Exit Ticket บอกอะไรเกี่ยวกับความเข้าใจนักเรียน?</p>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-card-border">
        <Link href="/manual/module-7/7-2" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">7.2 Exit Ticket / Interactive Lesson</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <div className="text-right">
            <p className="text-[10px]">ถัดไป</p>
            <p className="font-medium text-text-secondary">โมดูล 8</p>
          </div>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
