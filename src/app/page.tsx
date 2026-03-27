import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Target,
  Users,
  Clock,
  ArrowRight,
  Shield,
  Wand2,
  Palette,
  BarChart3,
} from "lucide-react";
import { courseInfo, days, plos } from "@/data/curriculum";

const dayColors = [
  "from-day1/20 to-day1/5 border-day1/30",
  "from-day2/20 to-day2/5 border-day2/30",
  "from-day3/20 to-day3/5 border-day3/30",
  "from-day4/20 to-day4/5 border-day4/30",
];

const dayTextColors = ["text-day1", "text-day2", "text-day3", "text-day4"];

const ploIcons = [Shield, Wand2, Palette, BarChart3];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 lg:py-16 animate-fade-in">
      {/* Hero */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
          <GraduationCap className="w-3.5 h-3.5" />
          หลักสูตรอบรมเชิงปฏิบัติการ {courseInfo.version}
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4 leading-tight">
          {courseInfo.title}
        </h1>
        <p className="text-lg text-text-secondary mb-2">
          {courseInfo.titleTh}
        </p>
        <p className="text-sm text-text-muted mb-6">
          {courseInfo.subtitle}
        </p>

        {/* Quick info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: Users, label: "กลุ่มเป้าหมาย", value: courseInfo.targetGroup },
            { icon: Clock, label: "ระยะเวลา", value: courseInfo.duration },
            { icon: Users, label: "จำนวนผู้เข้าอบรม", value: courseInfo.participants },
            {
              icon: GraduationCap,
              label: "หน่วยงาน",
              value: "มหาวิทยาลัยกาฬสินธุ์",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-3 rounded-lg bg-card-bg border border-card-border"
            >
              <item.icon className="w-4 h-4 text-text-muted mb-1.5" />
              <p className="text-[11px] text-text-muted">{item.label}</p>
              <p className="text-sm text-text-primary font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PLOs */}
      <section className="mb-12">
        <h2 id="plo" className="text-xl font-bold text-text-primary mb-1 flex items-center gap-2">
          <Target className="w-5 h-5 text-accent" />
          ผลลัพธ์การเรียนรู้ (PLO)
        </h2>
        <p className="text-sm text-text-muted mb-4">
          Program Learning Outcomes ที่ผู้เข้าอบรมจะได้รับ
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          {plos.map((plo, i) => {
            const Icon = ploIcons[i];
            return (
              <div
                key={plo.id}
                className={`p-4 rounded-xl bg-card-bg border border-card-border hover:border-accent/30 transition-colors`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`plo-badge-${i + 1} px-2 py-0.5 rounded-md text-xs font-bold`}>
                    {plo.id}
                  </div>
                  <span className="text-sm font-semibold text-text-primary">
                    {plo.title}
                  </span>
                </div>
                <p className="text-xs text-text-secondary mb-2">{plo.description}</p>
                <ul className="space-y-1">
                  {plo.subItems.map((item, j) => (
                    <li key={j} className="text-xs text-text-muted flex items-start gap-1.5">
                      <span className="text-accent mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Days overview */}
      <section>
        <h2 className="text-xl font-bold text-text-primary mb-1 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-accent" />
          โครงสร้างหลักสูตร 4 วัน
        </h2>
        <p className="text-sm text-text-muted mb-6">
          คลิกเพื่อดูรายละเอียดแต่ละวัน
        </p>

        <div className="space-y-4">
          {days.map((day, i) => (
            <div
              key={day.number}
              className={`rounded-xl border bg-gradient-to-br ${dayColors[i]} p-5`}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className={`text-xs font-bold ${dayTextColors[i]} mb-1`}>
                    วันที่ {day.number}
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">
                    {day.title}
                  </h3>
                  <p className="text-sm text-text-secondary">{day.titleEn}</p>
                </div>
                <Link
                  href={`/day/${day.number}`}
                  className="flex items-center gap-1 text-xs text-accent hover:text-accent-hover transition-colors"
                >
                  ดูรายละเอียด
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <p className="text-xs text-text-muted mb-3">
                <strong>เป้าหมาย:</strong> {day.goal}
              </p>

              <div className="space-y-1.5">
                {day.sessions.map((session) => (
                  <Link
                    key={session.id}
                    href={`/session/${session.slug}`}
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-background/50 hover:bg-background/80 border border-transparent hover:border-card-border transition-all group"
                  >
                    <div className="text-[11px] text-text-muted font-mono w-24 shrink-0">
                      {session.time}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-text-primary group-hover:text-accent transition-colors truncate">
                        {session.number > 0 && (
                          <span className="text-text-muted">
                            Session {session.number}:{" "}
                          </span>
                        )}
                        {session.title}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      {session.plo.map((p) => (
                        <span
                          key={p}
                          className={`plo-badge-${p.replace("PLO", "")} text-[10px] px-1.5 py-0.5 rounded font-medium`}
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
