"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { days } from "@/data/curriculum";
import { manualChapters } from "@/data/manual";
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  GraduationCap,
  Home,
  Target,
  Clock,
  Menu,
  X,
  CalendarDays,
  BookMarked,
} from "lucide-react";
import { useState } from "react";

const dayColors: Record<number, string> = {
  1: "text-day1",
  2: "text-day2",
  3: "text-day3",
  4: "text-day4",
};

const dayBgColors: Record<number, string> = {
  1: "bg-day1/10",
  2: "bg-day2/10",
  3: "bg-day3/10",
  4: "bg-day4/10",
};

export default function Sidebar() {
  const pathname = usePathname();
  
  const [manualOpen, setManualOpen] = useState(false);
  const [expandedManualChapters, setExpandedManualChapters] = useState<Record<string, boolean>>({});
  const [daysOpen, setDaysOpen] = useState(true);

  const toggleManualChapter = (id: string) =>
    setExpandedManualChapters((prev) => ({ ...prev, [id]: !prev[id] }));
  const [expandedDays, setExpandedDays] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDay = (dayNum: number) => {
    setExpandedDays((prev) => ({ ...prev, [dayNum]: !prev[dayNum] }));
  };

  const isActive = (path: string) => pathname === path;

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Logo / Title */}
      <div className="p-5 border-b border-sidebar-border">
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setMobileOpen(false)}>
          <div className="w-9 h-9 rounded-lg bg-accent/20 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h1 className="text-sm font-semibold text-text-primary leading-tight">
              AI for Education
            </h1>
            <p className="text-[11px] text-text-muted">Training Curriculum V2</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto sidebar-scroll p-3">
        {/* Overview */}
        <div className="mb-2">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
              isActive("/")
                ? "sidebar-link-active"
                : "text-text-secondary hover:text-text-primary hover:bg-card-bg"
            }`}
          >
            <Home className="w-4 h-4" />
            <span>ภาพรวมหลักสูตร</span>
          </Link>
          <Link
            href="/objectives"
            onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
              isActive("/objectives")
                ? "sidebar-link-active"
                : "text-text-secondary hover:text-text-primary hover:bg-card-bg"
            }`}
          >
            <Target className="w-4 h-4" />
            <span>วัตถุประสงค์และ PLO</span>
          </Link>
          <Link
            href="/schedule"
            onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
              isActive("/schedule")
                ? "sidebar-link-active"
                : "text-text-secondary hover:text-text-primary hover:bg-card-bg"
            }`}
          >
            <CalendarDays className="w-4 h-4" />
            <span>กำหนดการอบรม</span>
          </Link>
        </div>

        {/* Manual — collapsible parent section */}
        <div className="mb-1">
          <button
            onClick={() => setManualOpen((v) => !v)}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-text-secondary hover:text-text-primary hover:bg-card-bg transition-colors"
          >
            {manualOpen ? (
              <ChevronDown className="w-4 h-4 shrink-0" />
            ) : (
              <ChevronRight className="w-4 h-4 shrink-0" />
            )}
            <BookMarked className="w-4 h-4 shrink-0 text-accent" />
            <span>คู่มือการอบรม</span>
          </button>

          {manualOpen && (
            <div className="mt-0.5 pl-2 border-l-2 border-accent/20 ml-3 space-y-0.5">
              <Link
                href="/manual"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs transition-colors ${
                  isActive("/manual")
                    ? "sidebar-link-active"
                    : "text-text-muted hover:text-text-secondary hover:bg-card-bg"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">สารบัญ</span>
              </Link>
              {manualChapters.map((chapter) => {
                const subSections = chapter.sections.filter((s) => s.contentPath);
                const hasSubSections = subSections.length > 0;
                const chapterExpanded = expandedManualChapters[chapter.id];
                const badge = chapter.id === "intro" ? "บ" : chapter.id === "appendix" ? "ผ" : chapter.number.replace("โมดูล ", "");
                const isChapterActive = pathname.startsWith(`/manual/${chapter.id}`);

                return (
                  <div key={chapter.id}>
                    {hasSubSections ? (
                      <button
                        onClick={() => toggleManualChapter(chapter.id)}
                        className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-md text-xs transition-colors ${
                          isChapterActive
                            ? "sidebar-link-active"
                            : "text-text-muted hover:text-text-secondary hover:bg-card-bg"
                        }`}
                      >
                        {chapterExpanded ? (
                          <ChevronDown className="w-3 h-3 shrink-0" />
                        ) : (
                          <ChevronRight className="w-3 h-3 shrink-0" />
                        )}
                        <span className="w-5 h-5 rounded text-[9px] font-bold flex items-center justify-center bg-accent/10 text-accent shrink-0">
                          {badge}
                        </span>
                        <span className="truncate text-left">{chapter.title}</span>
                      </button>
                    ) : (
                      <Link
                        href={`/manual/${chapter.id}`}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs transition-colors ${
                          isChapterActive
                            ? "sidebar-link-active"
                            : "text-text-muted hover:text-text-secondary hover:bg-card-bg"
                        }`}
                      >
                        <span className="w-5 h-5 rounded text-[9px] font-bold flex items-center justify-center bg-accent/10 text-accent shrink-0">
                          {badge}
                        </span>
                        <span className="truncate">{chapter.title}</span>
                      </Link>
                    )}

                    {hasSubSections && chapterExpanded && (
                      <div className="ml-4 mt-0.5 space-y-0.5 border-l border-sidebar-border pl-2">
                        <Link
                          href={`/manual/${chapter.id}`}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] transition-colors ${
                            isActive(`/manual/${chapter.id}`)
                              ? "sidebar-link-active"
                              : "text-text-muted hover:text-text-secondary hover:bg-card-bg"
                          }`}
                        >
                          <BookOpen className="w-3 h-3 shrink-0" />
                          <span className="truncate">ภาพรวมโมดูล</span>
                        </Link>
                        {subSections.map((sec) => (
                          <Link
                            key={sec.id}
                            href={sec.contentPath!}
                            onClick={() => setMobileOpen(false)}
                            className={`flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] transition-colors ${
                              isActive(sec.contentPath!)
                                ? "sidebar-link-active"
                                : "text-text-muted hover:text-text-secondary hover:bg-card-bg"
                            }`}
                          >
                            <Clock className="w-3 h-3 shrink-0" />
                            <span className="truncate">{sec.title}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Days — collapsible parent section */}
        <div className="mb-1">
          <button
            onClick={() => setDaysOpen((v) => !v)}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-text-secondary hover:text-text-primary hover:bg-card-bg transition-colors"
          >
            {daysOpen ? (
              <ChevronDown className="w-4 h-4 shrink-0" />
            ) : (
              <ChevronRight className="w-4 h-4 shrink-0" />
            )}
            <BookOpen className="w-4 h-4 shrink-0 text-accent" />
            <span>วันอบรม 4 วัน</span>
          </button>

          {daysOpen && (
            <div className="mt-0.5 pl-2 border-l-2 border-accent/20 ml-3">
              {days.map((day) => (
          <div key={day.number} className="mb-1">
            <button
              onClick={() => toggleDay(day.number)}
              className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-card-bg ${dayColors[day.number]}`}
            >
              {expandedDays[day.number] ? (
                <ChevronDown className="w-4 h-4 shrink-0" />
              ) : (
                <ChevronRight className="w-4 h-4 shrink-0" />
              )}
              <div className={`w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center ${dayBgColors[day.number]}`}>
                {day.number}
              </div>
              <span className="truncate text-left">วันที่ {day.number}</span>
            </button>

            {expandedDays[day.number] && (
              <div className="ml-4 mt-0.5 space-y-0.5 border-l border-sidebar-border pl-2">
                {/* Day overview */}
                <Link
                  href={`/day/${day.number}`}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs transition-colors ${
                    isActive(`/day/${day.number}`)
                      ? "sidebar-link-active"
                      : "text-text-muted hover:text-text-secondary hover:bg-card-bg"
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">ภาพรวมวันที่ {day.number}</span>
                </Link>

                {/* Sessions */}
                {day.sessions.map((session) => (
                  <Link
                    key={session.id}
                    href={`/session/${session.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs transition-colors ${
                      isActive(`/session/${session.slug}`)
                        ? "sidebar-link-active"
                        : "text-text-muted hover:text-text-secondary hover:bg-card-bg"
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">
                      {session.number > 0
                        ? `Session ${session.number}: ${session.title}`
                        : session.title}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="text-[11px] text-text-muted text-center">
          <p>มหาวิทยาลัยกาฬสินธุ์</p>
          <p>CraftAI – CARIA</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-card-bg border border-card-border text-text-secondary hover:text-text-primary"
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 z-30"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-72 bg-sidebar-bg border-r border-sidebar-border z-40 transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
