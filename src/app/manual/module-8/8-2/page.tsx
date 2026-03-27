import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  CheckCircle2,
  Lightbulb,
  Wrench,
  ClipboardCheck,
} from "lucide-react";

export default function Module82Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 lg:py-14 animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs text-text-muted mb-6 flex-wrap">
        <Link href="/" className="hover:text-text-secondary transition-colors">หน้าแรก</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/manual" className="hover:text-text-secondary transition-colors">คู่มือการอบรม</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/manual/module-8" className="hover:text-text-secondary transition-colors">โมดูล 8</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-text-secondary">8.2 PISA-style Assessment ในชั้นเรียน</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-violet-300 bg-violet-100 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-violet-200 flex items-center justify-center shrink-0">
            <ClipboardCheck className="w-6 h-6 text-violet-700" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-violet-700">โมดูล 8 · หัวข้อ 8.2</span>
              <span className="flex items-center gap-1 text-xs text-violet-500">
                <Clock className="w-3.5 h-3.5" /> 1.5 ชม. · 4 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">PISA-style Assessment ในชั้นเรียน</h1>
            <p className="text-sm font-medium text-violet-700/80 mb-2">Classroom-Based PISA Assessment Design, Scoring Guide & AI-Assisted Question Creation</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              ออกแบบ Authentic PISA-like Task สำหรับวิชาที่สอน สร้าง Scoring Guide และใช้ AI สร้างคำถามระดับ L1–L4 ได้ภายใน 1 คาบ
            </p>
          </div>
        </div>
      </div>

      {/* Learning Outcomes */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-base font-bold text-text-primary mb-3">
          <CheckCircle2 className="w-4 h-4 text-violet-700" />
          ผลลัพธ์การเรียนรู้
        </h2>
        <ul className="space-y-2">
          {[
            "เข้าใจโครงสร้าง PISA Assessment และปัญหาผลการศึกษาของไทย",
            "ออกแบบ Authentic PISA-like Task ที่เชื่อมกับชีวิตจริงนักเรียนได้",
            "สร้างคำถาม L1–L4 ที่ครอบคลุมทุกระดับ RL ได้",
            "สร้าง Scoring Guide (Full Credit / Partial / No Credit) ที่ใช้งานได้จริง",
            "ใช้ AI สร้างและตรวจสอบ PISA Assessment อย่างมีประสิทธิภาพ",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-violet-50 border border-violet-200 flex items-center justify-center text-[10px] font-bold text-violet-700 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 8.2.1 ผลการศึกษา PISA ของไทย */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">8.2.1 ผลการศึกษา PISA ของไทยและบทเรียน</h2>
        <div className="space-y-2 mb-4">
          {[
            { topic: "ปัญหาหลัก", desc: "นักเรียนไทยมีความสามารถค้นหาข้อมูลที่ระบุไว้ชัดเจน (L1) แต่ขาดความสามารถในการอนุมาน วิเคราะห์ และประเมินผล (L3–L4)", color: "border-red-200 bg-red-50 text-red-700" },
            { topic: "ผลกระทบ", desc: "การเรียนการสอน RL ต้องปรับปรุงให้นักเรียนสามารถคิดอย่างมีวิจารณญาณได้ — ไม่ใช่แค่จำและค้นหา", color: "border-amber-200 bg-amber-50 text-amber-700" },
            { topic: "แนวทาง", desc: "ใช้งานอ่านแท้จริง (Authentic Reading) และการอภิปรายความเข้าใจอย่างลึกซึ้ง — เชื่อมกับชีวิตจริงทุกคาบ", color: "border-green-200 bg-green-50 text-green-700" },
          ].map((r) => (
            <div key={r.topic} className={`flex items-start gap-3 rounded-xl border p-3 ${r.color}`}>
              <span className={`text-xs font-bold shrink-0 w-20 ${r.color.split(' ')[2]}`}>{r.topic}</span>
              <div className="w-px bg-gray-200 self-stretch shrink-0" />
              <p className="text-xs text-text-secondary">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* วิธีปรับ PISA สำหรับชั้นเรียน */}
        <div className="rounded-xl border border-violet-200 bg-violet-50/50 p-4">
          <p className="text-xs font-bold text-violet-700 mb-2">วิธีปรับ PISA Assessment สำหรับชั้นเรียน (4 ขั้น)</p>
          <div className="space-y-1.5 text-xs text-text-secondary">
            {[
              "เลือกข้อความที่เชื่อมกับชีวิตจริง เช่น บทความข่าว โปสเตอร์ อีเมล คู่มือการใช้งาน กราฟ",
              "สร้างคำถามให้ครอบคลุมระดับ L1 ถึง L4 (ไม่ต้องครบทุกระดับทุกครั้ง — เลือกตามวัตถุประสงค์)",
              "ให้นักเรียนตอบในระยะเวลาที่เหมาะสม — PISA ชั้นเรียนไม่ต้องเคร่งครัดเหมือนสอบจริง",
              "ให้คะแนนตาม Scoring Guide ที่ชัดเจน และแจ้งนักเรียนล่วงหน้า",
            ].map((s, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-violet-700 font-bold shrink-0">{i + 1}.</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8.2.2 ออกแบบ Authentic PISA-like Tasks */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">8.2.2 ออกแบบ Authentic PISA-like Tasks</h2>

        {/* Stimulus Selection */}
        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-violet-50 border-b border-violet-100">
            <p className="text-xs font-semibold text-violet-700">การเลือก Stimulus (สิ่งเร้า) — เรียงจากสั้นไปยาว</p>
          </div>
          <div className="divide-y divide-card-border text-xs">
            {[
              { len: "ข้อความสั้น (50–100 คำ)", examples: "รายการอาหาร, ป้ายจราจร, โฆษณา, ฉลากสินค้า, กราฟ", level: "L1–L2" },
              { len: "ข้อความกลาง (150–250 คำ)", examples: "บทความข่าว, อีเมล, จดหมาย, ตาราง, แผนที่", level: "L2–L3" },
              { len: "ข้อความยาว (300–500 คำ)", examples: "เรื่องสั้น, บทความวิจัย, รายงาน, หนังสือบางบท", level: "L3–L4" },
            ].map((s) => (
              <div key={s.len} className="flex gap-3 px-4 py-2.5">
                <span className="font-bold text-violet-700 w-32 shrink-0 text-[11px]">{s.len}</span>
                <div className="flex-1">
                  <p className="text-text-secondary">{s.examples}</p>
                </div>
                <span className="text-[10px] font-bold text-violet-500 shrink-0">{s.level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Question Levels */}
        <div className="space-y-2 mb-4">
          <p className="text-sm font-bold text-text-primary">คำถาม 4 ระดับ — เขียนให้ครอบคลุม</p>
          {[
            { lvl: "L1", name: "Locate (ค้นหา)", q: "ระบุ/ค้นหาข้อมูลที่บอกไว้ตรงๆ ในข้อความ", ex: "'ตาม Stimulus นักเรียน A ทำอะไรในวันที่...'", color: "border-blue-200 bg-blue-50" },
            { lvl: "L2", name: "Infer (อนุมาน)", q: "ใช้ข้อมูลจากข้อความสรุปสิ่งที่ไม่ได้บอกตรงๆ", ex: "'จากข้อมูลในตาราง คุณคิดว่าแนวโน้มในปีถัดไปจะเป็นอย่างไร?'", color: "border-green-200 bg-green-50" },
            { lvl: "L3", name: "Analyze (วิเคราะห์)", q: "ตีความ เปรียบเทียบ หรือวิเคราะห์โครงสร้างของข้อความ", ex: "'ผู้เขียนใช้ภาษาอย่างไรเพื่อโน้มน้าวผู้อ่าน? ยกตัวอย่าง 2 จุด'", color: "border-amber-200 bg-amber-50" },
            { lvl: "L4", name: "Evaluate (ประเมิน)", q: "ตัดสินคุณภาพ ความน่าเชื่อถือ หรือเสนอมุมมองใหม่", ex: "'คุณเห็นด้วยกับข้อสรุปของผู้เขียนหรือไม่? อธิบายด้วยหลักฐานจากข้อความ'", color: "border-violet-200 bg-violet-50" },
          ].map((q) => (
            <div key={q.lvl} className={`rounded-xl border p-3 ${q.color}`}>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-black text-text-primary">{q.lvl}</span>
                <span className="text-xs font-bold text-text-primary">{q.name}</span>
              </div>
              <p className="text-[11px] text-text-secondary mb-1">{q.q}</p>
              <p className="text-[11px] text-text-muted italic">{q.ex}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8.2.3 PISA Scoring Guide */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">8.2.3 PISA Scoring Guide และ Feedback</h2>
        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-violet-50 border-b border-violet-100">
            <p className="text-xs font-semibold text-violet-700">3 ระดับการให้คะแนน PISA</p>
          </div>
          <div className="divide-y divide-card-border text-xs">
            {[
              { credit: "Full Credit", score: "2 คะแนน", desc: "ตอบอย่างสมบูรณ์ ถูกต้อง ชัดเจน และมีหลักฐานสนับสนุน" },
              { credit: "Partial Credit", score: "1 คะแนน", desc: "ตอบบางส่วนถูกต้อง หรือถูกต้องแต่ขาดหลักฐาน หรือไม่ครบ" },
              { credit: "No Credit", score: "0 คะแนน", desc: "ตอบไม่ถูกต้อง ไม่เกี่ยวข้อง หรือไม่ตอบ" },
            ].map((c) => (
              <div key={c.credit} className="flex gap-3 px-4 py-2.5 items-center">
                <div className="w-28 shrink-0">
                  <p className="font-bold text-violet-700">{c.credit}</p>
                  <p className="text-[10px] text-text-muted">{c.score}</p>
                </div>
                <p className="text-text-secondary">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feedback Strategies */}
        <div className="rounded-xl border border-violet-200 bg-violet-50/50 p-4">
          <p className="text-xs font-bold text-violet-700 mb-2">กลยุทธ์ Feedback ที่ดีสำหรับ RL Development</p>
          <div className="space-y-2 text-xs text-text-secondary">
            <div className="p-2 rounded-lg bg-red-50 border border-red-200">
              <span className="font-bold text-red-600">❌ Feedback ที่ไม่ดี: </span>
              <span>"คำตอบของคุณดีมาก" หรือ "ผิด" — ไม่ช่วยนักเรียนพัฒนา</span>
            </div>
            <div className="p-2 rounded-lg bg-green-50 border border-green-200">
              <span className="font-bold text-green-600">✓ Feedback ที่ดี: </span>
              <span>"คุณระบุข้อมูลได้ถูกต้อง (L1) แต่ลืมเชื่อมโยงกับแนวคิดหลัก (L3) — ลองตั้งคำถามเพิ่มเติมว่า 'ทำไม?' และ 'แล้วไง?'"</span>
            </div>
            <p className="text-[11px] text-text-muted">หลัก: บอก Level ที่ตอบได้ + บอก Level ที่ต้องพัฒนา + ให้ Direction ชัดเจน</p>
          </div>
        </div>
      </section>

      {/* Prompt Templates */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">Prompt Templates สำหรับ PISA Assessment</h2>
        <div className="space-y-3">
          {[
            {
              label: "Prompt 1: สร้าง Stimulus PISA-like",
              prompt: "Create a PISA-like reading stimulus about [หัวข้อ] for [ระดับชั้น] students. | The stimulus should be: Authentic and relevant to students' lives | Length: approximately 200-300 words | Include details that require different levels of comprehension: explicit info, implicit info, and evaluative content | Output in Thai language → ผลลัพธ์: Stimulus พร้อมนำไปสร้างคำถาม L1–L4",
            },
            {
              label: "Prompt 2: เขียนคำถาม PISA L1–L4",
              prompt: "Based on this PISA stimulus: [วาง Stimulus] | Create 5 questions covering PISA levels: L1: Locate explicit information (1 ข้อ) | L2: Make simple inferences (1 ข้อ) | L3: Analyze and interpret (2 ข้อ) | L4: Evaluate and reflect critically (1 ข้อ) | For each question provide: question text, expected answer, scoring criteria (Full/Partial/No Credit) → ผลลัพธ์: ชุดคำถามพร้อม Scoring Guide",
            },
            {
              label: "Prompt 3: สร้างเกณฑ์ Rubric สำหรับ PISA",
              prompt: "Here is a PISA question: [วางคำถาม] | Create a detailed scoring rubric with: Full Credit (excellent answer — complete, accurate, with evidence): [Descriptor] | Partial Credit (partially correct — missing key element): [Descriptor] | No Credit (incorrect or irrelevant): [Descriptor] | Provide 1 example student answer for each level → ผลลัพธ์: PISA Scoring Rubric พร้อม Exemplar",
            },
            {
              label: "Prompt 4: วิเคราะห์คำตอบนักเรียนและให้ Feedback",
              prompt: "Here is a PISA question: [วางคำถาม] | Here is a student's answer: [วางคำตอบนักเรียน] | Please provide: (1) What RL level does this answer demonstrate (L1-L4)? (2) Score: Full Credit / Partial Credit / No Credit — Why? (3) Specific, constructive feedback for improvement → ผลลัพธ์: Student Feedback + Level Diagnosis",
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
          <Wrench className="w-4.5 h-4.5 text-violet-700" />
          กิจกรรม Workshop (3 หัวข้อ · รวม ~75 นาที)
        </h2>
        <div className="space-y-4">
          {[
            {
              num: "1", title: "ออกแบบ PISA Assessment สำหรับบทเรียน",
              time: "30 นาที", format: "เดี่ยว",
              goal: "PISA Task 1 ชุด พร้อม Scoring Guide",
              steps: [
                "เลือกหัวข้อและ Stimulus ที่เชื่อมกับชีวิตจริงนักเรียน",
                "สร้างข้อความ Stimulus 200–300 คำ ด้วย AI (Prompt 1)",
                "เขียนคำถาม L1–L4 อย่างน้อย 4 ข้อ ด้วย AI (Prompt 2)",
                "สร้าง Scoring Guide Full/Partial/No Credit แต่ละข้อ",
                "ให้เพื่อนร่วมงาน Review และให้ Feedback 5 นาที",
              ],
            },
            {
              num: "2", title: "Peer Calibration — ปรับเทียมการให้คะแนน",
              time: "25 นาที", format: "กลุ่ม 4–6 คน",
              goal: "Inter-rater Reliability สูงขึ้น — ทุกคนให้คะแนนตรงกัน",
              steps: [
                "เลือกคำตอบนักเรียน 5–7 ชุดเป็นตัวแทนแต่ละระดับ",
                "ให้ครูแต่ละคนให้คะแนนด้วย Scoring Guide เดียวกัน",
                "เปรียบเทียบผลและอภิปรายความแตกต่างที่เกิดขึ้น",
                "ปรับ Scoring Guide ให้ชัดเจนขึ้น ให้คะแนนรอบ 2",
              ],
            },
            {
              num: "3", title: "AI สร้าง PISA Assessment ครบวงจร",
              time: "20 นาที", format: "เดี่ยว",
              goal: "PISA Task 1 ชุดสร้างด้วย AI 100% พร้อม Validate",
              steps: [
                "ใช้ Prompt 1 ให้ AI สร้าง Stimulus ที่เหมาะกับวิชาตนเอง",
                "ใช้ Prompt 2 ให้ AI สร้างคำถาม PISA 5 ข้อ L1–L4",
                "ใช้ Prompt 3 ขอ Scoring Rubric พร้อม Exemplar",
                "ตรวจสอบด้วยตัวเอง: ถูกต้อง? เหมาะกับระดับ? ใช้ได้จริง?",
                "ปรับ 2–3 จุดที่ AI ยังไม่ตรงกับบริบทนักเรียน",
              ],
            },
          ].map((ws) => (
            <div key={ws.num} className="rounded-xl border border-violet-200 bg-white overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 bg-violet-50 border-b border-violet-100">
                <span className="w-7 h-7 rounded-lg bg-violet-700 text-white text-xs font-bold flex items-center justify-center">W{ws.num}</span>
                <div>
                  <p className="text-sm font-bold text-text-primary">{ws.title}</p>
                  <p className="text-[11px] text-violet-500">{ws.time} · {ws.format}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs font-medium text-violet-700 mb-2">🎯 {ws.goal}</p>
                <ul className="space-y-1.5">
                  {ws.steps.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                      <span className="w-4 h-4 rounded bg-violet-100 text-violet-700 text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
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
          <Lightbulb className="w-4.5 h-4.5 text-violet-700" />
          Key Takeaways
        </h2>
        <div className="space-y-2">
          {[
            "PISA ชั้นเรียนเริ่มง่ายๆ ด้วย Stimulus สั้นและคำถาม L1–L2 ก่อน",
            "Authentic Context คือหัวใจ — Stimulus ต้องเชื่อมกับชีวิตจริงนักเรียน",
            "Scoring Guide ต้องชัดก่อนสอน — นักเรียนรู้เกณฑ์ล่วงหน้าเรียนรู้ได้ดีขึ้น",
            "Peer Calibration ช่วยให้ครูหลายคนให้คะแนนตรงกัน — ยุติธรรมและเชื่อถือได้",
            "AI Draft PISA ใน 5 นาที + ครูปรับ 10 นาที = PISA Task พร้อมใช้ใน 15 นาที",
          ].map((k, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-violet-50 border border-violet-100">
              <span className="w-5 h-5 rounded-full bg-violet-700 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-text-secondary">{k}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-card-border">
        <Link href="/manual/module-8/8-1" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">8.1 Rubric K/P/A + RL/CT</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <Link href="/manual/module-8/8-3" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <div className="text-right">
            <p className="text-[10px] text-text-muted">ถัดไป</p>
            <p className="font-medium">8.3 AI Tools สร้างข้อสอบ</p>
          </div>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
