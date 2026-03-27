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

export default function Module72Page() {
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
        <span className="text-text-secondary">7.2 Exit Ticket / Interactive Lesson</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-blue-300 bg-blue-100 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-blue-200 flex items-center justify-center shrink-0">
            <Layers className="w-6 h-6 text-blue-700" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-blue-700">โมดูล 7 · หัวข้อ 7.2</span>
              <span className="flex items-center gap-1 text-xs text-blue-500">
                <Clock className="w-3.5 h-3.5" /> 2 ชม. · 6 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">Exit Ticket / Interactive Lesson</h1>
            <p className="text-sm font-medium text-blue-700/80 mb-2">Formative Assessment Tools + Digital Interactive Lessons with Kahoot, Mentimeter & Google Forms</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              ออกแบบ Exit Ticket 4 รูปแบบ สร้าง Interactive Lesson ด้วยเครื่องมือดิจิทัล และวิเคราะห์ผลเพื่อปรับปรุงการสอนได้ทันที
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
            "เลือกรูปแบบ Exit Ticket ที่เหมาะกับวัตถุประสงค์และเวลาที่มีได้",
            "ใช้ Kahoot / Mentimeter / Google Forms สร้าง Interactive Lesson ได้",
            "วิเคราะห์ผล Exit Ticket เพื่อวางแผนการสอนครั้งถัดไป",
            "บูรณาการ Exit Ticket เข้ากับแผนการสอนรายวันได้อย่างเป็นระบบ",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[10px] font-bold text-blue-700 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 7.2.1 ประเภท Exit Ticket */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">7.2.1 Exit Ticket 4 รูปแบบสำหรับ Formative Assessment</h2>
        <div className="space-y-3">
          {[
            {
              type: "1-2-3 Exit Ticket",
              color: "border-blue-200 bg-blue-50", badge: "bg-blue-100 text-blue-700",
              questions: ["1 สิ่งที่เรียนรู้วันนี้", "2 คำถามที่ยังสงสัย", "3 วิธีนำไปใช้ในชีวิตจริง"],
              use: "ปิดบทเรียนทั่วไป รู้ภาพรวมทั้งชั้น",
              time: "3–5 นาที",
            },
            {
              type: "Traffic Light Exit Ticket",
              color: "border-green-200 bg-green-50", badge: "bg-green-100 text-green-700",
              questions: ["🟢 เขียว = เข้าใจดี พร้อมเดินหน้า", "🟡 เหลือง = เข้าใจบ้าง มีข้อสงสัย", "🔴 แดง = ยังไม่เข้าใจ ต้องการความช่วยเหลือ"],
              use: "ดูระดับความเข้าใจรวดเร็ว จัดกลุ่มได้ทันที",
              time: "1–2 นาที",
            },
            {
              type: "Muddiest Point Exit Ticket",
              color: "border-amber-200 bg-amber-50", badge: "bg-amber-100 text-amber-700",
              questions: ["'จุดที่งงที่สุดในบทเรียนวันนี้คืออะไร?'", "'อยากให้ครูอธิบายเรื่องใดอีกครั้ง?'"],
              use: "ระบุ Misconception และวางแผน Re-teach",
              time: "3 นาที",
            },
            {
              type: "One-Sentence Summary Exit Ticket",
              color: "border-violet-200 bg-violet-50", badge: "bg-violet-100 text-violet-700",
              questions: ["'สรุปสาระสำคัญของบทเรียนวันนี้ใน 1 ประโยค'"],
              use: "วัดความสามารถสรุปและ RL ระดับ 2",
              time: "3–5 นาที",
            },
          ].map((t) => (
            <div key={t.type} className={`rounded-xl border p-4 ${t.color}`}>
              <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${t.badge}`}>{t.type}</span>
                <span className="text-[11px] text-text-muted">{t.time} · {t.use}</span>
              </div>
              <ul className="space-y-0.5">
                {t.questions.map((q, i) => (
                  <li key={i} className="flex gap-1.5 text-xs text-text-secondary">
                    <span className="text-text-muted shrink-0">▸</span>{q}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-xl border border-blue-100 bg-blue-50/50 p-3">
          <p className="text-xs font-semibold text-blue-700 mb-1">💡 ขั้นตอนสร้าง Exit Ticket (5 ขั้น)</p>
          <div className="flex flex-wrap gap-2">
            {["กำหนดวัตถุประสงค์", "เลือกรูปแบบ", "เขียนคำถาม", "เลือกเครื่องมือ", "วางแผนเวลา 3–5 นาที"].map((s, i) => (
              <div key={i} className="flex items-center gap-1 text-[11px] text-text-secondary">
                <span className="w-4 h-4 rounded-full bg-blue-700 text-white font-bold text-[9px] flex items-center justify-center shrink-0">{i + 1}</span>
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7.2.2 AI Tools */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">7.2.2 เครื่องมือ Interactive Lesson — เปรียบเทียบ 5 แพลตฟอร์ม</h2>
        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
                <th className="text-left px-4 py-2">เครื่องมือ</th>
                <th className="text-left px-4 py-2">จุดเด่น</th>
                <th className="text-left px-4 py-2">ข้อควรระวัง</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border">
              {[
                {
                  tool: "Kahoot", pros: "Game-based สนุก Leaderboard กระตุ้น Engagement",
                  cons: "อาจกลายเป็นการแข่งขัน นักเรียนบางคนเครียด",
                },
                {
                  tool: "Mentimeter", pros: "Poll / Word Cloud / Ranking / Q&A ไม่ต้องติดตั้ง",
                  cons: "รุ่นฟรีจำกัด คำถาม มีรุ่นจ่ายเงิน",
                },
                {
                  tool: "Google Forms", pros: "ฟรี 100% บูรณาการกับ Google ดูผลทันที",
                  cons: "ไม่ Real-time ระหว่างสอน ต้องดูหลังคลาส",
                },
                {
                  tool: "Polls Everywhere", pros: "Real-time Mobile-friendly ไม่ต้องดาวน์โหลด",
                  cons: "ต้องลงทะเบียน บางฟีเจอร์จ่ายเงิน",
                },
                {
                  tool: "Nearpod", pros: "Interactive Slide + Poll รวมในที่เดียว ติดตาม Progress",
                  cons: "ต้องจ่ายเงินสำหรับฟีเจอร์เต็ม",
                },
              ].map((r) => (
                <tr key={r.tool} className="hover:bg-slate-50">
                  <td className="px-4 py-2.5 font-bold text-blue-700">{r.tool}</td>
                  <td className="px-4 py-2.5 text-green-700">{r.pros}</td>
                  <td className="px-4 py-2.5 text-amber-700">{r.cons}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 7.2.3 โครงสร้าง Interactive Lesson */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">7.2.3 โครงสร้าง Interactive Lesson 40 นาที</h2>
        <div className="space-y-2 mb-4">
          {[
            { phase: "Opening", time: "5 นาที", desc: "Hook ด้วย Poll หรือ Mentimeter Word Cloud — ดึงความสนใจและสำรวจ Prior Knowledge" },
            { phase: "Direct Instruction", time: "10 นาที", desc: "สอนเนื้อหาหลัก — ใช้ Slide ที่กระชับ ภาพมาก ข้อความน้อย ตาม 10-20-30 Rule" },
            { phase: "Guided Practice", time: "10 นาที", desc: "Kahoot Quiz หรือ Mentimeter Poll — ครูดู Response Real-time แก้ Misconception ทันที" },
            { phase: "Independent Practice", time: "10 นาที", desc: "นักเรียนทำงานเดี่ยวหรือคู่ — ครูสังเกตและ Coach ตาม Traffic Light ที่เห็น" },
            { phase: "Closure & Exit Ticket", time: "5 นาที", desc: "Exit Ticket 1 รูปแบบ + สรุปบทเรียน — ครูได้ข้อมูลสำหรับวางแผนบทเรียนถัดไป" },
          ].map((s, i) => (
            <div key={s.phase} className="flex items-start gap-3 rounded-xl border border-blue-100 bg-white p-3">
              <div className="shrink-0 text-right w-20">
                <p className="text-[10px] text-text-muted">{s.time}</p>
                <p className="text-xs font-bold text-blue-700">{s.phase}</p>
              </div>
              <div className="w-px bg-blue-100 self-stretch shrink-0" />
              <p className="text-xs text-text-secondary">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Formative Assessment */}
        <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-4">
          <p className="text-xs font-bold text-blue-700 mb-2">การวิเคราะห์ผล Exit Ticket — 4 ขั้นตอน</p>
          <div className="space-y-1.5 text-xs text-text-secondary">
            <div className="flex gap-2">
              <span className="text-blue-700 font-bold shrink-0">1.</span>
              <p>ดูความเข้าใจภาพรวมทั้งชั้น — นักเรียน 70%+ ผ่านหรือไม่?</p>
            </div>
            <div className="flex gap-2">
              <span className="text-blue-700 font-bold shrink-0">2.</span>
              <p>ระบุนักเรียนที่ยังไม่เข้าใจ — จัดกลุ่ม Red/Yellow สำหรับ Follow-up</p>
            </div>
            <div className="flex gap-2">
              <span className="text-blue-700 font-bold shrink-0">3.</span>
              <p>บันทึก Misconception ที่พบบ่อย — ใช้เป็น Opening Hook บทเรียนถัดไป</p>
            </div>
            <div className="flex gap-2">
              <span className="text-blue-700 font-bold shrink-0">4.</span>
              <p>วางแผน Re-teach หรือ Enrichment — ตามระดับความเข้าใจที่พบ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prompt Templates */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">Prompt Templates สำหรับ Exit Ticket + Interactive</h2>
        <div className="space-y-3">
          {[
            {
              label: "Prompt 1: ออกแบบ Exit Ticket",
              prompt: "ช่วยฉันสร้าง Exit Ticket สำหรับบทเรียนเรื่อง [หัวข้อ] ระดับ [ชั้น] | รูปแบบ: [1-2-3 / Traffic Light / Muddiest Point / One-Sentence] | ต้องการวัด: [RL ระดับ / CT Component / ความเข้าใจทั่วไป] | เวลา: [จำนวน] นาที → ผลลัพธ์: คำถาม Exit Ticket ที่ชัดเจน พร้อมวิธีวิเคราะห์ผล",
            },
            {
              label: "Prompt 2: สร้างชุดคำถาม Poll ด้วย Mentimeter",
              prompt: "ช่วยฉันออกแบบ 5 คำถาม Poll สำหรับบทเรียนเรื่อง [หัวข้อ] | ให้มี: Multiple Choice 2 ข้อ + Word Cloud 1 ข้อ + Ranking 1 ข้อ + Open Q&A 1 ข้อ | ให้คำแนะนำว่าคำถามไหนควรถามก่อน/หลัง → ผลลัพธ์: ชุด 5 คำถามพร้อม Discussion Prompt แต่ละข้อ",
            },
            {
              label: "Prompt 3: วิเคราะห์ผล Exit Ticket และวางแผนต่อ",
              prompt: "จากผล Exit Ticket: [สรุปสิ่งที่นักเรียนตอบ เช่น 70% ตอบผิด / ข้อสงสัยที่พบบ่อย] | ให้ข้อเสนอแนะในการปรับปรุงการสอน | ออกแบบ Opening Activity 5 นาทีสำหรับบทเรียนถัดไปที่แก้ Misconception → ผลลัพธ์: Re-teach Plan + 2–3 กิจกรรมทบทวน",
            },
            {
              label: "Prompt 4: ออกแบบ Interactive Lesson ครบ 40 นาที",
              prompt: "ช่วยฉันออกแบบ Interactive Lesson 40 นาทีเรื่อง [หัวข้อ] ระดับ [ชั้น] | ต้องการรวม: Kahoot (Guided Practice) + Mentimeter (Opening) + Exit Ticket (Closure) | ให้โครงสร้างเวลา 5 ส่วนพร้อมคำอธิบายแต่ละส่วน → ผลลัพธ์: Interactive Lesson Blueprint พร้อมลิงก์เครื่องมือที่แนะนำ",
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
          กิจกรรม Workshop (3 หัวข้อ · รวม ~80 นาที)
        </h2>
        <div className="space-y-4">
          {[
            {
              num: "1", title: "สร้าง Exit Ticket ด้วย Google Forms",
              time: "25 นาที", format: "เดี่ยว",
              goal: "Exit Ticket 1 ชุดพร้อมดูผลแบบ Real-time",
              steps: [
                "เลือกบทเรียนและกำหนดวัตถุประสงค์ของ Exit Ticket (5 นาที)",
                "สร้าง Google Form ใหม่ เลือกรูปแบบ 1-2-3 Exit Ticket (3 นาที)",
                "เพิ่มคำถาม 3 ข้อ: สิ่งที่เรียน / ข้อสงสัย / วิธีนำไปใช้ (10 นาที)",
                "ตั้งค่าให้ดูผลตอบสนองทันที ทดสอบและปรับแต่ง (7 นาที)",
              ],
            },
            {
              num: "2", title: "สร้าง Interactive Lesson ด้วย Mentimeter",
              time: "25 นาที", format: "เดี่ยว",
              goal: "Mentimeter Presentation 5 Slide พร้อมสอน",
              steps: [
                "ลงทะเบียน Mentimeter (ฟรี) และสร้าง Presentation ใหม่ (3 นาที)",
                "เพิ่ม Poll Multiple Choice สำหรับ Opening (5 นาที)",
                "เพิ่ม Word Cloud: 'คำสำคัญที่นึกถึงเรื่อง [หัวข้อ]' (5 นาที)",
                "เพิ่ม Q&A Section และปรับ Theme ให้สอดคล้องกับวิชา (12 นาที)",
              ],
            },
            {
              num: "3", title: "สร้างบทเรียน Interactive ด้วย Kahoot",
              time: "30 นาที", format: "เดี่ยว",
              goal: "Kahoot Quiz 10 ข้อพร้อมเล่นในห้องเรียน",
              steps: [
                "ลงทะเบียน Kahoot และสร้าง Kahoot ใหม่ (2 นาที)",
                "เพิ่มคำถาม 10 ข้อตามเนื้อหา (15 นาที) — ผสม Easy/Medium/Hard",
                "ตั้งค่าเวลา คะแนน และเพิ่มภาพประกอบแต่ละข้อ (7 นาที)",
                "ทดสอบและเตรียม Game Pin สำหรับเล่นในห้องเรียน (6 นาที)",
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
            "Exit Ticket ทุกคาบ = ข้อมูล Formative ที่ช่วยปรับการสอนทันที",
            "เลือกรูปแบบ Exit Ticket ตามวัตถุประสงค์ ไม่ใช่แค่ความสะดวก",
            "Kahoot เหมาะกับ Guided Practice / Mentimeter เหมาะกับ Opening & Reflection",
            "วิเคราะห์ผล Exit Ticket ก่อนสอนครั้งถัดไปเสมอ — ใช้เวลา 5 นาทีต่อคาบ",
            "AI ช่วยสร้างคำถาม Exit Ticket และ Poll ใน 2 นาที — ครูปรับอีก 3 นาที",
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
        <Link href="/manual/module-7/7-1" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">7.1 Infographic / Slide / ใบงาน PISA</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <Link href="/manual/module-7/7-3" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <div className="text-right">
            <p className="text-[10px] text-text-muted">ถัดไป</p>
            <p className="font-medium">7.3 Workshop: สร้างสื่อ</p>
          </div>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
