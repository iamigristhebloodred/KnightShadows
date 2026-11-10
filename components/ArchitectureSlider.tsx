'use client';

import { useState } from 'react';
import { ArrowRightIcon, BeruIcon, IndexIcon, TuipdfIcon } from './Icons';

const PILLARS = [
  {
    id: 'solver',
    badge: 'Beru · PubGrub SAT',
    title: 'Mathematical conflict resolution with human-readable proofs.',
    summary:
      'Instead of failing silently or dumping opaque CMake linker errors, Beru runs the PubGrub SAT algorithm over version ranges and prints a step-by-step logical proof whenever two dependencies diverge.',
    highlight: 'Beru.lock pins exact semver resolutions & commit SHAs across Linux, macOS, and Windows.',
    codeTitle: 'Deterministic Lockfile & Graph',
    code: `$ beru tree\nmy-engine v0.1.0\n├── fmt v11.0.2 (registry)\n└── spdlog v1.14.1 (registry)\n    └── fmt v11.0.2 (*)`,
    icon: 'beru',
  },
  {
    id: 'privacy',
    badge: 'tuipdf · Pure Rust',
    title: 'Production-grade document optimization that never leaves your machine.',
    summary:
      'Built entirely in Rust with lopdf, image, flate2, and rayon—with zero C library dependencies. Images are classified by color space (RGB, CMYK, Grayscale, ICCBased) while vectors and fonts remain untouched.',
    highlight: '100% offline, zero telemetry, and tailored Low / Medium / High compression presets.',
    codeTitle: 'Color-Space-Aware Pipeline',
    code: `Parse (lopdf) -> Classify Stream -> Detect ColorSpace\n-> Decompress (flate2) -> Re-encode (rayon) -> Write PDF`,
    icon: 'tuipdf',
  },
  {
    id: 'abi',
    badge: 'beru_index + AbiProfile',
    title: 'Cryptographic ABI isolation backed by 223+ declarative C++ recipes.',
    summary:
      'Every compiled dependency lives under an isolated SHA keyed by compiler, version, standard library, OS, target arch, build type, and C++ standard—eliminating stale-header and ABI mismatch bugs permanently.',
    highlight: 'Shallow-cloned ~/.beru/index enables hermetic --offline builds in air-gapped CI.',
    codeTitle: 'Global ABI Cache Key',
    code: `~/.beru/cache/builds/\n  └── clang18-libcxx-x86_64-linux-cxx20-release-9a4f2c/\n      ├── include/   └── libfmt.a`,
    icon: 'index',
  },
];

export default function ArchitectureSlider() {
  const [active, setActive] = useState(0);
  const current = PILLARS[active];

  return (
    <section className="relative bg-[var(--ks-mist)] pb-20 lg:pb-28 text-[var(--ks-text)]">
      {/* Astral-style Notched Top Step Transition */}
      <div className="flex h-8 lg:h-12 w-full overflow-hidden">
        <div className="h-full w-[7%] min-w-[36px] bg-[var(--ks-bg)] rounded-br-[14px]" />
        <div className="h-full flex-1 bg-[var(--ks-mist)] rounded-tl-[14px]" />
      </div>

      <div className="ks-container pt-14 lg:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="ks-subtitle text-[#8E1EA2] dark:text-[#98E8DE]">Engineering Principles</span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[var(--ks-text)] sm:text-5xl">
            Tried, tested, and deterministic.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--ks-text-secondary)]">
            Every KnightShadows tool shares the same systems engineering DNA.
          </p>
        </div>

        {/* Selector Pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {PILLARS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(idx)}
              className={`rounded-full border px-4 py-2 font-mono text-xs font-semibold transition-all ${
                active === idx
                  ? 'border-[#542177] bg-[#542177] text-[#98E8DE] dark:border-[#98E8DE] dark:bg-[#98E8DE] dark:text-[#140721]'
                  : 'border-[var(--ks-border-strong)] bg-[var(--ks-surface)] text-[var(--ks-text-secondary)] hover:border-[#8E1EA2] hover:text-[var(--ks-text)]'
              }`}
            >
              0{idx + 1} · {item.badge}
            </button>
          ))}
        </div>

        {/* Notched Card */}
        <div className="relative mx-auto mt-10 max-w-[1060px] rounded-[14px] border border-[var(--ks-border)] bg-[var(--ks-surface)] p-7 sm:p-12 lg:p-16 shadow-lg">
          {/* Top-right Notched Corner Badge */}
          <div className="absolute right-0 top-0 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-bl-[14px] border-b border-l border-[var(--ks-border)] bg-[#542177] text-[#98E8DE]">
            {current.icon === 'beru' && <BeruIcon className="h-7 w-7" />}
            {current.icon === 'tuipdf' && <TuipdfIcon className="h-7 w-7" />}
            {current.icon === 'index' && <IndexIcon className="h-7 w-7" />}
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="min-w-0 lg:col-span-7 space-y-5 pr-8 lg:pr-0">
              <span className="inline-block rounded bg-[var(--ks-mist)] px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#8E1EA2] dark:text-[#98E8DE]">
                {current.badge}
              </span>
              <h3 className="font-heading text-2xl font-bold leading-snug text-[var(--ks-text)] sm:text-3xl">
                {current.title}
              </h3>
              <p className="text-base leading-relaxed text-[var(--ks-text-secondary)]">
                {current.summary}
              </p>
              <p className="border-l-4 border-[#8E1EA2] dark:border-[#98E8DE] pl-4 text-sm font-semibold text-[var(--ks-text)]">
                {current.highlight}
              </p>
            </div>

            <div className="min-w-0 lg:col-span-5">
              <div className="rounded-[10px] border border-[#542177] bg-[#140721] p-5 text-[#FBF9FE] shadow-inner">
                <div className="mb-3 flex items-center justify-between border-b border-[#542177] pb-2.5">
                  <span className="font-mono text-xs font-semibold text-[#98E8DE]">
                    {current.codeTitle}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#D552A3]">
                    Rust CLI
                  </span>
                </div>
                <pre className="overflow-x-auto ks-no-scrollbar font-mono text-xs leading-relaxed text-[#FBF9FE]">
                  {current.code}
                </pre>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="font-mono text-xs text-[var(--ks-text-muted)]">
                  Pillar 0{active + 1} / 0{PILLARS.length}
                </span>
                <button
                  type="button"
                  onClick={() => setActive((active + 1) % PILLARS.length)}
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#8E1EA2] dark:text-[#98E8DE] hover:underline"
                >
                  <span>Next Pillar</span>
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
