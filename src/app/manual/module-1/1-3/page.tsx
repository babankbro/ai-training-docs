import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Wrench,
  ArrowRight,
  ShieldCheck,
  Scale,
  Users,
} from "lucide-react";

export default function Module13Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 lg:py-14 animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs text-text-muted mb-6 flex-wrap">
        <Link href="/" className="hover:text-text-secondary transition-colors">หน้าแรก</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/manual" className="hover:text-text-secondary transition-colors">คู่มือการอบรม</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/manual/module-1" className="hover:text-text-secondary transition-colors">โมดูล 1</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-text-secondary">1.3 จริยธรรม AI และ Policy</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-violet-200 bg-violet-50 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-violet-200 flex items-center justify-center shrink-0">
            <Scale className="w-6 h-6 text-violet-600" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-violet-600">โมดูล 1 · หัวข้อ 1.3</span>
              <span className="flex items-center gap-1 text-xs text-violet-500">
                <Clock className="w-3.5 h-3.5" /> 1 ชม.  ·  8 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">จริยธรรม AI และ Classroom AI Policy</h1>
            <p className="text-sm font-medium text-violet-600/80 mb-2">AI Ethics &amp; Classroom AI Policy</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              เข้าใจหลัก 6 ประการของ UNESCO ปัญหาจริยธรรม 5 ข้อในห้องเรียน ออกแบบ Classroom AI Policy ของตัวเอง และสอนนักเรียนให้ใช้ AI อย่างรับผิดชอบด้วยกรอบ 5C
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
            "อธิบายหลัก 6 ประการของ UNESCO AI Ethics และ EU AI Act Risk Levels ได้",
            "ระบุและจัดการปัญหาจริยธรรม AI ที่พบบ่อย 5 ข้อในห้องเรียนได้",
            "ออกแบบ Classroom AI Policy สำหรับวิชาของตัวเองที่ใช้ได้จริงได้",
            "สอนนักเรียนให้ใช้ AI อย่างมีจริยธรรมด้วยกรอบ 5C และกิจกรรม Unplugged ได้",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-violet-50 border border-violet-200 flex items-center justify-center text-[10px] font-bold text-violet-600 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 1.3.1 UNESCO */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-1">1.3.1 จริยธรรม AI คืออะไร? หลัก 6 ประการ UNESCO</h2>
        <p className="text-sm text-text-secondary mb-4">
          UNESCO ออกคำแนะนำด้านจริยธรรม AI ฉบับแรกของโลกในปี 2021 ได้รับความเห็นชอบจาก 193 ประเทศสมาชิก
        </p>

        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-5">
          <div className="px-4 py-2 bg-violet-50 border-b border-violet-100">
            <p className="text-xs font-semibold text-violet-700">หลัก 6 ประการ UNESCO AI Ethics Framework</p>
          </div>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
                <th className="text-left px-4 py-1.5 w-44">หลักการ</th>
                <th className="text-left px-4 py-1.5">ความหมายและการนำไปใช้ในห้องเรียน</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border">
              {[
                ["1. Human Oversight", "มนุษย์ต้องตรวจสอบ แก้ไข และหยุด AI ได้เสมอ | ครูต้องเป็นผู้ตัดสินใจขั้นสุดท้าย ไม่ใช่ AI"],
                ["2. Transparency", "อธิบายได้ว่า AI ตัดสินใจอะไร เพราะอะไร | ครูควรเปิดเผยกับนักเรียนเมื่อใช้ AI ในการสอนหรือประเมิน"],
                ["3. Fairness & Non-discrimination", "AI ต้องไม่เลือกปฏิบัติหรือสร้างความได้เปรียบ | ระวัง Bias ในเนื้อหาที่ AI สร้าง"],
                ["4. Privacy & Security", "ปกป้องข้อมูลส่วนบุคคล โดยเฉพาะข้อมูลผู้เยาว์ | ไม่ป้อนข้อมูลนักเรียนลงใน AI Tool สาธารณะ"],
                ["5. Beneficence & Non-maleficence", "AI ควรสร้างประโยชน์และหลีกเลี่ยงอันตราย | ตรวจสอบว่า AI Tools ที่ใช้ไม่ส่งผลลบต่อนักเรียน"],
                ["6. Sustainability", "พัฒนา AI ที่คำนึงถึงสิ่งแวดล้อมและสังคมระยะยาว | สอนให้นักเรียนใช้ AI อย่างรับผิดชอบ"],
              ].map(([p, d], i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-2.5 font-semibold text-violet-700">{p}</td>
                  <td className="px-4 py-2.5 text-text-secondary">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <div className="px-4 py-2 bg-slate-50 border-b border-card-border">
            <p className="text-xs font-semibold text-text-primary">EU AI Act (2024): จำแนกความเสี่ยง AI</p>
          </div>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
                <th className="text-left px-4 py-1.5">ระดับ</th>
                <th className="text-left px-4 py-1.5">ลักษณะ</th>
                <th className="text-left px-4 py-1.5">ตัวอย่าง</th>
                <th className="text-left px-4 py-1.5">ข้อกำหนด</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border">
              {[
                ["Unacceptable Risk", "ห้ามใช้โดยเด็ดขาด", "Social Scoring, จดจำใบหน้าในที่สาธารณะ", "ห้ามสิ้นเชิง"],
                ["High Risk", "ส่งผลต่อสิทธิและโอกาส", "ระบบคัดเลือกนักเรียน, AI ตรวจข้อสอบ", "ต้องผ่านการรับรองก่อนใช้"],
                ["Limited Risk", "อาจสร้างความเข้าใจผิด", "Chatbot, AI สร้างเนื้อหา", "ต้องแจ้งให้ผู้ใช้รู้ว่าคุยกับ AI"],
                ["Minimal Risk", "ความเสี่ยงต่ำมาก", "AI แนะนำเพลง, ตัวกรองสแปม", "ใช้ได้เสรี"],
              ].map(([level, desc, ex, req], i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className={`px-4 py-2 font-semibold ${i === 0 ? "text-red-600" : i === 1 ? "text-orange-600" : i === 2 ? "text-amber-600" : "text-green-600"}`}>{level}</td>
                  <td className="px-4 py-2 text-text-secondary">{desc}</td>
                  <td className="px-4 py-2 text-text-muted">{ex}</td>
                  <td className="px-4 py-2 text-text-secondary">{req}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-4 py-2.5 bg-amber-50 border-t border-amber-100">
            <p className="text-xs text-amber-800"><span className="font-semibold">⚠ ผลกระทบต่อห้องเรียนไทย:</span> AI Tools ส่วนใหญ่มาจากบริษัทที่ต้องปฏิบัติตาม EU AI Act — ระบบที่ใช้ AI ตัดสินใจเรื่องนักเรียน (คัดเลือก ประเมิน จัดชั้น) ถือเป็น High Risk ควรแจ้งนักเรียนเสมอ</p>
          </div>
        </div>
      </section>

      {/* 1.3.2 Problems */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-4">1.3.2 ปัญหาจริยธรรม AI 5 ข้อในห้องเรียน</h2>
        <div className="space-y-4">

          {/* Problem 1 */}
          <div className="rounded-xl border border-red-100 bg-white overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-red-50 border-b border-red-100">
              <span className="w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center shrink-0">1</span>
              <p className="text-sm font-semibold text-red-700">Bias &amp; Discrimination — อคติและการเลือกปฏิบัติ</p>
            </div>
            <div className="p-4 text-xs text-text-secondary space-y-2">
              <p>AI เรียนรู้จาก Training Data ที่มนุษย์สร้าง ซึ่งมักมี Bias แฝงอยู่ ผลลัพธ์ที่ได้จึงอาจสะท้อน Bias ของสังคม</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "AI สร้างรูปภาพ 'ครู' หรือ 'CEO' แล้วมักเป็นชายผิวขาว",
                  "AI แนะนำอาชีพที่เหมาะกับเพศตามแบบแผนเดิม",
                  "AI แปลภาษาอาจสะท้อน Gender Bias ในภาษาต้นทาง",
                  "ผลการค้นหา Google รูปภาพ 'Nurse' หรือ 'Scientist' แสดง Bias ชัดเจน",
                ].map((b, i) => (
                  <div key={i} className="flex gap-1.5 p-2 rounded-lg bg-red-50 border border-red-100">
                    <ArrowRight className="w-3 h-3 text-red-400 shrink-0 mt-0.5" />
                    <p>{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Problem 2 */}
          <div className="rounded-xl border border-orange-100 bg-white overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-orange-50 border-b border-orange-100">
              <span className="w-5 h-5 rounded-full bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center shrink-0">2</span>
              <p className="text-sm font-semibold text-orange-700">Privacy &amp; Data Protection — ความเป็นส่วนตัวและ PDPA/FERPA</p>
            </div>
            <div className="p-4 space-y-2 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <p className="font-semibold text-red-600 mb-1.5">❌ ห้ามทำ</p>
                  <ul className="space-y-1 text-text-secondary">
                    {["ป้อนคะแนนหรือข้อมูลสุขภาพนักเรียนลงใน AI สาธารณะ (ChatGPT, Gemini)", "ให้นักเรียนสมัคร AI Platform ที่ต้องใช้ข้อมูลส่วนตัวโดยไม่ขออนุญาตผู้ปกครอง", "อัปโหลดวิดีโอที่มีหน้านักเรียนให้ AI วิเคราะห์"].map((x, i) => (
                      <li key={i} className="flex gap-1.5"><ArrowRight className="w-3 h-3 text-red-400 shrink-0 mt-0.5" />{x}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-green-600 mb-1.5">✅ แนวปฏิบัติที่ถูกต้อง</p>
                  <ul className="space-y-1 text-text-secondary">
                    {["ใช้ข้อมูลสมมติหรือ Anonymize ก่อนป้อน AI (แทนชื่อจริงด้วย 'นักเรียน A')", "เลือก AI Tool ที่มีนโยบาย Education Privacy เช่น Google for Education, Microsoft EDU", "แจ้งนักเรียนและผู้ปกครองทุกครั้งเมื่อใช้ AI ในกิจกรรมที่เกี่ยวข้องกับข้อมูลส่วนตัว"].map((x, i) => (
                      <li key={i} className="flex gap-1.5"><ArrowRight className="w-3 h-3 text-green-400 shrink-0 mt-0.5" />{x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Problem 3 */}
          <div className="rounded-xl border border-amber-100 bg-white overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-amber-50 border-b border-amber-100">
              <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center shrink-0">3</span>
              <p className="text-sm font-semibold text-amber-700">Academic Integrity — ความซื่อสัตย์ทางวิชาการ</p>
            </div>
            <div className="p-4 space-y-3">
              <p className="text-xs text-text-secondary">จาก Survey พบว่านักศึกษา 43% ยอมรับว่าเคยใช้ ChatGPT ในงานที่ต้องส่ง (Intelligent.com, 2023)</p>
              <table className="w-full text-xs">
                <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
                  <th className="text-left px-3 py-1.5">ระดับ</th>
                  <th className="text-left px-3 py-1.5">ลักษณะ</th>
                  <th className="text-left px-3 py-1.5">ครูควรทำอย่างไร</th>
                </tr></thead>
                <tbody className="divide-y divide-card-border">
                  {[
                    ["✅ ยอมรับได้", "ใช้ AI เป็น Brainstorm, ค้นคว้า, ตรวจไวยากรณ์ แล้วเขียนเอง", "กำหนดไว้ใน Policy ว่าขั้นตอนไหนทำได้"],
                    ["⚠️ พื้นที่สีเทา", "ใช้ AI สร้าง Outline แล้วเติมเนื้อหาเอง", "ต้องระบุในงานว่าใช้ AI ส่วนไหน"],
                    ["❌ ยอมรับไม่ได้", "ให้ AI เขียนทั้งหมด แล้วส่งเป็นงานตัวเอง", "ถือว่า Academic Misconduct"],
                  ].map(([level, desc, action], i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="px-3 py-2 font-medium text-text-primary">{level}</td>
                      <td className="px-3 py-2 text-text-secondary">{desc}</td>
                      <td className="px-3 py-2 text-text-secondary">{action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>
                <p className="text-xs font-semibold text-text-primary mb-1.5">เครื่องมือตรวจจับ AI Content:</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {[["GPTZero", "gptzero.me", "ฟรีสำหรับครู"],
                    ["Turnitin AI Detection", "turnitin.com", "ฝังใน Turnitin เดิม"],
                    ["Copyleaks", "copyleaks.com", "รองรับภาษาไทย"]].map(([name, url, note]) => (
                    <div key={name} className="flex items-center gap-2 rounded-lg border border-amber-100 bg-amber-50 px-3 py-1.5">
                      <span className="font-medium text-amber-800">{name}</span>
                      <span className="text-amber-600">{url}</span>
                      <span className="text-text-muted">· {note}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-text-muted mt-1.5">⚠ หมายเหตุ: เครื่องมือเหล่านี้มี False Positive — ใช้เป็นข้อมูลเพิ่ม ไม่ใช่ตัดสินเด็ดขาด</p>
              </div>
            </div>
          </div>

          {/* Problem 4 */}
          <div className="rounded-xl border border-purple-100 bg-white overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-purple-50 border-b border-purple-100">
              <span className="w-5 h-5 rounded-full bg-purple-500 text-white text-[10px] font-bold flex items-center justify-center shrink-0">4</span>
              <p className="text-sm font-semibold text-purple-700">Deepfake &amp; Misinformation — ข้อมูลเท็จ</p>
            </div>
            <table className="w-full text-xs">
              <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
                <th className="text-left px-4 py-1.5">ความเสี่ยง</th>
                <th className="text-left px-4 py-1.5">วิธีสอนนักเรียนรับมือ</th>
              </tr></thead>
              <tbody className="divide-y divide-card-border">
                {[
                  ["Deepfake วิดีโอ/เสียงปลอม", "สอน Lateral Reading: เปิดแท็บใหม่ค้นหาแหล่งที่มาก่อนเชื่อ"],
                  ["AI Hallucination สร้างแหล่งอ้างอิงปลอมที่ดูน่าเชื่อ", "ฝึกนักเรียนตรวจสอบ DOI/URL ของงานวิจัยที่ AI อ้างอิง"],
                  ["AI สร้างภาพ 'ข่าวจริง' ที่ไม่เคยเกิดขึ้น", "ใช้ Reverse Image Search และ TinEye.com ตรวจสอบภาพ"],
                  ["Synthetic Text ที่ดูเหมือนเขียนโดยผู้เชี่ยวชาญ", "ตรวจสอบ Author's Credentials และ Publisher เสมอ"],
                ].map(([risk, action], i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-4 py-2 text-text-secondary">{risk}</td>
                    <td className="px-4 py-2 text-purple-700 font-medium">{action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Problem 5 */}
          <div className="rounded-xl border border-blue-100 bg-white overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-blue-50 border-b border-blue-100">
              <span className="w-5 h-5 rounded-full bg-blue-500 text-white text-[10px] font-bold flex items-center justify-center shrink-0">5</span>
              <p className="text-sm font-semibold text-blue-700">Over-reliance — การพึ่งพา AI มากเกินไป</p>
            </div>
            <div className="p-4">
              <p className="text-xs text-text-secondary mb-3">งานวิจัยจาก MIT (2023) พบว่านักศึกษาที่ใช้ AI เป็น 'ผู้คิดแทน' มีทักษะ Problem-solving ต่ำกว่ากลุ่มควบคุม</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
                  <p className="text-xs font-bold text-blue-700 mb-1">✅ Copilot (ถูกต้อง)</p>
                  <p className="text-xs text-text-secondary">AI ช่วย — ครู/นักเรียนยังเป็นคนตัดสินใจ ตรวจสอบ และรับผิดชอบผลลัพธ์</p>
                </div>
                <div className="rounded-lg border border-red-200 bg-red-50 p-3">
                  <p className="text-xs font-bold text-red-700 mb-1">❌ Autopilot (อันตราย)</p>
                  <p className="text-xs text-text-secondary">ปล่อยให้ AI ทำทุกอย่าง คนเพียงกด Accept — อันตรายในการศึกษา</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.3.3 Policy */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-2">1.3.3 Classroom AI Policy: หลักการและตัวอย่าง</h2>
        <p className="text-sm text-text-secondary mb-4">
          Classroom AI Policy คือข้อตกลงร่วมกันว่าจะใช้ AI อย่างไรในวิชา — ไม่ใช่การ 'แบน' AI แต่เป็นการกำหนดขอบเขตที่ชัดเจนและเป็นธรรม
        </p>

        {/* 5-level spectrum */}
        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-violet-50 border-b border-violet-100">
            <p className="text-xs font-semibold text-violet-700">สเปกตรัม 5 ระดับ: นโยบาย AI ในห้องเรียน</p>
          </div>
          <div className="divide-y divide-card-border">
            {[
              { level: "1 — AI Closed", color: "bg-red-100 text-red-700", desc: "ห้ามใช้ AI ทุกรูปแบบ", fit: "ข้อสอบปลายภาค, งานที่วัดทักษะเฉพาะ เช่น การเขียนด้วยลายมือ" },
              { level: "2 — AI Transparent", color: "bg-orange-100 text-orange-700", desc: "ใช้ได้ แต่ต้องเปิดเผย", fit: "รายงาน Essay ระดับสูง นักเรียนต้องระบุว่าใช้ AI ส่วนไหน + Reflection" },
              { level: "3 — AI Assisted", color: "bg-amber-100 text-amber-700", desc: "ใช้ AI ช่วยได้บางขั้นตอน", fit: "งานทั่วไป AI ช่วย Research/Brainstorm/ตรวจไวยากรณ์ ห้ามเขียนแทน" },
              { level: "4 — AI Collaborative", color: "bg-blue-100 text-blue-700", desc: "ร่วมมือกับ AI ได้เต็มที่", fit: "Project-based Learning, สร้างสื่อ, Design Challenge, Coding" },
              { level: "5 — AI First", color: "bg-green-100 text-green-700", desc: "AI เป็นจุดเริ่มต้น นักเรียนต่อยอด", fit: "Workshop สอนการใช้ AI, Prompt Engineering, AI Literacy Class" },
            ].map((s) => (
              <div key={s.level} className="flex items-start gap-3 px-4 py-2.5">
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md shrink-0 mt-0.5 ${s.color}`}>{s.level}</span>
                <div>
                  <p className="text-xs font-semibold text-text-primary">{s.desc}</p>
                  <p className="text-xs text-text-muted">{s.fit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Policy Template */}
        <div className="rounded-xl border border-violet-200 bg-violet-50 p-4 mb-4">
          <p className="text-xs font-bold text-violet-700 mb-3">📋 Template: Classroom AI Policy สำหรับครู</p>
          <div className="bg-white rounded-lg border border-violet-100 p-3 space-y-3 text-xs">
            <div className="pb-2 border-b border-card-border">
              <p className="font-bold text-text-primary">นโยบาย AI ในชั้นเรียน — วิชา ____________ ระดับชั้น ____________</p>
            </div>
            {[
              ["ส่วนที่ 1: วัตถุประสงค์", "วิชานี้ต้องการให้นักเรียนพัฒนาทักษะ ____________ ดังนั้น กิจกรรมบางส่วนต้องทำด้วยตนเอง และบางส่วนสามารถใช้ AI เป็นเครื่องมือช่วยได้"],
              ["ส่วนที่ 2: AI ที่อนุญาต", "□ ค้นคว้าและสรุปข้อมูลเบื้องต้น  □ Brainstorm ไอเดีย  □ ตรวจสอบไวยากรณ์  □ แปลภาษา  □ สร้างภาพประกอบ  □ เขียนโค้ดเบื้องต้น"],
              ["ส่วนที่ 3: AI ที่ไม่อนุญาต", "□ เขียนงานทั้งหมดแทนนักเรียน  □ ตอบข้อสอบหรือแบบทดสอบ  □ สร้างผลงานสร้างสรรค์โดยไม่มีส่วนร่วม"],
              ["ส่วนที่ 4: การอ้างอิง", "เมื่อใช้ AI ต้องระบุในงาน: 'ใช้ [ชื่อ AI Tool] เพื่อ [วัตถุประสงค์] ใน [ขั้นตอน]'"],
              ["ส่วนที่ 5: บทลงโทษ", "การใช้ AI เกินขอบเขตโดยไม่เปิดเผย ถือเป็น Academic Misconduct และจะดำเนินการตามระเบียบโรงเรียน"],
            ].map(([title, content]) => (
              <div key={title}>
                <p className="font-semibold text-violet-700">{title}</p>
                <p className="text-text-secondary mt-0.5">{content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Real examples */}
        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <div className="px-4 py-2 bg-slate-50 border-b border-card-border">
            <p className="text-xs font-semibold text-text-primary">ตัวอย่าง Classroom AI Policy จากสถาบันจริง</p>
          </div>
          <table className="w-full text-xs">
            <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
              <th className="text-left px-4 py-1.5">สถาบัน</th>
              <th className="text-left px-4 py-1.5">นโยบายหลัก</th>
              <th className="text-left px-4 py-1.5 hidden sm:table-cell">บทเรียนสำหรับครูไทย</th>
            </tr></thead>
            <tbody className="divide-y divide-card-border">
              {[
                ["MIT (2023)", "อนุญาตใช้ AI ใน Problem Sets แต่ต้องส่ง Reflection ว่าเรียนรู้อะไร", "Reflection บังคับ ทำให้นักเรียนยังเรียนแม้ใช้ AI"],
                ["Univ. of Auckland (2023)", "แบ่งงานเป็น 3 ระดับ: Prohibited / Permitted with Citation / Fully Permitted", "การแบ่งระดับให้ชัดเจนช่วยลดความสับสน"],
                ["Penn State (2023)", "สร้าง 'AI Use Statement' เฉพาะแต่ละ Assignment", "ครูต้องคิดล่วงหน้าว่างานแต่ละชิ้นวัดอะไร"],
                ["KMUTT (ไทย)", "ใช้ได้ แต่ต้องแนบ Prompt และ Output ที่ใช้จริง", "Transparency สร้างความรับผิดชอบ"],
              ].map(([school, policy, lesson], i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-2 font-medium text-text-primary">{school}</td>
                  <td className="px-4 py-2 text-text-secondary">{policy}</td>
                  <td className="px-4 py-2 text-violet-700 hidden sm:table-cell">{lesson}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 1.3.4 Teaching students */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-lg font-bold text-text-primary mb-2">
          <Users className="w-4.5 h-4.5 text-violet-600" />
          1.3.4 สอนนักเรียนให้ใช้ AI อย่างมีจริยธรรม
        </h2>
        <p className="text-sm text-text-secondary mb-4">ครูต้องเป็น 'ผู้นำทาง' ให้นักเรียนพัฒนา AI Literacy ที่ติดตัวไปตลอดชีวิต ไม่ใช่แค่ 'ตำรวจ' คอยจับการใช้ AI</p>

        {/* 5C Framework */}
        <div className="rounded-xl border border-violet-200 bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-violet-50 border-b border-violet-100">
            <p className="text-xs font-semibold text-violet-700">กรอบ 5C: ทักษะ AI Literacy ที่นักเรียนต้องมี</p>
          </div>
          <div className="divide-y divide-card-border text-xs">
            {[
              ["1. Critical Thinking", "คิดวิพากษ์", "ตั้งคำถามกับผลลัพธ์ AI เสมอ: 'จริงหรือ?' 'มีหลักฐานหรือ?' 'ใครได้/เสียประโยชน์?'"],
              ["2. Content Awareness", "รู้เท่าทัน Content", "แยกแยะได้ว่าเนื้อหาใดสร้างโดย AI ใดสร้างโดยมนุษย์ รู้จัก Deepfake"],
              ["3. Creative Collaboration", "สร้างสรรค์ร่วมกัน", "ใช้ AI เป็นพาร์ทเนอร์ในการสร้างงาน โดยยังคงเสียงและความคิดของตัวเอง"],
              ["4. Citizenship & Ethics", "พลเมืองดิจิทัล", "เข้าใจผลกระทบของ AI ต่อสังคม ใช้อย่างรับผิดชอบและเป็นธรรม"],
              ["5. Coding & Technical", "รู้พื้นฐาน AI", "เข้าใจว่า AI ทำงานอย่างไร แม้ไม่ต้องเขียนโค้ด แต่รู้ว่า AI ไม่ 'เข้าใจ' จริง"],
            ].map(([c, th, desc]) => (
              <div key={c} className="flex items-start gap-3 px-4 py-2.5">
                <span className="font-bold text-violet-700 w-40 shrink-0">{c}</span>
                <span className="text-violet-500 w-28 shrink-0">{th}</span>
                <span className="text-text-secondary">{desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Unplugged activities */}
        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-slate-50 border-b border-card-border">
            <p className="text-xs font-semibold text-text-primary">กิจกรรม Unplugged: สอนจริยธรรม AI โดยไม่ใช้คอมพิวเตอร์</p>
          </div>
          <table className="w-full text-xs">
            <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
              <th className="text-left px-4 py-1.5">กิจกรรม</th>
              <th className="text-left px-4 py-1.5">เวลา</th>
              <th className="text-left px-4 py-1.5">ทักษะ 5C</th>
            </tr></thead>
            <tbody className="divide-y divide-card-border">
              {[
                ["AI Bias Detective: วิเคราะห์ผลการค้นหา Google รูปภาพ 'CEO' 'Nurse' บันทึกสิ่งที่เห็น", "20 นาที", "Critical Thinking, Content Awareness"],
                ["Deepfake or Real?: ครูแสดงภาพและวิดีโอผสม แต่ละกลุ่มโหวตพร้อมให้เหตุผล", "15 นาที", "Content Awareness, Citizenship"],
                ["AI Policy Maker: กลุ่มออกแบบ AI Policy สำหรับห้องเรียนสมมติ แล้วเถียงกัน", "25 นาที", "Citizenship & Ethics, Critical Thinking"],
                ["Prompt to Truth: นักเรียนใช้ ChatGPT ค้นหาข้อมูล แล้วต้องตรวจสอบแหล่งข้อมูล", "20 นาที", "Critical Thinking, Content Awareness"],
              ].map(([act, time, skill], i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-2.5 text-text-secondary">{act}</td>
                  <td className="px-4 py-2.5 text-text-muted shrink-0">{time}</td>
                  <td className="px-4 py-2.5 text-violet-600">{skill}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 6 questions */}
        <div className="rounded-xl border border-violet-200 bg-violet-50 p-4">
          <p className="text-xs font-bold text-violet-700 mb-3">6 คำถามที่ครูให้นักเรียนถามตัวเองก่อนส่งงานที่มี AI</p>
          <div className="space-y-2">
            {[
              ["ฉันใช้ AI ทำอะไรบ้างในงานนี้?", "เปิดเผยและตระหนัก"],
              ["ฉันตรวจสอบผลลัพธ์ของ AI แล้วหรือยัง?", "Fact-check"],
              ["งานชิ้นนี้ยังมี 'เสียง' ของฉันอยู่หรือเปล่า?", "Authenticity"],
              ["ฉันบอกข้อมูลส่วนตัวของใครใน AI หรือเปล่า?", "Privacy"],
              ["ถ้าไม่มี AI ฉันจะทำงานนี้ได้ไหม? ทักษะไหนที่ยังขาด?", "Growth"],
              ["งานที่ AI ช่วยทำนี้ ยุติธรรมกับเพื่อนที่ไม่ใช้ AI หรือเปล่า?", "Fairness"],
            ].map(([q, tag], i) => (
              <div key={i} className="flex items-center gap-2 text-xs">
                <span className="w-5 h-5 rounded-full bg-violet-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0">{i + 1}</span>
                <span className="text-text-secondary flex-1">{q}</span>
                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-white border border-violet-200 text-violet-600 shrink-0">{tag}</span>
              </div>
            ))}
          </div>
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
              num: "1", title: "Ethical Dilemma Cards — ท้าทายความคิด",
              time: "25 นาที", format: "กลุ่ม 4 คน (เถียงกัน 2 ฝ่าย → สรุปร่วม)",
              goal: "ฝึกตัดสินใจด้านจริยธรรม AI ในสถานการณ์จริงจากห้องเรียน",
              steps: [
                "วิทยากรแจก Dilemma Card 1 ใบต่อกลุ่ม (สลับ Scenario ต่างกลุ่ม)",
                "ฝ่าย A เถียงว่า 'ยอมรับได้' / ฝ่าย B เถียงว่า 'ยอมรับไม่ได้' (5 นาที)",
                "กลุ่มสรุปร่วมกัน: 'เส้นแบ่ง' ควรอยู่ที่ไหน และ 'Policy' ควรเป็นอย่างไร (5 นาที)",
                "แบ่งปันกลุ่มใหญ่ + วิทยากรให้ Feedback (10 นาที)",
              ],
              scenarios: [
                "Card A: นักเรียน ม.6 ส่งรายงานที่ใช้ ChatGPT เขียน 80% แต่บอกว่า 'ตรวจสอบและแก้ไขแล้วทุกประโยค' — รับหรือปฏิเสธ?",
                "Card B: ครูใช้ AI สร้างข้อสอบ 50 ข้อ แล้วไม่ตรวจสอบ ปรากฏว่า 3 ข้อมีข้อมูลผิด ผลกระทบต่อนักเรียน 200 คน — ครูควรรับผิดชอบอย่างไร?",
                "Card C: โรงเรียนใช้ AI ระบบ CCTV ตรวจจับ 'นักเรียนที่ไม่ตั้งใจเรียน' แล้วส่งรายงานให้ผู้ปกครองอัตโนมัติ — เหมาะสมหรือไม่?",
                "Card D: ครูใช้ AI วิเคราะห์งานเขียนนักเรียนเพื่อ 'ทำนาย' ว่าใครจะสอบตก แล้วให้ความช่วยเหลือพิเศษกลุ่มนั้น — จริยธรรมหรือเปล่า?",
              ],
            },
            {
              num: "2", title: "ออกแบบ AI Policy สำหรับวิชาของตัวเอง",
              time: "20 นาที", format: "เดี่ยว (15 นาที) → คู่ Peer Review (5 นาที)",
              goal: "ครูได้ Classroom AI Policy ที่ใช้ได้จริงกลับไปทันที",
              steps: [
                "ใช้ Template Policy (5 ส่วน) กรอกให้ครบใน 15 นาที โดยคิดถึงงาน 3 ชิ้นใหญ่ในวิชาที่สอน",
                "แลกกับคู่ข้างๆ: Policy ของคุณชัดเจนพอไหม? มีช่องโหว่ไหม? (5 นาที)",
                "คำถามช่วยคิด: งานชิ้นไหนที่ 'ทักษะ' สำคัญกว่า 'ผลลัพธ์'? — นั่นคืองานที่ควรจำกัด AI",
              ],
            },
            {
              num: "3", title: "สอนนักเรียน: 10-Minute AI Ethics Lesson",
              time: "15 นาที", format: "คู่ → นำเสนอ 2 นาที",
              goal: "ครูออกแบบ Mini-Lesson สอนจริยธรรม AI ให้นักเรียนได้ทันที",
              steps: [
                "เลือก 1 ปัญหาจริยธรรมจากหัวข้อ 1.3.2 ที่คิดว่าเกี่ยวข้องกับนักเรียนมากที่สุด",
                "ขั้น 1 — Hook (2 นาที): ตั้งคำถามหรือแสดงสถานการณ์กระตุ้นความสงสัย",
                "ขั้น 2 — Explore (5 นาที): นักเรียนคิด/คุยกัน 'มีอะไรผิดปกติในสถานการณ์นี้?'",
                "ขั้น 3 — Apply (3 นาที): นักเรียนบอกว่า 'ตัวเองจะทำอย่างไรในสถานการณ์จริง'",
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
                <ul className="space-y-1.5 mb-3">
                  {ws.steps.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                      <span className="w-4 h-4 rounded bg-violet-100 text-violet-600 text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                      {s}
                    </li>
                  ))}
                </ul>
                {"scenarios" in ws && Array.isArray(ws.scenarios) && (
                  <div className="space-y-1.5">
                    <p className="text-xs font-semibold text-text-primary">📝 Scenario Cards:</p>
                    {(ws.scenarios as string[]).map((sc, i) => (
                      <div key={i} className="text-xs text-text-secondary p-2 rounded-lg bg-violet-50 border border-violet-100">{sc}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-lg font-bold text-text-primary mb-3">
          <Lightbulb className="w-4.5 h-4.5 text-violet-600" />
          Key Takeaways สำหรับครู
        </h2>
        <div className="space-y-2">
          {[
            "จริยธรรม AI ไม่ใช่แค่ 'กฎ' แต่คือทัศนคติ — ใช้ AI อย่างรับผิดชอบ โปร่งใส และเป็นธรรม",
            "UNESCO 6 หลักการ: Human Oversight · Transparency · Fairness · Privacy · Beneficence · Sustainability",
            "ปัญหาที่พบบ่อยในห้องเรียน: Bias / Privacy / Academic Integrity / Deepfake / Over-reliance",
            "Classroom AI Policy ต้องระบุชัด: ใช้ได้อะไร / ใช้ไม่ได้อะไร / ต้องอ้างอิงอย่างไร",
            "เป้าหมายสูงสุด: นักเรียนที่มี AI Literacy ไม่ใช่นักเรียนที่ถูกแบน AI",
          ].map((k, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-violet-50 border border-violet-100">
              <span className="w-5 h-5 rounded-full bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-text-secondary">{k}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-violet-300 bg-violet-600 p-4 text-white">
          <p className="text-xs font-bold text-violet-200 mb-1">🎯 ภารกิจต่อเนื่อง (Take-home Mission)</p>
          <p className="text-sm">เขียน <strong>Classroom AI Policy</strong> ฉบับร่างสำหรับวิชาที่สอน (ใช้ Template จากหัวข้อ 1.3.3)</p>
          <p className="text-xs text-violet-200 mt-2">นำมาแลกเปลี่ยนกับเพื่อนครูคนหนึ่ง รับ Feedback แล้วปรับปรุง — ตั้งเป้า: นำ Policy ไปแจกนักเรียนในสัปดาห์แรกของเทอมหน้า</p>
        </div>
      </section>

      {/* References */}
      <section className="mb-10">
        <h2 className="text-sm font-bold text-text-primary mb-3">เอกสารอ้างอิง</h2>
        <div className="rounded-xl border border-card-border bg-white p-4 space-y-2">
          {[
            "UNESCO. (2021). Recommendation on the Ethics of Artificial Intelligence. UNESCO Publishing. https://unesdoc.unesco.org/ark:/48223/pf0000381137",
            "European Parliament. (2024). EU AI Act. Official Journal of the European Union. https://eur-lex.europa.eu/",
            "Jobin, A., Ienca, M., & Vayena, E. (2019). The global landscape of AI ethics guidelines. Nature Machine Intelligence, 1, 389–399.",
            "Ng, D. T. K., et al. (2021). Conceptualizing AI literacy: An exploratory review. Computers and Education: AI, 2, 100041.",
            "Doshi, A. R., & Hauser, O. P. (2023). Generative AI enhances individual creativity but reduces collective diversity. Science Advances, 9(28).",
            "UNESCO. (2023). ChatGPT and Artificial Intelligence in Higher Education: Quick Start Guide. UNESCO IESALC.",
          ].map((ref, i) => (
            <p key={i} className="text-xs text-text-muted leading-relaxed border-l-2 border-violet-100 pl-3">{ref}</p>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-card-border">
        <Link href="/manual/module-1/1-2" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">1.2 ประเภทและเครื่องมือ AI</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <div className="text-right">
            <p className="text-[10px]">ถัดไป</p>
            <p className="font-medium text-text-secondary">โมดูล 2</p>
          </div>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
