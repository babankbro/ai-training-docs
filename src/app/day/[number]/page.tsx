import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Target,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import { days, getDayByNumber } from "@/data/curriculum";

export function generateStaticParams() {
  return days.map((d) => ({ number: String(d.number) }));
}

const dayColorMap: Record<number, { text: string; bg: string; border: string }> = {
  1: { text: "text-day1", bg: "bg-day1/10", border: "border-day1/30" },
  2: { text: "text-day2", bg: "bg-day2/10", border: "border-day2/30" },
  3: { text: "text-day3", bg: "bg-day3/10", border: "border-day3/30" },
  4: { text: "text-day4", bg: "bg-day4/10", border: "border-day4/30" },
};

export default async function DayPage({
  params,
}: {
  params: Promise<{ number: string }>;
}) {
  const { number } = await params;
  const dayNum = parseInt(number, 10);
  const day = getDayByNumber(dayNum);
  if (!day) notFound();

  const colors = dayColorMap[dayNum];
  const prevDay = dayNum > 1 ? getDayByNumber(dayNum - 1) : null;
  const nextDay = dayNum < 4 ? getDayByNumber(dayNum + 1) : null;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 lg:py-14 animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-text-muted mb-6">
        <Link href="/" className="hover:text-text-secondary transition-colors">
          หน้าแรก
        </Link>
        <span>/</span>
        <span className="text-text-secondary">วันที่ {dayNum}</span>
      </div>

      {/* Header */}
      <div className="mb-10">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${colors.bg} ${colors.text} text-xs font-bold mb-3`}>
          วันที่ {dayNum}
        </div>
        <h1 className="text-2xl lg:text-3xl font-bold text-text-primary mb-2">
          {day.title}
        </h1>
        <p className="text-base text-text-secondary mb-3">{day.titleEn}</p>
        <div className="flex items-center gap-2 p-3 rounded-lg bg-card-bg border border-card-border">
          <Target className="w-4 h-4 text-accent shrink-0" />
          <p className="text-sm text-text-secondary">
            <span className="font-semibold text-text-primary">เป้าหมายรายวัน: </span>
            {day.goal}
          </p>
        </div>
      </div>

      {/* Timeline */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-accent" />
          กำหนดการ
        </h2>
        <div className="space-y-3">
          {day.sessions.map((session, i) => (
            <Link
              key={session.id}
              href={`/session/${session.slug}`}
              className="block group"
            >
              <div className={`relative p-5 rounded-xl bg-card-bg border border-card-border hover:border-accent/30 transition-all`}>
                {/* Timeline connector */}
                {i < day.sessions.length - 1 && (
                  <div className="absolute left-[2.1rem] top-full w-px h-3 bg-card-border" />
                )}

                <div className="flex items-start gap-4">
                  {/* Time */}
                  <div className="shrink-0 text-center">
                    <div className={`w-10 h-10 rounded-lg ${colors.bg} ${colors.text} flex items-center justify-center text-sm font-bold`}>
                      {session.number > 0 ? session.number : "•"}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-3.5 h-3.5 text-text-muted" />
                      <span className="text-xs text-text-muted font-mono">
                        {session.time} ({session.duration})
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors mb-1">
                      {session.number > 0 && (
                        <span className="text-text-muted">
                          Session {session.number}:{" "}
                        </span>
                      )}
                      {session.title}
                    </h3>
                    <p className="text-sm text-text-muted mb-2">
                      {session.titleEn}
                    </p>

                    {/* Quick objectives */}
                    <div className="space-y-1">
                      {session.objectives.slice(0, 2).map((obj, j) => (
                        <div
                          key={j}
                          className="flex items-start gap-2 text-xs text-text-muted"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{obj}</span>
                        </div>
                      ))}
                    </div>

                    {/* PLO badges */}
                    <div className="flex gap-1.5 mt-2">
                      {session.plo.map((p) => (
                        <span
                          key={p}
                          className={`plo-badge-${p.replace("PLO", "")} text-[10px] px-1.5 py-0.5 rounded font-medium`}
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-accent shrink-0 mt-2 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between border-t border-card-border pt-6">
        {prevDay ? (
          <Link
            href={`/day/${prevDay.number}`}
            className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <div>
              <p className="text-[11px] text-text-muted">ก่อนหน้า</p>
              <p className="text-text-secondary group-hover:text-accent">
                วันที่ {prevDay.number}: {prevDay.title}
              </p>
            </div>
          </Link>
        ) : (
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>กลับหน้าแรก</span>
          </Link>
        )}
        {nextDay ? (
          <Link
            href={`/day/${nextDay.number}`}
            className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors group"
          >
            <div className="text-right">
              <p className="text-[11px] text-text-muted">ถัดไป</p>
              <p className="text-text-secondary group-hover:text-accent">
                วันที่ {nextDay.number}: {nextDay.title}
              </p>
            </div>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
