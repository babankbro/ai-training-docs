export interface Session {
  id: string;
  slug: string;
  number: number;
  title: string;
  titleEn: string;
  time: string;
  duration: string;
  dayNumber: number;
  objectives: string[];
  learningOutcomes: string[];
  content: ContentSection[];
  plo: string[];
  type: "session" | "break" | "ceremony";
}

export interface ContentSection {
  heading: string;
  items: string[];
}

export interface Day {
  number: number;
  title: string;
  titleEn: string;
  goal: string;
  sessions: Session[];
}

export interface PLO {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  subItems: string[];
}

export const courseInfo = {
  title: "AI Knowledge and Tools for Educational Transformation",
  titleTh:
    "ความรู้และเครื่องมือด้านปัญญาประดิษฐ์เพื่อการเปลี่ยนผ่านทางการศึกษา",
  subtitle:
    "การพัฒนาทักษะการอ่านอย่างมีวิจารณญาณและการคิดเชิงวิพากษ์",
  version: "V2",
  organization: "มหาวิทยาลัยกาฬสินธุ์ • CraftAI – CARIA",
  duration: "4 วัน (24 ชั่วโมง)",
  targetGroup: "ครูระดับประถมศึกษา จังหวัดกาฬสินธุ์",
  participants: "150 คน",
};

export const objectives = [
  "เพื่อให้ผู้เข้าอบรมมีความรู้ความเข้าใจในหลักการพื้นฐานของปัญญาประดิษฐ์ (AI Literacy) และบทบาทของ AI ในการเปลี่ยนผ่านการศึกษาตามกรอบแนวคิด AIPACK",
  "เพื่อให้ผู้เข้าอบรมสามารถอธิบายหลักจริยธรรมในการใช้ AI (AI Ethics) และแนวปฏิบัติตามกฎหมาย PDPA ในบริบทสถานศึกษาได้",
  "เพื่อให้ผู้เข้าอบรมมีทักษะในการเขียนคำสั่ง (Prompt Engineering) ด้วยเทคนิค RICECO Framework ได้อย่างเชี่ยวชาญ",
  "เพื่อให้ผู้เข้าอบรมสามารถใช้เครื่องมือ AI (เช่น Gemini, Canva Magic Studio, NotebookLM) ในการสร้างสื่อการสอน แผนการจัดการเรียนรู้ และเครื่องมือวัดผลที่มีคุณภาพ",
  "เพื่อให้ผู้เข้าอบรมสามารถออกแบบกิจกรรมการเรียนรู้ที่บูรณาการ AI เพื่อส่งเสริมทักษะการคิดวิเคราะห์ (Critical Thinking) และการอ่าน (Reading Literacy)",
  "เพื่อให้ผู้เข้าอบรมมีเจตคติที่ดีต่อการใช้งานเทคโนโลยี AI ในฐานะผู้ช่วยสอน (Co-pilot) และมีความมั่นใจในการนำไปประยุกต์ใช้ในชั้นเรียนอย่างยั่งยืน",
];

export const plos: PLO[] = [
  {
    id: "PLO1",
    title: "Ethical AI User",
    titleEn: "Ethical AI User",
    description:
      "สามารถเลือกใช้เครื่องมือ AI อย่างมีจริยธรรม ความปลอดภัย และรู้เท่าทันข้อจำกัด",
    subItems: [
      "อธิบายกลไกการทำงานเบื้องต้นของ AI และข้อจำกัด (Hallucination) ได้",
      "ปฏิบัติตามแนวทาง PDPA และจริยธรรม AI ในสถานศึกษาได้",
    ],
  },
  {
    id: "PLO2",
    title: "Prompt Master",
    titleEn: "Prompt Master",
    description:
      "สามารถประยุกต์ใช้กรอบแนวคิด RICECO เขียนคำสั่งเพื่อสร้างสื่อการสอน",
    subItems: [
      "เขียน Prompt ด้วย RICECO Framework สร้างเนื้อหาที่มีคุณภาพ",
      "ใช้ ChatGPT, Gemini, Canvas และ NotebookLM สร้างสื่อการเรียนรู้ได้",
    ],
  },
  {
    id: "PLO3",
    title: "Learning Designer",
    titleEn: "Learning Designer",
    description:
      "สามารถออกแบบแผนการสอนและกิจกรรมที่บูรณาการ AI อย่างสร้างสรรค์",
    subItems: [
      "ออกแบบแผนการสอน AIPACK ที่บูรณาการ AI อย่างเป็นระบบ",
      "สร้างกิจกรรม Reading Literacy และ Critical Thinking ด้วย AI",
      "ออกแบบกิจกรรมเสริมแรงจูงใจโดยมี AI ช่วยตามโมเดล PERMA",
    ],
  },
  {
    id: "PLO4",
    title: "Smart Assessor",
    titleEn: "Smart Assessor",
    description:
      "สร้างเครื่องมือวัดผลและให้ Feedback ด้วย AI",
    subItems: [
      "สร้างเครื่องมือวัดผลและให้ Feedback ด้วย AI",
      "นำเสนอผลการสอนและแนวทางขยายผล",
    ],
  },
];

