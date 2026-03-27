import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  CheckCircle2,
  Lightbulb,
  Wrench,
  Rocket,
} from "lucide-react";

export default function Module93Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 lg:py-14 animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs text-text-muted mb-6 flex-wrap">
        <Link href="/" className="hover:text-text-secondary transition-colors">หน้าแรก</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/manual" className="hover:text-text-secondary transition-colors">คู่มือการอบรม</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/manual/module-9" className="hover:text-text-secondary transition-colors">โมดูล 9</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-text-secondary">9.3 นำเสนอ + สะท้อนคิด + Post-test</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-purple-300 bg-purple-100 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-purple-200 flex items-center justify-center shrink-0">
            <Rocket className="w-6 h-6 text-purple-700" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-purple-700">โมดูล 9 · หัวข้อ 9.3</span>
              <span className="flex items-center gap-1 text-xs text-purple-500">
                <Clock className="w-3.5 h-3.5" /> 45 นาที · 6 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">นำเสนอ Action Plan + สะท้อนคิด + Post-test</h1>
            <p className="text-sm font-medium text-purple-700/80 mb-2">4Fs Structured Reflection, Celebrating Growth, PDCA Research Cycle & Commitment Statement</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              สะท้อนการเรียนรู้ด้วย 4Fs อย่างมีโครงสร้าง ยอมรับความก้าวหน้าของตัวเอง เขียน Commitment Statement และก้าวต่อไปในฐานะครูนักวิจัย
            </p>
          </div>
        </div>
      </div>

      {/* Learning Outcomes */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-base font-bold text-text-primary mb-3">
          <CheckCircle2 className="w-4 h-4 text-purple-700" />
          ผลลัพธ์การเรียนรู้
        </h2>
        <ul className="space-y-2">
          {[
            "สะท้อนการเรียนรู้ด้วย 4Fs Framework (Facts / Feelings / Findings / Future) ได้",
            "ยอมรับและเฉลิมฉลองความก้าวหน้าของตัวเองด้วย Growth Mindset",
            "นำเสนอ Action Plan 3 นาทีและรับ Warm & Cool Feedback ได้",
            "ประยุกต์ PDCA Cycle ในฐานะ Researcher ของห้องเรียนตัวเองได้",
            "เขียน Commitment Statement ที่ชัดเจนและมีพลังสำหรับก้าวต่อไป",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center text-[10px] font-bold text-purple-700 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 9.3.1 4Fs Structured Reflection */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">9.3.1 4Fs Structured Reflection Framework</h2>
        <div className="space-y-2 mb-4">
          {[
            {
              f: "F1", name: "Facts", thai: "ข้อเท็จจริง",
              questions: [
                "เกิดอะไรขึ้นจริงๆ ในการอบรมนี้?",
                "ผ่านมากี่วัน? เรียนรู้กี่โมดูล?",
                "อะไรที่คุณทำและประสบ — ระบุให้ชัด",
              ],
              ex: "เรียน 9 โมดูล ทดลอง ChatGPT / Gemini / Claude ทำ Workshop 20+ กิจกรรม",
              color: "border-blue-200 bg-blue-50",
            },
            {
              f: "F2", name: "Feelings", thai: "ความรู้สึก",
              questions: [
                "ความรู้สึกของคุณตลอดช่วงการอบรม?",
                "ตั้งแต่วันแรกจนถึงวันนี้ เปลี่ยนไปอย่างไร?",
                "เคยท้อแท้หรือกังวล? ยินดี? ตื่นเต้น?",
              ],
              ex: "ตื่นเต้นบ้าง กังวลบ้าง กังวลเกี่ยวกับการปฏิบัติจริงในห้องเรียน",
              color: "border-green-200 bg-green-50",
            },
            {
              f: "F3", name: "Findings", thai: "สิ่งที่ค้นพบ",
              questions: [
                "สิ่งสำคัญที่เรียนรู้จากประสบการณ์นี้คืออะไร?",
                "ความเข้าใจใหม่ๆ หรือการเปลี่ยนแปลงของมุมมอง?",
                "ทักษะหรือความรู้ที่ได้มา — ระบุ 3 ข้อ",
              ],
              ex: "AI ไม่น่ากลัว มันเป็นเครื่องมือช่วย — ฉันควบคุมมันได้ ไม่ใช่มันควบคุมฉัน",
              color: "border-amber-200 bg-amber-50",
            },
            {
              f: "F4", name: "Future", thai: "อนาคต",
              questions: [
                "ตอนนี้คุณจะทำอะไรต่อไป? ขั้นตอนถัดไปคืออะไร?",
                "ความหวังและเป้าหมายในอนาคต 3 เดือน?",
                "Action Plan ของคุณเริ่มต้นอย่างไร?",
              ],
              ex: "ในเดือนเมษายน จะลอง AI กับบทเรียน 1 บท ของ ม.4 วิทยาศาสตร์",
              color: "border-purple-200 bg-purple-50",
            },
          ].map((f) => (
            <div key={f.f} className={`rounded-xl border p-4 ${f.color}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg font-black text-text-primary">{f.f}</span>
                <span className="text-sm font-bold text-text-primary">{f.name}</span>
                <span className="text-xs text-text-muted">({f.thai})</span>
              </div>
              <ul className="space-y-0.5 mb-2">
                {f.questions.map((q, i) => (
                  <li key={i} className="flex gap-1.5 text-xs text-text-secondary">
                    <span className="text-text-muted shrink-0">▸</span>{q}
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-text-muted italic bg-white/60 rounded px-2 py-1">ตัวอย่าง: "{f.ex}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9.3.2 Celebrating Growth */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">9.3.2 Celebrating Growth — ยอมรับความก้าวหน้า</h2>
        <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-4 mb-4">
          <p className="text-xs font-bold text-purple-700 mb-2">สิ่งที่คุณทำมาตลอด 9 โมดูล</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-text-secondary">
            {[
              "มาเรียน 9 โมดูล โดยอุทิศเวลาและความตั้งใจ",
              "เรียนรู้สิ่งใหม่ๆ AI / RL / CT / PERMA / Assessment",
              "ลอง Tool ต่างๆ ChatGPT / Gemini / Claude / Canva AI",
              "ทำ Workshop และ Activity หลากหลาย",
              "ทดลองสร้างสื่อ สร้างข้อสอบ สร้าง Rubric",
              "สะท้อนการสอนของตนเองและปรับปรุง",
              "มาถึงวันนี้ และพร้อมทำ Action Plan",
            ].map((item, i) => (
              <div key={i} className="flex gap-1.5">
                <span className="text-green-600 shrink-0">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Mindset Closing */}
        <div className="rounded-xl border border-green-200 bg-green-50 p-4">
          <p className="text-xs font-bold text-green-700 mb-2">Growth Mindset — คุณมีคุณสมบัติเหล่านี้แล้ว</p>
          <div className="space-y-1 text-xs text-text-secondary">
            {[
              "พร้อมท้าทายตัวเองในสิ่งที่ไม่เคยทำมาก่อน",
              "เรียนรู้จากความผิดพลาดแทนที่จะหลีกเลี่ยง",
              "ดำเนินการต่อเนื่องแม้จะยากและเหนื่อย",
              "เปิดใจรับสิ่งใหม่อย่างใจกว้าง",
            ].map((g, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-green-600 shrink-0">🌟</span>
                <span>{g}</span>
              </div>
            ))}
          </div>
          <p className="text-xs font-bold text-green-700 mt-2 text-center">นั่นแหละคุณ ที่ชื่อว่า "Growth Mindset"</p>
        </div>
      </section>

      {/* 9.3.3 Action Plan Presentation */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">9.3.3 นำเสนอ Action Plan + Warm & Cool Feedback</h2>

        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-purple-50 border-b border-purple-100">
            <p className="text-xs font-semibold text-purple-700">โครงสร้างการนำเสนอ 3 นาที</p>
          </div>
          <div className="divide-y divide-card-border text-xs">
            {[
              { time: "1 นาที", topic: "ฉันคือใคร + บริบท", detail: "ชื่อ วิชา ระดับชั้น โรงเรียน — ปัญหาที่อยากแก้" },
              { time: "1 นาที", topic: "Action Plan 3 เดือน", detail: "เดือน 1 Pilot / เดือน 2 Expand / เดือน 3 Scale — สิ่งที่จะทำ" },
              { time: "1 นาที", topic: "ขอ Feedback", detail: "สิ่งที่มั่นใจ + สิ่งที่ยังไม่แน่ใจ + คำถามที่ต้องการ Input" },
            ].map((r) => (
              <div key={r.time} className="flex gap-3 px-4 py-2.5">
                <span className="font-bold text-purple-700 w-16 shrink-0">{r.time}</span>
                <div>
                  <p className="font-medium text-text-primary">{r.topic}</p>
                  <p className="text-text-muted">{r.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warm & Cool Feedback */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-bold text-amber-700 mb-2">🌟 Warm Feedback (ชื่นชม)</p>
            <p className="text-xs text-text-secondary mb-2">บอกสิ่งที่ดีและมีพลังในแผน — ทำให้ผู้นำเสนอรู้ว่าอะไรที่ควรรักษาไว้</p>
            <div className="space-y-1 text-xs text-text-muted italic">
              <p>"ชอบที่เลือกเริ่มจาก 1 วิชาก่อน — เหมาะกับบริบทจริงมาก"</p>
              <p>"Accountability Partner ที่เลือกน่าจะช่วยได้มากเลย"</p>
            </div>
          </div>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="text-xs font-bold text-blue-700 mb-2">❄️ Cool Feedback (แนะนำ)</p>
            <p className="text-xs text-text-secondary mb-2">เสนอแนะเชิงสร้างสรรค์ — ให้ 1 ข้อที่จะทำให้แผนดีขึ้น</p>
            <div className="space-y-1 text-xs text-text-muted italic">
              <p>"ลองเพิ่ม Check Point สัปดาห์ที่ 2 เพื่อดูว่า Pilot ไปดีไหม"</p>
              <p>"อาจระบุตัวชี้วัดความสำเร็จให้ชัดขึ้นอีกนิด"</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9.3.4 PDCA Cycle */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">9.3.4 ครูในฐานะ Researcher: PDCA Cycle</h2>
        <div className="rounded-xl border border-purple-200 bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-purple-50 border-b border-purple-100">
            <p className="text-xs font-semibold text-purple-700">PDCA Cycle — วงจรพัฒนาการสอนที่ไม่มีวันหยุด</p>
          </div>
          <div className="divide-y divide-card-border text-xs">
            {[
              { step: "Plan (วางแผน)", icon: "✨", desc: "ตัดสินใจ: 'ฉันจะทำอะไร? กับใคร? เมื่อไร?' — เขียน Action Plan ให้ชัดเจน" },
              { step: "Do (ปฏิบัติ)", icon: "⚙️", desc: "ทดลองสอนตามแผน ดำเนินการจริงในห้องเรียน — ไม่สมบูรณ์แบบ 100% ก็ไม่เป็นไร" },
              { step: "Check (ตรวจสอบ)", icon: "✨", desc: "เก็บข้อมูล สังเกตนักเรียน ถาม Feedback — อะไรได้ผล อะไรต้องปรับ" },
              { step: "Act (ปรับปรุง)", icon: "✨", desc: "วิเคราะห์ผล ปรับแผน แล้ววนซ้ำ — ทุกรอบทำให้ดีขึ้น" },
            ].map((r) => (
              <div key={r.step} className="flex gap-3 px-4 py-3 items-start">
                <span className="text-base shrink-0">{r.icon}</span>
                <div className="w-28 shrink-0">
                  <p className="font-bold text-purple-700">{r.step}</p>
                </div>
                <p className="text-text-secondary">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-purple-100 bg-purple-50/30 p-3">
          <p className="text-xs font-bold text-purple-700 mb-1">หลักของครูนักวิจัย</p>
          <p className="text-xs text-text-secondary">ตั้งคำถาม → ทดลอง → เก็บหลักฐาน → สะท้อน → ปรับปรุง — ทำซ้ำอย่างต่อเนื่อง ทุกรอบคือการเรียนรู้ ไม่มีครั้งไหนที่ "ล้มเหลว" จริงๆ</p>
        </div>
      </section>

      {/* 9.3.5 Commitment Statement */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">9.3.5 Commitment Statement — คำมั่นสัญญาต่อตัวเอง</h2>
        <div className="rounded-xl border border-purple-300 bg-purple-700 p-5 text-white mb-4">
          <p className="text-xs font-bold text-purple-200 mb-2">Template คำมั่นสัญญา</p>
          <div className="space-y-1.5 text-sm">
            {[
              "ใช้ AI ในการสอนของฉัน อย่างน้อย 1 ครั้ง ต่อสัปดาห์",
              "เรียนรู้เครื่องมือ AI ใหม่ๆ อย่างน้อย 1 ตัว ต่อเดือน",
              "เข้าร่วม CoP และแชร์ประสบการณ์กับเพื่อนครู",
              "สะท้อนการสอนและปรับปรุงอย่างสม่ำเสมอ",
              "ไม่ท้อแท้เมื่อเจอปัญหา แต่มองว่าเป็นโอกาสเรียนรู้",
              "ช่วยเพื่อนครูคนอื่นๆ ในการเข้าใจและใช้ AI",
            ].map((c, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-purple-300 shrink-0">🌐</span>
                <span className="text-purple-100">ฉันจะ{c}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Message */}
        <div className="rounded-xl border border-purple-200 bg-purple-50 p-5 text-center">
          <p className="text-xl font-bold text-purple-700 mb-2">❤️ คุณพร้อมแล้ว สำหรับก้าวต่อไป</p>
          <p className="text-sm text-text-secondary leading-relaxed mb-3">
            ในทั้ง 9 โมดูล คุณได้เรียนรู้ สร้างสรรค์ ทดลอง และสะท้อนการสอนอย่างจริงจัง<br />
            AI ไม่ใช่สิ่งที่ต้องกลัว — มันเป็นเครื่องมือที่อยู่ในมือของคุณ
          </p>
          <p className="text-xs font-bold text-purple-600">อย่าเพิ่งวัดความสำเร็จด้วย "ได้ใช้ AI มากแค่ไหน" — ไปต่อเลย คุณสามารถทำได้</p>
        </div>
      </section>

      {/* Workshops */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-lg font-bold text-text-primary mb-3">
          <Wrench className="w-4.5 h-4.5 text-purple-700" />
          กิจกรรม Workshop (2 หัวข้อ · รวม ~45 นาที)
        </h2>
        <div className="space-y-4">
          {[
            {
              num: "1", title: "4Fs Reflection อย่างมีโครงสร้าง",
              time: "30 นาที", format: "เดี่ยว",
              goal: "4Fs Reflection ครบ 4 มิติ + Insight 3 ข้อที่จะนำกลับโรงเรียน",
              steps: [
                "ทบทวน Facts: เกิดอะไรขึ้นจริงๆ ในการอบรม — ระบุให้ชัด (5 นาที)",
                "สำรวจ Feelings: ความรู้สึกตลอดการอบรม — ตั้งแต่วันแรกถึงวันนี้ (5 นาที)",
                "ค้นหา Findings: สิ่งสำคัญที่เรียนรู้ 3 ข้อที่เปลี่ยน Mindset (10 นาที)",
                "วางแผน Future: ขั้นตอนต่อไปที่ชัดเจน — เชื่อมกับ Action Plan (10 นาที)",
              ],
            },
            {
              num: "2", title: "เขียน Commitment Statement",
              time: "15 นาที", format: "เดี่ยว → แชร์คู่",
              goal: "Commitment Statement ที่ลงนามและพร้อมติดในห้องพักครู",
              steps: [
                "เขียน 3 เป้าหมายที่ชัดเจนและทำได้จริงใน 3 เดือน (5 นาที)",
                "เลือก Commitment 1 ข้อที่สำคัญที่สุดสำหรับตัวเอง (3 นาที)",
                "ลงนามและวันที่ — ทำให้เป็นทางการ (2 นาที)",
                "แชร์กับ Partner — บอก Commitment 1 ข้อ รับ Warm Feedback (5 นาที)",
              ],
            },
          ].map((ws) => (
            <div key={ws.num} className="rounded-xl border border-purple-200 bg-white overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 bg-purple-50 border-b border-purple-100">
                <span className="w-7 h-7 rounded-lg bg-purple-700 text-white text-xs font-bold flex items-center justify-center">W{ws.num}</span>
                <div>
                  <p className="text-sm font-bold text-text-primary">{ws.title}</p>
                  <p className="text-[11px] text-purple-500">{ws.time} · {ws.format}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs font-medium text-purple-700 mb-2">🎯 {ws.goal}</p>
                <ul className="space-y-1.5">
                  {ws.steps.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                      <span className="w-4 h-4 rounded bg-purple-100 text-purple-700 text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Module 9 Summary */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">สรุปโมดูล 9 — Action Plan และการขยายผล</h2>
        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <div className="px-4 py-2 bg-purple-50 border-b border-purple-100">
            <p className="text-xs font-semibold text-purple-700">สิ่งที่คุณมีเมื่อจบโมดูล 9</p>
          </div>
          <div className="divide-y divide-card-border text-xs">
            {[
              { sec: "9.1 Action Plan", sum: "SMART Goal + 3-Month Plan (Pilot→Expand→Scale) + Resource Map + Accountability Partner" },
              { sec: "9.2 PLC/CoP", sum: "CoP Blueprint + Online Platform + Continuous Learning Plan + AI Literacy Checklist" },
              { sec: "9.3 Reflection", sum: "4Fs Reflection + Celebrating Growth + PDCA Cycle + Commitment Statement ลงนาม" },
            ].map((s) => (
              <div key={s.sec} className="flex gap-3 px-4 py-3">
                <span className="text-xs font-bold text-purple-700 w-32 shrink-0">{s.sec}</span>
                <p className="text-xs text-text-secondary">{s.sum}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-lg font-bold text-text-primary mb-3">
          <Lightbulb className="w-4.5 h-4.5 text-purple-700" />
          Key Takeaways — จากการอบรม 9 โมดูล
        </h2>
        <div className="space-y-2">
          {[
            "4Fs Reflection ช่วยให้เห็น Growth ของตัวเองอย่างชัดเจน — ทำทุกครั้งหลังประสบการณ์สำคัญ",
            "Commitment Statement ที่ลงนามแล้ว = สัญญากับตัวเองที่มีพลังกว่าเป้าหมายในใจ",
            "PDCA Cycle คือหัวใจของครูนักวิจัย — Plan, Try, Learn, Improve ไม่มีวันหยุด",
            "AI ไม่ใช่สิ่งที่ต้องกลัว — มันเป็นเครื่องมือในมือครู ครูยังคงเป็นหัวใจห้องเรียน",
            "การเดินทางของคุณเพิ่งเริ่มต้น — 9 โมดูลคือรากฐาน ไม่ใช่จุดสิ้นสุด",
          ].map((k, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-purple-50 border border-purple-100">
              <span className="w-5 h-5 rounded-full bg-purple-700 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-text-secondary">{k}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-card-border">
        <Link href="/manual/module-9/9-2" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">9.2 PLC ด้วย AI</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <div className="text-right">
            <p className="text-[10px]">ถัดไป</p>
            <p className="font-medium text-text-secondary">ภาคผนวก</p>
          </div>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
