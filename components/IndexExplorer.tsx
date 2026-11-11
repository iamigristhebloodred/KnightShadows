'use client';

import { useMemo, useState } from 'react';
import CopyCode from './CopyCode';
import { CheckIcon, ExternalLinkIcon } from './Icons';
import {
  BERU_PACKAGE_CATALOG,
  BERU_PACKAGE_CATEGORIES_ORDER,
  BERU_PACKAGE_MAP,
} from '@/lib/beru-packages';

const CATEGORY_COUNTS: Record<string, number> = Object.fromEntries(
  BERU_PACKAGE_CATEGORIES_ORDER.map((category) => [
    category,
    BERU_PACKAGE_CATALOG.filter((pkg) => pkg.category === category).length,
  ])
);

export default function IndexExplorer() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPkg, setSelectedPkg] = useState<string>('fmt');

  const categories = ['All', ...BERU_PACKAGE_CATEGORIES_ORDER];
  const selectedMeta = BERU_PACKAGE_MAP[selectedPkg];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base =
      activeCategory === 'All'
        ? BERU_PACKAGE_CATALOG
        : BERU_PACKAGE_CATALOG.filter((pkg) => pkg.category === activeCategory);

    if (!q) return base;
    return base.filter(
      (pkg) =>
        pkg.name.toLowerCase().includes(q) ||
        pkg.summary.toLowerCase().includes(q) ||
        pkg.category.toLowerCase().includes(q)
    );
  }, [query, activeCategory]);

  return (
    <div className="space-y-8">
      {/* Search + Selected Package Action Bar */}
      <div className="grid gap-6 lg:grid-cols-12 lg:items-start rounded-[12px] border border-[var(--ks-border)] bg-[var(--ks-surface)] p-5 sm:p-7 shadow-sm">
        <div className="lg:col-span-6 space-y-2">
          <label htmlFor="pkg-search" className="ks-subtitle text-[var(--ks-text-muted)]">
            Search {BERU_PACKAGE_CATALOG.length} Package Recipes
          </label>
          <input
            id="pkg-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search library or use case (e.g. json, tls, gui, sql)..."
            className="w-full rounded-[8px] border border-[var(--ks-border-strong)] bg-[var(--ks-mist)] px-4 py-3 font-mono text-sm text-[var(--ks-text)] placeholder:text-[var(--ks-text-muted)]"
          />
          <p className="text-xs text-[var(--ks-text-muted)]">
            Filter by library name, category, or what it is used for.
          </p>
        </div>

        <div className="lg:col-span-6 space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="ks-subtitle text-[#8E1EA2] dark:text-[#98E8DE]">
                Selected: {selectedPkg}
              </span>
              {selectedMeta && (
                <span className="rounded-[4px] border border-[var(--ks-border)] bg-[var(--ks-mist)] px-2 py-0.5 font-mono text-[10px] font-semibold text-[#542177] dark:text-[#98E8DE]">
                  {selectedMeta.category}
                </span>
              )}
            </div>
            <a
              href={`https://github.com/KnightShadows/beru_index/tree/main/${selectedPkg}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#542177] dark:text-[#98E8DE] hover:underline"
            >
              <span>Inspect recipe on GitHub</span>
              <ExternalLinkIcon className="h-3.5 w-3.5" />
            </a>
          </div>
          {selectedMeta && (
            <p className="text-xs leading-relaxed text-[var(--ks-text-secondary)]">
              {selectedMeta.summary}
            </p>
          )}
          <CopyCode command={`beru add ${selectedPkg}`} />
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => {
          const count = cat === 'All' ? BERU_PACKAGE_CATALOG.length : CATEGORY_COUNTS[cat] ?? 0;
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-[6px] border px-3.5 py-1.5 font-mono text-xs font-semibold transition-colors ${
                isActive
                  ? 'border-[#542177] bg-[#542177] text-[#98E8DE] dark:border-[#98E8DE] dark:bg-[#98E8DE] dark:text-[#140721]'
                  : 'border-[var(--ks-border)] bg-[var(--ks-surface)] text-[var(--ks-text-secondary)] hover:border-[#8E1EA2] hover:text-[var(--ks-text)]'
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Results Count */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[var(--ks-text-muted)]">
        <span>
          Showing {filtered.length} of {BERU_PACKAGE_CATALOG.length} recipes
        </span>
        <span>Path layout: &lt;package&gt;/&lt;version&gt;/recipe.toml</span>
      </div>

      {/* Package Grid with One-Line Use-Case Descriptions */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((pkg) => {
            const isSelected = selectedPkg === pkg.name;
            return (
              <button
                key={pkg.name}
                type="button"
                onClick={() => setSelectedPkg(pkg.name)}
                className={`group flex flex-col justify-between gap-2.5 rounded-[10px] border p-4 text-left transition-all ${
                  isSelected
                    ? 'border-[#542177] bg-[#542177] text-white shadow-md dark:border-[#98E8DE] dark:bg-[#98E8DE] dark:text-[#140721]'
                    : 'border-[var(--ks-border)] bg-[var(--ks-surface)] text-[var(--ks-text)] hover:border-[#8E1EA2] dark:hover:border-[#98E8DE]'
                }`}
              >
                <div className="flex w-full items-center justify-between gap-2">
                  <span
                    className={`truncate font-mono text-sm font-bold ${
                      isSelected ? 'text-[#98E8DE] dark:text-[#140721]' : 'text-[var(--ks-text)]'
                    }`}
                  >
                    {pkg.name}
                  </span>
                  <div className="flex shrink-0 items-center gap-1.5">
                    <span
                      className={`rounded-[4px] px-2 py-0.5 font-mono text-[10px] font-semibold ${
                        isSelected
                          ? 'bg-white/15 text-[#FBF9FE] dark:bg-[#140721]/15 dark:text-[#140721]'
                          : 'bg-[var(--ks-mist)] text-[#542177] dark:text-[#98E8DE]'
                      }`}
                    >
                      {pkg.category}
                    </span>
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-[4px] font-mono text-xs ${
                        isSelected
                          ? 'bg-[#98E8DE] text-[#140721] dark:bg-[#140721] dark:text-[#98E8DE]'
                          : 'text-[var(--ks-text-muted)] group-hover:text-[#8E1EA2] dark:group-hover:text-[#98E8DE]'
                      }`}
                    >
                      {isSelected ? <CheckIcon className="h-3 w-3" /> : '+'}
                    </span>
                  </div>
                </div>

                <p
                  className={`text-xs leading-relaxed ${
                    isSelected
                      ? 'text-[#EFE8F7] dark:text-[#281042]'
                      : 'text-[var(--ks-text-secondary)]'
                  }`}
                >
                  {pkg.summary}
                </p>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="rounded-[10px] border border-[var(--ks-border)] bg-[var(--ks-mist)] p-8 text-center">
          <p className="font-mono text-sm font-semibold text-[var(--ks-text)]">
            No matching packages found in {activeCategory}.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setActiveCategory('All');
            }}
            className="mt-3 rounded-[6px] border border-[#542177] px-3.5 py-1.5 font-mono text-xs font-semibold text-[#542177] hover:bg-[#542177] hover:text-white dark:border-[#98E8DE] dark:text-[#98E8DE] dark:hover:bg-[#98E8DE] dark:hover:text-[#140721]"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
