import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  CheckCircle2,
  Lightbulb,
  Wrench,
  Terminal,
  ArrowRight,
} from "lucide-react";

export default function Module23Page() {
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
        <span className="text-text-secondary">2.3 Prompt Engineering</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-blue-200 flex items-center justify-center shrink-0">
            <Terminal className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-blue-600">โมดูล 2 · หัวข้อ 2.3</span>
              <span className="flex items-center gap-1 text-xs text-blue-500">
                <Clock className="w-3.5 h-3.5" /> 1.5 ชม. · 8 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">Prompt Engineering สำหรับวิชาที่สอน</h1>
            <p className="text-sm font-medium text-blue-600/80 mb-2">Prompt Engineering for Subject-Specific Teaching</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              เรียนรู้กรอบ CRISPE เทคนิค Prompting ขั้นสูง (Chain-of-Thought, Few-Shot, Iterative Refinement) และสร้าง Prompt Library ส่วนตัวสำหรับวิชาที่สอน — AI เดียวกัน Prompt ต่างกัน ผลลัพธ์ต่างกัน 10 เท่า
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
            "อธิบายหลักการ Prompt Engineering และส่วนประกอบของ Prompt ที่มีประสิทธิภาพ",
            "เขียน Prompt ด้วยกรอบ CRISPE ที่ได้ผลลัพธ์ตรงต้องการสำหรับงานสอนได้ ≥80%",
            "ปรับปรุง Prompt ที่ไม่ได้ผลด้วยเทคนิค Iteration และ Chain-of-Thought",
            "สร้าง Prompt Template Library ส่วนตัวสำหรับวิชาที่สอนได้อย่างน้อย 5 Template",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[10px] font-bold text-blue-600 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 2.3.1 What is Prompt Engineering */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">2.3.1 Prompt Engineering คืออะไร และทำไมถึงสำคัญ</h2>
        <p className="text-sm text-text-secondary mb-4">
          Prompt Engineering คือศาสตร์ของการ <strong>'สื่อสารกับ AI อย่างมีประสิทธิภาพ'</strong> — เขียน Prompt ที่ดีก็เหมือนให้ Brief งานที่ชัดเจนแก่ผู้ช่วยที่ฉลาดมาก
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          {[
            { icon: "⚡", title: "ลดเวลา Revision", desc: "Prompt ที่ดีตั้งแต่แรกลดรอบการแก้ไขจาก 5 รอบ เหลือ 1-2 รอบ" },
            { icon: "🎯", title: "ควบคุมบริบท", desc: "ระบุวิชา ระดับ บริบทไทย → AI ตอบถูกบริบทการสอน" },
            { icon: "📈", title: "ผลลัพธ์ต่างกัน 10 เท่า", desc: "AI เดียวกัน Prompt ต่างกัน ผลลัพธ์ต่างกันมาก — ครูที่ Prompt เก่งได้งานดีกว่า" },
          ].map((f) => (
            <div key={f.title} className="flex gap-3 p-3 rounded-xl border border-blue-100 bg-blue-50/50">
              <span className="text-lg shrink-0">{f.icon}</span>
              <div>
                <p className="text-xs font-semibold text-text-primary">{f.title}</p>
                <p className="text-xs text-text-secondary mt-0.5">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-muted border-l-2 border-blue-100 pl-3">
          อ้างอิง: Schulhoff, S. et al. (2024). The Prompt Report: A Systematic Survey of Prompting Techniques. arXiv:2406.06608
        </p>
      </section>

      {/* 2.3.2 CRISPE Framework */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-2">2.3.2 โครงสร้าง Prompt ที่มีประสิทธิภาพ: กรอบ CRISPE</h2>
        <p className="text-sm text-text-secondary mb-4">
          กรอบ CRISPE พัฒนาขึ้นสำหรับงานด้านการศึกษาโดยเฉพาะ ประกอบด้วย 6 องค์ประกอบที่ให้ผลลัพธ์ดีที่สุดเมื่อใช้ครบ
        </p>

        <div className="rounded-xl border border-blue-200 bg-white overflow-hidden mb-5">
          <div className="px-4 py-2 bg-blue-50 border-b border-blue-100">
            <p className="text-xs font-semibold text-blue-700">องค์ประกอบ CRISPE ทั้ง 6</p>
          </div>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
                <th className="text-left px-4 py-1.5 w-32">องค์ประกอบ</th>
                <th className="text-left px-4 py-1.5">คำอธิบาย</th>
                <th className="text-left px-4 py-1.5">ตัวอย่าง</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border">
              {[
                ["C — Capacity", "บทบาทของ AI (เป็นใคร?)", "คุณเป็นครูวิทยาศาสตร์ที่เชี่ยวชาญการสอน ม.ปลาย และออกแบบสื่อ Active Learning"],
                ["R — Request", "งานที่ต้องการอย่างชัดเจน", "สร้างกิจกรรมการเรียนรู้แบบ Think-Pair-Share สำหรับบทเรียน 1 ชั่วโมง เรื่องระบบนิเวศ"],
                ["I — Input", "ข้อมูลเพิ่มเติมที่จำเป็น", "นักเรียน ม.4 จำนวน 35 คน มีพื้นฐานเรื่องสิ่งมีชีวิตแล้ว แต่ยังไม่รู้จักความสัมพันธ์ในระบบนิเวศ"],
                ["S — Style", "รูปแบบผลลัพธ์ที่ต้องการ", "รูปแบบตาราง แบ่งเป็น 3 ขั้น (Think 10 นาที / Pair 15 นาที / Share 10 นาที) พร้อมคำถาม L3-L4"],
                ["P — Purpose", "วัตถุประสงค์การใช้งาน", "เพื่อใช้สอนจริงในสัปดาห์หน้า ต้องการให้นักเรียนวิเคราะห์บทความและเชื่อมโยงกับชีวิตจริง"],
                ["E — Exclusions", "สิ่งที่ไม่ต้องการ", "ห้ามใช้ Video ห้ามยาวเกิน 1.5 หน้า A4 ห้ามใช้ศัพท์วิชาการยากเกินไป"],
              ].map(([comp, desc, ex], i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-2.5 font-bold text-blue-700">{comp}</td>
                  <td className="px-4 py-2.5 text-text-secondary">{desc}</td>
                  <td className="px-4 py-2.5 text-text-muted text-[11px]">{ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Full CRISPE example */}
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
          <p className="text-xs font-bold text-blue-700 mb-2">ตัวอย่าง Prompt เต็มรูปแบบด้วย CRISPE</p>
          <div className="prompt-block">
            <p><span className="font-bold text-blue-600">C:</span> คุณเป็นผู้เชี่ยวชาญออกแบบแผนการสอนวิทยาศาสตร์ ระดับมัธยมศึกษาตอนปลาย ที่เน้น Active Learning</p>
            <p><span className="font-bold text-blue-600">R:</span> สร้างกิจกรรมการเรียนรู้แบบ Think-Pair-Share สำหรับบทเรียน 1 ชั่วโมง เรื่องระบบนิเวศและห่วงโซ่อาหาร</p>
            <p><span className="font-bold text-blue-600">I:</span> นักเรียน ม.4 จำนวน 35 คน มีพื้นฐานเรื่องสิ่งมีชีวิตแล้ว แต่ยังไม่รู้จักความสัมพันธ์ระหว่างสิ่งมีชีวิตในระบบนิเวศ</p>
            <p><span className="font-bold text-blue-600">S:</span> รูปแบบตาราง แบ่งเป็น 3 ขั้น พร้อมคำถามกระตุ้น Reading Literacy L3-L4 อย่างน้อย 3 ข้อ</p>
            <p><span className="font-bold text-blue-600">P:</span> เพื่อใช้สอนจริงในสัปดาห์หน้า ต้องการให้นักเรียนวิเคราะห์บทความและเชื่อมโยงกับชีวิตจริงในชุมชน</p>
            <p><span className="font-bold text-blue-600">E:</span> ห้ามใช้ Video ห้ามยาวเกิน 1.5 หน้า A4 ห้ามใช้ศัพท์วิชาการยากเกินไป</p>
            <p className="text-blue-500 pt-1">→ ผลลัพธ์: กิจกรรม TPS พร้อมใช้ได้เลย ภาษาไทย</p>
          </div>
        </div>
      </section>

      {/* 2.3.3 Advanced Techniques */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-4">2.3.3 เทคนิค Prompting ขั้นสูงสำหรับครู</h2>
        <div className="space-y-4">

          {/* Technique 1: Role Prompting */}
          <div className="rounded-xl border border-card-border bg-white overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border-b border-card-border">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">1</span>
              <p className="text-sm font-semibold text-text-primary">Role Prompting — กำหนดบทบาท AI</p>
            </div>
            <table className="w-full text-xs">
              <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
                <th className="text-left px-4 py-1.5">ระดับ</th>
                <th className="text-left px-4 py-1.5">ตัวอย่าง Prompt</th>
                <th className="text-left px-4 py-1.5">ผลที่ได้</th>
              </tr></thead>
              <tbody className="divide-y divide-card-border">
                {[
                  ["ทั่วไป (ไม่ดี)", "สร้างข้อสอบเรื่องฟิสิกส์", "ข้อสอบทั่วไป ไม่ตรงระดับ"],
                  ["ดีขึ้น", "สร้างข้อสอบฟิสิกส์ ม.5", "ดีขึ้น แต่ยังขาดบริบท"],
                  ["ดีมาก (Role)", "คุณเป็นครูฟิสิกส์ที่เชี่ยวชาญ PISA Framework สร้างข้อสอบ ม.5 ระดับ L3-L4 บริบทชีวิตจริง", "ข้อสอบคุณภาพสูง เหมาะกับระดับและบริบท"],
                ].map(([level, prompt, result], i) => (
                  <tr key={i} className={`hover:bg-slate-50 ${i === 2 ? "bg-green-50/30" : ""}`}>
                    <td className={`px-4 py-2 font-medium ${i === 0 ? "text-red-500" : i === 1 ? "text-amber-600" : "text-green-700"}`}>{level}</td>
                    <td className="px-4 py-2 text-text-secondary font-mono text-[10px]">{prompt}</td>
                    <td className="px-4 py-2 text-text-muted">{result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Technique 2: Chain-of-Thought */}
          <div className="rounded-xl border border-card-border bg-white overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border-b border-card-border">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">2</span>
              <p className="text-sm font-semibold text-text-primary">Chain-of-Thought — ให้ AI แสดงการคิด</p>
            </div>
            <div className="p-4">
              <p className="text-xs text-text-secondary mb-3">
                CoT คือการขอให้ AI 'คิดออกมาดังๆ' ทีละขั้นตอนก่อนตอบ — งานวิจัยพบว่า CoT เพิ่มความถูกต้องในงานเชิงเหตุผลได้ 17–30%
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <p className="font-semibold text-red-600 mb-1.5">Prompt ปกติ</p>
                  <div className="prompt-block">
                    ออกแบบ Rubric สำหรับงานเขียนเชิงสร้างสรรค์ ม.4
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-green-700 mb-1.5">Prompt Chain-of-Thought</p>
                  <div className="prompt-block">
                    ก่อนออกแบบ Rubric ให้คิดออกมาดังๆ: 1. งานเขียนเชิงสร้างสรรค์ ม.4 ควรวัดอะไรบ้าง? 2. แต่ละมิติที่วัดมีระดับต่างกันอย่างไร? 3. นักเรียน ม.4 ระดับอ่อน-เก่ง แสดงออกต่างกันอย่างไร? จากนั้นสร้าง Rubric 4 ระดับ 4 มิติ
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technique 3: Few-Shot */}
          <div className="rounded-xl border border-card-border bg-white overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border-b border-card-border">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">3</span>
              <p className="text-sm font-semibold text-text-primary">Few-Shot Prompting — ให้ตัวอย่างก่อน</p>
            </div>
            <div className="p-4">
              <p className="text-xs text-text-secondary mb-3">
                การให้ตัวอย่าง Output ที่ต้องการก่อน (1-3 ตัวอย่าง) ช่วยให้ AI เข้าใจรูปแบบที่ต้องการได้ดีขึ้นมาก — เหมาะสำหรับงานที่ต้องการ Format เฉพาะ
              </p>
              <div className="prompt-block">
                <p className="font-semibold text-text-primary mb-1.5">Template: Few-Shot Prompt</p>
                <p>สร้างคำถาม PISA Level 3 สำหรับวิชาวิทยาศาสตร์ ในรูปแบบเดียวกับตัวอย่าง:</p>
                <p className="mt-1.5 text-blue-600">ตัวอย่าง (บริบท: น้ำท่วม):</p>
                <p>&apos;บริบท: ปี 2554 เกิดน้ำท่วมใหญ่ในจังหวัด X น้ำสูง 2 เมตร&apos;</p>
                <p>&apos;คำถาม: นักเรียนคิดว่าการตัดต้นไม้ริมแม่น้ำมีส่วนทำให้น้ำท่วมรุนแรงขึ้นหรือเปล่า? อธิบายโดยใช้หลักการทางวิทยาศาสตร์&apos;</p>
                <p className="mt-1.5">บริบทใหม่: [บริบทที่ครูกำหนด เช่น ภัยแล้ง / ขยะทะเล / PM2.5]</p>
                <p>สร้างคำถาม L3 จำนวน 2 ข้อ ในรูปแบบเดียวกัน</p>
              </div>
            </div>
          </div>

          {/* Technique 4: Iterative Refinement */}
          <div className="rounded-xl border border-card-border bg-white overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border-b border-card-border">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">4</span>
              <p className="text-sm font-semibold text-text-primary">Iterative Refinement — ปรับปรุงทีละรอบ</p>
            </div>
            <table className="w-full text-xs">
              <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
                <th className="text-left px-4 py-1.5">รอบ</th>
                <th className="text-left px-4 py-1.5">สิ่งที่ทำ</th>
                <th className="text-left px-4 py-1.5">ตัวอย่าง Prompt</th>
              </tr></thead>
              <tbody className="divide-y divide-card-border">
                {[
                  ["รอบ 1", "สร้าง Output เบื้องต้น", "สร้างแผนการสอน 5E เรื่อง [X] 1 ชั่วโมง"],
                  ["รอบ 2", "ปรับบางส่วน", "ขั้น Explore ยังสั้นเกินไป ขอให้เพิ่มกิจกรรม Inquiry 2 กิจกรรม"],
                  ["รอบ 3", "เพิ่มรายละเอียด", "เพิ่มคำถาม Guiding สำหรับนักเรียนที่ต้องการ Scaffold"],
                  ["รอบ 4", "ปรับรูปแบบ", "แปลงเป็นตารางที่พิมพ์แจกได้ ไม่เกิน 1 หน้า"],
                ].map(([round, action, prompt], i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-4 py-2 font-bold text-blue-700">{round}</td>
                    <td className="px-4 py-2 text-text-secondary">{action}</td>
                    <td className="px-4 py-2 text-text-muted font-mono text-[10px]">{prompt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Technique 5: Persona + Constraint */}
          <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">5</span>
              <p className="text-xs font-semibold text-text-primary">Persona + Constraint — บทบาท + ข้อจำกัด</p>
            </div>
            <div className="prompt-block">
              <p><span className="font-bold text-blue-600">บทบาท:</span> คุณเป็นครูวิชา[X] ที่มีประสบการณ์ 20 ปี เชี่ยวชาญการสอนนักเรียนที่มีความหลากหลาย</p>
              <p><span className="font-bold text-blue-600">งาน:</span> [งานที่ต้องการ]</p>
              <p className="mt-1"><span className="font-bold text-blue-600">ข้อจำกัด (ต้องทำตามทุกข้อ):</span></p>
              <p>□ ภาษาไทยเท่านั้น &nbsp; □ ไม่เกิน [X] คำ / [X] หน้า</p>
              <p>□ ระดับ Bloom&apos;s ไม่ต่ำกว่า [ระดับ] &nbsp; □ อ้างอิงเฉพาะแหล่งที่มั่นใจว่ามีจริง</p>
              <p className="text-blue-500">→ ถ้าไม่มั่นใจในข้อมูลส่วนไหน แจ้งให้รู้แทนการเดา</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.3.4 Prompt Template Library */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-2">2.3.4 Prompt Template Library สำหรับครู</h2>
        <p className="text-sm text-text-secondary mb-4">
          คลัง Prompt Template ที่ผ่านการทดสอบแล้ว แบ่งตามงานที่ครูทำบ่อยที่สุด — Copy ไปใช้ได้เลย ปรับส่วนที่อยู่ใน [ ] ให้ตรงกับบริบทตัวเอง
        </p>

        {/* Category 1: Teaching Plans */}
        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-3">
          <div className="px-4 py-2 bg-blue-50 border-b border-blue-100">
            <p className="text-xs font-semibold text-blue-700">หมวด 1: Templates สำหรับการวางแผนการสอน</p>
          </div>
          <div className="divide-y divide-card-border">
            {[
              {
                name: "Template 1.1 — แผนการสอน 5E",
                prompt: "คุณเป็นผู้เชี่ยวชาญออกแบบแผนการสอนวิชา[วิชา] ระดับ[ระดับ] | สร้างแผนการสอนแบบ 5E สำหรับ [หัวข้อ] ระยะเวลา [X] ชั่วโมง | นักเรียน: [จำนวน] คน มีพื้นฐาน [พื้นฐาน] อุปกรณ์ที่มี: [อุปกรณ์] | รูปแบบ: ตาราง 5 ขั้น แต่ละขั้นมี: กิจกรรม + เวลา + บทบาทครู + บทบาทนักเรียน | เพิ่ม: คำถามกระตุ้น CT อย่างน้อย 3 ข้อ + Formative Assessment ในขั้น Evaluate | ภาษา: ไทย",
              },
              {
                name: "Template 1.2 — แผนการสอน TPS",
                prompt: "สร้างกิจกรรม Think-Pair-Share เรื่อง [หัวข้อ] สำหรับ [ระดับ] [X] นาที | Think ([X]นาที): บทอ่าน PISA-style เรื่อง [บริบทจริง] + คำถาม [X] ข้อ | Pair ([X]นาที): คำถามอภิปรายคู่ Level L2-L4 | Share ([X]นาที): คำถาม Synthesis สำหรับ Class Discussion | เพิ่ม: Scaffold สำหรับนักเรียนที่ต้องการความช่วยเหลือ | บริบท: ใช้สถานการณ์ที่เกี่ยวข้องกับชีวิตนักเรียนไทย",
              },
            ].map((t) => (
              <div key={t.name} className="p-4">
                <p className="text-xs font-semibold text-text-primary mb-1.5">{t.name}</p>
                <div className="prompt-block">{t.prompt}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Category 2: Media */}
        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-3">
          <div className="px-4 py-2 bg-blue-50 border-b border-blue-100">
            <p className="text-xs font-semibold text-blue-700">หมวด 2: Templates สำหรับการสร้างสื่อ</p>
          </div>
          <div className="divide-y divide-card-border">
            {[
              {
                name: "Template 2.1 — ใบงาน Differentiated",
                prompt: "จากเนื้อหา: [วาง Content] | สร้างใบงาน 3 ชุด สำหรับนักเรียน 3 กลุ่ม เรื่อง[หัวข้อ] ระดับ[ระดับ] | Tier A (ต้องการความช่วยเหลือ): 5 ข้อ | Close-ended | มี Word Bank | Tier B (ระดับปกติ): 5 ข้อ | ผสม Open/Close | Bloom's L2-L3 | Tier C (ระดับสูง): 5 ข้อ | Open-ended | Bloom's L4-L6 | Creative | รูปแบบ: พิมพ์แจกได้ A4 | มีช่องเขียนคำตอบ | ภาษาไทย",
              },
              {
                name: "Template 2.2 — Rubric 4 ระดับ",
                prompt: "สร้าง Rubric ประเมิน[ชิ้นงาน] วิชา[วิชา] ระดับ[ระดับ] | มิติประเมิน [X] มิติ: [มิติ 1] / [มิติ 2] / [มิติ 3] / [มิติ 4] | ระดับ: 1 (ปรับปรุง) / 2 (พอใช้) / 3 (ดี) / 4 (ดีเยี่ยม) | แต่ละช่อง: อธิบายพฤติกรรมที่สังเกตได้จริง (Behavioral Anchor) ไม่ใช้คำว่า 'ดี' 'พอ' เท่านั้น | เพิ่ม: น้ำหนักคะแนน (%) | รูปแบบ: ตาราง พิมพ์แจกได้ ภาษาไทย",
              },
            ].map((t) => (
              <div key={t.name} className="p-4">
                <p className="text-xs font-semibold text-text-primary mb-1.5">{t.name}</p>
                <div className="prompt-block">{t.prompt}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Category 3: Assessment */}
        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-3">
          <div className="px-4 py-2 bg-blue-50 border-b border-blue-100">
            <p className="text-xs font-semibold text-blue-700">หมวด 3: Templates สำหรับการประเมิน</p>
          </div>
          <div className="divide-y divide-card-border">
            {[
              {
                name: "Template 3.1 — Exit Ticket",
                prompt: "สร้าง Exit Ticket สำหรับบทเรียน[หัวข้อ] ระดับ[ระดับ] 3 ข้อ | ข้อ 1: Check Understanding — 'อธิบาย [concept] ด้วยคำของตัวเอง' | ข้อ 2: Apply — 'ยกตัวอย่าง [concept] จากชีวิตจริง' | ข้อ 3: Reflect — '3-2-1: สิ่งที่เรียนรู้ 3 อย่าง / สงสัย 2 อย่าง / ทำได้เลย 1 อย่าง' | เวลาทำ: ไม่เกิน 5 นาที | รูปแบบ: พิมพ์แจก หรือตอบใน Google Form",
              },
              {
                name: "Template 3.2 — ข้อสอบ PISA-style",
                prompt: "สร้างข้อสอบ PISA-style วิชา[วิชา] เรื่อง[หัวข้อ] ระดับ[ระดับ] | บริบท: สถานการณ์จริง [บริบท] ความยาว 100-150 คำ ภาษาไทย | คำถาม 5 ข้อ: L1 (1 ข้อ): หาข้อมูลตรงจากบริบท | L2 (1 ข้อ): สรุปใจความสำคัญ | L3 (2 ข้อ): นำข้อมูลไปใช้ในสถานการณ์ใหม่ | L4 (2 ข้อ): ประเมิน ตัดสินใจ อธิบายเหตุผล | เฉลย: พร้อม Rubric 4 ระดับ",
              },
            ].map((t) => (
              <div key={t.name} className="p-4">
                <p className="text-xs font-semibold text-text-primary mb-1.5">{t.name}</p>
                <div className="prompt-block">{t.prompt}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Category 4: Communication */}
        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <div className="px-4 py-2 bg-blue-50 border-b border-blue-100">
            <p className="text-xs font-semibold text-blue-700">หมวด 4: Templates สำหรับการสื่อสารกับผู้ปกครองและรายงาน</p>
          </div>
          <div className="divide-y divide-card-border">
            {[
              {
                name: "Template 4.1 — Email ผู้ปกครอง",
                prompt: "เขียน Email ถึงผู้ปกครองนักเรียนชื่อ [ชื่อ] ชั้น [ระดับ] เรื่อง: [แจ้งเรื่อง เช่น ผลการเรียน / กิจกรรมพิเศษ] | โทน: เป็นมิตร เป็นทางการพอควร ให้เกียรติผู้ปกครอง | เนื้อหา: บอกสิ่งที่ดีของเด็กก่อน + สิ่งที่ต้องพัฒนา + ขอความร่วมมือ | ความยาว: ไม่เกิน 200 คำ | ภาษา: ไทย ที่เข้าใจง่าย | ห้ามใช้ภาษาที่ทำให้ผู้ปกครองรู้สึกถูกตำหนิ",
              },
              {
                name: "Template 4.2 — สรุปรายงานผลการเรียน",
                prompt: "เขียนสรุปพัฒนาการการเรียนรู้ของนักเรียน [ชื่อ] สำหรับรายงานผู้ปกครอง | ข้อมูลที่มี: [วางข้อมูลคะแนน/พฤติกรรม/ชิ้นงาน] | รูปแบบ: จุดแข็ง 2-3 ประการ / จุดที่ต้องพัฒนา 1-2 ประการ / คำแนะนำ | โทน: เป็นบวก สร้างสรรค์ มองอนาคต ไม่ตัดสิน | ภาษาไทย → ใช้ชื่อนักเรียนสมมติ / Anonymize ก่อน Paste ข้อมูลจริง",
              },
            ].map((t) => (
              <div key={t.name} className="p-4">
                <p className="text-xs font-semibold text-text-primary mb-1.5">{t.name}</p>
                <div className="prompt-block">{t.prompt}</div>
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
              num: "1", title: "Prompt Makeover — ปรับ Prompt ให้ดีขึ้น",
              time: "15 นาที", format: "คู่",
              goal: "ฝึกวิเคราะห์ Prompt ที่ไม่ดีและปรับปรุงด้วย CRISPE",
              steps: [
                "Bad Prompt 1: 'ช่วยทำข้อสอบวิทย์' → ปรับปรุงโดยใช้ CRISPE",
                "Bad Prompt 2: 'อธิบายการสังเคราะห์แสง' → ระบุบทบาท + ระดับ + บริบท + รูปแบบ",
                "Bad Prompt 3: 'สร้างกิจกรรมสนุกๆ' → เพิ่ม Purpose + Exclusion + Output Format",
                "แลกเปลี่ยน Prompt ที่ปรับแล้วกับคู่อื่น — ใครได้ผลลัพธ์ดีกว่า?",
                "เกณฑ์ตัดสิน Prompt ที่ดี: AI ตอบถูกต้อง ตรงบริบท ใช้ได้เลยโดยแก้น้อย",
              ],
            },
            {
              num: "2", title: "Prompt Battle — แข่งขันสร้างแผนการสอน",
              time: "20 นาที", format: "กลุ่ม 4-5 คน (แข่งกัน)",
              goal: "ฝึกสร้าง Prompt คุณภาพสูงภายใต้เวลาจำกัด",
              steps: [
                "หัวข้อกลาง (วิทยากรกำหนด): เช่น 'สอนเรื่อง [X] ให้ ม.[Y] 1 ชั่วโมง'",
                "รอบ 1 (5 นาที): แต่ละกลุ่มเขียน Prompt เต็มรูปแบบ CRISPE",
                "รอบ 2 (5 นาที): ป้อน Prompt เข้า ChatGPT/Gemini พร้อมกัน",
                "รอบ 3 (5 นาที): แต่ละกลุ่มประเมินผลลัพธ์ตนเอง: □ ถูกต้องตามเนื้อหาวิชา □ เหมาะกับระดับชั้น □ มีกิจกรรม Active Learning □ ใช้ได้จริงโดยแก้น้อยกว่า 3 จุด",
                "รอบ 4 (5 นาที): แลกเปลี่ยน Prompt กัน เรียนรู้ว่า Prompt ไหนดีกว่าและทำไม",
              ],
            },
            {
              num: "3", title: "สร้าง Personal Prompt Library",
              time: "20 นาที", format: "เดี่ยว",
              goal: "ครูกลับบ้านพร้อม Prompt Library ที่ใช้ได้จริง",
              steps: [
                "เลือกงาน 5 อย่างที่ทำบ่อยที่สุด และสร้าง Prompt Template สำหรับแต่ละงาน",
                "งานที่ 1: _________________ | Prompt Template: _________________",
                "งานที่ 2-5: ทำเช่นเดียวกัน (ครบ 5 Template)",
                "เก็บ Prompt Library ใน Google Doc หรือ Notion เพื่อใช้ต่อ",
                "ทดสอบ Prompt แต่ละอันกับ AI อย่างน้อย 1 ครั้งก่อนบันทึก",
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
            "Prompt ที่ดี = บทบาท + งาน + ข้อมูล + รูปแบบ + วัตถุประสงค์ + ข้อจำกัด (CRISPE)",
            "Chain-of-Thought เพิ่มความแม่นยำ — ขอให้ AI 'คิดออกมา' ก่อนตอบ เพิ่มความถูกต้อง 17-30%",
            "Few-Shot Prompting — ให้ตัวอย่าง 1-3 ชิ้นก่อน AI จะตรงรูปแบบที่ต้องการ",
            "Iterative Refinement — ปรับทีละรอบ ดีกว่า Prompt ยาวรอบเดียว",
            "Prompt Library ส่วนตัว — เก็บ Prompt ที่ดีไว้ใช้ซ้ำ ลดเวลาได้มาก",
          ].map((k, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-blue-50 border border-blue-100">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-text-secondary">{k}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-blue-300 bg-blue-600 p-4 text-white">
          <p className="text-xs font-bold text-blue-200 mb-1">🎯 ภารกิจต่อเนื่อง</p>
          <p className="text-sm">นำ <strong>Prompt Library 5 Template</strong> ไปทดสอบจริงในการเตรียมสอนสัปดาห์หน้า — บันทึก: Template ไหนใช้ได้ดี? ไหนต้องปรับ? ปรับอย่างไร? นำ Prompt ที่ดีที่สุด 1 อัน มาแชร์กับเพื่อนครูในโมดูล 3</p>
        </div>
      </section>

      {/* References */}
      <section className="mb-10">
        <h2 className="text-sm font-bold text-text-primary mb-3">เอกสารอ้างอิง</h2>
        <div className="rounded-xl border border-card-border bg-white p-4 space-y-2">
          {[
            "Schulhoff, S. et al. (2024). The Prompt Report: A Systematic Survey of Prompting Techniques. arXiv:2406.06608.",
            "Wei, J. et al. (2022). Chain-of-thought prompting elicits reasoning in large language models. NeurIPS 2022.",
            "Kojima, T. et al. (2022). Large language models are zero-shot reasoners. NeurIPS 2022.",
            "Brown, T. et al. (2020). Language models are few-shot learners. NeurIPS 2020.",
          ].map((ref, i) => (
            <p key={i} className="text-xs text-text-muted leading-relaxed border-l-2 border-blue-100 pl-3">{ref}</p>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-card-border">
        <Link href="/manual/module-2/2-2" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">2.2 สร้างสื่อประกอบการสอน</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <div className="text-right">
            <p className="text-[10px]">ถัดไป</p>
            <p className="font-medium text-text-secondary">โมดูล 3</p>
          </div>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
