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

export default function Module81Page() {
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
        <span className="text-text-secondary">8.1 Rubric K/P/A + RL/CT</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-violet-300 bg-violet-100 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-violet-200 flex items-center justify-center shrink-0">
            <ClipboardCheck className="w-6 h-6 text-violet-700" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-violet-700">โมดูล 8 · หัวข้อ 8.1</span>
              <span className="flex items-center gap-1 text-xs text-violet-500">
                <Clock className="w-3.5 h-3.5" /> 2 ชม. · 4 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">Rubric K/P/A + RL/CT มาตรฐาน 4 ระดับ</h1>
            <p className="text-sm font-medium text-violet-700/80 mb-2">Designing Performance Rubrics for Knowledge, Process, Attitude, Reading Literacy & Critical Thinking</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              ออกแบบ Rubric ครบทั้ง KPA + RL + CT ด้วย AI สร้าง Exemplar แต่ละระดับ และปรับเทียมเกณฑ์ร่วมกับเพื่อนร่วมงานได้
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
            "เลือกประเภท Rubric (Holistic / Analytic / Single-Point) ได้ตามวัตถุประสงค์",
            "สร้าง KPA Rubric 4 ระดับที่ชัดเจนและวัดได้สำหรับวิชาที่สอน",
            "ออกแบบ RL Rubric L1–L4 ที่สอดคล้องกับ PISA Framework",
            "สร้าง CT Rubric ครบ 6 องค์ประกอบของ Computational Thinking",
            "ใช้ AI ร่าง-ปรับ-ตรวจสอบ Rubric ได้ครบวงจร",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-violet-50 border border-violet-200 flex items-center justify-center text-[10px] font-bold text-violet-700 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 8.1.1 KPA Framework */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">8.1.1 K/P/A Framework — 3 มิติการประเมิน</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          {[
            { letter: "K", name: "Knowledge", thai: "ความรู้", desc: "ความเข้าใจแนวคิด ข้อเท็จจริง และหลักการ", pass: "ผ่านที่ 60%+ ขึ้นไป", color: "border-violet-200 bg-violet-50 text-violet-700" },
            { letter: "P", name: "Process", thai: "กระบวนการ", desc: "ทักษะการใช้วิธีการ เทคนิค และแก้ปัญหา", pass: "ระดับ 3 จาก 4 ขึ้นไป", color: "border-blue-200 bg-blue-50 text-blue-700" },
            { letter: "A", name: "Attitude", thai: "ทัศนคติ", desc: "จิตสำนึก ค่านิยม และความสัมพันธ์ต่อการเรียนรู้", pass: "ระดับ ดี ขึ้นไป", color: "border-green-200 bg-green-50 text-green-700" },
          ].map((d) => (
            <div key={d.letter} className={`rounded-xl border p-3 text-center ${d.color}`}>
              <span className={`text-3xl font-black ${d.color.split(' ')[2]}`}>{d.letter}</span>
              <p className="text-xs font-bold text-text-primary mt-0.5">{d.name}</p>
              <p className="text-[10px] text-text-muted mb-1">{d.thai}</p>
              <p className="text-[11px] text-text-secondary leading-relaxed">{d.desc}</p>
              <p className={`text-[10px] font-semibold mt-1.5 ${d.color.split(' ')[2]}`}>{d.pass}</p>
            </div>
          ))}
        </div>

        {/* Rubric Types */}
        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <div className="px-4 py-2 bg-violet-50 border-b border-violet-100">
            <p className="text-xs font-semibold text-violet-700">ประเภท Rubric — เลือกให้เหมาะกับงาน</p>
          </div>
          <div className="divide-y divide-card-border text-xs">
            {[
              { type: "Holistic Rubric", use: "ประเมินภาพรวมทั้งชิ้นงาน", best: "งานสร้างสรรค์ ชิ้นงานศิลปะ การนำเสนอ", pros: "รวดเร็ว เหมาะงานที่ประเมินแยกส่วนลำบาก" },
              { type: "Analytic Rubric", use: "ประเมินแยกทีละมิติ K/P/A RL CT", best: "รายงาน ใบงาน PISA ชิ้นงานวิชาการ", pros: "ชัดเจน ให้ Feedback แต่ละด้านได้" },
              { type: "Single-Point Rubric", use: "ระบุเกณฑ์ระดับ Proficient เดียว", best: "Assessment ที่ต้องการ Feedback เชิงพัฒนา", pros: "เร็ว ยืดหยุ่น ครูเขียน Note เสริมได้" },
            ].map((r) => (
              <div key={r.type} className="flex gap-3 px-4 py-2.5">
                <span className="font-bold text-violet-700 w-36 shrink-0">{r.type}</span>
                <div>
                  <p className="text-text-primary">{r.use}</p>
                  <p className="text-text-muted mt-0.5">เหมาะกับ: {r.best}</p>
                  <p className="text-violet-600 mt-0.5">✓ {r.pros}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8.1.2 RL Rubric */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">8.1.2 RL Rubric: Reading Literacy 4 ระดับ</h2>
        <div className="space-y-2">
          {[
            { level: "L1", name: "Foundational (พื้นฐาน)", desc: "ระบุข้อมูลที่ระบุไว้ชัดเจนในข้อความ / ค้นหาข้อเท็จจริงตรงๆ / ตอบคำถาม Who/What/When", action: "ระบุ ค้นหา ตอบตรง", color: "border-blue-200 bg-blue-50" },
            { level: "L2", name: "Intermediate (ระดับกลาง)", desc: "อนุมานจากข้อมูลในข้อความ / สรุปใจความสำคัญ / เชื่อมโยง 2 ส่วนของข้อความ", action: "อนุมาน สรุป เชื่อมโยง", color: "border-green-200 bg-green-50" },
            { level: "L3", name: "Advanced (ขั้นสูง)", desc: "วิเคราะห์โครงสร้างและเจตนาของผู้เขียน / ตีความภาษาเปรียบเทียบ / เชื่อมโยงกับความรู้เดิม", action: "วิเคราะห์ ตีความ วิจารณ์", color: "border-amber-200 bg-amber-50" },
            { level: "L4", name: "Expert (ผู้เชี่ยวชาญ)", desc: "ประเมินคุณภาพ ความน่าเชื่อถือ และอคติในข้อความ / สร้างมุมมองใหม่จากข้อมูล / ใช้ข้อความหลายชิ้นเปรียบเทียบ", action: "ประเมิน สร้างสรรค์ สังเคราะห์", color: "border-violet-200 bg-violet-50" },
          ].map((l) => (
            <div key={l.level} className={`flex items-start gap-3 rounded-xl border p-3 ${l.color}`}>
              <div className="shrink-0 text-center w-16">
                <span className="text-lg font-black text-text-primary">{l.level}</span>
                <p className="text-[9px] text-text-muted font-medium leading-tight">{l.action}</p>
              </div>
              <div className="w-px bg-gray-200 self-stretch shrink-0" />
              <div>
                <p className="text-xs font-bold text-text-primary">{l.name}</p>
                <p className="text-[11px] text-text-secondary mt-0.5">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8.1.3 CT Rubric */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">8.1.3 CT Rubric: Critical Thinking 6 องค์ประกอบ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
          {[
            { num: "1", comp: "Decomposition", thai: "การแยกปัญหา", desc: "แบ่งปัญหาซับซ้อนเป็นส่วนย่อยที่จัดการได้", icon: "🔧" },
            { num: "2", comp: "Pattern Recognition", thai: "การจำแนกรูปแบบ", desc: "ระบุความเหมือน-ต่าง รูปแบบ แนวโน้มในข้อมูล", icon: "🔍" },
            { num: "3", comp: "Abstraction", thai: "การสรุปทั่วไป", desc: "มุ่งเน้นสิ่งสำคัญ ละเลือกรายละเอียดที่ไม่จำเป็น", icon: "🎯" },
            { num: "4", comp: "Algorithm Design", thai: "การออกแบบอัลกอริทึม", desc: "วางขั้นตอนแก้ปัญหาที่ชัดเจน ทำซ้ำได้ และตรวจสอบได้", icon: "📋" },
            { num: "5", comp: "Analysis", thai: "การวิเคราะห์", desc: "ตรวจสอบหลักฐาน เชื่อมโยงเหตุและผล ประเมิน Validity", icon: "📊" },
            { num: "6", comp: "Evaluation", thai: "การประเมินผล", desc: "ตัดสินคุณภาพ วิจารณ์โซลูชัน และเสนอทางปรับปรุง", icon: "⚖️" },
          ].map((c) => (
            <div key={c.num} className="flex items-start gap-2.5 p-3 rounded-xl border border-violet-100 bg-white">
              <span className="text-base">{c.icon}</span>
              <div>
                <p className="text-xs font-bold text-violet-700">{c.comp}</p>
                <p className="text-[10px] text-text-muted">{c.thai}</p>
                <p className="text-[11px] text-text-secondary mt-0.5">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Common Errors */}
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-xs font-bold text-amber-700 mb-2">⚠️ ข้อผิดพลาดทั่วไปในการออกแบบ Rubric</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-text-secondary">
            {[
              "เกณฑ์ไม่ชัดเจนหรือเป็นอัตนัยมากเกินไป",
              "จำนวนระดับไม่เหมาะสม (ควร 3–5 ระดับ)",
              "ไม่มีตัวอย่างการแสดงออก (Exemplars)",
              "ใช้ศัพท์ที่นักเรียนไม่เข้าใจ",
              "เกณฑ์ซ้ำซ้อนหรือทับซ้อนกัน",
              "ไม่รวมเกณฑ์ทั้งสาม K/P/A ในการประเมิน",
            ].map((e, i) => (
              <div key={i} className="flex gap-1.5">
                <span className="text-amber-600 shrink-0">✗</span>
                <span>{e}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8.1.4 กระบวนการด้วย AI */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">8.1.4 กระบวนการออกแบบ Rubric ด้วย AI</h2>
        <div className="space-y-2">
          {[
            { step: "1", title: "Draft จาก Learning Objective", desc: "ใช้ ChatGPT / Claude ร่างเกณฑ์ KPA+RL+CT จากวัตถุประสงค์การเรียนรู้ที่กำหนด" },
            { step: "2", title: "สร้าง Exemplar แต่ละระดับ", desc: "ให้ AI สร้างตัวอย่างคำตอบ/ชิ้นงานที่แสดงแต่ละระดับ — ใช้เป็น Anchor Paper" },
            { step: "3", title: "ตรวจสอบความชัดเจน", desc: "ให้ AI ตรวจว่าเกณฑ์แต่ละข้อชัดเจน วัดได้ และไม่ทับซ้อนกัน" },
            { step: "4", title: "ปรับเทียมกับเพื่อนร่วมงาน", desc: "ให้ครูหลายคนประเมินงานเดียวกัน เปรียบเทียบ อภิปราย จนได้เกณฑ์ร่วม (Inter-rater Reliability)" },
          ].map((s) => (
            <div key={s.step} className="flex items-start gap-3 rounded-xl border border-violet-100 bg-white p-3">
              <span className="w-6 h-6 rounded-lg bg-violet-700 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{s.step}</span>
              <div>
                <p className="text-xs font-bold text-text-primary">{s.title}</p>
                <p className="text-[11px] text-text-secondary mt-0.5">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prompt Templates */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">Prompt Templates สำหรับสร้าง Rubric</h2>
        <div className="space-y-3">
          {[
            {
              label: "Prompt 1: ร่าง KPA Rubric จากวัตถุประสงค์",
              prompt: "I teach [วิชา/หัวข้อ]. I want to create a KPA rubric for [Learning Objective]. | Can you draft a rubric with 4 performance levels: Developing / Proficient / Advanced / Expert? | Include criteria for Knowledge, Process, and Attitude. | Provide clear descriptors for each level and dimension. → ผลลัพธ์: KPA Rubric Table พร้อม Descriptor ครบ 4 ระดับ x 3 มิติ",
            },
            {
              label: "Prompt 2: ทำให้ Rubric ชัดเจนและวัดได้",
              prompt: "I have a rubric for [หัวข้อ] but some criteria are vague. Here is the rubric: [วาง Rubric เดิม] | Rewrite the criteria to be more specific and measurable. | Use action verbs and concrete examples. | Make sure students understand what each level means. → ผลลัพธ์: Rubric เวอร์ชันปรับปรุงพร้อมอธิบายเหตุผลการเปลี่ยน",
            },
            {
              label: "Prompt 3: สร้าง Exemplar แต่ละระดับ",
              prompt: "I have a rubric for [งาน/ชิ้นงาน]. Here is my Advanced level criteria: [เกณฑ์ระดับ Advanced] | Create a sample student response that clearly demonstrates this level. | Also create Proficient and Developing examples. | Explain why each example exemplifies that level. → ผลลัพธ์: Anchor Papers 3 ระดับพร้อมคำอธิบาย",
            },
            {
              label: "Prompt 4: ตรวจสอบ CT Rubric ครบ 6 องค์ประกอบ",
              prompt: "Here is my CT rubric for [หัวข้อ]: [วาง Rubric] | Does it cover all 6 CT components: Decomposition, Pattern Recognition, Abstraction, Algorithm Design, Analysis, Evaluation? | Are the criteria clear and measurable? | Suggest improvements and additions for missing components. → ผลลัพธ์: CT Rubric Audit Report + Revised Version",
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
          <Wrench className="w-4.5 h-4.5 text-violet-700" />
          กิจกรรม Workshop (3 หัวข้อ · รวม ~75 นาที)
        </h2>
        <div className="space-y-4">
          {[
            {
              num: "1", title: "เขียน KPA Rubric สำหรับหัวข้อที่สอน",
              time: "30 นาที", format: "เดี่ยว",
              goal: "KPA Rubric 4 ระดับพร้อม Exemplar 1 ชุด",
              steps: [
                "เลือกหัวข้อและกำหนดวัตถุประสงค์ KPA อย่างละ 1 ข้อ",
                "ใช้ Prompt 1 ให้ AI ร่าง Rubric และตรวจสอบความครบถ้วน",
                "สร้างเกณฑ์ Knowledge (ความรู้) 4 ระดับด้วยตัวเอง",
                "เพิ่มเกณฑ์ Process และ Attitude ให้สมบูรณ์",
                "ใช้ Prompt 3 ขอ Exemplar แต่ละระดับจาก AI",
              ],
            },
            {
              num: "2", title: "สร้าง RL Rubric สำหรับบทเรียน",
              time: "25 นาที", format: "เดี่ยว",
              goal: "RL Rubric L1–L4 พร้อมตัวอย่างคำถามแต่ละระดับ",
              steps: [
                "เลือกข้อความ (Stimulus) และกำหนดระดับความยาก",
                "สร้างเกณฑ์ L1 (ค้นหาข้อมูลตรงๆ) ก่อน — ง่ายสุด",
                "เพิ่มเกณฑ์ L2–L4 โดยเพิ่มความซับซ้อนขึ้นทีละระดับ",
                "สร้างตัวอย่างคำถามแต่ละระดับและ Expected Answer",
              ],
            },
            {
              num: "3", title: "CT Rubric Peer Review",
              time: "20 นาที", format: "กลุ่ม 3–4 คน",
              goal: "CT Rubric ที่ครบ 6 องค์ประกอบและผ่าน Peer Review",
              steps: [
                "แบ่งกลุ่ม แจก CT Rubric ของเพื่อนคนละ 1 ชุด",
                "ตรวจสอบว่ารวม 6 CT Components ทั้งหมดหรือไม่",
                "ประเมินความชัดเจนของเกณฑ์แต่ละระดับ",
                "ให้ข้อเสนอแนะแบบสร้างสรรค์ + ปรับปรุง Rubric",
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
            "Analytic Rubric เหมาะกับงานวิชาการ — ให้ Feedback แยกได้ทีละมิติ",
            "RL Rubric ต้องไล่จาก L1 (ค้นหาตรงๆ) ถึง L4 (สร้างสรรค์) อย่างต่อเนื่อง",
            "CT Rubric ต้องครบ 6 องค์ประกอบ — ขาดองค์ประกอบใดองค์ประกอบหนึ่งไม่ได้",
            "Exemplar สำคัญกว่า Descriptor — นักเรียนเรียนรู้จากตัวอย่างได้ดีกว่า",
            "การปรับเทียม Rubric กับเพื่อนร่วมงาน = Inter-rater Reliability สูงขึ้น",
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
        <Link href="/manual/module-7/7-3" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">7.3 Workshop: สร้างสื่อ</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <Link href="/manual/module-8/8-2" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <div className="text-right">
            <p className="text-[10px] text-text-muted">ถัดไป</p>
            <p className="font-medium">8.2 PISA-style Assessment</p>
          </div>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
