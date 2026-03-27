import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  CheckCircle2,
  Lightbulb,
  Wrench,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export default function Module31Page() {
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
        <span className="text-text-secondary">3.1 นิยาม RL และ PISA Framework</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-sky-200 flex items-center justify-center shrink-0">
            <BookOpen className="w-6 h-6 text-sky-600" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-sky-600">โมดูล 3 · หัวข้อ 3.1</span>
              <span className="flex items-center gap-1 text-xs text-sky-500">
                <Clock className="w-3.5 h-3.5" /> 1 ชม. · 9 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">นิยาม RL และกรอบ PISA Framework</h1>
            <p className="text-sm font-medium text-sky-600/80 mb-2">Defining Reading Literacy &amp; PISA Framework</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              เข้าใจว่า Reading Literacy (RL) คืออะไร — ต่างจากการอ่านออกเสียงอย่างไร วิเคราะห์ PISA 4 ระดับ และออกแบบคำถาม L3–L4 สำหรับวิชาที่สอน
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
            "อธิบายได้ว่า Reading Literacy คืออะไร และต่างจากการอ่านออกเสียงอย่างไร",
            "วิเคราะห์คำถามในบทเรียนได้ว่าอยู่ระดับ PISA L1 / L2 / L3 / L4",
            "ออกแบบคำถามระดับ L3–L4 สำหรับวิชาที่สอนได้อย่างน้อย 1 ข้อ",
            "สร้าง Glossary RL 15 คำพร้อมตัวอย่างการใช้ในห้องเรียนสำหรับวิชาที่สอนได้",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center text-[10px] font-bold text-sky-600 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 3.1.1 What is RL */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">3.1.1 Reading Literacy คืออะไร?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          <div className="rounded-xl border border-red-100 bg-red-50 p-4">
            <p className="text-xs font-bold text-red-600 mb-2">❌ RL ≠ การอ่านออกเสียง</p>
            <ul className="space-y-1 text-xs text-text-secondary">
              <li className="flex gap-1.5"><span className="text-red-400 shrink-0">✗</span>การออกเสียงคำถูกต้อง</li>
              <li className="flex gap-1.5"><span className="text-red-400 shrink-0">✗</span>การอ่านได้คล่อง ไม่สะดุด</li>
              <li className="flex gap-1.5"><span className="text-red-400 shrink-0">✗</span>การท่องจำเนื้อหา</li>
              <li className="flex gap-1.5"><span className="text-red-400 shrink-0">✗</span>เฉพาะวิชาภาษาไทยหรือภาษาอังกฤษ</li>
            </ul>
          </div>
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="text-xs font-bold text-sky-700 mb-2">✅ RL = สมรรถนะ 3 องค์ประกอบ</p>
            <ul className="space-y-1 text-xs text-text-secondary">
              <li className="flex gap-1.5"><span className="text-sky-500 shrink-0">✓</span>การสรุปสาระสำคัญจากข้อความ</li>
              <li className="flex gap-1.5"><span className="text-sky-500 shrink-0">✓</span>การตีความและเชื่อมโยงกับความรู้เดิม</li>
              <li className="flex gap-1.5"><span className="text-sky-500 shrink-0">✓</span>การสะท้อนคิด ประเมิน และวิพากษ์</li>
              <li className="flex gap-1.5"><span className="text-sky-500 shrink-0">✓</span>ทุกวิชาต้องฝึง RL อย่างเป็นระบบ</li>
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-sky-200 bg-white p-4 mb-4">
          <p className="text-xs font-bold text-sky-700 mb-3">3 องค์ประกอบหลักของ RL ทุกวิชา</p>
          <div className="grid grid-cols-3 gap-3">
            {[
              { num: "1", name: "การสรุป", en: "Summarization", desc: "ดึงข้อมูลสำคัญออกจากข้อความ ระบุ Main Idea และ Supporting Details" },
              { num: "2", name: "การตีความ", en: "Interpretation", desc: "เชื่อมโยงข้อมูลจากหลายส่วน อนุมาน และเข้าใจนัยที่ไม่ได้บอกตรงๆ" },
              { num: "3", name: "การสะท้อนคิด", en: "Reflection", desc: "ประเมิน วิพากษ์ เชื่อมโยงกับประสบการณ์และความรู้เดิม" },
            ].map((c) => (
              <div key={c.num} className="text-center p-3 rounded-lg border border-sky-100 bg-sky-50/50">
                <span className="w-7 h-7 rounded-full bg-sky-600 text-white text-xs font-bold flex items-center justify-center mx-auto mb-1.5">{c.num}</span>
                <p className="text-xs font-bold text-text-primary">{c.name}</p>
                <p className="text-[10px] text-sky-600 mb-1">{c.en}</p>
                <p className="text-[10px] text-text-muted leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-sky-100 bg-sky-50/50 p-3">
          <p className="text-xs font-semibold text-sky-700 mb-1">📌 นิยาม PISA (2022)</p>
          <p className="text-sm text-text-secondary italic leading-relaxed">
            &ldquo;Reading literacy is understanding, using, evaluating, reflecting on and engaging with texts in order to achieve one&rsquo;s goals, to develop one&rsquo;s knowledge and potential, and to participate in society.&rdquo;
          </p>
          <p className="text-[11px] text-text-muted mt-1">OECD. (2023). PISA 2022 Assessment and Analytical Framework.</p>
        </div>
      </section>

      {/* 3.1.2 PISA 4 Levels */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">3.1.2 PISA 4 ระดับ: กรอบวิเคราะห์ RL</h2>
        <p className="text-sm text-text-secondary mb-4">
          PISA แบ่ง Reading Literacy เป็น 4 ระดับ ทุกวิชาควรออกแบบกิจกรรมให้นักเรียนถึง L3–L4 อย่างสม่ำเสมอ
        </p>

        <div className="space-y-2 mb-5">
          {[
            {
              level: "L1",
              name: "ค้นหาข้อมูล (Locate)",
              color: "bg-green-50 border-green-200 text-green-700",
              badge: "bg-green-100 text-green-700",
              desc: "ค้นหาข้อมูลตรงจากข้อความ หาคำตอบที่ระบุชัดเจน",
              ex: "ตัวอย่าง: 'F_c มีค่าเท่าไร?' (ตอบตรงจากสมการที่ให้)",
              cues: ["ระบุ...", "บอก...", "หา...ในข้อความ", "อ้างอิงจากบทอ่าน"],
            },
            {
              level: "L2",
              name: "ตีความ (Integrate)",
              color: "bg-blue-50 border-blue-200 text-blue-700",
              badge: "bg-blue-100 text-blue-700",
              desc: "เชื่อมโยงข้อมูลหลายส่วนในข้อความ อนุมาน และสรุปใจความ",
              ex: "ตัวอย่าง: 'สรุปใจความสำคัญของบทความนี้ว่าอะไร?'",
              cues: ["สรุป...", "เชื่อมโยง...", "อธิบายความสัมพันธ์...", "ทำไม...ตามบทอ่าน"],
            },
            {
              level: "L3",
              name: "บูรณาการ (Reflect on content)",
              color: "bg-violet-50 border-violet-200 text-violet-700",
              badge: "bg-violet-100 text-violet-700",
              desc: "นำข้อมูลไปใช้ในสถานการณ์ใหม่ เชื่อมโยงกับความรู้นอกข้อความ",
              ex: "ตัวอย่าง: 'ถ้า v เพิ่มขึ้น 2 เท่า F_c จะเปลี่ยนอย่างไร? อธิบายด้วยหลักฟิสิกส์'",
              cues: ["ถ้า...จะเกิดอะไร?", "นำหลักการ...ไปใช้กับ...", "เปรียบเทียบกับ..."],
            },
            {
              level: "L4",
              name: "สะท้อนคิด (Reflect on form)",
              color: "bg-orange-50 border-orange-200 text-orange-700",
              badge: "bg-orange-100 text-orange-700",
              desc: "ประเมิน วิพากษ์ ตัดสินใจ และแสดงจุดยืนพร้อมเหตุผลจากหลักฐาน",
              ex: "ตัวอย่าง: 'คิดว่าการออกแบบโค้งมอเตอร์สปอร์ตนี้ปลอดภัยเพียงพอหรือไม่? อธิบายด้วยหลักฟิสิกส์'",
              cues: ["คิดว่า...เหมาะสมหรือไม่?", "ประเมิน...", "แสดงความเห็นพร้อมเหตุผล..."],
            },
          ].map((lv) => (
            <div key={lv.level} className={`rounded-xl border p-3.5 ${lv.color}`}>
              <div className="flex items-start gap-3">
                <span className={`text-xs font-bold px-2 py-1 rounded-md shrink-0 ${lv.badge}`}>{lv.level}</span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-text-primary">{lv.name}</p>
                  <p className="text-xs text-text-secondary mt-0.5 mb-1.5">{lv.desc}</p>
                  <p className="text-xs text-text-muted mb-2">{lv.ex}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {lv.cues.map((c) => (
                      <span key={c} className="text-[10px] bg-white/70 px-2 py-0.5 rounded-full border border-current/20 text-current font-mono">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick sort exercise */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-bold text-text-primary mb-2">🔍 ตัวอย่างการจำแนกระดับ PISA: บทอ่าน &ldquo;ถอดรหัสรถแหกโค้ง&rdquo; (ฟิสิกส์ ม.4)</p>
          <table className="w-full text-xs">
            <thead><tr className="border-b border-card-border text-text-muted font-medium">
              <th className="text-left py-1">คำถาม</th>
              <th className="text-left py-1 w-16">ระดับ</th>
            </tr></thead>
            <tbody className="divide-y divide-card-border">
              {[
                ["F_c ในบทอ่านมีค่าเท่าไร?", "L1"],
                ["เพราะอะไรรถจึงแหกโค้งตามบทอ่าน?", "L2"],
                ["ถ้า v เพิ่ม 2 เท่า F_c จะเปลี่ยนอย่างไร?", "L3"],
                ["การออกแบบโค้งนี้ปลอดภัยพอหรือไม่? อธิบาย", "L4"],
              ].map(([q, lv], i) => (
                <tr key={i} className="hover:bg-white">
                  <td className="py-1.5 text-text-secondary pr-4">{q}</td>
                  <td className="py-1.5 font-bold text-sky-700">{lv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3.1.3 RL in every subject */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">3.1.3 RL ไม่ใช่แค่ภาษาไทย — ทุกวิชาต้องฝึก</h2>
        <p className="text-sm text-text-secondary mb-4">
          งานวิจัย PISA 2022 พบว่าแผนการสอนส่วนใหญ่มี RL อยู่แล้ว แต่ส่วนใหญ่อยู่ที่ L1–L2 โดยไม่ได้จงใจออกแบบ L3–L4
        </p>
        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <div className="px-4 py-2 bg-sky-50 border-b border-sky-100">
            <p className="text-xs font-semibold text-sky-700">ตัวอย่าง RL ระดับ L3–L4 ในแต่ละวิชา</p>
          </div>
          <table className="w-full text-xs">
            <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
              <th className="text-left px-4 py-1.5">วิชา</th>
              <th className="text-left px-4 py-1.5">บริบทบทอ่าน</th>
              <th className="text-left px-4 py-1.5">คำถาม L3</th>
              <th className="text-left px-4 py-1.5">คำถาม L4</th>
            </tr></thead>
            <tbody className="divide-y divide-card-border">
              {[
                ["ฟิสิกส์", "แรงเหวี่ยงในโค้ง MotoGP", "ถ้าความเร็วเพิ่ม 2 เท่า แรงจะเป็นเท่าไร?", "การออกแบบโค้งนี้ปลอดภัยหรือไม่?"],
                ["ชีววิทยา", "ห่วงโซ่อาหารในป่าชายเลน", "ถ้าปลากะพงสูญพันธุ์จะเกิดอะไร?", "มนุษย์ควรแทรกแซงระบบนิเวศนี้หรือไม่?"],
                ["วิทยาการคำนวณ", "AI Policy ในโรงเรียน", "นโยบายนี้ส่งผลต่อนักเรียนอย่างไร?", "นโยบายนี้ยุติธรรมหรือไม่? เพราะเหตุใด?"],
                ["สังคมศึกษา", "ข่าว PM2.5 ในภาคเหนือ", "สาเหตุหลักของ PM2.5 คืออะไร?", "รัฐบาลควรออกนโยบายใดเร่งด่วน?"],
              ].map(([sub, ctx, l3, l4], i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-2.5 font-semibold text-sky-700">{sub}</td>
                  <td className="px-4 py-2.5 text-text-muted">{ctx}</td>
                  <td className="px-4 py-2.5 text-text-secondary">{l3}</td>
                  <td className="px-4 py-2.5 text-text-secondary">{l4}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Prompt Templates */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">3.1.4 Prompt Templates สำหรับ RL</h2>
        <div className="space-y-3">
          {[
            {
              label: "Prompt 1: สร้างคำถาม RL สำหรับวิชา",
              prompt: "สร้างคำถาม Reading Literacy สำหรับนักเรียน [ระดับ] วิชา [วิชา] | เนื้อหา: [หัวข้อ] ระยะเวลา: 50 นาที | ให้มีครบทักษะ: การค้นหาข้อมูล / การตีความ / และการสะท้อนคิด → ผลลัพธ์: แผนกิจกรรม TPS+RL พร้อม Scaffold สำหรับนักเรียนแต่ละระดับ",
            },
            {
              label: "Prompt 2: วางตำแหน่ง RL ในวิชา",
              prompt: "วางตำแหน่ง RL ในแผนการสอนวิชา [ชื่อวิชา] ชั้น [ระดับ] | เนื้อหา: [หัวข้อ] | ให้ครอบคลุมทักษะ: การค้นหาข้อมูล / การตีความ / การสะท้อนคิด → ผลลัพธ์: แผนการสอนพร้อม Scaffold สำหรับนักเรียนแต่ละระดับ",
            },
            {
              label: "Prompt 3: สร้าง Glossary PISA RL สำหรับครู",
              prompt: "สร้างคำศัพท์ PISA Reading Literacy 15 คำที่ครูควรรู้ | แต่ละคำให้มี: ความหมายภาษาไทย / ตัวอย่างการใช้ในห้องเรียน / เชื่อมโยงกับ PISA Level → ผลลัพธ์: Glossary พร้อมใช้สำหรับการพัฒนาวิชาชีพครู",
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
          กิจกรรม Workshop (3 หัวข้อ · รวม ~55 นาที)
        </h2>
        <div className="space-y-4">
          {[
            {
              num: "1", title: "PISA Level Sort — จำแนกระดับคำถาม",
              time: "15 นาที", format: "กลุ่ม 4 คน",
              goal: "ฝึกวิเคราะห์คำถามเดิมในวิชาตัวเองว่าอยู่ระดับ PISA ใด",
              steps: [
                "แต่ละคนนำคำถามที่เคยถามนักเรียนมาคนละ 4 ข้อ",
                "กลุ่มช่วยกันจัดเรียงแต่ละข้อลง Level L1 / L2 / L3 / L4",
                "นับสัดส่วน: กลุ่มมีคำถาม L3–L4 กี่เปอร์เซ็นต์?",
                "สะท้อน: ทำไมส่วนใหญ่อยู่ L1–L2? จะเพิ่ม L3–L4 ได้อย่างไร?",
              ],
            },
            {
              num: "2", title: "คำถาม L3–L4 Challenge",
              time: "20 นาที", format: "เดี่ยว → คู่",
              goal: "ฝึกเขียนคำถาม L3 และ L4 สำหรับวิชาตัวเอง",
              steps: [
                "เลือกบทเรียนที่จะสอนในสัปดาห์หน้า",
                "เขียนคำถาม L3 (บูรณาการ/นำไปใช้) จำนวน 2 ข้อ",
                "เขียนคำถาม L4 (สะท้อนคิด/ประเมิน) จำนวน 1 ข้อ",
                "แลกกับคู่ — ตรวจสอบว่าคำถามถึง L3–L4 จริงหรือไม่?",
                "ปรับปรุงร่วมกัน 1 รอบ",
              ],
            },
            {
              num: "3", title: "RL Blueprint — แผนที่ RL ของวิชาตัวเอง",
              time: "20 นาที", format: "เดี่ยว → แลกเปลี่ยนกลุ่ม 3 คน",
              goal: "ออกแบบ RL Blueprint สำหรับ 1 หน่วยการเรียนที่จะสอน",
              steps: [
                "เลือก 1 หน่วยการเรียน (Unit) ที่จะสอนในเทอมนี้",
                "ระบุ: บทอ่านหลักที่จะใช้ / คำถาม L1-L4 อย่างน้อยระดับละ 1 ข้อ / เป้าหมาย RL ที่ต้องการ",
                "ระบุนักเรียนกลุ่มไหนที่อาจต้องการ Scaffold เพิ่ม",
                "แลกเปลี่ยน Blueprint กับกลุ่ม — ให้ Feedback 1 ข้อต่อคน",
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
            "RL ≠ การอ่านออกเสียง — RL คือสมรรถนะสร้างความหมาย ตีความ และสะท้อนคิด ซึ่งลึกกว่ามาก",
            "PISA 4 ระดับ: L1 ค้นหา → L2 ตีความ → L3 บูรณาการ → L4 สะท้อนคิด — ทุกวิชาควรถึง L3–L4",
            "RL ทุกวิชา — ฟิสิกส์ ชีวะ สังคม คณิต ล้วนต้องฝึง RL อย่างเป็นระบบ ไม่ใช่แค่ภาษาไทย",
            "แผนส่วนใหญ่มี RL แต่อยู่ที่ L1–L2 — การเพิ่ม RL ไม่ต้องเปลี่ยน Model สอน แค่เพิ่มคำถาม L3–L4",
          ].map((k, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-sky-50 border border-sky-100">
              <span className="w-5 h-5 rounded-full bg-sky-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-text-secondary">{k}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-sky-300 bg-sky-600 p-4 text-white">
          <p className="text-xs font-bold text-sky-200 mb-1">🎯 ภารกิจต่อเนื่อง (Take-Home Mission 3.1)</p>
          <p className="text-sm">เลือก 1 บทเรียนในสัปดาห์หน้า — เพิ่มคำถาม RL ระดับ <strong>L3 หรือ L4</strong> อย่างน้อย 1 ข้อ บันทึกสังเกตการณ์: นักเรียนตอบสนองอย่างไร? มีความแตกต่างจากคำถาม L1 หรือไม่?</p>
        </div>
      </section>

      {/* References */}
      <section className="mb-10">
        <h2 className="text-sm font-bold text-text-primary mb-3">เอกสารอ้างอิง</h2>
        <div className="rounded-xl border border-card-border bg-white p-4 space-y-2">
          {[
            "OECD. (2023). PISA 2022 Assessment and Analytical Framework. OECD Publishing.",
            "Caulfield, M. (2019). SIFT (The Four Moves). Pressbooks.",
            "Pearson, P.D., & Gallagher, M.C. (1983). The instruction of reading comprehension. Contemporary Educational Psychology, 8(3), 317–344.",
            "สถาบันส่งเสริมการสอนวิทยาศาสตร์และเทคโนโลยี. (2566). กรอบสมรรถนะ Reading Literacy. สสวท.",
            "สำนักวิชาการและมาตรฐานการศึกษา. (2562). หลักสูตรแกนกลางการศึกษาขั้นพื้นฐาน พ.ศ. 2551 (ฉบับปรับปรุง 2560). สพฐ.",
          ].map((ref, i) => (
            <p key={i} className="text-xs text-text-muted leading-relaxed border-l-2 border-sky-100 pl-3">{ref}</p>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-card-border">
        <Link href="/manual/module-2/2-3" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">2.3 Prompt Engineering</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <Link href="/manual/module-3/3-2" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <div className="text-right">
            <p className="text-[10px] text-text-muted">ถัดไป</p>
            <p className="font-medium">3.2 RL ใน TPS และ 5E</p>
          </div>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
