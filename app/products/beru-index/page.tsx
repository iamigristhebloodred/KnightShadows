import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import IndexExplorer from '@/components/IndexExplorer';
import PreFooterCTA from '@/components/PreFooterCTA';
import Footer from '@/components/Footer';
import CopyCode from '@/components/CopyCode';
import { ExternalLinkIcon, GitHubIcon, IndexIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'beru_index — Global C++ Package Registry (223+ Recipes) | KNIGHTSHADOWS',
  description:
    'Browse 223+ C and C++ package recipes hosted in KnightShadows/beru_index for declarative builds with Beru.',
};

export default function BeruIndexPage() {
  return (
    <div className="min-h-screen bg-[var(--ks-bg)] text-[var(--ks-text)]">
      <Navbar />
      <main className="pt-[116px] lg:pt-[132px]">
        {/* Header */}
        <section className="bg-[var(--ks-mist)] pb-14 pt-12 lg:pb-20 lg:pt-16">
          <div className="ks-container">
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--ks-text-muted)]">
              <Link href="/" className="hover:text-[#8E1EA2] dark:hover:text-[#98E8DE]">Home</Link>
              <span>/</span>
              <span className="font-semibold text-[var(--ks-text)]">beru_index</span>
            </div>

            <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-3 rounded-[8px] border border-[var(--ks-border)] bg-[var(--ks-surface)] px-3.5 py-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-[5px] bg-[#8E1EA2] text-white">
                    <IndexIcon className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--ks-text)]">
                    223 Package Recipes · Apache-2.0
                  </span>
                </div>

                <h1 className="font-heading text-4xl font-bold tracking-tight text-[var(--ks-text)] sm:text-6xl">
                  The global C++ registry index
                </h1>

                <p className="text-lg leading-relaxed text-[var(--ks-text-secondary)]">
                  A Git-backed index of declarative <code className="font-mono text-base font-semibold">recipe.toml</code> manifests powering Beru. Shallow-cloned to <code className="font-mono text-base font-semibold">~/.beru/index</code> so dependency resolution stays fast, transparent, and offline-capable.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="https://github.com/KnightShadows/beru_index"
                    target="_blank"
                    rel="noreferrer"
                    className="ks-btn bg-[#542177] text-white hover:bg-[#8E1EA2] dark:bg-[#98E8DE] dark:text-[#140721]"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    <span>KnightShadows/beru_index</span>
                    <ExternalLinkIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-[12px] border border-[#542177] bg-[#140721] p-6 text-[#FBF9FE] shadow-lg">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#98E8DE]">
                    fmt/11.0.2/recipe.toml
                  </span>
                  <span className="font-mono text-[11px] text-[#D552A3]">Example Recipe</span>
                </div>
                <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-[#FBF9FE]">
{`[package]
name = "fmt"
version = "11.0.2"

[source]
git = "https://github.com/fmtlib/fmt.git"
tag = "11.0.2"

[build]
system = "cmake"
args = ["-DFMT_TEST=OFF", "-DFMT_DOC=OFF"]

[export]
include_dirs = ["include"]
libs = ["fmt"]`}
                </pre>
                <div className="mt-4">
                  <CopyCode command="beru index update" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Explorer */}
        <section className="py-16 lg:py-24">
          <div className="ks-container">
            <IndexExplorer />
          </div>
        </section>
      </main>
      <PreFooterCTA />
      <Footer />
    </div>
  );
}
