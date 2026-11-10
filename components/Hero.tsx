'use client';

import { useState } from 'react';
import Link from 'next/link';
import CopyCode from './CopyCode';
import { ArrowRightIcon, BeruIcon, GitHubIcon, IndexIcon, KnightLogo, TuipdfIcon } from './Icons';
import { ORG_INFO, PRODUCTS } from '@/lib/data';

export default function Hero() {
  const [selectedTool, setSelectedTool] = useState<'beru' | 'tuipdf'>('beru');
  const [installIndex, setInstallIndex] = useState(0);

  const activeProduct = PRODUCTS.find((p) => p.id === selectedTool) ?? PRODUCTS[0];
  const currentInstall = activeProduct.installCommands[installIndex] ?? activeProduct.installCommands[0];

  return (
    <section className="relative overflow-hidden bg-[var(--ks-mist)] pt-[116px] lg:pt-[132px] text-[var(--ks-text)]">
      {/* Subtle architectural coordinate grid + KnightShadows emblem watermark */}
      <div className="pointer-events-none absolute inset-0 ks-grid-pattern opacity-80" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <KnightLogo
          monochrome
          className="h-[460px] w-[460px] sm:h-[600px] sm:w-[600px] text-[#542177]/[0.06] dark:text-[#98E8DE]/[0.06]"
        />
      </div>

      <div className="ks-container relative z-10 flex min-h-[78vh] w-full min-w-0 flex-col items-center justify-center py-12 sm:py-16 lg:py-22 text-center">
        {/* High-contrast eyebrow pill */}
        <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--ks-border-strong)] bg-[var(--ks-surface)] px-3.5 py-1.5 shadow-sm">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#8E1EA2] dark:bg-[#98E8DE]" />
          <span className="ks-subtitle text-[var(--ks-text)]">
            Rust-Powered Open Source Tooling
          </span>
        </div>

        {/* Display Headline */}
        <h1 className="max-w-4xl font-heading text-4xl font-bold uppercase leading-[0.98] tracking-[-0.03em] text-[var(--ks-text)] sm:text-6xl lg:text-[84px]">
          Next-gen
          <br />
          systems tooling
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--ks-text-secondary)] sm:text-xl">
          KnightShadows builds fast, deterministic, local-first developer tools in Rust — powering declarative C++ package builds and offline terminal workflows.
        </p>

        {/* Primary & Secondary Action Buttons */}
        <div className="mt-7 flex w-full max-w-sm flex-col justify-center gap-3 sm:max-w-none sm:flex-row sm:gap-4">
          <Link
            href="#products"
            className="ks-btn bg-[#542177] text-white hover:bg-[#8E1EA2] dark:bg-[#98E8DE] dark:text-[#140721] dark:hover:bg-white shadow-sm"
          >
            <span>Explore Products</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
          <a
            href={ORG_INFO.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="ks-btn border-2 border-[#542177] bg-transparent text-[#542177] hover:bg-[#542177] hover:text-white dark:border-[#D552A3] dark:text-[#FBF9FE] dark:hover:border-[#98E8DE] dark:hover:bg-[#98E8DE] dark:hover:text-[#140721]"
          >
            <GitHubIcon className="h-4 w-4" />
            <span>Browse GitHub</span>
          </a>
        </div>

        {/* Interactive Quick Install Console */}
        <div className="mt-10 w-full max-w-2xl min-w-0 rounded-[12px] border border-[var(--ks-border-strong)] bg-[var(--ks-surface)] p-4 sm:p-5 shadow-lg">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 rounded-[6px] bg-[var(--ks-mist)] p-1">
              {(['beru', 'tuipdf'] as const).map((toolKey) => (
                <button
                  key={toolKey}
                  type="button"
                  onClick={() => {
                    setSelectedTool(toolKey);
                    setInstallIndex(0);
                  }}
                  className={`rounded-[5px] px-3 py-1 font-mono text-xs font-semibold transition-colors ${
                    selectedTool === toolKey
                      ? 'bg-[#542177] text-[#98E8DE] dark:bg-[#98E8DE] dark:text-[#140721]'
                      : 'text-[var(--ks-text-secondary)] hover:text-[var(--ks-text)]'
                  }`}
                >
                  {toolKey}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-1">
              {activeProduct.installCommands.map((item, idx) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setInstallIndex(idx)}
                  className={`rounded-[5px] px-2.5 py-1 text-[11px] sm:text-xs font-semibold transition-colors ${
                    installIndex === idx
                      ? 'bg-[#8E1EA2] text-white dark:bg-[#D552A3] dark:text-[#140721]'
                      : 'text-[var(--ks-text-muted)] hover:text-[var(--ks-text)]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <CopyCode command={currentInstall.command} />

          <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--ks-text-muted)]">
            <span className="font-mono">
              {activeProduct.name} {activeProduct.version} · {activeProduct.license}
            </span>
            <Link
              href={activeProduct.href}
              className="font-semibold text-[#8E1EA2] dark:text-[#98E8DE] hover:underline"
            >
              Read docs →
            </Link>
          </div>
        </div>

        {/* 3-Product Quick-Jump Bar */}
        <div className="mt-8 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
          <Link
            href="/products/beru"
            className="group flex items-center gap-3 rounded-[10px] border border-[var(--ks-border)] bg-[var(--ks-surface)]/95 px-4 py-3 text-left transition-all hover:-translate-y-0.5 hover:border-[#8E1EA2] dark:hover:border-[#98E8DE] shadow-sm"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[7px] bg-[#542177] text-[#98E8DE]">
              <BeruIcon className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-sm font-bold text-[var(--ks-text)]">Beru</span>
                <span className="font-mono text-[10px] font-bold text-[#8E1EA2] dark:text-[#98E8DE]">v0.6.2</span>
              </div>
              <p className="truncate text-xs text-[var(--ks-text-secondary)]">C++ Package Manager</p>
            </div>
          </Link>

          <Link
            href="/products/tuipdf"
            className="group flex items-center gap-3 rounded-[10px] border border-[var(--ks-border)] bg-[var(--ks-surface)]/95 px-4 py-3 text-left transition-all hover:-translate-y-0.5 hover:border-[#8E1EA2] dark:hover:border-[#98E8DE] shadow-sm"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[7px] bg-[#140721] text-[#D552A3]">
              <TuipdfIcon className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-sm font-bold text-[var(--ks-text)]">tuipdf</span>
                <span className="font-mono text-[10px] font-bold text-[#8E1EA2] dark:text-[#D552A3]">v0.1.1</span>
              </div>
              <p className="truncate text-xs text-[var(--ks-text-secondary)]">Terminal PDF Toolkit</p>
            </div>
          </Link>

          <Link
            href="/products/beru-index"
            className="group flex items-center gap-3 rounded-[10px] border border-[var(--ks-border)] bg-[var(--ks-surface)]/95 px-4 py-3 text-left transition-all hover:-translate-y-0.5 hover:border-[#8E1EA2] dark:hover:border-[#98E8DE] shadow-sm"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[7px] bg-[#8E1EA2] text-white">
              <IndexIcon className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-sm font-bold text-[var(--ks-text)]">beru_index</span>
                <span className="font-mono text-[10px] font-bold text-[#542177] dark:text-[#98E8DE]">223 Recipes</span>
              </div>
              <p className="truncate text-xs text-[var(--ks-text-secondary)]">Global C++ Registry</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Astral-style Notched Bottom Step Transition */}
      <div className="relative h-8 lg:h-12 w-full flex overflow-hidden">
        <div className="h-full w-full rounded-tr-[14px] bg-[var(--ks-bg)]" />
        <div className="h-full w-[7%] min-w-[36px] bg-[var(--ks-bg)]">
          <div className="h-full w-full rounded-bl-[14px] bg-[var(--ks-mist)]" />
        </div>
      </div>
    </section>
  );
}
