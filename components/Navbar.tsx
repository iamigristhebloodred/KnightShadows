'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BeruIcon,
  ChevronDownIcon,
  CloseIcon,
  GitHubIcon,
  IndexIcon,
  KnightLogo,
  MenuIcon,
  MoonIcon,
  SunIcon,
  TuipdfIcon,
} from './Icons';
import { ORG_INFO } from '@/lib/data';

export default function Navbar() {
  const pathname = usePathname();
  const isDocsRoute = pathname?.startsWith('/docs');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<'products' | 'docs' | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', nextDark);
    try {
      localStorage.setItem('ks-theme', nextDark ? 'dark' : 'light');
    } catch {
      // Ignore storage error
    }
  };

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full max-w-[100vw] overflow-x-clip">
        {/* Announcement Strip using #542177 -> #98E8DE high-contrast hover */}
        <Link
          href="/products/beru"
          className="flex h-10 w-full min-w-0 items-center justify-center overflow-hidden bg-[#542177] px-3 sm:px-4 text-center text-[12px] sm:text-[13px] font-medium text-white transition-colors duration-150 hover:bg-[#98E8DE] hover:text-[#140721]"
        >
          <span className="min-w-0 max-w-full truncate">
            Beru v0.6.2 is out — Declarative C++ builds, PubGrub SAT solver &amp; 223+ registry recipes →
          </span>
        </Link>

        {/* Main Navigation Bar */}
        <div
          className={`flex h-16 lg:h-[76px] w-full items-center border-b transition-all duration-200 ${
            scrolled
              ? 'border-[var(--ks-border)] bg-[var(--ks-bg)] shadow-sm'
              : 'border-[var(--ks-border)]/50 bg-[var(--ks-mist)]/95 dark:bg-[var(--ks-bg)]/95 backdrop-blur-md'
          }`}
        >
          <div className="ks-container flex min-w-0 items-center justify-between gap-2 sm:gap-4">
            {/* Brand + Desktop Links */}
            <div className="flex min-w-0 items-center gap-4 lg:gap-10">
              <Link
                href="/"
                className="flex min-w-0 items-center gap-2 text-[var(--ks-text)] transition-opacity hover:opacity-85"
                aria-label="KnightShadows Home"
              >
                <KnightLogo className="h-8 w-8 sm:h-9 sm:w-9 shrink-0" />
                <span className="truncate font-heading text-base sm:text-lg font-bold tracking-[0.05em] uppercase">
                  KNIGHTSHADOWS
                </span>
              </Link>

              <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
                {/* Products Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setOpenMenu('products')}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    onClick={() => setOpenMenu(openMenu === 'products' ? null : 'products')}
                    className="flex items-center gap-1.5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ks-text)] hover:text-[#8E1EA2] dark:hover:text-[#98E8DE] transition-colors"
                  >
                    <span>Products</span>
                    <ChevronDownIcon
                      className={`h-3.5 w-3.5 transition-transform ${openMenu === 'products' ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {openMenu === 'products' && (
                    <div className="absolute left-0 top-full pt-2 w-[340px]">
                      <div className="rounded-[10px] border border-[var(--ks-border)] bg-[var(--ks-surface)] p-2 shadow-xl">
                        <Link
                          href="/products/beru"
                          onClick={() => setOpenMenu(null)}
                          className="flex items-start gap-3 rounded-[7px] p-3 transition-colors hover:bg-[var(--ks-mist)]"
                        >
                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[6px] bg-[#542177] text-[#98E8DE]">
                            <BeruIcon className="h-4 w-4" />
                          </span>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-heading text-sm font-bold text-[var(--ks-text)]">Beru</span>
                              <span className="rounded bg-[#98E8DE] px-1.5 py-0.5 font-mono text-[10px] font-bold text-[#140721]">
                                v0.6.2
                              </span>
                            </div>
                            <p className="mt-0.5 text-xs text-[var(--ks-text-secondary)]">
                              Declarative C++ package manager &amp; build orchestrator in Rust.
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/products/tuipdf"
                          onClick={() => setOpenMenu(null)}
                          className="flex items-start gap-3 rounded-[7px] p-3 transition-colors hover:bg-[var(--ks-mist)]"
                        >
                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[6px] bg-[#140721] text-[#D552A3]">
                            <TuipdfIcon className="h-4 w-4" />
                          </span>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-heading text-sm font-bold text-[var(--ks-text)]">tuipdf</span>
                              <span className="rounded bg-[#D552A3] px-1.5 py-0.5 font-mono text-[10px] font-bold text-[#140721]">
                                v0.1.1
                              </span>
                            </div>
                            <p className="mt-0.5 text-xs text-[var(--ks-text-secondary)]">
                              Terminal-native, offline pure-Rust PDF compressor &amp; utility.
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/products/beru-index"
                          onClick={() => setOpenMenu(null)}
                          className="flex items-start gap-3 rounded-[7px] p-3 transition-colors hover:bg-[var(--ks-mist)]"
                        >
                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[6px] bg-[#8E1EA2] text-white">
                            <IndexIcon className="h-4 w-4" />
                          </span>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-heading text-sm font-bold text-[var(--ks-text)]">beru_index</span>
                              <span className="rounded bg-[#542177] px-1.5 py-0.5 font-mono text-[10px] font-bold text-white">
                                223 Recipes
                              </span>
                            </div>
                            <p className="mt-0.5 text-xs text-[var(--ks-text-secondary)]">
                              Decentralized C/C++ package registry powering Beru.
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Docs Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setOpenMenu('docs')}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    onClick={() => setOpenMenu(openMenu === 'docs' ? null : 'docs')}
                    className="flex items-center gap-1.5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ks-text)] hover:text-[#8E1EA2] dark:hover:text-[#98E8DE] transition-colors"
                  >
                    <span>Docs</span>
                    <ChevronDownIcon
                      className={`h-3.5 w-3.5 transition-transform ${openMenu === 'docs' ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {openMenu === 'docs' && (
                    <div className="absolute left-0 top-full pt-2 w-[280px]">
                      <div className="rounded-[10px] border border-[var(--ks-border)] bg-[var(--ks-surface)] p-2 shadow-xl space-y-1">
                        <Link
                          href="/docs/beru"
                          onClick={() => setOpenMenu(null)}
                          className="block rounded-[6px] px-3 py-2 text-xs font-semibold text-[#542177] dark:text-[#98E8DE] hover:bg-[var(--ks-mist)]"
                        >
                          The Beru Book — Overview →
                        </Link>
                        <Link
                          href="/docs/beru/getting-started"
                          onClick={() => setOpenMenu(null)}
                          className="block rounded-[6px] px-3 py-2 text-xs font-semibold text-[var(--ks-text)] hover:bg-[var(--ks-mist)]"
                        >
                          Getting Started Guide
                        </Link>
                        <Link
                          href="/docs/beru/reference-manifest-berutoml"
                          onClick={() => setOpenMenu(null)}
                          className="block rounded-[6px] px-3 py-2 text-xs font-semibold text-[var(--ks-text)] hover:bg-[var(--ks-mist)]"
                        >
                          Beru.toml Manifest Reference
                        </Link>
                        <Link
                          href="/docs/beru/reference-cli"
                          onClick={() => setOpenMenu(null)}
                          className="block rounded-[6px] px-3 py-2 text-xs font-semibold text-[var(--ks-text)] hover:bg-[var(--ks-mist)]"
                        >
                          CLI Command Reference
                        </Link>
                        <div className="my-1 h-px bg-[var(--ks-border)]" />
                        <a
                          href="https://github.com/KnightShadows/tuipdf#readme"
                          target="_blank"
                          rel="noreferrer"
                          className="block rounded-[6px] px-3 py-2 text-xs font-semibold text-[var(--ks-text)] hover:bg-[var(--ks-mist)]"
                        >
                          tuipdf Usage &amp; Architecture ↗
                        </a>
                        <a
                          href="https://github.com/KnightShadows/beru_index#readme"
                          target="_blank"
                          rel="noreferrer"
                          className="block rounded-[6px] px-3 py-2 text-xs font-semibold text-[var(--ks-text)] hover:bg-[var(--ks-mist)]"
                        >
                          Recipe Authoring Guide ↗
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/products/beru-index"
                  className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ks-text)] hover:text-[#8E1EA2] dark:hover:text-[#98E8DE] transition-colors"
                >
                  Package Index
                </Link>

                <Link
                  href="/about"
                  className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ks-text)] hover:text-[#8E1EA2] dark:hover:text-[#98E8DE] transition-colors"
                >
                  Organization
                </Link>
              </nav>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-3">
              <a
                href={ORG_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="KnightShadows on GitHub"
                className="hidden sm:inline-flex items-center gap-2 rounded-[6px] border border-[var(--ks-border)] bg-[var(--ks-surface)] px-3 py-1.5 text-xs font-semibold text-[var(--ks-text)] transition-colors hover:border-[#8E1EA2] dark:hover:border-[#98E8DE]"
              >
                <GitHubIcon className="h-4 w-4" />
                <span className="h-3.5 w-px bg-[var(--ks-border)]" />
                <span className="font-mono text-[11px]">3 Tools</span>
              </a>

              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle color theme"
                className="inline-flex h-9 w-9 items-center justify-center rounded-[6px] border border-[var(--ks-border)] bg-[var(--ks-surface)] text-[var(--ks-text)] transition-colors hover:border-[#8E1EA2] dark:hover:border-[#98E8DE]"
              >
                <span className="dark:hidden">
                  <MoonIcon className="h-4 w-4" />
                </span>
                <span className="hidden dark:inline">
                  <SunIcon className="h-4 w-4" />
                </span>
              </button>

              <Link
                href="/#products"
                className="hidden lg:inline-flex ks-btn-short bg-[#8E1EA2] text-white hover:bg-[#542177] dark:bg-[#98E8DE] dark:text-[#140721] dark:hover:bg-white"
              >
                Get Started
              </Link>

              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle mobile menu"
                className="inline-flex lg:hidden h-9 w-11 items-center justify-center rounded-[6px] border border-[var(--ks-border)] bg-[var(--ks-surface)] text-[var(--ks-text)]"
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileOpen && (
          <div className="lg:hidden border-b border-[var(--ks-border)] bg-[var(--ks-bg)] px-6 py-6 shadow-xl">
            <div className="flex flex-col gap-3">
              <span className="ks-subtitle text-[var(--ks-text-muted)]">Products</span>
              <Link href="/products/beru" onClick={() => setMobileOpen(false)} className="rounded-[6px] px-3 py-2 font-heading text-base font-bold text-[var(--ks-text)] hover:bg-[var(--ks-mist)]">
                Beru — C++ Package Manager
              </Link>
              <Link href="/products/tuipdf" onClick={() => setMobileOpen(false)} className="rounded-[6px] px-3 py-2 font-heading text-base font-bold text-[var(--ks-text)] hover:bg-[var(--ks-mist)]">
                tuipdf — Terminal PDF Compressor
              </Link>
              <Link href="/products/beru-index" onClick={() => setMobileOpen(false)} className="rounded-[6px] px-3 py-2 font-heading text-base font-bold text-[var(--ks-text)] hover:bg-[var(--ks-mist)]">
                beru_index — 223+ C++ Recipes
              </Link>
              <div className="my-2 h-px bg-[var(--ks-border)]" />
              <span className="ks-subtitle text-[var(--ks-text-muted)]">Documentation</span>
              <Link href="/docs/beru" onClick={() => setMobileOpen(false)} className="rounded-[6px] px-3 py-2 font-heading text-base font-bold text-[#542177] dark:text-[#98E8DE] hover:bg-[var(--ks-mist)]">
                The Beru Book — Docs
              </Link>
              <Link href="/docs/beru/getting-started" onClick={() => setMobileOpen(false)} className="rounded-[6px] px-3 py-2 font-heading text-sm font-semibold text-[var(--ks-text)] hover:bg-[var(--ks-mist)]">
                Getting Started
              </Link>
              <Link href="/docs/beru/reference-cli" onClick={() => setMobileOpen(false)} className="rounded-[6px] px-3 py-2 font-heading text-sm font-semibold text-[var(--ks-text)] hover:bg-[var(--ks-mist)]">
                CLI Reference
              </Link>
              <div className="my-2 h-px bg-[var(--ks-border)]" />
              <Link href="/about" onClick={() => setMobileOpen(false)} className="rounded-[6px] px-3 py-2 font-heading text-base font-bold text-[var(--ks-text)] hover:bg-[var(--ks-mist)]">
                Organization
              </Link>
              <a href={ORG_INFO.githubUrl} target="_blank" rel="noreferrer" className="ks-btn mt-2 bg-[#542177] text-white dark:bg-[#98E8DE] dark:text-[#140721]">
                <GitHubIcon className="h-4 w-4" />
                <span>GitHub Organization</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Floating Bottom-Left Org Pill */}
      {!isDocsRoute && (
        <a
          href={ORG_INFO.githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="KnightShadows GitHub Organization"
          className="group fixed bottom-5 left-5 z-40 hidden lg:flex items-center gap-2.5 rounded-[8px] border border-[var(--ks-border)] bg-[var(--ks-surface)]/95 px-2.5 py-2 shadow-md backdrop-blur transition-all hover:border-[#8E1EA2] dark:hover:border-[#98E8DE]"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-[5px] bg-[#542177] font-mono text-[11px] font-bold text-[#98E8DE]">
            KS
          </span>
          <span className="h-4 w-px bg-[var(--ks-border)]" />
          <GitHubIcon className="h-4 w-4 text-[var(--ks-text)]" />
          <span className="pr-1 font-mono text-xs font-semibold text-[var(--ks-text)]">
            KnightShadows
          </span>
        </a>
      )}
    </>
  );
}
