import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  CheckCircle2,
  Lightbulb,
  Wrench,
  Sparkles,
} from "lucide-react";

export default function Module52Page() {
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
        <span className="text-text-secondary">5.2 Growth Mindset 6 แนวทาง</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-purple-200 bg-purple-50 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-purple-200 flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-purple-600">โมดูล 5 · หัวข้อ 5.2</span>
              <span className="flex items-center gap-1 text-xs text-purple-500">
                <Clock className="w-3.5 h-3.5" /> 1 ชม. · 5 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">Growth Mindset: 6 แนวทาง + คำพูดครูจริง</h1>
            <p className="text-sm font-medium text-purple-600/80 mb-2">Growth Mindset 6 Strategies with Real Teacher Language</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              เข้าใจ Growth Mindset 6 แนวทางจากงานวิจัย Dweck ฝึกเปลี่ยน Fixed Language เป็น Growth Language และสร้าง Growth Feedback ที่กระตุ้นให้นักเรียนอยากพัฒนา
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
            "อธิบาย Growth Mindset 6 แนวทางพร้อมตัวอย่างคำพูดครูจริงได้",
            "แปลง Fixed Language เป็น Growth Language ได้ทันที",
            "เขียน Growth Feedforward ที่กระตุ้นการพัฒนาได้",
            "ออกแบบ Growth Mindset Lesson Opener สำหรับบทเรียนจริงได้",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center text-[10px] font-bold text-purple-600 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 5.2.1 What is Growth Mindset */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">5.2.1 Growth Mindset คืออะไร?</h2>
        <div className="rounded-xl border border-purple-100 bg-purple-50/50 p-4 mb-4">
          <p className="text-xs font-bold text-purple-700 mb-2">Growth Mindset ≠ &lsquo;คิดบวก&rsquo;</p>
          <p className="text-sm text-text-secondary">
            Growth Mindset คือความเชื่อว่า <strong>ความสามารถพัฒนาได้ด้วยความพยายามและกลยุทธ์ที่ถูกต้อง</strong> — ไม่ใช่แค่ &lsquo;คิดบวก&rsquo; แต่เป็นความเชื่อที่สร้างได้ด้วยหลักฐานและการฝึก (Dweck, 2006)
          </p>
        </div>
        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <div className="px-4 py-2 bg-slate-50 border-b border-card-border">
            <p className="text-xs font-semibold text-text-primary">Fixed Mindset vs. Growth Mindset</p>
          </div>
          <table className="w-full text-xs">
            <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
              <th className="text-left px-4 py-1.5">สถานการณ์</th>
              <th className="text-left px-4 py-1.5 text-red-600">Fixed ❌</th>
              <th className="text-left px-4 py-1.5 text-green-600">Growth ✓</th>
            </tr></thead>
            <tbody className="divide-y divide-card-border">
              {[
                ["ทำข้อสอบไม่ผ่าน", "'ฉันไม่เก่งวิชานี้'", "'ฉันยังต้องเรียนรู้เพิ่มในส่วนนี้'"],
                ["ทำผิดพลาด", "'ฉันโง่จริงๆ'", "'นี่คือข้อมูลว่าต้องพัฒนาตรงไหน'"],
                ["งานยาก", "'ฉันทำไม่ได้'", "'ฉันยังทำไม่ได้ — ต้องหาวิธีใหม่'"],
                ["เพื่อนเก่งกว่า", "'ฉันสู้เขาไม่ได้'", "'ฉันจะเรียนรู้จากเขาได้อะไรบ้าง?'"],
              ].map(([sit, fixed, growth], i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-2.5 text-text-muted">{sit}</td>
                  <td className="px-4 py-2.5 text-red-600">{fixed}</td>
                  <td className="px-4 py-2.5 text-green-700 font-medium">{growth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5.2.2 6 Strategies */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">5.2.2 Growth Mindset 6 แนวทาง + คำพูดครูจริง</h2>
        <div className="space-y-3">
          {[
            {
              num: "1", name: "ความผิดพลาด = โอกาสเรียนรู้ (Error-positive)",
              color: "border-red-100 bg-red-50",
              badge: "bg-red-100 text-red-700",
              desc: "สร้างบรรยากาศที่ความผิดพลาดถูกยินดีรับ ไม่ถูกลงโทษ — นักเรียนกล้าลองมากขึ้น",
              examples: [
                "'ความผิดพลาดคือ Debugger ของชีวิต — มันบอกว่าต้องแก้ตรงไหน' (ครูวัฒนา)",
                "'ใครลองแล้วไม่ได้ผล? ดีมาก — บอกทั้งห้องได้เลยว่าเรียนรู้อะไร'",
                "'ผิดพลาดหน้าชั้น = สอนทั้งห้องฟรี ขอบคุณที่กล้า'",
              ],
            },
            {
              num: "2", name: "Process Praise — ชมกระบวนการ ไม่ใช่แค่ผล",
              color: "border-green-100 bg-green-50",
              badge: "bg-green-100 text-green-700",
              desc: "ชมความพยายาม กลยุทธ์ และกระบวนการ ไม่ใช่แค่ความฉลาดหรือผลลัพธ์ (Hattie & Timperley, 2007)",
              examples: [
                "'เธอใช้วิธีที่น่าสนใจมาก — บอกได้ไหมว่าคิดยังไงถึงลองแบบนี้?'",
                "'ขยันหาข้อมูลมาก — ครั้งต่อไปลองเชื่อมโยงกันดูนะ จะแข็งแกร่งขึ้น'",
                "ห้ามพูด: 'เธอเก่งมาก!' → เปลี่ยนเป็น: 'เธอพยายามมากและมันออกมาดี'",
              ],
            },
            {
              num: "3", name: "Scaffolding ค่อยเป็นค่อยไป",
              color: "border-blue-100 bg-blue-50",
              badge: "bg-blue-100 text-blue-700",
              desc: "ให้ Visual Supports + Guided Questions ทีละขั้น ลด Scaffold ตามพัฒนาการของนักเรียน",
              examples: [
                "เริ่มด้วย Sentence Starters: 'ฉันคิดว่า... เพราะ...'",
                "Tier 1 → Tier 2 → Tier 3: ลด Frame ทีละขั้นเมื่อนักเรียนพร้อม",
                "'คราวนี้ฉันจะไม่ให้ตัวช่วยแล้ว — แต่ถ้าติดเดี๋ยวบอกได้นะ'",
              ],
            },
            {
              num: "4", name: "ทุกคนมีคุณค่า — Role Assignment",
              color: "border-amber-100 bg-amber-50",
              badge: "bg-amber-100 text-amber-700",
              desc: "กำหนดบทบาทกลุ่มให้ชัดเจน ทุกคนมีหน้าที่สำคัญ ไม่มีใครถูกทิ้งไว้",
              examples: [
                "บทบาท: ผู้แกนนำ / ผู้จับเวลา / ผู้สังเกต / ผู้บันทึก",
                "สลับบทบาททุกกิจกรรม — ทุกคนได้ฝึกทุก Role",
                "'ผู้บันทึก ทำได้ดีมาก — บันทึกของเธอช่วยทั้งกลุ่ม'",
              ],
            },
            {
              num: "5", name: "Growth Language — พลังของคำว่า 'ยัง'",
              color: "border-violet-100 bg-violet-50",
              badge: "bg-violet-100 text-violet-700",
              desc: "เปลี่ยนประโยค Fixed เป็น Growth ได้ทันทีด้วยคำว่า 'ยัง' — เปิดประตูความเป็นไปได้",
              examples: [
                "Fixed: 'ฉันทำไม่ได้' → Growth: 'ฉันยังทำไม่ได้'",
                "Fixed: 'ฉันไม่เข้าใจ' → Growth: 'ฉันยังไม่เข้าใจ — จะลองวิธีอื่น'",
                "ครูพูดว่า: 'คุณยังทำแบบนั้นได้ดีไม่พอ — แต่จะได้' แทน 'คุณทำไม่ได้'",
              ],
            },
            {
              num: "6", name: "Growth Feedback — Feedforward",
              color: "border-sky-100 bg-sky-50",
              badge: "bg-sky-100 text-sky-700",
              desc: "ให้ Feedback ที่ชี้ทิศทางพัฒนาต่อ ไม่ใช่แค่ตัดสินผลงานที่ผ่านมา (Feedforward)",
              examples: [
                "สูตร: สิ่งที่ทำดี (ระบุชัด) + สิ่งที่ยังต้องพัฒนา + ขั้นต่อไปที่ทำได้",
                "'ย่อหน้า 2 มีหลักฐานดี — เพิ่มการเชื่อมโยงกับย่อหน้า 3 จะแข็งแกร่งขึ้น'",
                "'วิธีนี้ถูกทิศทาง — ลองตรวจสอบขั้นที่ 3 อีกครั้ง เห็นอะไรบ้าง?'",
              ],
            },
          ].map((s) => (
            <div key={s.num} className={`rounded-xl border p-4 ${s.color}`}>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${s.badge}`}>แนวทาง {s.num}</span>
                <span className="text-sm font-bold text-text-primary">{s.name}</span>
              </div>
              <p className="text-xs text-text-secondary mb-2">{s.desc}</p>
              <ul className="space-y-1">
                {s.examples.map((ex, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-xs text-text-secondary">
                    <span className="text-text-muted shrink-0 mt-0.5">▸</span>{ex}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 5.2.3 Growth Feedback Table */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">5.2.3 Growth Feedback ตัวอย่างจริง</h2>
        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <div className="px-4 py-2 bg-purple-50 border-b border-purple-100">
            <p className="text-xs font-semibold text-purple-700">Growth Feedforward ตามประเภทงาน</p>
          </div>
          <table className="w-full text-xs">
            <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
              <th className="text-left px-4 py-1.5">ประเภทงาน</th>
              <th className="text-left px-4 py-1.5">Growth Feedforward ตัวอย่าง</th>
            </tr></thead>
            <tbody className="divide-y divide-card-border">
              {[
                ["งานเขียน", "'ย่อหน้า 2 มีหลักฐานดี — เพิ่มการเชื่อมโยงกับย่อหน้า 3 จะทำให้แข็งแกร่งขึ้น'"],
                ["การแก้โจทย์", "'วิธีนี้ถูกทิศทาง — ลองตรวจสอบขั้นที่ 3 อีกครั้ง เห็นอะไรบ้าง?'"],
                ["การนำเสนอ", "'เนื้อหาครบถ้วนดี — ครั้งต่อไปลองสบตาผู้ฟังมากขึ้น จะน่าเชื่อถือกว่านี้'"],
                ["การทำงานกลุ่ม", "'กลุ่มนี้ฟังกันดีมาก — ลองให้ทุกคนมีโอกาสพูดเท่าๆ กัน'"],
              ].map(([type, feedback], i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-2.5 font-semibold text-purple-700 w-32 shrink-0">{type}</td>
                  <td className="px-4 py-2.5 text-text-secondary">{feedback}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Prompt Templates */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">Prompt Templates สำหรับ Growth Mindset</h2>
        <div className="space-y-3">
          {[
            {
              label: "Prompt 1: สร้าง Growth Mindset Scenario",
              prompt: "สร้างสถานการณ์ห้องเรียน 5 ฉาก ที่ครูสามารถฝึกใช้ Growth Language | วิชา: [วิชา] | ระดับ: [ชั้น] | แต่ละฉากให้มี: Fixed Response ❌ + Growth Response ✓ + เหตุผล | เน้นสถานการณ์ที่ครูพบจริงบ่อยๆ เช่น ทำข้อสอบไม่ผ่าน / ไม่ยอมทำ / ทำผิด → ผลลัพธ์: Growth Language Practice Cards 5 ชุด",
            },
            {
              label: "Prompt 2: เขียน Growth Mindset Feedback",
              prompt: "เขียน Feedforward Feedback สำหรับงานนักเรียนต่อไปนี้: [อธิบายงาน/ผลงานนักเรียน] | ใช้สูตร: สิ่งที่ทำดี (ระบุชัดเจน) + สิ่งที่ยังต้องพัฒนา + ขั้นต่อไปที่ทำได้ (Action-oriented) → ผลลัพธ์: Growth Feedforward ที่กระตุ้นให้นักเรียนอยากพัฒนาต่อ",
            },
            {
              label: "Prompt 3: ออกแบบ GM Classroom Routine",
              prompt: "ออกแบบ Growth Mindset Routine ประจำวัน/สัปดาห์ สำหรับครู [วิชา] ระดับ [ชั้น] | ให้มี: Morning Routine (5 นาที) / Mid-class Check (3 นาที) / Closing Reflection (5 นาที) | แต่ละ Routine ให้มีคำพูดครูตัวอย่าง + กิจกรรมที่นักเรียนทำ → ผลลัพธ์: GM Daily Routine Script ใช้ได้ทันที",
            },
            {
              label: "Prompt 4: สร้าง GM Parent Communication",
              prompt: "เขียนข้อความสื่อสารกับผู้ปกครองที่ส่งเสริม Growth Mindset | สถานการณ์: [เช่น นักเรียนทำคะแนนต่ำ / มีพัฒนาการ / มีปัญหาพฤติกรรม] | เน้น: กระบวนการและความพยายาม / Action Plan ร่วมกัน / ไม่ตีตรา → ผลลัพธ์: Parent Communication Template ที่ส่งเสริม GM ทั้งที่บ้านและโรงเรียน",
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
          <Wrench className="w-4.5 h-4.5 text-purple-600" />
          กิจกรรม Workshop (3 หัวข้อ · รวม ~60 นาที)
        </h2>
        <div className="space-y-4">
          {[
            {
              num: "1", title: "Fixed-to-Growth Language Practice",
              time: "20 นาที", format: "คู่ → กลุ่ม 4 คน",
              goal: "สร้าง Growth Language Bank ส่วนตัว",
              steps: [
                "อ่าน Fixed Language 10 ประโยคที่ครูมักพูดในห้องเรียน",
                "จับคู่แปลงเป็น Growth Language คนละ 1 ประโยค",
                "Share ใน 4 คน เลือก Version ที่ดีที่สุดและเหตุผล",
                "สังเกต: ใช้ 'ยัง' ช่วยได้กี่ประโยค? Pattern ของ Fixed Language คืออะไร?",
              ],
            },
            {
              num: "2", title: "Feedback Makeover — แปลง Feedback เดิม",
              time: "20 นาที", format: "เดี่ยว → คู่",
              goal: "เปลี่ยน Fixed Feedback เป็น Growth Feedforward",
              steps: [
                "นำ Feedback ที่เคยให้นักเรียนมาคนละ 1 ชิ้น",
                "วิเคราะห์: Fixed or Growth? Backward (ตัดสินผ่านมา) or Feedforward (ชี้ทิศทาง)?",
                "เขียนใหม่เป็น Growth Feedforward ตามสูตร: ดี + พัฒนา + ขั้นต่อไป",
                "แลกกับคู่: Feedforward ใหม่กระตุ้นการพัฒนาได้จริงหรือไม่?",
              ],
            },
            {
              num: "3", title: "Growth Mindset Lesson Opener",
              time: "20 นาที", format: "เดี่ยว → นำเสนอ",
              goal: "สร้าง GM Opener 5 นาทีพร้อมใช้ในคาบถัดไป",
              steps: [
                "ออกแบบ Lesson Opener 5 นาที ที่สร้าง Growth Mindset ก่อนเริ่มสอน",
                "ใช้หลักการ: ยาก-แต่-ทำได้ + เน้น Process + ใช้ 'ยัง' อย่างน้อย 1 ครั้ง",
                "ทดลองนำเสนอกับเพื่อนครู (2 นาที) รับ Feedback",
                "ปรับ 1 จุดตาม Feedback — บันทึกไว้ใช้จริง",
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
            "Growth Mindset ไม่ใช่ 'คิดบวก' — เป็นความเชื่อที่สร้างได้ด้วยหลักฐานและการฝึก",
            "คำพูดครูสำคัญมาก — Fixed Language ทำลาย Mindset ได้ในไม่กี่วินาที",
            "ชม Process ไม่ใช่ผล — 'เธอขยัน' ดีกว่า 'เธอเก่ง' มีผลวิจัยรองรับ",
            "'ยัง' เป็นคำวิเศษ — เปลี่ยนประโยค Fixed เป็น Growth ได้ทันที",
            "AI ช่วยสร้าง Growth Feedback ได้ — แต่ต้องเพิ่มความอบอุ่นของครูลงไปด้วย",
          ].map((k, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-purple-50 border border-purple-100">
              <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-text-secondary">{k}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-purple-300 bg-purple-600 p-4 text-white">
          <p className="text-xs font-bold text-purple-200 mb-1">🎯 ภารกิจต่อเนื่อง (Take-Home Mission 5.2)</p>
          <p className="text-sm">เลือก 1 แนวทางจาก 6 แนวทาง Growth Mindset มาลองใช้ในคาบเรียนจริงก่อนอบรมครั้งถัดไป บันทึก: (1) พูดว่าอะไร? (2) นักเรียนตอบสนองอย่างไร? (3) คิดจะทำซ้ำหรือปรับอย่างไร?</p>
        </div>
      </section>

      {/* References */}
      <section className="mb-10">
        <h2 className="text-sm font-bold text-text-primary mb-3">เอกสารอ้างอิง</h2>
        <div className="rounded-xl border border-card-border bg-white p-4 space-y-2">
          {[
            "Dweck, C. (2006). Mindset: The New Psychology of Success. New York: Random House.",
            "Hattie, J., & Timperley, H. (2007). The power of feedback. Review of Educational Research, 77(1), 81-112.",
            "Blackwell, L., Trzesniewski, K., & Dweck, C. (2007). Implicit theories of intelligence predict achievement across an adolescent transition. Child Development, 78(1), 246-263.",
            "สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน. (2551). หลักสูตรแกนกลางการศึกษาขั้นพื้นฐาน พุทธศักราช 2551. กรุงเทพฯ.",
          ].map((ref, i) => (
            <p key={i} className="text-xs text-text-muted leading-relaxed border-l-2 border-purple-100 pl-3">{ref}</p>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-card-border">
        <Link href="/manual/module-5/5-1" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">5.1 Teaching Patterns</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <Link href="/manual/module-5/5-3" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <div className="text-right">
            <p className="text-[10px] text-text-muted">ถัดไป</p>
            <p className="font-medium">5.3 PERMA Mapping</p>
          </div>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
