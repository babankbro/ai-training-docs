import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  BookOpen,
  AlertTriangle,
  Lightbulb,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Shield,
} from "lucide-react";

export default function Module12Page() {
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
        <span className="text-text-secondary">1.2 ประเภทและเครื่องมือ AI</span>
      </div>

      {/* Hero Header */}
      <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-indigo-200 flex items-center justify-center shrink-0">
            <Cpu className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-indigo-600">โมดูล 1 · หัวข้อ 1.2</span>
              <span className="flex items-center gap-1 text-xs text-indigo-500">
                <Clock className="w-3.5 h-3.5" /> 1 ชม. · 12 หน้า
              </span>
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">ประเภทและเครื่องมือ AI สำหรับครู</h1>
            <p className="text-sm font-medium text-indigo-600/80 mb-2">AI Types, Tools Taxonomy & SAFE-T Evaluation Framework</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              จำแนก AI 4 แบบ (Capability / Modality / Function / Access) รู้จัก AI Tools กว่า 30 รายการแยกตามประเภทงาน และประเมินเครื่องมือด้วยกรอบ SAFE-T ก่อนนำไปใช้จริง
            </p>
          </div>
        </div>
      </div>

      {/* Learning Outcomes */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-base font-bold text-text-primary mb-3">
          <CheckCircle2 className="w-4 h-4 text-indigo-600" />
          ผลลัพธ์การเรียนรู้
        </h2>
        <ul className="space-y-2">
          {[
            "จำแนก AI ตาม 4 มิติ (Capability / Modality / Function / Access Model) ได้",
            "เลือก AI Tool ที่เหมาะกับงานที่ต้องการได้จากตาราง AI Tools แยกตามประเภทงาน",
            "ประเมิน AI Tool ก่อนใช้งานด้วยกรอบ SAFE-T ได้",
            "ออกแบบ AI Toolkit ส่วนตัวที่เหมาะกับวิชาและระดับที่สอนได้",
            "ระบุ AI Tools เฉพาะสำหรับครู (MagicSchool, Curipod, Diffit) และใช้ได้ถูกจุดประสงค์",
          ].map((o, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <span className="w-5 h-5 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center text-[10px] font-bold text-indigo-600 shrink-0 mt-0.5">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* 1.2.1 Classification Systems */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">1.2.1 การจำแนกประเภท AI — 4 มิติ</h2>

        {/* By Capability */}
        <div className="rounded-xl border border-indigo-200 bg-white overflow-hidden mb-3">
          <div className="px-4 py-2 bg-indigo-50 border-b border-indigo-100">
            <p className="text-xs font-semibold text-indigo-700">แบบที่ 1: จำแนกตาม "ความสามารถ" (Capability)</p>
          </div>
          <div className="grid grid-cols-2 gap-0 divide-x divide-card-border text-xs">
            <div className="p-3">
              <p className="font-bold text-text-primary mb-1">Narrow AI (ANI)</p>
              <p className="text-text-secondary mb-1">ทำได้เฉพาะงานที่ฝึกมาเท่านั้น แม้ดูเหมือน "รู้ทุกอย่าง"</p>
              <p className="text-text-muted text-[10px]">ตัวอย่าง: ChatGPT, Gemini — เก่งภาษา แต่ทำงานศิลปะไม่ได้</p>
            </div>
            <div className="p-3">
              <p className="font-bold text-text-primary mb-1">AGI (ยังไม่มีจริง)</p>
              <p className="text-text-secondary mb-1">AI ที่ฉลาดเท่ามนุษย์ในทุกด้าน</p>
              <p className="text-text-muted text-[10px]">ยังเป็นเป้าหมายที่นักวิทยาศาสตร์กำลังวิจัย ยังไม่มีกำหนดเวลา</p>
            </div>
          </div>
        </div>

        {/* By Modality */}
        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-3">
          <div className="px-4 py-2 bg-indigo-50 border-b border-indigo-100">
            <p className="text-xs font-semibold text-indigo-700">แบบที่ 2: จำแนกตาม "ประเภทข้อมูล" (Modality)</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
                <th className="text-left px-3 py-2">ประเภท</th>
                <th className="text-left px-3 py-2">Input</th>
                <th className="text-left px-3 py-2">Output</th>
                <th className="text-left px-3 py-2">ตัวอย่าง</th>
              </tr></thead>
              <tbody className="divide-y divide-card-border">
                {[
                  ["Text AI","ข้อความ","ข้อความ","ChatGPT, Gemini, Claude"],
                  ["Image AI","รูปภาพ/คำอธิบาย","รูปภาพ","Midjourney, DALL-E, Canva AI"],
                  ["Audio AI","เสียง","ข้อความ/เสียง","Whisper, ElevenLabs, Suno"],
                  ["Video AI","วิดีโอ/คำอธิบาย","วิดีโอ","Sora, Runway, Kling"],
                  ["Code AI","คำอธิบาย/โค้ด","โค้ด","GitHub Copilot, Cursor"],
                  ["Multimodal AI","หลายประเภท","หลายประเภท","GPT-4o, Gemini Ultra"],
                ].map(([t,i,o,e],idx)=>(
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="px-3 py-2 font-medium text-text-primary">{t}</td>
                    <td className="px-3 py-2 text-text-secondary">{i}</td>
                    <td className="px-3 py-2 text-text-secondary">{o}</td>
                    <td className="px-3 py-2 text-text-muted">{e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* By Function */}
        <div className="rounded-xl border border-card-border bg-white overflow-hidden mb-3">
          <div className="px-4 py-2 bg-indigo-50 border-b border-indigo-100">
            <p className="text-xs font-semibold text-indigo-700">แบบที่ 3: จำแนกตาม "ลักษณะการทำงาน" (Function)</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
                <th className="text-left px-3 py-2">ลักษณะ</th>
                <th className="text-left px-3 py-2">ตัวอย่างในการสอน</th>
              </tr></thead>
              <tbody className="divide-y divide-card-border">
                {[
                  ["Generative — สร้างเนื้อหาใหม่","ChatGPT เขียนแผนการสอน, DALL-E สร้างรูปประกอบ"],
                  ["Analytical — วิเคราะห์/สรุป","AI สรุปงานเขียนนักเรียน, วิเคราะห์คะแนน"],
                  ["Conversational — สนทนาโต้ตอบ","AI Chatbot ตอบคำถามนักเรียน, Virtual Tutor"],
                  ["Assistive — ช่วยงานซ้ำๆ","Grammarly ตรวจไวยากรณ์, Auto-caption ถอดเสียง"],
                  ["Predictive — ทำนายผลลัพธ์","ระบบเตือนนักเรียนเสี่ยงหล่น, แนะนำการบ้านเพิ่มเติม"],
                  ["Adaptive — ปรับตามผู้เรียน","Khan Academy AI, Duolingo ปรับระดับยากง่าย"],
                ].map(([fn,ex],i)=>(
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-3 py-2 font-medium text-text-primary">{fn}</td>
                    <td className="px-3 py-2 text-text-secondary">{ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* By Access */}
        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <div className="px-4 py-2 bg-indigo-50 border-b border-indigo-100">
            <p className="text-xs font-semibold text-indigo-700">แบบที่ 4: จำแนกตาม "การเข้าถึง" (Access Model)</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
                <th className="text-left px-3 py-2">โมเดล</th>
                <th className="text-left px-3 py-2">ลักษณะ</th>
                <th className="text-left px-3 py-2">ตัวอย่าง</th>
              </tr></thead>
              <tbody className="divide-y divide-card-border">
                {[
                  ["Free / Freemium","ใช้ฟรี มีขีดจำกัด","ChatGPT Free, Gemini Basic, Canva Free"],
                  ["Subscription","จ่ายรายเดือน/ปี","ChatGPT Plus, Copilot Pro, Adobe Firefly"],
                  ["API-based","จ่ายตามการใช้งาน","OpenAI API, Google AI API, Anthropic API"],
                  ["Open Source","โค้ดเปิดเผย ติดตั้งเองได้","Llama 3, Mistral, Stable Diffusion"],
                  ["Built-in","ฝังในซอฟต์แวร์ที่ใช้อยู่","Google Workspace AI, Microsoft Copilot in Office"],
                ].map(([m,d,e],i)=>(
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-3 py-2 font-medium text-text-primary">{m}</td>
                    <td className="px-3 py-2 text-text-secondary">{d}</td>
                    <td className="px-3 py-2 text-text-muted">{e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 1.2.2 AI Tools by Task */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">1.2.2 AI Tools แยกตามประเภทงาน</h2>
        <p className="text-sm text-text-secondary mb-4">ปัจจุบันมี AI Tool มากกว่า 10,000 รายการ — เลือกใช้ตามงานที่ต้องการ ไม่ใช่ตามกระแส</p>
        <div className="space-y-3">
          {[
            {
              group: "กลุ่มที่ 1: AI สำหรับ 'สร้างและเขียน' เนื้อหา",
              tools: [
                {name:"ChatGPT (OpenAI)",use:"เขียนแผนการสอน, อธิบายแนวคิด, สรุปบทเรียน",pro:"ตอบได้หลากหลาย ภาษาไทยดี",con:"อาจ Hallucinate ข้อมูลอาจไม่ update",for:"ครูทุกวิชา"},
                {name:"Gemini (Google)",use:"ค้นคว้า เชื่อมกับ Google Docs/Drive",pro:"ดึงข้อมูล Real-time จาก Google",con:"บางครั้งยาวเกินไป",for:"ครูที่ใช้ Google Workspace"},
                {name:"Claude (Anthropic)",use:"เขียนเนื้อหายาว วิเคราะห์เอกสาร",pro:"อ่านไฟล์ได้ ตอบยาวแม่นยำ",con:"ไม่มี Image Generation",for:"ครูที่ต้องเขียนเนื้อหาวิชาการ"},
                {name:"Microsoft Copilot",use:"เขียนงานใน Word/PowerPoint/Excel",pro:"ฝังใน Office ใช้ได้เลย",con:"ต้องมี Microsoft 365",for:"ครูที่ใช้ Microsoft Office"},
              ],
            },
            {
              group: "กลุ่มที่ 2: AI สำหรับ 'ออกแบบสื่อ' ภาพและ Presentation",
              tools: [
                {name:"Canva AI",use:"Infographic, Poster, Slide",pro:"ใช้ง่าย มี Template มาก",con:"Free มีลายน้ำ",for:"ครูทุกคน"},
                {name:"Gamma.app",use:"สร้าง Presentation จากข้อความ",pro:"สร้าง Slide อัตโนมัติ",con:"รูปแบบจำกัด",for:"ครูที่ต้องทำ Slide เร็ว"},
                {name:"Adobe Firefly",use:"สร้างรูปจาก Prompt",pro:"คุณภาพสูง Safe for education",con:"ต้องสมัคร Adobe",for:"ครูศิลปะ/ครูที่ใช้ Adobe"},
                {name:"DALL-E 3",use:"สร้างรูปภาพประกอบ",pro:"สร้างรูปจาก Text ได้ดี",con:"อาจไม่ตรง Prompt 100%",for:"ครูที่ต้องการภาพประกอบ"},
              ],
            },
            {
              group: "กลุ่มที่ 3: AI สำหรับ 'เสียง วิดีโอ และถอดความ'",
              tools: [
                {name:"Whisper (OpenAI)",use:"ถอดเสียงเป็นข้อความ",pro:"แม่นยำสูง รองรับภาษาไทย",con:"ต้องติดตั้งเอง",for:"ครูที่ต้องถอดความบันทึกเสียง"},
                {name:"Otter.ai",use:"บันทึกและถอดความการประชุม",pro:"Auto-summary ดี",con:"ไทยยังไม่สมบูรณ์",for:"ครูที่ประชุม/อบรมบ่อย"},
                {name:"ElevenLabs",use:"แปลงข้อความเป็นเสียง",pro:"เสียงฟังดูเป็นธรรมชาติ",con:"ภาษาไทยยังจำกัด",for:"ครูที่สร้างสื่อเสียง"},
                {name:"Suno / Udio",use:"สร้างเพลงจาก Prompt",pro:"สร้างเพลงได้จริง",con:"อาจมีปัญหา Copyright",for:"ครูดนตรี/สร้างบรรยากาศ"},
              ],
            },
          ].map((g) => (
            <div key={g.group} className="rounded-xl border border-card-border bg-white overflow-hidden">
              <div className="px-4 py-2 bg-indigo-50 border-b border-indigo-100">
                <p className="text-xs font-semibold text-indigo-700">{g.group}</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
                    <th className="text-left px-3 py-2">เครื่องมือ</th>
                    <th className="text-left px-3 py-2">ใช้ทำอะไร</th>
                    <th className="text-left px-3 py-2">จุดเด่น</th>
                    <th className="text-left px-3 py-2">ข้อจำกัด</th>
                    <th className="text-left px-3 py-2">เหมาะกับ</th>
                  </tr></thead>
                  <tbody className="divide-y divide-card-border">
                    {g.tools.map((t,i)=>(
                      <tr key={i} className="hover:bg-slate-50">
                        <td className="px-3 py-2 font-medium text-text-primary whitespace-nowrap">{t.name}</td>
                        <td className="px-3 py-2 text-text-secondary">{t.use}</td>
                        <td className="px-3 py-2 text-green-700">{t.pro}</td>
                        <td className="px-3 py-2 text-amber-700">{t.con}</td>
                        <td className="px-3 py-2 text-text-muted">{t.for}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 1.2.3 SAFE-T Framework */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-3">1.2.3 กรอบ SAFE-T ประเมิน AI Tool ก่อนใช้งาน</h2>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mb-4">
          {[
            {letter:"S",name:"Safety",thai:"ความปลอดภัย",q:"ปลอดภัยสำหรับนักเรียนไหม? มี Content Filter?",color:"bg-blue-50 border-blue-200 text-blue-700"},
            {letter:"A",name:"Accuracy",thai:"ความถูกต้อง",q:"ผลลัพธ์ถูกต้องแม่นยำแค่ไหน? Hallucinate บ่อยไหม?",color:"bg-green-50 border-green-200 text-green-700"},
            {letter:"F",name:"Free/Cost",thai:"ค่าใช้จ่าย",q:"ฟรีหรือต้องจ่าย? นักเรียนเข้าถึงได้ไหม?",color:"bg-amber-50 border-amber-200 text-amber-700"},
            {letter:"E",name:"Ease",thai:"ใช้งานง่าย",q:"ครูและนักเรียนใช้ได้เลยหรือต้องเรียนรู้นาน?",color:"bg-orange-50 border-orange-200 text-orange-700"},
            {letter:"T",name:"Teaching Fit",thai:"เหมาะกับการสอน",q:"ตรงกับวัตถุประสงค์การเรียนรู้ของวิชาที่สอนไหม?",color:"bg-violet-50 border-violet-200 text-violet-700"},
          ].map(s=>(
            <div key={s.letter} className={`rounded-xl border p-3 text-center ${s.color}`}>
              <span className="text-2xl font-black">{s.letter}</span>
              <p className="text-[10px] font-bold text-text-primary mt-0.5">{s.name}</p>
              <p className="text-[10px] text-text-muted mt-0.5 leading-tight">{s.thai}</p>
              <p className="text-[9px] text-text-muted mt-1 leading-tight">{s.q}</p>
            </div>
          ))}
        </div>

        {/* Match-Making Table */}
        <div className="rounded-xl border border-card-border bg-white overflow-hidden">
          <div className="px-4 py-2 bg-indigo-50 border-b border-indigo-100">
            <p className="text-xs font-semibold text-indigo-700">ตาราง Match-Making: งาน → AI Tool ที่เหมาะสมที่สุด</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead><tr className="border-b border-card-border bg-slate-50 text-text-muted font-medium">
                <th className="text-left px-3 py-2">งานที่ต้องการ</th>
                <th className="text-left px-3 py-2">AI Tool แนะนำ</th>
                <th className="text-left px-3 py-2">เหตุผล</th>
              </tr></thead>
              <tbody className="divide-y divide-card-border">
                {[
                  ["เขียนแผนการสอน ม.3 คณิตศาสตร์","ChatGPT / MagicSchool AI","เข้าใจบริบทการสอน ปรับแต่งได้"],
                  ["สร้าง Infographic กระบวนการ Photosynthesis","Canva AI","มี Template วิทย์ พร้อม Design"],
                  ["ค้นงานวิจัยเกี่ยวกับ Growth Mindset","Perplexity / Consensus","มี Source อ้างอิงพร้อม"],
                  ["สร้างข้อสอบ 20 ข้อ จากบทเรียน","Quizgecko / ChatGPT","Upload เนื้อหา → สร้างอัตโนมัติ"],
                  ["ถอดเสียงบันทึกการสอน 30 นาที","Whisper / Otter.ai","แม่นยำ ทำได้เร็ว"],
                  ["ย่อบทความวิชาการ 20 หน้า สำหรับนักเรียน ม.1","Diffit / ChatGPT","ปรับระดับภาษา Lexile Level"],
                  ["สร้างวิดีโอสั้น 2 นาที อธิบายสูตรฟิสิกส์","Invideo AI / Canva Video","Text-to-Video อัตโนมัติ"],
                  ["ให้ Feedback งานเขียนนักเรียน 30 คน","Gradescope / ChatGPT","อ่านงาน + ให้ Feedback เร็ว"],
                ].map(([task,tool,reason],i)=>(
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-3 py-2 text-text-secondary">{task}</td>
                    <td className="px-3 py-2 font-medium text-indigo-700">{tool}</td>
                    <td className="px-3 py-2 text-text-muted">{reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-lg font-bold text-text-primary mb-3">
          <Wrench className="w-4.5 h-4.5 text-indigo-600" />
          กิจกรรม Workshop (3 หัวข้อ)
        </h2>
        <div className="space-y-4">
          {[
            {num:"1",title:"Tool Discovery Race",time:"15 นาที",format:"กลุ่ม 4 คน",goal:"ค้นหา AI Tool ที่เหมาะกับงานจริงๆ ของครูแต่ละคนได้ภายใน 15 นาที",steps:["แต่ละกลุ่มได้รับ Scenario Card 1 ใบ (งานครูจริงๆ 1 ชิ้น)","ค้นหา AI Tool ที่เหมาะสมที่สุด โดยอ้างอิงตาราง Match-Making","นำเสนอผลการค้นหา 2 นาที พร้อมเหตุผล","กลุ่มอื่นเสนอ Tool ทางเลือกและข้อดีข้อเสีย"]},
            {num:"2",title:"SAFE-T Evaluation",time:"20 นาที",format:"คู่",goal:"ประเมิน AI Tool 1 รายการด้วยกรอบ SAFE-T พร้อมเหตุผลครบทุกเกณฑ์",steps:["เลือก AI Tool 1 ตัวที่สนใจจะนำไปใช้จริง","ประเมินตามกรอบ SAFE-T ทั้ง 5 มิติ (คะแนน 1-5 ต่อมิติ)","บันทึกจุดเด่นและข้อควรระวัง","แลกเปลี่ยนกับคู่ — ตกลงว่าจะนำ Tool ไหนไปลองใช้จริง"]},
            {num:"3",title:"สร้าง AI Toolkit ส่วนตัวของครู",time:"20 นาที",format:"เดี่ยว → แลกเปลี่ยนคู่",goal:"AI Toolkit ส่วนตัวที่เหมาะกับวิชาและระดับที่สอน พร้อม Timeline นำไปใช้จริง",steps:["กรอก 'My AI Toolkit' ตาราง 5 งาน × เครื่องมือ × เป้าหมาย","แลกเปลี่ยนกับคู่ — แนะนำ Tool ที่อีกฝ่ายยังไม่รู้จัก","แต่ละคนเลือก 1 Tool ที่จะ 'เริ่มใช้ภายใน 1 สัปดาห์'","บันทึก Commitment Card"]},
          ].map(ws=>(
            <div key={ws.num} className="rounded-xl border border-indigo-200 bg-white overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 bg-indigo-50 border-b border-indigo-100">
                <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">W{ws.num}</span>
                <div>
                  <p className="text-sm font-bold text-text-primary">{ws.title}</p>
                  <p className="text-[11px] text-indigo-500">{ws.time} · {ws.format}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs font-medium text-indigo-600 mb-2">🎯 {ws.goal}</p>
                <ul className="space-y-1.5">
                  {ws.steps.map((s,i)=>(
                    <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                      <span className="w-4 h-4 rounded bg-indigo-100 text-indigo-600 text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i+1}</span>
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
          <Lightbulb className="w-4.5 h-4.5 text-indigo-600" />
          Key Takeaways
        </h2>
        <div className="space-y-2">
          {[
            "AI มีหลายประเภท — จำแนกได้ตาม Capability / Modality / Function / Access Model",
            "เครื่องมือ AI มีมากกว่า 10,000 รายการ — เลือกตามงานที่ต้องการ ไม่ใช่ตามกระแส",
            "ใช้กรอบ SAFE-T ในการประเมิน — Safety, Accuracy, Free/Cost, Ease, Teaching fit",
            "มี AI Tools เฉพาะสำหรับครู (MagicSchool, Curipod, Diffit) — มักดีกว่า ChatGPT ทั่วไปในงานสอน",
            "เริ่มจาก 1 Tool — เลือก 1 เครื่องมือ ใช้ซ้ำๆ จนคล่อง แล้วค่อยขยาย",
          ].map((k,i)=>(
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-indigo-50 border border-indigo-100">
              <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i+1}</span>
              <p className="text-sm text-text-secondary">{k}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-indigo-300 bg-indigo-600 p-4 text-white">
          <p className="text-xs font-bold text-indigo-200 mb-1">🎯 ภารกิจต่อเนื่องก่อนหัวข้อ 1.3</p>
          <p className="text-sm">ลองใช้ <strong>MagicSchool AI</strong> (magicschool.ai) เลือก 1 งานที่คุณทำบ่อยและลองสร้างด้วย AI บันทึก Reflection: (1) ใช้เวลาเท่าไหร่? (2) ผลลัพธ์ดีขึ้นหรือต้องปรับ? (3) จะใช้ซ้ำไหม?</p>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-card-border">
        <Link href="/manual/module-1/1-1" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
            <p className="font-medium">1.1 AI หลักการทำงาน</p>
          </div>
        </Link>
        <Link href="/manual" className="text-xs text-text-muted hover:text-text-secondary transition-colors">สารบัญ</Link>
        <Link href="/manual/module-1/1-3" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group">
          <div className="text-right">
            <p className="text-[10px] text-text-muted">ถัดไป</p>
            <p className="font-medium">1.3 จริยธรรม AI และ Policy</p>
          </div>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