export const days: Day[] = [
  {
    number: 1,
    title: "รากฐาน AI จริยธรรม และเครื่องมืออัจฉริยะ",
    titleEn: "AI Foundations, Ethics & Tools",
    goal: "ครูเข้าใจกลไก AI ปกป้องข้อมูลนักเรียน และเลือกเครื่องมือได้ถูกงาน",
    sessions: [
      {
        id: "pre-test",
        slug: "pre-test",
        number: 0,
        title: "Pre-test: ประเมินฐานความรู้และทัศนคติก่อนการพัฒนา",
        titleEn: "Pre-test: Baseline Assessment",
        time: "08:30 - 09:00",
        duration: "30 นาที",
        dayNumber: 1,
        type: "ceremony",
        objectives: [
          "วัดระดับความรู้พื้นฐานด้าน AI และ Digital Literacy",
          'ปรับจินตภาพ (Reframing) เปลี่ยนมุมมอง AI จาก "เครื่องมือน่ากลัว" สู่ "เพื่อนคู่คิด"',
        ],
        learningOutcomes: [
          "ผู้เข้าอบรมทราบระดับความรู้เริ่มต้นของตนเอง",
          "ผู้เข้าอบรมเริ่มเปิดใจต่อการใช้ AI ในการศึกษา",
        ],
        content: [
          {
            heading: "องค์ประกอบการประเมิน",
            items: [
              "ระดับ AI Literacy พื้นฐาน",
              "ทัศนคติต่อจริยธรรมข้อมูล",
              "ทักษะการใช้เครื่องมือดิจิทัลเดิม",
              'เจตคติ "AI as Thought Partner"',
            ],
          },
        ],
        plo: ["PLO1"],
      },
      {
        id: "session-1",
        slug: "session-1",
        number: 1,
        title: "ความรู้เท่าทันปัญญาประดิษฐ์",
        titleEn: "AI Literacy & How AI Works",
        time: "09:00 - 10:30",
        duration: "90 นาที",
        dayNumber: 1,
        type: "session",
        objectives: [
          "เข้าใจกลไกการทำงานเบื้องต้นของ AI และ Generative AI",
          "รู้จักข้อจำกัดของ AI โดยเฉพาะ Hallucination",
          "เปลี่ยนมุมมอง Hallucination ให้เป็นโอกาสพัฒนาทักษะการคิดเชิงวิพากษ์",
        ],
        learningOutcomes: [
          "อธิบายกลไก AI ขั้นพื้นฐานได้ (Machine Learning, Neural Network, Large Language Model)",
          "ระบุและอธิบายข้อจำกัดประเภท Hallucination ของ AI ได้",
          "ประยุกต์ใช้ Hallucination เป็น Teachable Moment ในชั้นเรียนได้",
        ],
        content: [
          {
            heading: "บรรยาย: AI ทำงานอย่างไร",
            items: [
              "Machine Learning → Neural Network → Large Language Model (LLM)",
              "AI ไม่ได้ 'คิด' แต่ 'ทำนาย' คำถัดไปจากข้อมูลมหาศาล",
              "อุปมา: AI เหมือนนักเรียนเก่งที่อ่านหนังสือมาล้านเล่ม แต่ไม่เคยมีประสบการณ์จริง",
            ],
          },
          {
            heading: "Hallucination: เมื่อ AI หลอน",
            items: [
              "สาเหตุ: ข้อมูลฝึกไม่ครบ / คำถามคลุมเครือ / AI ไม่มี Common Sense",
              'กิจกรรม "จับผิด AI" (Fact-Checking Hunt): ให้ AI ตอบคำถามเกี่ยวกับจังหวัดกาฬสินธุ์',
              "เชื่อมโยงสู่ห้องเรียน: เปลี่ยนอาการหลอนให้เป็นโอกาสพัฒนาทักษะการคิดเชิงวิพากษ์",
            ],
          },
        ],
        plo: ["PLO1"],
      },
      {
        id: "session-2",
        slug: "session-2",
        number: 2,
        title: "จริยธรรม ความเป็นส่วนตัว และความปลอดภัยของข้อมูล",
        titleEn: "Ethics, Privacy & PDPA",
        time: "10:45 - 12:00",
        duration: "75 นาที",
        dayNumber: 1,
        type: "session",
        objectives: [
          "เข้าใจหลัก PDPA ในบริบทสถานศึกษา",
          "รู้จักกฎเหล็กการใช้ AI กับข้อมูลนักเรียน",
          "ตระหนักถึง AI Bias และความเหลื่อมล้ำทางดิจิทัล",
        ],
        learningOutcomes: [
          "อธิบายบทบาทโรงเรียนในฐานะ 'ผู้ประมวลผลข้อมูล' และ 'ผู้ควบคุมข้อมูล' ตาม PDPA",
          'สร้าง "ข้อตกลงการใช้ AI ในชั้นเรียน" (AI Classroom Agreement) ได้',
          "วิเคราะห์ประเด็น AI Bias ด้านสีผิว เพศ วัฒนธรรมได้",
        ],
        content: [
          {
            heading: "บรรยาย: PDPA สำหรับโรงเรียน",
            items: [
              "โรงเรียนในฐานะ 'ผู้ประมวลผลข้อมูล' และ 'ผู้ควบคุมข้อมูล'",
              "กฎเหล็ก: ห้ามนำ PII ของนักเรียนเข้าสู่ระบบ AI สาธารณะ",
              "นักเรียนอายุต่ำกว่า 18 ปี: ขอยินยอมทั้งตัวนักเรียนและผู้ปกครอง",
              "อคติ AI (AI Bias) ด้านสีผิว เพศ วัฒนธรรม และความเหลื่อมล้ำทางดิจิทัล",
            ],
          },
          {
            heading: 'Workshop: สร้าง "ข้อตกลงการใช้ AI ในชั้นเรียน"',
            items: [
              "AI Classroom Agreement: สิ่งที่ทำได้ / สิ่งที่ห้ามทำ / สิ่งที่ต้องระวัง",
              "กิจกรรมกลุ่ม: วิเคราะห์กรณีศึกษา PDPA ในโรงเรียน",
            ],
          },
        ],
        plo: ["PLO1"],
      },
      {
        id: "session-3",
        slug: "session-3",
        number: 3,
        title: "เครื่องมือ AI สำหรับครู",
        titleEn: "AI Tools Landscape for Educators",
        time: "13:00 - 14:30",
        duration: "90 นาที",
        dayNumber: 1,
        type: "session",
        objectives: [
          "รู้จักและเปรียบเทียบเครื่องมือ AI หลัก 4 ตัว",
          "เลือกเครื่องมือที่เหมาะสมกับงานแต่ละประเภทได้",
          "ทดลองใช้เครื่องมือ AI กับงานจริงในโรงเรียน",
        ],
        learningOutcomes: [
          "อธิบายจุดเด่นและข้อจำกัดของ ChatGPT, Gemini, Canvas และ NotebookLM ได้",
          "เลือกเครื่องมือ AI ที่เหมาะสมกับงานเฉพาะในบริบทการศึกษาได้",
          "ใช้งาน AI Tools เบื้องต้นในการสร้างเนื้อหาและค้นหาข้อมูลได้",
        ],
        content: [
          {
            heading: "บรรยาย: เปรียบเทียบ 4 เครื่องมือ AI",
            items: [
              "ChatGPT (OpenAI): เก่งด้านภาษาไทย สร้างเนื้อหายาวได้ดี มี Canvas Mode สำหรับแก้ไขงานร่วมกัน",
              "Gemini (Google): บูรณาการกับ Google Workspace ได้โดยตรง มี Real-time Search",
              "Canvas (Gemini Canvas): โหมดทำงานพื้นที่เขียนเนื้อหายาว Export to Slides ได้",
              "NotebookLM (Google): 'Grounded AI' ประมวลผลเฉพาะไฟล์ที่อัปโหลด ลด Hallucination",
            ],
          },
          {
            heading: "Lab: ทดลองใช้ 4 เครื่องมือกับงานจริง",
            items: [
              "ChatGPT: สร้างไอเดียกิจกรรมการเรียนรู้ใหม่ และร่างแจ้งเตือนผู้ปกครอง",
              "Gemini: ค้นหาข้อมูลอัปเดตพร้อมแหล่งอ้างอิงและเชื่อมต่อ Google Drive",
              "Canvas: ทดลองสร้างโครงร่างแผนการสอน แล้ว Export เป็นสไลด์",
              "NotebookLM: อัปโหลดเอกสารหรือหลักสูตร แล้วให้ AI สรุปและตอบคำถาม",
            ],
          },
        ],
        plo: ["PLO1", "PLO2"],
      },
      {
        id: "session-4",
        slug: "session-4",
        number: 4,
        title: "ศิลปะการเขียนคำสั่ง AI ด้วย RICECO",
        titleEn: "Prompt Engineering with RICECO Framework",
        time: "14:45 - 16:00",
        duration: "75 นาที",
        dayNumber: 1,
        type: "session",
        objectives: [
          "เข้าใจหลักการ Prompt Engineering ด้วย RICECO Framework",
          "ฝึกเขียน Prompt ที่มีคุณภาพสำหรับงานการศึกษา",
          "เปรียบเทียบผลลัพธ์ระหว่าง Prompt ดีกับ Prompt แย่",
        ],
        learningOutcomes: [
          "อธิบายองค์ประกอบ RICECO (Role, Instruction, Context, Example, Constraints, Output) ได้",
          "เขียน Prompt ด้วย RICECO Framework สำหรับสร้างสื่อการสอนได้",
          "ปรับปรุง Prompt ให้มีประสิทธิภาพมากขึ้น (Iterative Refinement) ได้",
        ],
        content: [
          {
            heading: "บรรยาย: RICECO Framework",
            items: [
              "R — Role: กำหนดบทบาทให้ AI (เช่น ครูประถมศึกษาผู้เชี่ยวชาญ)",
              "I — Instruction: คำสั่งที่ชัดเจนว่าต้องการอะไร",
              "C — Context: บริบทของงาน (ระดับชั้น วิชา จำนวนนักเรียน)",
              "E — Example: ตัวอย่างที่ต้องการ (ให้ AI ดูแบบ)",
              "C — Constraints: ข้อจำกัด (ความยาว ภาษา รูปแบบ)",
              "O — Output: รูปแบบผลลัพธ์ที่ต้องการ (ตาราง, bullet, JSON)",
            ],
          },
          {
            heading: "Lab: ฝึกเขียน Prompt",
            items: [
              "ฝึกเขียน Prompt สำหรับสร้างใบงาน แผนการสอน และข้อสอบ",
              "เปรียบเทียบ: Prompt สั้นๆ กับ RICECO Prompt → สังเกตความแตกต่างของคุณภาพผลลัพธ์",
              "กิจกรรม Prompt Battle: แข่งขันเขียน Prompt ที่ดีที่สุด",
            ],
          },
        ],
        plo: ["PLO2"],
      },
    ],
  },
  {
    number: 2,
    title: "การสร้างสื่อและกิจกรรมการเรียนรู้ด้วย AI",
    titleEn: "AI-Powered Content & Activity Design",
    goal: "ครูสร้างสื่อ ออกแบบกิจกรรม และบูรณาการ AI เข้าสู่แผนการสอนได้",
    sessions: [
      {
        id: "session-5",
        slug: "session-5",
        number: 5,
        title: "แผนการสอนอัจฉริยะด้วย AIPACK",
        titleEn: "Lesson Planning with AIPACK Framework",
        time: "08:30 - 10:30",
        duration: "120 นาที",
        dayNumber: 2,
        type: "session",
        objectives: [
          "เข้าใจกรอบแนวคิด AIPACK สำหรับการออกแบบแผนการสอน",
          "ฝึกสร้างแผนการสอนที่บูรณาการ AI อย่างเป็นระบบ",
          "ใช้ Canvas ของ Gemini ในการร่างแผนการสอน",
        ],
        learningOutcomes: [
          "อธิบายองค์ประกอบ AIPACK (AI Integration, Pedagogy, Assessment, Content, Knowledge) ได้",
          "สร้างแผนการสอนที่บูรณาการ AI ด้วยกรอบ AIPACK อย่างน้อย 1 แผน",
          "ใช้ Canvas Export แผนการสอนเป็นสไลด์นำเสนอได้",
        ],
        content: [
          {
            heading: "บรรยาย: กรอบแนวคิด AIPACK",
            items: [
              "A — AI Integration: วิธีการนำ AI เข้ามาช่วยในการเรียนการสอน",
              "I — Instruction Design: การออกแบบกิจกรรมการเรียนรู้",
              "P — Pedagogy: ทฤษฎีการสอนที่เหมาะสม",
              "A — Assessment: การวัดและประเมินผล",
              "C — Content: เนื้อหาสาระการเรียนรู้",
              "K — Knowledge Outcome: ผลลัพธ์การเรียนรู้ที่คาดหวัง",
            ],
          },
          {
            heading: "Lab: สร้างแผนการสอน AIPACK",
            items: [
              "ใช้ Gemini Canvas ร่างแผนการสอนตามกรอบ AIPACK",
              "เลือกวิชาและระดับชั้นที่ตนเองสอน",
              "บูรณาการเครื่องมือ AI เข้าในแผนการสอน",
              "Export แผนการสอนเป็นสไลด์เพื่อนำเสนอ",
            ],
          },
        ],
        plo: ["PLO2", "PLO3"],
      },
      {
        id: "session-6",
        slug: "session-6",
        number: 6,
        title: "เพื่อนคู่คิดสายทัศนศิลป์ — สร้างสื่อภาพด้วย AI",
        titleEn: "Visual Intelligence & AI Art",
        time: "10:45 - 12:00",
        duration: "75 นาที",
        dayNumber: 2,
        type: "session",
        objectives: [
          "เข้าใจหลักการสร้างภาพด้วย AI (Text-to-Image)",
          "เลือกสไตล์ภาพที่เหมาะสมกับเด็กประถมได้",
          "สร้างสื่อภาพสำหรับใช้ในการสอนด้วย AI",
        ],
        learningOutcomes: [
          "อธิบายหลักการ Denoising ในการสร้างภาพด้วย AI ได้",
          "ใช้ ChatGPT (DALL-E 3) และ Gemini (Imagen 3) สร้างภาพได้",
          "เลือกสไตล์ภาพที่เหมาะสมกับบริบทการเรียนรู้ของเด็กไทยได้",
        ],
        content: [
          {
            heading: "บรรยาย: AI สร้างภาพอย่างไร",
            items: [
              "AI สร้างภาพจากการ 'Denoising' → ภาพที่มีความหมายตามคำสั่ง (Text-to-Image)",
              "เครื่องมือ: ChatGPT (DALL-E 3) และ Gemini (Imagen 3)",
              "ข้อควรระวัง: AI มีปัญหาสร้างตัวอักษรภาษาไทยและจำนวนนิ้วมือ",
            ],
          },
          {
            heading: "Lab: สไตล์ภาพสำหรับเด็กประถม",
            items: [
              "3D Cartoon / Pixar Style: เหมาะสำหรับนิทาน หน้าปกสื่อ ตัวละครมาสคอต",
              "Line Art / Coloring Page: เหมาะสำหรับใบงานศิลปะ การฝึกกล้ามเนื้อมัดเล็ก",
              "Watercolor / Storybook Illustration: เหมาะสำหรับสื่อภาษาไทย วรรณคดี ประวัติศาสตร์",
              "จริยธรรมและ Cultural Representation: ระบุบริบทวัฒนธรรมไทยในทุก Prompt",
            ],
          },
        ],
        plo: ["PLO2", "PLO3"],
      },
      {
        id: "session-7",
        slug: "session-7",
        number: 7,
        title: "AI กับการส่งเสริมทักษะการอ่าน",
        titleEn: "AI-Powered Reading Literacy",
        time: "13:00 - 14:30",
        duration: "90 นาที",
        dayNumber: 2,
        type: "session",
        objectives: [
          "เข้าใจแนวคิด Lexile Leveling สำหรับปรับระดับบทอ่าน",
          "ใช้ AI สร้างบทอ่านที่เหมาะกับระดับความสามารถของผู้เรียน",
          "สร้างกิจกรรม Reading Literacy ด้วย NotebookLM",
        ],
        learningOutcomes: [
          "ใช้ AI สร้างบทอ่านหลายระดับความยาก (Lexile Leveling) ได้",
          "สร้างกิจกรรมฝึกจับใจความและทักษะการอ่านด้วย AI ได้",
          "ใช้ NotebookLM จัดการคลังบทอ่านและสร้าง Audio Podcast ได้",
        ],
        content: [
          {
            heading: "บรรยาย: Reading Literacy กับ AI",
            items: [
              "Lexile Leveling: ปรับระดับบทอ่านให้เหมาะกับนักเรียนแต่ละคน",
              "AI สร้างบทอ่านหลายระดับจากเนื้อหาเดียวกัน",
              "NotebookLM: Grounded AI สำหรับจัดการคลังความรู้",
            ],
          },
          {
            heading: "Lab: สร้างบทอ่านและกิจกรรม",
            items: [
              "ใช้ ChatGPT/Gemini สร้างบทอ่าน 3 ระดับจากเรื่องเดียวกัน",
              "ใช้ NotebookLM อัปโหลดเอกสาร สร้างบทสรุปหลายระดับ",
              "สร้าง Audio Podcast จากบทอ่านด้วย NotebookLM",
              "สร้างกิจกรรมฝึกจับใจความ: Who, What, When, Where, Why",
            ],
          },
        ],
        plo: ["PLO3"],
      },
      {
        id: "session-8",
        slug: "session-8",
        number: 8,
        title: "สร้าง Web App สื่อการสอนด้วย AI",
        titleEn: "AI-Powered Web App Creation",
        time: "14:45 - 16:00",
        duration: "75 นาที",
        dayNumber: 2,
        type: "session",
        objectives: [
          "ใช้ AI สร้าง Web App แบบ Single-file HTML สำหรับสื่อการสอน",
          "เข้าใจหลักการสร้างสื่อดิจิทัลเชิงโต้ตอบ (Interactive Media)",
          "สามารถแก้ไขและปรับปรุง Web App ผ่าน Canvas ได้",
        ],
        learningOutcomes: [
          "สร้าง Web App แบบ Single-file HTML สำหรับการเรียนรู้ได้",
          "ใช้ Canvas สั่งงานให้ AI สร้างและแก้ไขโค้ดเว็บได้",
          "ทดสอบและปรับปรุง Web App ให้ใช้งานได้จริงในชั้นเรียน",
        ],
        content: [
          {
            heading: "บรรยาย: Web App สำหรับครู",
            items: [
              "Single-file HTML: เว็บแอปที่รวมทุกอย่างในไฟล์เดียว",
              "ใช้ Canvas ของ Gemini สั่งให้ AI สร้างโค้ด",
              "ไม่จำเป็นต้องมีความรู้ด้านโปรแกรมมิ่ง",
            ],
          },
          {
            heading: "Lab: สร้าง Web App สื่อการสอน",
            items: [
              "ออกแบบ Web App ตามวิชาที่สอน (เช่น แบบฝึกหัด, เกมคำศัพท์, Quiz)",
              "ใช้ Canvas สั่ง AI สร้างโค้ด HTML+CSS+JavaScript",
              "ทดสอบบนมือถือและปรับปรุงด้วย Iterative Prompting",
              "แชร์ผลงานกับเพื่อนครู",
            ],
          },
        ],
        plo: ["PLO2", "PLO3"],
      },
    ],
  },
  {
    number: 3,
    title: "AI เพื่อการสอนตามกรอบ AIPACK",
    titleEn: "AI for Teaching — Reading Literacy, Critical Thinking & PERMA",
    goal: "ครูใช้ AI สร้างสื่อ คำถาม และแผนการสอนที่บูรณาการ AI เสริมทักษะ RT/CT และสุขภาวะ ตามกรอบ AIPACK",
    sessions: [
      {
        id: "session-9",
        slug: "session-9",
        number: 9,
        title: "AI กับการส่งเสริมการคิดเชิงวิพากษ์ — คำถามแบบโสเครตีส",
        titleEn: "Socratic Questioning & Critical Thinking with AI",
        time: "09:00 - 10:30",
        duration: "90 นาที",
        dayNumber: 3,
        type: "session",
        objectives: [
          "เข้าใจเทคนิคคำถามแบบโสเครตีส (Socratic Questioning)",
          "ใช้ AI เป็นคู่โต้แย้ง (Debate Partner) สำหรับเด็กประถม",
          "ออกแบบกิจกรรมส่งเสริม Critical Thinking ด้วย AI",
        ],
        learningOutcomes: [
          "ใช้ AI สร้างชุดคำถามแบบโสเครติส 6 ประเภทได้",
          "ออกแบบกิจกรรม Debate Partner ที่เหมาะกับเด็กประถมได้",
          "บูรณาการ Critical Thinking กับเนื้อหาที่สอนได้",
        ],
        content: [
          {
            heading: "บรรยาย: Socratic Questioning 6 ประเภท",
            items: [
              "คำถามให้ชี้แจง (Clarifying): 'หนูหมายความว่าอย่างไร?'",
              "คำถามสำรวจสมมติฐาน (Assumptions): 'ทำไมหนูถึงคิดว่าเป็นอย่างนั้น?'",
              "คำถามสำรวจหลักฐาน (Probing Evidence): 'มีเหตุการณ์ในชีวิตจริงที่ยืนยันเรื่องนี้ไหม?'",
              "คำถามสำรวจมุมมอง (Viewpoints): 'ถ้าเป็นเพื่อนที่นั่งข้างๆ เขาจะคิดต่างอย่างไร?'",
              "คำถามสำรวจผลกระทบ (Implications): 'หากทุกคนทำแบบนี้ จะเกิดอะไรขึ้นในอนาคต?'",
              "คำถามเกี่ยวกับคำถาม (Meta): 'ทำไมครูถึงถามคำถามนี้?'",
            ],
          },
          {
            heading: "Lab: AI ในบทบาทคู่โต้แย้ง (Debate Partner)",
            items: [
              "ตัวอย่างสถานการณ์: การอนุรักษ์น้ำ / สัตว์เลี้ยงในโรงเรียน / อาหารกลางวัน",
              "ขั้นตอน: ตั้งประเด็น → กำหนดบทบาท AI → โต้ตอบเป็นชั้น → สะท้อนคิด",
              "ฝึกออกแบบกิจกรรมสำหรับชั้นเรียนของตนเอง",
            ],
          },
        ],
        plo: ["PLO3"],
      },
      {
        id: "session-10",
        slug: "session-10",
        number: 10,
        title: "การคิดเชิงวิพากษ์ผ่านเพื่อนคู่คิดอัจฉริยะ",
        titleEn: "AI for Critical Thinking — Socratic Dialogue",
        time: "10:45 - 12:00",
        duration: "75 นาที",
        dayNumber: 3,
        type: "session",
        objectives: [
          "ใช้ AI เป็นคู่โต้แย้ง (Debate Partner) เพื่อพัฒนาการคิดเชิงวิพากษ์",
          "ฝึกสร้างชุดคำถามแบบโสเครติส 5 ประเภทด้วย AI",
          "ออกแบบกิจกรรม Critical Thinking ด้วย AI สำหรับเด็กประถม",
        ],
        learningOutcomes: [
          "สร้างชุดคำถามแบบโสเครติส 5 ประเภทด้วย AI ได้",
          "ใช้ AI ในบทบาทคู่โต้แย้ง (Debate Partner) สำหรับเด็กประถมได้",
          "ออกแบบกิจกรรมที่เสริมสร้างการคิดวิพากษ์ในชั้นเรียนได้",
        ],
        content: [
          {
            heading: "Lab: ชุดคำถามแบบโสเครติส (Socratic Questioning) 5 ประเภท",
            items: [
              "คำถามเพื่อความกระจ่าง (Clarification): 'สิ่งที่หนูพูดหมายความว่าอย่างไร?'",
              "คำถามสำรวจสมมติฐาน (Probing Assumptions): 'ทำไมถึงสมมติว่าเรื่องนี้เป็นความจริง?'",
              "คำถามสำรวจหลักฐาน (Probing Evidence): 'มีเหตุการณ์จริงที่ยืนยันเรื่องนี้ไหม?'",
              "คำถามสำรวจมุมมอง (Viewpoints): 'ถ้าเป็นเพื่อนที่นั่งข้างๆ เขาจะคิดต่างอย่างไร?'",
              "คำถามสำรวจผลกระทบ (Implications): 'หากทุกคนทำแบบนี้ จะเกิดอะไรขึ้นในอนาคต?'",
            ],
          },
          {
            heading: "Lab: AI ในบทบาทคู่โต้แย้ง (Debate Partner)",
            items: [
              "ตัวอย่างสถานการณ์: การอนุรักษ์น้ำ / สัตว์เลี้ยงในโรงเรียน / อาหารกลางวัน",
              "ขั้นตอน: ตั้งประเด็น → กำหนดบทบาท AI → โต้ตอบเป็นชั้น → สะท้อนคิด",
              "ฝึกออกแบบกิจกรรม Debate Partner สำหรับชั้นเรียนของตนเอง",
            ],
          },
        ],
        plo: ["PLO3"],
      },
      {
        id: "session-11",
        slug: "session-11",
        number: 11,
        title: "การส่งเสริมสุขภาวะและแรงจูงใจด้วย AI",
        titleEn: "AI for PERMA & Growth Mindset",
        time: "13:00 - 14:30",
        duration: "90 นาที",
        dayNumber: 3,
        type: "session",
        objectives: [
          "เข้าใจโมเดล PERMA ของ Martin Seligman",
          "ใช้ AI ออกแบบกิจกรรมเสริมแรงจูงใจตามหลัก PERMA",
          "สร้างกิจกรรม Growth Mindset ด้วย AI",
        ],
        learningOutcomes: [
          "อธิบายโมเดล PERMA (Positive Emotion, Engagement, Relationships, Meaning, Achievement) ได้",
          "ใช้ AI สร้างกิจกรรม Check-in อารมณ์ตามหลัก PERMA ได้",
          "ออกแบบ PERMA Lesson Booster สำหรับวิชาที่สอนได้",
        ],
        content: [
          {
            heading: "บรรยาย: PERMA Model",
            items: [
              "P (Positive Emotion): AI สร้างคำถามชวนหัวเราะ / Daily Joke ก่อนเริ่มเรียน",
              "E (Engagement): AI สร้าง Micro-challenge ที่ทำให้นักเรียน 'ลืมเวลา'",
              "R (Relationships): AI ช่วยออกแบบกิจกรรมกลุ่มที่ทุกคนมีบทบาท",
              "M (Meaning): AI เชื่อมโยงบทเรียนกับชีวิตจริงของนักเรียน",
              "A (Achievement): AI สร้าง Mini-milestones ให้นักเรียนรู้สึกสำเร็จบ่อยขึ้น",
            ],
          },
          {
            heading: "Lab: สร้างกิจกรรม PERMA",
            items: [
              "กิจกรรม Check-in อารมณ์ตามหลัก PERMA",
              "PERMA Lesson Booster: ออกแบบกิจกรรมเสริมแรงจูงใจ",
              "Growth Mindset Activity: สร้างกิจกรรมที่ส่งเสริมการเรียนรู้จากความผิดพลาด",
            ],
          },
        ],
        plo: ["PLO3"],
      },
      {
        id: "session-12",
        slug: "session-12",
        number: 12,
        title: "สร้าง AIPACK Lesson Plan ฉบับสมบูรณ์",
        titleEn: "AIPACK Lesson Plan Integration Workshop",
        time: "14:45 - 16:30",
        duration: "105 นาที",
        dayNumber: 3,
        type: "session",
        objectives: [
          "บูรณาการทักษะ RT/CT/PERMA เข้าสู่แผนการสอน AIPACK ฉบับสมบูรณ์",
          "ใช้ Gemini Canvas ร่างและ Export แผนการสอนเป็นสไลด์",
          "แลกเปลี่ยน Feedback กับเพื่อนครูเพื่อพัฒนาแผนการสอน",
        ],
        learningOutcomes: [
          "สร้างแผนการสอน AIPACK ที่บูรณาการ RT/CT/PERMA ได้อย่างครบถ้วน",
          "Export แผนการสอนเป็นสไลด์นำเสนอผ่าน Gemini Canvas ได้",
          "ให้ Feedback เชิงสร้างสรรค์กับแผนการสอนของเพื่อนครูได้",
        ],
        content: [
          {
            heading: "Workshop: ร่าง AIPACK Lesson Plan บูรณาการ RT/CT/PERMA",
            items: [
              "ระบุจุดที่ AI เข้ามาสนับสนุนทักษะ Reading Literacy ในแผนการสอน",
              "ออกแบบคำถามแบบโสเครติสที่ช่วยพัฒนา Critical Thinking",
              "เพิ่มองค์ประกอบ PERMA เพื่อส่งเสริมแรงจูงใจและสุขภาวะ",
              "ใช้ Gemini Canvas ร่างและ Export แผนการสอนเป็นสไลด์",
            ],
          },
          {
            heading: "Peer Review: แลกเปลี่ยนและให้ Feedback",
            items: [
              "จับคู่ตรวจสอบแผนการสอนกัน (Peer Review)",
              "ให้ Feedback ตามเกณฑ์ AIPACK Alignment",
              "ปรับปรุงแผนการสอนตาม Feedback ที่ได้รับ",
            ],
          },
        ],
        plo: ["PLO2", "PLO3"],
      },
    ],
  },
  {
    number: 4,
    title: "การวัดผล ข้อมูลป้อนกลับ และการสร้างนวัตกรรมดิจิทัล",
    titleEn: "Assessment, Feedback & Digital Innovation",
    goal: "ครูสร้าง Web App วัดผลแบบ PISA ด้วย AI เขียนโค้ดโดยไม่ต้องมีพื้นฐาน นำเสนอผลงาน และวางแผนความยั่งยืน",
    sessions: [
      {
        id: "session-13",
        slug: "session-13",
        number: 13,
        title: "เครื่องมือวัดผลอัจฉริยะ — Rubric Generator",
        titleEn: "Rubric Generator: AI-Powered Assessment",
        time: "09:00 - 10:30",
        duration: "90 นาที",
        dayNumber: 4,
        type: "session",
        objectives: [
          "เข้าใจหลักการสร้าง Rubric ที่มีคุณภาพ",
          "ใช้ AI สร้าง Rubric อัตโนมัติสำหรับวิชาต่างๆ",
          "สร้าง Web App Rubric Generator ด้วย AI",
        ],
        learningOutcomes: [
          "สร้าง Rubric ที่มีเกณฑ์ชัดเจนด้วย AI ได้",
          "สร้าง Web App Single-file HTML สำหรับ Rubric Generator ได้",
          "ปรับแก้ Rubric ให้เหมาะกับบริบทชั้นเรียนของตนเองได้",
        ],
        content: [
          {
            heading: "บรรยาย: หลักการสร้าง Rubric",
            items: [
              "Rubric คืออะไรและทำไมจึงสำคัญ",
              "องค์ประกอบ: เกณฑ์ (Criteria) / ระดับคุณภาพ (Levels) / คำอธิบาย (Descriptors)",
              "AI ช่วยสร้าง Rubric ได้รวดเร็วและครอบคลุม",
            ],
          },
          {
            heading: "Lab: สร้าง Rubric Generator Web App",
            items: [
              "ใช้ AI สร้าง Rubric สำหรับวิชาที่สอน",
              "สร้าง Web App Single-file HTML สำหรับ Rubric Generator",
              "ทดสอบและปรับปรุง Rubric ให้ตรงกับมาตรฐานการเรียนรู้",
            ],
          },
        ],
        plo: ["PLO4"],
      },
      {
        id: "session-14",
        slug: "session-14",
        number: 14,
        title: "ระบบข้อมูลสะท้อนกลับและลำดับงานอัตโนมัติ",
        titleEn: "Feedback Doctor & AI Workflow",
        time: "10:45 - 12:00",
        duration: "75 นาที",
        dayNumber: 4,
        type: "session",
        objectives: [
          "เข้าใจแนวคิด Feedback Doctor และหลักการให้ Feedback ที่มีประสิทธิภาพ",
          "ใช้ AI สร้าง Feedback ด้วยเทคนิค Sandwich Feedback",
          "สร้าง AI Workflow ลดเวลาเตรียมการสอน",
        ],
        learningOutcomes: [
          "ใช้ AI เขียน Feedback แบบ Sandwich (ชม-แนะนำ-ชม) ด้วย RICECO ได้",
          "สร้าง AI Workflow 'The Sunday Night Saver' ได้",
          "ลดเวลาเตรียมการสอนด้วยลำดับงาน AI อัตโนมัติ",
        ],
        content: [
          {
            heading: "บรรยาย: แนวคิด Feedback Doctor",
            items: [
              "งานวิจัย Hattie & Timperley (2007): Feedback เป็นปัจจัยที่มีอิทธิพลต่อผลสัมฤทธิ์สูงสุด",
              "AI เป็นเหมือนหมอที่วินิจฉัย 'อาการ' (จุดอ่อน) และจ่าย 'ยา' (คำแนะนำ)",
            ],
          },
          {
            heading: "Lab: Feedback Doctor Prompt (RICECO)",
            items: [
              "Role: ครูภาษาไทยใจดีและนักจิตวิทยาเด็ก",
              "เทคนิค Sandwich Feedback (ชม-แนะนำ-ชม)",
              "ห้ามใช้คำว่า 'ผิด' หรือ 'แย่' → ใช้ 'พัฒนาได้อีก' หรือ 'ลองปรับดู'",
              "Output: ข้อความถึงนักเรียนโดยตรง ใช้สรรพนาม 'ครู' และ 'หนู'",
            ],
          },
          {
            heading: "Lab: AI Workflow — The Sunday Night Saver",
            items: [
              "Step 1 (Simplify): สรุปเนื้อหาข่าวให้เหมาะกับเด็ก",
              "Step 2 (Quiz): สร้างข้อสอบปรนัยจากบทสรุป",
              "Step 3 (Rubric): สร้างเกณฑ์ให้คะแนนสำหรับคำถามปลายเปิด",
              "Step 4 (Format): จัดรูปแบบเป็น HTML พร้อมปุ่ม 'พิมพ์ใบงาน'",
            ],
          },
        ],
        plo: ["PLO4"],
      },
      {
        id: "session-15",
        slug: "session-15",
        number: 15,
        title: "การนำเสนอผลงานและแลกเปลี่ยนเรียนรู้",
        titleEn: "AIPACK Show & Share — Gallery Walk",
        time: "13:00 - 15:00",
        duration: "120 นาที",
        dayNumber: 4,
        type: "session",
        objectives: [
          "นำเสนอผลงาน Web App ที่สร้างด้วย AI",
          "แลกเปลี่ยนเรียนรู้และให้ Feedback แบบ Peer Review",
          "ฝึกจัดการ Hallucination ในเวทีจริง",
        ],
        learningOutcomes: [
          "นำเสนอ Web App ที่สร้างด้วย AI ได้อย่างมั่นใจ",
          "ประเมินผลงานเพื่อนด้วย Peer Feedback Rubric 4 ด้านได้",
          "แก้ไขปัญหา Hallucination ด้วย Iterative Refinement ได้",
        ],
        content: [
          {
            heading: "กิจกรรม Gallery Walk: ตลาดนัดนวัตกรรม",
            items: [
              "ครูเปิด Web App ที่ตนเองสร้างบนโน้ตบุ๊ก ให้เพื่อนครูเดินมาทดลองเล่น",
              "จัดการ Hallucination ในเวทีจริง: ใช้เป็น Teachable Moment",
            ],
          },
          {
            heading: "เกณฑ์การประเมินเพื่อน (Peer Feedback Rubric) 4 ด้าน",
            items: [
              "AI Integration: แอปทำงานได้สมบูรณ์ / ทำงานได้เป็นส่วนใหญ่ / ทำงานไม่ได้",
              "Pedagogical Fit: ช่วยให้นักเรียนเรียนรู้ได้จริง / อาจไม่ตรงกับระดับชั้น / ไม่ชัดเจน",
              "Content Accuracy: เนื้อหาถูกต้อง ตรวจสอบ Hallucination แล้ว / ถูกต้องเป็นส่วนใหญ่ / น่าสงสัย",
              "Cultural Relevance: เชื่อมโยงกับบริบทท้องถิ่นและเด็กไทย / มีบางส่วน / ไม่มีบริบทท้องถิ่น",
            ],
          },
        ],
        plo: ["PLO4"],
      },
      {
        id: "session-16",
        slug: "session-16",
        number: 16,
        title: "การสะท้อนคิดและความพร้อมสู่ขั้นต่อไป",
        titleEn: "Reflection & Next Steps",
        time: "15:00 - 16:00",
        duration: "60 นาที",
        dayNumber: 4,
        type: "session",
        objectives: [
          "ทำ Post-test และสะท้อนคิดเกี่ยวกับการเรียนรู้",
          "สร้างเครือข่าย AI-PLC สำหรับครูในจังหวัด",
          "วางแผนการนำ AI ไปใช้อย่างยั่งยืน",
        ],
        learningOutcomes: [
          "ระบุ 'สิ่งที่จะนำไปใช้ทันที' (Immediate Action) ได้",
          "มีแผนการพัฒนาต่อ (Growth Area) ที่ชัดเจน",
          "เป็นสมาชิกเครือข่าย AI-PLC จังหวัดกาฬสินธุ์",
        ],
        content: [
          {
            heading: "Post-test และสะท้อนคิด",
            items: [
              "เขียน 'สิ่งที่จะนำไปใช้ทันที' (Immediate Action)",
              "เขียน 'สิ่งที่ต้องพัฒนาต่อ' (Growth Area)",
              "ลงในบัตรสะท้อนคิด",
            ],
          },
          {
            heading: "สร้างความยั่งยืนผ่านเครือข่าย PLC",
            items: [
              "จัดตั้งเครือข่าย AI-PLC สำหรับครูประถมศึกษาจังหวัดกาฬสินธุ์",
              "รวบรวม Prompt Library ทั้ง 4 วัน เข้าสู่คลังส่วนกลาง",
            ],
          },
          {
            heading: "3 กุญแจสำคัญแห่งความสำเร็จระยะยาว",
            items: [
              "Continuous Learning: ฝึกปรับ Prompt และสำรวจฟีเจอร์ใหม่เป็นประจำ",
              "PLC Network: แบ่งปัน AIPACK Lesson Plan และ Prompt Library ระหว่างครูในเครือข่าย",
              "Ethics by Design: ใช้ AI บนฐานความปลอดภัยข้อมูลนักเรียนและความเป็นธรรม",
            ],
          },
        ],
        plo: ["PLO1", "PLO2", "PLO3", "PLO4"],
      },
    ],
  },
];

export function getAllSessions(): Session[] {
  return days.flatMap((day) => day.sessions);
}

export function getSessionBySlug(slug: string): Session | undefined {
  return getAllSessions().find((s) => s.slug === slug);
}

export function getDayByNumber(num: number): Day | undefined {
  return days.find((d) => d.number === num);
}
