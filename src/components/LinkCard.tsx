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
      className="card-glass flex items-center gap-4 rounded-2xl px-5 py-[15px] text-[var(--fg)] no-underline transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_6px_28px_rgba(160,120,80,0.14),0_1px_4px_rgba(0,0,0,0.05)] active:translate-y-0 active:duration-[50ms]"
    >
      <div className="w-10 h-10 rounded-xl bg-[var(--accent-soft)] flex items-center justify-center text-lg shrink-0">
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
