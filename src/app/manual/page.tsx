import Link from "next/link";
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
  Clock,
  GraduationCap,
  Users,
} from "lucide-react";
import { manualInfo, manualChapters } from "@/data/manual";

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

export default function ManualPage() {
  const modules = manualChapters.filter(
    (c) => c.id !== "intro" && c.id !== "appendix"
  );
  const intro = manualChapters.find((c) => c.id === "intro")!;
  const appendix = manualChapters.find((c) => c.id === "appendix")!;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 lg:py-16 animate-fade-in">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          คู่มือการอบรม
        </div>
        <h1 className="text-3xl font-bold text-text-primary mb-2 leading-tight">
          {manualInfo.titleEn}
        </h1>
        <p className="text-text-secondary text-base mb-4">
          {manualInfo.subtitle}
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-text-muted">
          <span className="flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4" />
            {manualInfo.organization}
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            {manualInfo.targetGroup}
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            {manualInfo.totalPages} หน้า · {manualInfo.totalModules} โมดูล
          </span>
        </div>
      </div>

      {/* Intro chapter */}
      <Link
        href={`/manual/${intro.id}`}
        className={`flex items-center justify-between p-4 rounded-xl border ${intro.borderColor} ${intro.bgColor} hover:shadow-sm transition-all mb-3 group`}
      >
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-lg ${intro.bgColor} border ${intro.borderColor} flex items-center justify-center`}>
            <BookOpen className={`w-4.5 h-4.5 ${intro.color}`} />
          </div>
          <div>
            <p className={`text-xs font-semibold ${intro.color} mb-0.5`}>{intro.number}</p>
            <p className="text-sm font-semibold text-text-primary">{intro.title}</p>
          </div>
        </div>
        <ChevronRight className={`w-4 h-4 ${intro.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
      </Link>

      {/* Module grid */}
      <h2 className="text-lg font-bold text-text-primary mt-8 mb-4 flex items-center gap-2">
        <Layers className="w-5 h-5 text-accent" />
        โมดูลการอบรม 9 โมดูล
      </h2>

      <div className="space-y-3">
        {modules.map((chapter) => {
          const Icon = iconMap[chapter.icon] ?? BookOpen;
          return (
            <Link
              key={chapter.id}
              href={`/manual/${chapter.id}`}
              className={`flex items-start justify-between p-4 rounded-xl border ${chapter.borderColor} bg-white hover:${chapter.bgColor} hover:shadow-sm transition-all group`}
            >
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className={`w-9 h-9 rounded-lg ${chapter.bgColor} border ${chapter.borderColor} flex items-center justify-center shrink-0 mt-0.5`}>
                  <Icon className={`w-4 h-4 ${chapter.color}`} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className={`text-xs font-semibold ${chapter.color}`}>
                      {chapter.number}
                    </p>
                    <span className={`flex items-center gap-1 text-[11px] ${chapter.color} opacity-70`}>
                      <Clock className="w-3 h-3" />
                      {chapter.duration}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-text-primary truncate">
                    {chapter.title}
                  </p>
                  <p className="text-xs text-text-muted mt-0.5 line-clamp-1">
                    {chapter.description}
                  </p>
                  {/* Section pills */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {chapter.sections.map((sec) => (
                      <span
                        key={sec.id}
                        className={`text-[10px] px-2 py-0.5 rounded-full ${chapter.bgColor} ${chapter.color} border ${chapter.borderColor}`}
                      >
                        {sec.title.split(" ").slice(0, 4).join(" ")}
                        {sec.title.split(" ").length > 4 ? "…" : ""}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <ChevronRight className={`w-4 h-4 ${chapter.color} opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-2 ml-2`} />
            </Link>
          );
        })}
      </div>

      {/* Appendix */}
      <Link
        href={`/manual/${appendix.id}`}
        className={`flex items-center justify-between p-4 rounded-xl border ${appendix.borderColor} ${appendix.bgColor} hover:shadow-sm transition-all mt-3 group`}
      >
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-lg ${appendix.bgColor} border ${appendix.borderColor} flex items-center justify-center`}>
            <FileText className={`w-4 h-4 ${appendix.color}`} />
          </div>
          <div>
            <p className={`text-xs font-semibold ${appendix.color} mb-0.5`}>{appendix.number}</p>
            <p className="text-sm font-semibold text-text-primary">{appendix.title}</p>
            <p className="text-xs text-text-muted">{appendix.description}</p>
          </div>
        </div>
        <ChevronRight className={`w-4 h-4 ${appendix.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
      </Link>
    </div>
  );
}
