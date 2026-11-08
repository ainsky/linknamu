'use client';

import { useState, useEffect } from 'react';
import type { LinkItem } from '@/lib/types';

function loadCounts(): Record<string, number> {
  try { return JSON.parse(localStorage.getItem('lnk-counts') || '{}'); }
  catch { return {}; }
}

function saveCounts(c: Record<string, number>) {
  try { localStorage.setItem('lnk-counts', JSON.stringify(c)); } catch {}
}

function fmt(n: number) {
  return n >= 1000 ? (n / 1000).toFixed(1) + 'k' : String(n);
}

export default function LinkCard({ link }: { link: LinkItem }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(loadCounts()[link.id] || 0);
  }, [link.id]);

  function handleClick() {
    const counts = loadCounts();
    const next = (counts[link.id] || 0) + 1;
    counts[link.id] = next;
    saveCounts(counts);
    setCount(next);
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="flex items-center gap-3.5 bg-[var(--surface)] border border-[var(--border)] rounded-[14px] px-[18px] py-3.5 text-[var(--fg)] no-underline shadow-[var(--shadow)] transition-all duration-150 hover:border-[var(--accent)] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:duration-[50ms]"
    >
      <div className="w-10 h-10 rounded-[10px] bg-[var(--accent-soft)] flex items-center justify-center text-lg shrink-0">
        {link.icon}
      </div>
      <div className="flex-1 min-w-0 flex flex-col gap-0.5">
        <span className="text-sm font-semibold truncate tracking-tight">{link.title}</span>
        <span className="text-xs text-[var(--muted)] truncate">{link.sub}</span>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        {count > 0 && (
          <span className="text-[11px] text-[var(--accent)] font-medium bg-[var(--accent-soft)] rounded-full px-2 py-0.5 tabular-nums">
            {fmt(count)}
          </span>
        )}
        <span className="text-[var(--muted)] text-lg leading-none">›</span>
      </div>
    </a>
  );
}
