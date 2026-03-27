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

export default function Module42Page() {
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
        <span className="text-text-secondary">4.2 CT ใน TPS และ 5E</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-violet-200 bg-violet-50 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-violet-200 flex items-center justify-center shrink-0">
            <Layers className="w-6 h-6 text-violet-600" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-violet-600">โมดูล 4 · หัวข้อ 4.2</span>
              <span className="flex items-center gap-1 text-xs text-violet-500">
                <Clock className="w-3.5 h-3.5" /> 1 ชม. · 9 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">CT ใน TPS และ 5E Model</h1>
            <p className="text-sm font-medium text-violet-600/80 mb-2">Embedding Critical Thinking in TPS &amp; 5E</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              ฝัง CT ในทุกขั้นของ Think-Pair-Share และ 5E Model ออกแบบ Scaffold 3 ระดับสำหรับ Analysis/Evaluation และวิเคราะห์ CT จาก 9 แผนการสอนจริง
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
            "ออกแบบ TPS Activity ที่ฝัง CT ในทุกขั้นได้",
            "วาง CT ใน Pair ของ TPS และ Explore/Elaborate ของ 5E ได้ถูกต้อง",
            "สร้าง Scaffold CT สำหรับนักเรียน Analysis/Evaluation 3 ระดับได้",
            "ระบุและแก้ไขจุดที่ CT ขาดใน 9 แผนการสอนจริง",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-violet-50 border border-violet-200 flex items-center justify-center text-[10px] font-bold text-violet-600 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 4.2.1 TPS + CT */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">4.2.1 CT ใน Think-Pair-Share</h2>
        <p className="text-sm text-text-secondary mb-4">
          TPS + CT = กิจกรรม CT แบบ Progressive — แต่ละขั้นฝึก CT ระดับต่างกัน เพิ่มขึ้นเรื่อยๆ จาก Decomposition ถึง Evaluation
        </p>

        <div className="space-y-3 mb-5">
          {[
            {
              step: "T — Think",
              ct: "Decomposition + Abstraction + Analysis",
              time: "5–7 นาที",
              color: "border-blue-200 bg-blue-50",
              badge: "bg-blue-100 text-blue-700",
              desc: "นักเรียนทำ CT คนเดียวก่อน — แยกส่วนปัญหา สรุปนามธรรม เริ่มวิเคราะห์",
              questions: [
                "'ปัญหานี้แยกออกเป็นส่วนย่อยอะไรบ้าง?' (Decomposition)",
                "'สิ่งที่สำคัญที่สุดในสถานการณ์นี้คืออะไร?' (Abstraction)",
                "'สิ่งที่รู้แน่ๆ vs. สิ่งที่ยังไม่รู้คืออะไร?' (Analysis)",
              ],
            },
            {
              step: "P — Pair",
              ct: "Analysis + Evaluation",
              time: "8–10 นาที",
              color: "border-violet-200 bg-violet-50",
              badge: "bg-violet-100 text-violet-700",
              desc: "อภิปรายกับคู่ — วิเคราะห์ร่วม เปรียบเทียบ และเริ่มประเมินทางเลือก",
              questions: [
                "'ทำไมคุณคิดอย่างนั้น? มีหลักฐานอะไรสนับสนุน?' (Analysis)",
                "'ถ้าเปลี่ยน [X] จะเกิดอะไร? ดีกว่าหรือแย่กว่า?' (Evaluation)",
                "'เราเห็นตรงกันว่า... แต่เห็นต่างกันว่า...' (Synthesis)",
              ],
            },
            {
              step: "S — Share",
              ct: "Evaluation + Abstraction + Socratic",
              time: "5–7 นาที",
              color: "border-orange-200 bg-orange-50",
              badge: "bg-orange-100 text-orange-700",
              desc: "นำเสนอต่อชั้น — แสดงจุดยืนพร้อมเหตุผล รับการตั้งคำถาม Socratic",
              questions: [
                "'เราสรุปได้ว่า... เพราะ... (Evaluation + Abstraction)'",
                "'Socratic: ถ้าข้อมูลเปลี่ยนเป็น X คำตอบของคุณยังเดิมไหม?' (CT)",
                "'มีมุมมองอื่นที่คุณยังไม่ได้พิจารณาหรือเปล่า?' (Critical Reflection)",
              ],
            },
          ].map((phase) => (
            <div key={phase.step} className={`rounded-xl border p-4 ${phase.color}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${phase.badge}`}>{phase.step}</span>
                <span className="text-xs font-semibold text-text-primary">{phase.ct}</span>
                <span className="text-xs text-text-muted ml-auto">{phase.time}</span>
              </div>
              <p className="text-xs text-text-secondary mb-2">{phase.desc}</p>
              <ul className="space-y-1">
                {phase.questions.map((q, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-xs text-text-secondary">
                    <span className="text-text-muted shrink-0 mt-0.5">▸</span>{q}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4.2.2 5E + CT */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">4.2.2 CT ใน 5E Model</h2>

        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-violet-50 border-b border-violet-100">
            <p className="text-xs font-semibold text-violet-700">การวาง CT ในแต่ละขั้น 5E</p>
          </div>
          <table className="w-full text-xs">
            <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
              <th className="text-left px-4 py-1.5 w-24">ขั้น 5E</th>
              <th className="text-left px-4 py-1.5">CT Component</th>
              <th className="text-left px-4 py-1.5">กิจกรรม CT</th>
              <th className="text-left px-4 py-1.5">Output</th>
            </tr></thead>
            <tbody className="divide-y divide-card-border">
              {[
                ["Engage", "Pattern Recognition + Analysis", "สังเกตสถานการณ์ ค้นหาแบบรูปเบื้องต้น", "คำถามนำ / สมมติฐาน"],
                ["Explore", "Decomposition + Pattern Rec. + Algorithm", "แยกส่วนปัญหา ทดลองหาแบบรูป ออกแบบขั้นตอน", "Data / Mind Map / Flowchart"],
                ["Explain", "Abstraction + Analysis", "สรุปหลักการ ตัดรายละเอียดที่ไม่จำเป็น", "สมการ / หลักการ / แบบจำลอง"],
                ["Elaborate", "Evaluation + Analysis + CT Task", "นำ CT ไปใช้สถานการณ์ใหม่ PISA Task", "ชิ้นงาน / PISA Task"],
                ["Evaluate", "Evaluation + Abstraction", "Self-assessment Peer Review Exit Ticket", "Portfolio / Reflection"],
              ].map(([step, ct, activity, output], i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-2.5 font-bold text-violet-700">{step}</td>
                  <td className="px-4 py-2.5 text-violet-600/80 font-medium text-[11px]">{ct}</td>
                  <td className="px-4 py-2.5 text-text-secondary">{activity}</td>
                  <td className="px-4 py-2.5 text-text-muted">{output}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Example lesson */}
        <div className="rounded-xl border border-violet-100 bg-violet-50/50 p-4">
          <p className="text-xs font-bold text-violet-700 mb-3">ตัวอย่าง 5E+CT: ฟิสิกส์ ม.4 &ldquo;รถแหกโค้ง MotoGP&rdquo;</p>
          <div className="space-y-2 text-xs">
            {[
              ["Engage", "ดูคลิป MotoGP + 'สังเกตเห็น Pattern อะไร?' (Pattern Rec.)"],
              ["Explore", "แยก F vs. v จากข้อมูล (Decomp) + วาด Graph (Algorithm+Pattern)"],
              ["Explain", "สรุป F_c = mv²/r (Abstraction)"],
              ["Elaborate", "PISA Task 'รถแหกโค้ง': 'ถ้า v เพิ่ม 2 เท่า F_c เปลี่ยนอย่างไร?' (Evaluation)"],
              ["Evaluate", "Exit Ticket: 'F_c ∝ v² หมายความว่าอะไร?' (Abstraction+Evaluation)"],
            ].map(([e, detail]) => (
              <div key={e} className="flex gap-2.5 bg-white rounded-lg border border-violet-100 p-2.5">
                <span className="font-bold text-violet-700 w-20 shrink-0">{e}</span>
                <span className="text-text-secondary">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.2.3 CT Scaffold */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">4.2.3 CT Scaffold — Thinking Frames</h2>
        <p className="text-sm text-text-secondary mb-4">
          Thinking Frames ช่วยนักเรียนระดับกลาง-อ่อนเข้าถึง Analysis และ Evaluation ได้ โดยค่อยๆ ลด Scaffold ตามพัฒนาการ
        </p>

        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-slate-50 border-b border-card-border">
            <p className="text-xs font-semibold text-text-primary">CT Scaffold 3 ระดับ</p>
          </div>
          <div className="divide-y divide-card-border">
            {[
              {
                level: "ระดับอ่อน — Scaffold สูง",
                color: "bg-green-50 border-green-200 text-green-700",
                items: [
                  "Decomposition Framework: ตารางแยกส่วนให้กรอก (สาเหตุ / กระบวนการ / ผลลัพธ์)",
                  "Mind Map สำเร็จรูปที่มีกล่องรอกรอก",
                  "Yes/No Analysis: 'X เป็นสาเหตุของ Y หรือไม่? เพราะ...'",
                ],
              },
              {
                level: "ระดับกลาง — Scaffold ปานกลาง",
                color: "bg-blue-50 border-blue-200 text-blue-700",
                items: [
                  "Thinking Frame: 'ฉันคิดว่า... เพราะ... หลักฐานคือ... แต่อีกมุมมองคือ...'",
                  "Data ให้บางส่วน — ให้นักเรียนหาและเชื่อมโยงเอง",
                  "Peer Share + คำถามกระตุ้นจากครู",
                ],
              },
              {
                level: "ระดับสูง — อิสระ",
                color: "bg-violet-50 border-violet-200 text-violet-700",
                items: [
                  "Open-ended Analysis — ไม่มี Frame ให้",
                  "ท้าทายด้วย Counter-argument: 'ถ้าข้อมูลบอกว่า [X ไม่จริง] คุณจะปรับคำตอบอย่างไร?'",
                  "สร้าง Socratic Question ตั้งถามให้เพื่อนได้เอง",
                ],
              },
            ].map((tier) => (
              <div key={tier.level} className="p-4">
                <p className={`text-[11px] font-bold px-2 py-0.5 rounded-md border inline-block mb-2 ${tier.color}`}>{tier.level}</p>
                <ul className="space-y-1">
                  {tier.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-text-secondary">
                      <span className="text-text-muted shrink-0 mt-0.5">▸</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-card-border bg-white p-4">
          <p className="text-xs font-bold text-text-primary mb-2">Thinking Frames ตัวอย่าง (วางใน Pair หรือ Explore)</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            {[
              { title: "Analysis Frame", frame: "'[X] ส่งผลต่อ [Y] อย่างไร?...\nเพราะ...'\n'[A] และ [B] เหมือนกันตรงที่... แตกต่างกันตรงที่...'" },
              { title: "Evaluation Frame", frame: "'ฉันคิดว่า [X] เพราะ...\nหลักฐานที่สนับสนุน: ...\nมุมมองอื่น: ...\nสรุปของฉัน: ...'" },
              { title: "Pattern Frame", frame: "'ฉันสังเกตว่า [X] แปรผัน[ตาม/ผกผัน]กับ [Y]...\nเพราะ...\nถ้า [X] เพิ่ม [Y] จะ...'" },
            ].map((f) => (
              <div key={f.title} className="rounded-lg border border-violet-100 bg-violet-50/50 p-2.5">
                <p className="font-semibold text-violet-700 mb-1">{f.title}</p>
                <p className="text-text-muted font-mono whitespace-pre-line text-[10px] leading-relaxed">{f.frame}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.2.4 CT in 9 plans */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">4.2.4 CT ใน 9 แผนการสอน — จุดที่ควรพัฒนา</h2>
        <div className="space-y-3">
          {[
            {
              flag: "✅", label: "CT Pair/Elaborate — ทำได้ดี",
              color: "bg-green-50 border-green-100",
              points: [
                "Analysis ใน Pair ของ TPS พบเกือบทุกแผน",
                "Evaluation ใน Elaborate/Share มีหลายแผน",
              ],
            },
            {
              flag: "✅", label: "Socratic Method ใน Evaluation — มีอยู่บ้าง",
              color: "bg-blue-50 border-blue-100",
              points: [
                "แผนฟิสิกส์และชีวะใช้คำถาม Socratic ใน Share",
              ],
            },
            {
              flag: "⚠️", label: "Explain มี CT น้อย — &lsquo;บอก&rsquo; แทน &lsquo;สรุปด้วยตัวเอง&rsquo;",
              color: "bg-amber-50 border-amber-100",
              points: [
                "ขั้น Explain ส่วนใหญ่ครูบอก ไม่ให้นักเรียน Abstraction เอง",
                "แก้ไข: ให้นักเรียน 'สรุปหลักการด้วยคำพูดตัวเอง' ก่อนครูเฉลย",
              ],
            },
          ].map((item) => (
            <div key={item.label} className={`rounded-xl border p-3.5 ${item.color}`}>
              <p className="text-xs font-bold text-text-primary mb-1.5">{item.flag} {item.label}</p>
              <ul className="space-y-1">
                {item.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-xs text-text-secondary">
                    <span className="text-text-muted shrink-0 mt-0.5">▸</span>{p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Prompt Templates */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">Prompt Templates สำหรับ CT+TPS/5E</h2>
        <div className="space-y-3">
          {[
            {
              label: "Prompt 1: ออกแบบ TPS Activity + CT",
              prompt: "ออกแบบกิจกรรม Think-Pair-Share บูรณาการ Computational Thinking | วิชา: [วิชา] | ระดับ: [ชั้น] | CT Focus: [Decomposition/Analysis/Evaluation] | Think: กิจกรรม CT เดี่ยว | Pair: กิจกรรม CT คู่ | Share: Synthesis + Socratic | → ผลลัพธ์: แผน TPS+CT พร้อม Thinking Frame",
            },
            {
              label: "Prompt 2: วาง CT ใน 5E Lesson Plan",
              prompt: "ออกแบบ 5E Lesson Plan บูรณาการ Computational Thinking | วิชา: [วิชา] | ระดับ: [ชั้น] | CT Components: [2–3 ด้าน] | แต่ละ E ให้ระบุ: CT Component / กิจกรรม / Output | → ผลลัพธ์: แผน 5E+CT พร้อม Timeline และ Assessment Criteria",
            },
            {
              label: "Prompt 3: Problem-Based Task CT",
              prompt: "ออกแบบ Problem-Based Learning Task วิชา [วิชา] ระดับ [ชั้น] | บริบท: [สถานการณ์จริง] | ให้นักเรียนใช้: Decomposition / Analysis / Evaluation ในการแก้ปัญหา | → ผลลัพธ์: PBL Task พร้อม Rubric CT",
            },
            {
              label: "Prompt 4: Formative Assessment CT ใน 5E",
              prompt: "ออกแบบ Formative Assessment CT สำหรับ 5E วิชา [วิชา] | ระบุ Checkpoint ในแต่ละ E: Exit Ticket / คำถาม / Peer Assessment / Portfolio Prompt | → ผลลัพธ์: Assessment Plan CT ทั้ง 5E พร้อม Feedback Strategy",
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
          กิจกรรม Workshop (3 หัวข้อ · รวม ~55 นาที)
        </h2>
        <div className="space-y-4">
          {[
            {
              num: "1", title: "TPS CT Makeover — ปรับ TPS เดิมให้มี CT",
              time: "20 นาที", format: "เดี่ยว → คู่",
              goal: "นำ TPS เดิมมาเพิ่ม CT ระดับ Analysis/Evaluation",
              steps: [
                "นำ TPS Activity ที่เคยใช้จริงมา 1 ชุด",
                "วิเคราะห์ Think/Pair: Bloom's Level อยู่ที่ใด? (Remember/Apply/Analyze/Evaluate?)",
                "เพิ่มคำถาม Analysis ใน Pair อย่างน้อย 1 ข้อ",
                "เพิ่มคำถาม Evaluation ใน Share อย่างน้อย 1 ข้อ",
                "แลกกับคู่ — CT ที่เพิ่มเข้ามาลึกพอหรือไม่?",
              ],
            },
            {
              num: "2", title: "5E CT Map — วาง CT ใน 5E แผนจริง",
              time: "15 นาที", format: "เดี่ยว (กระดาษ A4)",
              goal: "วาด CT Map ใน 5E ของแผนจริงและระบุช่องว่าง",
              steps: [
                "เลือกแผน 5E ที่ใช้จริง 1 แผน",
                "วาดตาราง 5E × CT 6 องค์ประกอบ",
                "ระบุ CT ที่มีในแต่ละขั้น",
                "ระบุ CT ที่ขาด: จะเพิ่มตรงไหน? (ขั้นใด / กิจกรรมใด?)",
                "เพิ่ม Scaffold CT 1–2 จุดที่สำคัญที่สุด",
              ],
            },
            {
              num: "3", title: "Scaffold Sprint — ออกแบบ CT Scaffold ใน 10 นาที",
              time: "10 นาที", format: "กลุ่ม 3 คน",
              goal: "สร้าง Thinking Frame สำหรับคำถาม Evaluation ระดับกลาง",
              steps: [
                "กลุ่มเลือกคำถาม Evaluation 1 ข้อจากวิชาที่สอน",
                "สร้าง Scaffold 3 ระดับ: Thinking Frame + Data Starter + Open-ended",
                "ทดสอบ: กรอก Thinking Frame เหมือนเป็นนักเรียนระดับกลาง",
                "อภิปราย: Frame ช่วยได้จริงหรือ Rigid เกินไป?",
                "ปรับ 1 รอบ — บันทึกไว้ใช้จริง",
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
            "TPS+CT: Think=Decomposition/Abstraction, Pair=Analysis/Evaluation, Share=Evaluation/Socratic",
            "5E+CT: Engage=Pattern, Explore=Decomp+Algorithm, Explain=Abstraction, Elaborate=Evaluation, Evaluate=Self-CT",
            "Scaffold CT: ระดับอ่อน=Framework+ตาราง, กลาง=Thinking Frame, สูง=Open-ended ลด Frame เรื่อยๆ",
            "Thinking Frames ช่วยนักเรียนเข้าถึง Analysis+Evaluation — แต่ต้องลด Scaffold ตามพัฒนาการ",
          ].map((k, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-violet-50 border border-violet-100">
              <span className="w-5 h-5 rounded-full bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-text-secondary">{k}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-violet-300 bg-violet-600 p-4 text-white">
          <p className="text-xs font-bold text-violet-200 mb-1">🎯 ภารกิจต่อเนื่อง (Take-Home Mission 4.2)</p>
          <p className="text-sm">นำ <strong>TPS CT Blueprint</strong> ที่ออกแบบใน Workshop ไปใช้จริง — สังเกต: นักเรียนถึง Evaluation ใน Pair ได้หรือไม่? ต้องการ Scaffold เพิ่มหรือเปล่า?</p>
        </div>
      </section>

      {/* References */}
      <section className="mb-10">
        <h2 className="text-sm font-bold text-text-primary mb-3">เอกสารอ้างอิง</h2>
        <div className="rounded-xl border border-card-border bg-white p-4 space-y-2">
          {[
            "Lyman, F. (1981). The Responsive Classroom Discussion. University of Maryland.",
            "Bybee, R.W. et al. (2006). The BSCS 5E Instructional Model. BSCS.",
            "Paul, R., & Elder, L. (2020). The Thinker's Guide to Critical Thinking. Foundation for Critical Thinking.",
            "Vygotsky, L.S. (1978). Mind in Society. Harvard University Press.",
            "Swartz, R.J., & Perkins, D.N. (1990). Teaching Thinking: Issues and Approaches. Midwest Publications.",
          ].map((ref, i) => (
            <p key={i} className="text-xs text-text-muted leading-relaxed border-l-2 border-violet-100 pl-3">{ref}</p>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-card-border">
        <Link href="/manual/module-4/4-1" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">4.1 6 องค์ประกอบ CT</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <Link href="/manual/module-4/4-3" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <div className="text-right">
            <p className="text-[10px] text-text-muted">ถัดไป</p>
            <p className="font-medium">4.3 Guided Questions &amp; Socratic</p>
          </div>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
