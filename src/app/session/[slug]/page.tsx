import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Target,
  CheckCircle2,
  BookOpen,
  Lightbulb,
} from "lucide-react";
import { getAllSessions, getSessionBySlug, days } from "@/data/curriculum";
import SessionToc from "@/components/SessionToc";

export function generateStaticParams() {
  return getAllSessions().map((s) => ({ slug: s.slug }));
}

export default async function SessionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const session = getSessionBySlug(slug);
  if (!session) notFound();

  const allSessions = getAllSessions();
  const currentIndex = allSessions.findIndex((s) => s.slug === slug);
  const prevSession = currentIndex > 0 ? allSessions[currentIndex - 1] : null;
  const nextSession =
    currentIndex < allSessions.length - 1
      ? allSessions[currentIndex + 1]
      : null;

  const day = days.find((d) => d.number === session.dayNumber);

  const dayColorMap: Record<number, string> = {
    1: "text-day1 bg-day1/10",
    2: "text-day2 bg-day2/10",
    3: "text-day3 bg-day3/10",
    4: "text-day4 bg-day4/10",
  };

  const tocItems = [
    { id: "objectives", text: "วัตถุประสงค์", level: 2 },
    { id: "outcomes", text: "ผลลัพธ์การเรียนรู้", level: 2 },
    ...session.content.map((c, i) => ({
      id: `content-${i}`,
      text: c.heading,
      level: 2,
    })),
    { id: "plo", text: "PLO ที่เกี่ยวข้อง", level: 2 },
  ];

  return (
    <div className="flex gap-8 max-w-6xl mx-auto px-6 py-10 lg:py-14 animate-fade-in">
      {/* Main content */}
      <div className="flex-1 min-w-0">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-text-muted mb-6">
          <Link href="/" className="hover:text-text-secondary transition-colors">
            หน้าแรก
          </Link>
          <span>/</span>
          <Link
            href={`/day/${session.dayNumber}`}
            className="hover:text-text-secondary transition-colors"
          >
            วันที่ {session.dayNumber}
          </Link>
          <span>/</span>
          <span className="text-text-secondary">
            {session.number > 0 ? `Session ${session.number}` : session.title}
          </span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span
              className={`px-2.5 py-1 rounded-lg text-xs font-bold ${dayColorMap[session.dayNumber]}`}
            >
              วันที่ {session.dayNumber}
            </span>
            <span className="flex items-center gap-1 text-xs text-text-muted">
              <Clock className="w-3.5 h-3.5" />
              {session.time} ({session.duration})
            </span>
            {session.plo.map((p) => (
              <span
                key={p}
                className={`plo-badge-${p.replace("PLO", "")} text-xs px-2 py-0.5 rounded-md font-bold`}
              >
                {p}
              </span>
            ))}
          </div>

          {session.number > 0 && (
            <p className="text-sm text-accent font-medium mb-1">
              Session {session.number}
            </p>
          )}
          <h1 className="text-2xl lg:text-3xl font-bold text-text-primary mb-2">
            {session.title}
          </h1>
          <p className="text-base text-text-secondary">{session.titleEn}</p>
        </div>

        {/* Objectives */}
        <section id="objectives" className="mb-8">
          <h2 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
            <Target className="w-5 h-5 text-accent" />
            วัตถุประสงค์
          </h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5">
            <ul className="space-y-2.5">
              {session.objectives.map((obj, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-text-secondary"
                >
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent/10 text-accent text-[11px] font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {obj}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section id="outcomes" className="mb-8">
          <h2 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-success" />
            ผลลัพธ์การเรียนรู้
          </h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5">
            <ul className="space-y-2.5">
              {session.learningOutcomes.map((lo, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-text-secondary"
                >
                  <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                  {lo}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Content Sections */}
        {session.content.map((section, i) => (
          <section key={i} id={`content-${i}`} className="mb-8">
            <h2 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-info" />
              {section.heading}
            </h2>
            <div className="bg-card-bg border border-card-border rounded-xl p-5">
              <ul className="space-y-2.5">
                {section.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-sm text-text-secondary"
                  >
                    <Lightbulb className="w-4 h-4 text-warning shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        {/* PLO Section */}
        <section id="plo" className="mb-10">
          <h2 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
            <Target className="w-5 h-5 text-accent" />
            PLO ที่เกี่ยวข้อง
          </h2>
          <div className="flex flex-wrap gap-2">
            {session.plo.map((p) => (
              <Link
                key={p}
                href="/objectives"
                className={`plo-badge-${p.replace("PLO", "")} px-3 py-1.5 rounded-lg text-sm font-bold hover:opacity-80 transition-opacity`}
              >
                {p}
              </Link>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between border-t border-card-border pt-6">
          {prevSession ? (
            <Link
              href={`/session/${prevSession.slug}`}
              className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <div className="text-right">
                <p className="text-[11px] text-text-muted">ก่อนหน้า</p>
                <p className="text-text-secondary group-hover:text-accent transition-colors">
                  {prevSession.number > 0
                    ? `Session ${prevSession.number}`
                    : prevSession.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextSession ? (
            <Link
              href={`/session/${nextSession.slug}`}
              className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors group"
            >
              <div>
                <p className="text-[11px] text-text-muted">ถัดไป</p>
                <p className="text-text-secondary group-hover:text-accent transition-colors">
                  {nextSession.number > 0
                    ? `Session ${nextSession.number}`
                    : nextSession.title}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* Table of Contents */}
      <SessionToc items={tocItems} />
    </div>
  );
}
