import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  CheckCircle2,
  Lightbulb,
  Wrench,
  Cpu,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";

export default function Module34Page() {
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
        <span className="text-text-secondary">3.4 AI Tools สร้าง RL Content</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-sky-200 flex items-center justify-center shrink-0">
            <Cpu className="w-6 h-6 text-sky-600" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-sky-600">โมดูล 3 · หัวข้อ 3.4</span>
              <span className="flex items-center gap-1 text-xs text-sky-500">
                <Clock className="w-3.5 h-3.5" /> 1 ชม. · 8 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">AI Tools สร้างบทอ่านและคำถาม RL</h1>
            <p className="text-sm font-medium text-sky-600/80 mb-2">Using AI to Create RL Reading Content &amp; Questions</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              ใช้ ChatGPT/Claude สร้าง PISA Task ใน 20 นาที ใช้ Diffit ปรับระดับบทอ่าน และสร้าง RL Content Bank ส่วนตัวด้วย AI Workflow ที่ตรวจสอบคุณภาพก่อนใช้จริงเสมอ
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
            "ใช้ Prompt สร้าง PISA-style RL Task ได้ใน 10 นาที",
            "ใช้ AI สร้าง RL Rubric + Scoring Guide ที่พร้อมใช้ได้",
            "ใช้ Diffit.me ปรับระดับบทอ่านสำหรับนักเรียนหลากหลายได้",
            "ตรวจสอบ Output จาก AI ก่อนนำไปใช้จริงตาม Checklist",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center text-[10px] font-bold text-sky-600 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 3.4.1 Workflow */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">3.4.1 Workflow สร้าง RL Content ด้วย AI</h2>
        <p className="text-sm text-text-secondary mb-4">
          AI ช่วยลดเวลาสร้าง RL Task ได้ 80% — จาก 60–90 นาที เหลือ 15–20 นาที โดยครูยังเป็นคนตรวจสอบและปรับคุณภาพสุดท้าย
        </p>

        <div className="rounded-xl border border-sky-200 bg-sky-50 p-4 mb-4">
          <p className="text-xs font-bold text-sky-700 mb-3">Workflow: สร้าง 1 PISA Task ใน ~15–20 นาที</p>
          <div className="space-y-2">
            {[
              { step: "1", time: "2 นาที", action: "กำหนด Context", detail: "เลือกบทเรียน + บริบทจริงที่เกี่ยวข้อง + PISA Level เป้าหมาย" },
              { step: "2", time: "3 นาที", action: "Prompt บทอ่าน", detail: "ป้อน Prompt → AI สร้างบทอ่าน 150–200 คำ → ตรวจความถูกต้องของ Domain Knowledge" },
              { step: "3", time: "5 นาที", action: "ตรวจสอบบทอ่าน", detail: "Fact-check เนื้อหาวิชา — ตัวเลข สูตร สถิติ ชื่อ ต้องถูกต้องทุกตัว" },
              { step: "4", time: "2 นาที", action: "Prompt คำถาม", detail: "ป้อน Prompt → AI สร้างคำถาม L1/L3/L4 → ตรวจสอบระดับ PISA ให้ถูกต้อง" },
              { step: "5", time: "2 นาที", action: "Prompt Rubric", detail: "AI สร้าง Rubric 4 ระดับ + Scoring Guide → ตรวจสอบ Behavioral Anchor ทุกช่อง" },
              { step: "6", time: "5 นาที", action: "ปรับแต่งสุดท้าย", detail: "ปรับภาษา บริบทไทย และตรวจ Bias — ก่อน Export ใช้จริง" },
            ].map((s) => (
              <div key={s.step} className="flex items-start gap-3 bg-white rounded-lg border border-sky-100 p-2.5">
                <span className="w-5 h-5 rounded-full bg-sky-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{s.step}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-semibold text-text-primary">{s.action}</span>
                    <span className="text-[10px] text-sky-500 font-medium">{s.time}</span>
                  </div>
                  <p className="text-xs text-text-muted mt-0.5">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-amber-100 bg-amber-50 p-3">
          <p className="text-xs font-semibold text-amber-800 flex items-center gap-1.5 mb-1.5">
            <AlertTriangle className="w-3.5 h-3.5" /> ข้อควรระวัง AI-generated RL Content
          </p>
          <ul className="space-y-1 text-xs text-amber-700">
            <li className="flex gap-1.5"><ArrowRight className="w-3 h-3 shrink-0 mt-0.5" />AI อาจสร้างข้อมูลวิชาผิด (สูตร ตัวเลข ชื่อ) — ต้องตรวจ Domain Knowledge ทุกครั้ง</li>
            <li className="flex gap-1.5"><ArrowRight className="w-3 h-3 shrink-0 mt-0.5" />AI อาจสร้างคำถาม L4 ที่ยังเป็น L2 จริงๆ — ตรวจสอบว่าต้องการ Reasoning จริงหรือแค่จำ</li>
            <li className="flex gap-1.5"><ArrowRight className="w-3 h-3 shrink-0 mt-0.5" />Bias ทางวัฒนธรรม — ตรวจสอบบริบทให้เหมาะกับนักเรียนไทย</li>
          </ul>
        </div>
      </section>

      {/* 3.4.2 AI Tools */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">3.4.2 AI Tools สำหรับสร้าง RL Content</h2>

        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-5">
          <div className="px-4 py-2 bg-sky-50 border-b border-sky-100">
            <p className="text-xs font-semibold text-sky-700">เปรียบเทียบ AI Tools สำหรับ RL Content</p>
          </div>
          <table className="w-full text-xs">
            <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
              <th className="text-left px-4 py-1.5">Tool</th>
              <th className="text-left px-4 py-1.5">จุดแข็ง RL</th>
              <th className="text-left px-4 py-1.5">เหมาะกับงาน</th>
              <th className="text-left px-4 py-1.5">ราคา</th>
            </tr></thead>
            <tbody className="divide-y divide-card-border">
              {[
                ["ChatGPT (GPT-4o)", "สร้าง Task + Rubric + Fact-check ได้ในบทสนทนาเดียว", "PISA Task + Rubric + Scoring Guide", "ฟรี / Plus $20/เดือน"],
                ["Claude (Anthropic)", "Context ยาว เขียนภาษาไทยเป็นธรรมชาติ Rubric ละเอียด", "บทอ่านยาว + Rubric ที่ต้องการ Tone ดี", "ฟรี / Pro $20/เดือน"],
                ["Diffit (diffit.me)", "ปรับ Grade Level อัตโนมัติ Vocabulary + Sentence Length", "ปรับบทอ่านเดิมให้เหมาะ 3 ระดับ", "ฟรี (มี Pro)"],
                ["NotebookLM (Google)", "อัปโหลดเอกสาร → AI สร้าง Task จากเนื้อหาจริง", "Task จากตำรา/บทความจริง ลด Hallucination", "ฟรี"],
              ].map(([tool, strength, use, price], i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-2.5 font-semibold text-sky-700">{tool}</td>
                  <td className="px-4 py-2.5 text-text-secondary">{strength}</td>
                  <td className="px-4 py-2.5 text-text-muted">{use}</td>
                  <td className="px-4 py-2.5 text-text-muted">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Diffit Deep Dive */}
        <div className="rounded-xl border border-sky-200 bg-white overflow-hidden">
          <div className="px-4 py-2 bg-sky-50 border-b border-sky-100">
            <p className="text-xs font-semibold text-sky-700">วิธีใช้ Diffit.me ปรับระดับบทอ่าน</p>
          </div>
          <div className="divide-y divide-card-border">
            {[
              { step: "1", action: "เข้า diffit.me", detail: "ใช้ Google Account ลงชื่อเข้าใช้ฟรี" },
              { step: "2", action: "เลือก 'Adapt a Resource'", detail: "ป้อน URL บทความ / วาง Text / อัปโหลด PDF" },
              { step: "3", action: "เลือก Grade Level", detail: "Grade 6 (ม.1) / Grade 9 (ม.3) / Grade 11 (ม.5) — AI ปรับ Vocabulary + Sentence Length อัตโนมัติ" },
              { step: "4", action: "Download / Export", detail: "Export เป็น Google Doc / Share / PDF — พร้อมใช้ใน 3 นาที" },
            ].map((s) => (
              <div key={s.step} className="flex items-start gap-3 px-4 py-3">
                <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{s.step}</span>
                <div>
                  <p className="text-xs font-semibold text-text-primary">{s.action}</p>
                  <p className="text-xs text-text-muted mt-0.5">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.4.3 Prompt Templates */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">3.4.3 Prompt Templates สำหรับ RL Content</h2>
        <div className="space-y-3">
          {[
            {
              label: "Prompt 1: สร้างบทอ่าน PISA-style",
              prompt: "คุณเป็นผู้เชี่ยวชาญ Reading Literacy Assessment | สร้างบทอ่าน PISA-style วิชา [วิชา] ระดับ [ชั้น] | บริบท: [MotoGP / น้ำท่วม / PM2.5 / ฯลฯ] | ความยาว: 150–200 คำ (ม.ต้น), 200–280 คำ (ม.ปลาย) | ภาษาไทย เข้าใจง่าย มีข้อมูลจริง/สถิติ/ตัวเลข 1 ชุด | ให้ระบุ: แหล่งที่มาของข้อมูลที่ใช้ในบทอ่าน",
            },
            {
              label: "Prompt 2: สร้างคำถาม RL 4 ระดับ",
              prompt: "จากบทอ่านต่อไปนี้: [วางบทอ่าน] | สร้างคำถาม RL ตามกรอบ PISA: L1 (1 ข้อ): ค้นหาข้อมูลตรง — ระบุคำตอบจากบรรทัดที่ระบุ | L2 (1 ข้อ): สรุปใจความ — ตีความจากหลายส่วน | L3 (1 ข้อ): นำไปใช้ — เชื่อมกับ [PISA Level ที่ต้องการ] | L4 (1 ข้อ): สะท้อนคิด — ประเมิน + แสดงจุดยืนพร้อมเหตุผล | ระบุ: คำตอบที่คาดหวัง L4 ต้องการอะไร",
            },
            {
              label: "Prompt 3: สร้าง Rubric + Scoring Guide",
              prompt: "สำหรับคำถาม L3: [คำถาม L3] และคำถาม L4: [คำถาม L4] | สร้าง Rubric 4 ระดับ RL 3 มิติ: การสรุป / การตีความ / การสะท้อนคิด | สร้าง Scoring Guide สำหรับแต่ละคำถาม: Model Answer (ระดับ 4) / Key Points / Accept Also / Do Not Accept | Model Answer ต้องยาวไม่เกิน 3 ประโยค | Scoring Guide ไม่เกิน 200 คำ",
            },
            {
              label: "Prompt 4: Leveled Reading ด้วย AI",
              prompt: "จากบทอ่านต่อไปนี้: [วางบทอ่านต้นฉบับ] | สร้าง 3 เวอร์ชัน: เวอร์ชัน 1 (ม.1-2): ลดคำศัพท์ยาก ย่อประโยค คงเนื้อหาสำคัญ | เวอร์ชัน 2 (ม.3-4): ใกล้ต้นฉบับ ลด Jargon เล็กน้อย | เวอร์ชัน 3 (ม.5-6): ต้นฉบับหรือเพิ่มความซับซ้อน | แต่ละเวอร์ชัน 250–350 คำ พร้อมคำถาม PISA-style 3 ข้อ",
            },
          ].map((t) => (
            <div key={t.label} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <p className="text-[11px] font-semibold text-text-primary mb-1">{t.label}</p>
              <p className="text-[11px] text-text-muted font-mono leading-relaxed">{t.prompt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3.4.4 QA + RL Content Bank */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">3.4.4 ตรวจสอบ Output AI และสร้าง RL Content Bank</h2>

        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-slate-50 border-b border-card-border">
            <p className="text-xs font-semibold text-text-primary">Checklist: ตรวจสอบ Output AI ก่อนใช้จริง</p>
          </div>
          <div className="divide-y divide-card-border text-xs">
            {[
              { cat: "Domain Knowledge", items: ["ตัวเลข สูตร ชื่อ วันที่ ถูกต้องตามความจริง", "Concept ทางวิชาการไม่มีข้อผิดพลาด"] },
              { cat: "ระดับ PISA", items: ["คำถาม L4 ต้องการ Reasoning จริง ไม่ใช่แค่จำ", "L1 ตอบได้โดยตรงจากบทอ่าน ไม่ต้องอนุมาน"] },
              { cat: "คุณภาพภาษาไทย", items: ["ภาษาเป็นธรรมชาติ อ่านเข้าใจง่าย", "บริบทเหมาะสมกับนักเรียนไทย ไม่มี Bias"] },
              { cat: "Rubric", items: ["Behavioral Anchor อธิบาย 'นักเรียนทำอะไร' ไม่ใช่แค่ 'ดี/พอ'", "Model Answer ในระดับ 4 สมบูรณ์และ Reasonable"] },
            ].map((cat) => (
              <div key={cat.cat} className="px-4 py-3">
                <p className="text-xs font-semibold text-text-primary mb-1.5">{cat.cat}</p>
                <ul className="space-y-1">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-text-secondary">
                      <span className="text-sky-500 shrink-0">□</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* RL Content Bank */}
        <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
          <p className="text-xs font-bold text-sky-700 mb-2">💡 Best Practice: สร้าง RL Content Bank ด้วย AI</p>
          <div className="space-y-2 text-xs text-text-secondary">
            <div className="flex gap-2">
              <span className="w-5 h-5 rounded bg-sky-100 text-sky-600 text-[10px] font-bold flex items-center justify-center shrink-0">1</span>
              <p>สร้าง Folder ชื่อ &lsquo;RL Task Bank&rsquo; ใน Google Drive แบ่งตามวิชา/ระดับ/หัวข้อ</p>
            </div>
            <div className="flex gap-2">
              <span className="w-5 h-5 rounded bg-sky-100 text-sky-600 text-[10px] font-bold flex items-center justify-center shrink-0">2</span>
              <p>ทุกสัปดาห์ใช้ AI สร้าง PISA Task 2–3 ชุด — ใช้เวลาไม่เกิน 20 นาที</p>
            </div>
            <div className="flex gap-2">
              <span className="w-5 h-5 rounded bg-sky-100 text-sky-600 text-[10px] font-bold flex items-center justify-center shrink-0">3</span>
              <p>Tag แต่ละ Task ด้วย: Context (70%) + เพิ่มเติมทีละปี</p>
            </div>
            <div className="flex gap-2">
              <span className="w-5 h-5 rounded bg-sky-100 text-sky-600 text-[10px] font-bold flex items-center justify-center shrink-0">4</span>
              <p>แชร์ Task Bank กับครูในกลุ่มวิชาเดียวกัน — ลดงานและเพิ่มคุณภาพ</p>
            </div>
            <div className="flex gap-2">
              <span className="w-5 h-5 rounded bg-sky-100 text-sky-600 text-[10px] font-bold flex items-center justify-center shrink-0">5</span>
              <p>ปรับ Task เดิมด้วย Diffit ทุกปี แทนการสร้างใหม่ทั้งหมด</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-lg font-bold text-text-primary mb-3">
          <Wrench className="w-4.5 h-4.5 text-sky-600" />
          กิจกรรม Workshop (3 หัวข้อ · รวม ~45 นาที)
        </h2>
        <div className="space-y-4">
          {[
            {
              num: "1", title: "PISA Task Sprint — สร้าง Task ด้วย AI ใน 20 นาที",
              time: "20 นาที", format: "เดี่ยว",
              goal: "สร้าง PISA Task ด้วย AI Workflow ครบ 6 ขั้น",
              steps: [
                "เลือก Tool: ChatGPT / Claude",
                "ป้อน Prompt 1 สร้างบทอ่าน (3 นาที)",
                "Fact-check เนื้อหา 3 จุด — ตรวจสูตร ตัวเลข ชื่อ (3 นาที)",
                "ป้อน Prompt 2 สร้างคำถาม L1/L3/L4 (3 นาที)",
                "ป้อน Prompt 3 สร้าง Rubric (3 นาที)",
                "ตรวจสอบด้วย Checklist PISA Task (3 นาที)",
                "เป้าหมาย: มี PISA Task พร้อมใช้ใน 20 นาที",
              ],
            },
            {
              num: "2", title: "Diffit Challenge — ปรับบทอ่าน 3 ระดับ",
              time: "10 นาที", format: "คู่",
              goal: "ปรับบทอ่านเดิมให้เหมาะ 3 ระดับด้วย Diffit",
              steps: [
                "เข้า diffit.me (ใช้ Google Account)",
                "ป้อน URL 1 บทความที่ใช้สอน (หรือ Text โดยตรง)",
                "สร้าง Version 1: Grade 6 (ม.1) — ดูการเปลี่ยน Sentence Length",
                "สร้าง Version 2: Grade 11 (ม.5) — เปรียบเทียบกับ Version 1",
                "สังเกต: Diffit เปลี่ยนอะไรบ้าง? คงเนื้อหาสำคัญไว้หรือไม่?",
                "แลกกับคู่: &lsquo;เวอร์ชันไหนเหมาะกับห้องเรียนคุณมากที่สุด?&rsquo;",
              ],
            },
            {
              num: "3", title: "Human vs. AI — เปรียบเทียบคุณภาพ Task",
              time: "15 นาที", format: "กลุ่ม 4 คน",
              goal: "วิเคราะห์จุดแข็งและจุดอ่อนของ AI-generated Task",
              steps: [
                "รับ PISA Task 2 ชุด: ชุด A (ครูสร้างเอง) ชุด B (AI สร้าง)",
                "กลุ่มใช้ Checklist PISA Task ประเมินทั้งสองชุด",
                "ให้คะแนน: ชุดไหนผ่านเกณฑ์มากกว่า?",
                "สนทนา: AI เก่งอะไร? ครูเก่งอะไร? ควรใช้อย่างไร?",
                "สรุป: Workflow ที่ดีที่สุดสำหรับกลุ่มคืออะไร?",
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

      {/* Module 3 Summary */}
      <section className="mb-10">
        <div className="rounded-xl border border-sky-200 bg-white overflow-hidden">
          <div className="px-4 py-2 bg-sky-50 border-b border-sky-100">
            <p className="text-xs font-semibold text-sky-700">สรุปโมดูล 3: Pedagogical Knowledge — Reading Literacy</p>
          </div>
          <div className="divide-y divide-card-border">
            {[
              { sec: "3.1 นิยาม RL", sum: "RL ≠ อ่านออกเสียง — ต้องการสมรรถนะสรุป ตีความ สะท้อนคิด ใน 4 ระดับ PISA" },
              { sec: "3.2 RL ใน TPS/5E", sum: "RL ฝังใน TPS (Think/Pair/Share) และ 5E ได้ทุกขั้น เพิ่ม Scaffold ตามระดับ — ไม่ต้องเปลี่ยนโมเดลสอน" },
              { sec: "3.3 PISA Assessment", sum: "PISA Task = บทอ่านจริง + L1/L3/L4 + Rubric Analytic — ต่างจากข้อสอบทั่วไปโดยสิ้นเชิง" },
              { sec: "3.4 AI Tools", sum: "ChatGPT/Claude สร้าง Task ใน 20 นาที + Diffit ปรับระดับ — ครูตรวจสอบ Domain Knowledge เสมอ" },
            ].map((s) => (
              <div key={s.sec} className="flex gap-3 px-4 py-3">
                <span className="text-xs font-bold text-sky-700 w-32 shrink-0">{s.sec}</span>
                <p className="text-xs text-text-secondary">{s.sum}</p>
              </div>
            ))}
          </div>
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
            "AI ลดเวลาสร้าง RL Task จาก 60–90 นาที เหลือ 15–20 นาที — แต่ครูยังต้องตรวจสอบ Domain Knowledge เสมอ",
            "Workflow 6 ขั้น: Context → Prompt บทอ่าน → Fact-check → Prompt คำถาม → Rubric → ปรับสุดท้าย",
            "Diffit.me ปรับระดับบทอ่านเดิมได้ใน 3 นาที — ใช้สำหรับ Differentiated Classroom",
            "RL Content Bank — สะสม Task ที่ดีไว้ในกลุ่ม แชร์กับเพื่อนครู ประหยัดเวลาระยะยาว",
            "Human + AI ดีกว่า AI อย่างเดียว — ครูให้บริบทและตรวจสอบ AI ให้ปริมาณและความเร็ว",
          ].map((k, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-sky-50 border border-sky-100">
              <span className="w-5 h-5 rounded-full bg-sky-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-text-secondary">{k}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-sky-300 bg-sky-600 p-4 text-white">
          <p className="text-xs font-bold text-sky-200 mb-1">🎯 ภารกิจต่อเนื่อง (Take-Home Mission 3.4)</p>
          <p className="text-sm">ใช้ AI สร้าง <strong>PISA Task 1 ชุด</strong> สำหรับบทเรียนสัปดาห์หน้า — ใช้เวลาไม่เกิน 20 นาที บันทึกเวลาที่ใช้จริง และประเมินคุณภาพผลลัพธ์เทียบกับการออกแบบเอง</p>
        </div>
      </section>

      {/* References */}
      <section className="mb-10">
        <h2 className="text-sm font-bold text-text-primary mb-3">เอกสารอ้างอิง</h2>
        <div className="rounded-xl border border-card-border bg-white p-4 space-y-2">
          {[
            "OECD. (2023). PISA 2022 Assessment and Analytical Framework. OECD Publishing.",
            "Diffit.me. (2024). AI-powered differentiation tool. https://diffit.me",
            "Brown, T. et al. (2020). Language Models are Few-Shot Learners. NeurIPS.",
            "Topping, K.J. (2009). Peer assessment. Theory into Practice, 48(1), 20–27.",
            "Brookhart, S.M. (2013). How to create and use rubrics for formative assessment and grading. ASCD.",
          ].map((ref, i) => (
            <p key={i} className="text-xs text-text-muted leading-relaxed border-l-2 border-sky-100 pl-3">{ref}</p>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-card-border">
        <Link href="/manual/module-3/3-3" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">3.3 RL Assessment: PISA-style Task</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <div className="text-right">
            <p className="text-[10px]">ถัดไป</p>
            <p className="font-medium text-text-secondary">โมดูล 4</p>
          </div>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
