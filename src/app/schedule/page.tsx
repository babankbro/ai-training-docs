import Link from "next/link";
import {
  CalendarDays,
  Clock,
  Coffee,
  UtensilsCrossed,
  Award,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { days, courseInfo } from "@/data/curriculum";

const dayAccentColors: Record<number, { dot: string; line: string; badge: string; bg: string; ring: string }> = {
  1: {
    dot: "bg-day1",
    line: "bg-day1/30",
    badge: "bg-day1/10 text-day1",
    bg: "bg-day1/5 border-day1/20",
    ring: "ring-day1/30",
  },
  2: {
    dot: "bg-day2",
    line: "bg-day2/30",
    badge: "bg-day2/10 text-day2",
    bg: "bg-day2/5 border-day2/20",
    ring: "ring-day2/30",
  },
  3: {
    dot: "bg-day3",
    line: "bg-day3/30",
    badge: "bg-day3/10 text-day3",
    bg: "bg-day3/5 border-day3/20",
    ring: "ring-day3/30",
  },
  4: {
    dot: "bg-day4",
    line: "bg-day4/30",
    badge: "bg-day4/10 text-day4",
    bg: "bg-day4/5 border-day4/20",
    ring: "ring-day4/30",
  },
};

function isBreakTime(time: string): "morning-break" | "lunch" | "closing" | null {
  if (time.includes("10:30") && time.includes("10:45")) return "morning-break";
  if (time.includes("12:00") && time.includes("13:00")) return "lunch";
  if (time.includes("16:00") && time.includes("16:30")) return "closing";
  return null;
}

export default function SchedulePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 lg:py-14 animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-text-muted mb-6">
        <Link href="/" className="hover:text-text-secondary transition-colors">
          หน้าแรก
        </Link>
        <span>/</span>
        <span className="text-text-secondary">กำหนดการอบรม</span>
      </div>

      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3">
          <CalendarDays className="w-3.5 h-3.5" />
          กำหนดการอบรม {courseInfo.duration}
        </div>
        <h1 className="text-2xl lg:text-3xl font-bold text-text-primary mb-2">
          กำหนดการอบรม
        </h1>
        <p className="text-base text-text-secondary">
          Training Schedule — {courseInfo.title} {courseInfo.version}
        </p>
      </div>

      {/* Full Schedule Tree */}
      <div className="relative">
        {days.map((day, dayIdx) => {
          const colors = dayAccentColors[day.number];

          /* Build full timeline including breaks */
          type TimelineItem =
            | { type: "session"; session: (typeof day.sessions)[number] }
            | { type: "break"; label: string; time: string; icon: "coffee" | "lunch" | "closing" };

          const timeline: TimelineItem[] = [];

          day.sessions.forEach((session, sIdx) => {
            timeline.push({ type: "session", session });

            /* Insert breaks between sessions based on known schedule gaps */
            const endHour = parseInt(session.time.split(" - ")[1]?.split(":")[0] ?? "0", 10);
            const endMin = parseInt(session.time.split(" - ")[1]?.split(":")[1] ?? "0", 10);
            const nextSession = day.sessions[sIdx + 1];

            if (nextSession) {
              const nextStartHour = parseInt(nextSession.time.split(" - ")[0]?.split(":")[0] ?? "0", 10);
              const nextStartMin = parseInt(nextSession.time.split(" - ")[0]?.split(":")[1] ?? "0", 10);
              const gapMinutes = (nextStartHour * 60 + nextStartMin) - (endHour * 60 + endMin);

              if (gapMinutes >= 45 && endHour < 12) {
                timeline.push({
                  type: "break",
                  label: "พักรับประทานอาหารว่าง",
                  time: `${session.time.split(" - ")[1]} - ${nextSession.time.split(" - ")[0]}`,
                  icon: "coffee",
                });
              } else if (gapMinutes >= 45 && endHour >= 12) {
                timeline.push({
                  type: "break",
                  label: "พักรับประทานอาหารกลางวัน",
                  time: `${session.time.split(" - ")[1]} - ${nextSession.time.split(" - ")[0]}`,
                  icon: "lunch",
                });
              } else if (gapMinutes >= 10) {
                timeline.push({
                  type: "break",
                  label: "พักรับประทานอาหารว่าง",
                  time: `${session.time.split(" - ")[1]} - ${nextSession.time.split(" - ")[0]}`,
                  icon: "coffee",
                });
              }
            }
          });

          /* Add closing ceremony for day 3 */
          if (day.number === 3) {
            timeline.push({
              type: "break",
              label: "พิธีปิดและมอบวุฒิบัตร",
              time: "16:00 - 16:30",
              icon: "closing",
            });
          }

          return (
            <div key={day.number} className="mb-8 last:mb-0">
              {/* Day Header Node */}
              <div className="flex items-start gap-4 mb-1">
                {/* Tree trunk dot */}
                <div className="flex flex-col items-center shrink-0 w-10">
                  <div className={`w-10 h-10 rounded-xl ${colors.dot} text-white flex items-center justify-center text-sm font-bold shadow-sm`}>
                    D{day.number}
                  </div>
                </div>

                {/* Day info */}
                <div className={`flex-1 p-4 rounded-xl border ${colors.bg}`}>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${colors.badge}`}>
                      วันที่ {day.number}
                    </span>
                    <Link
                      href={`/day/${day.number}`}
                      className="text-xs text-accent hover:text-accent-hover transition-colors flex items-center gap-0.5"
                    >
                      ดูรายละเอียด <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <h2 className="text-lg font-bold text-text-primary">{day.title}</h2>
                  <p className="text-sm text-text-secondary">{day.titleEn}</p>
                  <p className="text-xs text-text-muted mt-1">
                    <strong>เป้าหมาย:</strong> {day.goal}
                  </p>
                </div>
              </div>

              {/* Sessions tree branch */}
              <div className="flex gap-4">
                {/* Vertical line */}
                <div className="flex flex-col items-center w-10 shrink-0">
                  <div className={`flex-1 w-0.5 ${colors.line} ${dayIdx < days.length - 1 ? '' : ''}`} />
                </div>

                {/* Session nodes */}
                <div className="flex-1 py-2 space-y-1.5">
                  {timeline.map((item, tIdx) => {
                    if (item.type === "break") {
                      const BreakIcon =
                        item.icon === "lunch"
                          ? UtensilsCrossed
                          : item.icon === "closing"
                          ? Award
                          : Coffee;
                      return (
                        <div key={`break-${tIdx}`} className="flex items-center gap-3 pl-2 py-1.5">
                          {/* Horizontal connector */}
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${colors.line}`} />
                            <BreakIcon className="w-3.5 h-3.5 text-text-muted" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] text-text-muted font-mono w-[105px] shrink-0">
                              {item.time}
                            </span>
                            <span className="text-xs text-text-muted italic">
                              {item.label}
                            </span>
                          </div>
                        </div>
                      );
                    }

                    const session = item.session;
                    return (
                      <Link
                        key={session.id}
                        href={`/session/${session.slug}`}
                        className="group flex items-start gap-3 pl-2 py-2 rounded-lg hover:bg-card-bg transition-colors"
                      >
                        {/* Node dot + connector */}
                        <div className="flex items-center gap-2 mt-1.5 shrink-0">
                          <div className={`w-2.5 h-2.5 rounded-full ${colors.dot} ring-2 ${colors.ring} group-hover:ring-4 transition-all`} />
                          <Clock className="w-3.5 h-3.5 text-text-muted" />
                        </div>

                        {/* Time */}
                        <span className="text-[11px] text-text-muted font-mono w-[105px] shrink-0 mt-1">
                          {session.time}
                        </span>

                        {/* Session info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <p className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
                              {session.number > 0 && (
                                <span className="text-text-muted font-normal">
                                  S{session.number}:{" "}
                                </span>
                              )}
                              {session.title}
                            </p>
                            {session.plo.map((p) => (
                              <span
                                key={p}
                                className={`plo-badge-${p.replace("PLO", "")} text-[9px] px-1.5 py-0.5 rounded font-bold`}
                              >
                                {p}
                              </span>
                            ))}
                          </div>
                          <p className="text-xs text-text-muted mt-0.5 truncate">
                            {session.titleEn}
                          </p>
                          <p className="text-[11px] text-text-muted mt-0.5">
                            {session.duration}
                          </p>
                        </div>

                        <ChevronRight className="w-4 h-4 text-text-muted group-hover:text-accent shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Connector between days */}
              {dayIdx < days.length - 1 && (
                <div className="flex gap-4">
                  <div className="flex flex-col items-center w-10 shrink-0">
                    <div className="w-0.5 h-6 bg-card-border" />
                  </div>
                  <div />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Back */}
      <div className="border-t border-card-border pt-6 mt-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          กลับหน้าแรก
        </Link>
      </div>
    </div>
  );
}
