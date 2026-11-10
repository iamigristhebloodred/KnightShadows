'use client';

import { useMemo, useState } from 'react';
import CopyCode from './CopyCode';
import { ExternalLinkIcon } from './Icons';
import { BERU_INDEX_PACKAGES, PACKAGE_CATEGORIES } from '@/lib/data';

export default function IndexExplorer() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPkg, setSelectedPkg] = useState<string>('fmt');

  const categories = ['All', ...Object.keys(PACKAGE_CATEGORIES)];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base =
      activeCategory === 'All'
        ? BERU_INDEX_PACKAGES
        : PACKAGE_CATEGORIES[activeCategory] ?? BERU_INDEX_PACKAGES;

    if (!q) return base;
    return BERU_INDEX_PACKAGES.filter((pkg) => pkg.toLowerCase().includes(q));
  }, [query, activeCategory]);

  return (
    <div className="space-y-8">
      {/* Search + Selected Package Action Bar */}
      <div className="grid gap-6 lg:grid-cols-12 lg:items-center rounded-[12px] border border-[var(--ks-border)] bg-[var(--ks-surface)] p-5 sm:p-7 shadow-sm">
        <div className="lg:col-span-6 space-y-2">
          <label htmlFor="pkg-search" className="ks-subtitle text-[var(--ks-text-muted)]">
            Search 223+ Package Recipes
          </label>
          <input
            id="pkg-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a C/C++ library (e.g. boost, raylib, nlohmann-json, grpc)..."
            className="w-full rounded-[8px] border border-[var(--ks-border-strong)] bg-[var(--ks-mist)] px-4 py-3 font-mono text-sm text-[var(--ks-text)] placeholder:text-[var(--ks-text-muted)]"
          />
        </div>

        <div className="lg:col-span-6 space-y-2">
          <div className="flex items-center justify-between">
            <span className="ks-subtitle text-[#8E1EA2] dark:text-[#98E8DE]">Selected: {selectedPkg}</span>
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
          <CopyCode command={`beru add ${selectedPkg}`} />
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setActiveCategory(cat);
              setQuery('');
            }}
            className={`rounded-[6px] border px-3.5 py-1.5 font-mono text-xs font-semibold transition-colors ${
              activeCategory === cat && !query
                ? 'border-[#542177] bg-[#542177] text-[#98E8DE] dark:border-[#98E8DE] dark:bg-[#98E8DE] dark:text-[#140721]'
                : 'border-[var(--ks-border)] bg-[var(--ks-surface)] text-[var(--ks-text-secondary)] hover:border-[#8E1EA2] hover:text-[var(--ks-text)]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs font-mono text-[var(--ks-text-muted)]">
        <span>Showing {filtered.length} recipes</span>
        <span>Path layout: &lt;package&gt;/&lt;version&gt;/recipe.toml</span>
      </div>

      {/* Package Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {filtered.map((pkg) => (
          <button
            key={pkg}
            type="button"
            onClick={() => setSelectedPkg(pkg)}
            className={`flex items-center justify-between rounded-[8px] border px-3.5 py-2.5 text-left font-mono text-xs font-semibold transition-all ${
              selectedPkg === pkg
                ? 'border-[#542177] bg-[#542177] text-[#98E8DE] shadow-sm dark:border-[#98E8DE] dark:bg-[#98E8DE] dark:text-[#140721]'
                : 'border-[var(--ks-border)] bg-[var(--ks-surface)] text-[var(--ks-text)] hover:border-[#8E1EA2] dark:hover:border-[#98E8DE]'
            }`}
          >
            <span className="truncate">{pkg}</span>
            <span className="ml-2 text-[10px] opacity-80">+</span>
          </button>
        ))}
      </div>
    </div>
  );
}
