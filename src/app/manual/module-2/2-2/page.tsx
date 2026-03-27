import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  CheckCircle2,
  Lightbulb,
  Wrench,
  ImageIcon,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";

export default function Module22Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 lg:py-14 animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs text-text-muted mb-6 flex-wrap">
        <Link href="/" className="hover:text-text-secondary transition-colors">หน้าแรก</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/manual" className="hover:text-text-secondary transition-colors">คู่มือการอบรม</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/manual/module-2" className="hover:text-text-secondary transition-colors">โมดูล 2</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-text-secondary">2.2 สร้างสื่อประกอบการสอน</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-blue-200 flex items-center justify-center shrink-0">
            <ImageIcon className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-blue-600">โมดูล 2 · หัวข้อ 2.2</span>
              <span className="flex items-center gap-1 text-xs text-blue-500">
                <Clock className="w-3.5 h-3.5" /> 1.5 ชม. · 9 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">สร้างสื่อประกอบการสอนด้วย AI</h1>
            <p className="text-sm font-medium text-blue-600/80 mb-2">AI-Powered Teaching Media Creation</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              สร้าง Infographic, Slide, ใบงาน Differentiated, วิดีโอและเสียงประกอบการสอนด้วย AI ลดเวลา 50–80% ด้วยหลัก CARP และ Workflow ที่ใช้ได้จริงในห้องเรียน
            </p>
          </div>
        </div>
      </div>

      {/* Learning Outcomes */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-base font-bold text-text-primary mb-3">
          <CheckCircle2 className="w-4 h-4 text-blue-600" />
          ผลลัพธ์การเรียนรู้
        </h2>
        <ul className="space-y-2">
          {[
            "สร้าง Infographic สำหรับสอนได้ด้วย Canva AI ภายใน 10 นาที",
            "สร้าง Slide Presentation เต็มรูปแบบด้วย Gamma.app ภายใน 5 นาที",
            "ออกแบบใบงาน Differentiated 3 ระดับ (Tier A/B/C) ด้วย AI ภายใน 5 นาที",
            "สร้าง Video Lesson ด้วย AI Workflow ครบชุดภายใน 30 นาที",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[10px] font-bold text-blue-600 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* CARP Framework */}
      <section className="mb-10">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 mb-6">
          <p className="text-xs font-bold text-blue-700 mb-2">หลัก CARP: เกณฑ์ใน Prompt สร้างสื่อทุกชิ้น</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { l: "C", name: "Context", desc: "ระบุวิชา ระดับ บริบทไทย" },
              { l: "A", name: "Accuracy", desc: "ขอให้ตรวจสอบข้อมูลก่อนสร้าง" },
              { l: "R", name: "Relevance", desc: "เชื่อมโยงชีวิตนักเรียน" },
              { l: "P", name: "Pedagogy", desc: "ระบุแนวการสอน (5E / TPS)" },
            ].map((c) => (
              <div key={c.l} className="bg-white rounded-lg border border-blue-100 p-2.5 text-center">
                <span className="text-xl font-black text-blue-600">{c.l}</span>
                <p className="text-[11px] font-semibold text-text-primary">{c.name}</p>
                <p className="text-[10px] text-text-muted mt-0.5">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.2.1 Infographic */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">2.2.1 Infographic และภาพประกอบการสอนด้วย AI</h2>
        <p className="text-sm text-text-secondary mb-4">
          สมองประมวลภาพเร็วกว่าข้อความ 60,000 เท่า (MIT, 2014) Infographic ที่ดีช่วยให้นักเรียนเข้าใจและจำได้นานขึ้น
        </p>

        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-blue-50 border-b border-blue-100">
            <p className="text-xs font-semibold text-blue-700">AI Tools สำหรับสร้าง Infographic และภาพ</p>
          </div>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
                <th className="text-left px-4 py-1.5">Tool</th>
                <th className="text-left px-4 py-1.5">วิธีใช้</th>
                <th className="text-left px-4 py-1.5">เหมาะกับสื่อประเภท</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border">
              {[
                ["Canva AI Magic Design", "เลือก Infographic Template → ป้อน Topic → AI สร้างและเติมเนื้อหา", "Infographic, Poster, Timeline, Concept Map"],
                ["Adobe Firefly", "พิมพ์ Text Prompt → AI สร้างภาพ Illustration", "ภาพประกอบ, Icon, Background เฉพาะวิชา"],
                ["Microsoft Designer", "Prompt ภาษาไทยได้ → สร้าง Infographic + ปรับ Layout", "Infographic, Social Media, Worksheet Header"],
                ["ChatGPT / Gemini + Canva", "ให้ AI ร่าง Content → Copy ไปวางใน Canva → ปรับ Design", "ทุกประเภทสื่อ ควบคุม Content ได้มากที่สุด"],
              ].map(([tool, how, type], i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-2.5 font-semibold text-blue-700">{tool}</td>
                  <td className="px-4 py-2.5 text-text-secondary">{how}</td>
                  <td className="px-4 py-2.5 text-text-muted">{type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Prompt templates for infographic */}
        <div className="space-y-2">
          {[
            { label: "Infographic ทั่วไป", prompt: "สร้าง Infographic หัวข้อ [หัวข้อ] สำหรับนักเรียน ม.[X] ประกอบด้วย: Key Concepts 5 ข้อ / ตัวอย่าง 2-3 ข้อ / สถิติสำคัญ 2 ตัว | ภาษาไทย บริบทไทย" },
            { label: "Mind Map / Concept Map", prompt: "Mind Map หัวข้อ [หัวข้อ] ระดับ ม.[X] Key Concepts สำหรับ [วิชา]" },
            { label: "PISA-style Task", prompt: "Infographic สถานการณ์จริง [บริบท เช่น น้ำท่วม PM2.5] พร้อมคำถาม L3-L4 จำนวน 3 ข้อ" },
          ].map((t) => (
            <div key={t.label} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <p className="text-[11px] font-semibold text-text-primary mb-1">{t.label}</p>
              <p className="text-[11px] text-text-muted font-mono">{t.prompt}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-xl border border-amber-100 bg-amber-50 p-3">
          <p className="text-xs font-semibold text-amber-800 flex items-center gap-1.5 mb-1.5">
            <AlertTriangle className="w-3.5 h-3.5" /> ข้อควรระวัง AI-generated Images
          </p>
          <ul className="space-y-1 text-xs text-amber-700">
            <li className="flex gap-1.5"><ArrowRight className="w-3 h-3 shrink-0 mt-0.5" />ภาพ AI อาจมีข้อผิดพลาด เช่น นิ้วมือผิดรูป ข้อความในรูปสะกดผิด</li>
            <li className="flex gap-1.5"><ArrowRight className="w-3 h-3 shrink-0 mt-0.5" />ตรวจสอบความถูกต้องของข้อมูลตัวเลขทุกครั้ง — AI อาจสร้างสถิติผิด</li>
            <li className="flex gap-1.5"><ArrowRight className="w-3 h-3 shrink-0 mt-0.5" />ภาพที่สร้างจาก AI อาจมีประเด็น Copyright — ตรวจสอบ Terms of Use ก่อนใช้เชิงพาณิชย์</li>
          </ul>
        </div>
      </section>

      {/* 2.2.2 Slide */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">2.2.2 Slide Deck และ Presentation ด้วย AI</h2>
        <p className="text-sm text-text-secondary mb-4">
          AI สามารถสร้าง Slide Presentation ที่สมบูรณ์ได้จากข้อความสั้นๆ ประหยัดเวลาออกแบบ ครูมีเวลาโฟกัสที่เนื้อหาแทน
        </p>

        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-slate-50 border-b border-card-border">
            <p className="text-xs font-semibold text-text-primary">AI Tools สำหรับสร้าง Presentation</p>
          </div>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
                <th className="text-left px-4 py-1.5">Tool</th>
                <th className="text-left px-4 py-1.5">วิธีใช้</th>
                <th className="text-left px-4 py-1.5">หมายเหตุ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border">
              {[
                ["Gamma.app", "ป้อนหัวข้อ/outline → AI สร้าง Slide พร้อม Design", "ฟรี 400 credit / สร้าง Export ได้ PNG/PDF"],
                ["Canva Presentation", "Magic Design → Presentation → ป้อน Topic ปรับได้", "ฟรีสำหรับครู ส่งออกได้หลายรูปแบบ"],
                ["Beautiful.ai", "Smart layouts ปรับ Layout อัตโนมัติเมื่อเพิ่มเนื้อหา", "$12/เดือน มีทดลองฟรี"],
                ["Copilot in PowerPoint", "ปุ่ม Copilot → 'Create presentation about'", "ต้องมี Microsoft 365 Copilot"],
                ["Tome", "AI-first presentation tool ผสม Text + AI Image", "ดูทันสมัย เหมาะนำเสนอ"],
              ].map(([tool, how, note], i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-2.5 font-semibold text-blue-700">{tool}</td>
                  <td className="px-4 py-2.5 text-text-secondary">{how}</td>
                  <td className="px-4 py-2.5 text-text-muted">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Slide prompt template */}
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
          <p className="text-xs font-bold text-blue-700 mb-2">📋 Template: Slide Generation Prompt (Gamma.app)</p>
          <div className="bg-white rounded-lg border border-blue-100 p-3 text-xs font-mono text-text-secondary space-y-1">
            <p>สร้าง Presentation เรื่อง &apos;[หัวข้อ]&apos; สำหรับนักเรียน[ระดับ] จำนวน: [X] Slide | โทนสี: [สี] | ภาษา: ไทย</p>
            <p>Slide 1: Title + วัตถุประสงค์การเรียนรู้ 3 ข้อ</p>
            <p>Slide 2-3: เนื้อหาหลัก [Concept 1] พร้อมตัวอย่าง</p>
            <p>Slide 4-5: เนื้อหาหลัก [Concept 2] พร้อมตัวอย่าง</p>
            <p>Slide 6: กิจกรรม Think-Pair-Share พร้อมคำถาม</p>
            <p>Slide 7: สรุป Key Takeaways 3 ข้อ</p>
            <p>Slide 8: Exit Ticket — คำถามตรวจสอบความเข้าใจ 2 ข้อ</p>
            <p className="text-blue-500">→ แต่ละ Slide มีหัวข้อชัดเจน ไม่เกิน 5 Bullet Points</p>
          </div>
        </div>
      </section>

      {/* 2.2.3 Worksheet */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">2.2.3 ใบงานและ Assessment ด้วย AI</h2>
        <p className="text-sm text-text-secondary mb-4">
          ใบงานและข้อสอบเป็นสื่อที่ครูใช้เวลาสร้างมากที่สุด AI ช่วยลดเวลานี้ได้มาก โดยเฉพาะใบงาน Differentiated ที่ปรับระดับให้นักเรียนแต่ละกลุ่ม
        </p>

        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-slate-50 border-b border-card-border">
            <p className="text-xs font-semibold text-text-primary">AI Tools สำหรับสร้างใบงานและข้อสอบ</p>
          </div>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
                <th className="text-left px-4 py-1.5">Tool</th>
                <th className="text-left px-4 py-1.5">ใช้ทำอะไร</th>
                <th className="text-left px-4 py-1.5">ตัวอย่าง Prompt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border">
              {[
                ["ChatGPT / Gemini", "สร้างใบงาน ข้อสอบ Rubric ทุกรูปแบบ", "สร้างใบงาน 5 ข้อ เรื่อง [X] ระดับ PISA L2-L4 สำหรับ ม.3"],
                ["MagicSchool AI", "Template ใบงาน Text-Leveler Rubric Generator", "เลือก Text Leveler → วาง Content → ปรับระดับ"],
                ["Quizgecko", "Upload เนื้อหา → สร้างข้อสอบหลายรูปแบบอัตโนมัติ", "Multiple Choice + Short Answer + True/False จากเนื้อหา"],
                ["Diffit", "ย่อ/ขยายเนื้อหาให้เหมาะ Lexile Level", "Simplify for grade 4 / Challenge for grade 8"],
                ["Eduaide.ai", "100+ Template ใบงาน Exit Ticket Worksheet", "เลือก Exit Ticket → กรอก Topic → Generate"],
              ].map(([tool, use, prompt], i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-2.5 font-semibold text-blue-700">{tool}</td>
                  <td className="px-4 py-2.5 text-text-secondary">{use}</td>
                  <td className="px-4 py-2.5 text-text-muted font-mono text-[10px]">{prompt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PISA-style template */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 mb-3">
          <p className="text-[11px] font-semibold text-text-primary mb-1">📋 Template: PISA-style Worksheet</p>
          <p className="text-[11px] text-text-muted font-mono leading-relaxed">
            สร้างใบงาน PISA-style เรื่อง [หัวข้อ] สำหรับ ม.[X] | บริบท: [สถานการณ์จริง เช่น น้ำท่วม ขยะ สุขภาพ] | คำถาม 5 ข้อ แบ่งตาม PISA Level: L1 (1 ข้อ): หาข้อมูลตรงจากสถานการณ์ | L2 (1 ข้อ): นำข้อมูลไปใช้ในบริบทใหม่ | L3 (2 ข้อ): อธิบายเหตุผลและสาเหตุ | L4 (1 ข้อ): ประเมินและตัดสินใจ | รูปแบบ: ข้อสอบอัตนัย พร้อม Rubric 4 ระดับ → ภาษาไทย บริบทไทย
          </p>
        </div>

        {/* Differentiated Worksheet */}
        <div className="rounded-xl border border-blue-200 bg-white overflow-hidden">
          <div className="px-4 py-2 bg-blue-50 border-b border-blue-100">
            <p className="text-xs font-semibold text-blue-700">📋 Template: Differentiated Worksheet (3 ระดับ)</p>
          </div>
          <div className="divide-y divide-card-border">
            {[
              { tier: "Tier A", sub: "ต้องการความช่วยเหลือ", color: "bg-green-50 border-green-200 text-green-700", desc: "5 ข้อ | Close-ended | มี Word Bank | ภาษาง่าย | Scaffold ชัดเจน" },
              { tier: "Tier B", sub: "ระดับปกติ", color: "bg-blue-50 border-blue-200 text-blue-700", desc: "5 ข้อ | ผสม Open/Close | Bloom's L2-L3 | ภาษามาตรฐาน" },
              { tier: "Tier C", sub: "ระดับสูง", color: "bg-purple-50 border-purple-200 text-purple-700", desc: "5 ข้อ | Open-ended | Bloom's L4-L6 | Creative | ไม่มี Scaffold" },
            ].map((t) => (
              <div key={t.tier} className="flex items-start gap-3 px-4 py-2.5">
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border shrink-0 mt-0.5 ${t.color}`}>{t.tier}</span>
                <div>
                  <p className="text-xs font-semibold text-text-primary">{t.sub}</p>
                  <p className="text-xs text-text-muted">{t.desc}</p>
                </div>
              </div>
            ))}
            <div className="px-4 py-2 bg-amber-50 text-xs text-amber-700">
              ✅ เนื้อหาเดียวกัน แต่ต่างที่ความซับซ้อนของคำถาม — สร้างทั้ง 3 ระดับได้ภายใน 5 นาที
            </div>
          </div>
        </div>
      </section>

      {/* 2.2.4 Video & Audio */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">2.2.4 วิดีโอและเสียงประกอบการสอนด้วย AI</h2>
        <p className="text-sm text-text-secondary mb-4">
          สื่อเสียงและวิดีโอช่วยเพิ่มการเข้าถึงสำหรับนักเรียนที่เรียนรู้แบบ Auditory หรือ Visual — AI ทำให้สร้างง่ายขึ้นโดยไม่ต้องมีทักษะด้านวิดีโอ
        </p>

        <div className="grid grid-cols-1 gap-3 mb-4">
          <div className="rounded-xl border border-card-border bg-white overflow-hidden">
            <div className="px-4 py-2 bg-slate-50 border-b border-card-border">
              <p className="text-xs font-semibold text-text-primary">AI สำหรับสร้างวิดีโอการสอน</p>
            </div>
            <table className="w-full text-xs">
              <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
                <th className="text-left px-4 py-1.5">Tool</th>
                <th className="text-left px-4 py-1.5">วิธีการ</th>
                <th className="text-left px-4 py-1.5">เหมาะกับ</th>
              </tr></thead>
              <tbody className="divide-y divide-card-border">
                {[
                  ["Invideo AI", "พิมพ์ Script/Topic → AI สร้างวิดีโอพร้อม Voice 5-15 นาที", "วิดีโอสรุปบทเรียน 3-5 นาที"],
                  ["Synthesia", "เลือก AI Presenter → พิมพ์ Script → Export 10 นาที", "วิดีโอบรรยายมีคนพูด"],
                  ["HeyGen", "Avatar AI พูดตาม Script ที่กำหนด", "คลิปอธิบายแนวคิด"],
                  ["Loom + AI Summary", "บันทึกหน้าจอ + AI สรุปอัตโนมัติ 5 นาที", "อธิบาย Concept สั้นๆ ส่งนักเรียน"],
                ].map(([tool, how, fit], i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-4 py-2 font-semibold text-blue-700">{tool}</td>
                    <td className="px-4 py-2 text-text-secondary">{how}</td>
                    <td className="px-4 py-2 text-text-muted">{fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-xl border border-card-border bg-white overflow-hidden">
            <div className="px-4 py-2 bg-slate-50 border-b border-card-border">
              <p className="text-xs font-semibold text-text-primary">AI สำหรับสร้างเสียงประกอบการสอน</p>
            </div>
            <table className="w-full text-xs">
              <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
                <th className="text-left px-4 py-1.5">Tool</th>
                <th className="text-left px-4 py-1.5">วิธีการ</th>
                <th className="text-left px-4 py-1.5">ตัวอย่างการใช้</th>
              </tr></thead>
              <tbody className="divide-y divide-card-border">
                {[
                  ["ElevenLabs", "พิมพ์ Text → AI อ่านออกเสียงเป็นธรรมชาติ", "บันทึกเสียงอธิบาย Vocab สำหรับนักเรียนที่ฟังดีกว่าอ่าน"],
                  ["Microsoft Azure TTS", "Text-to-Speech ภาษาไทยฟรี", "เสียงอ่านโจทย์/คำถามสำหรับนักเรียน LD"],
                  ["NotebookLM Audio", "อัปโหลดเอกสาร → AI สร้าง Podcast อธิบาย", "สรุปเนื้อหาในรูปแบบ Podcast ให้นักเรียนฟัง"],
                  ["Whisper (OpenAI)", "ถอดเสียงอัตโนมัติ", "ถอดเสียงการสอนเป็น Text สำหรับทำ Transcript"],
                ].map(([tool, how, ex], i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-4 py-2 font-semibold text-blue-700">{tool}</td>
                    <td className="px-4 py-2 text-text-secondary">{how}</td>
                    <td className="px-4 py-2 text-text-muted">{ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Video Lesson Workflow */}
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
          <p className="text-xs font-bold text-blue-700 mb-2">✅ Workflow: สร้าง Video Lesson ด้วย AI ใน 30 นาที</p>
          <div className="space-y-1.5">
            {[
              ["5 นาที", "เขียน Script 3-5 นาที (ใช้ ChatGPT ช่วยร่าง)"],
              ["10 นาที", "สร้าง Slide ด้วย Gamma.app หรือ Canva"],
              ["5 นาที", "บันทึกเสียงหรือใช้ AI Voice ด้วย ElevenLabs"],
              ["10 นาที", "ประกอบ Slide + เสียงด้วย Loom หรือ Invideo AI"],
              ["ทันที", "ส่งให้นักเรียนผ่าน Google Classroom / LINE"],
            ].map(([time, step], i) => (
              <div key={i} className="flex items-center gap-3 text-xs">
                <span className="w-14 text-right font-bold text-blue-600 shrink-0">{time}</span>
                <ArrowRight className="w-3 h-3 text-blue-400 shrink-0" />
                <span className="text-text-secondary">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-lg font-bold text-text-primary mb-3">
          <Wrench className="w-4.5 h-4.5 text-blue-600" />
          กิจกรรม Workshop (3 หัวข้อ · รวม ~55 นาที)
        </h2>
        <div className="space-y-4">
          {[
            {
              num: "1", title: "Slide Sprint — สร้าง Presentation ใน 15 นาที",
              time: "15 นาที", format: "เดี่ยว → แสดง 1 Slide ให้กลุ่ม",
              goal: "ครูสร้าง Slide Presentation ด้วย AI ได้ครั้งแรก",
              steps: [
                "เข้า gamma.app → Sign up ฟรี (2 นาที)",
                "ป้อน Prompt: 'สร้าง Presentation เรื่อง [หัวข้อที่สอน] สำหรับนักเรียน ม.[X] จำนวน 8 Slide ภาษาไทย' (2 นาที)",
                "ปรับแต่ง Slide 1-2 ใบที่ต้องการเปลี่ยน (10 นาที)",
                "แสดง Slide ที่ได้ให้เพื่อนข้างๆ ดู (1 นาที) — บอก: ปกติใช้เวลาสร้าง Slide แบบนี้กี่ชั่วโมง?",
              ],
            },
            {
              num: "2", title: "Differentiated Worksheet Challenge",
              time: "30 นาที", format: "กลุ่ม 4 คน (วิชาเดียวกัน)",
              goal: "สร้างใบงาน 3 ระดับสำหรับนักเรียนหลากหลาย",
              steps: [
                "กลุ่มเลือกหัวข้อและระดับชั้น (5 นาที)",
                "ใช้ Prompt Template 'Differentiated Worksheet' → สร้างใบงาน Tier A, B, C ใน ChatGPT/Gemini (15 นาที)",
                "ตรวจสอบความถูกต้องของเนื้อหา แก้ไขถ้าผิด (5 นาที)",
                "นำเสนอ Tier C (ระดับสูง) ให้กลุ่มใหญ่ดู — Reflection: อะไรที่ AI ทำได้ดี? อะไรที่ยังต้องปรับ? (5 นาที)",
              ],
            },
            {
              num: "3", title: "Media Production Race — สื่อครบชุดใน 25 นาที",
              time: "25 นาที", format: "คู่ (แข่งกัน)",
              goal: "สร้างสื่อครบชุด 1 บทเรียนด้วย AI",
              steps: [
                "เป้าหมาย: สร้างสื่อต่อไปนี้สำหรับ 1 หัวข้อให้ครบ",
                "□ Slide 5 Slide (Gamma.app) — 8 นาที",
                "□ Infographic 1 ชิ้น (Canva AI) — 7 นาที",
                "□ ใบงาน 5 ข้อ (ChatGPT) — 5 นาที",
                "□ Exit Ticket 2 ข้อ (ChatGPT) — 3 นาที",
                "□ Teacher Note สรุป (ChatGPT) — 2 นาที",
                "คู่ไหนทำได้ครบและตรวจเนื้อหาว่าถูกต้องก่อน ชนะ! — บทเรียน: Workflow ที่ดีสำคัญกว่า Tool",
              ],
            },
          ].map((ws) => (
            <div key={ws.num} className="rounded-xl border border-blue-200 bg-white overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 bg-blue-50 border-b border-blue-100">
                <span className="w-7 h-7 rounded-lg bg-blue-600 text-white text-xs font-bold flex items-center justify-center">W{ws.num}</span>
                <div>
                  <p className="text-sm font-bold text-text-primary">{ws.title}</p>
                  <p className="text-[11px] text-blue-500">{ws.time} · {ws.format}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs font-medium text-blue-600 mb-2">🎯 {ws.goal}</p>
                <ul className="space-y-1.5">
                  {ws.steps.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                      <span className="w-4 h-4 rounded bg-blue-100 text-blue-600 text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
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
          <Lightbulb className="w-4.5 h-4.5 text-blue-600" />
          Key Takeaways
        </h2>
        <div className="space-y-2">
          {[
            "AI ลดเวลาสร้างสื่อได้ 50-80% — แต่ครูยังต้องตรวจสอบและปรับเนื้อหา",
            "ใช้หลัก CARP — Context, Accuracy, Relevance, Pedagogy ในทุก Prompt",
            "Infographic: Canva AI | Slide: Gamma.app | ใบงาน: ChatGPT | Video: Invideo AI",
            "Differentiated Worksheet — AI สร้าง Tier A/B/C ได้ภายใน 5 นาที",
            "ตรวจสอบเนื้อหาทุกชิ้น — AI อาจใส่ข้อมูลผิดในสื่อโดยไม่รู้ตัว",
          ].map((k, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-blue-50 border border-blue-100">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-text-secondary">{k}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-blue-300 bg-blue-600 p-4 text-white">
          <p className="text-xs font-bold text-blue-200 mb-1">🎯 ภารกิจต่อเนื่อง</p>
          <p className="text-sm">สร้างสื่อ <strong>1 ชิ้น</strong>สำหรับบทเรียนจริงในเทอมหน้า (เลือก Slide/Infographic/ใบงาน) บันทึก Prompt ที่ใช้จริง และ Reflection: สื่อที่ได้ตรงกับที่ต้องการหรือไม่? — นำมาแชร์ใน Workshop 2.3 เพื่อปรับปรุง Prompt ร่วมกัน</p>
        </div>
      </section>

      {/* References */}
      <section className="mb-10">
        <h2 className="text-sm font-bold text-text-primary mb-3">เอกสารอ้างอิง</h2>
        <div className="rounded-xl border border-card-border bg-white p-4 space-y-2">
          {[
            "Mayer, R. E. (2009). Multimedia Learning (2nd ed.). Cambridge University Press.",
            "Sweller, J. (2011). Cognitive Load Theory: Recent Theoretical Advances. Springer.",
            "MIT News. (2014). In the blink of an eye: MIT neuroscientists find the brain can identify images seen for as little as 13 milliseconds.",
            "Paivio, A. (1991). Images in mind: The evolution of a theory. Harvester Wheatsheaf.",
            "Zhang, D. et al. (2006). Instructional video in e-learning: Assessing the impact. Computers & Education, 46(2).",
          ].map((ref, i) => (
            <p key={i} className="text-xs text-text-muted leading-relaxed border-l-2 border-blue-100 pl-3">{ref}</p>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-card-border">
        <Link href="/manual/module-2/2-1" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">2.1 สืบค้นและสังเคราะห์ความรู้</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <Link href="/manual/module-2/2-3" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <div className="text-right">
            <p className="text-[10px] text-text-muted">ถัดไป</p>
            <p className="font-medium">2.3 Prompt Engineering</p>
          </div>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
