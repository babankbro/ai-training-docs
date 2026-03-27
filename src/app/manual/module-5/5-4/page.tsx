import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  CheckCircle2,
  Lightbulb,
  Wrench,
  Bot,
} from "lucide-react";

export default function Module54Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 lg:py-14 animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs text-text-muted mb-6 flex-wrap">
        <Link href="/" className="hover:text-text-secondary transition-colors">หน้าแรก</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/manual" className="hover:text-text-secondary transition-colors">คู่มือการอบรม</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/manual/module-5" className="hover:text-text-secondary transition-colors">โมดูล 5</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-text-secondary">5.4 AI ช่วยออกแบบ GM + PERMA</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-purple-200 bg-purple-50 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-purple-200 flex items-center justify-center shrink-0">
            <Bot className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-purple-600">โมดูล 5 · หัวข้อ 5.4</span>
              <span className="flex items-center gap-1 text-xs text-purple-500">
                <Clock className="w-3.5 h-3.5" /> 1 ชม. · 5 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">AI ช่วยออกแบบกิจกรรม GM + PERMA</h1>
            <p className="text-sm font-medium text-purple-600/80 mb-2">Using AI to Design Growth Mindset &amp; PERMA Activities</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              ใช้ AI เป็น Co-designer ออกแบบกิจกรรม GM+PERMA ด้วย Prompt Pattern สร้าง Activity Bank ส่วนตัว และประเมิน Output ด้วยเกณฑ์ 5 ข้อก่อนนำใช้จริง
            </p>
          </div>
        </div>
      </div>

      {/* Learning Outcomes */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-base font-bold text-text-primary mb-3">
          <CheckCircle2 className="w-4 h-4 text-purple-600" />
          ผลลัพธ์การเรียนรู้
        </h2>
        <ul className="space-y-2">
          {[
            "ใช้ Prompt Pattern สร้าง GM Activity ครบวงจรด้วย AI ได้",
            "ออกแบบ PERMA-rich Lesson Component ด้วย AI ได้",
            "ประเมิน AI Output ด้วยเกณฑ์ 5 ข้อและปรับให้เหมาะกับบริบทไทย",
            "สร้าง GM+PERMA Activity Bank ส่วนตัวที่ใช้ซ้ำได้ตลอดปี",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center text-[10px] font-bold text-purple-600 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 5.4.1 AI as Co-designer */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">5.4.1 AI เป็น Co-designer ไม่ใช่ผู้ตัดสินใจ</h2>
        <div className="rounded-xl border border-purple-100 bg-purple-50/50 p-4 mb-4">
          <p className="text-sm text-text-secondary">
            AI ช่วยลดเวลาออกแบบกิจกรรมจาก 45 นาที เหลือ ~10 นาที — แต่ <strong>ครูต้องกรอง ปรับ และใส่ความเป็นมนุษย์ลงไป</strong> AI ไม่รู้จักนักเรียนของคุณ บริบทโรงเรียน หรือความสัมพันธ์ที่คุณสร้างมา
          </p>
        </div>

        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <div className="px-4 py-2 bg-slate-50 border-b border-card-border">
            <p className="text-xs font-semibold text-text-primary">เกณฑ์ประเมิน AI Output 5 ข้อ</p>
          </div>
          <div className="divide-y divide-card-border text-xs">
            {[
              { num: "1", criterion: "ความเหมาะสมกับระดับชั้น", check: "นักเรียน [ชั้น] ทำได้จริงไหม? ยาก/ง่ายเกินไปไหม?" },
              { num: "2", criterion: "สอดคล้องกับหลักการ GM", check: "ชมกระบวนการไหม? มีคำว่า 'ยัง'? Error-positive ไหม?" },
              { num: "3", criterion: "PERMA ครบไหม", check: "มีอย่างน้อย P+E+R? หรือมีครบ 5 องค์ประกอบ?" },
              { num: "4", criterion: "ใช้ได้ทันทีไหม", check: "ต้องเตรียมอะไรเพิ่ม? มีวัสดุที่หายากไหม?" },
              { num: "5", criterion: "เหมาะกับบริบทไทย", check: "ภาษาเข้าใจง่ายไหม? ตัวอย่างคุ้นเคยกับนักเรียนไทยไหม?" },
            ].map((row) => (
              <div key={row.num} className="flex gap-3 px-4 py-2.5">
                <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 text-[10px] font-bold flex items-center justify-center shrink-0">{row.num}</span>
                <div>
                  <p className="font-semibold text-text-primary">{row.criterion}</p>
                  <p className="text-text-muted mt-0.5">{row.check}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.4.2 Prompt Patterns */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">5.4.2 Prompt Patterns สำหรับ GM + PERMA</h2>
        <div className="space-y-3">
          {[
            {
              label: "Prompt 1: สร้าง GM Activity ครบวงจร",
              prompt: "สร้าง Growth Mindset Activity ครบวงจรสำหรับวิชา [วิชา] ระดับ [ชั้น] | ให้มี: Morning Routine (5 นาที) + Main Activity (20 นาที) + Feedback ปิดท้าย (5 นาที) | แต่ละส่วนระบุ: GM แนวทางที่ใช้ + คำพูดครูตัวอย่าง + สิ่งที่นักเรียนทำ → ผลลัพธ์: GM Full Lesson Package พร้อมสอนใน 30 นาที",
            },
            {
              label: "Prompt 2: ออกแบบ PERMA Unit Plan",
              prompt: "ออกแบบ PERMA-rich Unit Plan สำหรับหน่วยการเรียนรู้ [หน่วย] วิชา [วิชา] | ระยะเวลา: [จำนวน] คาบ | ระดับ: [ชั้น] | แต่ละคาบให้ระบุ PERMA องค์ประกอบหลัก + กิจกรรมที่ Activate + Culminating Activity → ผลลัพธ์: PERMA Unit Map ที่สร้าง Well-being ตลอดทั้งหน่วย",
            },
            {
              label: "Prompt 3: ปรับ AI Output ให้เหมาะกับบริบทไทย",
              prompt: "ปรับ Activity ต่อไปนี้ให้เหมาะกับห้องเรียนไทย ระดับ [ชั้น] บริบท [โรงเรียน/ชุมชน]: | [วาง Activity ที่ AI สร้างมา] | ปรับ: ภาษา / ตัวอย่าง / วัสดุ / วิธีการให้เหมาะกับบริบทไทย รักษาหลักการ GM+PERMA ไว้ → ผลลัพธ์: Activity ที่ Localized แล้ว ใช้ได้ทันทีในห้องเรียนไทย",
            },
            {
              label: "Prompt 4: สร้าง GM+PERMA Assessment",
              prompt: "สร้าง Assessment ที่ประเมินทั้ง Academic Learning และ GM+PERMA Development | วิชา: [วิชา] | หน่วย: [หน่วย] | ระดับ: [ชั้น] | ให้มี: Academic Rubric (50%) + GM Observation Checklist (25%) + PERMA Self-Report (25%) → ผลลัพธ์: Holistic Assessment Package ที่วัดทั้งความรู้และ Well-being",
            },
          ].map((t) => (
            <div key={t.label} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <p className="text-[11px] font-semibold text-text-primary mb-1">{t.label}</p>
              <p className="text-[11px] text-text-muted font-mono leading-relaxed">{t.prompt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5.4.3 Activity Bank Template */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">5.4.3 GM+PERMA Activity Bank Template</h2>
        <p className="text-sm text-text-secondary mb-3">
          Activity Bank ลงทุนครั้งเดียว ใช้ได้ตลอด — สร้างทีละชิ้น สะสมตลอดปี แชร์กับเพื่อนครูสายวิชาเดียวกัน
        </p>
        <div className="rounded-xl border border-purple-200 bg-white p-4">
          <p className="text-xs font-bold text-purple-700 mb-3">โครงสร้าง Activity Bank (บันทึกใน Notion/Google Keep)</p>
          <div className="space-y-2 text-xs">
            {[
              ["Activity Name", "[ชื่อกิจกรรม]"],
              ["PERMA", "[P / E / R / M / A — ระบุทุกตัวที่ Activate]"],
              ["GM แนวทาง", "[แนวทางที่ 1–6 ที่ใช้]"],
              ["วิชา / ระดับ", "[วิชา] | [ชั้น]"],
              ["เวลา / วัสดุ", "[นาที] | [รายการวัสดุ]"],
              ["ขั้นตอน", "[ขั้นที่ 1–3 สั้นๆ]"],
              ["คำพูดครู", "[ตัวอย่างคำพูด GM]"],
              ["การประเมิน", "[วิธีประเมิน]"],
              ["หมายเหตุ", "บันทึกสิ่งที่ต้องปรับเมื่อนำใช้จริง"],
            ].map(([field, placeholder]) => (
              <div key={field} className="flex gap-2 p-2 bg-purple-50/50 rounded-lg border border-purple-100">
                <span className="text-[11px] font-bold text-purple-700 w-24 shrink-0">{field}:</span>
                <span className="text-text-muted font-mono text-[11px]">{placeholder}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.4.4 Module 5 Summary */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">สรุปโมดูล 5 — Active Learning, GM &amp; PERMA</h2>
        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <div className="px-4 py-2 bg-purple-50 border-b border-purple-100">
            <p className="text-xs font-semibold text-purple-700">สิ่งที่คุณมีหลังจากโมดูล 5</p>
          </div>
          <div className="divide-y divide-card-border text-xs">
            {[
              { sec: "5.1 Teaching Patterns", sum: "TPS (9/9) + 5E (Inquiry) + Hybrid (TPS ใน 5E) — เลือกตาม Pattern Selection Guide" },
              { sec: "5.2 Growth Mindset", sum: "6 แนวทาง + Growth Language + 'ยัง' + Feedforward Feedback — AI ช่วยสร้าง Scenario" },
              { sec: "5.3 PERMA Mapping", sum: "TPS: Think=P+E, Pair=R+E, Share=M+A | 5E: E=P, Explore=E, Explain=M, Elaborate=A, Evaluate=A+M" },
              { sec: "5.4 AI Tools", sum: "Prompt Pattern 4 ชุด + เกณฑ์ 5 ข้อ + Activity Bank Template — AI เป็น Co-designer ไม่ใช่ผู้ตัดสิน" },
            ].map((s) => (
              <div key={s.sec} className="flex gap-3 px-4 py-3">
                <span className="text-xs font-bold text-purple-700 w-36 shrink-0">{s.sec}</span>
                <p className="text-xs text-text-secondary">{s.sum}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-lg font-bold text-text-primary mb-3">
          <Wrench className="w-4.5 h-4.5 text-purple-600" />
          กิจกรรม Workshop (3 หัวข้อ · รวม ~60 นาที)
        </h2>
        <div className="space-y-4">
          {[
            {
              num: "1", title: "AI-Assisted GM Activity Creation",
              time: "20 นาที", format: "เดี่ยว",
              goal: "สร้าง GM Activity พร้อมใช้จริงด้วย AI Workflow",
              steps: [
                "เลือก 1 หน่วยการเรียนรู้ที่จะสอนในเดือนหน้า",
                "ใช้ Prompt Pattern 1 หรือ 2 กับ ChatGPT/Gemini สร้าง GM Activity",
                "ประเมินด้วยเกณฑ์ 5 ข้อ — ผ่านกี่ข้อ?",
                "ปรับ 1–2 จุดที่ไม่ผ่านเกณฑ์",
                "บันทึกลง Activity Bank พร้อม Tag GM แนวทาง + PERMA",
              ],
            },
            {
              num: "2", title: "PERMA-rich Lesson Design Sprint",
              time: "20 นาที", format: "เดี่ยว → คู่ Peer Check",
              goal: "ออกแบบ PERMA Component พร้อมสอน",
              steps: [
                "ใช้ Prompt Pattern 3 หรือ 4 ออกแบบ PERMA Lesson Component",
                "วิเคราะห์ร่วมกับเพื่อนครู: PERMA ครบไหม? ใช้ได้จริงไหม?",
                "ใช้ Prompt 3 ปรับ Output ให้เหมาะกับบริบทไทย",
                "ปรับ 1 จุดตาม Feedback เพื่อนครู",
              ],
            },
            {
              num: "3", title: "สร้าง Personal GM+PERMA Activity Bank",
              time: "20 นาที", format: "เดี่ยว → แชร์กลุ่ม",
              goal: "สร้าง Activity Bank ส่วนตัวอย่างน้อย 3 กิจกรรม",
              steps: [
                "ใช้ AI สร้าง Activity Bank Template สำหรับวิชาที่สอน",
                "เพิ่ม Activity จากหัวข้อ 5.1–5.4 เข้า Bank อย่างน้อย 3 ชิ้น",
                "Tag แต่ละ Activity: GM แนวทาง + PERMA + วิชา + ระดับ",
                "Share Bank กับเพื่อนครูสายวิชาเดียวกัน — แลกกัน 1 Activity",
              ],
            },
          ].map((ws) => (
            <div key={ws.num} className="rounded-xl border border-purple-200 bg-white overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 bg-purple-50 border-b border-purple-100">
                <span className="w-7 h-7 rounded-lg bg-purple-600 text-white text-xs font-bold flex items-center justify-center">W{ws.num}</span>
                <div>
                  <p className="text-sm font-bold text-text-primary">{ws.title}</p>
                  <p className="text-[11px] text-purple-500">{ws.time} · {ws.format}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs font-medium text-purple-600 mb-2">🎯 {ws.goal}</p>
                <ul className="space-y-1.5">
                  {ws.steps.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                      <span className="w-4 h-4 rounded bg-purple-100 text-purple-600 text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
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
          <Lightbulb className="w-4.5 h-4.5 text-purple-600" />
          Key Takeaways
        </h2>
        <div className="space-y-2">
          {[
            "AI เป็น Co-designer ที่ดี — แต่ครูต้องกรอง ปรับ และใส่ความเป็นมนุษย์ลงไป",
            "Prompt Pattern ทำให้สม่ำเสมอ — ใช้ Template เดิมซ้ำๆ ปรับแค่บริบท",
            "Activity Bank ลงทุนครั้งเดียว ใช้ได้ตลอด — สร้างทีละชิ้น สะสมตลอดปี",
            "GM+PERMA ไม่ขัดกับ Content — ยิ่งครูสร้าง Well-being ยิ่งได้ผลการเรียนดี",
            "โมดูล 5 ครบ — คุณมี Pattern, Mindset, Well-being และ AI Tools แล้ว",
          ].map((k, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-purple-50 border border-purple-100">
              <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-text-secondary">{k}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-purple-300 bg-purple-600 p-4 text-white">
          <p className="text-xs font-bold text-purple-200 mb-1">🎯 ภารกิจก่อน Module 6</p>
          <p className="text-sm">สร้าง <strong>GM+PERMA Activity Bank</strong> ส่วนตัวอย่างน้อย 3 กิจกรรม โดยใช้ AI ช่วยออกแบบ ประเมินด้วยเกณฑ์ 5 ข้อ และนำ 1 กิจกรรมไปใช้จริงในชั้นเรียน บันทึกผลมาแลกเปลี่ยนใน Module 6</p>
        </div>
      </section>

      {/* References */}
      <section className="mb-10">
        <h2 className="text-sm font-bold text-text-primary mb-3">เอกสารอ้างอิง</h2>
        <div className="rounded-xl border border-card-border bg-white p-4 space-y-2">
          {[
            "OpenAI. (2023). ChatGPT: Optimizing Language Models for Dialogue. https://openai.com",
            "Brown, T., et al. (2020). Language models are few-shot learners. In Advances in Neural Information Processing Systems (pp. 1877-1901).",
            "Dweck, C., & Yeager, D. (2019). Mindset: A view from two eras. Perspectives on Psychological Science, 14(3), 481-496.",
            "สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน. (2551). หลักสูตรแกนกลางการศึกษาขั้นพื้นฐาน พุทธศักราช 2551. กรุงเทพฯ.",
          ].map((ref, i) => (
            <p key={i} className="text-xs text-text-muted leading-relaxed border-l-2 border-purple-100 pl-3">{ref}</p>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-card-border">
        <Link href="/manual/module-5/5-3" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">5.3 PERMA Mapping</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <div className="text-right">
            <p className="text-[10px]">ถัดไป</p>
            <p className="font-medium text-text-secondary">โมดูล 6</p>
          </div>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
