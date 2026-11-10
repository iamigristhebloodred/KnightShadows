import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import PreFooterCTA from '@/components/PreFooterCTA';
import Footer from '@/components/Footer';
import CopyCode from '@/components/CopyCode';
import { ExternalLinkIcon, GitHubIcon, TuipdfIcon } from '@/components/Icons';
import { PRODUCTS, TUIPDF_PIPELINE, TUIPDF_TIERS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'tuipdf — Terminal-Native Pure-Rust PDF Toolkit | KNIGHTSHADOWS',
  description:
    'tuipdf is a terminal-native PDF compressor written in pure Rust with zero C dependencies, color-space awareness, and 100% offline privacy.',
};

const TECH_STACK = [
  { name: 'ratatui', role: 'Rich, responsive terminal user interface framework' },
  { name: 'crossterm', role: 'Cross-platform terminal control across Windows, macOS, Linux' },
  { name: 'lopdf', role: 'Low-level PDF object parsing and stream rewriting' },
  { name: 'image', role: 'High-performance pixel decoding and JPEG re-encoding' },
  { name: 'flate2', role: 'Fast Zlib decompression for FlateDecode PDF streams' },
  { name: 'rayon', role: 'Data-parallel multi-core stream processing' },
];

const KEYBOARD_SHORTCUTS = [
  { key: 'Enter', action: 'Cycle compression tier or start compression' },
  { key: 'Tab', action: 'Switch active UI panel focus' },
  { key: 'q / Esc', action: 'Gracefully exit the terminal interface' },
  { key: 'Ctrl+C', action: 'Immediate force quit' },
];

export default function TuipdfPage() {
  const tuipdf = PRODUCTS.find((p) => p.id === 'tuipdf')!;

  return (
    <div className="min-h-screen bg-[var(--ks-bg)] text-[var(--ks-text)]">
      <Navbar />
      <main className="pt-[116px] lg:pt-[132px]">
        {/* Hero */}
        <section className="bg-[var(--ks-mist)] pb-16 pt-12 lg:pb-24 lg:pt-16">
          <div className="ks-container">
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--ks-text-muted)]">
              <Link href="/" className="hover:text-[#8E1EA2] dark:hover:text-[#98E8DE]">Home</Link>
              <span>/</span>
              <span className="font-semibold text-[var(--ks-text)]">tuipdf</span>
            </div>

            <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-3 rounded-[8px] border border-[var(--ks-border)] bg-[var(--ks-surface)] px-3.5 py-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-[5px] bg-[#140721] text-[#D552A3]">
                    <TuipdfIcon className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--ks-text)]">
                    {tuipdf.version} · {tuipdf.language} · {tuipdf.license}
                  </span>
                </div>

                <h1 className="font-heading text-4xl font-bold tracking-tight text-[var(--ks-text)] sm:text-6xl">
                  Offline PDF compression inside your terminal
                </h1>

                <p className="text-lg leading-relaxed text-[var(--ks-text-secondary)]">
                  {tuipdf.description}
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={tuipdf.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="ks-btn bg-[#542177] text-white hover:bg-[#8E1EA2] dark:bg-[#98E8DE] dark:text-[#140721]"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    <span>KnightShadows/tuipdf</span>
                    <ExternalLinkIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4 rounded-[12px] border border-[var(--ks-border)] bg-[var(--ks-surface)] p-6 shadow-lg">
                <h2 className="font-heading text-lg font-bold text-[var(--ks-text)]">Install tuipdf</h2>
                {tuipdf.installCommands.map((item) => (
                  <div key={item.label} className="space-y-1.5">
                    <span className="font-mono text-xs font-semibold text-[var(--ks-text-muted)]">
                      {item.label}
                    </span>
                    <CopyCode command={item.command} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Pipeline */}
        <section className="py-16 lg:py-24">
          <div className="ks-container space-y-12">
            <div>
              <span className="ks-subtitle text-[#8E1EA2] dark:text-[#98E8DE]">Architecture</span>
              <h2 className="mt-2 font-heading text-3xl font-bold text-[var(--ks-text)] sm:text-4xl">
                Per-object pure-Rust compression pipeline
              </h2>
              <p className="mt-3 max-w-2xl text-base text-[var(--ks-text-secondary)]">
                Vectors, fonts, and page content streams remain untouched while raster imagery is intelligently decoded, color-corrected, and re-encoded.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {TUIPDF_PIPELINE.map((stage) => (
                <div
                  key={stage.step}
                  className="rounded-[12px] border border-[var(--ks-border)] bg-[var(--ks-surface)] p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#8E1EA2] dark:text-[#98E8DE]">STAGE {stage.step}</span>
                    <span className="rounded bg-[var(--ks-mist)] px-2 py-0.5 font-mono text-[11px] font-semibold text-[var(--ks-text)]">
                      {stage.module}
                    </span>
                  </div>
                  <h3 className="mt-3 font-heading text-xl font-bold text-[var(--ks-text)]">{stage.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ks-text-secondary)]">{stage.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compression Tiers & Keyboard Shortcuts */}
        <section className="bg-[#140721] py-16 lg:py-24 text-[#FBF9FE]">
          <div className="ks-container grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-5">
              <span className="ks-subtitle text-[#D552A3]">Profiles</span>
              <h2 className="font-heading text-3xl font-bold text-white">Three compression tiers</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {TUIPDF_TIERS.map((tier) => (
                  <div key={tier.name} className="rounded-[10px] border border-[#542177] bg-[#1E0C31] p-5">
                    <div className="font-heading text-xl font-bold text-[#D552A3]">{tier.name}</div>
                    <div className="mt-1 font-mono text-xs font-semibold text-[#98E8DE]">{tier.quality}</div>
                    <p className="mt-3 text-xs leading-relaxed text-[#E4D8F2]">{tier.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <span className="ks-subtitle text-[#98E8DE]">TUI Ergonomics</span>
              <h2 className="font-heading text-3xl font-bold text-white">Keyboard Shortcuts</h2>
              <div className="divide-y divide-[#542177] rounded-[10px] border border-[#542177] bg-[#1E0C31]">
                {KEYBOARD_SHORTCUTS.map((sc) => (
                  <div key={sc.key} className="flex items-center justify-between gap-4 p-4">
                    <kbd className="rounded bg-[#98E8DE] px-2.5 py-1 font-mono text-xs font-bold text-[#140721]">
                      {sc.key}
                    </kbd>
                    <span className="text-right text-xs sm:text-sm text-[#FBF9FE]">{sc.action}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 lg:py-24">
          <div className="ks-container">
            <span className="ks-subtitle text-[#8E1EA2] dark:text-[#98E8DE]">Dependencies</span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[var(--ks-text)]">Pure-Rust technology stack</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TECH_STACK.map((crate) => (
                <div
                  key={crate.name}
                  className="rounded-[10px] border border-[var(--ks-border)] bg-[var(--ks-mist)] p-5"
                >
                  <div className="font-mono text-base font-bold text-[#542177] dark:text-[#98E8DE]">{crate.name}</div>
                  <p className="mt-1.5 text-sm text-[var(--ks-text-secondary)]">{crate.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <PreFooterCTA />
      <Footer />
    </div>
  );
}
