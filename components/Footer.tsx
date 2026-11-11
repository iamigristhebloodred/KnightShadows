import Link from 'next/link';
import { GitHubIcon, KnightLogo } from './Icons';
import { ORG_INFO } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--ks-border)] bg-[var(--ks-bg)] py-14 text-[var(--ks-text)]">
      <div className="ks-container">
        <div className="grid gap-10 md:grid-cols-12 items-start">
          {/* Compact navigation grid */}
          <ul className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4">
            <li>
              <Link
                href="/products/beru"
                className="font-heading text-lg font-semibold uppercase tracking-wider text-[var(--ks-text)] transition-colors hover:text-[#8E1EA2] dark:hover:text-[#98E8DE]"
              >
                Beru
              </Link>
            </li>
            <li>
              <Link
                href="/products/tuipdf"
                className="font-heading text-lg font-semibold uppercase tracking-wider text-[var(--ks-text)] transition-colors hover:text-[#8E1EA2] dark:hover:text-[#98E8DE]"
              >
                tuipdf
              </Link>
            </li>
            <li>
              <Link
                href="/products/beru-index"
                className="font-heading text-lg font-semibold uppercase tracking-wider text-[var(--ks-text)] transition-colors hover:text-[#8E1EA2] dark:hover:text-[#98E8DE]"
              >
                beru_index
              </Link>
            </li>
            <li>
              <a
                href={ORG_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="font-heading text-lg font-semibold uppercase tracking-wider text-[var(--ks-text)] transition-colors hover:text-[#8E1EA2] dark:hover:text-[#98E8DE]"
              >
                GitHub
              </a>
            </li>
            <li>
              <Link
                href="/about"
                className="font-heading text-lg font-semibold uppercase tracking-wider text-[var(--ks-text)] transition-colors hover:text-[#8E1EA2] dark:hover:text-[#98E8DE]"
              >
                Organization
              </Link>
            </li>
            <li>
              <Link
                href="/docs/beru"
                className="font-heading text-lg font-semibold uppercase tracking-wider text-[var(--ks-text)] transition-colors hover:text-[#8E1EA2] dark:hover:text-[#98E8DE]"
              >
                Beru Docs
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/KnightShadows/beru/releases"
                target="_blank"
                rel="noreferrer"
                className="font-heading text-lg font-semibold uppercase tracking-wider text-[var(--ks-text)] transition-colors hover:text-[#8E1EA2] dark:hover:text-[#98E8DE]"
              >
                Releases
              </a>
            </li>
          </ul>

          {/* Right Brand Emblem */}
          <div className="md:col-span-5 flex flex-col md:items-end gap-3">
            <div className="flex items-center gap-3">
              <KnightLogo className="h-10 w-10 shrink-0" />
              <span className="font-heading text-2xl font-bold uppercase tracking-[0.08em]">
                KNIGHTSHADOWS
              </span>
            </div>
            <p className="text-sm text-[var(--ks-text-secondary)] md:text-right max-w-sm">
              High-performance developer tooling built in Rust — fast, deterministic, and local-first.
            </p>
          </div>
        </div>

        {/* Bottom Legal & GitHub Row */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[var(--ks-border)] pt-8 sm:flex-row">
          <div className="flex flex-wrap items-center gap-6">
            <span className="font-mono text-xs font-medium uppercase tracking-wider text-[var(--ks-text-muted)]">
              © 2026 KNIGHTSHADOWS · {ORG_INFO.location}
            </span>
            <Link
              href="/about"
              className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--ks-text-secondary)] underline underline-offset-4 hover:text-[#8E1EA2] dark:hover:text-[#98E8DE]"
            >
              About &amp; Licenses
            </Link>
          </div>

          <a
            href={ORG_INFO.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="KnightShadows GitHub"
            className="inline-flex items-center gap-2 rounded-[5px] border border-[var(--ks-border)] px-3 py-1.5 font-mono text-xs font-semibold text-[var(--ks-text)] transition-colors hover:border-[#8E1EA2] hover:text-[#8E1EA2] dark:hover:border-[#98E8DE] dark:hover:text-[#98E8DE]"
          >
            <GitHubIcon className="h-4 w-4" />
            <span>github.com/KnightShadows</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
