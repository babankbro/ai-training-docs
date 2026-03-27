"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <div className="hidden xl:block w-56 shrink-0">
      <div className="sticky top-8">
        <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
          ในหน้านี้
        </h4>
        <nav className="space-y-1">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block text-xs py-1 pl-3 border-l-2 transition-colors ${
                activeId === item.id
                  ? "toc-active border-accent text-accent"
                  : "border-transparent text-text-muted hover:text-text-secondary hover:border-card-border"
              } ${item.level > 2 ? "ml-3" : ""}`}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
