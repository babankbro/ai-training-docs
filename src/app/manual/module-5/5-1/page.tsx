import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  CheckCircle2,
  Lightbulb,
  Wrench,
  LayoutGrid,
} from "lucide-react";

export default function Module51Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 lg:py-14 animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs text-text-muted mb-6 flex-wrap">
        <Link href="/" className="hover:text-text-secondary transition-colors">หน้าแรก</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/manual" className="hover:text-text-secondary transition-colors">คู่มือการอบรม</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/manual/module-5" className="hover:text-text-secondary transition-colors">โมดูล 5</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-text-secondary">5.1 Teaching Patterns จาก 9 แผนจริง</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-purple-200 bg-purple-50 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-purple-200 flex items-center justify-center shrink-0">
            <LayoutGrid className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-purple-600">โมดูล 5 · หัวข้อ 5.1</span>
              <span className="flex items-center gap-1 text-xs text-purple-500">
                <Clock className="w-3.5 h-3.5" /> 1.5 ชม. · 5 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">Teaching Patterns จาก 9 แผนจริง</h1>
            <p className="text-sm font-medium text-purple-600/80 mb-2">TPS / 5E / Hybrid Patterns from Real Lesson Plans</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              วิเคราะห์ Teaching Patterns จาก 9 แผนการสอนจริง — TPS, 5E และ Hybrid Pattern เลือก Pattern ที่เหมาะกับเนื้อหา และออกแบบ Active Learning ด้วย AI ได้ทันที
            </p>
          </div>
        </div>
      </div>

      {/* Learning Outcomes */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-base font-bold text-text-primary mb-3">
          <CheckCircle2 className="w-4 h-4 text-purple-600" />
          ผลลัพธ์การเรียนรู้
        </h2>
        <ul className="space-y-2">
          {[
            "อธิบายความแตกต่างระหว่าง TPS, 5E และ Hybrid Pattern ได้",
            "วิเคราะห์แผนการสอนของตัวเองว่าใช้ Pattern ใดและจุดใดที่ควรพัฒนา",
            "ออกแบบ TPS Activity ใหม่สำหรับบทเรียนที่จะสอนได้",
            "แปลง Lecture เดิมเป็น 5E Lesson Plan ได้ภายใน 25 นาที",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center text-[10px] font-bold text-purple-600 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 5.1.1 Pattern Overview */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">5.1.1 3 Teaching Patterns จาก 9 แผนการสอนจริง</h2>
        <p className="text-sm text-text-secondary mb-4">
          จากการวิเคราะห์แผนการสอน 9 ฉบับ พบ 3 Pattern หลัก — <strong>TPS ใช้ใน 9/9 แผน</strong> ทุกวิชา, 5E เน้น Inquiry และ Hybrid ผสมผสานทั้งสอง
        </p>

        <div className="space-y-3 mb-5">
          {[
            {
              name: "TPS — Think-Pair-Share",
              count: "9/9 แผน (100%)",
              color: "border-purple-200 bg-purple-50",
              badge: "bg-purple-100 text-purple-700",
              desc: "Pattern สากลที่ทำงานได้ทุกวิชาและทุกระดับ — Think (3–7 นาที) → Pair (8–10 นาที) → Share (5–7 นาที)",
              bestFor: ["เนื้อหาแนวคิด/ทฤษฎีที่ต้องการ Discussion", "การอ่านวิเคราะห์ข้อความ (RL)", "ทบทวนบทเรียนด้วย Mini-TPS 10 นาที"],
            },
            {
              name: "5E — Engage Explore Explain Elaborate Evaluate",
              count: "3/9 แผน (33%)",
              color: "border-blue-200 bg-blue-50",
              badge: "bg-blue-100 text-blue-700",
              desc: "เหมาะกับเนื้อหาที่ต้องการให้นักเรียน 'ค้นพบ' มากกว่า 'รับ' — Inquiry-based Learning",
              bestFor: ["เนื้อหาทดลอง/สำรวจ (Inquiry) วิทยาศาสตร์ ฟิสิกส์", "โจทย์คณิต/วิทย์ที่แก้ผ่านกระบวนการ 5E+CT", "เนื้อหาที่ต้องการ PERMA ฝังทุกขั้น"],
            },
            {
              name: "Hybrid — TPS ภายใน 5E",
              count: "พบใน 7/9 แผน (รูปแบบต่างๆ)",
              color: "border-green-200 bg-green-50",
              badge: "bg-green-100 text-green-700",
              desc: "ผสม TPS เป็นกลไกภายใน 5E เพิ่ม Engagement และ Higher-order Thinking ในทุกขั้น",
              bestFor: ["การแก้ปัญหาในชีวิตจริง (5E+CT): Engage Problem → Explore → Explain Algorithm", "TPS+RL: Think อ่าน → Pair ตีความ → Share สะท้อน", "Hybrid: Think คนเดียว → Pair ตรวจ → 5E Explain"],
            },
          ].map((p) => (
            <div key={p.name} className={`rounded-xl border p-4 ${p.color}`}>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${p.badge}`}>{p.count}</span>
                <span className="text-sm font-bold text-text-primary">{p.name}</span>
              </div>
              <p className="text-xs text-text-secondary mb-2">{p.desc}</p>
              <ul className="space-y-1">
                {p.bestFor.map((b, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-xs text-text-secondary">
                    <span className="text-text-muted shrink-0 mt-0.5">▸</span>{b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 5.1.2 Hybrid Pattern Types */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">5.1.2 4 รูปแบบ Hybrid Pattern</h2>
        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-purple-50 border-b border-purple-100">
            <p className="text-xs font-semibold text-purple-700">Hybrid Pattern 4 แบบที่พบในแผนการสอนจริง</p>
          </div>
          <div className="divide-y divide-card-border">
            {[
              { type: "TPS-in-5E", count: "4/9 แผน", desc: "ใช้ Think ใน Engage, Pair ใน Explore, Share ใน Explain — TPS เป็น Micro-structure ภายใน 5E" },
              { type: "5E-with-TPS-Bookend", count: "3/9 แผน", desc: "TPS เปิดใน Engage และปิดใน Evaluate — 5E คือโครงสร้างหลัก TPS เปิด-ปิด" },
              { type: "Mini-TPS", count: "2/9 แผน", desc: "TPS สั้น 10 นาทีแทรกใน Elaborate — รวดเร็ว มีประสิทธิภาพ ไม่กระทบ Timeline" },
              { type: "Full-Hybrid", count: "1/9 แผน", desc: "แต่ละ E มี Think ย่อย + Share ปิดท้าย 5E ทั้งหมด — ซับซ้อนที่สุด ต้องการเวลามาก" },
            ].map((h) => (
              <div key={h.type} className="flex gap-3 px-4 py-3">
                <div>
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <span className="text-xs font-bold text-purple-700">{h.type}</span>
                    <span className="text-[10px] text-purple-500 bg-purple-50 rounded px-1.5 py-0.5">{h.count}</span>
                  </div>
                  <p className="text-xs text-text-secondary">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.1.3 Pattern Selection Guide */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">5.1.3 เลือก Pattern ตามเนื้อหาและวัตถุประสงค์</h2>
        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <div className="px-4 py-2 bg-slate-50 border-b border-card-border">
            <p className="text-xs font-semibold text-text-primary">Pattern Selection Guide</p>
          </div>
          <table className="w-full text-xs">
            <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
              <th className="text-left px-4 py-1.5">เนื้อหา/สถานการณ์</th>
              <th className="text-left px-4 py-1.5">Pattern ที่แนะนำ</th>
              <th className="text-left px-4 py-1.5">เหตุผล</th>
            </tr></thead>
            <tbody className="divide-y divide-card-border">
              {[
                ["เนื้อหาแนวคิด/ทฤษฎี (Concept)", "TPS", "กระตุ้นให้คิดและตีความ — เหมาะกับ Discussion"],
                ["เนื้อหาทดลอง/สำรวจ (Inquiry)", "5E", "นำทางการค้นพบด้วยตนเอง — เหมาะกับ Lab"],
                ["โจทย์คณิต/วิทย์", "Hybrid: Think→Pair ตรวจ→5E Explain", "Think เดี่ยว + Pair ตรวจ + 5E Explain Algorithm"],
                ["การอ่านวิเคราะห์", "TPS+RL: Think อ่าน→Pair ตีความ→Share", "RL ฝังใน TPS ทุกขั้น"],
                ["การแก้ปัญหาจริง", "5E+CT: Engage Problem→Explore→Explain", "5E เน้น CT ในทุกขั้น"],
                ["ทบทวนบทเรียน", "Mini-TPS 10 นาที", "รวดเร็ว มีประสิทธิภาพ"],
              ].map(([content, pattern, reason], i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-2.5 text-text-secondary">{content}</td>
                  <td className="px-4 py-2.5 font-semibold text-purple-700">{pattern}</td>
                  <td className="px-4 py-2.5 text-text-muted">{reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mt-2 ml-1">ไม่มี Pattern ใด &lsquo;ดีที่สุด&rsquo; ในทุกสถานการณ์ — เลือกตามวัตถุประสงค์และเนื้อหา</p>
      </section>

      {/* Prompt Templates */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">Prompt Templates สำหรับ Teaching Patterns</h2>
        <div className="space-y-3">
          {[
            {
              label: "Prompt 1: วิเคราะห์แผนว่าใช้ Pattern ใด",
              prompt: "วิเคราะห์แผนการสอนต่อไปนี้ว่าใช้ Teaching Pattern ใด (TPS / 5E / Hybrid / Direct) | [วางเนื้อหาแผนการสอนหรือขั้นตอนกิจกรรม] | ระบุ: Pattern ที่ใช้ / ขั้นที่ตรงกับ TPS หรือ 5E / ข้อแนะนำการปรับปรุง → ผลลัพธ์: Pattern Analysis พร้อม Action Plan ปรับแผนให้ Active Learning มากขึ้น",
            },
            {
              label: "Prompt 2: ออกแบบ TPS Activity จากเนื้อหา",
              prompt: "ออกแบบกิจกรรม Think-Pair-Share สำหรับหัวข้อ [หัวข้อ] วิชา [วิชา] ระดับ [ชั้น] | Think: คำถามกระตุ้น (1 ข้อ, Higher-order) เวลา 3 นาที | Pair: Protocol การแลกเปลี่ยนที่ชัดเจน เวลา 7 นาที | Share: รูปแบบนำเสนอ เวลา 10 นาที → ผลลัพธ์: TPS Activity พร้อมใช้ พร้อม Success Criteria",
            },
            {
              label: "Prompt 3: แปลงเนื้อหาเป็น 5E Lesson",
              prompt: "แปลงเนื้อหาต่อไปนี้เป็นแผนการสอนแบบ 5E Model | เนื้อหา: [หัวข้อ] | วิชา: [วิชา] | ระดับ: [ชั้น] | เวลา: 50 นาที | ระบุ: กิจกรรมแต่ละ E / เวลาที่ใช้ / คำถามกระตุ้น / สื่อที่ต้องการ → ผลลัพธ์: แผน 5E พร้อม Timeline ชัดเจน ใช้ได้ทันที",
            },
            {
              label: "Prompt 4: ออกแบบ Hybrid Pattern TPS+5E",
              prompt: "ออกแบบ Hybrid Teaching Pattern ที่ผสม TPS ภายใน 5E สำหรับบทเรียน [หัวข้อ] | วิชา: [วิชา] | ระดับ: [ชั้น] | เวลา: 50 นาที | ระบุ: ขั้น E ใดใช้ TPS / คำถาม Think ในแต่ละ E / วิธี Share ที่เหมาะสม → ผลลัพธ์: Hybrid Pattern Blueprint ที่บูรณาการ Active Learning ครบถ้วน",
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
          <Wrench className="w-4.5 h-4.5 text-purple-600" />
          กิจกรรม Workshop (3 หัวข้อ · รวม ~60 นาที)
        </h2>
        <div className="space-y-4">
          {[
            {
              num: "1", title: "วิเคราะห์ Pattern ในแผนการสอนของตนเอง",
              time: "15 นาที", format: "เดี่ยว",
              goal: "ระบุ Teaching Pattern ที่ใช้และจุดที่ควรพัฒนา",
              steps: [
                "นำแผนการสอนล่าสุด 1 แผนมาวิเคราะห์ว่าใช้ TPS / 5E / Hybrid / Pattern อื่น",
                "ระบุว่าแต่ละขั้นกิจกรรมสอดคล้องกับ Pattern นั้นอย่างไร",
                "ระบุจุดแข็ง 2 ข้อ และโอกาสพัฒนา 2 ข้อ",
                "เปรียบเทียบกับ Pattern Selection Guide — ควรเปลี่ยน Pattern ไหม?",
              ],
            },
            {
              num: "2", title: "ออกแบบ TPS Activity ใหม่สำหรับบทเรียนที่จะสอน",
              time: "20 นาที", format: "เดี่ยว",
              goal: "สร้าง TPS Activity Blueprint ที่ใช้ได้จริง",
              steps: [
                "เลือกหัวข้อที่จะสอนในสัปดาห์หน้า",
                "ออกแบบคำถาม Think ที่กระตุ้น Higher-order Thinking (ไม่ใช่แค่จำ)",
                "กำหนด Protocol Pair ที่ชัดเจน: แลกเปลี่ยนอย่างไร? ใครพูดก่อน?",
                "กำหนด Criteria การ Share: นำเสนอรูปแบบใด? ประเมินอย่างไร?",
              ],
            },
            {
              num: "3", title: "แปลง Lecture เป็น 5E Lesson",
              time: "25 นาที", format: "เดี่ยว → Peer Feedback",
              goal: "แปลง Direct Teaching เป็น 5E Lesson Blueprint",
              steps: [
                "เลือก Lecture หรือ Direct Teaching 30 นาทีที่มีอยู่",
                "ออกแบบใหม่เป็น 5E โดยยังรักษาเนื้อหาหลักเดิม",
                "ตรวจสอบ: ทุก E มีกิจกรรมนักเรียนที่ Active หรือเปล่า?",
                "Peer Share และให้ Feedback ตาม 5E Checklist (Engage/Explore/Explain/Elaborate/Evaluate)",
              ],
            },
          ].map((ws) => (
            <div key={ws.num} className="rounded-xl border border-purple-200 bg-white overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 bg-purple-50 border-b border-purple-100">
                <span className="w-7 h-7 rounded-lg bg-purple-600 text-white text-xs font-bold flex items-center justify-center">W{ws.num}</span>
                <div>
                  <p className="text-sm font-bold text-text-primary">{ws.title}</p>
                  <p className="text-[11px] text-purple-500">{ws.time} · {ws.format}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs font-medium text-purple-600 mb-2">🎯 {ws.goal}</p>
                <ul className="space-y-1.5">
                  {ws.steps.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                      <span className="w-4 h-4 rounded bg-purple-100 text-purple-600 text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
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
          <Lightbulb className="w-4.5 h-4.5 text-purple-600" />
          Key Takeaways
        </h2>
        <div className="space-y-2">
          {[
            "TPS ใช้ใน 9/9 แผน — เป็น Pattern สากลที่ทำงานได้ทุกวิชาและทุกระดับชั้น",
            "5E เน้น Inquiry — เหมาะกับเนื้อหาที่ต้องการให้นักเรียน 'ค้นพบ' มากกว่า 'รับ'",
            "Hybrid Pattern ทำงานได้ดีกว่า — TPS ใน 5E เพิ่ม Engagement ในทุกขั้น",
            "เลือก Pattern ตามวัตถุประสงค์ — ไม่มี Pattern ใด 'ดีที่สุด' ในทุกสถานการณ์",
            "AI ช่วยออกแบบได้ — ใช้ Prompt ระบุ Pattern + เนื้อหา + ระดับ → ได้แผนทันที",
          ].map((k, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-purple-50 border border-purple-100">
              <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-text-secondary">{k}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-purple-300 bg-purple-600 p-4 text-white">
          <p className="text-xs font-bold text-purple-200 mb-1">🎯 ภารกิจต่อเนื่อง (Take-Home Mission 5.1)</p>
          <p className="text-sm">วิเคราะห์แผนการสอนของตนเองหรือเพื่อนครู 1 แผน โดยระบุ Teaching Pattern ที่ใช้ และตอบ 3 คำถาม: (1) ส่วนใดที่ Active Learning ที่สุด? (2) ส่วนใดที่ Passive มากเกินไป? (3) จะเปลี่ยนเป็น Hybrid Pattern ได้อย่างไร?</p>
        </div>
      </section>

      {/* References */}
      <section className="mb-10">
        <h2 className="text-sm font-bold text-text-primary mb-3">เอกสารอ้างอิง</h2>
        <div className="rounded-xl border border-card-border bg-white p-4 space-y-2">
          {[
            "Lyman, F. (1981). The responsive classroom discussion. In A. Anderson (Ed.), Mainstreaming digest. College Park: University of Maryland.",
            "Bybee, R. W. et al. (2006). The BSCS 5E Instructional Model: Origins and Effectiveness. Colorado Springs: BSCS.",
            "Chinn, C., & Malhotra, B. (2002). Epistemologically authentic inquiry in schools. Science Education, 86(2), 175-218.",
            "สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน. (2551). หลักสูตรแกนกลางการศึกษาขั้นพื้นฐาน พุทธศักราช 2551. กรุงเทพฯ.",
          ].map((ref, i) => (
            <p key={i} className="text-xs text-text-muted leading-relaxed border-l-2 border-purple-100 pl-3">{ref}</p>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-card-border">
        <Link href="/manual/module-4/4-4" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">4.4 AI Tools CT + Rubric</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <Link href="/manual/module-5/5-2" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <div className="text-right">
            <p className="text-[10px] text-text-muted">ถัดไป</p>
            <p className="font-medium">5.2 Growth Mindset 6 แนวทาง</p>
          </div>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
