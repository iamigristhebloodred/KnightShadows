'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { DocHeading, DocPageData, DocSection } from '@/lib/beru-docs';
import { ArrowRightIcon, BeruIcon, CloseIcon, ExternalLinkIcon, MenuIcon } from './Icons';

export default function BeruDocsShell({
  sections,
  page,
  children,
}: {
  sections: DocSection[];
  page: DocPageData;
  children: React.ReactNode;
}) {
  const [filter, setFilter] = useState('');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const filteredSections = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if (!q) return sections;

    return sections
      .map((sec) => {
        const items = sec.items
          .map((item) => {
            const matchesParent = item.title.toLowerCase().includes(q) || item.slug.includes(q);
            const matchingChildren = (item.children ?? []).filter(
              (c) => c.title.toLowerCase().includes(q) || c.slug.includes(q)
            );
            if (matchesParent || matchingChildren.length > 0) {
              return {
                ...item,
                children: matchesParent ? item.children : matchingChildren,
              };
            }
            return null;
          })
          .filter(Boolean) as DocSection['items'];

        return { ...sec, items };
      })
      .filter((sec) => sec.items.length > 0);
  }, [sections, filter]);

  const renderSidebarContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-[var(--ks-border)] pb-4">
        <Link href="/products/beru" className="flex items-center gap-2.5 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-[7px] bg-[#542177] text-[#98E8DE]">
            <BeruIcon className="h-4 w-4" />
          </span>
          <div>
            <div className="font-heading text-sm font-bold text-[var(--ks-text)] group-hover:text-[#8E1EA2] dark:group-hover:text-[#98E8DE]">
              The Beru Book
            </div>
            <div className="font-mono text-[10px] font-semibold text-[var(--ks-text-muted)]">
              v0.6.2 Documentation
            </div>
          </div>
        </Link>
      </div>

      <div>
        <input
          type="search"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search chapters or CLI..."
          aria-label="Filter Beru documentation"
          className="w-full rounded-[7px] border border-[var(--ks-border)] bg-[var(--ks-mist)] px-3 py-2 font-mono text-xs text-[var(--ks-text)] placeholder:text-[var(--ks-text-muted)]"
        />
      </div>

      <nav aria-label="Beru documentation sections" className="space-y-6">
        {filteredSections.map((sec) => (
          <div key={sec.title}>
            <div className="mb-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--ks-text-muted)]">
              {sec.title}
            </div>
            <ul className="space-y-1">
              {sec.items.map((item) => {
                const isActive = page.slug === item.slug;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileNavOpen(false)}
                      className={`block rounded-[6px] px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                        isActive
                          ? 'bg-[#542177] text-[#98E8DE] dark:bg-[#98E8DE] dark:text-[#140721]'
                          : 'text-[var(--ks-text-secondary)] hover:bg-[var(--ks-mist)] hover:text-[var(--ks-text)]'
                      }`}
                    >
                      {item.title}
                    </Link>

                    {item.children && item.children.length > 0 && (
                      <ul className="mt-1 ml-2.5 space-y-0.5 border-l border-[var(--ks-border)] pl-2.5">
                        {item.children.map((child) => {
                          const childActive = page.slug === child.slug;
                          return (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={() => setMobileNavOpen(false)}
                                className={`block rounded-[5px] px-2 py-1 font-mono text-[11px] transition-colors ${
                                  childActive
                                    ? 'bg-[#8E1EA2] font-bold text-white dark:bg-[#98E8DE] dark:text-[#140721]'
                                    : 'text-[var(--ks-text-muted)] hover:bg-[var(--ks-mist)] hover:text-[var(--ks-text)]'
                                }`}
                              >
                                {child.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );

  return (
    <div className="ks-container pt-[116px] lg:pt-[132px] pb-20">
      {/* Mobile Docs Bar */}
      <div className="mb-6 flex items-center justify-between rounded-[10px] border border-[var(--ks-border)] bg-[var(--ks-mist)] px-4 py-3 lg:hidden">
        <div className="min-w-0">
          <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#8E1EA2] dark:text-[#98E8DE]">
            {page.section}
          </div>
          <div className="truncate font-heading text-sm font-bold text-[var(--ks-text)]">
            {page.title}
          </div>
        </div>
        <button
          type="button"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-[6px] border border-[var(--ks-border-strong)] bg-[var(--ks-surface)] px-3 py-1.5 font-mono text-xs font-semibold text-[var(--ks-text)]"
        >
          {mobileNavOpen ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
          <span>Chapters</span>
        </button>
      </div>

      {mobileNavOpen && (
        <div className="mb-8 rounded-[12px] border border-[var(--ks-border)] bg-[var(--ks-surface)] p-5 shadow-lg lg:hidden">
          {renderSidebarContent()}
        </div>
      )}

      <div className="grid gap-10 lg:grid-cols-12">
        {/* Left Sticky Sidebar */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-[132px] max-h-[calc(100vh-152px)] overflow-y-auto ks-no-scrollbar rounded-[12px] border border-[var(--ks-border)] bg-[var(--ks-surface)] p-5">
            {renderSidebarContent()}
          </div>
        </aside>

        {/* Center Documentation Content */}
        <article className="min-w-0 lg:col-span-9 xl:col-span-7">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--ks-border)] pb-4">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[var(--ks-text-muted)]">
              <Link href="/" className="hover:text-[#8E1EA2] dark:hover:text-[#98E8DE]">Home</Link>
              <span>/</span>
              <Link href="/docs/beru" className="hover:text-[#8E1EA2] dark:hover:text-[#98E8DE]">Beru Docs</Link>
              <span>/</span>
              <span className="font-semibold text-[var(--ks-text)]">{page.section}</span>
            </div>

            <a
              href={page.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#542177] dark:text-[#98E8DE] hover:underline"
            >
              <span>Source on GitHub</span>
              <ExternalLinkIcon className="h-3.5 w-3.5" />
            </a>
          </div>

          {children}

          {/* Prev / Next Chapter Cards */}
          <div className="mt-14 grid gap-4 border-t border-[var(--ks-border)] pt-8 sm:grid-cols-2">
            {page.prev ? (
              <Link
                href={page.prev.href}
                className="group rounded-[10px] border border-[var(--ks-border)] bg-[var(--ks-surface)] p-4 transition-colors hover:border-[#8E1EA2] dark:hover:border-[#98E8DE]"
              >
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--ks-text-muted)]">
                  ← Previous
                </span>
                <div className="mt-1 font-heading text-sm font-bold text-[var(--ks-text)] group-hover:text-[#8E1EA2] dark:group-hover:text-[#98E8DE]">
                  {page.prev.title}
                </div>
              </Link>
            ) : (
              <div />
            )}

            {page.next && (
              <Link
                href={page.next.href}
                className="group rounded-[10px] border border-[var(--ks-border)] bg-[var(--ks-surface)] p-4 text-right transition-colors hover:border-[#8E1EA2] dark:hover:border-[#98E8DE]"
              >
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--ks-text-muted)]">
                  Next →
                </span>
                <div className="mt-1 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-[var(--ks-text)] group-hover:text-[#8E1EA2] dark:group-hover:text-[#98E8DE]">
                  <span>{page.next.title}</span>
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </div>
              </Link>
            )}
          </div>
        </article>

        {/* Right Sticky "On This Page" TOC */}
        <aside className="hidden xl:block xl:col-span-2">
          {page.headings.length > 0 && (
            <div className="sticky top-[132px] max-h-[calc(100vh-152px)] overflow-y-auto ks-no-scrollbar pl-2">
              <div className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--ks-text-muted)]">
                On This Page
              </div>
              <ul className="space-y-2 border-l border-[var(--ks-border)] pl-3">
                {page.headings.map((h: DocHeading) => (
                  <li key={h.id} className={h.level === 3 ? 'pl-2.5' : ''}>
                    <a
                      href={`#${h.id}`}
                      className="block text-xs leading-snug text-[var(--ks-text-secondary)] transition-colors hover:text-[#8E1EA2] dark:hover:text-[#98E8DE]"
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

