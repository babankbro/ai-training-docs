import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  CheckCircle2,
  Lightbulb,
  Wrench,
  Cpu,
  AlertTriangle,
} from "lucide-react";

export default function Module44Page() {
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
        <span className="text-text-secondary">4.4 AI Tools CT + Rubric</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-violet-200 bg-violet-50 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-violet-200 flex items-center justify-center shrink-0">
            <Cpu className="w-6 h-6 text-violet-600" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-violet-600">โมดูล 4 · หัวข้อ 4.4</span>
              <span className="flex items-center gap-1 text-xs text-violet-500">
                <Clock className="w-3.5 h-3.5" /> 1 ชม. · 7 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">AI Tools สร้าง CT Questions + Rubric</h1>
            <p className="text-sm font-medium text-violet-600/80 mb-2">Using AI to Generate CT Questions, Rubrics &amp; Question Banks</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              ใช้ AI สร้าง CT Questions ระดับ Analysis/Evaluation ใน 10 นาที สร้าง Rubric CT 4 ระดับ และสร้าง Question Bank อัตโนมัติ โดยมีกระบวนการตรวจสอบคุณภาพก่อนใช้จริง
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
            "ใช้ AI สร้าง CT Analysis/Evaluation Questions ได้ใน 10 นาที",
            "ใช้ AI สร้าง Rubric CT 4 ระดับ + Scoring Guide ที่พร้อมใช้ได้",
            "ตรวจสอบ Output AI ว่า CT จริงหรือแค่ Recall ด้วย Checklist",
            "สร้าง CT Question Bank อัตโนมัติตาม Bloom's Level ด้วย AI",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-violet-50 border border-violet-200 flex items-center justify-center text-[10px] font-bold text-violet-600 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 4.4.1 Workflow */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">4.4.1 Workflow สร้าง CT Questions ด้วย AI</h2>
        <p className="text-sm text-text-secondary mb-4">
          AI ลดเวลาสร้าง CT Questions จาก 45 นาที เหลือ ~10 นาที — แต่ครูต้องตรวจสอบว่าคำถาม CT จริงหรือแค่ Recall
        </p>

        <div className="rounded-xl border border-violet-200 bg-violet-50 p-4 mb-4">
          <p className="text-xs font-bold text-violet-700 mb-3">Workflow 5 ขั้น: สร้าง CT Question Bank ใน 10 นาที</p>
          <div className="space-y-2">
            {[
              { step: "1", time: "2 นาที", action: "กำหนด Context", detail: "ระบุ: วิชา / ชั้นเรียน / บทเรียน / CT Level เป้าหมาย (Analysis/Evaluation)" },
              { step: "2", time: "3 นาที", action: "Prompt สร้างคำถาม", detail: "ป้อน Prompt ให้ AI สร้างคำถาม Bloom's L4–L5 → ได้คำถาม 9–10 ข้อ (ChatGPT/Claude)" },
              { step: "3", time: "3 นาที", action: "Review + Fact-check CT", detail: "ตรวจสอบ: คำถาม Analysis จริงหรือแค่ Apply? คำถาม Evaluation ต้องการ Reasoning จริงหรือเปล่า?" },
              { step: "4", time: "2 นาที", action: "Prompt Rubric", detail: "AI สร้าง Rubric CT 4 ระดับ + Scoring Guide สำหรับคำถาม Evaluation" },
              { step: "5", time: "นาที", action: "Tag และบันทึก", detail: "Tag: Bloom's Level / CT Component / ขั้น 5E ที่ใช้ — บันทึกใน Question Bank" },
            ].map((s) => (
              <div key={s.step} className="flex items-start gap-3 bg-white rounded-lg border border-violet-100 p-2.5">
                <span className="w-5 h-5 rounded-full bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{s.step}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-semibold text-text-primary">{s.action}</span>
                    <span className="text-[10px] text-violet-500 font-medium">{s.time}</span>
                  </div>
                  <p className="text-xs text-text-muted mt-0.5">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-amber-100 bg-amber-50 p-3">
          <p className="text-xs font-semibold text-amber-800 flex items-center gap-1.5 mb-1.5">
            <AlertTriangle className="w-3.5 h-3.5" /> จุดอ่อนของ AI ใน CT Questions
          </p>
          <ul className="space-y-1 text-xs text-amber-700">
            <li className="flex gap-1.5"><span className="shrink-0">▸</span>AI มักสร้างคำถาม Analysis ที่จริงๆ เป็นแค่ Apply — ต้องตรวจทุกข้อ</li>
            <li className="flex gap-1.5"><span className="shrink-0">▸</span>Rubric AI อาจใช้ภาษาคลุมเครือ — ต้องเพิ่ม Behavioral Anchor ที่ชัดเจน</li>
            <li className="flex gap-1.5"><span className="shrink-0">▸</span>Bloom's Level ที่ AI Label อาจไม่ตรง — ตรวจสอบด้วยตัวเองเสมอ</li>
          </ul>
        </div>
      </section>

      {/* 4.4.2 Prompt Templates */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">4.4.2 Prompt Templates CT Assessment</h2>
        <div className="space-y-3">
          {[
            {
              label: "Prompt 1: สร้าง CT Questions ตาม Bloom's",
              prompt: "สร้าง Assessment ตาม Bloom's Taxonomy | วิชา: CT [วิชา] ระดับ [ชั้น] | บริบท: [หัวข้อ/สถานการณ์] | ให้มี: Remember (2 ข้อ: นิยาม/อธิบาย) / Analysis (3 ข้อ: เปรียบเทียบ/เชื่อมโยง/อธิบายเหตุผล) / Evaluation (2 ข้อ: ตัดสินใจ/แสดงจุดยืน) / Socratic Follow-up (2 ข้อ: Analysis) | ระบุ [Bloom's Level] หน้าทุกข้อ | Evaluation ต้องไม่มีคำตอบเดียวที่ถูก",
            },
            {
              label: "Prompt 2: สร้าง Rubric CT 4 ระดับ",
              prompt: "สร้าง Rubric สำหรับประเมิน Evaluation: &lsquo;[คำถาม Evaluation]&rsquo; | วิชา: [วิชา] | ระดับ: [ชั้น] | Rubric 4 ระดับ CT: ระดับ 1 (ไม่มีเหตุผล/ข้อมูลผิด) / ระดับ 2 (มีเหตุผลแต่ขาดหลักฐาน) / ระดับ 3 (มีเหตุผลและหลักฐาน) / ระดับ 4 (มีเหตุผล หลักฐาน และพิจารณามุมมองอื่น) | ระดับ 4 ให้มีตัวอย่างคำตอบ 1 ข้อ",
            },
            {
              label: "Prompt 3: อัปเกรดคำถามเดิมเป็น CT",
              prompt: "จากคำถาม: &lsquo;[คำถามเดิม]&rsquo; | วิชา: [วิชา] | ระดับ: [ชั้น/ระดับ] | อัปเกรดให้เป็น CT โดย: ระบุ Bloom's Level เดิม / สร้างเวอร์ชัน Analysis 1 ข้อ / สร้างเวอร์ชัน Evaluation 1 ข้อ / Scaffold 1 ข้อสำหรับนักเรียนอ่อน | ระบุ CT Component ที่ฝึกในแต่ละข้อ",
            },
            {
              label: "Prompt 4: สร้าง CT Portfolio Prompt",
              prompt: "ออกแบบ Portfolio Prompt CT | วิชา: [วิชา] | ระดับ: [ชั้น] | ช่วงเวลา: [ภาคเรียน/ปี] | ให้มีคำถามสะท้อน 5 ด้าน: CT ที่พัฒนา / ตัวอย่างงาน CT / ความท้าทาย / Portfolio / สรุป | → ผลลัพธ์: CT Portfolio System ที่วัด CT ได้อย่างต่อเนื่อง",
            },
          ].map((t) => (
            <div key={t.label} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <p className="text-[11px] font-semibold text-text-primary mb-1">{t.label}</p>
              <p className="text-[11px] text-text-muted font-mono leading-relaxed">{t.prompt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4.4.3 Rubric CT */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">4.4.3 Rubric CT 4 ระดับ จาก AI</h2>
        <p className="text-sm text-text-secondary mb-4">
          ตัวอย่าง Rubric CT สำหรับคำถาม Evaluation — สร้างด้วย AI แล้วปรับ Behavioral Anchor ให้เฉพาะเจาะจง
        </p>

        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-violet-50 border-b border-violet-100">
            <p className="text-xs font-semibold text-violet-700">Rubric CT: &ldquo;การออกแบบโค้งนี้ปลอดภัยพอหรือไม่?&rdquo; (ฟิสิกส์ ม.4)</p>
          </div>
          <div className="divide-y divide-card-border">
            {[
              {
                level: "4 — ดีเยี่ยม",
                color: "bg-green-50 text-green-700",
                desc: "ระบุจุดยืนชัดเจน + อ้างอิงสมการ F_c = mv²/r ถูกต้อง + พิจารณาตัวแปรหลายตัว (v, r, m) + ชั้งน้ำหนักมุมมองอื่น (เช่น ต้นทุนการก่อสร้าง) ก่อนสรุป",
              },
              {
                level: "3 — ดี",
                color: "bg-blue-50 text-blue-700",
                desc: "ระบุจุดยืน + อ้างอิงหลักฟิสิกส์ถูกต้อง + ให้เหตุผล 2 ข้อขึ้นไป แต่ยังไม่พิจารณามุมมองตรงข้าม",
              },
              {
                level: "2 — พอใช้",
                color: "bg-amber-50 text-amber-700",
                desc: "ระบุจุดยืน แต่หลักฐานอ่อน หรือใช้ฟิสิกส์ผิด เช่น คำนวณ F_c ผิด / สับสน v กับ r",
              },
              {
                level: "1 — ปรับปรุง",
                color: "bg-red-50 text-red-700",
                desc: "ไม่ระบุจุดยืน หรือตอบว่า &lsquo;ปลอดภัย/ไม่ปลอดภัย&rsquo; โดยไม่มีเหตุผลจากหลักฟิสิกส์เลย",
              },
            ].map((row) => (
              <div key={row.level} className={`px-4 py-3 ${row.color}`}>
                <p className="text-xs font-bold mb-1">{row.level}</p>
                <p className="text-xs text-text-secondary">{row.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CT Version comparison */}
        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <div className="px-4 py-2 bg-slate-50 border-b border-card-border">
            <p className="text-xs font-semibold text-text-primary">เปรียบเทียบ: คำถามปกติ vs. CT Version (AI สร้าง)</p>
          </div>
          <div className="divide-y divide-card-border text-xs">
            {[
              { type: "คำถามปกติ (Apply)", q: "'F_c เท่าไรเมื่อ m=2 kg, v=10 m/s, r=5 m?'", ct: "L3 Apply — คำนวณตามสูตร" },
              { type: "CT Version (Analysis)", q: "'ทำไม v ถึงมีผลต่อ F_c มากกว่า m? อธิบายจากสมการ'", ct: "L4 Analysis — ต้องเข้าใจความสัมพันธ์" },
              { type: "CT Version (Evaluation)", q: "'ถ้าต้องเลือกระหว่างลด v หรือเพิ่ม r เพื่อความปลอดภัย คุณจะเลือกอะไร? เพราะอะไร?'", ct: "L5 Evaluation — ต้องตัดสินใจพร้อมเหตุผล" },
              { type: "CT Version (AI + CT)", q: "'60% ของอุบัติเหตุในโค้งเกิดจากความเร็วเกิน — ข้อมูลนี้เพียงพอสำหรับการออกนโยบายจำกัดความเร็วหรือไม่?'", ct: "L5–L6 Evaluation+Create — ใช้ข้อมูลจริง" },
            ].map((row, i) => (
              <div key={i} className="px-4 py-3">
                <p className="font-semibold text-text-primary mb-1">{row.type}</p>
                <p className="text-text-secondary mb-0.5">{row.q}</p>
                <p className="text-[10px] text-violet-600 font-medium">{row.ct}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.4.4 QA Checklist */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">4.4.4 ตรวจสอบคุณภาพ CT Questions จาก AI</h2>

        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-slate-50 border-b border-card-border">
            <p className="text-xs font-semibold text-text-primary">Checklist: ตรวจสอบก่อนใช้ CT Questions จาก AI</p>
          </div>
          <div className="divide-y divide-card-border text-xs">
            {[
              { cat: "CT Level", items: ["คำถาม Analysis ต้องการการ 'วิเคราะห์ความสัมพันธ์' ไม่ใช่แค่คำนวณ", "คำถาม Evaluation ไม่มีคำตอบเดียวที่ถูก ต้องการ Reasoning"] },
              { cat: "Domain Knowledge", items: ["ข้อมูลวิชาถูกต้อง (สูตร ตัวเลข แนวคิด)", "บริบทสอดคล้องกับเนื้อหาที่สอนจริง"] },
              { cat: "Rubric", items: ["Behavioral Anchor อธิบาย 'นักเรียนทำอะไร' ไม่ใช่แค่ 'ดี/พอ/อ่อน'", "ระดับ 4 มีตัวอย่างคำตอบที่ Realistic"] },
              { cat: "Bloom's Tag", items: ["Bloom's Level ที่ AI ระบุตรงกับความเป็นจริง", "CT Component ที่ฝึกระบุชัดเจน (Decomposition/Analysis/Evaluation)"] },
            ].map((cat) => (
              <div key={cat.cat} className="px-4 py-3">
                <p className="font-semibold text-text-primary mb-1.5">{cat.cat}</p>
                <ul className="space-y-1">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-text-secondary">
                      <span className="text-violet-500 shrink-0">□</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Module 4 Summary */}
        <div className="rounded-xl border border-violet-200 bg-white overflow-hidden">
          <div className="px-4 py-2 bg-violet-50 border-b border-violet-100">
            <p className="text-xs font-semibold text-violet-700">สรุปโมดูล 4: Pedagogical Knowledge — Critical Thinking</p>
          </div>
          <div className="divide-y divide-card-border">
            {[
              { sec: "4.1 6 CT Components", sum: "Decomposition / Pattern Rec. / Abstraction / Algorithm / Analysis / Evaluation — ครูทุกคนใช้อยู่แล้ว แต่ขาด Decomposition+Algorithm" },
              { sec: "4.2 CT TPS/5E", sum: "Think=Decompose, Pair=Analysis/Evaluation, Share=Socratic; 5E: Explore=Pattern+Algorithm, Elaborate=Evaluation" },
              { sec: "4.3 Guided Questions", sum: "Guided Q 3 ระดับ + Socratic 6 ประเภท + Question Bank — Wait Time 5–7 วิ + Random Call" },
              { sec: "4.4 AI Tools", sum: "Prompt 3 ข้อสร้าง CT ใน 10 นาที + Rubric AI ต้องตรวจ Behavioral Anchor ก่อนใช้" },
            ].map((s) => (
              <div key={s.sec} className="flex gap-3 px-4 py-3">
                <span className="text-xs font-bold text-violet-700 w-36 shrink-0">{s.sec}</span>
                <p className="text-xs text-text-secondary">{s.sum}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-lg font-bold text-text-primary mb-3">
          <Wrench className="w-4.5 h-4.5 text-violet-600" />
          กิจกรรม Workshop (3 หัวข้อ · รวม ~35 นาที)
        </h2>
        <div className="space-y-4">
          {[
            {
              num: "1", title: "CT Question Sprint — สร้างคำถาม AI ใน 10 นาที",
              time: "10 นาที", format: "เดี่ยว",
              goal: "สร้าง CT Question Bank 9 ข้อด้วย AI Workflow",
              steps: [
                "เลือก ChatGPT หรือ Claude",
                "ป้อน Prompt 1 — ระบุ: วิชา/บทเรียน/ระดับ (2 นาที)",
                "ได้คำถาม 9 ข้อจาก AI (ใช้เวลา 30 วินาที)",
                "ตรวจสอบ: ข้อไหน Analysis จริง? ข้อไหนแค่ Apply? (3 นาที)",
                "แก้ไขคำถาม 2 ข้อที่ต้องปรับ (3 นาที)",
                "เป้าหมาย: CT Question Bank 9 ข้อพร้อมใช้",
              ],
            },
            {
              num: "2", title: "Rubric Reality Check — ตรวจ Rubric AI",
              time: "15 นาที", format: "คู่",
              goal: "ฝึกประเมินและปรับ Rubric AI ให้ใช้ได้จริง",
              steps: [
                "ใช้ Prompt 2 สร้าง Rubric CT สำหรับ Evaluation 1 ข้อ",
                "อ่าน Rubric — ตรวจ: ระดับ 4 อธิบายชัดพอหรือไม่?",
                "เปรียบเทียบกับ Rubric CT ตัวอย่างในโมดูล",
                "ปรับ Behavioral Anchor 1–2 จุดที่คลุมเครือ",
                "แลกกับคู่: AI Rubric นำไปใช้จริงได้เลยหรือต้องปรับอีก?",
              ],
            },
            {
              num: "3", title: "Question Upgrade Challenge — อัปเกรดคำถามเดิม",
              time: "10 นาที", format: "เดี่ยว",
              goal: "ใช้ AI แปลงคำถาม Apply เดิมให้เป็น CT",
              steps: [
                "เลือกคำถาม Apply 1 ข้อจากชุดข้อสอบที่เคยใช้",
                "ป้อน Prompt 3 — AI สร้าง CT Version 3 ระดับ",
                "เลือก 1 ข้อที่ดีที่สุด — ทำไมถึงดีกว่าข้อเดิม?",
                "ตรวจสอบ: ต้องการ Scaffold สำหรับนักเรียนอ่อนหรือไม่?",
                "บันทึกลง Question Bank พร้อม Tag Bloom's Level",
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
            "AI ลดเวลาสร้าง CT Questions จาก 45 นาที เหลือ 10 นาที — แต่ต้องตรวจสอบ CT Level ทุกข้อ",
            "Prompt 3 ขั้น: สร้างคำถาม → Fact-check CT Level → สร้าง Rubric — ครบใน 10 นาที",
            "Rubric AI มักใช้ภาษาคลุมเครือ — ต้องเพิ่ม Behavioral Anchor ที่ระบุ 'นักเรียนทำอะไร'",
            "Question Bank + Tag Bloom's Level = ประหยัดเวลาระยะยาว แชร์กับเพื่อนครูได้",
            "Human + AI: ครูตรวจสอบ CT Level ไม่ให้ AI สร้าง Recall โดยไม่รู้ตัว",
          ].map((k, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-violet-50 border border-violet-100">
              <span className="w-5 h-5 rounded-full bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-text-secondary">{k}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-violet-300 bg-violet-600 p-4 text-white">
          <p className="text-xs font-bold text-violet-200 mb-1">🎯 ภารกิจต่อเนื่อง (Take-Home Mission 4.4)</p>
          <p className="text-sm">ใช้ AI สร้าง <strong>CT Question Bank</strong> 1 บทเรียน ใน 15 นาที — ตรวจสอบว่ามีคำถาม <strong>Evaluation</strong> อย่างน้อย 2 ข้อ พร้อม Rubric ก่อนใช้จริง</p>
        </div>
      </section>

      {/* References */}
      <section className="mb-10">
        <h2 className="text-sm font-bold text-text-primary mb-3">เอกสารอ้างอิง</h2>
        <div className="rounded-xl border border-card-border bg-white p-4 space-y-2">
          {[
            "Wing, J.M. (2006). Computational thinking. Communications of the ACM, 49(3), 33–35.",
            "Paul, R., & Elder, L. (2007). The Art of Socratic Questioning. Foundation for Critical Thinking.",
            "Bloom, B.S. (1956). Taxonomy of Educational Objectives. David McKay Company.",
            "Anderson, L.W., & Krathwohl, D.R. (2001). A Taxonomy for Learning, Teaching, and Assessing. Longman.",
            "World Economic Forum. (2025). Future of Jobs Report 2025. WEF.",
          ].map((ref, i) => (
            <p key={i} className="text-xs text-text-muted leading-relaxed border-l-2 border-violet-100 pl-3">{ref}</p>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-card-border">
        <Link href="/manual/module-4/4-3" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">4.3 Guided Questions &amp; Socratic</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <div className="text-right">
            <p className="text-[10px]">ถัดไป</p>
            <p className="font-medium text-text-secondary">โมดูล 5</p>
          </div>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
