import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  Lightbulb,
  Wrench,
  CheckCircle2,
  Brain,
} from "lucide-react";

export default function Module11Page() {
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
        <span className="text-text-secondary">1.1 AI หลักการทำงาน</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-indigo-200 flex items-center justify-center shrink-0">
            <Brain className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-indigo-600">โมดูล 1 · หัวข้อ 1.1</span>
              <span className="flex items-center gap-1 text-xs text-indigo-500">
                <Clock className="w-3.5 h-3.5" /> 1 ชม. · 7 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">AI หลักการทำงาน: จาก Machine Learning ถึง Generative AI</h1>
            <p className="text-sm font-medium text-indigo-600/80 mb-2">AI Fundamentals, LLM Mechanism & Prompt Engineering for Teachers</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              ทำความเข้าใจ 4 ประเภท AI กลไก "Next Token Prediction" ของ LLM ความแตกต่าง Rule-based vs Generative AI และ Prompt Templates พร้อมใช้ที่ครูนำไปใช้ได้ทันที
            </p>
          </div>
        </div>
      </div>

      {/* Learning Outcomes */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-base font-bold text-text-primary mb-3">
          <CheckCircle2 className="w-4.5 h-4.5 text-indigo-600" />
          ผลลัพธ์การเรียนรู้
        </h2>
        <ul className="space-y-2">
          {[
            "อธิบาย 4 ประเภท AI (Machine Learning / Deep Learning / Multimodal / Generative AI) พร้อมตัวอย่างเครื่องมือได้",
            "อธิบายกลไก Next Token Prediction และ Hallucination ของ LLM ได้",
            "แยกความแตกต่างระหว่าง Rule-based AI กับ Generative AI และเลือกใช้ให้ถูกงานได้",
            "เขียน Prompt Template สำหรับงานครูได้ไม่น้อยกว่า 2 แบบ",
            "ทดสอบ Hallucination และ Fact-check ผลลัพธ์จาก AI ได้",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center text-[10px] font-bold text-indigo-600 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 1.1.1 AI 4 ประเภทหลัก */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">1.1.1 AI 4 ประเภทหลักที่ครูต้องรู้จัก</h2>
        <div className="space-y-2">
          {[
            { num: "1", title: "Machine Learning (ML)", color: "border-indigo-200 bg-indigo-50", tc: "text-indigo-700", desc: "AI ที่เรียนรู้จากข้อมูลโดยไม่ต้องโปรแกรมกฎทีละข้อ เปรียบเหมือนนักเรียนที่ฝึกฝนจากตัวอย่างมากๆ จนทำเองได้", examples: "Spam Filter ใน Gmail, ระบบแนะนำวิดีโอ YouTube" },
            { num: "2", title: "Deep Learning", color: "border-blue-200 bg-blue-50", tc: "text-blue-700", desc: "ML ชั้นสูงที่ใช้ Neural Network เลียนแบบสมองมนุษย์ — แต่ละ 'ชั้น' วิเคราะห์ข้อมูลซับซ้อนขึ้นเรื่อยๆ", examples: "จดจำใบหน้า Face ID, แปลภาษาแบบ Real-time" },
            { num: "3", title: "Multimodal AI / NLP", color: "border-violet-200 bg-violet-50", tc: "text-violet-700", desc: "AI ที่เข้าใจภาษาและสื่อหลายประเภทพร้อมกัน (ข้อความ + รูปภาพ + เสียง) สร้างผลลัพธ์ที่หลากหลาย", examples: "GPT-4o, Gemini Ultra รับรูป+ข้อความพร้อมกัน" },
            { num: "4", title: "Generative AI (GenAI)", color: "border-indigo-300 bg-indigo-100", tc: "text-indigo-800", desc: "GenAI ไม่ได้แค่ 'จำแนก' แต่สามารถ 'สร้าง' สิ่งใหม่ที่ไม่เคยมีมาก่อนได้ ไม่ว่าจะเป็นข้อความ ภาพ เพลง หรือวิดีโอ", tools: { text: ["ChatGPT", "Gemini", "Claude", "Perplexity"], image: ["Midjourney", "Canva Magic Media", "DALL-E 3"], audio: ["Suno (เพลง)", "ElevenLabs (เสียงพากย์)"] } },
          ].map((ai) => (
            <div key={ai.num} className={`rounded-xl border p-4 ${ai.color}`}>
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`w-5 h-5 rounded-full text-white text-[10px] font-bold flex items-center justify-center shrink-0 bg-current ${ai.tc}`} style={{backgroundColor: 'currentColor'}}></span>
                <span className={`text-sm font-bold ${ai.tc}`}>{ai.num}. {ai.title}</span>
              </div>
              <p className="text-xs text-text-secondary mb-1.5">{ai.desc}</p>
              {ai.examples && <p className="text-[11px] text-text-muted">ตัวอย่าง: {ai.examples}</p>}
              {ai.tools && (
                <div className="mt-2 space-y-1 text-[11px]">
                  <p className="text-text-muted"><span className="font-medium text-text-primary">Text:</span> {ai.tools.text.join(" · ")}</p>
                  <p className="text-text-muted"><span className="font-medium text-text-primary">Image:</span> {ai.tools.image.join(" · ")}</p>
                  <p className="text-text-muted"><span className="font-medium text-text-primary">Audio:</span> {ai.tools.audio.join(" · ")}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 1.1.2 LLM Mechanism */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-1">1.1.2 AI คิดอย่างไร? กลไกเบื้องหลัง LLMs</h2>
        <p className="text-sm text-text-secondary mb-4">เครื่องมืออย่าง ChatGPT หรือ Gemini ถูกเรียกว่า <strong>Large Language Models (LLMs)</strong> — ทำไมมันถึงตอบคำถามได้เหมือนคน?</p>

        <div className="rounded-xl border border-indigo-200 bg-white p-4 mb-4">
          <p className="text-xs font-bold text-indigo-700 mb-3">กลไก "Next Token Prediction" (การทำนายคำถัดไป)</p>
          <div className="space-y-2 text-xs text-text-secondary">
            {[
              "เมื่อเราพิมพ์คำสั่ง (Prompt) AI จะหั่นคำของเราเป็นชิ้นเล็กๆ เรียกว่า Token",
              "มันนำ Token เหล่านี้ไปคำนวณทางสถิติความน่าจะเป็น ว่าคำอะไรควรปรากฏเป็นคำถัดไป",
              "ตัวอย่าง: เมื่อพิมพ์ \"ช้างช้างช้าง น้องเคยเห็นช้างหรือ...\" AI คำนวณว่าคำว่า \"เปล่า\" มีโอกาสสูงสุด",
              "ทำแบบนี้ซ้ำๆ ทีละคำ ด้วยความเร็วแสง จนกลายเป็นประโยค ย่อหน้า และบทความที่สละสลวย",
            ].map((s, i) => (
              <div key={i} className="flex gap-2.5">
                <span className="w-4 h-4 rounded-full bg-indigo-100 text-indigo-700 text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 p-3 rounded-lg bg-amber-50 border border-amber-200">
            <p className="text-xs font-bold text-amber-700 mb-1">⚠ Hallucination (ภาพหลอน) — สิ่งสำคัญที่ครูต้องรู้</p>
            <p className="text-xs text-text-secondary">เพราะ AI ทำงานด้วยหลักการ <strong>"เดาคำที่น่าจะใช่ที่สุด"</strong> ไม่ใช่ "ค้นหาความจริง" หาก AI ไม่มีข้อมูล มันจะ "แต่งเรื่อง" ที่ฟังดูเป็นตรรกะและสละสลวย — แม้จะเท็จทั้งหมด <br/><strong>ข้อควรระวัง:</strong> อย่าเชื่อข้อมูลประวัติศาสตร์ ตัวเลขสถิติ หรือการอ้างอิงจาก AI 100% ต้องตรวจสอบเสมอ</p>
          </div>
        </div>
      </section>

      {/* 1.1.3 Rule-based vs Generative */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">1.1.3 Rule-based AI vs Generative AI</h2>
        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-3">
          <div className="px-4 py-2 bg-indigo-50 border-b border-indigo-100">
            <p className="text-xs font-semibold text-indigo-700">เปรียบเทียบ AI สองยุค — เลือกใช้ให้ถูกงาน</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
                <th className="text-left px-4 py-2">มิติ</th>
                <th className="text-left px-4 py-2">Rule-based AI</th>
                <th className="text-left px-4 py-2">Generative AI</th>
              </tr></thead>
              <tbody className="divide-y divide-card-border">
                {[
                  ["หลักการคิด", "ทำตามคำสั่ง IF-THEN ที่คนตั้งไว้เป๊ะๆ", "เรียนรู้บริบทและสร้างสิ่งใหม่ที่ไม่มีในโปรแกรม"],
                  ["ผลลัพธ์", "แม่นยำ 100% คาดเดาได้ (ถ้าใส่สูตรถูก)", "หลากหลาย ยืดหยุ่น คาดเดาไม่ได้ 100%"],
                  ["จุดเด่น", "งานคำนวณที่ต้องการความเป๊ะ งานซ้ำเป็น Pattern", "สร้างไอเดียใหม่ สรุปความ ปรับภาษา"],
                  ["จุดอ่อน", "ขาดความยืดหยุ่น เจอกรณีแปลกใหม่ระบบล้มเหลว", "อาจเกิด Hallucination ให้ข้อมูลเท็จที่ดูน่าเชื่อ"],
                  ["ตัวอย่างในห้องเรียน", "ตรวจข้อสอบ OMR, เช็คชื่ออัตโนมัติ, ตัดเกรด", "เขียนแผนสอน, สร้างคำถาม, ออกแบบกิจกรรม"],
                ].map(([dim, rule, gen], i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-4 py-2 font-medium text-text-primary">{dim}</td>
                    <td className="px-4 py-2 text-text-secondary">{rule}</td>
                    <td className="px-4 py-2 text-text-secondary">{gen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 1.1.4 Prompt Templates */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">1.1.4 Prompt Templates พร้อมใช้สำหรับครู</h2>
        <p className="text-sm text-text-secondary mb-4">กุญแจสำคัญของ Prompt ที่ดี: ระบุ <strong>บทบาท (Role)</strong> + <strong>บริบท (Context)</strong> + <strong>รูปแบบ (Format)</strong> ให้ชัดเจน</p>
        <div className="space-y-3">
          {[
            {
              num: "1", label: "สร้างแผนการสอน Active Learning",
              template: "คุณเป็นครูเชี่ยวชาญระดับชั้น [ระดับชั้น] ที่ได้รับรางวัลครูดีเด่นด้าน Active Learning | ช่วยออกแบบแผนการสอน 1 คาบ ([เวลา] นาที) สำหรับวิชา [วิชา] เรื่อง [หัวข้อ] | โครงสร้าง: 1) จุดประสงค์ K-P-A 2) กิจกรรม Hook 3) กิจกรรม Active Learning 4) สื่อ/อุปกรณ์ 5) การประเมินผล Formative | ขอภาษาที่ใช้พิมพ์ในแผนส่งวิชาการได้เลย",
              note: "ประหยัดเวลาจาก 2 ชั่วโมงเหลือ 5 นาที",
            },
            {
              num: "2", label: "สร้างบทอ่าน 3 ระดับ (Differentiated Instruction)",
              template: "นำข้อมูลความรู้เรื่อง [เนื้อหา/บทความ] มาเขียนเป็น 3 เวอร์ชัน: | เวอร์ชัน 1 (อ่านไม่ค่อยคล่อง): ≤50 คำ คำศัพท์พื้นฐาน ประโยคสั้น | เวอร์ชัน 2 (ปานกลาง): 100-120 คำ มีคำเชื่อม มีรายละเอียดเหตุผล | เวอร์ชัน 3 (เก่ง): 150-200 คำ คำศัพท์วิชาการ ภาษาพรรณนา",
              note: "แก้ปัญหาห้องเรียนที่มีนักเรียนความสามารถต่างกัน",
            },
            {
              num: "3", label: "เขียนอีเมลสื่อสารกับผู้ปกครอง",
              template: "คุณเป็นครูประจำชั้นที่มีความเห็นอกเห็นใจและเป็นมืออาชีพ | ช่วยเขียนอีเมลถึงผู้ปกครองของ [ชื่อนักเรียน] เรื่อง [สถานการณ์] | ใจความ: [อธิบายสิ่งที่ต้องการสื่อสาร] | ให้อีเมลมีโทนอบอุ่น เป็นห่วง และเชิญชวนให้ร่วมมือ",
              note: "ลดเวลาเขียนอีเมลยากๆ จาก 30 นาทีเหลือ 3 นาที",
            },
            {
              num: "4", label: "สร้างกิจกรรม Workshop สำหรับอบรมครู",
              template: "ช่วยออกแบบ Workshop [หัวข้อ] สำหรับครู [จำนวน] คน ใช้เวลา [นาที] นาที | เป้าหมาย: [ผลลัพธ์ที่ต้องการ] | รูปแบบ: เดี่ยว/คู่/กลุ่ม | ให้ระบุ: วัตถุประสงค์, ขั้นตอนชัดเจน, เอกสารที่ต้องเตรียม, วิธีประเมิน",
              note: "ใช้วางแผนการอบรมครูในโรงเรียน",
            },
          ].map((t) => (
            <div key={t.num} className="space-y-1.5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-5 rounded bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">P{t.num}</span>
                <p className="text-xs font-semibold text-text-primary">{t.label}</p>
              </div>
              <p className="prompt-block">{t.template}</p>
              <p className="text-[10px] text-indigo-600 font-medium">💡 {t.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workshop */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-lg font-bold text-text-primary mb-3">
          <Wrench className="w-4.5 h-4.5 text-indigo-600" />
          กิจกรรม Workshop: AI Prompt Playground (60 นาที)
        </h2>
        <p className="text-sm text-text-secondary mb-4">เปิดคอมพิวเตอร์ล็อกอิน Google Gemini หรือ ChatGPT พร้อมก่อนเริ่ม</p>
        <div className="space-y-3">
          {[
            {
              phase: "Phase 1", title: "ปลดล็อกจินตนาการ", time: "15 นาที", color: "border-blue-200 bg-blue-50", tc: "text-blue-700",
              steps: [
                "โจทย์: ให้ครูใช้ AI สร้าง 'นิทานก่อนนอน' 1 เรื่อง",
                "เงื่อนไข: ตัวละครหลัก = 'คุณครูที่กลายร่างเป็นซุปเปอร์ฮีโร่' อาวุธ = 'ชอล์กวิเศษ' สอดแทรกข้อคิดเรื่อง 'การประหยัดน้ำ'",
                "นำเสนอ: สุ่มเรียก 2-3 ท่าน อ่านนิทานสั้นๆ ให้เพื่อนฟัง",
                "เป้าหมาย: ให้ครูเห็นถึงความคิดสร้างสรรค์อันไร้ขีดจำกัดของ AI",
              ],
            },
            {
              phase: "Phase 2", title: "เข้าสู่โหมดวิชาการ", time: "30 นาที", color: "border-indigo-200 bg-indigo-50", tc: "text-indigo-700",
              steps: [
                "นำ Prompt Template 1 (แผนการสอน) ไปปรับใช้งานจริง",
                "เลือกวิชาและเรื่องที่กำลังจะสอนในสัปดาห์หน้า ใส่ข้อมูลลงใน Template",
                "คำสั่งแก้ครั้งที่ 1: 'ขอเปลี่ยนกิจกรรมนำเข้าสู่บทเรียน ให้เป็นเกมที่เด็กต้องลุกจากเก้าอี้'",
                "คำสั่งแก้ครั้งที่ 2: 'ช่วยสรุปอุปกรณ์ที่ต้องเตรียมทั้งหมดออกมาเป็น Checklist'",
                "สะท้อนคิด: ผลลัพธ์สุดท้ายประหยัดเวลาไปกี่เปอร์เซ็นต์? AI เสนออะไรได้ดีกว่าที่คิดไว้?",
              ],
            },
            {
              phase: "Phase 3", title: "ประเมินความเสี่ยง (Hallucination Test)", time: "15 นาที", color: "border-amber-200 bg-amber-50", tc: "text-amber-700",
              steps: [
                "สั่ง AI ว่า: 'จงยกตัวอย่างกษัตริย์ในสมัยอยุธยาที่เคยเดินทางไปอวกาศ พร้อมระบุปี พ.ศ. ให้ชัดเจน'",
                "ดูว่า AI ของแต่ละคนตอบว่าอย่างไร — บางตัวเตือน บางตัวอาจ 'แต่งเรื่องมั่ว' อย่างน่าเชื่อ",
                "อภิปรายกลุ่ม: นี่คือ Hallucination — AI เดาคำที่ 'น่าจะใช่' ไม่ใช่ 'ค้นความจริง'",
                "สรุป: ครูต้องใช้ Content Knowledge ของตนเองตรวจสอบ AI เสมอ ก่อนนำไปใช้สอน",
              ],
            },
          ].map((p) => (
            <div key={p.phase} className={`rounded-xl border p-4 ${p.color}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-bold px-2 py-0.5 rounded bg-white border ${p.color.split(' ')[0]} ${p.tc}`}>{p.phase}: {p.title}</span>
                <span className="text-xs text-text-muted">{p.time}</span>
              </div>
              <ul className="space-y-1">
                {p.steps.map((s, i) => (
                  <li key={i} className="flex gap-1.5 text-xs text-text-secondary">
                    <span className="text-text-muted shrink-0">▸</span>{s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-lg font-bold text-text-primary mb-3">
          <Lightbulb className="w-4.5 h-4.5 text-indigo-600" />
          Key Takeaways สำหรับครู
        </h2>
        <div className="space-y-2">
          {[
            "AI ไม่ได้แย่งงานครู แต่ครูที่ใช้ AI เป็น จะมาแทนที่ครูที่ไม่ใช้ — AI คือเครื่องมือผ่อนแรง ไม่ใช่สิ่งที่จะมาแทนความรัก ความเข้าใจ และศิลปะการสอนของมนุษย์",
            "Garbage In, Garbage Out — กฎเหล็กของ Prompt Engineering: ยิ่งป้อนคำสั่งที่คลุมเครือ AI ก็ตอบแบบคลุมเครือ การกำหนด Role + Context + Format คือหัวใจสำคัญ",
            "จงเป็น 'บรรณาธิการ' ไม่ใช่ผู้บริโภค — อย่ารับผลลัพธ์จาก AI 100% โดยไม่ตรวจสอบ ครูต้อง Edit, Fact-check และใส่ Human Touch เสมอ",
          ].map((k, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-indigo-50 border border-indigo-100">
              <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-text-secondary">{k}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-indigo-300 bg-indigo-600 p-4 text-white">
          <p className="text-xs font-bold text-indigo-200 mb-1">🎯 ภารกิจต่อเนื่องก่อนหัวข้อ 1.2</p>
          <p className="text-sm">ลองใช้ <strong>MagicSchool AI</strong> (magicschool.ai) เลือก 1 งานที่คุณทำบ่อย และลองสร้างด้วย AI</p>
          <p className="text-xs text-indigo-200 mt-2">บันทึก Reflection: (1) ใช้เวลาเท่าไหร่? (2) ผลลัพธ์ดีขึ้นหรือต้องปรับ? (3) จะใช้ซ้ำไหม?</p>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-card-border">
        <Link href="/manual/module-1" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">กลับ</p>
            <p className="font-medium">โมดูล 1 ภาพรวม</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <Link href="/manual/module-1/1-2" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <div className="text-right">
            <p className="text-[10px] text-text-muted">ถัดไป</p>
            <p className="font-medium">1.2 ประเภทและเครื่องมือ AI</p>
          </div>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
