import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  CheckCircle2,
  Lightbulb,
  Wrench,
  MessageSquare,
} from "lucide-react";

export default function Module43Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 lg:py-14 animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs text-text-muted mb-6 flex-wrap">
        <Link href="/" className="hover:text-text-secondary transition-colors">หน้าแรก</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/manual" className="hover:text-text-secondary transition-colors">คู่มือการอบรม</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/manual/module-4" className="hover:text-text-secondary transition-colors">โมดูล 4</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-text-secondary">4.3 Guided Questions &amp; Socratic Method</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-violet-200 bg-violet-50 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-violet-200 flex items-center justify-center shrink-0">
            <MessageSquare className="w-6 h-6 text-violet-600" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-violet-600">โมดูล 4 · หัวข้อ 4.3</span>
              <span className="flex items-center gap-1 text-xs text-violet-500">
                <Clock className="w-3.5 h-3.5" /> 1 ชม. · 8 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">Guided Questions &amp; Socratic Method</h1>
            <p className="text-sm font-medium text-violet-600/80 mb-2">Designing Questions That Drive Critical Thinking</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              ออกแบบ Guided Questions 3 ระดับ (Remember / Analyze / Evaluate) ใช้ Socratic Method 6 ประเภทกระตุ้น CT และสร้าง Question Bank ที่ใช้ซ้ำได้ตลอดปี
            </p>
          </div>
        </div>
      </div>

      {/* Learning Outcomes */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-base font-bold text-text-primary mb-3">
          <CheckCircle2 className="w-4 h-4 text-violet-600" />
          ผลลัพธ์การเรียนรู้
        </h2>
        <ul className="space-y-2">
          {[
            "ออกแบบ Guided Questions 3 ระดับ (Remember/Analyze/Evaluate) ในบทเรียนจริงได้",
            "ใช้ Socratic Method 6 ประเภทกระตุ้น CT ในห้องเรียนได้",
            "ออกแบบ Classroom Dialogue ที่ฝัง CT อย่างเป็นระบบ",
            "สร้าง Question Bank CT พร้อมใช้ได้ทันที",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-violet-50 border border-violet-200 flex items-center justify-center text-[10px] font-bold text-violet-600 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 4.3.1 Guided Questions 3 Levels */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">4.3.1 Guided Questions 3 ระดับ (Bloom&apos;s)</h2>
        <p className="text-sm text-text-secondary mb-4">
          Guided Questions คือคำถามที่ครูออกแบบไว้ล่วงหน้าเพื่อ &ldquo;นำ&rdquo; ความคิดนักเรียนขึ้นระดับ — ต้องมีทั้ง 3 ระดับในแต่ละบทเรียน
        </p>

        <div className="space-y-3 mb-5">
          {[
            {
              level: "ระดับ 1", name: "Remember / Understand",
              bloom: "Bloom's L1–L2",
              color: "border-green-200 bg-green-50", badge: "bg-green-100 text-green-700",
              desc: "คำถามที่ตอบได้จากการจำหรือเข้าใจพื้นฐาน — เริ่มบทเรียน เปิดประตูความคิด",
              examples: [
                "'F_c = mv²/r หมายความว่าอะไร?' (ตรวจสอบความเข้าใจ)",
                "'ระบุตัวแปรในสมการนี้' (Recall)",
                "'อธิบายด้วยคำพูดตัวเองว่า Decomposition คืออะไร'",
              ],
              tip: "ใช้เปิดบทเรียน 3–5 คำถาม เพื่อ Activate Prior Knowledge",
            },
            {
              level: "ระดับ 2", name: "Analysis",
              bloom: "Bloom's L4",
              color: "border-blue-200 bg-blue-50", badge: "bg-blue-100 text-blue-700",
              desc: "คำถามที่ต้องการวิเคราะห์ความสัมพันธ์ เปรียบเทียบ และอธิบายเหตุผล",
              examples: [
                "'ทำไม F_c ถึงแปรผันตาม v² ไม่ใช่ v?' (Analysis)",
                "'ความสัมพันธ์ระหว่าง m และ F_c เหมือนหรือต่างจาก v และ F_c อย่างไร?'",
                "'ถ้าเปลี่ยน r เป็น 2r โดยที่ v คงที่ F_c จะเปลี่ยนอย่างไร?'",
              ],
              tip: "ใช้ใน Pair ของ TPS หรือ Explore/Explain ของ 5E — Wait Time 5–7 วินาที",
            },
            {
              level: "ระดับ 3", name: "Evaluate / Create",
              bloom: "Bloom's L5–L6",
              color: "border-violet-200 bg-violet-50", badge: "bg-violet-100 text-violet-700",
              desc: "คำถามที่ต้องการตัดสินใจ ประเมิน แสดงจุดยืนพร้อมหลักฐาน",
              examples: [
                "'การออกแบบโค้งนี้ปลอดภัยพอหรือไม่? อธิบายด้วยหลักฟิสิกส์'",
                "'ถ้าคุณเป็นวิศวกร คุณจะปรับ r หรือ v ก่อน? เพราะอะไร?'",
                "'Algorithm นี้มีจุดอ่อนอะไร? จะแก้ไขอย่างไร?'",
              ],
              tip: "ใช้ใน Share หรือ Elaborate — ไม่มีคำตอบเดียวที่ถูก ต้องการ Reasoning",
            },
          ].map((lv) => (
            <div key={lv.level} className={`rounded-xl border p-4 ${lv.color}`}>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${lv.badge}`}>{lv.level}</span>
                <span className="text-sm font-bold text-text-primary">{lv.name}</span>
                <span className="text-xs text-text-muted">({lv.bloom})</span>
              </div>
              <p className="text-xs text-text-secondary mb-2">{lv.desc}</p>
              <ul className="space-y-1 mb-2">
                {lv.examples.map((ex, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-xs text-text-secondary">
                    <span className="text-text-muted shrink-0 mt-0.5">▸</span>{ex}
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-text-muted bg-white/60 rounded px-2 py-1">💡 {lv.tip}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-amber-100 bg-amber-50 p-3">
          <p className="text-xs font-semibold text-amber-800 mb-1">⚠️ สิ่งที่ต้องเลี่ยง</p>
          <ul className="space-y-1 text-xs text-amber-700">
            <li className="flex gap-1.5"><span className="shrink-0">✗</span>&lsquo;F_c เท่าไร?&rsquo; — คำถาม L1 ล้วนๆ ไม่ฝึก CT</li>
            <li className="flex gap-1.5"><span className="shrink-0">✗</span>&lsquo;ใช่หรือไม่ใช่?&rsquo; — Yes/No ไม่กระตุ้น Reasoning</li>
            <li className="flex gap-1.5"><span className="shrink-0">✗</span>ถาม 1–7 ข้อ รวดเดียว โดยไม่รอคำตอบ — ลด Wait Time</li>
            <li className="flex gap-1.5"><span className="shrink-0">✗</span>รับแค่ผู้อาสาสมัคร (Volunteer) — ใช้ Random Call เสมอ</li>
          </ul>
        </div>
      </section>

      {/* 4.3.2 Socratic Method */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">4.3.2 Socratic Method — 6 ประเภทคำถาม</h2>
        <p className="text-sm text-text-secondary mb-4">
          Socratic Method คือการถามคำถามต่อเนื่องเพื่อกระตุ้น Metacognition — ให้นักเรียนตรวจสอบความคิดของตัวเอง ไม่ใช่แค่ตอบคำถาม
        </p>

        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-violet-50 border-b border-violet-100">
            <p className="text-xs font-semibold text-violet-700">6 ประเภท Socratic Questioning (Paul &amp; Elder, 2007)</p>
          </div>
          <div className="divide-y divide-card-border">
            {[
              { num: "1", type: "Clarification (ชี้แจง)", ex: "'คุณหมายความว่าอะไรเมื่อบอกว่า [X]?'", purpose: "ให้นักเรียนอธิบายความคิดให้ชัดขึ้น" },
              { num: "2", type: "Probe Assumptions (ตั้งคำถามสมมติฐาน)", ex: "'คุณสันนิษฐานว่าอะไรเมื่อพูดแบบนั้น?'", purpose: "เปิดเผยข้อสมมติที่ซ่อนอยู่" },
              { num: "3", type: "Probe Evidence (ตรวจสอบหลักฐาน)", ex: "'มีหลักฐานอะไรสนับสนุนความคิดนั้น?'", purpose: "กระตุ้นให้อ้างอิงจากข้อมูลจริง" },
              { num: "4", type: "Different Perspectives (มุมมองอื่น)", ex: "'มีใครที่มองเรื่องนี้ต่างออกไปบ้างไหม?'", purpose: "เปิดรับมุมมองหลากหลาย หลีกเลี่ยง Groupthink" },
              { num: "5", type: "Probe Implications (สำรวจผลกระทบ)", ex: "'ถ้าสิ่งที่คุณพูดถูก จะเกิดอะไรตามมา?'", purpose: "ฝึก Consequence Thinking" },
              { num: "6", type: "Question the Question (ตั้งคำถามกับคำถาม)", ex: "'ทำไมคำถามนั้นถึงสำคัญ? เชื่อมกับอะไร?'", purpose: "Metacognition — ฝึกคิดเกี่ยวกับการคิด" },
            ].map((s) => (
              <div key={s.num} className="px-4 py-3 flex gap-3">
                <span className="w-5 h-5 rounded-full bg-violet-100 text-violet-700 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{s.num}</span>
                <div>
                  <p className="text-xs font-semibold text-text-primary">{s.type}</p>
                  <p className="text-xs text-violet-600 font-mono mt-0.5">{s.ex}</p>
                  <p className="text-[11px] text-text-muted mt-0.5">{s.purpose}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Socratic Dialogue example */}
        <div className="rounded-xl border border-violet-100 bg-violet-50/50 p-4">
          <p className="text-xs font-bold text-violet-700 mb-3">ตัวอย่าง Socratic Dialogue: ฟิสิกส์ &ldquo;รถแหกโค้ง&rdquo;</p>
          <div className="space-y-2 text-xs">
            {[
              { role: "นักเรียน", text: "'F_c ต้องเพิ่มขึ้น'" },
              { role: "ครู (Clarification)", text: "'เพิ่มขึ้นในลักษณะใด? เพิ่มขึ้นอย่างไรเมื่อเทียบกับ v?'" },
              { role: "นักเรียน", text: "'เพิ่มเป็นสองเท่า'" },
              { role: "ครู (Probe Evidence)", text: "'สมการบอกว่าอะไร? ลองแทนค่าจริงดูสิ'" },
              { role: "นักเรียน", text: "'โอ้ F_c เพิ่มเป็น 4 เท่า เพราะ v ยกกำลังสอง'" },
              { role: "ครู (Probe Implications)", text: "'ถ้าอย่างนั้น ความเร็วอันตรายกว่ามวลมากแค่ไหน?'" },
            ].map((d, i) => (
              <div key={i} className={`rounded-lg px-3 py-2 ${d.role.includes("ครู") ? "bg-violet-100 border border-violet-200" : "bg-white border border-slate-200"}`}>
                <span className={`text-[10px] font-bold ${d.role.includes("ครู") ? "text-violet-700" : "text-text-muted"}`}>{d.role}: </span>
                <span className="text-text-secondary">{d.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.3.3 Classroom Dialogue */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">4.3.3 Classroom Dialogue ที่ฝัง CT</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {[
            {
              title: "Wait Time 5–7 วินาที",
              color: "border-sky-100 bg-sky-50",
              points: [
                "หลังถามคำถาม Analysis/Evaluation รอ 5–7 วินาทีก่อนรับคำตอบ",
                "Wait Time เพิ่มคุณภาพคำตอบ ลดการตอบแบบ Recall",
                "ให้นักเรียน Think Time 30 วิ → เขียน 2 ประโยค → แล้วตอบ",
              ],
            },
            {
              title: "Random Call — ไม่ใช่แค่ Volunteer",
              color: "border-violet-100 bg-violet-50",
              points: [
                "ใช้ Random Call แทนการรับแค่ผู้อาสา — ทุกคนต้องเตรียมพร้อม",
                "ก่อน Random: &lsquo;ทุกคนเตรียมคำตอบไว้ก่อน — ฉันจะสุ่มถาม&rsquo;",
                "หลังตอบ: ถาม Follow-up &lsquo;...? เพราะอะไร?&rsquo; ทันที",
              ],
            },
          ].map((tip) => (
            <div key={tip.title} className={`rounded-xl border p-3 ${tip.color}`}>
              <p className="text-xs font-bold text-text-primary mb-1.5">{tip.title}</p>
              <ul className="space-y-1">
                {tip.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-xs text-text-secondary">
                    <span className="text-text-muted shrink-0 mt-0.5">▸</span>{p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-card-border bg-white p-4">
          <p className="text-xs font-bold text-text-primary mb-2">Dialogue Pattern CT ที่แนะนำ</p>
          <div className="space-y-1.5 text-xs">
            {[
              ["Guided Q (ระดับ 1)", "เปิดบทเรียน Decompose ปัญหา — &lsquo;ปัญหานี้มีส่วนประกอบอะไรบ้าง?&rsquo;"],
              ["นักเรียนตอบ", "รับคำตอบโดยไม่บอก ถูก/ผิดทันที — &lsquo;น่าสนใจ บอกเพิ่มเติมได้ไหม?&rsquo;"],
              ["Guided Q (ระดับ 2)", "ถาม Analysis — &lsquo;ทำไมจึงคิดแบบนั้น? มีหลักฐานอะไร?&rsquo;"],
              ["Socratic Follow-up", "Probe Evidence/Implications — &lsquo;ถ้า [X] ไม่จริง คำตอบของคุณยังเดิมไหม?&rsquo;"],
              ["Guided Q (ระดับ 3)", "ถาม Evaluation — &lsquo;สรุปแล้วคุณคิดว่าอะไรดีที่สุด? เพราะอะไร?&rsquo;"],
            ].map(([stage, action]) => (
              <div key={stage} className="flex gap-2.5 p-2 rounded-lg border border-slate-100 bg-slate-50">
                <span className="text-[11px] font-bold text-violet-600 w-36 shrink-0">{stage}</span>
                <span className="text-text-secondary">{action}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.3.4 Question Bank */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">4.3.4 Question Bank CT — สร้างและใช้ซ้ำ</h2>
        <p className="text-sm text-text-secondary mb-3">Question Bank ที่ดีมีครบทุกระดับ Bloom&apos;s พร้อม Tag เพื่อเลือกใช้ได้ทันที</p>

        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-slate-50 border-b border-card-border">
            <p className="text-xs font-semibold text-text-primary">โครงสร้าง Question Bank CT (ต่อ 1 บทเรียน)</p>
          </div>
          <div className="divide-y divide-card-border text-xs">
            {[
              { num: "1", type: "นำเข้าสู่บทเรียน (Engage)", count: "3–5 ข้อ", level: "L1 (Remember)" },
              { num: "2", type: "คำถาม L1 เปิดบทเรียน", count: "2 ข้อ", level: "Remember" },
              { num: "3", type: "คำถาม Analysis", count: "3 ข้อ", level: "Bloom's L4 — ใช้ใน Pair/Explore" },
              { num: "4", type: "คำถาม Socratic Follow-up", count: "2 ข้อ", level: "Probe Evidence / Implications" },
              { num: "5", type: "คำถาม Evaluation", count: "2 ข้อ", level: "Bloom's L5 — ใช้ใน Elaborate/Share" },
              { num: "6", type: "Tag ใน Google Doc/Notion", count: "ทุกข้อ", level: "Bloom's Level / 5E Stage / CT Component" },
            ].map((row) => (
              <div key={row.num} className="flex gap-3 px-4 py-2.5">
                <span className="w-5 h-5 rounded-full bg-violet-100 text-violet-700 text-[10px] font-bold flex items-center justify-center shrink-0">{row.num}</span>
                <span className="font-semibold text-text-primary w-48 shrink-0">{row.type}</span>
                <span className="text-violet-600 font-medium w-16 shrink-0">{row.count}</span>
                <span className="text-text-muted">{row.level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Example Question Bank */}
        <div className="rounded-xl border border-violet-100 bg-violet-50/50 p-4">
          <p className="text-xs font-bold text-violet-700 mb-3">ตัวอย่าง Question Bank: ชีววิทยา &ldquo;ห่วงโซ่อาหาร&rdquo;</p>
          <div className="space-y-2 text-xs">
            {[
              { level: "L1", tag: "Remember", q: "'Food Chain คืออะไร? ยกตัวอย่าง 1 ห่วงโซ่'" },
              { level: "L2", tag: "Analysis", q: "'ถ้า 50% ของหญ้าสูญหาย Food Chain จะเปลี่ยนอย่างไร?'" },
              { level: "Socratic", tag: "Probe Evidence", q: "'คุณแน่ใจได้อย่างไรว่า [สัตว์ X] ขึ้นอยู่กับ [Y] เท่านั้น?'" },
              { level: "Socratic", tag: "Probe Implications", q: "'ถ้าข้อสรุปของคุณถูก นักนิเวศวิทยาควรทำอะไร?'" },
              { level: "L3", tag: "Evaluation", q: "'มนุษย์ควรแทรกแซงห่วงโซ่อาหารนี้หรือไม่? เพราะอะไร?'" },
            ].map((q, i) => (
              <div key={i} className="flex gap-2 p-2 bg-white rounded-lg border border-violet-100">
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0 ${
                  q.level === "L1" ? "bg-green-100 text-green-700" :
                  q.level === "L2" ? "bg-blue-100 text-blue-700" :
                  q.level === "L3" ? "bg-violet-100 text-violet-700" :
                  "bg-amber-100 text-amber-700"
                }`}>{q.level}</span>
                <span className="text-[10px] text-text-muted w-20 shrink-0">{q.tag}</span>
                <span className="text-text-secondary">{q.q}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prompt Templates */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">Prompt Templates สำหรับ Guided Questions</h2>
        <div className="space-y-3">
          {[
            {
              label: "Prompt 1: สร้าง Guided Questions ตาม Bloom's",
              prompt: "สร้าง Guided Questions วิชา [วิชา] ระดับ [ชั้น] ตาม Bloom's Taxonomy 6 ระดับ | บทเรียน: [หัวข้อ] | แต่ละระดับให้มี 2 ข้อ (รวม 12 ข้อ) | ระบุ: Bloom's Level / CT Component / ควรใช้ในขั้นใดของ 5E → ผลลัพธ์: Question Bank 12 ข้อพร้อม Tag",
            },
            {
              label: "Prompt 2: ออกแบบ Socratic Seminar",
              prompt: "ออกแบบ Socratic Seminar วิชา [วิชา] | หัวข้อ: [หัวข้อ] | ระดับ: [ชั้น] | เวลา: 50 นาที | รูปแบบ: [วงกลม/กลุ่ม] | ให้มี: คำถามเปิด 5 ข้อ / Probe Evidence / Implications / Follow-up → ผลลัพธ์: Socratic Seminar Guide พร้อม Facilitation Notes",
            },
            {
              label: "Prompt 3: สร้าง Follow-up Questions Socratic",
              prompt: "จากคำตอบนักเรียน: &lsquo;[คำตอบนักเรียน]&rsquo; | วิชา: [วิชา] | ระดับ: [ชั้น/ระดับ] | สร้าง Follow-up Questions 5 ข้อแบบ Socratic | ประเภท: Clarification / Probe Evidence / Implications → ผลลัพธ์: 5 Follow-up Questions กระตุ้น Higher-order Thinking",
            },
            {
              label: "Prompt 4: แปลง Textbook Questions เป็น Guided Questions",
              prompt: "แปลงคำถามจากหนังสือเรียนต่อไปนี้เป็น Guided Questions Socratic | [วางคำถามจากหนังสือเรียน] | เน้น: Open-ended / CT / ไม่มี Yes/No Answer → ผลลัพธ์: Guided Questions CT-ready ที่กระตุ้น Analysis และ Evaluation",
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
          <Wrench className="w-4.5 h-4.5 text-violet-600" />
          กิจกรรม Workshop (3 หัวข้อ · รวม ~50 นาที)
        </h2>
        <div className="space-y-4">
          {[
            {
              num: "1", title: "Question Makeover — อัปเกรดคำถามเดิม",
              time: "20 นาที", format: "เดี่ยว → คู่",
              goal: "แปลงคำถาม L1 เดิมให้เป็น L2 Analysis และ L3 Evaluation",
              steps: [
                "เลือกคำถามที่ใช้สอนจริง 5 ข้อ",
                "วิเคราะห์แต่ละข้อ: อยู่ Bloom's Level ใด?",
                "แปลงคำถาม Remember/Understand ให้เป็น Analysis อย่างน้อย 2 ข้อ",
                "เพิ่ม Socratic Follow-up 1 ข้อต่อ Analysis",
                "แลกกับคู่: คำถามใหม่ CT กว่าเดิมหรือไม่?",
              ],
            },
            {
              num: "2", title: "Socratic Practice — ฝึก Dialogue 15 นาที",
              time: "15 นาที", format: "กลุ่ม 3 คน (ครู A / ครู B / Observer)",
              goal: "ฝึกใช้ Socratic Method ในสถานการณ์จริง",
              steps: [
                "กลุ่มเลือกหัวข้อ: &lsquo;PISA Task ฟิสิกส์ควรมีในชั้นเรียนทุกระดับหรือไม่?&rsquo;",
                "ครู A ถามโดยใช้ Socratic 6 ประเภท (อย่างน้อย 3 ประเภท)",
                "ครู B ตอบโดยพัฒนาความคิดตามคำถาม",
                "Observer จดบันทึก: ใช้ Socratic ประเภทใด CT ดีขึ้นหรือไม่?",
                "สลับบทบาท 1 รอบ + Reflection: Socratic ยากตรงไหน?",
              ],
            },
            {
              num: "3", title: "Question Bank Builder — สร้าง Bank 1 บทเรียน",
              time: "15 นาที", format: "เดี่ยว",
              goal: "สร้าง Question Bank CT พร้อมใช้ทันที",
              steps: [
                "เลือก 1 บทเรียนที่จะสอนในสัปดาห์หน้า",
                "สร้างคำถาม: L1 (2) / Analysis (3) / Socratic Follow-up (2) / L3 Evaluation (2)",
                "Tag แต่ละข้อ: Bloom's Level + ใช้ใน Engage/Explore/Elaborate",
                "บันทึกใน Google Doc/Notion พร้อม Tag",
                "เป้าหมาย: Question Bank 1 บทเรียน พร้อมใช้กลับบ้าน",
              ],
            },
          ].map((ws) => (
            <div key={ws.num} className="rounded-xl border border-violet-200 bg-white overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 bg-violet-50 border-b border-violet-100">
                <span className="w-7 h-7 rounded-lg bg-violet-600 text-white text-xs font-bold flex items-center justify-center">W{ws.num}</span>
                <div>
                  <p className="text-sm font-bold text-text-primary">{ws.title}</p>
                  <p className="text-[11px] text-violet-500">{ws.time} · {ws.format}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs font-medium text-violet-600 mb-2">🎯 {ws.goal}</p>
                <ul className="space-y-1.5">
                  {ws.steps.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                      <span className="w-4 h-4 rounded bg-violet-100 text-violet-600 text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
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
          <Lightbulb className="w-4.5 h-4.5 text-violet-600" />
          Key Takeaways
        </h2>
        <div className="space-y-2">
          {[
            "Guided Questions 3 ระดับ: L1 เปิดบทเรียน → L2 Analysis ใน Pair/Explore → L3 Evaluation ใน Share/Elaborate",
            "Socratic 6 ประเภท: Clarify / Probe Assumptions / Evidence / Perspectives / Implications / Question the Q — ฝึก Metacognition",
            "Dialogue CT: Think Time 30 วิ → เขียน → ตอบ + Random Call ไม่ใช่แค่ Volunteer",
            "Question Bank: L1(2) + Analysis(3) + Socratic(2) + Evaluation(2) = 9 ข้อต่อบทเรียน — Tag ใน Google Doc",
          ].map((k, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-violet-50 border border-violet-100">
              <span className="w-5 h-5 rounded-full bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-text-secondary">{k}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-violet-300 bg-violet-600 p-4 text-white">
          <p className="text-xs font-bold text-violet-200 mb-1">🎯 ภารกิจต่อเนื่อง (Take-Home Mission 4.3)</p>
          <p className="text-sm">ใช้ <strong>Socratic Method</strong> ในบทเรียนหน้า อย่างน้อย 1 ช่วง — บันทึก: นักเรียนตอบสนองอย่างไร? มี 10% ของชั้นเรียนที่ได้ฝึก CT จริงหรือไม่?</p>
        </div>
      </section>

      {/* References */}
      <section className="mb-10">
        <h2 className="text-sm font-bold text-text-primary mb-3">เอกสารอ้างอิง</h2>
        <div className="rounded-xl border border-card-border bg-white p-4 space-y-2">
          {[
            "Plato. (c. 399 BC). The Dialogues of Plato (B. Jowett, Trans.). Oxford University Press.",
            "Paul, R., & Elder, L. (2007). The Art of Socratic Questioning. Foundation for Critical Thinking.",
            "Rowe, M.B. (1986). Wait time: Slowing down may be a way of speeding up. Journal of Teacher Education, 37(1), 43–50.",
            "Bloom, B.S. (1956). Taxonomy of Educational Objectives. David McKay Company.",
            "Chin, C. (2007). Teacher questioning in science classrooms. Journal of Research in Science Teaching, 44(6), 815–843.",
          ].map((ref, i) => (
            <p key={i} className="text-xs text-text-muted leading-relaxed border-l-2 border-violet-100 pl-3">{ref}</p>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-card-border">
        <Link href="/manual/module-4/4-2" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">4.2 CT ใน TPS และ 5E</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <Link href="/manual/module-4/4-4" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <div className="text-right">
            <p className="text-[10px] text-text-muted">ถัดไป</p>
            <p className="font-medium">4.4 AI Tools CT + Rubric</p>
          </div>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
