import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  CheckCircle2,
  Lightbulb,
  Wrench,
  Heart,
} from "lucide-react";

export default function Module53Page() {
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
        <span className="text-text-secondary">5.3 PERMA Mapping</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-purple-200 bg-purple-50 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-purple-200 flex items-center justify-center shrink-0">
            <Heart className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-purple-600">โมดูล 5 · หัวข้อ 5.3</span>
              <span className="flex items-center gap-1 text-xs text-purple-500">
                <Clock className="w-3.5 h-3.5" /> 1.5 ชม. · 4 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">PERMA Mapping กับ TPS และ 5E</h1>
            <p className="text-sm font-medium text-purple-600/80 mb-2">Mapping PERMA Framework onto TPS &amp; 5E Lesson Structures</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              วาง PERMA ทั้ง 5 องค์ประกอบในแต่ละขั้นของ TPS และ 5E — PERMA ไม่ต้องการเวลาพิเศษ แทรกอยู่ในทุกกิจกรรมที่ออกแบบดี
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
            "อธิบาย PERMA 5 องค์ประกอบและบทบาทในการเรียนรู้ได้",
            "วาง PERMA Mapping ในแต่ละขั้นของ TPS และ 5E ได้ถูกต้อง",
            "ทำ PERMA Audit แผนการสอนและออกแบบกิจกรรมเสริมได้",
            "ออกแบบ PERMA Check-in สำหรับนักเรียนที่ใช้ได้ในทุกคาบ",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center text-[10px] font-bold text-purple-600 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 5.3.1 PERMA Overview */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">5.3.1 PERMA Framework — 5 เสาหลักของ Well-being</h2>
        <p className="text-sm text-text-secondary mb-4">
          PERMA (Seligman, 2011) คือ Framework ของ Well-being ที่สนับสนุนการเรียนรู้ที่แท้จริง — นักเรียนที่มี PERMA สูงเรียนรู้ได้ดีกว่า มีแรงจูงใจมากกว่า และเผชิญความท้าทายได้ดีกว่า
        </p>

        <div className="space-y-2 mb-5">
          {[
            { letter: "P", name: "Positive Emotion", thai: "ความรู้สึกเชิงบวก", color: "border-yellow-200 bg-yellow-50", badge: "bg-yellow-100 text-yellow-700", when: "พบเมื่อ Engage สำเร็จ", desc: "ความรู้สึกสนุก อยากรู้ ตื่นเต้น — เกิดเมื่อบทเรียนเชื่อมกับสิ่งที่นักเรียนสนใจ" },
            { letter: "E", name: "Engagement", thai: "การมีส่วนร่วมอย่างลึกซึ้ง (Flow State)", color: "border-green-200 bg-green-50", badge: "bg-green-100 text-green-700", when: "พบเมื่อ Explore และ Elaborate", desc: "Flow State — เกิดเมื่องานยากพอดี ไม่ง่ายเกินและไม่ยากเกิน ต้องการสมาธิและความพยายาม" },
            { letter: "R", name: "Relationships", thai: "ความสัมพันธ์ที่ดี", color: "border-blue-200 bg-blue-50", badge: "bg-blue-100 text-blue-700", when: "พบเมื่อ Pair และ Share", desc: "ความไว้วางใจ ความเป็นส่วนหนึ่ง Safe Space — เกิดเมื่อนักเรียนรู้สึกปลอดภัยที่จะแสดงความคิด" },
            { letter: "M", name: "Meaning", thai: "ความรู้สึกว่าสิ่งที่เรียนมีความหมาย", color: "border-violet-200 bg-violet-50", badge: "bg-violet-100 text-violet-700", when: "พบเมื่อ Explain ชัดเจน", desc: "นักเรียนเห็นว่าสิ่งที่เรียนเชื่อมกับชีวิตจริง — 'นี่สำคัญเพราะ...' ทำให้อยากเรียนต่อ" },
            { letter: "A", name: "Accomplishment", thai: "ความสำเร็จและความภาคภูมิใจ", color: "border-orange-200 bg-orange-50", badge: "bg-orange-100 text-orange-700", when: "พบเมื่อ Evaluate ผ่าน", desc: "ความรู้สึกสำเร็จเมื่อทำงานได้ดี ได้รับ Feedback ที่ดี หรือนำเสนอได้สำเร็จ" },
          ].map((p) => (
            <div key={p.letter} className={`rounded-xl border p-3.5 ${p.color}`}>
              <div className="flex items-start gap-3">
                <span className={`text-lg font-black px-2.5 py-1 rounded-lg shrink-0 ${p.badge}`}>{p.letter}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-0.5">
                    <span className="text-sm font-bold text-text-primary">{p.name}</span>
                    <span className="text-xs text-text-muted">— {p.thai}</span>
                    <span className="text-[10px] text-text-muted ml-auto italic">{p.when}</span>
                  </div>
                  <p className="text-xs text-text-secondary">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5.3.2 PERMA in TPS */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">5.3.2 PERMA Mapping ใน TPS</h2>
        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-purple-50 border-b border-purple-100">
            <p className="text-xs font-semibold text-purple-700">PERMA ในแต่ละขั้นของ Think-Pair-Share</p>
          </div>
          <div className="divide-y divide-card-border">
            {[
              {
                step: "THINK",
                perma: "P + E",
                color: "text-yellow-700",
                desc: "คำถามที่น่าสงสัย / โจทย์ท้าทาย / Scenario จริง",
                tips: ["P (อยากรู้): คำถามเชื่อมกับประสบการณ์นักเรียน", "E (Focus): งานที่ยากพอดี ต้องคิดจริงๆ"],
              },
              {
                step: "PAIR",
                perma: "R + E",
                color: "text-blue-700",
                desc: "Protocol ฟังอย่างตั้งใจ / Sentence Starters",
                tips: ["R (สัมพันธ์): Safe Space คู่ ไม่มีคำตอบผิด", "E (Deep Engage): วิเคราะห์ร่วมกัน"],
              },
              {
                step: "SHARE",
                perma: "M + A",
                color: "text-orange-700",
                desc: "ทุกคำตอบถูกให้ค่า / ชมกระบวนการ",
                tips: ["M (แสดงความคิด): เชื่อมกับชีวิตจริง", "A (ภาคภูมิใจ): ได้นำเสนอ ได้รับ Feedback ดี"],
              },
            ].map((s) => (
              <div key={s.step} className="px-4 py-3">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-black text-purple-700 w-16">{s.step}</span>
                  <span className={`text-xs font-bold ${s.color}`}>PERMA: {s.perma}</span>
                </div>
                <p className="text-xs text-text-muted mb-1.5">{s.desc}</p>
                <ul className="space-y-0.5">
                  {s.tips.map((t, i) => (
                    <li key={i} className="flex gap-1.5 text-xs text-text-secondary">
                      <span className="text-text-muted shrink-0">▸</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs text-text-muted ml-1">TPS ครอบคลุม P-R-E ตามธรรมชาติ — เพิ่ม M และ A ด้วยการออกแบบ Share อย่างตั้งใจ</p>
      </section>

      {/* 5.3.3 PERMA in 5E */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">5.3.3 PERMA Mapping ใน 5E Model</h2>
        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-purple-50 border-b border-purple-100">
            <p className="text-xs font-semibold text-purple-700">PERMA ในแต่ละขั้นของ 5E</p>
          </div>
          <table className="w-full text-xs">
            <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
              <th className="text-left px-4 py-1.5 w-24">ขั้น 5E</th>
              <th className="text-left px-4 py-1.5">PERMA</th>
              <th className="text-left px-4 py-1.5">กิจกรรม/วิธีการ</th>
            </tr></thead>
            <tbody className="divide-y divide-card-border">
              {[
                ["Engage", "P — Positive Emotion", "Hook ที่น่าตื่นเต้น คำถามที่ไม่มีคำตอบถูก"],
                ["Explore", "E — Engagement (Flow)", "งานที่ยากพอดี ไม่ง่ายเกิน ไม่ยากเกิน ต้องการสมาธิ"],
                ["Explain", "M — Meaning", "เชื่อมโยงกับชีวิตจริง 'นี่สำคัญเพราะ...'"],
                ["Elaborate", "A — Accomplishment", "ท้าทายเพิ่ม นำไปใช้จริง Portfolio"],
                ["Evaluate", "A + M — ภาคภูมิใจ + ความหมาย", "Rubric ที่ชัด Self-Assessment Celebration"],
              ].map(([step, perma, activity], i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-2.5 font-bold text-purple-700">{step}</td>
                  <td className="px-4 py-2.5 font-semibold text-purple-600/80 text-[11px]">{perma}</td>
                  <td className="px-4 py-2.5 text-text-secondary">{activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-xl border border-purple-100 bg-purple-50/50 p-3">
          <p className="text-xs font-semibold text-purple-700 mb-1">💡 5E สมบูรณ์แบบสำหรับ PERMA</p>
          <p className="text-xs text-text-secondary">5E ครอบคลุม PERMA ทั้ง 5 ถ้าออกแบบแต่ละ E อย่างตั้งใจ — ไม่ต้องเพิ่มเวลาพิเศษ เพียงปรับกิจกรรมและคำพูดครู</p>
        </div>
      </section>

      {/* Prompt Templates */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">Prompt Templates สำหรับ PERMA</h2>
        <div className="space-y-3">
          {[
            {
              label: "Prompt 1: PERMA Audit แผนการสอน",
              prompt: "วิเคราะห์แผนการสอนต่อไปนี้ตาม PERMA Framework | [วางแผนการสอนหรือขั้นตอนกิจกรรม] | ระบุ: PERMA องค์ประกอบใดปรากฏ / ขาด / และข้อเสนอแนะเพิ่มแต่ละองค์ประกอบ → ผลลัพธ์: PERMA Audit Report พร้อม Action Plan ปรับแผน",
            },
            {
              label: "Prompt 2: ออกแบบกิจกรรม PERMA-rich",
              prompt: "ออกแบบกิจกรรมการเรียนรู้ที่กระตุ้น PERMA ครบทั้ง 5 องค์ประกอบ | วิชา: [วิชา] | หัวข้อ: [หัวข้อ] | ระดับ: [ชั้น] | เวลา: 50 นาที | แต่ละขั้นกิจกรรมให้ระบุ PERMA ที่ Activate และคำพูดครูที่เพิ่ม PERMA → ผลลัพธ์: PERMA-rich Lesson Plan ที่ส่งเสริม Well-being และ Achievement พร้อมกัน",
            },
            {
              label: "Prompt 3: สร้าง PERMA Self-reflection",
              prompt: "สร้างแบบฟอร์ม PERMA Self-reflection สำหรับนักเรียน [ระดับ] | รูปแบบ: คำถาม 5 ข้อ (1 ข้อต่อ PERMA) ที่นักเรียนตอบได้ใน 5 นาที | ภาษาต้องเข้าใจง่าย เหมาะกับวัย ไม่ใช้ศัพท์เทคนิค → ผลลัพธ์: PERMA Check-in Sheet พร้อมใช้ในทุกคาบเรียน",
            },
            {
              label: "Prompt 4: เชื่อม PERMA กับมาตรฐานหลักสูตร",
              prompt: "เชื่อมโยง PERMA Framework กับมาตรฐานการเรียนรู้ในวิชา [วิชา] ระดับ [ชั้น] | ระบุว่ามาตรฐานข้อใดสัมพันธ์กับ PERMA องค์ประกอบใด | เสนอ 3 กิจกรรมที่บูรณาการ PERMA + มาตรฐาน → ผลลัพธ์: PERMA-Curriculum Alignment Map พร้อมแผนกิจกรรม",
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
          <Wrench className="w-4.5 h-4.5 text-purple-600" />
          กิจกรรม Workshop (3 หัวข้อ · รวม ~55 นาที)
        </h2>
        <div className="space-y-4">
          {[
            {
              num: "1", title: "PERMA Audit — วิเคราะห์แผนปัจจุบัน",
              time: "20 นาที", format: "เดี่ยว",
              goal: "ระบุ PERMA ที่มีและขาดในแผนการสอนปัจจุบัน",
              steps: [
                "นำแผนการสอน 1 แผนมา ทำ PERMA Audit",
                "ระบุว่าแต่ละกิจกรรมกระตุ้น PERMA องค์ประกอบใด",
                "ระบุ PERMA ที่ขาด และออกแบบกิจกรรมเสริม 1 กิจกรรม",
                "ตรวจสอบ: PERMA ที่เพิ่มต้องการเวลาพิเศษหรือแค่ปรับคำพูดครู?",
              ],
            },
            {
              num: "2", title: "PERMA Sequence Design — ออกแบบครบ P-E-R-M-A",
              time: "20 นาที", format: "เดี่ยว → แชร์กลุ่ม",
              goal: "ออกแบบ Lesson Sequence ครบ PERMA โดยไม่เพิ่มเวลา",
              steps: [
                "เลือกบทเรียนที่จะสอนสัปดาห์หน้า",
                "ออกแบบ Sequence ที่ครบ P-E-R-M-A โดยไม่เพิ่มเวลา",
                "Share กับเพื่อนครู 2 คน ช่วยหา PERMA ที่หายไป",
                "Reflection: PERMA ตัวไหนยากที่สุดที่จะฝัง? เพราะอะไร?",
              ],
            },
            {
              num: "3", title: "PERMA Check-in Template — สร้างเครื่องมือวัด",
              time: "15 นาที", format: "เดี่ยว → ทดลองจริง",
              goal: "สร้าง PERMA Check-in ที่ใช้ได้ทันทีในทุกคาบ",
              steps: [
                "ออกแบบ End-of-Class Reflection ที่ให้นักเรียน Check PERMA ตนเอง",
                "รูปแบบ: นักเรียนให้คะแนน P-E-R-M-A ตัวเอง 1-5 พร้อมเหตุผล 1 ประโยค",
                "ทดลองทำร่วมกัน 5 นาที แล้ว Debrief",
                "อภิปราย: ข้อมูล PERMA จากนักเรียนจะช่วยครูปรับการสอนอย่างไร?",
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
            "PERMA ไม่ใช่ 'Extra' — เป็นเงื่อนไขสำคัญของการเรียนรู้ที่แท้จริง",
            "TPS ครอบคลุม P-R-E ตามธรรมชาติ — เพิ่ม M และ A ด้วยการออกแบบ Share อย่างตั้งใจ",
            "5E สมบูรณ์แบบสำหรับ PERMA — ถ้าออกแบบแต่ละ E อย่างตั้งใจ",
            "PERMA ไม่ต้องการเวลาพิเศษ — แทรกอยู่ในทุกกิจกรรมที่ออกแบบดี",
            "วัด PERMA ด้วย Self-reflection — ข้อมูลจากนักเรียนบอกได้มากกว่าคะแนนสอบ",
          ].map((k, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-purple-50 border border-purple-100">
              <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-text-secondary">{k}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-purple-300 bg-purple-600 p-4 text-white">
          <p className="text-xs font-bold text-purple-200 mb-1">🎯 ภารกิจต่อเนื่อง (Take-Home Mission 5.3)</p>
          <p className="text-sm">ทำ <strong>PERMA Audit</strong> บทเรียนที่คุณสอนในสัปดาห์นี้ ระบุว่า PERMA องค์ประกอบใดแข็งแกร่งที่สุดและองค์ประกอบใดที่ขาดไป นำผลมาแลกเปลี่ยนในหัวข้อ 5.4</p>
        </div>
      </section>

      {/* References */}
      <section className="mb-10">
        <h2 className="text-sm font-bold text-text-primary mb-3">เอกสารอ้างอิง</h2>
        <div className="rounded-xl border border-card-border bg-white p-4 space-y-2">
          {[
            "Seligman, M. (2011). Flourish: A visionary new understanding of happiness and well-being. New York: Free Press.",
            "Adler, A., & Seligman, M. (2016). Using wellbeing for public policy. Journal of the British Academy, 4(1), 1-38.",
            "Rusk, R., & Waters, L. (2015). Tracing the size, reach, impact, and breadth of positive psychology. The Journal of Positive Psychology, 10(6), 475-487.",
            "สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน. (2551). หลักสูตรแกนกลางการศึกษาขั้นพื้นฐาน พุทธศักราช 2551. กรุงเทพฯ.",
          ].map((ref, i) => (
            <p key={i} className="text-xs text-text-muted leading-relaxed border-l-2 border-purple-100 pl-3">{ref}</p>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-card-border">
        <Link href="/manual/module-5/5-2" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">5.2 Growth Mindset 6 แนวทาง</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <Link href="/manual/module-5/5-4" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <div className="text-right">
            <p className="text-[10px] text-text-muted">ถัดไป</p>
            <p className="font-medium">5.4 AI ช่วยออกแบบ GM + PERMA</p>
          </div>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
