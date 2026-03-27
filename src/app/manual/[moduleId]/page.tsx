import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BookOpen,
  Cpu,
  Database,
  BookMarked,
  Brain,
  Sparkles,
  FileEdit,
  Layers,
  ClipboardCheck,
  Rocket,
  FileText,
  ChevronRight,
  ChevronLeft,
  Clock,
  CheckCircle2,
  ListChecks,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { manualChapters, getChapterById } from "@/data/manual";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Cpu,
  Database,
  BookMarked,
  Brain,
  Sparkles,
  FileEdit,
  Layers,
  ClipboardCheck,
  Rocket,
  FileText,
};

export function generateStaticParams() {
  return manualChapters.map((c) => ({ moduleId: c.id }));
}

export default async function ManualChapterPage({
  params,
}: {
  params: Promise<{ moduleId: string }>;
}) {
  const { moduleId } = await params;
  const chapter = getChapterById(moduleId);
  if (!chapter) notFound();

  const Icon = iconMap[chapter.icon] ?? BookOpen;
  const currentIndex = manualChapters.findIndex((c) => c.id === moduleId);
  const prevChapter = currentIndex > 0 ? manualChapters[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < manualChapters.length - 1
      ? manualChapters[currentIndex + 1]
      : null;

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 lg:py-14 animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-text-muted mb-6">
        <Link href="/" className="hover:text-text-secondary transition-colors">
          หน้าแรก
        </Link>
        <ChevronRight className="w-3 h-3" />
        <Link
          href="/manual"
          className="hover:text-text-secondary transition-colors"
        >
          คู่มือการอบรม
        </Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-text-secondary">{chapter.number}</span>
      </div>

      {/* Chapter header */}
      <div className={`rounded-2xl border ${chapter.borderColor} ${chapter.bgColor} p-6 mb-8`}>
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-xl bg-white border ${chapter.borderColor} flex items-center justify-center shrink-0`}>
            <Icon className={`w-6 h-6 ${chapter.color}`} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1">
              <span className={`text-sm font-bold ${chapter.color}`}>
                {chapter.number}
              </span>
              {chapter.duration !== "—" && (
                <span className={`flex items-center gap-1 text-xs ${chapter.color} opacity-70`}>
                  <Clock className="w-3.5 h-3.5" />
                  {chapter.duration}
                </span>
              )}
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-1">
              {chapter.title}
            </h1>
            <p className={`text-sm font-medium ${chapter.color} opacity-80 mb-3`}>
              {chapter.titleEn}
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              {chapter.description}
            </p>
          </div>
        </div>
      </div>

      {/* Learning outcomes */}
      {chapter.outcomes.length > 0 && (
        <section className="mb-8">
          <h2 className="flex items-center gap-2 text-base font-bold text-text-primary mb-3">
            <CheckCircle2 className={`w-4.5 h-4.5 ${chapter.color}`} />
            ผลลัพธ์การเรียนรู้ที่คาดหวัง
          </h2>
          <ul className="space-y-2">
            {chapter.outcomes.map((outcome, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-text-secondary"
              >
                <span className={`w-5 h-5 rounded-full ${chapter.bgColor} border ${chapter.borderColor} flex items-center justify-center text-[10px] font-bold ${chapter.color} shrink-0 mt-0.5`}>
                  {i + 1}
                </span>
                {outcome}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Sections */}
      <section>
        <h2 className="flex items-center gap-2 text-base font-bold text-text-primary mb-4">
          <ListChecks className={`w-4.5 h-4.5 ${chapter.color}`} />
          เนื้อหาแต่ละหัวข้อ
        </h2>

        <div className="space-y-5">
          {chapter.sections.map((section, idx) => (
            <div
              key={section.id}
              className="rounded-xl border border-card-border bg-card-bg overflow-hidden"
            >
              {/* Section header */}
              <div className={`flex items-center justify-between px-4 py-3 ${chapter.bgColor} border-b ${chapter.borderColor}`}>
                <div className="flex items-center gap-2 min-w-0">
                  <span className={`w-6 h-6 rounded-md bg-white border ${chapter.borderColor} flex items-center justify-center text-[11px] font-bold ${chapter.color} shrink-0`}>
                    {idx + 1}
                  </span>
                  <h3 className="text-sm font-semibold text-text-primary truncate">
                    {section.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 shrink-0 ml-2">
                  {section.duration && (
                    <span className={`flex items-center gap-1 text-[11px] ${chapter.color} opacity-70`}>
                      <Clock className="w-3 h-3" />
                      {section.duration}
                    </span>
                  )}
                  {section.contentPath && (
                    <Link
                      href={section.contentPath}
                      className={`flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-white border ${chapter.borderColor} ${chapter.color} hover:opacity-80 transition-opacity`}
                    >
                      <ExternalLink className="w-3 h-3" />
                      เปิดบทเรียน
                    </Link>
                  )}
                </div>
              </div>

              {/* Section items */}
              <ul className="divide-y divide-card-border">
                {section.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2.5 px-4 py-2.5 text-sm text-text-secondary"
                  >
                    <ArrowRight className={`w-3.5 h-3.5 ${chapter.color} shrink-0 mt-0.5`} />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-10 pt-6 border-t border-card-border gap-4">
        {prevChapter ? (
          <Link
            href={`/manual/${prevChapter.id}`}
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <div className="text-left">
              <p className="text-[10px] text-text-muted">ก่อนหน้า</p>
              <p className="font-medium">{prevChapter.number}</p>
            </div>
          </Link>
        ) : (
          <div />
        )}

        <Link
          href="/manual"
          className="text-xs text-text-muted hover:text-text-secondary transition-colors"
        >
          สารบัญ
        </Link>

        {nextChapter ? (
          <Link
            href={`/manual/${nextChapter.id}`}
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors group text-right"
          >
            <div>
              <p className="text-[10px] text-text-muted">ถัดไป</p>
              <p className="font-medium">{nextChapter.number}</p>
            </div>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
