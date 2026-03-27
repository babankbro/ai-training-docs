import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  CheckCircle2,
  Lightbulb,
  Wrench,
  Brain,
} from "lucide-react";

export default function Module41Page() {
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
        <span className="text-text-secondary">4.1 6 องค์ประกอบ CT</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-violet-200 bg-violet-50 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-violet-200 flex items-center justify-center shrink-0">
            <Brain className="w-6 h-6 text-violet-600" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-violet-600">โมดูล 4 · หัวข้อ 4.1</span>
              <span className="flex items-center gap-1 text-xs text-violet-500">
                <Clock className="w-3.5 h-3.5" /> 1 ชม. · 9 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">6 องค์ประกอบ Critical Thinking</h1>
            <p className="text-sm font-medium text-violet-600/80 mb-2">The 6 Components of Critical &amp; Computational Thinking</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              เข้าใจ CT 6 องค์ประกอบในกรอบ Computational Thinking วิเคราะห์กิจกรรมปัจจุบันตาม Bloom's Taxonomy และออกแบบกิจกรรมที่ฝึก CT อย่างมีระบบ
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
            "อธิบาย CT 6 องค์ประกอบพร้อมตัวอย่างจากวิชาที่สอนได้",
            "วิเคราะห์กิจกรรมในแผนการสอนว่าฝึก CT ระดับใด (Bloom's)",
            "ออกแบบกิจกรรม Decomposition และ Evaluation สำหรับวิชาตัวเองได้",
            "ระบุจุดที่ควรเพิ่ม CT ในแผนการสอนปัจจุบัน",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-violet-50 border border-violet-200 flex items-center justify-center text-[10px] font-bold text-violet-600 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 4.1.1 What is CT */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">4.1.1 Critical Thinking คืออะไร?</h2>
        <p className="text-sm text-text-secondary mb-4">
          Critical Thinking (CT) คือสมรรถนะคิดอย่างมีระบบ วิเคราะห์ สังเคราะห์ และประเมินข้อมูลอย่างมีเหตุผล — ไม่ใช่แค่ &ldquo;คิดนอกกรอบ&rdquo; แต่คือการ <strong>คิดด้วยกรอบที่ถูกต้อง</strong>
        </p>
        <div className="rounded-xl border border-violet-100 bg-violet-50/50 p-4 mb-4">
          <p className="text-xs font-bold text-violet-700 mb-2">💡 CT ในบริบทห้องเรียน</p>
          <ul className="space-y-1.5 text-xs text-text-secondary">
            <li className="flex gap-2"><span className="text-violet-500 shrink-0">•</span>ครูทุกคน <strong>ฝึก CT อยู่แล้ว</strong> — แต่ส่วนใหญ่อยู่ที่ระดับ Analysis เท่านั้น ขาด Evaluation</li>
            <li className="flex gap-2"><span className="text-violet-500 shrink-0">•</span>CT ไม่ใช่วิชาเพิ่ม — ฝัง CT ได้ในทุกกิจกรรมที่ทำอยู่แล้ว</li>
            <li className="flex gap-2"><span className="text-violet-500 shrink-0">•</span>World Economic Forum (2025) ระบุ CT เป็น Top 3 ทักษะที่นายจ้างต้องการมากที่สุด</li>
          </ul>
        </div>
      </section>

      {/* 4.1.2 6 Components */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">4.1.2 6 องค์ประกอบ CT และ Computational Thinking</h2>
        <div className="space-y-2 mb-5">
          {[
            {
              num: "1", name: "Decomposition", thai: "การแยกส่วน",
              desc: "แยกปัญหาหรือแนวคิดซับซ้อนออกเป็นส่วนย่อยที่จัดการได้",
              ex: "ฟิสิกส์: แยกตัวแปร m, v, r ออกจากสมการ F_c = mv²/r ก่อนแก้ปัญหา",
              color: "border-blue-200 bg-blue-50", badge: "bg-blue-100 text-blue-700",
            },
            {
              num: "2", name: "Pattern Recognition", thai: "การหาแบบรูป",
              desc: "ระบุแบบรูป ความสัมพันธ์ และความซ้ำในข้อมูลหรือสถานการณ์",
              ex: "ฟิสิกส์: สังเกตว่า F_c ∝ v² — เมื่อ v เพิ่ม 2 เท่า F_c เพิ่ม 4 เท่า",
              color: "border-green-200 bg-green-50", badge: "bg-green-100 text-green-700",
            },
            {
              num: "3", name: "Abstraction", thai: "การสรุปนามธรรม",
              desc: "ตัดรายละเอียดที่ไม่จำเป็นออก เก็บไว้เฉพาะสิ่งสำคัญ",
              ex: "ฟิสิกส์: สรุปสมการ F_c = mv²/r แทนรายละเอียดทั้งหมดของระบบ",
              color: "border-violet-200 bg-violet-50", badge: "bg-violet-100 text-violet-700",
            },
            {
              num: "4", name: "Algorithm Design", thai: "การออกแบบขั้นตอน",
              desc: "ออกแบบลำดับขั้นตอนที่ชัดเจนเพื่อแก้ปัญหาอย่างเป็นระบบ",
              ex: "วิทยาการคำนวณ: เขียน Flowchart / Pseudocode แก้ปัญหาทีละขั้น",
              color: "border-amber-200 bg-amber-50", badge: "bg-amber-100 text-amber-700",
            },
            {
              num: "5", name: "Analysis", thai: "การวิเคราะห์",
              desc: "แยกแยะ เปรียบเทียบ และอธิบายความสัมพันธ์ระหว่างข้อมูล",
              ex: "ทุกวิชา: วิเคราะห์สาเหตุ-ผล เปรียบเทียบ 2 สถานการณ์ อธิบายพร้อมหลักฐาน",
              color: "border-sky-200 bg-sky-50", badge: "bg-sky-100 text-sky-700",
            },
            {
              num: "6", name: "Evaluation", thai: "การประเมิน",
              desc: "ตัดสินใจ ประเมิน และแสดงจุดยืนพร้อมเหตุผลและหลักฐาน",
              ex: "ทุกวิชา: 'การออกแบบนี้เหมาะสมหรือไม่? เพราะอะไร?' — ต้องมี Reasoning",
              color: "border-orange-200 bg-orange-50", badge: "bg-orange-100 text-orange-700",
            },
          ].map((c) => (
            <div key={c.num} className={`rounded-xl border p-3.5 ${c.color}`}>
              <div className="flex items-start gap-3">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-md shrink-0 ${c.badge}`}>CT{c.num}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-0.5">
                    <p className="text-sm font-bold text-text-primary">{c.name}</p>
                    <p className="text-xs text-text-muted">— {c.thai}</p>
                  </div>
                  <p className="text-xs text-text-secondary mb-1.5">{c.desc}</p>
                  <p className="text-[11px] text-text-muted font-mono">{c.ex}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Real example */}
        <div className="rounded-xl border border-violet-200 bg-violet-50 p-4">
          <p className="text-xs font-bold text-violet-700 mb-2">ตัวอย่างบูรณาการ: แก้โจทย์ &ldquo;ถอดรหัสรถแหกโค้ง&rdquo; ด้วย CT ทั้ง 6</p>
          <div className="space-y-1.5 text-xs">
            {[
              ["CT1 Decomposition", "แยกตัวแปร: มวล m, ความเร็ว v, รัศมี r"],
              ["CT2 Pattern Rec.", "สังเกต: F_c ∝ v² — เมื่อ v เพิ่ม 2 เท่า F_c เพิ่ม 4 เท่า"],
              ["CT3 Abstraction", "สรุปด้วยสมการ F_c = mv²/r แทนสถานการณ์ทั้งหมด"],
              ["CT4 Algorithm", "ออกแบบขั้นตอนคำนวณ: กำหนดค่า → แทนสมการ → แก้ → ตรวจ"],
              ["CT5 Analysis", "วิเคราะห์: ทำไมความเร็วมีผลมากกว่ามวลในโค้งแบบนี้?"],
              ["CT6 Evaluation", "ประเมิน: การออกแบบโค้งนี้ปลอดภัยพอหรือไม่? เพราะอะไร?"],
            ].map(([ct, detail]) => (
              <div key={ct} className="flex gap-2 p-2 bg-white/70 rounded-lg">
                <span className="font-bold text-violet-700 w-32 shrink-0 text-[11px]">{ct}</span>
                <span className="text-text-secondary">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.1.3 CT vs Bloom */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">4.1.3 CT กับ Bloom&apos;s Taxonomy</h2>
        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-violet-50 border-b border-violet-100">
            <p className="text-xs font-semibold text-violet-700">การเชื่อมโยง CT 6 องค์ประกอบ กับ Bloom&apos;s Taxonomy</p>
          </div>
          <table className="w-full text-xs">
            <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
              <th className="text-left px-4 py-1.5">Bloom&apos;s Level</th>
              <th className="text-left px-4 py-1.5">CT Component หลัก</th>
              <th className="text-left px-4 py-1.5">ตัวอย่างกิจกรรม</th>
            </tr></thead>
            <tbody className="divide-y divide-card-border">
              {[
                ["Remember / Understand", "Abstraction (จำหลักการ)", "ท่องสูตร/นิยาม สรุปหลักการสำคัญ"],
                ["Apply", "Algorithm Design", "คำนวณโจทย์ตามขั้นตอน ทำตาม Flowchart"],
                ["Analyze", "Analysis + Decomposition", "แยกส่วน อธิบายความสัมพันธ์ เปรียบเทียบ"],
                ["Evaluate", "Evaluation + Pattern Rec.", "ตัดสินใจ แสดงจุดยืนพร้อมหลักฐาน"],
                ["Create", "CT ทั้ง 6 ร่วมกัน", "ออกแบบชิ้นงานใหม่ สร้าง Solution ต้นแบบ"],
              ].map(([bloom, ct, ex], i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-2.5 font-semibold text-violet-700">{bloom}</td>
                  <td className="px-4 py-2.5 text-text-secondary">{ct}</td>
                  <td className="px-4 py-2.5 text-text-muted">{ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-xl border border-amber-100 bg-amber-50 p-3">
          <p className="text-xs font-semibold text-amber-800 mb-1">⚠️ จุดเน้น</p>
          <p className="text-xs text-amber-700">กิจกรรมส่วนใหญ่อยู่ที่ Apply — ต้องเพิ่ม <strong>Analyze / Evaluate / Create</strong> ให้ได้ 40–50% ของเวลาเรียน</p>
        </div>
      </section>

      {/* 4.1.4 CT in 9 real lesson plans */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">4.1.4 CT ใน 9 แผนการสอนจริง — ผลวิเคราะห์</h2>
        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-slate-50 border-b border-card-border">
            <p className="text-xs font-semibold text-text-primary">สรุปการวิเคราะห์ CT ใน 9 แผนการสอนจริง</p>
          </div>
          <table className="w-full text-xs">
            <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
              <th className="text-left px-4 py-1.5">วิชา</th>
              <th className="text-left px-4 py-1.5">CT ที่พบ</th>
              <th className="text-left px-4 py-1.5">CT ที่ขาด</th>
            </tr></thead>
            <tbody className="divide-y divide-card-border">
              {[
                ["ฟิสิกส์ ม.4–5", "Analysis + Evaluation (PISA Task 'รถแหกโค้ง') + Decomposition", "Pattern Recognition เชิงลึก"],
                ["ชีววิทยา ม.5–6", "Pattern Rec. (Food Web 3 ระดับ) + Abstraction + Analysis", "Evaluation + Critical Reflection"],
                ["ภาษาไทย ม.2", "Think+Share: Abstraction + Analysis + Socratic", "Decomposition เชิงโครงสร้าง"],
                ["วิทยาการคำนวณ ม.3", "Decomposition + Algorithm Design (Flowchart+Dijkstra)", "Evaluation จากผลลัพธ์จริง"],
              ].map(([sub, found, missing], i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-2.5 font-semibold text-violet-700">{sub}</td>
                  <td className="px-4 py-2.5 text-green-700">{found}</td>
                  <td className="px-4 py-2.5 text-red-600/80">{missing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-green-100 bg-green-50 p-3">
            <p className="text-xs font-bold text-green-700 mb-1.5">✅ พบในเกือบทุกแผน</p>
            <ul className="space-y-1 text-xs text-green-700">
              <li>• Analysis พบใน 8/9 แผน</li>
              <li>• Evaluation พบใน 7/9 แผน (ส่วนใหญ่ใน Elaborate/Share)</li>
            </ul>
          </div>
          <div className="rounded-xl border border-red-100 bg-red-50 p-3">
            <p className="text-xs font-bold text-red-700 mb-1.5">⚠️ ขาดในส่วนใหญ่</p>
            <ul className="space-y-1 text-xs text-red-700">
              <li>• Decomposition พบแค่ 3/9 แผน</li>
              <li>• Algorithm Design พบแค่ 2/9 แผน</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-text-muted mt-2 ml-1">แนะนำ: เพิ่ม Decomposition ในขั้น Think ของ TPS — ให้นักเรียนแยกปัญหาก่อนอภิปราย</p>
      </section>

      {/* Prompt Templates */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">Prompt Templates สำหรับ CT</h2>
        <div className="space-y-3">
          {[
            {
              label: "Prompt 1: วิเคราะห์ CT ใน 6 องค์ประกอบ",
              prompt: "วิเคราะห์แผนการสอนต่อไปนี้ตามกรอบ Computational Thinking 6 องค์ประกอบ | วิชา: [วิชา] | ระดับ: [ชั้น] | เวลา: [X นาที] | [วาง Outline แผน] → ผลลัพธ์: ตาราง CT 6 องค์ประกอบ — พบ/ไม่พบ/แนะนำเพิ่ม",
            },
            {
              label: "Prompt 2: สร้างกิจกรรม CT สำหรับวิชา",
              prompt: "ออกแบบกิจกรรม CT วิชา [วิชา] ระดับ [ชั้น] | เนื้อหา: [หัวข้อ] | เน้น: [Decomposition / Pattern / Abstraction / Algorithm / Analysis / Evaluation] | เวลา: [X นาที] → ผลลัพธ์: กิจกรรม CT พร้อม Scaffold และคำถาม",
            },
            {
              label: "Prompt 3: สร้าง CT Analogy สำหรับอธิบายให้นักเรียน",
              prompt: "สร้างตัวอย่าง Analogy เพื่ออธิบาย Computational Thinking 6 องค์ประกอบสำหรับนักเรียน [ชั้น] | วิชา: [วิชา] | ใช้สถานการณ์ประจำวันที่นักเรียนคุ้นเคย → ผลลัพธ์: Analogy 6 CT ที่เข้าใจง่ายสำหรับนักเรียน",
            },
            {
              label: "Prompt 4: สร้าง CT Assessment Checklist",
              prompt: "สร้างเครื่องมือประเมิน Computational Thinking วิชา [วิชา] | ครอบคลุม CT 6 องค์ประกอบ พร้อม Rubric 4 ระดับและ Checklist | → ผลลัพธ์: CT Rubric ครบ 6 องค์ประกอบ พร้อม Feedback Strategy",
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
          <Wrench className="w-4.5 h-4.5 text-violet-600" />
          กิจกรรม Workshop (3 หัวข้อ · รวม ~50 นาที)
        </h2>
        <div className="space-y-4">
          {[
            {
              num: "1", title: "CT Inventory — วิเคราะห์ CT ในแผนของตัวเอง",
              time: "20 นาที", format: "เดี่ยว → แลกกลุ่ม",
              goal: "ระบุ CT ที่มีและขาดในแผนการสอนปัจจุบัน",
              steps: [
                "นำแผนการสอน 1 แผนที่เคยใช้จริงมา",
                "ระบุทุกกิจกรรมว่าฝึก CT ด้านไหน (เขียนลงตาราง CT 6 ช่อง)",
                "นับสัดส่วน: Analyze/Evaluate/Create มีกี่เปอร์เซ็นต์?",
                "ระบุ: CT ใดที่ขาดอยู่ทั้งหมด และจะเพิ่มตรงไหน?",
                "แลกกับคู่ 1 คน — อีกคนช่วยหา CT ที่อาจมองข้ามไป",
              ],
            },
            {
              num: "2", title: "Decomposition Challenge — แยกส่วนปัญหาซับซ้อน",
              time: "15 นาที", format: "กลุ่ม 3 คน",
              goal: "ฝึก Decomposition กับปัญหาจากวิชาจริง",
              steps: [
                "กลุ่มเลือกปัญหา/หัวข้อซับซ้อน 1 อย่างจากวิชาที่สอน",
                "ทำ Decomposition: แยกเป็นส่วนย่อย 4–6 ส่วน",
                "สร้าง Mind Map — แสดงความสัมพันธ์ระหว่างส่วนย่อย",
                "นำเสนอ 1–5 นาที — กลุ่มอื่นตั้งคำถาม",
                "Reflection: Decomposition ช่วยนักเรียนอย่างไร?",
              ],
            },
            {
              num: "3", title: "Pattern Hunt — หา Pattern ในข้อมูลจริง",
              time: "15 นาที", format: "เดี่ยว",
              goal: "ฝึก Pattern Recognition กับข้อมูลจากวิชาตัวเอง",
              steps: [
                "เลือกชุดข้อมูล/ปรากฏการณ์จากบทเรียน (ตัวเลข กราฟ ลำดับเหตุการณ์) — 3 ชุด",
                "หา Pattern: ความสม่ำเสมอ ความสัมพันธ์ ข้อยกเว้น",
                "บันทึก Pattern Recognition 1 ข้อ: &lsquo;[x] แปรผัน[ตาม/ผกผัน]กับ [y] เพราะ...&rsquo;",
                "ออกแบบคำถาม: &lsquo;[3 ข้อมูล]... ถ้า [เพิ่ม/ลด] จะเกิดอะไร?&rsquo;",
                "แชร์ Pattern ที่น่าสนใจที่สุดกับกลุ่ม",
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
            "CT 6 องค์ประกอบ: Decomposition / Pattern Rec. / Abstraction / Algorithm Design / Analysis / Evaluation — ครูใช้อยู่แล้วแต่ยังไม่เป็นระบบ",
            "CT ≠ แค่ Analyze — ต้องการ Evaluate และ Create ให้ได้ 40–50% ของเวลาเรียน (Bloom's)",
            "9 แผนจริง: Analysis+Evaluation มีมาก แต่ Decomposition+Algorithm ขาด — เพิ่ม Decomposition ใน Think ได้ทันที",
            "Decomposition ใน Think ของ TPS: ให้นักเรียนแยกปัญหาก่อนอภิปรายเสมอ",
          ].map((k, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-violet-50 border border-violet-100">
              <span className="w-5 h-5 rounded-full bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-text-secondary">{k}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-violet-300 bg-violet-600 p-4 text-white">
          <p className="text-xs font-bold text-violet-200 mb-1">🎯 ภารกิจต่อเนื่อง (Take-Home Mission 4.1)</p>
          <p className="text-sm">เลือก 1 แผนการสอน — เพิ่มกิจกรรม <strong>Decomposition</strong> และ <strong>Evaluation</strong> อย่างละ 1 กิจกรรม บันทึก: CT เหล่านี้ช่วยนักเรียนคิดได้ลึกขึ้นหรือไม่?</p>
        </div>
      </section>

      {/* References */}
      <section className="mb-10">
        <h2 className="text-sm font-bold text-text-primary mb-3">เอกสารอ้างอิง</h2>
        <div className="rounded-xl border border-card-border bg-white p-4 space-y-2">
          {[
            "Wing, J.M. (2006). Computational thinking. Communications of the ACM, 49(3), 33–35.",
            "Paul, R., & Elder, L. (2020). The Thinker's Guide to Critical Thinking. Foundation for Critical Thinking.",
            "Bloom, B.S. (1956). Taxonomy of Educational Objectives. David McKay Company.",
            "OECD. (2021). OECD Future of Education and Skills 2030. OECD Publishing.",
            "World Economic Forum. (2025). Future of Jobs Report 2025. WEF.",
          ].map((ref, i) => (
            <p key={i} className="text-xs text-text-muted leading-relaxed border-l-2 border-violet-100 pl-3">{ref}</p>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-card-border">
        <Link href="/manual/module-3/3-4" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">3.4 AI Tools สร้าง RL Content</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <Link href="/manual/module-4/4-2" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <div className="text-right">
            <p className="text-[10px] text-text-muted">ถัดไป</p>
            <p className="font-medium">4.2 CT ใน TPS และ 5E</p>
          </div>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
