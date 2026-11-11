import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import PreFooterCTA from '@/components/PreFooterCTA';
import Footer from '@/components/Footer';
import CopyCode from '@/components/CopyCode';
import { ArrowRightIcon, BeruIcon, ExternalLinkIcon, GitHubIcon } from '@/components/Icons';
import { BERU_COMMANDS, BERU_COMPARISON, PRODUCTS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Beru — Declarative C++ Package Manager | KNIGHTSHADOWS',
  description:
    'Beru is a declarative C++ package manager and build orchestrator written in Rust with PubGrub SAT resolution, cryptographic ABI caching, and CMake preset synthesis.',
};

export default function BeruPage() {
  const beru = PRODUCTS.find((p) => p.id === 'beru')!;

  return (
    <div className="min-h-screen bg-[var(--ks-bg)] text-[var(--ks-text)]">
      <Navbar />
      <main className="pt-[116px] lg:pt-[132px]">
        {/* Hero Masthead */}
        <section className="relative bg-[var(--ks-mist)] pb-16 pt-12 lg:pb-24 lg:pt-16">
          <div className="ks-container">
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--ks-text-muted)]">
              <Link href="/" className="hover:text-[#8E1EA2] dark:hover:text-[#98E8DE]">Home</Link>
              <span>/</span>
              <span className="text-[var(--ks-text)] font-semibold">Beru</span>
            </div>

            <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-3 rounded-[8px] border border-[var(--ks-border)] bg-[var(--ks-surface)] px-3.5 py-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-[5px] bg-[#542177] text-[#98E8DE]">
                    <BeruIcon className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--ks-text)]">
                    {beru.version} · {beru.language} · {beru.license}
                  </span>
                </div>

                <h1 className="font-heading text-4xl font-bold tracking-tight text-[var(--ks-text)] sm:text-6xl">
                  Declarative C++ package management &amp; orchestration
                </h1>

                <p className="text-lg leading-relaxed text-[var(--ks-text-secondary)]">
                  {beru.description}
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href="/docs/beru"
                    className="ks-btn bg-[#542177] text-white hover:bg-[#8E1EA2] dark:bg-[#98E8DE] dark:text-[#140721]"
                  >
                    <span>Read Full Docs</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/products/beru-index"
                    className="ks-btn border-2 border-[#542177] bg-transparent text-[#542177] hover:bg-[#542177] hover:text-white dark:border-[#98E8DE] dark:text-white dark:hover:bg-[#98E8DE] dark:hover:text-[#140721]"
                  >
                    <span>Browse 223+ Recipes</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                  <a
                    href={beru.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="ks-btn border border-[var(--ks-border-strong)] bg-[var(--ks-surface)] text-[var(--ks-text)] hover:border-[#8E1EA2] dark:hover:border-[#98E8DE]"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    <span>View Repository</span>
                    <ExternalLinkIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4 rounded-[12px] border border-[var(--ks-border)] bg-[var(--ks-surface)] p-6 shadow-lg">
                <h2 className="font-heading text-lg font-bold text-[var(--ks-text)]">Quick Installation</h2>
                {beru.installCommands.map((item) => (
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

        {/* Core Architecture Highlights */}
        <section className="py-16 lg:py-24">
          <div className="ks-container">
            <div className="max-w-2xl">
              <span className="ks-subtitle text-[#8E1EA2] dark:text-[#98E8DE]">Why Beru</span>
              <h2 className="mt-2 font-heading text-3xl font-bold text-[var(--ks-text)] sm:text-4xl">
                Ergonomics of Cargo &amp; uv, built natively for C++
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {beru.highlights.map((item, idx) => (
                <div
                  key={item}
                  className="rounded-[12px] border border-[var(--ks-border)] bg-[var(--ks-surface)] p-6 shadow-sm"
                >
                  <span className="font-mono text-xs font-bold text-[#8E1EA2] dark:text-[#98E8DE]">0{idx + 1}</span>
                  <p className="mt-3 text-base font-medium leading-relaxed text-[var(--ks-text)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Manifest + Ad-Hoc Script + Workspaces */}
        <section className="bg-[#140721] py-16 lg:py-24 text-[#FBF9FE]">
          <div className="ks-container space-y-10">
            <div>
              <span className="ks-subtitle text-[#98E8DE]">Workflows</span>
              <h2 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
                Zero-ceremony scripts to multi-target monorepos
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-[12px] border border-[#542177] bg-[#1E0C31] p-6">
                <div className="font-mono text-xs font-bold uppercase text-[#98E8DE]">1. Project Manifest</div>
                <p className="mt-2 text-sm text-[#E4D8F2]">Readable declarative configuration replacing boilerplate CMake.</p>
                <pre className="mt-4 overflow-x-auto rounded bg-[#140721] p-4 font-mono text-xs text-[#FBF9FE]">
{`[package]
name = "my-engine"
version = "0.1.0"
cxx_standard = "c++20"

[dependencies]
fmt = "11.0.2"
spdlog = "1.14.1"`}
                </pre>
              </div>

              <div className="rounded-[12px] border border-[#542177] bg-[#1E0C31] p-6">
                <div className="font-mono text-xs font-bold uppercase text-[#D552A3]">2. Ad-Hoc Single File</div>
                <p className="mt-2 text-sm text-[#E4D8F2]">Execute C++ utilities directly with inline dependency metadata.</p>
                <pre className="mt-4 overflow-x-auto rounded bg-[#140721] p-4 font-mono text-xs text-[#FBF9FE]">
{`// /// beru
// [dependencies]
// fmt = "11.0.2"
// ///

#include <fmt/core.h>
int main() {
  fmt::print("Hello Beru!\\n");
}`}
                </pre>
              </div>

              <div className="rounded-[12px] border border-[#542177] bg-[#1E0C31] p-6">
                <div className="font-mono text-xs font-bold uppercase text-[#98E8DE]">3. Monorepo Workspaces</div>
                <p className="mt-2 text-sm text-[#E4D8F2]">Unified lockfile &amp; dependency graph across libraries and apps.</p>
                <pre className="mt-4 overflow-x-auto rounded bg-[#140721] p-4 font-mono text-xs text-[#FBF9FE]">
{`[workspace]
members = [
  "libs/math",
  "libs/physics",
  "apps/game"
]`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* CLI Cheatsheet & Comparison */}
        <section className="py-16 lg:py-24">
          <div className="ks-container space-y-16">
            <div>
              <span className="ks-subtitle text-[#8E1EA2] dark:text-[#98E8DE]">CLI Reference</span>
              <h2 className="mt-2 font-heading text-3xl font-bold text-[var(--ks-text)]">Command Cheatsheet</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {BERU_COMMANDS.map((item) => (
                  <div
                    key={item.cmd}
                    className="rounded-[10px] border border-[var(--ks-border)] bg-[var(--ks-mist)] p-4"
                  >
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#8E1EA2] dark:text-[#98E8DE]">
                      {item.category}
                    </span>
                    <div className="mt-1 font-mono text-sm font-bold text-[var(--ks-text)]">{item.cmd}</div>
                    <p className="mt-1.5 text-xs leading-relaxed text-[var(--ks-text-secondary)]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="ks-subtitle text-[#8E1EA2] dark:text-[#98E8DE]">Ecosystem Matrix</span>
              <h2 className="mt-2 font-heading text-3xl font-bold text-[var(--ks-text)]">How Beru compares</h2>
              <div className="mt-6 overflow-x-auto rounded-[12px] border border-[var(--ks-border)] bg-[var(--ks-surface)]">
                <table className="w-full min-w-[680px] text-left text-sm">
                  <thead className="bg-[var(--ks-mist)] font-mono text-xs uppercase tracking-wider text-[var(--ks-text-muted)]">
                    <tr>
                      <th className="p-4">Capability</th>
                      <th className="p-4">CMake FetchContent</th>
                      <th className="p-4">Conan 2.0</th>
                      <th className="p-4">vcpkg</th>
                      <th className="p-4 text-[#542177] dark:text-[#98E8DE]">Beru</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--ks-border)]">
                    {BERU_COMPARISON.map((row) => (
                      <tr key={row.capability}>
                        <td className="p-4 font-semibold text-[var(--ks-text)]">{row.capability}</td>
                        <td className="p-4 font-mono text-xs text-[var(--ks-text-muted)]">{row.cmake}</td>
                        <td className="p-4 font-mono text-xs text-[var(--ks-text-secondary)]">{row.conan}</td>
                        <td className="p-4 font-mono text-xs text-[var(--ks-text-secondary)]">{row.vcpkg}</td>
                        <td className="p-4 font-mono text-xs font-bold text-[#8E1EA2] dark:text-[#98E8DE]">✓ {row.beru}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PreFooterCTA />
      <Footer />
    </div>
  );
}
