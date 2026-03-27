import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  CheckCircle2,
  Lightbulb,
  Wrench,
  Rocket,
} from "lucide-react";

export default function Module92Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 lg:py-14 animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs text-text-muted mb-6 flex-wrap">
        <Link href="/" className="hover:text-text-secondary transition-colors">หน้าแรก</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/manual" className="hover:text-text-secondary transition-colors">คู่มือการอบรม</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/manual/module-9" className="hover:text-text-secondary transition-colors">โมดูล 9</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-text-secondary">9.2 PLC ด้วย AI</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-purple-300 bg-purple-100 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-purple-200 flex items-center justify-center shrink-0">
            <Rocket className="w-6 h-6 text-purple-700" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-purple-700">โมดูล 9 · หัวข้อ 9.2</span>
              <span className="flex items-center gap-1 text-xs text-purple-500">
                <Clock className="w-3.5 h-3.5" /> 30 นาที · 3 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">PLC ด้วย AI — ชุมชนครูเพื่อเรียนรู้ต่อเนื่อง</h1>
            <p className="text-sm font-medium text-purple-700/80 mb-2">Community of Practice (CoP): Roles, Online Tools & Continuous Learning Plan</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              สร้างและเข้าร่วม Community of Practice (CoP) สำหรับครู AI แบ่งปัน Prompt Template วาง Continuous Learning Plan และติดตาม AI Literacy อย่างต่อเนื่อง
            </p>
          </div>
        </div>
      </div>

      {/* Learning Outcomes */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-base font-bold text-text-primary mb-3">
          <CheckCircle2 className="w-4 h-4 text-purple-700" />
          ผลลัพธ์การเรียนรู้
        </h2>
        <ul className="space-y-2">
          {[
            "อธิบายความสำคัญของ Community of Practice (CoP) สำหรับครู AI ได้",
            "เลือกบทบาทและเครื่องมือ Online CoP ที่เหมาะกับบริบทโรงเรียนได้",
            "แชร์ Prompt Template และ AI Workflow ในกลุ่มวิชาได้",
            "วาง Continuous Learning Plan พร้อมแหล่งเรียนรู้ที่เหมาะสมได้",
            "ประเมินความน่าเชื่อถือของข่าวสาร AI ด้วย AI Literacy Checklist ได้",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center text-[10px] font-bold text-purple-700 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 9.2.0 4Fs Structured Reflection */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">9.2.1 Structured Reflection ด้วยกรอบ 4Fs</h2>
        <p className="text-sm text-text-secondary mb-4">กรอบ <strong>4Fs</strong> เป็นวิธีสะท้อนการเรียนรู้อย่างมีโครงสร้าง ช่วยให้ครูมองย้อนกลับและวางแผนการพัฒนาอย่างมีประสิทธิภาพ</p>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {[
            { f: "F1", name: "Facts", thai: "ข้อเท็จจริง", q: "เกิดอะไรขึ้นบ้าง?", desc: "บันทึกสิ่งที่ทำไป — สิ่งที่ใช้ AI เครื่องมือที่ลอง กิจกรรมที่ออกแบบ", color: "border-blue-200 bg-blue-50 text-blue-700" },
            { f: "F2", name: "Feelings", thai: "ความรู้สึก", q: "รู้สึกอย่างไร?", desc: "สิ่งที่รู้สึกดี สิ่งที่ยังกังวล และสิ่งที่น่าตื่นเต้น — ตรงไปตรงมา", color: "border-purple-200 bg-purple-50 text-purple-700" },
            { f: "F3", name: "Findings", thai: "สิ่งที่ค้นพบ", q: "เรียนรู้อะไร?", desc: "Insight ใหม่ที่ได้ — สิ่งที่ใช้ได้ผล สิ่งที่ต้องปรับ และความเข้าใจใหม่", color: "border-green-200 bg-green-50 text-green-700" },
            { f: "F4", name: "Future", thai: "ก้าวต่อไป", q: "จะทำอะไรต่อ?", desc: "Action Items ที่ชัดเจน — 1–2 สิ่งที่จะลองทำในสัปดาห์หน้าทันที", color: "border-amber-200 bg-amber-50 text-amber-700" },
          ].map((item) => (
            <div key={item.f} className={`rounded-xl border p-3 ${item.color.split(' ').slice(0,2).join(' ')}`}>
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-lg font-black ${item.color.split(' ')[2]}`}>{item.f}</span>
                <div>
                  <p className="text-xs font-bold text-text-primary">{item.name}</p>
                  <p className="text-[10px] text-text-muted">{item.thai}</p>
                </div>
              </div>
              <p className={`text-[11px] font-semibold mb-1 ${item.color.split(' ')[2]}`}>{item.q}</p>
              <p className="text-[11px] text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-3">
          <p className="text-xs font-semibold text-purple-700 mb-1.5">💡 วิธีใช้ 4Fs ใน PLC หรือ CoP</p>
          <div className="space-y-1 text-xs text-text-secondary">
            {["แบ่งเวลา 15–20 นาทีในการประชุม PLC เพื่อทำ 4Fs ทุกเดือน","เขียนในสมุดบันทึก ส่งใน Group Chat หรือใช้ Padlet ร่วมกัน","Pair กับ Accountability Partner เพื่อแชร์ F3 (Findings) และ F4 (Future)","ใช้ AI ช่วยสะท้อน — วาง Facts & Feelings ให้ AI ช่วยหา Patterns"].map((t,i) => (
              <div key={i} className="flex gap-2"><span className="text-purple-500 shrink-0">→</span><span>{t}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* 9.2.2 CoP คืออะไร */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">9.2.2 Community of Practice (CoP) คืออะไร?</h2>

        <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-4 mb-4">
          <p className="text-sm font-bold text-purple-700 mb-2">ทำไม CoP ถึงสำคัญสำหรับครู AI?</p>
          <div className="space-y-1.5 text-xs text-text-secondary">
            {[
              "ความรู้สึกว่า 'ไม่ใช่คนเดียว' ที่ต้องใช้ AI — ลดความโดดเดี่ยว",
              "แลกเปลี่ยนแนวคิด วิธีการ Prompt Template และเครื่องมือที่ได้ผล",
              "ได้รับ Feedback จากครูที่มีบริบทคล้ายกัน — เข้าใจปัญหาจริง",
              "แรงบันดาลใจและแรงกระตุ้นให้เดินหน้าต่อเมื่อท้อแท้",
              "การเรียนรู้ในบริบทสถานศึกษาที่เข้าใจ — ตรงกับความจริงมากกว่า",
            ].map((d, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-purple-600 shrink-0">✓</span>
                <span>{d}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-text-muted mt-2 italic">"ลำพังทำได้ยาก แต่พร้อมกันก็ทำได้สะดวก"</p>
        </div>

        {/* CoP Roles */}
        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <div className="px-4 py-2 bg-purple-50 border-b border-purple-100">
            <p className="text-xs font-semibold text-purple-700">CoP Roles — บทบาท 4 แบบในชุมชน</p>
          </div>
          <div className="divide-y divide-card-border text-xs">
            {[
              { role: "Facilitator", thai: "ผู้อำนวยความสะดวก", desc: "วางโครงสร้าง นัดหมาย เวลา และเนื้อหาของการพบปะทุกครั้ง", icon: "🎯" },
              { role: "Content Sharer", thai: "ผู้แชร์", desc: "นำสิ่งใหม่ๆ เครื่องมือ แนวคิด หรือประสบการณ์มาแชร์กับกลุ่ม", icon: "📤" },
              { role: "Supporter", thai: "ผู้สนับสนุน", desc: "ให้กำลังใจ ช่วยแก้ปัญหา และสนับสนุนเมื่อเพื่อนลำบาก", icon: "🤝" },
              { role: "Learner", thai: "ผู้เรียนรู้", desc: "ทุกคนเป็น Learner — ผลักดันตัวเองให้เรียนรู้สิ่งใหม่อยู่เสมอ", icon: "📚" },
            ].map((r) => (
              <div key={r.role} className="flex gap-3 px-4 py-2.5 items-start">
                <span className="text-base shrink-0">{r.icon}</span>
                <div className="w-32 shrink-0">
                  <p className="font-bold text-purple-700">{r.role}</p>
                  <p className="text-[10px] text-text-muted">{r.thai}</p>
                </div>
                <p className="text-text-secondary">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9.2.2 Online CoP Tools */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">9.2.3 Online CoP Tools — เลือกให้เหมาะกับกลุ่ม</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
          {[
            { tool: "LINE Group", use: "สนทนาง่าย โพสต์รูป ไฟล์ได้ทันที", best: "CoP ขนาดเล็ก 5–15 คน ที่คุ้นเคยกัน", color: "border-green-200 bg-green-50" },
            { tool: "Facebook Group", use: "อัปโหลดวีดีโอ เพจ และอภิปรายได้ดี", best: "CoP ขนาดใหญ่ข้ามโรงเรียน", color: "border-blue-200 bg-blue-50" },
            { tool: "Padlet", use: "กระดานอิเล็กทรอนิกส์ แบ่งแนวคิด ประสบการณ์", best: "แชร์ Prompt Template และ Resource", color: "border-amber-200 bg-amber-50" },
            { tool: "Wakelet", use: "รวมลิงก์ วีดีโอ บทความเป็นบอร์ดเดียว", best: "Curate แหล่งเรียนรู้ AI ร่วมกัน", color: "border-violet-200 bg-violet-50" },
            { tool: "Discord", use: "สนทนาลึกๆ แบ่ง Channel ตามหัวข้อได้", best: "CoP ที่ต้องการหลายหัวข้อคู่ขนาน", color: "border-indigo-200 bg-indigo-50" },
            { tool: "Google Classroom", use: "แบ่งปันทรัพยากร ไฟล์ และงาน", best: "CoP ที่มีโครงสร้างชัดเจนแบบ PLC", color: "border-red-200 bg-red-50" },
          ].map((t) => (
            <div key={t.tool} className={`rounded-xl border p-3 ${t.color}`}>
              <p className="text-xs font-bold text-text-primary">{t.tool}</p>
              <p className="text-[11px] text-text-secondary mt-0.5">{t.use}</p>
              <p className="text-[10px] text-text-muted mt-1">🎯 {t.best}</p>
            </div>
          ))}
        </div>

        {/* PLC Monthly Meeting */}
        <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-4">
          <p className="text-xs font-bold text-purple-700 mb-2">โครงสร้าง PLC Meeting รายเดือน (60 นาที)</p>
          <div className="space-y-1.5 text-xs text-text-secondary">
            {[
              ["10 นาที", "Check-in: ทบทวน Action Plan เดือนที่ผ่านมา — ทำอะไรไปแล้ว?"],
              ["20 นาที", "Content Share: สมาชิก 1–2 คนแชร์ Prompt Template หรือ AI Tool ที่ใช้ได้ผล"],
              ["15 นาที", "Problem Solving: ช่วยกันแก้ปัญหาที่สมาชิกเจอในการนำ AI ไปใช้"],
              ["10 นาที", "Resource Review: แชร์ข่าว AI หรือ Tool ใหม่ที่น่าสนใจ"],
              ["5 นาที", "Commitment: ทุกคนบอกสิ่งที่จะทำในเดือนถัดไป 1 ข้อ"],
            ].map(([time, desc], i) => (
              <div key={i} className="flex gap-3">
                <span className="text-purple-700 font-bold shrink-0 w-16">{time}</span>
                <span>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9.2.4 Continuous Learning Plan */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">9.2.4 Continuous Learning Plan</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="text-xs font-bold text-green-700 mb-2">Free Resources — ไม่มีค่าใช้จ่าย</p>
            <div className="space-y-1 text-xs text-text-secondary">
              {[
                "YouTube Channels: AI พื้นฐาน การใช้ ChatGPT, Gemini",
                "Coursera / edX: หลักสูตร AI จากมหาวิทยาลัยชั้นนำ",
                "Google AI Blog: บทความล่าสุดจาก Google AI Team",
                "Anthropic Claude Blog: How-to และข่าวสาร Claude",
                "The Verge / AI News / Reddit r/ChatGPT",
              ].map((r, i) => (
                <div key={i} className="flex gap-1.5">
                  <span className="text-green-600 shrink-0">🌐</span>
                  <span>{r}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="text-xs font-bold text-blue-700 mb-2">Paid Resources — มีค่าใช้จ่าย</p>
            <div className="space-y-1 text-xs text-text-secondary">
              {[
                "ChatGPT Plus ($20/เดือน): Model ล่าสุด + Plugins + Vision",
                "Udemy / Skillshare: อบรม AI เฉพาะทาง (100–500 บาท)",
                "โครงการพัฒนาครู: หน่วยงานสถาบันต่างๆ",
              ].map((r, i) => (
                <div key={i} className="flex gap-1.5">
                  <span className="text-blue-600 shrink-0">🌐</span>
                  <span>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Literacy - ตรวจสอบข่าว */}
        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <div className="px-4 py-2 bg-purple-50 border-b border-purple-100">
            <p className="text-xs font-semibold text-purple-700">AI Literacy Updates — ตรวจสอบความน่าเชื่อถือของข่าว AI</p>
          </div>
          <div className="p-4 space-y-3 text-xs">
            <div>
              <p className="font-bold text-green-700 mb-1">✓ ข่าวที่น่าเชื่อถือ</p>
              <div className="space-y-1 text-text-secondary">
                {[
                  "เป็นข่าวจากสื่อใหญ่ที่มีชื่อเสียง (BBC, Reuters, AP News)",
                  "มีการอ้างอิงจากวิจัยหรือข้อมูลที่ตรวจสอบได้",
                  "มีชื่อนักข่าวที่รับผิดชอบบทความ",
                  "สำนวนภาษาเป็นกลาง ไม่หวือหวาหรือสร้างความตื่นตระหนก",
                ].map((c, i) => <div key={i} className="flex gap-1.5"><span className="text-green-600 shrink-0">✓</span><span>{c}</span></div>)}
              </div>
            </div>
            <div>
              <p className="font-bold text-red-600 mb-1">✗ ข่าวที่ควรระวัง</p>
              <div className="space-y-1 text-text-secondary">
                {[
                  "ข่าวจาก Facebook ที่ไม่ระบุแหล่งที่มา",
                  "ข่าวที่มี Emoji เยอะ หรือข้อความที่หวือหวาเกินจริง",
                  "ข่าวที่แชร์ต่อกันเป็นทอดๆ โดยไม่ตรวจสอบ",
                ].map((c, i) => <div key={i} className="flex gap-1.5"><span className="text-red-500 shrink-0">✗</span><span>{c}</span></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prompt Templates */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">Prompt Templates สำหรับ PLC/CoP</h2>
        <div className="space-y-3">
          {[
            {
              label: "Prompt 1: สร้างโครงสร้าง CoP สำหรับกลุ่มครู",
              prompt: "ฉันต้องการตั้ง Community of Practice (CoP) สำหรับครู [จำนวน] คน ที่สอน [วิชา/ระดับ] ในโรงเรียน | เป้าหมาย: แลกเปลี่ยนการใช้ AI ในการสอน | ช่วยสร้าง: (1) โครงสร้าง Meeting รายเดือน 60 นาที (2) กฎ/แนวทาง CoP เบื้องต้น 5 ข้อ (3) หัวข้อ 3 เดือนแรก → ผลลัพธ์: CoP Starter Kit พร้อมใช้",
            },
            {
              label: "Prompt 2: แชร์ Prompt Template ในกลุ่มวิชา",
              prompt: "ฉันสอน [วิชา] และต้องการสร้าง Shared Prompt Library สำหรับกลุ่มวิชา | รวบรวม Prompt ที่ครูในกลุ่มใช้บ่อย ได้แก่: [อธิบาย Prompt 2–3 อัน] | ช่วยจัดระเบียบและทำ Template ที่ครูคนอื่นปรับใช้ได้ง่าย | รูปแบบ: ชื่อ Prompt / วัตถุประสงค์ / Template / ตัวอย่าง → ผลลัพธ์: Prompt Library Template สำหรับกลุ่มวิชา",
            },
            {
              label: "Prompt 3: ตรวจสอบข่าว AI ด้วย Fact-Check",
              prompt: "ฉันเห็นข่าวว่า [สรุปข่าว AI] | ช่วยตรวจสอบความน่าเชื่อถือของข่าวนี้: (1) แหล่งที่มาน่าเชื่อถือไหม? (2) ข้อมูลสอดคล้องกับการวิจัยล่าสุดไหม? (3) มีมุมมองอื่นที่ควรพิจารณาไหม? → ผลลัพธ์: Fact-Check Report สั้นๆ",
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
          <Wrench className="w-4.5 h-4.5 text-purple-700" />
          กิจกรรม Workshop (1 หัวข้อ · 30 นาที)
        </h2>
        <div className="rounded-xl border border-purple-200 bg-white overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-3 bg-purple-50 border-b border-purple-100">
            <span className="w-7 h-7 rounded-lg bg-purple-700 text-white text-xs font-bold flex items-center justify-center">W1</span>
            <div>
              <p className="text-sm font-bold text-text-primary">ออกแบบ CoP ของกลุ่มวิชา</p>
              <p className="text-[11px] text-purple-500">30 นาที · กลุ่ม 3–6 คน (กลุ่มวิชาเดียวกัน)</p>
            </div>
          </div>
          <div className="p-4">
            <p className="text-xs font-medium text-purple-700 mb-3">🎯 CoP Blueprint พร้อมออกแบบ + Platform + Roadmap 3 เดือน</p>
            <ul className="space-y-1.5">
              {[
                "รวมกลุ่มครูวิชาเดียวกัน 3–6 คน — ไม่จำเป็นต้องโรงเรียนเดียวกัน (5 นาที)",
                "เลือก Platform: LINE / Facebook / Padlet / Discord ที่ทุกคนสบายใจ (3 นาที)",
                "กำหนดบทบาท: Facilitator 1 คน Content Sharer ผลัดกัน Supporter ทุกคน (5 นาที)",
                "วาง Roadmap 3 เดือน: เดือน 1 พบกันครั้งแรก เดือน 2–3 พัฒนา Rhythm (10 นาที)",
                "นัดหมายพบครั้งแรกภายใน 2 สัปดาห์ หลังจบการอบรม (5 นาที)",
                "แชร์ CoP Blueprint กับกลุ่มใหญ่ 2 นาที + รับ Feedback (2 นาที)",
              ].map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                  <span className="w-4 h-4 rounded bg-purple-100 text-purple-700 text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-lg font-bold text-text-primary mb-3">
          <Lightbulb className="w-4.5 h-4.5 text-purple-700" />
          Key Takeaways
        </h2>
        <div className="space-y-2">
          {[
            "CoP ไม่ต้องสมบูรณ์แบบตั้งแต่ต้น — เริ่มจากกลุ่มเล็กๆ 3–4 คนที่ไว้ใจกัน",
            "Facilitator คือหัวใจของ CoP — ถ้าไม่มีใครนัด ก็จะไม่มีการพบ",
            "แชร์ Prompt Template ที่ใช้ได้ผลจริง — มีคุณค่ากว่าทฤษฎีทุกเวลา",
            "AI Literacy = ตรวจสอบแหล่งที่มาทุกครั้งก่อนแชร์ข่าว AI ในกลุ่ม",
            "Continuous Learning ไม่ต้องลงทุนมาก — YouTube + Coursera ฟรีเริ่มได้เลย",
          ].map((k, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-purple-50 border border-purple-100">
              <span className="w-5 h-5 rounded-full bg-purple-700 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-text-secondary">{k}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-card-border">
        <Link href="/manual/module-9/9-1" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">9.1 Action Plan 3 เดือน</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <Link href="/manual/module-9/9-3" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <div className="text-right">
            <p className="text-[10px] text-text-muted">ถัดไป</p>
            <p className="font-medium">9.3 สะท้อนคิด + Post-test</p>
          </div>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
