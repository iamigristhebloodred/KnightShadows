'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import CopyCode from './CopyCode';
import {
  ArrowRightIcon,
  BeruIcon,
  ExternalLinkIcon,
  IndexIcon,
  TuipdfIcon,
} from './Icons';
import {
  BERU_COMPARISON,
  BERU_INDEX_PACKAGES,
  TUIPDF_PIPELINE,
  TUIPDF_TIERS,
} from '@/lib/data';

export default function ProductShowcase() {
  const [beruTab, setBeruTab] = useState<'matrix' | 'manifest' | 'setup'>('matrix');
  const [selectedTier, setSelectedTier] = useState(1);
  const [pkgQuery, setPkgQuery] = useState('');
  const [selectedPkg, setSelectedPkg] = useState('fmt');

  const filteredPackages = useMemo(() => {
    const q = pkgQuery.trim().toLowerCase();
    const list = q
      ? BERU_INDEX_PACKAGES.filter((name) => name.toLowerCase().includes(q))
      : ['fmt', 'spdlog', 'nlohmann-json', 'boost', 'eigen', 'raylib', 'grpc', 'openssl', 'sqlite3', 'catch2', 'imgui', 'vulkan'];
    return list.slice(0, 12);
  }, [pkgQuery]);

  return (
    <section id="products" className="py-20 lg:py-28 bg-[var(--ks-bg)] text-[var(--ks-text)]">
      <div className="ks-container">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="ks-subtitle text-[#8E1EA2] dark:text-[#98E8DE]">Product Ecosystem</span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[var(--ks-text)] sm:text-5xl">
            Fast, deterministic, local-first
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[var(--ks-text-secondary)]">
            KnightShadows’ mission is to replace brittle legacy developer workflows with single-binary Rust tools engineered for speed, reproducibility, and privacy.
          </p>
        </div>

        {/* Flagship Showcase Card: BERU */}
        <div className="overflow-hidden rounded-[14px] border border-[#542177] bg-[#140721] text-[#FBF9FE] shadow-2xl">
          {/* Geometric Top Header Strip (#542177 -> #8E1EA2 -> #D552A3) */}
          <div className="relative h-20 sm:h-24 w-full ks-dark-grid-pattern bg-gradient-to-r from-[#542177] via-[#8E1EA2] to-[#D552A3]">
            <div className="absolute bottom-0 left-0 flex h-8 w-full">
              <div className="h-full w-[6%] min-w-[28px] bg-[#140721] rounded-tr-[12px]" />
              <div className="h-full flex-1 bg-transparent" />
              <div className="h-full w-[30%] bg-[#140721] rounded-tl-[12px]" />
            </div>
          </div>

          <div className="px-6 pb-10 pt-2 sm:px-10 lg:px-14 lg:pb-14">
            {/* Flagship Product Header */}
            <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-[12px] border border-[#8E1EA2] bg-[#542177] text-[#98E8DE] shadow-md">
                <BeruIcon className="h-7 w-7" />
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
                <span className="ks-subtitle text-[#98E8DE]">Beru</span>
                <span className="rounded bg-[#98E8DE] px-2 py-0.5 font-mono text-[11px] font-bold text-[#140721]">
                  v0.6.2
                </span>
                <span className="rounded bg-[#D552A3] px-2 py-0.5 font-mono text-[11px] font-bold text-[#140721]">
                  MIT / Apache-2.0
                </span>
              </div>

              <h3 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl">
                C++ builds at lightspeed
              </h3>

              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#E4D8F2]">
                A declarative C++ package manager and build orchestrator written in Rust. Replaces sprawling <code className="rounded bg-[#281042] px-1.5 py-0.5 font-mono text-sm text-[#98E8DE]">CMakeLists.txt</code> scripts with <code className="rounded bg-[#281042] px-1.5 py-0.5 font-mono text-sm text-[#98E8DE]">Beru.toml</code>, PubGrub SAT resolution, and cryptographic ABI caching.
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/products/beru"
                  className="ks-btn bg-[#98E8DE] text-[#140721] hover:bg-white"
                >
                  <span>Learn more</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <a
                  href="https://github.com/KnightShadows/beru"
                  target="_blank"
                  rel="noreferrer"
                  className="ks-btn border border-[#8E1EA2] bg-[#281042] text-[#FBF9FE] hover:border-[#98E8DE] hover:text-[#98E8DE]"
                >
                  <span>KnightShadows/beru</span>
                  <ExternalLinkIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Interactive Workbench Panel */}
            <div className="mx-auto mt-12 max-w-[1060px] rounded-[12px] border border-[#542177] bg-[#1E0C31] p-5 sm:p-8 lg:p-10">
              <div className="mb-6 flex flex-col justify-between gap-4 border-b border-[#542177] pb-5 sm:flex-row sm:items-center">
                <div>
                  <p className="font-heading text-base sm:text-lg font-semibold text-white">
                    Inside the Beru Engine
                  </p>
                  <p className="text-xs sm:text-sm text-[#DFD3EE]">
                    Deterministic resolution, ABI isolation, and zero-friction developer ergonomics.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 rounded-[8px] bg-[#140721] p-1 border border-[#542177]">
                  {[
                    { id: 'matrix', label: 'Comparison' },
                    { id: 'manifest', label: 'Beru.toml & Script' },
                    { id: 'setup', label: 'beru setup' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setBeruTab(tab.id as 'matrix' | 'manifest' | 'setup')}
                      className={`rounded-[6px] px-3 py-1.5 font-mono text-xs font-semibold transition-colors ${
                        beruTab === tab.id
                          ? 'bg-[#98E8DE] text-[#140721]'
                          : 'text-[#DFD3EE] hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {beruTab === 'matrix' && (
                <div className="overflow-x-auto ks-no-scrollbar">
                  <table className="w-full min-w-[640px] text-left text-sm">
                    <thead>
                      <tr className="border-b border-[#542177] text-xs font-mono uppercase tracking-wider text-[#DFD3EE]">
                        <th className="py-3 pr-4">Capability</th>
                        <th className="py-3 px-3">CMake FetchContent</th>
                        <th className="py-3 px-3">Conan 2.0</th>
                        <th className="py-3 px-3">vcpkg</th>
                        <th className="py-3 pl-3 text-[#98E8DE]">Beru</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#3A1957]">
                      {BERU_COMPARISON.map((row) => (
                        <tr key={row.capability} className="hover:bg-[#281042]/70">
                          <td className="py-3 pr-4 font-medium text-[#FBF9FE]">{row.capability}</td>
                          <td className="py-3 px-3 font-mono text-xs text-[#C2B0D9]">{row.cmake}</td>
                          <td className="py-3 px-3 font-mono text-xs text-[#DFD3EE]">{row.conan}</td>
                          <td className="py-3 px-3 font-mono text-xs text-[#DFD3EE]">{row.vcpkg}</td>
                          <td className="py-3 pl-3 font-mono text-xs font-semibold text-[#98E8DE]">
                            ✓ {row.beru}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {beruTab === 'manifest' && (
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="rounded-[8px] border border-[#542177] bg-[#140721] p-4 sm:p-5">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#D552A3]">
                        Beru.toml — Declarative Manifest
                      </span>
                      <span className="font-mono text-[11px] text-[#98E8DE]">C++20</span>
                    </div>
                    <pre className="overflow-x-auto ks-no-scrollbar font-mono text-xs leading-relaxed text-[#FBF9FE]">
{`[package]
name = "my-engine"
version = "0.1.0"
cxx_standard = "c++20"

[dependencies]
fmt = "11.0.2"
spdlog = "1.14.1"

[profile.release]
opt-level = 3
lto = true`}
                    </pre>
                  </div>

                  <div className="rounded-[8px] border border-[#542177] bg-[#140721] p-4 sm:p-5">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#98E8DE]">
                        script.cpp — Zero-Context Execution
                      </span>
                      <span className="font-mono text-[11px] text-[#D552A3]">$ beru run script.cpp</span>
                    </div>
                    <pre className="overflow-x-auto ks-no-scrollbar font-mono text-xs leading-relaxed text-[#FBF9FE]">
{`// /// beru
// [dependencies]
// fmt = "11.0.2"
// ///

#include <fmt/core.h>

int main() {
    fmt::print("Hello from zero-ceremony Beru!\\n");
    return 0;
}`}
                    </pre>
                  </div>
                </div>
              )}

              {beruTab === 'setup' && (
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="rounded-[8px] border border-[#542177] bg-[#140721] p-4 sm:p-5">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#98E8DE]">
                      $ beru setup
                    </span>
                    <pre className="mt-3 overflow-x-auto ks-no-scrollbar font-mono text-xs leading-relaxed text-[#FBF9FE]">
{`=== Beru Environment & Toolchain Setup ===

  git             [OK]     git version 2.43.0
  cmake           [OK]     cmake version 3.28.3 (>= 3.20)
  C++ compiler    [OK]     clang version 18.1.3
  ninja           [OK]     ninja 1.11.1
  PATH            [OK]     ~/.beru/bin is in PATH

Success: All prerequisites are met!`}
                    </pre>
                  </div>
                  <div className="flex flex-col justify-between rounded-[8px] border border-[#542177] bg-[#140721] p-4 sm:p-5">
                    <div>
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#D552A3]">
                        Cryptographic ABI Isolation
                      </span>
                      <p className="mt-2 text-sm leading-relaxed text-[#E4D8F2]">
                        Dependencies compile once and cache globally under <code className="text-[#98E8DE]">~/.beru/cache/builds/&lt;abi-hash&gt;/</code>. Every hash encodes compiler, version, stdlib, architecture, OS, build type, C++ standard, and feature flags.
                      </p>
                    </div>
                    <div className="mt-4">
                      <CopyCode command="beru new my-engine --type executable --cxx-std c++20" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Product 2 & 3 Grid: tuipdf & beru_index */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* TUIPDF Card */}
          <article className="min-w-0 flex flex-col justify-between rounded-[14px] border border-[var(--ks-border)] bg-[var(--ks-mist)] p-6 sm:p-10 shadow-sm">
            <div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#140721] text-[#D552A3]">
                    <TuipdfIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-heading text-xl font-bold text-[var(--ks-text)]">tuipdf</span>
                      <span className="rounded bg-[#D552A3] px-2 py-0.5 font-mono text-[11px] font-bold text-[#140721]">
                        v0.1.1
                      </span>
                    </div>
                    <span className="font-mono text-xs text-[var(--ks-text-muted)]">Pure Rust · MPL-2.0</span>
                  </div>
                </div>
                <a
                  href="https://github.com/KnightShadows/tuipdf"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="tuipdf repository on GitHub"
                  className="inline-flex items-center gap-1 rounded-[6px] border border-[var(--ks-border-strong)] bg-[var(--ks-surface)] px-3 py-1.5 font-mono text-xs font-semibold text-[var(--ks-text)] hover:border-[#8E1EA2] dark:hover:border-[#98E8DE]"
                >
                  <span>GitHub</span>
                  <ExternalLinkIcon className="h-3.5 w-3.5" />
                </a>
              </div>

              <h3 className="mt-6 font-heading text-2xl font-bold text-[var(--ks-text)] sm:text-3xl">
                Terminal-native PDF toolkit
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[var(--ks-text-secondary)]">
                Compress and manage PDFs locally inside a responsive keyboard-driven TUI. Zero cloud uploads, zero C dependencies, and full CMYK / ICCBased color fidelity.
              </p>

              {/* Interactive Compression Profile Selector + Simulated TUI Frame */}
              <div className="mt-6 rounded-[10px] border border-[var(--ks-border)] bg-[var(--ks-surface)] p-4">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--ks-text-muted)]">
                    Compression Tiers
                  </span>
                  <div className="flex gap-1.5">
                    {TUIPDF_TIERS.map((tier, idx) => (
                      <button
                        key={tier.name}
                        type="button"
                        onClick={() => setSelectedTier(idx)}
                        className={`rounded-[5px] px-2.5 py-1 font-mono text-xs font-semibold transition-colors ${
                          selectedTier === idx
                            ? 'bg-[#542177] text-[#98E8DE] dark:bg-[#98E8DE] dark:text-[#140721]'
                            : 'bg-[var(--ks-mist)] text-[var(--ks-text-secondary)] hover:text-[var(--ks-text)]'
                        }`}
                      >
                        {tier.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulated ratatui Terminal Pane */}
                <div className="rounded-[8px] border border-[#542177] bg-[#140721] p-3.5 font-mono text-xs text-[#FBF9FE]">
                  <div className="flex items-center justify-between border-b border-[#542177] pb-2 text-[11px]">
                    <span className="font-bold text-[#98E8DE]">tuipdf v0.1.1</span>
                    <span className="text-[#D552A3]">[Enter] cycle · [q] quit</span>
                  </div>
                  <div className="mt-2.5 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[#DFD3EE]">Profile</span>
                      <span className="font-bold text-[#98E8DE]">
                        {TUIPDF_TIERS[selectedTier].name} ({TUIPDF_TIERS[selectedTier].quality})
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#DFD3EE]">ColorSpace</span>
                      <span className="text-[#FBF9FE]">RGB · CMYK · ICCBased ✓</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#DFD3EE]">Vectors &amp; Fonts</span>
                      <span className="text-[#98E8DE]">Preserved untouched</span>
                    </div>
                  </div>
                  <p className="mt-2.5 border-t border-[#542177] pt-2 font-sans text-xs leading-relaxed text-[#DFD3EE]">
                    {TUIPDF_TIERS[selectedTier].note}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {TUIPDF_PIPELINE.map((stage) => (
                    <span
                      key={stage.step}
                      className="rounded-[5px] border border-[var(--ks-border)] bg-[var(--ks-bg)] px-2 py-1 font-mono text-[11px] font-medium text-[var(--ks-text-secondary)]"
                    >
                      {stage.step} {stage.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <CopyCode command="cargo install tuipdf" />
              <div className="flex items-center justify-between">
                <Link
                  href="/products/tuipdf"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#542177] dark:text-[#98E8DE] hover:underline"
                >
                  <span>Explore tuipdf architecture</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <span className="font-mono text-xs text-[var(--ks-text-muted)]">ratatui · lopdf · rayon</span>
              </div>
            </div>
          </article>

          {/* BERU_INDEX Card */}
          <article className="min-w-0 flex flex-col justify-between rounded-[14px] border border-[var(--ks-border)] bg-[var(--ks-mist)] p-6 sm:p-10 shadow-sm">
            <div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#8E1EA2] text-white">
                    <IndexIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-heading text-xl font-bold text-[var(--ks-text)]">beru_index</span>
                      <span className="rounded bg-[#98E8DE] px-2 py-0.5 font-mono text-[11px] font-bold text-[#140721]">
                        223 Recipes
                      </span>
                    </div>
                    <span className="font-mono text-xs text-[var(--ks-text-muted)]">TOML Registry · Apache-2.0</span>
                  </div>
                </div>
                <a
                  href="https://github.com/KnightShadows/beru_index"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="beru_index repository on GitHub"
                  className="inline-flex items-center gap-1 rounded-[6px] border border-[var(--ks-border-strong)] bg-[var(--ks-surface)] px-3 py-1.5 font-mono text-xs font-semibold text-[var(--ks-text)] hover:border-[#8E1EA2] dark:hover:border-[#98E8DE]"
                >
                  <span>GitHub</span>
                  <ExternalLinkIcon className="h-3.5 w-3.5" />
                </a>
              </div>

              <h3 className="mt-6 font-heading text-2xl font-bold text-[var(--ks-text)] sm:text-3xl">
                Global C++ package registry
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[var(--ks-text-secondary)]">
                Decentralized Git-backed recipe index hosting 223+ C and C++ libraries. Shallow-cloned to <code className="font-mono text-sm font-semibold text-[var(--ks-text)]">~/.beru/index</code> for instant offline resolution.
              </p>

              {/* Live Mini Package Filter */}
              <div className="mt-6 rounded-[10px] border border-[var(--ks-border)] bg-[var(--ks-surface)] p-4">
                <div className="flex items-center gap-2">
                  <input
                    type="search"
                    value={pkgQuery}
                    onChange={(e) => setPkgQuery(e.target.value)}
                    placeholder="Filter 223 recipes (e.g. boost, raylib, grpc)..."
                    aria-label="Filter beru_index packages"
                    className="w-full rounded-[6px] border border-[var(--ks-border)] bg-[var(--ks-mist)] px-3 py-2 font-mono text-xs text-[var(--ks-text)] placeholder:text-[var(--ks-text-muted)]"
                  />
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {filteredPackages.length > 0 ? (
                    filteredPackages.map((pkg) => (
                      <button
                        key={pkg}
                        type="button"
                        onClick={() => setSelectedPkg(pkg)}
                        className={`rounded-[5px] border px-2.5 py-1 font-mono text-xs font-semibold transition-colors ${
                          selectedPkg === pkg
                            ? 'border-[#542177] bg-[#542177] text-[#98E8DE] dark:border-[#98E8DE] dark:bg-[#98E8DE] dark:text-[#140721]'
                            : 'border-[var(--ks-border)] bg-[var(--ks-bg)] text-[var(--ks-text)] hover:border-[#8E1EA2] dark:hover:border-[#98E8DE]'
                        }`}
                      >
                        {pkg}
                      </button>
                    ))
                  ) : (
                    <span className="font-mono text-xs text-[var(--ks-text-muted)]">
                      No matching recipe found.
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <CopyCode command={`beru add ${selectedPkg}`} />
              <div className="flex items-center justify-between">
                <Link
                  href="/products/beru-index"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#542177] dark:text-[#98E8DE] hover:underline"
                >
                  <span>Browse all 223 recipes</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <span className="font-mono text-xs text-[var(--ks-text-muted)]">recipe.toml · git-backed</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
