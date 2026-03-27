import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  CheckCircle2,
  Lightbulb,
  Wrench,
  ClipboardList,
} from "lucide-react";

export default function Module33Page() {
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
        <span className="text-text-secondary">3.3 RL Assessment: PISA-style Task + Rubric</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-sky-200 flex items-center justify-center shrink-0">
            <ClipboardList className="w-6 h-6 text-sky-600" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-sky-600">โมดูล 3 · หัวข้อ 3.3</span>
              <span className="flex items-center gap-1 text-xs text-sky-500">
                <Clock className="w-3.5 h-3.5" /> 1 ชม. · 9 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">RL Assessment: PISA-style Task + Rubric</h1>
            <p className="text-sm font-medium text-sky-600/80 mb-2">Designing PISA-style Tasks, Rubrics &amp; Scoring Guides</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              สร้าง PISA-style Assessment Task ที่มีบริบทจริง + คำถาม L1/L3/L4 ออกแบบ Rubric RL 4 ระดับ และ Scoring Guide พร้อม Feedback ที่ Actionable
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
            "บอกความแตกต่างระหว่าง PISA Task กับข้อสอบทั่วไปได้",
            "สร้าง PISA-style Task ที่มีบริบทจริง + คำถาม 3 ระดับ (L1/L3/L4) ได้",
            "ออกแบบ Rubric RL 4 ระดับสำหรับประเมิน Summarization / Interpretation / Reflection ได้",
            "สร้าง Scoring Guide + Feedback ที่ Specific และ Actionable ได้",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center text-[10px] font-bold text-sky-600 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 3.3.1 PISA vs. Traditional */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">3.3.1 PISA Task vs. ข้อสอบทั่วไป</h2>

        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-sky-50 border-b border-sky-100">
            <p className="text-xs font-semibold text-sky-700">เปรียบเทียบ PISA Task กับข้อสอบทั่วไป</p>
          </div>
          <table className="w-full text-xs">
            <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
              <th className="text-left px-4 py-1.5">ลักษณะ</th>
              <th className="text-left px-4 py-1.5 text-red-600">ข้อสอบทั่วไป</th>
              <th className="text-left px-4 py-1.5 text-sky-700">PISA Task</th>
            </tr></thead>
            <tbody className="divide-y divide-card-border">
              {[
                ["บริบท", "สมมติ หรือไม่มีบริบท", "Real-world Context — สถานการณ์จริงที่เกิดขึ้น"],
                ["ระดับคำถาม", "ส่วนใหญ่ L1 (จำ/ค้นหา)", "หลายระดับ: L1 + L3 + L4 ในชุดเดียว"],
                ["ข้อความ", "ข้อความสั้น หรือเป็นแบบทดสอบ", "Authentic Text — บทความ/สถิติ/กราฟจริง"],
                ["คำตอบ", "มีคำตอบเดียวที่ถูก", "L4 ไม่มีคำตอบเดียว — ต้องการ Reasoning"],
                ["วิชา", "แยกตามวิชา", "Subject-embedded — ใช้ Domain Knowledge"],
                ["Rubric", "มักใช้คะแนน 0/1", "Analytic Rubric 4 ระดับ + Scoring Guide"],
              ].map(([feature, traditional, pisa], i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-2.5 font-semibold text-text-primary">{feature}</td>
                  <td className="px-4 py-2.5 text-red-600/80">{traditional}</td>
                  <td className="px-4 py-2.5 text-sky-700">{pisa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Example: MotoGP */}
        <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
          <p className="text-xs font-bold text-sky-700 mb-2">ตัวอย่าง: PISA Task &ldquo;ถอดรหัสรถแหกโค้ง&rdquo; (ฟิสิกส์ ม.4)</p>
          <div className="bg-white rounded-lg border border-sky-100 p-3 text-xs text-text-secondary mb-3 leading-relaxed">
            <p className="font-semibold text-text-primary mb-1">บริบท (150–300 คำ):</p>
            <p>&ldquo;ในการแข่งขัน MotoGP ที่สนาม Sepang มาเลเซีย นักแข่งต้องผ่านโค้ง Turn 1 ด้วยความเร็ว 180 กม./ชม. รัศมีโค้ง 80 เมตร มวลรถและนักแข่งรวม 220 กก. วิศวกรคำนวณแรงเหวี่ยงออกนอกโค้ง (F_c) ตามสมการ F_c = mv²/r...&rdquo;</p>
          </div>
          <div className="space-y-2">
            {[
              { level: "L1", q: "F_c ที่ความเร็ว 180 กม./ชม. มีค่าเท่าไร? (ค้นหาจากสมการที่ให้)", color: "bg-green-50 border-green-200 text-green-700" },
              { level: "L3", q: "ถ้าความเร็วเพิ่มเป็น 2 เท่า F_c จะเปลี่ยนอย่างไร? อธิบายด้วยหลักฟิสิกส์", color: "bg-violet-50 border-violet-200 text-violet-700" },
              { level: "L4", q: "คิดว่าการออกแบบโค้งนี้ปลอดภัยเพียงพอหรือไม่? ระบุเหตุผลจากข้อมูลในบทอ่านและความรู้ฟิสิกส์", color: "bg-orange-50 border-orange-200 text-orange-700" },
            ].map((q) => (
              <div key={q.level} className={`flex gap-2 p-2.5 rounded-lg border ${q.color}`}>
                <span className="text-[11px] font-bold shrink-0 w-7">{q.level}</span>
                <p className="text-xs text-text-secondary">{q.q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.3.2 Structure of PISA Task */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">3.3.2 โครงสร้าง PISA Task ที่ดี</h2>

        <div className="space-y-3 mb-4">
          {[
            { num: "1", title: "บทอ่าน / บริบท", detail: "ความยาว 150–300 คำ ภาษาไทยเข้าใจง่าย บริบทจริงที่เกี่ยวข้องกับชีวิตนักเรียน อาจเป็น บทความ / ตาราง / กราฟ / ข่าว หรือผสมหลายรูปแบบ" },
            { num: "2", title: "คำถาม L1 (1–2 ข้อ)", detail: "ค้นหาข้อมูลตรงจากบทอ่าน คำตอบอยู่ในข้อความชัดเจน ไม่ต้องอนุมาน" },
            { num: "3", title: "คำถาม L3 (1–2 ข้อ)", detail: "นำข้อมูลไปใช้ในสถานการณ์ใหม่ ต้องใช้ความรู้วิชานอกเหนือบทอ่าน" },
            { num: "4", title: "คำถาม L4 (1 ข้อ)", detail: "สะท้อนคิด ประเมิน ตัดสินใจ แสดงจุดยืนพร้อมหลักฐาน ไม่มีคำตอบเดียวที่ถูก" },
            { num: "5", title: "Rubric ประเมิน", detail: "Analytic Rubric 4 ระดับ สำหรับทุกคำถาม พร้อม Scoring Guide" },
          ].map((s) => (
            <div key={s.num} className="flex gap-3 p-3 rounded-xl border border-card-border bg-white">
              <span className="w-6 h-6 rounded-full bg-sky-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{s.num}</span>
              <div>
                <p className="text-xs font-semibold text-text-primary">{s.title}</p>
                <p className="text-xs text-text-secondary mt-0.5">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Checklist */}
        <div className="rounded-xl border border-sky-100 bg-sky-50/50 p-4">
          <p className="text-xs font-bold text-sky-700 mb-2">☑ Checklist PISA Task (ก่อนใช้จริง)</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-text-secondary">
            {[
              "มีบริบทจริงที่เกี่ยวข้องกับชีวิตนักเรียน",
              "มีคำถาม 3 ระดับ (L1 / L3 / L4)",
              "คำถาม L4 ไม่มีคำตอบเดียวที่ถูกต้อง",
              "ความยาวบทอ่านเหมาะสม (≈150 คำ สั้น, ≈250 คำ ยาว)",
              "Rubric ครอบคลุมทั้ง 3 มิติ RL",
              "ตรวจสอบความถูกต้องของเนื้อหาวิชาแล้ว",
            ].map((c, i) => (
              <div key={i} className="flex items-start gap-1.5">
                <span className="text-sky-400 shrink-0 mt-0.5">☑</span>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.3.3 Rubric */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">3.3.3 Rubric RL 4 ระดับ</h2>
        <p className="text-sm text-text-secondary mb-4">
          Analytic Rubric แบ่งการประเมินเป็น 3 มิติอิสระ ทำให้ครูเห็นว่านักเรียนเก่ง/อ่อนมิติใด และให้ Feedback เจาะจงได้
        </p>

        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-sky-50 border-b border-sky-100">
            <p className="text-xs font-semibold text-sky-700">Analytic Rubric RL: 3 มิติ × 4 ระดับ</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs min-w-[600px]">
              <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
                <th className="text-left px-4 py-1.5 w-32">มิติ</th>
                <th className="text-left px-4 py-1.5">1 — ปรับปรุง</th>
                <th className="text-left px-4 py-1.5">2 — พอใช้</th>
                <th className="text-left px-4 py-1.5">3 — ดี</th>
                <th className="text-left px-4 py-1.5">4 — ดีเยี่ยม</th>
              </tr></thead>
              <tbody className="divide-y divide-card-border">
                {[
                  {
                    dim: "การสรุป (Summarization)",
                    c1: "ระบุข้อมูลผิด หรือไม่ตรงกับบทอ่าน",
                    c2: "ระบุ Main Idea ได้ แต่ขาด Supporting Details",
                    c3: "สรุป Main Idea + Supporting Details ครบถ้วน",
                    c4: "สรุปได้ครบ + เชื่อมโยงส่วนต่างๆ ของบทอ่านได้อย่างเป็นระบบ",
                  },
                  {
                    dim: "การตีความ (Interpretation)",
                    c1: "ไม่อธิบายความหมาย หรืออธิบายผิด",
                    c2: "อธิบายความหมายตรงๆ ยังไม่เชื่อมโยง",
                    c3: "เชื่อมโยงข้อมูลจากหลายส่วนและอนุมานได้",
                    c4: "เชื่อมโยงได้ลึก + อธิบายนัยที่ซ่อนอยู่ในข้อความ",
                  },
                  {
                    dim: "การสะท้อนคิด (Reflection)",
                    c1: "ไม่แสดงความเห็น หรือแสดงโดยไม่มีเหตุผล",
                    c2: "แสดงความเห็นได้ แต่หลักฐานอ่อน",
                    c3: "แสดงจุดยืนพร้อมหลักฐานจากบทอ่าน",
                    c4: "แสดงจุดยืน + โต้แย้งมุมมองอื่นได้อย่างมีเหตุผล",
                  },
                ].map((row) => (
                  <tr key={row.dim} className="hover:bg-slate-50">
                    <td className="px-4 py-2.5 font-semibold text-sky-700">{row.dim}</td>
                    <td className="px-4 py-2.5 text-red-600/80">{row.c1}</td>
                    <td className="px-4 py-2.5 text-amber-700">{row.c2}</td>
                    <td className="px-4 py-2.5 text-blue-700">{row.c3}</td>
                    <td className="px-4 py-2.5 text-green-700">{row.c4}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-sky-100 bg-sky-50/50 p-3">
            <p className="text-xs font-bold text-sky-700 mb-2">วิธีใช้ Rubric อย่างมีประสิทธิภาพ</p>
            <ul className="space-y-1 text-xs text-text-secondary">
              {[
                "ให้นักเรียนดู Rubric ก่อนทำ Task",
                "ให้นักเรียน Self-Assess ก่อนส่ง",
                "ใช้ Peer Assessment — นักเรียนประเมินกัน",
                "Feedback ต้องเฉพาะเจาะจง Actionable",
              ].map((i, idx) => (
                <li key={idx} className="flex gap-1.5"><span className="text-sky-500 shrink-0">•</span>{i}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-amber-100 bg-amber-50 p-3">
            <p className="text-xs font-bold text-amber-800 mb-2">⚠️ ข้อผิดพลาดที่พบบ่อย</p>
            <ul className="space-y-1 text-xs text-amber-700">
              {[
                "ใช้คำว่า 'ดี' 'พอ' 'ไม่ดี' เท่านั้น — ต้องบอกว่านักเรียน 'ทำอะไร'",
                "ประเมินตาม 'ความพยายาม' ไม่ใช่ 'ผลลัพธ์'",
                "ไม่แสดงตัวอย่างงาน Anchor Paper ให้นักเรียนดู",
              ].map((i, idx) => (
                <li key={idx} className="flex gap-1.5"><span className="shrink-0">✗</span>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3.3.4 Scoring Guide & Feedback */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">3.3.4 Scoring Guide และ Feedback ที่มีประสิทธิภาพ</h2>

        <div className="rounded-xl border border-sky-200 bg-white p-4 mb-4">
          <p className="text-xs font-bold text-sky-700 mb-3">Scoring Guide ≠ Rubric</p>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-lg border border-blue-100 bg-blue-50 p-3">
              <p className="font-semibold text-blue-700 mb-1">Rubric</p>
              <p className="text-text-secondary">อธิบายระดับคุณภาพสำหรับทุก Task — ใช้ซ้ำได้กับหลาย Task</p>
            </div>
            <div className="rounded-lg border border-sky-100 bg-sky-50 p-3">
              <p className="font-semibold text-sky-700 mb-1">Scoring Guide</p>
              <p className="text-text-secondary">เฉพาะ Task นั้น ระบุ Model Answer + Key Points + Accept Also + Do Not Accept</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-slate-50 border-b border-card-border">
            <p className="text-xs font-semibold text-text-primary">โครงสร้าง Scoring Guide สำหรับ 1 คำถาม</p>
          </div>
          <div className="divide-y divide-card-border">
            {[
              { label: "Model Answer", desc: "คำตอบระดับ 4 ที่สมบูรณ์ที่สุด — ใช้เป็น Benchmark", color: "text-green-700" },
              { label: "Key Points", desc: "ประเด็นหลักที่คำตอบระดับ 3 ขึ้นไปต้องมี (2–4 ข้อ)", color: "text-blue-700" },
              { label: "Accept Also", desc: "คำตอบทางเลือกที่ยอมรับได้ แม้จะไม่ตรงกับ Model Answer", color: "text-sky-700" },
              { label: "Do Not Accept", desc: "คำตอบที่ดูเหมือนถูก แต่ขาดประเด็นสำคัญ หรือเข้าใจผิด", color: "text-red-600" },
            ].map((item) => (
              <div key={item.label} className="px-4 py-3 flex gap-3">
                <span className={`text-xs font-bold w-24 shrink-0 ${item.color}`}>{item.label}</span>
                <p className="text-xs text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feedback examples */}
        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <div className="px-4 py-2 bg-slate-50 border-b border-card-border">
            <p className="text-xs font-semibold text-text-primary">Feedback RL: ต่างกันอย่างไร?</p>
          </div>
          <div className="divide-y divide-card-border">
            {[
              {
                type: "❌ Vague Feedback",
                ex: "'คำตอบดีพอสมควร'",
                color: "bg-red-50",
                note: "ไม่บอกว่าต้องปรับอะไร",
              },
              {
                type: "❌ Generic Feedback",
                ex: "'ควรอธิบายให้มากกว่านี้'",
                color: "bg-amber-50",
                note: "ยังไม่ Actionable",
              },
              {
                type: "✅ Specific & Actionable",
                ex: "'คำตอบระบุ Main Idea ได้ถูกต้อง — เพิ่มเติม Supporting Detail จากบทอ่านบรรทัดที่ 5–7 เพื่อยืนยันจุดยืนของคุณ'",
                color: "bg-green-50",
                note: "บอกว่าต้องเพิ่มอะไร และตรงไหน",
              },
            ].map((fb) => (
              <div key={fb.type} className={`px-4 py-3 ${fb.color}`}>
                <p className="text-xs font-semibold text-text-primary mb-1">{fb.type}</p>
                <p className="text-xs text-text-secondary font-mono mb-0.5">{fb.ex}</p>
                <p className="text-[11px] text-text-muted">{fb.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prompt Templates */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">Prompt Templates สำหรับ RL Assessment</h2>
        <div className="space-y-3">
          {[
            {
              label: "Prompt 1: สร้าง PISA-style Assessment Task",
              prompt: "สร้าง PISA-style Reading Assessment สำหรับนักเรียน [ระดับ] | หัวข้อ: [หัวข้อ] รูปแบบข้อความ: [เดี่ยว/หลายแหล่ง] | ให้มี: บทอ่าน + 6 ข้อสอบ (L1×2, L2×2, L3×1, L4×1) พร้อมเฉลย → ผลลัพธ์: ชุดข้อสอบ PISA-style พร้อมคำอธิบายระดับ",
            },
            {
              label: "Prompt 2: สร้าง Analytic Rubric RL",
              prompt: "สร้าง Analytic Rubric สำหรับประเมิน Reading Literacy | 4 เกณฑ์: การค้นหาข้อมูล / การตีความ / การสะท้อนคิด / การเชื่อมโยง | แต่ละเกณฑ์ให้มี 4 ระดับ (1-4) พร้อมตัวอย่างคำตอบนักเรียน → ผลลัพธ์: Rubric พร้อมใช้ประเมินและให้ Feedback",
            },
            {
              label: "Prompt 3: สร้าง Multiple-source Reading Task",
              prompt: "สร้าง Multiple-source Reading Task เรื่อง [หัวข้อ] | ใช้แหล่งข้อมูล 3 ประเภท: บทความ / ตาราง / กราฟ | ออกแบบคำถาม 4 ข้อที่ต้องใช้ข้อมูลจากหลายแหล่ง + Scoring Guide → ผลลัพธ์: Task พร้อม Scoring Guide สำหรับ PISA L3-L4",
            },
            {
              label: "Prompt 4: วิเคราะห์ผลการประเมิน RL ของนักเรียน",
              prompt: "วิเคราะห์ผลการประเมิน Reading Literacy ของนักเรียน [จำนวน] คน | [วางข้อมูลคะแนน/ตัวอย่างคำตอบ] | สรุป: จุดแข็ง / จุดพัฒนา / คำแนะนำการสอนเพิ่มเติม → ผลลัพธ์: รายงานวิเคราะห์พร้อมแผนพัฒนาการอ่านรายบุคคล",
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
          <Wrench className="w-4.5 h-4.5 text-sky-600" />
          กิจกรรม Workshop (3 หัวข้อ · รวม ~55 นาที)
        </h2>
        <div className="space-y-4">
          {[
            {
              num: "1", title: "PISA Task Builder — สร้าง Task ใน 20 นาที",
              time: "20 นาที", format: "เดี่ยว",
              goal: "สร้าง PISA Task พร้อมใช้ในห้องเรียน",
              steps: [
                "เลือกบทเรียนที่จะสอน (1 บทเรียน)",
                "ร่างบริบท: บทอ่าน 150–200 คำ บริบทจริงที่เกี่ยวกับวิชา",
                "สร้างคำถาม L1 (1 ข้อ) + L3 (1 ข้อ) + L4 (1 ข้อ)",
                "ตรวจสอบด้วย Checklist PISA Task",
                "เป้าหมาย: มี PISA Task 1 ชุดพร้อมใช้กลับบ้าน",
              ],
            },
            {
              num: "2", title: "Rubric Calibration — ปรับ Rubric ร่วมกัน",
              time: "20 นาที", format: "กลุ่ม 3 คน",
              goal: "ฝึก Inter-rater Reliability — ครู 3 คน ได้คะแนนเดียวกัน",
              steps: [
                "กลุ่มเลือกงานนักเรียนสมมติ 3 ชิ้น (Anchor Papers) ที่ระดับ 2/3/4",
                "แต่ละคนใช้ Rubric RL ประเมินงานชิ้นเดียวกันอิสระ",
                "เปรียบเทียบคะแนน — ตกลงหรือไม่?",
                "ถ้าต่างกัน: เหตุผลคืออะไร? ตีความ Rubric ต่างกันอย่างไร?",
                "ปรับ Rubric ให้ชัดขึ้น 2 รอบ",
              ],
            },
            {
              num: "3", title: "Feedback Factory — เขียน Feedback RL",
              time: "15 นาที", format: "เดี่ยว",
              goal: "ฝึกให้ Feedback ที่ Specific และ Actionable",
              steps: [
                "รับคำตอบ PISA Task สมมติ 2 ชิ้น",
                "เขียน Feedback โดยหลีกเลี่ยง: 'ดี' / 'พอ' / 'ควรปรับปรุง'",
                "Feedback ต้องระบุ: มิติใด (Summarization/Interpretation/Reflection) / ต้องเพิ่มอะไร / หาได้จากไหนในบทอ่าน",
                "แลกกับคู่: Feedback ของคุณ Actionable หรือไม่?",
                "Reflection: Feedback RL ต่างจาก Feedback ปกติอย่างไร?",
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
            "PISA Task ต้องมี: บริบทจริง + หลายระดับ + ไม่มีคำตอบเดียว — ต่างจากข้อสอบทั่วไปโดยสิ้นเชิง",
            "โครงสร้าง Task: บทอ่าน 150–300 คำ + L1 (1–2 ข้อ) + L3 (1–2 ข้อ) + L4 (1 ข้อ) + Rubric",
            "Rubric 4 ระดับ วัด: การสรุป / การตีความ / การสะท้อนคิด / การอ้างอิง",
            "Scoring Guide = Model Answer + Key Points + Accept Also + Do Not Accept",
            "Feedback ต้องเฉพาะเจาะจง Actionable — ระบุว่าต้องเพิ่มอะไรตรงไหน",
          ].map((k, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-sky-50 border border-sky-100">
              <span className="w-5 h-5 rounded-full bg-sky-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-text-secondary">{k}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-sky-300 bg-sky-600 p-4 text-white">
          <p className="text-xs font-bold text-sky-200 mb-1">🎯 ภารกิจต่อเนื่อง (Take-Home Mission 3.3)</p>
          <p className="text-sm">สร้าง <strong>PISA Task 1 ชุด</strong> สำหรับบทเรียนถัดไป พร้อม Rubric และ Scoring Guide — ใช้จริงในชั้นเรียน วิเคราะห์ผล: นักเรียนถึง L3–L4 กี่เปอร์เซ็นต์?</p>
        </div>
      </section>

      {/* References */}
      <section className="mb-10">
        <h2 className="text-sm font-bold text-text-primary mb-3">เอกสารอ้างอิง</h2>
        <div className="rounded-xl border border-card-border bg-white p-4 space-y-2">
          {[
            "OECD. (2023). PISA 2022 Assessment and Analytical Framework. OECD Publishing.",
            "Brookhart, S.M. (2013). How to create and use rubrics for formative assessment and grading. ASCD.",
            "Stiggins, R., & Chappuis, J. (2011). An Introduction to Student-Involved Assessment FOR Learning (6th ed.). Pearson.",
            "Heritage, M. (2010). Formative Assessment: Making It Happen in the Classroom. Corwin Press.",
          ].map((ref, i) => (
            <p key={i} className="text-xs text-text-muted leading-relaxed border-l-2 border-sky-100 pl-3">{ref}</p>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-card-border">
        <Link href="/manual/module-3/3-2" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">3.2 RL ใน TPS และ 5E</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <Link href="/manual/module-3/3-4" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <div className="text-right">
            <p className="text-[10px] text-text-muted">ถัดไป</p>
            <p className="font-medium">3.4 AI Tools สร้าง RL Content</p>
          </div>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
