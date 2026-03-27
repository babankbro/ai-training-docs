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

export default function Module91Page() {
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
        <span className="text-text-secondary">9.1 Action Plan 3 เดือน</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-purple-300 bg-purple-100 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-purple-200 flex items-center justify-center shrink-0">
            <Rocket className="w-6 h-6 text-purple-700" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-purple-700">โมดูล 9 · หัวข้อ 9.1</span>
              <span className="flex items-center gap-1 text-xs text-purple-500">
                <Clock className="w-3.5 h-3.5" /> 45 นาที · 6 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">Personal Action Plan 3 เดือน</h1>
            <p className="text-sm font-medium text-purple-700/80 mb-2">SMART Goals, Start Small Strategy, Resource Mapping & Accountability</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              วาง Action Plan 3 เดือนที่ทำได้จริงด้วยกรอบ Start Small, Scale Up พร้อม Accountability Partner เพื่อให้มั่นใจว่าไม่หยุดเมื่อเจออุปสรรค
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
            "เขียน SMART Goal สำหรับการนำ AI ไปใช้ในการสอนได้",
            "วาง Action Plan 3 เดือนที่ทำได้จริงตามกรอบ Start Small, Scale Up",
            "ระบุ Potential Obstacles และวิธีรับมือล่วงหน้าได้",
            "ทำ Resource Mapping เครื่องมือ เวลา และแหล่งสนับสนุนได้",
            "เลือก Accountability Partner และกำหนดการติดตามความก้าวหน้า",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center text-[10px] font-bold text-purple-700 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 9.1.1 SMART Goals */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">9.1.1 SMART Goals Framework</h2>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mb-4">
          {[
            { letter: "S", name: "Specific", desc: "ระบุให้ชัด — ทำอะไร กับใคร ที่ไหน", color: "bg-purple-50 border-purple-200 text-purple-700" },
            { letter: "M", name: "Measurable", desc: "วัดได้ — ตัวชี้วัดคืออะไร", color: "bg-blue-50 border-blue-200 text-blue-700" },
            { letter: "A", name: "Achievable", desc: "ทำได้จริง — มีทรัพยากรพอ", color: "bg-green-50 border-green-200 text-green-700" },
            { letter: "R", name: "Relevant", desc: "เกี่ยวข้อง — ตรงกับเป้าหมายการสอน", color: "bg-amber-50 border-amber-200 text-amber-700" },
            { letter: "T", name: "Time-bound", desc: "มีกำหนดเวลา — เสร็จเมื่อไร", color: "bg-red-50 border-red-200 text-red-700" },
          ].map((s) => (
            <div key={s.letter} className={`rounded-xl border p-3 text-center ${s.color}`}>
              <span className={`text-2xl font-black ${s.color.split(' ')[2]}`}>{s.letter}</span>
              <p className="text-[10px] font-bold text-text-primary mt-0.5">{s.name}</p>
              <p className="text-[10px] text-text-muted mt-0.5 leading-tight">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* 3-Month Plan */}
        <div className="space-y-2">
          <p className="text-sm font-bold text-text-primary">Action Plan 3 เดือน (30-60-90 Day Plan) — Start Small, Scale Up</p>
          {[
            {
              month: "เดือน 1", badge: "Pilot", color: "border-blue-200 bg-blue-50",
              badge_color: "bg-blue-100 text-blue-700",
              tasks: [
                "เลือก 1 วิชา + 1 ชั้นเรียน เพื่อเริ่มทดลองก่อน",
                "เลือก 1 AI Tool ที่ตัวเองสบายใจที่สุด (ChatGPT / Gemini / Claude)",
                "ออกแบบ 1 ชิ้นงาน RL/CT ขนาดเล็ก (เช่น สร้างคำถาม Exit Ticket)",
                "ทำให้สำเร็จ เก็บ Feedback นักเรียน และ Reflect",
              ],
            },
            {
              month: "เดือน 2", badge: "Expand", color: "border-purple-200 bg-purple-50",
              badge_color: "bg-purple-100 text-purple-700",
              tasks: [
                "เพิ่มอีก 1 บทเรียน (ชั้นเดิมหรือชั้นอื่น) หรือเพิ่ม Task ในบทเรียนเดิม",
                "เพิ่ม RL/CT Assessment + PISA Task อย่างน้อย 2 ชุด",
                "ลอง AI Tool อื่นที่เกี่ยวข้อง — เปรียบเทียบผล",
                "เก็บ Feedback นักเรียน ปรับปรุง และบันทึกสิ่งที่เรียนรู้",
              ],
            },
            {
              month: "เดือน 3", badge: "Scale", color: "border-green-200 bg-green-50",
              badge_color: "bg-green-100 text-green-700",
              tasks: [
                "ขยายไปยังหลายชั้นเรียนหรือหลายบทเรียน",
                "ขยายผลกับกลุ่มวิชา — แชร์ Prompt Template + AI Workflow",
                "แชร์ประสบการณ์ใน PLC ของโรงเรียน",
                "สร้างระบบและรูปแบบที่นำมาใช้ซ้ำได้",
              ],
            },
          ].map((m) => (
            <div key={m.month} className={`rounded-xl border p-4 ${m.color}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${m.badge_color}`}>{m.month}: {m.badge}</span>
              </div>
              <ul className="space-y-1">
                {m.tasks.map((t, i) => (
                  <li key={i} className="flex gap-1.5 text-xs text-text-secondary">
                    <span className="text-text-muted shrink-0">▸</span>{t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 9.1.2 Obstacles & Resources */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">9.1.2 Potential Obstacles และ Resource Mapping</h2>

        {/* Obstacles */}
        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-amber-50 border-b border-amber-100">
            <p className="text-xs font-semibold text-amber-700">อุปสรรคที่พบบ่อย + วิธีรับมือล่วงหน้า</p>
          </div>
          <div className="divide-y divide-card-border text-xs">
            {[
              { obs: "ไม่มีเวลา", solution: "วางแผนในปฏิทินให้แน่ชัด เตรียมล่วงหน้า 1 สัปดาห์" },
              { obs: "นักเรียนไม่มีแล็ปท็อป/โทรศัพท์", solution: "ใช้ AI ในการเตรียมสื่อของครู ให้นักเรียนเห็นผลลัพธ์" },
              { obs: "เพื่อนร่วมงานไม่เข้าใจ", solution: "เชิญให้ดู แสดงผลลัพธ์จริง เชิญร่วมลองด้วยกัน" },
              { obs: "ผู้บริหารไม่ยอมรับ", solution: "อธิบายด้วยข้อมูล ผลลัพธ์ สถิติ และผลของนักเรียน" },
              { obs: "ตัวเองกังวลว่าจะผิดพลาด", solution: "เริ่มเล็กๆ ตรวจสอบ ปรับปรุง ก้าวต่อไป — ผิดพลาดคือการเรียนรู้" },
            ].map((r) => (
              <div key={r.obs} className="flex gap-3 px-4 py-2.5">
                <span className="font-bold text-amber-600 w-40 shrink-0">{r.obs}</span>
                <p className="text-text-secondary">{r.solution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resource Mapping */}
        <div className="space-y-2">
          {[
            {
              type: "เครื่องมือ (Tools)", icon: "🛠️",
              items: [
                "AI Tool หลัก: ChatGPT / Gemini / Claude — เลือกที่ถนัดที่สุด",
                "AI Tool รอง: สำหรับสร้างภาพ วีดีโอ ใบงาน และ Infographic",
                "Platform นักเรียน: Google Classroom / Padlet / Miro",
              ],
              color: "border-blue-200 bg-blue-50",
            },
            {
              type: "เวลา (Time)", icon: "⏰",
              items: [
                "เวลาเตรียม (Preparation): กี่ชั่วโมงต่อสัปดาห์ที่ทำได้จริง?",
                "เวลาสอน (Implementation): กี่นาทีต่อคาบที่จะใช้ AI?",
                "เวลาตรวจสอบ (Monitoring): กี่ชั่วโมงต่อสัปดาห์สำหรับ Reflect?",
              ],
              color: "border-purple-200 bg-purple-50",
            },
            {
              type: "ความช่วยเหลือ (Support)", icon: "🤝",
              items: [
                "ใครที่ช่วยด้านเทคนิคได้เมื่อมีปัญหา?",
                "ใครที่ให้ Feedback และข้อเสนอแนะได้?",
                "กลุ่ม/ชุมชนการเรียนรู้ที่เกี่ยวข้อง (CoP, PLC)?",
              ],
              color: "border-green-200 bg-green-50",
            },
          ].map((r) => (
            <div key={r.type} className={`rounded-xl border p-3 ${r.color}`}>
              <p className="text-xs font-bold text-text-primary mb-1.5">{r.icon} {r.type}</p>
              <ul className="space-y-1">
                {r.items.map((item, i) => (
                  <li key={i} className="flex gap-1.5 text-xs text-text-secondary">
                    <span className="text-text-muted shrink-0">▸</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 9.1.3 Accountability Partner */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">9.1.3 Accountability Partner</h2>
        <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-4 mb-3">
          <p className="text-xs font-bold text-purple-700 mb-2">หน้าที่ของ Accountability Partner</p>
          <div className="space-y-1.5 text-xs text-text-secondary">
            {[
              "ถามความก้าวหน้าอย่างสม่ำเสมอ (อย่างน้อยสัปดาห์ละ 1 ครั้ง)",
              "ฟังปัญหาและให้คำแนะนำ — ไม่ใช่วิจารณ์ แต่ช่วยแก้ไข",
              "เฉลิมฉลองความสำเร็จขนาดเล็กๆ ที่เกิดขึ้น",
              "ช่วยวิเคราะห์อุปสรรคและหาทางออกร่วมกัน",
              "มั่นใจว่าเราไม่หยุดเมื่อเจอปัญหา — ก้าวต่อไปด้วยกัน",
            ].map((d, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-purple-600 shrink-0">✓</span>
                <span>{d}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-purple-200 bg-white p-4">
          <p className="text-xs font-bold text-purple-700 mb-2">เลือก Accountability Partner ที่ดี</p>
          <p className="text-xs text-text-secondary leading-relaxed">เลือกคนที่ <strong>ไว้วางใจ</strong> และ <strong>เข้าใจที่มาที่ไปของการเปลี่ยนแปลง</strong> — ไม่จำเป็นต้องเป็นครู AI อยู่แล้ว แต่ต้องพร้อมฟังและให้กำลังใจ กำหนดวันพบอย่างน้อยทุก 2 สัปดาห์</p>
        </div>
      </section>

      {/* Prompt Templates */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">Prompt Templates สำหรับ Action Plan</h2>
        <div className="space-y-3">
          {[
            {
              label: "Prompt 1: ช่วยเขียน SMART Goal",
              prompt: "ฉันเป็นครู[วิชา] ระดับ[ชั้น] อยากนำ AI ไปใช้ในการสอน | ช่วยฉันเขียน SMART Goal ที่ชัดเจนและทำได้จริงใน 3 เดือน | บริบท: [อธิบายห้องเรียนและข้อจำกัด] | ให้ผลลัพธ์เป็น: S/M/A/R/T แยกชัดเจน พร้อมตัวชี้วัดที่วัดได้จริง → ผลลัพธ์: SMART Goal พร้อมใช้",
            },
            {
              label: "Prompt 2: วิเคราะห์อุปสรรคและวางแผนรับมือ",
              prompt: "ฉันวางแผนนำ AI ไปใช้สอน [วิชา/กิจกรรม] แต่กังวลเรื่อง [อุปสรรคที่คิดไว้] | ช่วยวิเคราะห์อุปสรรคที่น่าจะเกิดขึ้นจริงและแนวทางรับมือ | เน้น: ความเป็นจริงของโรงเรียนไทย ทรัพยากรจำกัด และวิธีเริ่มเล็กๆ → ผลลัพธ์: Obstacle Map + Solution Strategy",
            },
            {
              label: "Prompt 3: สร้าง Resource Mapping",
              prompt: "ฉันต้องการทำ Resource Mapping สำหรับ Action Plan การนำ AI มาใช้สอน | สอน [วิชา] ระดับ [ชั้น] มีเวลาเตรียมสอน [จำนวน] ชั่วโมงต่อสัปดาห์ | ช่วยสร้าง Resource Checklist ที่ครอบคลุม Tools / Time / Support → ผลลัพธ์: Resource Map ที่สมจริงและทำได้",
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
          กิจกรรม Workshop (2 หัวข้อ · รวม ~45 นาที)
        </h2>
        <div className="space-y-4">
          {[
            {
              num: "1", title: "เขียน Personal Action Plan",
              time: "35 นาที", format: "เดี่ยว",
              goal: "Action Plan 3 เดือน SMART + Resource Map + Partner",
              steps: [
                "กำหนด 'What' (ผลลัพธ์ที่ต้องการ) ให้ชัดเจน (5 นาที)",
                "อธิบาย 'Why' (เหตุผลและปัญหาที่ต้องการแก้) (3 นาที)",
                "วาง 'How' (ขั้นตอนทีละเดือน: Pilot→Expand→Scale) (10 นาที)",
                "ตั้ง 'When' (Timeline + Check Points ทุก 2 สัปดาห์) (5 นาที)",
                "ตรวจสอบว่า SMART Goal ครบทั้ง S/M/A/R/T (5 นาที)",
                "ทำ Resource Mapping: Tools / Time / Support (5 นาที)",
                "เลือก Accountability Partner และนัดหมายครั้งแรก (2 นาที)",
              ],
            },
            {
              num: "2", title: "Share กับ Partner",
              time: "10 นาที", format: "คู่",
              goal: "Action Plan ผ่าน Peer Review + ได้ Accountability Partner จริง",
              steps: [
                "หาคู่ (Partner) 1 คน จากเพื่อนร่วมอบรม",
                "นำเสนอ Action Plan ของตนเอง 5 นาที",
                "ฟังข้อเสนอแนะ คำถาม และ Warm Feedback 3 นาที",
                "ปรับปรุง 1–2 จุด และตกลงเป็น Accountability Partner",
                "Exchange Contact นัดหมายพบกันทุกสัปดาห์",
              ],
            },
          ].map((ws) => (
            <div key={ws.num} className="rounded-xl border border-purple-200 bg-white overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 bg-purple-50 border-b border-purple-100">
                <span className="w-7 h-7 rounded-lg bg-purple-700 text-white text-xs font-bold flex items-center justify-center">W{ws.num}</span>
                <div>
                  <p className="text-sm font-bold text-text-primary">{ws.title}</p>
                  <p className="text-[11px] text-purple-500">{ws.time} · {ws.format}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs font-medium text-purple-700 mb-2">🎯 {ws.goal}</p>
                <ul className="space-y-1.5">
                  {ws.steps.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                      <span className="w-4 h-4 rounded bg-purple-100 text-purple-700 text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
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
          <Lightbulb className="w-4.5 h-4.5 text-purple-700" />
          Key Takeaways
        </h2>
        <div className="space-y-2">
          {[
            "Action Plan เป็นแผนการไป ไม่ใช่คำสัญญาที่แน่นอน — ปรับได้เมื่อสถานการณ์เปลี่ยน",
            "Start Small = เลือก 1 วิชา + 1 Tool + 1 Task ก่อน อย่าเปลี่ยนทุกอย่างพร้อมกัน",
            "ความล้มเหลวเป็นส่วนหนึ่งของการเรียนรู้ — ปรับแผน ทดลองใหม่ เดินหน้า",
            "Accountability Partner ช่วยให้ไม่หยุดเมื่อเจออุปสรรค — เลือกคนที่ไว้ใจได้",
            "SMART Goal ที่ดีต้องวัดได้จริงในบริบทห้องเรียน — ไม่ใช่แค่เป้าหมายลอยๆ",
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
        <Link href="/manual/module-8/8-3" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">8.3 AI Tools สร้างข้อสอบ</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <Link href="/manual/module-9/9-2" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <div className="text-right">
            <p className="text-[10px] text-text-muted">ถัดไป</p>
            <p className="font-medium">9.2 PLC ด้วย AI</p>
          </div>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
