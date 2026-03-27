import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  CheckCircle2,
  Lightbulb,
  Wrench,
  FileEdit,
} from "lucide-react";

export default function Module62Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 lg:py-14 animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs text-text-muted mb-6 flex-wrap">
        <Link href="/" className="hover:text-text-secondary transition-colors">หน้าแรก</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/manual" className="hover:text-text-secondary transition-colors">คู่มือการอบรม</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/manual/module-6" className="hover:text-text-secondary transition-colors">โมดูล 6</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-text-secondary">6.2 ชิ้นงานจากแผนการสอนจริง</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-indigo-300 bg-indigo-100 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-indigo-200 flex items-center justify-center shrink-0">
            <FileEdit className="w-6 h-6 text-indigo-700" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-indigo-700">โมดูล 6 · หัวข้อ 6.2</span>
              <span className="flex items-center gap-1 text-xs text-indigo-500">
                <Clock className="w-3.5 h-3.5" /> 1.5 ชม. · 5 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">ชิ้นงานจากแผนการสอนจริง 9 ฉบับ</h1>
            <p className="text-sm font-medium text-indigo-700/80 mb-2">Authentic Tasks from 9 Real Lesson Plans — 4 Types + RL/CT/PERMA Alignment</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              วิเคราะห์ 4 ประเภทชิ้นงานหลักจาก 9 แผนจริง เชื่อมโยงกับ RL/CT/PERMA และออกแบบ Authentic Task + Rubric ด้วย AI ได้ทันที
            </p>
          </div>
        </div>
      </div>

      {/* Learning Outcomes */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-base font-bold text-text-primary mb-3">
          <CheckCircle2 className="w-4 h-4 text-indigo-700" />
          ผลลัพธ์การเรียนรู้
        </h2>
        <ul className="space-y-2">
          {[
            "จำแนกชิ้นงาน/ภาระงาน 4 ประเภทหลักและระบุ K/P/A ที่วัดได้",
            "ออกแบบชิ้นงานที่รวม 2–3 ประเภทเพื่อวัด K/P/A ครบมิติ",
            "เชื่อมโยงชิ้นงานกับ RL Level, CT Component และ PERMA",
            "ใช้ AI สร้าง Rubric 4 ระดับสำหรับชิ้นงานที่ออกแบบได้",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center text-[10px] font-bold text-indigo-700 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 6.2.1 4 ประเภทชิ้นงาน */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">6.2.1 ชิ้นงาน/ภาระงาน 4 ประเภทหลัก</h2>
        <div className="space-y-3 mb-4">
          {[
            {
              num: "1", type: "Product", kpa: "K + P + A",
              color: "border-blue-200 bg-blue-50", badge: "bg-blue-100 text-blue-700",
              examples: ["รายงาน / โปสเตอร์ / Infographic", "Model / ชิ้นงานสร้างสรรค์", "Digital Portfolio / Video"],
              note: "วัดได้ครบ 3 มิติ — เหมาะกับ Summative ปิดหน่วย",
            },
            {
              num: "2", type: "Performance", kpa: "P + A",
              color: "border-green-200 bg-green-50", badge: "bg-green-100 text-green-700",
              examples: ["การนำเสนอ / Demonstration / Demo", "Role Play / Debate / Experiment"],
              note: "เน้นทักษะปฏิบัติ — วัด P สูงสุด Rubric ต้อง Behavioral",
            },
            {
              num: "3", type: "Process", kpa: "P + A",
              color: "border-amber-200 bg-amber-50", badge: "bg-amber-100 text-amber-700",
              examples: ["Portfolio / Journal / Concept Map", "Flow Chart / Draft+Revision"],
              note: "เห็นพัฒนาการ — ม.ปลายนิยม เหมาะกับ RL Meta-reading",
            },
            {
              num: "4", type: "Paper-based", kpa: "K",
              color: "border-slate-200 bg-slate-50", badge: "bg-slate-200 text-slate-700",
              examples: ["ข้อสอบ / Quiz / Worksheet", "Exit Ticket / Test"],
              note: "วัดความรู้ — ทุกแผนมี (9/9) ใช้ร่วมกับประเภทอื่น",
            },
          ].map((t) => (
            <div key={t.num} className={`rounded-xl border p-4 ${t.color}`}>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${t.badge}`}>ประเภท {t.num}: {t.type}</span>
                <span className="text-xs font-semibold text-text-primary">วัด {t.kpa}</span>
              </div>
              <div className="flex gap-4 mb-2">
                <ul className="space-y-0.5 flex-1">
                  {t.examples.map((ex, i) => (
                    <li key={i} className="flex gap-1.5 text-xs text-text-secondary">
                      <span className="text-text-muted shrink-0">▸</span>{ex}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[11px] text-text-muted italic">{t.note}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-3">
          <p className="text-xs font-semibold text-indigo-700 mb-1">💡 ชิ้นงานที่ดีมักรวม 2–3 ประเภท</p>
          <p className="text-xs text-text-secondary">Product + Performance + Paper-based — วัด K/P/A ได้ครบมิติ และให้ข้อมูลที่หลากหลายกว่าชิ้นงานประเภทเดียว</p>
        </div>
      </section>

      {/* 6.2.2 Pattern จาก 9 แผนจริง */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">6.2.2 Pattern ชิ้นงานจาก 9 แผนการสอนจริง</h2>
        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-indigo-50 border-b border-indigo-100">
            <p className="text-xs font-semibold text-indigo-700">สถิติชิ้นงานจาก 9 แผนการสอน</p>
          </div>
          <div className="divide-y divide-card-border text-xs">
            {[
              { type: "Product", count: "8/9 แผน", note: "โปสเตอร์และรายงานเป็นที่นิยมสูงสุด" },
              { type: "Performance", count: "7/9 แผน", note: "การนำเสนอและ Demonstration" },
              { type: "Process", count: "5/9 แผน", note: "Portfolio และ Journal ใน ม.ปลาย" },
              { type: "Paper-based", count: "9/9 แผน", note: "Quiz และ Exit Ticket ทุกแผน" },
            ].map((s) => (
              <div key={s.type} className="flex items-center gap-3 px-4 py-2.5">
                <span className="text-xs font-bold text-indigo-700 w-24 shrink-0">{s.type}</span>
                <span className="text-[11px] font-semibold text-text-primary w-20 shrink-0">{s.count}</span>
                <span className="text-[11px] text-text-muted">{s.note}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <div className="px-4 py-2 bg-slate-50 border-b border-card-border">
            <p className="text-xs font-semibold text-text-primary">ชิ้นงานที่ใช้จริงตามวิชา</p>
          </div>
          <table className="w-full text-xs">
            <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
              <th className="text-left px-4 py-1.5">วิชา/ระดับ</th>
              <th className="text-left px-4 py-1.5">ชิ้นงานที่ใช้จริง</th>
            </tr></thead>
            <tbody className="divide-y divide-card-border">
              {[
                ["วิทยาศาสตร์ ม.1", "Poster + Lab Report + Written Test"],
                ["คณิตศาสตร์ ม.3", "Problem Portfolio + Presentation + Quiz"],
                ["ภาษาไทย ม.5", "Essay + Oral Reading + Written Analysis"],
                ["ภาษาอังกฤษ ม.4", "Project + Dialogue Performance + Grammar Test"],
                ["สังคมศึกษา ม.2", "Infographic + Group Discussion + Written Test"],
              ].map(([subject, tasks], i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-2.5 font-semibold text-indigo-700 w-32 shrink-0">{subject}</td>
                  <td className="px-4 py-2.5 text-text-secondary">{tasks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6.2.3 เชื่อมชิ้นงานกับ RL+CT+PERMA */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">6.2.3 เชื่อมชิ้นงานกับ RL + CT + PERMA</h2>
        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <div className="px-4 py-2 bg-indigo-50 border-b border-indigo-100">
            <p className="text-xs font-semibold text-indigo-700">RL Level และ CT Component ตามประเภทชิ้นงาน</p>
          </div>
          <table className="w-full text-xs">
            <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
              <th className="text-left px-4 py-1.5">ชิ้นงาน</th>
              <th className="text-left px-4 py-1.5">RL ที่ฝึก</th>
              <th className="text-left px-4 py-1.5">CT ที่ฝึก</th>
            </tr></thead>
            <tbody className="divide-y divide-card-border">
              {[
                ["บทความวิเคราะห์", "RL L3: ตีความ + ประเมิน", "CT: Analysis + Evaluation"],
                ["Poster / Infographic", "RL L2: สรุปประเด็นหลัก", "CT: Abstraction + Pattern"],
                ["Debate / Presentation", "RL L4: สะท้อนและวิพากษ์", "CT: Algorithm + Evaluation"],
                ["Lab Report", "RL L2: เข้าใจเชิงเทคนิค", "CT: Decomp + Sequence"],
                ["Portfolio", "RL L3-4: Meta-reading", "CT ครบทุกองค์ประกอบ"],
              ].map(([task, rl, ct], i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-2.5 font-semibold text-text-primary">{task}</td>
                  <td className="px-4 py-2.5 text-violet-700">{rl}</td>
                  <td className="px-4 py-2.5 text-blue-700">{ct}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 rounded-xl border border-indigo-100 bg-indigo-50/50 p-3">
          <p className="text-xs font-semibold text-indigo-700 mb-1">💡 PERMA ในชิ้นงาน</p>
          <div className="space-y-0.5 text-xs text-text-secondary">
            <p>• <strong>P+E:</strong> Scenario ที่ท้าทาย น่าสนใจ — นักเรียนอยากทำจริงๆ</p>
            <p>• <strong>R:</strong> กลุ่มทำร่วมกัน นำเสนอให้เพื่อนฟัง</p>
            <p>• <strong>M+A:</strong> Portfolio สะท้อนพัฒนาการ นำเสนอผลสำเร็จ</p>
          </div>
        </div>
      </section>

      {/* Prompt Templates */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">Prompt Templates สำหรับชิ้นงาน + Rubric</h2>
        <div className="space-y-3">
          {[
            {
              label: "Prompt 1: ออกแบบ Authentic Task",
              prompt: "ออกแบบ Authentic Task สำหรับหน่วย [หน่วย] วิชา [วิชา] ระดับ [ชั้น] | ให้เป็น Performance Task ที่นักเรียนแสดงออกในบริบทโลกจริง | ระบุ: คำอธิบายงาน / ผู้ฟัง (Audience) / ผลิตภัณฑ์ / เกณฑ์คุณภาพ → ผลลัพธ์: Authentic Task Design ตาม GRASPS Framework",
            },
            {
              label: "Prompt 2: สร้าง Rubric K/P/A ครบ",
              prompt: "สร้าง Holistic Rubric สำหรับ [ประเภทชิ้นงาน] ที่ประเมินครบ K/P/A | วิชา: [วิชา] | ระดับ: [ชั้น] | ให้มี 4 ระดับพร้อม Descriptor ที่วัดได้จริง | K: ความถูกต้องของเนื้อหา | P: กระบวนการและทักษะ | A: ความใส่ใจและเจตคติ → ผลลัพธ์: Rubric 3 มิติ พร้อมตัวอย่างงานระดับ 4 และระดับ 2",
            },
            {
              label: "Prompt 3: เชื่อมชิ้นงานกับ RL+CT",
              prompt: "วิเคราะห์ชิ้นงาน [ประเภท/ชื่อ] ว่าฝึก RL และ CT ระดับใด | [อธิบายชิ้นงานหรือ Rubric ที่มีอยู่] | เสนอวิธีปรับชิ้นงานให้ฝึก RL L3-L4 และ CT ขั้นสูงมากขึ้น → ผลลัพธ์: Enhanced Task Design ที่บูรณาการ RL+CT อย่างชัดเจน",
            },
            {
              label: "Prompt 4: สร้าง Portfolio Prompt",
              prompt: "สร้าง Portfolio Prompt สำหรับนักเรียนสะท้อนการเรียนรู้ตลอดหน่วย [หน่วย] | วิชา: [วิชา] | ระดับ: [ชั้น] | ระยะเวลา: [จำนวน] สัปดาห์ | ให้มี: 5 คำถาม Reflection ครอบคลุม K/P/A + PERMA Self-check → ผลลัพธ์: Portfolio System ครบวงจร พร้อมเกณฑ์ประเมิน",
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
          <Wrench className="w-4.5 h-4.5 text-indigo-700" />
          กิจกรรม Workshop (3 หัวข้อ · รวม ~60 นาที)
        </h2>
        <div className="space-y-4">
          {[
            {
              num: "1", title: "ออกแบบชิ้นงาน Multi-type",
              time: "20 นาที", format: "เดี่ยว",
              goal: "สร้าง Authentic Task Design Template",
              steps: [
                "เลือกหน่วยการเรียนรู้ที่จะสอน",
                "ออกแบบชิ้นงานที่รวม 2–3 ประเภท: Product + Performance หรือ Process + Paper",
                "ตรวจสอบว่าชิ้นงานวัด K/P/A ครบไหม และใช้เวลาสมเหตุสมผลไหม",
                "ระบุ RL Level และ CT Component ที่ฝึก",
              ],
            },
            {
              num: "2", title: "สร้าง Rubric ด้วย AI",
              time: "20 นาที", format: "เดี่ยว",
              goal: "สร้าง Rubric ที่พร้อมใช้ประเมินทันที",
              steps: [
                "เลือกชิ้นงาน 1 ชิ้นที่ต้องการสร้าง Rubric",
                "ใช้ AI Prompt: 'สร้าง Rubric 4 ระดับสำหรับ [ชิ้นงาน] วิชา [วิชา] ระดับ [ชั้น]'",
                "ตรวจสอบ: Descriptor แต่ละระดับวัดได้จริงไหม? ไม่คลุมเครือ?",
                "ปรับ Rubric ให้สอดคล้องกับบริบทห้องเรียนจริง",
              ],
            },
            {
              num: "3", title: "Peer Review ชิ้นงานและ Rubric",
              time: "20 นาที", format: "คู่",
              goal: "ได้ Validated Task+Rubric Package",
              steps: [
                "แลกเปลี่ยนชิ้นงานและ Rubric กับเพื่อนครู 1 คน",
                "ให้ Feedback ตาม: K/P/A ครบไหม? วัดได้จริงไหม? RL+CT ชัดไหม?",
                "ปรับตาม Feedback 1–2 จุด แล้ว Final version",
                "Share Lesson: เรียนรู้อะไรจาก Rubric ของเพื่อน?",
              ],
            },
          ].map((ws) => (
            <div key={ws.num} className="rounded-xl border border-indigo-200 bg-white overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 bg-indigo-50 border-b border-indigo-100">
                <span className="w-7 h-7 rounded-lg bg-indigo-700 text-white text-xs font-bold flex items-center justify-center">W{ws.num}</span>
                <div>
                  <p className="text-sm font-bold text-text-primary">{ws.title}</p>
                  <p className="text-[11px] text-indigo-500">{ws.time} · {ws.format}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs font-medium text-indigo-700 mb-2">🎯 {ws.goal}</p>
                <ul className="space-y-1.5">
                  {ws.steps.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                      <span className="w-4 h-4 rounded bg-indigo-100 text-indigo-700 text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
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
          <Lightbulb className="w-4.5 h-4.5 text-indigo-700" />
          Key Takeaways
        </h2>
        <div className="space-y-2">
          {[
            "4 ประเภทชิ้นงานครอบคลุม K/P/A ต่างกัน — เลือกให้ตรงวัตถุประสงค์",
            "Multi-type Task ดีกว่า Single-type — Product+Performance วัดได้หลากมิติ",
            "Rubric ที่ดีต้องสร้างก่อนสอน — ไม่ใช่หลังจากรับงานนักเรียน",
            "RL+CT เชื่อมโยงกับทุกประเภทชิ้นงาน — ขึ้นอยู่กับการออกแบบ",
            "AI สร้าง Rubric Draft ได้ภายใน 2 นาที — ครูปรับ 5–10 นาทีก็พร้อมใช้",
          ].map((k, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-indigo-50 border border-indigo-100">
              <span className="w-5 h-5 rounded-full bg-indigo-700 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-text-secondary">{k}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-indigo-300 bg-indigo-700 p-4 text-white">
          <p className="text-xs font-bold text-indigo-200 mb-1">🎯 ภารกิจต่อเนื่อง (Take-Home Mission 6.2)</p>
          <p className="text-sm">สร้าง Authentic Task + Rubric 1 ชุด สำหรับหน่วยการเรียนรู้ที่จะสอนในเดือนถัดไป โดยใช้ AI ช่วยสร้าง Rubric และตรวจสอบว่าครบ K/P/A + RL+CT</p>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-card-border">
        <Link href="/manual/module-6/6-1" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">6.1 โครงสร้าง 13 หัวข้อ</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <Link href="/manual/module-6/6-3" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <div className="text-right">
            <p className="text-[10px] text-text-muted">ถัดไป</p>
            <p className="font-medium">6.3 Mega Prompt เขียนแผน</p>
          </div>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
