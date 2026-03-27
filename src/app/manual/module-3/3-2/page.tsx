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

export default function Module32Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 lg:py-14 animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs text-text-muted mb-6 flex-wrap">
        <Link href="/" className="hover:text-text-secondary transition-colors">หน้าแรก</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/manual" className="hover:text-text-secondary transition-colors">คู่มือการอบรม</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/manual/module-3" className="hover:text-text-secondary transition-colors">โมดูล 3</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-text-secondary">3.2 RL ใน TPS และ 5E</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-sky-200 flex items-center justify-center shrink-0">
            <Layers className="w-6 h-6 text-sky-600" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-sky-600">โมดูล 3 · หัวข้อ 3.2</span>
              <span className="flex items-center gap-1 text-xs text-sky-500">
                <Clock className="w-3.5 h-3.5" /> 1 ชม. · 8 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">การวางตำแหน่ง RL ใน TPS และ 5E</h1>
            <p className="text-sm font-medium text-sky-600/80 mb-2">Embedding RL in TPS &amp; 5E Instructional Models</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              ฝัง Reading Literacy ในทุกขั้นของ Think-Pair-Share และ 5E Model ออกแบบ Scaffold 3 ระดับ และประเมิน RL ด้วย Rubric ที่เหมาะสม — โดยไม่ต้องเปลี่ยนโมเดลการสอน
            </p>
          </div>
        </div>
      </div>

      {/* Learning Outcomes */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-base font-bold text-text-primary mb-3">
          <CheckCircle2 className="w-4 h-4 text-sky-600" />
          ผลลัพธ์การเรียนรู้
        </h2>
        <ul className="space-y-2">
          {[
            "ออกแบบ TPS Activity ที่ฝัง RL L3–L4 ได้ในทุกขั้น",
            "วาง RL ในแต่ละขั้น 5E ได้ถูกต้องตามระดับ PISA",
            "สร้าง Scaffold 3 ระดับสำหรับบทอ่านเดียวกันได้ (อ่อน/กลาง/เก่ง)",
            "ประเมิน RL ใน TPS และ 5E ด้วย Rubric 4 ระดับได้",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center text-[10px] font-bold text-sky-600 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 3.2.1 TPS + RL */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">3.2.1 TPS กับ Reading Literacy</h2>
        <p className="text-sm text-text-secondary mb-4">
          Think-Pair-Share เป็น Framework ที่ฝัง RL ได้ทุกขั้น โดยแต่ละขั้นต้องมี RL ระดับต่างกัน
        </p>

        <div className="space-y-3 mb-5">
          {[
            {
              step: "Think",
              rl: "RL เดี่ยว (L1–L2)",
              color: "border-green-200 bg-green-50",
              badge: "bg-green-100 text-green-700",
              desc: "นักเรียนอ่านบทความ/สถานการณ์คนเดียว ค้นหาข้อมูล (L1) และตีความเบื้องต้น (L2)",
              design: [
                "บทอ่าน PISA-style 150–200 คำ บริบทจริงที่เกี่ยวกับชีวิตนักเรียน",
                "คำถาม L1: 'ข้อมูลอะไรในบทอ่านที่บอกว่า...?'",
                "คำถาม L2: 'จากบทอ่าน สรุปได้ว่าอะไรเป็นสาเหตุหลัก?'",
                "เวลา: 5–8 นาที ให้เขียนตอบก่อนพูดคุย",
              ],
            },
            {
              step: "Pair",
              rl: "RL + อภิปราย (L2–L3)",
              color: "border-blue-200 bg-blue-50",
              badge: "bg-blue-100 text-blue-700",
              desc: "นักเรียนอภิปรายกับคู่ ตีความร่วมกัน (L2) และนำไปใช้ในบริบทใหม่ (L3)",
              design: [
                "คำถามอภิปรายคู่ Level L2–L3: 'ถ้าสถานการณ์เปลี่ยนเป็น... จะเกิดอะไร?'",
                "ให้แต่ละคนอธิบายความเข้าใจของตนก่อน แล้วหาจุดเหมือน/ต่าง",
                "ครูเดินฟังและโน้ตคำตอบที่น่าสนใจสำหรับ Share",
                "เวลา: 7–10 นาที",
              ],
            },
            {
              step: "Share",
              rl: "RL + สาธารณะ (L3–L4)",
              color: "border-violet-200 bg-violet-50",
              badge: "bg-violet-100 text-violet-700",
              desc: "นักเรียนนำเสนอต่อชั้น สะท้อนคิด (L4) และรับ Feedback จากเพื่อน",
              design: [
                "คำถาม Synthesis สำหรับ Class Discussion: 'เราควรตัดสินใจอย่างไร? เพราะอะไร?'",
                "ให้นักเรียน Justify คำตอบด้วยหลักฐานจากบทอ่าน",
                "ครูใช้คำถาม Follow-up: 'มีใครเห็นต่าง? เหตุผลคืออะไร?'",
                "เวลา: 10–15 นาที",
              ],
            },
          ].map((phase) => (
            <div key={phase.step} className={`rounded-xl border p-4 ${phase.color}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${phase.badge}`}>{phase.step}</span>
                <span className="text-xs font-semibold text-text-primary">{phase.rl}</span>
              </div>
              <p className="text-xs text-text-secondary mb-2">{phase.desc}</p>
              <ul className="space-y-1">
                {phase.design.map((d, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-xs text-text-secondary">
                    <span className="text-text-muted shrink-0 mt-0.5">▸</span>{d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-sky-100 bg-sky-50/50 p-3">
          <p className="text-xs font-semibold text-sky-700 mb-1.5">💡 หลักการสำคัญ TPS+RL</p>
          <ul className="space-y-1 text-xs text-text-secondary">
            <li className="flex gap-1.5"><span className="text-sky-500 shrink-0">•</span>ทุกขั้นควรมี RL ระดับต่างกัน — ไม่ใช่ L1 ทั้งหมด</li>
            <li className="flex gap-1.5"><span className="text-sky-500 shrink-0">•</span>บทอ่านต้องใช้บริบทจริงที่เกี่ยวกับวิชา ไม่ใช่แค่บทความทั่วไป</li>
            <li className="flex gap-1.5"><span className="text-sky-500 shrink-0">•</span>คำถาม L4 ควรมีอย่างน้อย 1 ข้อในขั้น Share เสมอ</li>
          </ul>
        </div>
      </section>

      {/* 3.2.2 5E + RL */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">3.2.2 5E Model กับ Reading Literacy</h2>
        <p className="text-sm text-text-secondary mb-4">
          แต่ละขั้นของ 5E ใช้ RL ระดับต่างกัน โดยระดับ PISA จะเพิ่มขึ้นเรื่อยๆ ตามขั้น
        </p>

        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-sky-50 border-b border-sky-100">
            <p className="text-xs font-semibold text-sky-700">การวาง RL ระดับ PISA ในแต่ละขั้น 5E</p>
          </div>
          <table className="w-full text-xs">
            <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
              <th className="text-left px-4 py-1.5 w-24">ขั้น 5E</th>
              <th className="text-left px-4 py-1.5 w-20">RL Level</th>
              <th className="text-left px-4 py-1.5">กิจกรรม RL ที่แนะนำ</th>
              <th className="text-left px-4 py-1.5">ตัวอย่างคำถาม</th>
            </tr></thead>
            <tbody className="divide-y divide-card-border">
              {[
                ["Engage", "L1–L2", "อ่านบริบทเปิดบทเรียน ค้นหาข้อมูลพื้นฐาน", "'จากบทความ อะไรคือปัญหาหลัก?'"],
                ["Explore", "L2–L3", "อ่านข้อมูลเพิ่มเติม เชื่อมโยงความรู้ใหม่", "'ข้อมูลนี้เชื่อมกับสิ่งที่รู้แล้วอย่างไร?'"],
                ["Explain", "L2", "อ่านคำอธิบาย แนวคิด และสรุปด้วยตัวเอง", "'สรุปหลักการที่ได้เรียนด้วยคำของตัวเอง'"],
                ["Elaborate", "L3–L4", "นำความรู้ไปใช้ในสถานการณ์ใหม่", "'ถ้าเปลี่ยนตัวแปร... จะเกิดอะไร? อธิบาย'"],
                ["Evaluate", "L4", "สะท้อนคิด ประเมิน วิพากษ์", "'กระบวนการนี้ยุติธรรมหรือไม่? เพราะอะไร?'"],
              ].map(([step, level, activity, q], i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-2.5 font-bold text-sky-700">{step}</td>
                  <td className="px-4 py-2.5 font-semibold text-violet-600">{level}</td>
                  <td className="px-4 py-2.5 text-text-secondary">{activity}</td>
                  <td className="px-4 py-2.5 text-text-muted font-mono text-[10px]">{q}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
          <p className="text-xs font-bold text-sky-700 mb-2">📌 จุดเน้น: เพิ่ม RL ไม่ต้องเปลี่ยนโมเดล</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <div className="bg-white rounded-lg border border-sky-100 p-2.5">
              <p className="font-semibold text-text-primary mb-1">สิ่งที่ไม่ต้องเปลี่ยน</p>
              <p className="text-text-muted">โครงสร้าง 5E เดิม กิจกรรมที่ทำอยู่แล้ว เวลาทั้งหมด</p>
            </div>
            <div className="bg-white rounded-lg border border-sky-100 p-2.5">
              <p className="font-semibold text-text-primary mb-1">สิ่งที่เพิ่ม</p>
              <p className="text-text-muted">บทอ่านสั้น 150–200 คำ คำถาม L3–L4 อย่างน้อย 2 ข้อ</p>
            </div>
            <div className="bg-white rounded-lg border border-sky-100 p-2.5">
              <p className="font-semibold text-text-primary mb-1">ผลที่ได้</p>
              <p className="text-text-muted">นักเรียนฝึก RL สูงขึ้น โดยเรียนเนื้อหาวิชาเดิม</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3.2.3 Scaffolding */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">3.2.3 Scaffolding RL: ออกแบบสำหรับนักเรียนหลากหลาย</h2>
        <p className="text-sm text-text-secondary mb-4">
          Scaffold ช่วยให้นักเรียนระดับอ่อนถึง L3–L4 ได้ โดยค่อยๆ ลด Scaffold ตามความสามารถที่พัฒนาขึ้น (Zone of Proximal Development — Vygotsky, 1978)
        </p>

        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-slate-50 border-b border-card-border">
            <p className="text-xs font-semibold text-text-primary">Scaffold 3 ระดับสำหรับบทอ่านเดียวกัน</p>
          </div>
          <div className="divide-y divide-card-border">
            {[
              {
                level: "ระดับอ่อน",
                label: "Tier 1 — Scaffold สูง",
                color: "bg-green-50 border-green-200 text-green-700",
                items: [
                  "Glossary: คำศัพท์สำคัญพร้อมความหมายภาษาไทย",
                  "Yes/No Questions: 'ข้อความนี้ถูกหรือผิด?' ก่อนถามคำถามเปิด",
                  "Sentence Frame: 'ฉันคิดว่า... เพราะ... จากบทอ่านระบุว่า...'",
                  "ภาพประกอบ/กราฟิกออร์แกไนเซอร์ช่วยจัดระเบียบข้อมูล",
                ],
              },
              {
                level: "ระดับกลาง",
                label: "Tier 2 — Scaffold ปานกลาง",
                color: "bg-blue-50 border-blue-200 text-blue-700",
                items: [
                  "Sentence Starter: 'จากบทอ่าน...', 'ฉันสังเกตว่า...'",
                  "Guiding Questions ที่ชี้ทิศทางการคิด",
                  "ให้ระบุหลักฐาน 2–3 ชิ้นก่อนสรุป",
                ],
              },
              {
                level: "ระดับสูง",
                label: "Tier 3 — ลด Scaffold",
                color: "bg-violet-50 border-violet-200 text-violet-700",
                items: [
                  "Open-ended Questions เต็มรูปแบบ ไม่มี Sentence Frame",
                  "ให้เปรียบเทียบมุมมองหลายด้านก่อนสรุป",
                  "ท้าทายด้วยคำถาม Counter-argument",
                ],
              },
            ].map((tier) => (
              <div key={tier.level} className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${tier.color}`}>{tier.label}</span>
                  <span className="text-xs font-semibold text-text-primary">{tier.level}</span>
                </div>
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

        <div className="rounded-xl border border-amber-100 bg-amber-50 p-3">
          <p className="text-xs font-semibold text-amber-800 mb-1">⚠️ หลักการ: ลด Scaffold เรื่อยๆ ไม่ใช่ตัดทิ้งทันที</p>
          <p className="text-xs text-amber-700">เป้าหมายคือให้นักเรียนทำได้โดยไม่มี Scaffold ในที่สุด — ลดทีละขั้นตามพัฒนาการ ไม่ใช่ให้ทุกคนใช้ Scaffold เดียวกันตลอดปี</p>
        </div>
      </section>

      {/* Prompt Templates */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">3.2.4 Prompt Templates สำหรับ TPS+RL และ 5E+RL</h2>
        <div className="space-y-3">
          {[
            {
              label: "Prompt 1: สร้างกิจกรรม TPS+RL",
              prompt: "ออกแบบกิจกรรม TPS+RL วิชา [ชื่อวิชา] ระดับ [ชั้น] [X] นาที | Think ([X]นาที): บทอ่าน PISA-style เรื่อง [บริบทจริง] + คำถาม L1/L2 | Pair ([X]นาที): คำถามอภิปรายคู่ Level L2-L3 | Share ([X]นาที): คำถาม Synthesis L4 สำหรับ Class Discussion | เพิ่ม: Scaffold สำหรับนักเรียนที่ต้องการความช่วยเหลือ → ผลลัพธ์: แผนกิจกรรม TPS+RL พร้อม Scaffold ครบถ้วน",
            },
            {
              label: "Prompt 2: วางตำแหน่ง RL ใน 5E Lesson Plan",
              prompt: "ออกแบบแผนการสอน 5E (Engage-Explore-Explain-Elaborate-Evaluate) บูรณาการ Reading Literacy วิชา [ชื่อวิชา] ระดับ [ชั้น] เวลา 100 นาที | ระบุว่าในแต่ละ E ใช้ทักษะ RL ระดับ PISA ใด (L1-L4) → ผลลัพธ์: แผนการสอน 5E+RL พร้อม Assessment Criteria",
            },
            {
              label: "Prompt 3: สร้าง Reading Scaffold สำหรับนักเรียน 3 กลุ่ม",
              prompt: "สร้าง Reading Scaffold สำหรับบทอ่านเรื่อง [หัวข้อ] | แบ่งเป็น 3 ระดับ: ต้องการความช่วยเหลือมาก / ปานกลาง / อิสระ | แต่ละระดับให้มี: คำถามนำ / คำศัพท์ช่วย / กราฟิกออร์แกไนเซอร์ → ผลลัพธ์: Scaffold 3 ชุดพร้อมใช้ใน Differentiated Classroom",
            },
            {
              label: "Prompt 4: ประเมิน RL ในกิจกรรม 5E",
              prompt: "สร้างเครื่องมือประเมิน Reading Literacy สำหรับกิจกรรม 5E วิชา [ชื่อวิชา] โดยใช้กรอบ PISA: Locate / Integrate / Reflect | ให้มี Rubric 4 ระดับ และตัวอย่างงานนักเรียนแต่ละระดับ → ผลลัพธ์: Rubric RL พร้อม Anchor Papers สำหรับครู",
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
          <Wrench className="w-4.5 h-4.5 text-sky-600" />
          กิจกรรม Workshop (3 หัวข้อ · รวม ~70 นาที)
        </h2>
        <div className="space-y-4">
          {[
            {
              num: "1", title: "TPS Blueprint — ออกแบบ TPS+RL สำหรับวิชาตัวเอง",
              time: "25 นาที", format: "กลุ่มวิชาเดียวกัน 3–4 คน",
              goal: "สร้าง TPS Blueprint ที่ใช้ได้จริงในชั้นเรียน",
              steps: [
                "กลุ่มเลือกบทเรียนที่จะสอนร่วมกัน 1 บทเรียน",
                "ร่วมกันเขียนบทอ่าน PISA-style 150–200 คำ (ใช้ AI ช่วยร่างก็ได้)",
                "ออกแบบคำถามสำหรับ Think (L1–L2) / Pair (L2–L3) / Share (L4)",
                "เพิ่ม Scaffold สำหรับนักเรียนอ่อน 1 ชุด (Glossary + Sentence Frame)",
                "นำเสนอ TPS Blueprint ให้กลุ่มอื่น Feedback (2 นาที/กลุ่ม)",
              ],
            },
            {
              num: "2", title: "5E RL Mapping — วาง RL ในแผนเดิม",
              time: "25 นาที", format: "เดี่ยว",
              goal: "นำแผนการสอน 5E เดิมมาเพิ่ม RL โดยไม่เปลี่ยนโครงสร้าง",
              steps: [
                "นำแผนการสอน 5E ที่เคยใช้จริงมา 1 แผน",
                "ระบุว่าแต่ละขั้น (E) มีคำถามอยู่ PISA Level ใด",
                "เพิ่มคำถาม L3 อย่างน้อย 1 ข้อ และ L4 อย่างน้อย 1 ข้อ",
                "บันทึก: เพิ่มคำถามใดบ้าง? เพิ่มในขั้นไหน? ใช้เวลาเพิ่มกี่นาที?",
                "Reflection: การเพิ่ม RL ทำให้แผนยากขึ้นหรือดีขึ้น? เพราะอะไร?",
              ],
            },
            {
              num: "3", title: "Scaffold Design — ออกแบบ Scaffold 3 ระดับ",
              time: "20 นาที", format: "คู่",
              goal: "สร้าง Scaffold ชุดเดียวกันสำหรับนักเรียน 3 ระดับ",
              steps: [
                "เลือกบทอ่านจากบทเรียนจริง (หรือบทอ่านจาก Workshop 1)",
                "ออกแบบ Scaffold สำหรับนักเรียน Tier 1 (ต้องการความช่วยเหลือ)",
                "ออกแบบ Scaffold สำหรับนักเรียน Tier 2 (ปานกลาง)",
                "ออกแบบ Scaffold สำหรับนักเรียน Tier 3 (อิสระ/ท้าทาย)",
                "แลกกับคู่อื่น: Scaffold ครอบคลุมพอหรือไม่? มีอะไรขาด?",
              ],
            },
          ].map((ws) => (
            <div key={ws.num} className="rounded-xl border border-sky-200 bg-white overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 bg-sky-50 border-b border-sky-100">
                <span className="w-7 h-7 rounded-lg bg-sky-600 text-white text-xs font-bold flex items-center justify-center">W{ws.num}</span>
                <div>
                  <p className="text-sm font-bold text-text-primary">{ws.title}</p>
                  <p className="text-[11px] text-sky-500">{ws.time} · {ws.format}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs font-medium text-sky-600 mb-2">🎯 {ws.goal}</p>
                <ul className="space-y-1.5">
                  {ws.steps.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                      <span className="w-4 h-4 rounded bg-sky-100 text-sky-600 text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
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
          <Lightbulb className="w-4.5 h-4.5 text-sky-600" />
          Key Takeaways
        </h2>
        <div className="space-y-2">
          {[
            "TPS+RL: Think=L1–2, Pair=L2–3, Share=L3–4 — ทุกขั้นควรมี RL ระดับต่างกัน",
            "5E+RL: Engage=L1–2, Explore=L2–3, Explain=L2, Elaborate=L3–4, Evaluate=L4 — เพิ่มระดับตามขั้น",
            "Scaffolding: อ่อน=Glossary/Yes-No, กลาง=Sentence Frame, เก่ง=Open-ended — ลด Scaffold เรื่อยๆ",
            "แผนส่วนใหญ่มี RL แต่อยู่ที่ L1–L2 — เพิ่ม L3–L4 ไม่ต้องเปลี่ยนโมเดลสอน",
            "จุดเน้น: การเพิ่ม RL ไม่ต้องเปลี่ยนโมเดลสอน แค่เพิ่มคำถาม L3–L4 และ Scaffold ที่เหมาะสม",
          ].map((k, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-sky-50 border border-sky-100">
              <span className="w-5 h-5 rounded-full bg-sky-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-text-secondary">{k}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-sky-300 bg-sky-600 p-4 text-white">
          <p className="text-xs font-bold text-sky-200 mb-1">🎯 ภารกิจต่อเนื่อง (Take-Home Mission 3.2)</p>
          <p className="text-sm">นำ <strong>TPS Blueprint</strong> ที่ออกแบบใน Workshop ไปใช้จริงในชั้นเรียน — สังเกตและบันทึก: นักเรียนถึง RL L3 หรือ L4 ได้หรือไม่? อะไรเป็นอุปสรรค?</p>
        </div>
      </section>

      {/* References */}
      <section className="mb-10">
        <h2 className="text-sm font-bold text-text-primary mb-3">เอกสารอ้างอิง</h2>
        <div className="rounded-xl border border-card-border bg-white p-4 space-y-2">
          {[
            "Lyman, F. (1981). The Responsive Classroom Discussion: The Inclusion of All Students. University of Maryland.",
            "Bybee, R.W. et al. (2006). The BSCS 5E Instructional Model: Origins and Effectiveness. BSCS.",
            "Vygotsky, L.S. (1978). Mind in Society: The Development of Higher Psychological Processes. Harvard University Press.",
            "Duke, N.K., & Pearson, P.D. (2002). Effective practices for developing reading comprehension. IRA.",
            "Fisher, D., & Frey, N. (2014). Better Learning Through Structured Teaching. ASCD.",
          ].map((ref, i) => (
            <p key={i} className="text-xs text-text-muted leading-relaxed border-l-2 border-sky-100 pl-3">{ref}</p>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-card-border">
        <Link href="/manual/module-3/3-1" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">3.1 นิยาม RL และ PISA Framework</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <Link href="/manual/module-3/3-3" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <div className="text-right">
            <p className="text-[10px] text-text-muted">ถัดไป</p>
            <p className="font-medium">3.3 RL Assessment: PISA-style Task</p>
          </div>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
