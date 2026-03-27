import Link from "next/link";
import {
  Target,
  Shield,
  Wand2,
  Palette,
  BarChart3,
  CheckCircle2,
  ArrowLeft,
  BookOpen,
} from "lucide-react";
import { objectives, plos, days } from "@/data/curriculum";

const ploIcons = [Shield, Wand2, Palette, BarChart3];
const ploBorderColors = [
  "border-l-day1",
  "border-l-success",
  "border-l-warning",
  "border-l-day3",
];

export default function ObjectivesPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 lg:py-14 animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-text-muted mb-6">
        <Link href="/" className="hover:text-text-secondary transition-colors">
          หน้าแรก
        </Link>
        <span>/</span>
        <span className="text-text-secondary">วัตถุประสงค์และ PLO</span>
      </div>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-2xl lg:text-3xl font-bold text-text-primary mb-2">
          วัตถุประสงค์และผลลัพธ์การเรียนรู้
        </h1>
        <p className="text-base text-text-secondary">
          Objectives & Program Learning Outcomes (PLO)
        </p>
      </div>

      {/* Objectives */}
      <section id="objectives" className="mb-12">
        <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-accent" />
          วัตถุประสงค์ของหลักสูตร
        </h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
          {objectives.map((obj, i) => (
            <div
              key={i}
              className="flex items-start gap-4 text-sm text-text-secondary"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-accent/10 text-accent text-xs font-bold shrink-0">
                {i + 1}
              </span>
              <p className="pt-0.5">{obj}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PLOs */}
      <section id="plo" className="mb-12">
        <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-accent" />
          ผลลัพธ์การเรียนรู้ระดับหลักสูตร (PLO)
        </h2>

        <div className="space-y-4">
          {plos.map((plo, i) => {
            const Icon = ploIcons[i];
            const relatedSessions = days
              .flatMap((d) => d.sessions)
              .filter((s) => s.plo.includes(plo.id));

            return (
              <div
                key={plo.id}
                className={`bg-card-bg border border-card-border rounded-xl p-6 border-l-4 ${ploBorderColors[i]}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`plo-badge-${i + 1} w-10 h-10 rounded-lg flex items-center justify-center`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`plo-badge-${i + 1} text-xs px-2 py-0.5 rounded-md font-bold`}
                      >
                        {plo.id}
                      </span>
                      <h3 className="text-base font-bold text-text-primary">
                        {plo.title}
                      </h3>
                    </div>
                    <p className="text-sm text-text-secondary mt-0.5">
                      {plo.description}
                    </p>
                  </div>
                </div>

                {/* Sub-items */}
                <div className="mb-4 space-y-2">
                  {plo.subItems.map((item, j) => (
                    <div
                      key={j}
                      className="flex items-start gap-2 text-sm text-text-muted"
                    >
                      <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Related sessions */}
                <div>
                  <p className="text-xs font-semibold text-text-muted mb-2">
                    Session ที่เกี่ยวข้อง:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {relatedSessions.map((s) => (
                      <Link
                        key={s.id}
                        href={`/session/${s.slug}`}
                        className="text-[11px] px-2 py-1 rounded-md bg-background border border-card-border text-text-muted hover:text-accent hover:border-accent/30 transition-colors"
                      >
                        {s.number > 0
                          ? `S${s.number}: ${s.title}`
                          : s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Back */}
      <div className="border-t border-card-border pt-6">
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
