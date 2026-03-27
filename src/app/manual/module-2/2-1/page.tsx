import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  CheckCircle2,
  Lightbulb,
  Wrench,
  Search,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function Module21Page() {
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
        <span className="text-text-secondary">2.1 สืบค้นและสังเคราะห์ความรู้</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-blue-200 flex items-center justify-center shrink-0">
            <Search className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-blue-600">โมดูล 2 · หัวข้อ 2.1</span>
              <span className="flex items-center gap-1 text-xs text-blue-500">
                <Clock className="w-3.5 h-3.5" /> 1.5 ชม. · 8 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">สืบค้นและสังเคราะห์ความรู้ด้วย AI</h1>
            <p className="text-sm font-medium text-blue-600/80 mb-2">AI-Powered Knowledge Research &amp; Synthesis</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              เรียนรู้วิธีใช้ AI Tools เพื่อสืบค้นความรู้อย่างมีระบบด้วยกรอบ SEARCH ตรวจสอบความน่าเชื่อถือด้วย SIFT และสังเคราะห์เป็น Teacher Note พร้อมสอนได้ภายใน 30 นาที
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
            "เลือก AI Tool ที่เหมาะกับงานสืบค้นแต่ละประเภทได้ (Perplexity / NotebookLM / Consensus / Elicit)",
            "ใช้กรอบ SEARCH ทั้ง 6 ขั้นตอนเพื่อสังเคราะห์ Content Knowledge สำหรับสอนได้",
            "ตรวจสอบความถูกต้องของข้อมูลจาก AI ด้วยกรอบ SIFT และเครื่องมือออนไลน์ได้",
            "สร้าง Teacher Note 1 หน้าจาก AI ที่พร้อมนำไปสอนได้ภายใน 30 นาที",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[10px] font-bold text-blue-600 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 2.1.1 AI Tools */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">2.1.1 AI Tools สำหรับสืบค้นความรู้</h2>
        <p className="text-sm text-text-secondary mb-4">
          งานวิจัยจาก McKinsey (2023) พบว่า AI ลดเวลาสืบค้นและสังเคราะห์ความรู้ได้ 40–60% แต่ต้องเลือก Tool ให้ตรงกับงาน
        </p>

        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-blue-50 border-b border-blue-100">
            <p className="text-xs font-semibold text-blue-700">เปรียบเทียบ AI Tools สำหรับสืบค้นความรู้</p>
          </div>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
                <th className="text-left px-4 py-1.5">Tool</th>
                <th className="text-left px-4 py-1.5">เหมาะกับงาน</th>
                <th className="text-left px-4 py-1.5">จุดเด่น</th>
                <th className="text-left px-4 py-1.5">ข้อจำกัด</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border">
              {[
                ["Perplexity AI", "ภาพรวมหัวข้อ + อ้างอิงแหล่งที่มา", "อ้างอิง URL ทุก Statement, ลด Hallucination", "ความลึกน้อยกว่า ChatGPT"],
                ["NotebookLM", "อ่านและสรุป PDF / เอกสารที่อัปโหลด", "อิงแหล่งที่มาเฉพาะที่อัปโหลด, ไม่ Hallucinate นอกเอกสาร", "ต้องมีเอกสารก่อน"],
                ["Consensus", "ค้นหางานวิจัย + สรุป Evidence", "ดึงข้อมูลจาก Peer-reviewed Papers โดยตรง", "เฉพาะงานวิจัยภาษาอังกฤษ"],
                ["Elicit", "วิเคราะห์และสรุปงานวิจัยหลายชิ้น", "สร้าง Literature Summary อัตโนมัติ", "เน้นวิทยาศาสตร์และสังคมศาสตร์"],
                ["Google AI Overviews", "คำถามทั่วไปที่ต้องการคำตอบเร็ว", "ฟรี ใช้งานง่าย อ้างอิง Web", "ความลึกน้อย ควรยืนยันข้อมูล"],
                ["ChatGPT / Gemini", "สังเคราะห์ เขียน จัดรูปแบบ Content", "ยืดหยุ่นสูง ปรับตามบริบทได้มาก", "Hallucination สูงถ้าไม่ขอ Citation"],
              ].map(([tool, use, pro, con], i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-2.5 font-semibold text-blue-700">{tool}</td>
                  <td className="px-4 py-2.5 text-text-secondary">{use}</td>
                  <td className="px-4 py-2.5 text-green-700">{pro}</td>
                  <td className="px-4 py-2.5 text-text-muted">{con}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 2.1.2 NotebookLM Deep Dive */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">2.1.2 NotebookLM: สืบค้นจากเอกสารของตัวเอง</h2>
        <p className="text-sm text-text-secondary mb-4">
          NotebookLM (Google) ช่วยให้ครูอัปโหลดตำรา เอกสารหลักสูตร หรืองานวิจัย แล้วถาม AI โดยตอบอิงเฉพาะเนื้อหาที่อัปโหลด — ไม่ Hallucinate นอกเอกสาร
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {[
            { title: "อัปโหลดเอกสาร", desc: "PDF, Google Doc, YouTube URL, Web URL รองรับสูงสุด 50 ไฟล์ / Notebook", icon: "📄" },
            { title: "ถามคำถามเจาะลึก", desc: "ถามได้ไม่จำกัด AI อ้างอิงกลับไปยังหน้าในเอกสารที่ตอบ", icon: "💬" },
            { title: "สร้าง Audio Podcast", desc: "ให้ AI สรุปเนื้อหาเป็น Podcast 2 คนคุย ครูฟังหรือส่งให้นักเรียนฟัง", icon: "🎙️" },
            { title: "สร้าง Study Guide", desc: "สรุป Key Points + FAQ + Timeline จากเอกสารอัตโนมัติ", icon: "📋" },
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
        <div className="rounded-xl border border-blue-200 bg-white p-4">
          <p className="text-xs font-bold text-blue-700 mb-2">💡 Workflow: ใช้ NotebookLM เตรียมสอน</p>
          <div className="flex flex-wrap gap-2 text-xs">
            {["อัปโหลด PDF ตำราหลัก", "ถาม: Key Concepts 5 ข้อที่ควรสอน", "ถาม: Misconceptions ที่พบบ่อย", "ถาม: ตัวอย่างที่เกี่ยวกับชีวิตนักเรียนไทย", "Export เป็น Teacher Note"].map((s, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-blue-600 text-white text-[9px] font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                <span className="text-text-secondary">{s}</span>
                {i < 4 && <ArrowRight className="w-3 h-3 text-blue-300" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.1.3 SEARCH Framework */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-2">2.1.3 กระบวนการสังเคราะห์ความรู้ด้วย AI: SEARCH Framework</h2>
        <p className="text-sm text-text-secondary mb-4">
          กรอบ SEARCH ช่วยให้ครูได้ Content Knowledge ที่ลึก แม่นยำ และพร้อมใช้สอน ไม่ใช่แค่ถาม AI แล้วนำคำตอบไปใช้เลย
        </p>

        <div className="rounded-xl border border-blue-200 bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-blue-50 border-b border-blue-100">
            <p className="text-xs font-semibold text-blue-700">กรอบ SEARCH: 6 ขั้นตอนสังเคราะห์ความรู้ด้วย AI</p>
          </div>
          <div className="divide-y divide-card-border">
            {[
              { step: "S — Scope", th: "กำหนดขอบเขต", desc: "ระบุหัวข้อ ระดับชั้น และสิ่งที่ต้องการรู้อย่างชัดเจน", prompt: "ฉันจะสอนเรื่อง [หัวข้อ] ให้นักเรียน ม.[X] ในประเทศไทย ต้องการความรู้เรื่องอะไรบ้าง?" },
              { step: "E — Explore", th: "สำรวจภาพรวม", desc: "สำรวจภาพรวมด้วย AI (Overview + Key Concepts)", prompt: "อธิบาย [Concept หลัก] อย่างละเอียด พร้อมตัวอย่างที่เกิดขึ้นในประเทศไทย" },
              { step: "A — Ask Deep", th: "เจาะถามเชิงลึก", desc: "ถามประเด็นเฉพาะ Misconceptions และตัวอย่างสำหรับสอน", prompt: "ความเข้าใจผิดที่พบบ่อยของนักเรียนเรื่อง [X] คืออะไร? และวิธีแก้ไขในการสอน?" },
              { step: "R — Review Sources", th: "ตรวจสอบแหล่งอ้างอิง", desc: "ตรวจสอบแหล่งอ้างอิงที่ AI ให้มาว่ามีจริง", prompt: "ตรวจสอบ DOI ของงานวิจัยที่ AI อ้างใน Google Scholar / DOI.org" },
              { step: "C — Cross-check", th: "เปรียบเทียบแหล่งอื่น", desc: "เปรียบเทียบกับแหล่งอื่นอย่างน้อย 2 แหล่ง", prompt: "เปรียบเทียบกับรายงาน IPCC / ตำราหลัก / งานวิจัยใน Google Scholar" },
              { step: "H — Harvest", th: "สรุปเป็น Content", desc: "สรุปและจัดระเบียบเป็น Teacher Note พร้อมสอน", prompt: "สรุปทุกสิ่งที่คุยกันเป็น Teacher Note ภาษาไทย ไม่เกิน 1 หน้า A4 (Key Concepts / ตัวอย่าง / Misconceptions / คำถาม CT / แหล่งอ้างอิง)" },
            ].map((s) => (
              <div key={s.step} className="px-4 py-3">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-bold text-blue-700 w-28 shrink-0 pt-0.5">{s.step}</span>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-text-primary">{s.th} — {s.desc}</p>
                    <div className="mt-1.5 rounded-lg bg-slate-50 border border-card-border px-3 py-1.5">
                      <p className="text-[11px] text-text-muted font-mono">{s.prompt}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEARCH Example */}
        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <div className="px-4 py-2 bg-slate-50 border-b border-card-border">
            <p className="text-xs font-semibold text-text-primary">ตัวอย่างการใช้ SEARCH: วิชาวิทยาศาสตร์ เรื่องการเปลี่ยนแปลงสภาพภูมิอากาศ</p>
          </div>
          <table className="w-full text-xs">
            <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
              <th className="text-left px-4 py-1.5 w-24">ขั้น</th>
              <th className="text-left px-4 py-1.5">Prompt ที่ใช้จริง</th>
              <th className="text-left px-4 py-1.5">ผลลัพธ์ที่ได้</th>
            </tr></thead>
            <tbody className="divide-y divide-card-border">
              {[
                ["S — Scope", "ฉันจะสอนเรื่อง Climate Change ให้นักเรียน ม.4 ในประเทศไทย ต้องการความรู้เรื่องอะไรบ้าง?", "List 8 หัวข้อหลัก + แนะนำลำดับการสอน"],
                ["E — Explore", "อธิบาย Greenhouse Effect อย่างละเอียด พร้อมตัวอย่างที่เกิดขึ้นในประเทศไทย", "อธิบายพร้อมตัวอย่างเฉพาะบริบทไทย"],
                ["A — Ask Deep", "ความเข้าใจผิดที่พบบ่อยของนักเรียนเรื่อง Ozone กับ Climate Change คืออะไร?", "Misconceptions 5 ข้อ + วิธีแก้ไขในการสอน"],
                ["R — Review", "ตรวจสอบ DOI ของงานวิจัยที่ AI อ้างใน Perplexity", "พบว่า 4/5 แหล่งมีอยู่จริง 1 แหล่งไม่มี"],
                ["C — Cross-check", "เปรียบเทียบกับ IPCC Report 2023 บน Google Scholar", "ข้อมูลตรงกัน เพิ่มตัวเลขล่าสุดจาก IPCC"],
                ["H — Harvest", "สรุปเป็น Teacher Note 1 หน้าสำหรับสอน ม.4 ภาคเรียน 1", "Teacher Note พร้อมใช้สอนได้เลย"],
              ].map(([step, prompt, result], i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-2 font-semibold text-blue-700">{step}</td>
                  <td className="px-4 py-2 text-text-secondary font-mono text-[11px]">{prompt}</td>
                  <td className="px-4 py-2 text-green-700">{result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 2.1.4 SIFT Framework */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-lg font-bold text-text-primary mb-2">
          <ShieldCheck className="w-4.5 h-4.5 text-blue-600" />
          2.1.4 ประเมินและตรวจสอบความน่าเชื่อถือจาก AI
        </h2>
        <p className="text-sm text-text-secondary mb-4">
          ทักษะสำคัญที่สุดในยุค AI คือ 'รู้ว่าอะไรเชื่อได้' — ครูต้องพัฒนาทักษะนี้เพื่อใช้เองและเพื่อสอนนักเรียน
        </p>

        <div className="rounded-xl border border-blue-200 bg-white overflow-hidden mb-4">
          <div className="px-4 py-2 bg-blue-50 border-b border-blue-100">
            <p className="text-xs font-semibold text-blue-700">SIFT Framework: ตรวจสอบข้อมูลจาก AI ใน 4 ขั้น</p>
          </div>
          <table className="w-full text-xs">
            <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
              <th className="text-left px-4 py-1.5">ขั้น SIFT</th>
              <th className="text-left px-4 py-1.5">วิธีนำไปใช้กับข้อมูลจาก AI</th>
            </tr></thead>
            <tbody className="divide-y divide-card-border">
              {[
                ["S — Stop (หยุดก่อน)", "ก่อนแชร์หรือใช้ข้อมูลจาก AI — หยุด! อย่าเพิ่งเชื่อแม้ดูน่าเชื่อถือ"],
                ["I — Investigate the Source", "ค้นหาชื่อผู้เขียน/งานวิจัยที่ AI อ้างอิงใน Google Scholar หรือ DOI.org"],
                ["F — Find Better Coverage", "ค้นหาข้อมูลเดียวกันจากแหล่งอื่นอีกอย่างน้อย 2 แหล่ง"],
                ["T — Trace Claims (ตามรอยคำอ้าง)", "ถ้า AI อ้างสถิติ ตามหาแหล่งต้นฉบับ ไม่ใช่แค่เชื่อตัวเลข"],
              ].map(([step, desc], i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-2.5 font-semibold text-blue-700 w-48">{step}</td>
                  <td className="px-4 py-2.5 text-text-secondary">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Checklist */}
        <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4 mb-4">
          <p className="text-xs font-bold text-blue-700 mb-2">✅ Checklist: ก่อนนำข้อมูลจาก AI ไปใช้สอน</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-text-secondary">
            {[
              "ตรวจสอบแหล่งอ้างอิงที่ AI ให้มา — มีอยู่จริงหรือเปล่า? (ค้นใน Google Scholar)",
              "ปีที่พิมพ์ — ข้อมูลยังทันสมัยหรือเปล่า? (วิทยาศาสตร์/เทคโนโลยี ไม่เกิน 5 ปี)",
              "เปรียบเทียบกับแหล่งอื่น — ข้อมูลสอดคล้องกันหรือเปล่า?",
              "ตัวเลขสถิติ — ตามรอยหาแหล่งต้นฉบับได้หรือเปล่า?",
              "บริบทไทย — ข้อมูลจากต่างประเทศใช้ได้กับนักเรียนไทยหรือต้องปรับ?",
              "ถามนักเรียนได้ — ถ้านักเรียนถามแหล่งที่มา ครูตอบได้หรือเปล่า?",
            ].map((c, i) => (
              <div key={i} className="flex items-start gap-1.5">
                <span className="text-blue-400 shrink-0 mt-0.5">□</span>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Verification tools */}
        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <div className="px-4 py-2 bg-slate-50 border-b border-card-border">
            <p className="text-xs font-semibold text-text-primary">เครื่องมือตรวจสอบข้อมูลออนไลน์ (ฟรี)</p>
          </div>
          <table className="w-full text-xs">
            <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
              <th className="text-left px-4 py-1.5">เครื่องมือ</th>
              <th className="text-left px-4 py-1.5">ใช้ทำอะไร</th>
              <th className="text-left px-4 py-1.5">URL</th>
            </tr></thead>
            <tbody className="divide-y divide-card-border">
              {[
                ["Google Scholar", "ค้นงานวิจัยจริง ตรวจสอบ Citation", "scholar.google.com"],
                ["DOI.org", "ตรวจสอบว่า DOI ที่ AI ให้มีอยู่จริง", "doi.org"],
                ["Semantic Scholar", "Open Access งานวิจัย ฟรี", "semanticscholar.org"],
                ["Snopes / AFP Fact Check", "ตรวจสอบข่าว/ข้อเท็จจริงทั่วไป", "snopes.com · factcheck.afp.com"],
                ["TinEye", "Reverse Image ตรวจสอบรูปภาพว่ามาจากไหน", "tineye.com"],
              ].map(([tool, use, url], i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-2 font-semibold text-blue-700">{tool}</td>
                  <td className="px-4 py-2 text-text-secondary">{use}</td>
                  <td className="px-4 py-2 text-text-muted font-mono">{url}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
              num: "1", title: "SEARCH Sprint — สร้าง Teacher Note ใน 20 นาที",
              time: "20 นาที", format: "เดี่ยว ใช้คอมพิวเตอร์/มือถือ",
              goal: "ครูได้ Teacher Note พร้อมใช้จริงกลับไปสอน",
              steps: [
                "ขั้น S (3 นาที): กำหนดหัวข้อที่จะสอนในเทอมหน้า 1 หัวข้อ → พิมพ์ Scope Prompt",
                "ขั้น E+A (10 นาที): สำรวจและเจาะถามประเด็นเฉพาะ → ถามอย่างน้อย 3 คำถามเชิงลึก (Misconceptions, Examples)",
                "ขั้น R+C (4 นาที): ตรวจสอบ 1 แหล่งอ้างอิงที่ AI ให้มา → ค้นใน Google Scholar",
                "ขั้น H (3 นาที): ขอ AI สรุปเป็น Teacher Note 1 หน้า → บันทึกหรือ Copy ไว้ใช้จริง",
                "Reflection: บอกเพื่อนข้างๆ — ข้อมูลไหนตรวจสอบแล้วถูก? ไหนผิด?",
              ],
            },
            {
              num: "2", title: "Fact-check Challenge — ล่าข้อมูลผิด",
              time: "15 นาที", format: "คู่ (แข่งกัน)",
              goal: "ฝึกทักษะตรวจสอบ Hallucination จาก AI",
              steps: [
                "ถาม ChatGPT หัวข้อวิชาการที่คุ้นเคย ขอให้อ้างอิงงานวิจัย 3 ชิ้น",
                "แต่ละคนตรวจสอบคนละ 3 แหล่ง ใน Google Scholar / DOI.org",
                "นับว่ามีจริงกี่แหล่ง ผิดกี่แหล่ง บันทึกในตาราง",
                "เปรียบเทียบกับคู่ — ใครเจอ Hallucination มากกว่า?",
              ],
            },
            {
              num: "3", title: "AI Research Workflow — ออกแบบสำหรับวิชาตัวเอง",
              time: "20 นาที", format: "เดี่ยว → แลกเปลี่ยนกลุ่ม 3 คน",
              goal: "ออกแบบ Workflow สืบค้นด้วย AI ที่ใช้ได้จริงในชีวิตประจำวัน",
              steps: [
                "ออกแบบ 'Personal AI Research Workflow' สำหรับวิชาที่สอน",
                "ตอบคำถาม: หัวข้อที่มักต้องค้นคว้าบ่อย / AI Tool หลัก / AI Tool สำรอง / วิธีตรวจสอบข้อมูล / เวลาที่ประหยัดได้ต่อสัปดาห์",
                "แลกเปลี่ยน Workflow กับกลุ่ม — แนะนำปรับปรุง 1 ข้อ",
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
            "AI เปลี่ยน Research Workflow — จาก 3 ชั่วโมงเหลือ 30 นาที แต่ต้องตรวจสอบเสมอ",
            "เลือก Tool ตามงาน — Perplexity สำหรับ Overview, NotebookLM สำหรับ PDF, Consensus สำหรับงานวิจัย",
            "ใช้กรอบ SEARCH — Scope → Explore → Ask → Review → Cross-check → Harvest",
            "ตรวจสอบด้วย SIFT ทุกครั้ง — Stop, Investigate, Find, Trace",
            "AI Hallucination เกิดได้เสมอ — ตรวจ DOI ทุก Reference ก่อนใช้สอน",
          ].map((k, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-blue-50 border border-blue-100">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-text-secondary">{k}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-blue-300 bg-blue-600 p-4 text-white">
          <p className="text-xs font-bold text-blue-200 mb-1">🎯 ภารกิจต่อเนื่อง</p>
          <p className="text-sm">ใช้กรอบ SEARCH สืบค้นหัวข้อที่จะสอนในเทอมหน้า <strong>1 หัวข้อ</strong> บันทึก Teacher Note ที่ได้ และตรวจสอบ Reference อย่างน้อย 2 แหล่ง — นำ Teacher Note และ Workflow มาแชร์ในหัวข้อ 2.2</p>
        </div>
      </section>

      {/* References */}
      <section className="mb-10">
        <h2 className="text-sm font-bold text-text-primary mb-3">เอกสารอ้างอิง</h2>
        <div className="rounded-xl border border-card-border bg-white p-4 space-y-2">
          {[
            "McKinsey & Company. (2023). The economic potential of generative AI. McKinsey Global Institute.",
            "OECD. (2023). TALIS 2023 Results. Teaching and Learning International Survey.",
            "Caulfield, M. (2019). SIFT (The Four Moves). Hapgood. Digital Polarization Initiative.",
            "Bail, C. A. (2024). Can generative AI improve social science? PNAS, 121(21), e2314021121.",
            "Lo, C. K. (2023). What is the impact of ChatGPT on education? Education Sciences, 13(4), 410.",
          ].map((ref, i) => (
            <p key={i} className="text-xs text-text-muted leading-relaxed border-l-2 border-blue-100 pl-3">{ref}</p>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-card-border">
        <Link href="/manual/module-1/1-3" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">1.3 จริยธรรม AI และ Policy</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <Link href="/manual/module-2/2-2" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <div className="text-right">
            <p className="text-[10px] text-text-muted">ถัดไป</p>
            <p className="font-medium">2.2 สร้างสื่อประกอบการสอน</p>
          </div>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
