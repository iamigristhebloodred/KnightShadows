import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import PreFooterCTA from '@/components/PreFooterCTA';
import Footer from '@/components/Footer';
import { ArrowRightIcon, ExternalLinkIcon, GitHubIcon, KnightLogo } from '@/components/Icons';
import { CONTRIBUTORS, ORG_INFO, PRODUCTS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Organization — KNIGHTSHADOWS',
  description:
    'KnightShadows is an open-source software organization building high-performance, local-first developer tools in Rust.',
};

const PRINCIPLES = [
  {
    code: '01',
    title: 'Performance by Default',
    body: 'Compiled to native Rust binaries without runtime overhead, turning multi-minute build setup and document tasks into sub-second workflows.',
  },
  {
    code: '02',
    title: 'Deterministic & Reproducible',
    body: 'Whether locking C++ dependencies with PubGrub SAT proofs or isolating compiler ABIs cryptographically, outputs remain predictable across machines.',
  },
  {
    code: '03',
    title: 'Local-First & Zero Telemetry',
    body: 'Developer tools should run reliably offline and never upload source code or personal documents to third-party servers.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--ks-bg)] text-[var(--ks-text)]">
      <Navbar />
      <main className="pt-[116px] lg:pt-[132px]">
        {/* Hero */}
        <section className="bg-[var(--ks-mist)] pb-16 pt-12 lg:pb-24 lg:pt-16">
          <div className="ks-container max-w-4xl">
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--ks-text-muted)]">
              <Link href="/" className="hover:text-[#8E1EA2] dark:hover:text-[#98E8DE]">Home</Link>
              <span>/</span>
              <span className="font-semibold text-[var(--ks-text)]">Organization</span>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <KnightLogo className="h-12 w-12 shrink-0" />
              <span className="ks-subtitle text-[#8E1EA2] dark:text-[#98E8DE]">KNIGHTSHADOWS · {ORG_INFO.location}</span>
            </div>

            <h1 className="mt-5 font-heading text-4xl font-bold tracking-tight text-[var(--ks-text)] sm:text-6xl">
              High-performance developer tooling, built in the open.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-[var(--ks-text-secondary)]">
              KnightShadows is an open-source engineering organization building modern, fast, and reliable systems tools in Rust. Our work focuses on eliminating legacy friction in C++ dependency management and delivering private, terminal-native utilities.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={ORG_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="ks-btn bg-[#542177] text-white hover:bg-[#8E1EA2] dark:bg-[#98E8DE] dark:text-[#140721]"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>github.com/KnightShadows</span>
                <ExternalLinkIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Engineering Principles */}
        <section className="py-16 lg:py-24">
          <div className="ks-container">
            <span className="ks-subtitle text-[#8E1EA2] dark:text-[#98E8DE]">How We Build</span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[var(--ks-text)] sm:text-4xl">
              Core Engineering Principles
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {PRINCIPLES.map((item) => (
                <div
                  key={item.code}
                  className="rounded-[12px] border border-[var(--ks-border)] bg-[var(--ks-surface)] p-7 shadow-sm"
                >
                  <span className="font-mono text-sm font-bold text-[#8E1EA2] dark:text-[#98E8DE]">{item.code}</span>
                  <h3 className="mt-3 font-heading text-xl font-bold text-[var(--ks-text)]">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[var(--ks-text-secondary)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Contributors */}
        <section id="contributors" className="bg-[var(--ks-mist)] py-16 lg:py-24">
          <div className="ks-container">
            <span className="ks-subtitle text-[#8E1EA2] dark:text-[#98E8DE]">People Behind KnightShadows</span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[var(--ks-text)] sm:text-4xl">
              Organization Contributors
            </h2>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {CONTRIBUTORS.map((member, idx) => (
                <div
                  key={member.name}
                  className="flex flex-col justify-between rounded-[12px] border border-[var(--ks-border)] bg-[var(--ks-surface)] p-6 shadow-sm"
                >
                  <div>
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full font-mono text-sm font-bold ${
                        idx % 2 === 0
                          ? 'bg-[#542177] text-[#98E8DE]'
                          : 'bg-[#140721] text-[#D552A3]'
                      }`}
                    >
                      {member.initials}
                    </div>
                    <h3 className="mt-4 font-heading text-xl font-bold text-[var(--ks-text)]">
                      {member.name}
                    </h3>
                    <span className="mt-1.5 inline-block rounded bg-[#98E8DE] px-2.5 py-0.5 font-mono text-[11px] font-bold text-[#140721]">
                      {member.title}
                    </span>
                  </div>
                  <p className="mt-4 border-t border-[var(--ks-border)] pt-3 text-xs font-medium text-[var(--ks-text-secondary)]">
                    {member.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Directory */}
        <section className="bg-[var(--ks-bg)] py-16 lg:py-24">
          <div className="ks-container">
            <span className="ks-subtitle text-[#8E1EA2] dark:text-[#98E8DE]">Repositories</span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[var(--ks-text)] sm:text-4xl">
              Open-Source Products
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col justify-between rounded-[12px] border border-[var(--ks-border)] bg-[var(--ks-surface)] p-7 shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-bold uppercase text-[#8E1EA2] dark:text-[#98E8DE]">
                        {product.category}
                      </span>
                      <span className="rounded bg-[#98E8DE] px-2 py-0.5 font-mono text-[11px] font-bold text-[#140721]">
                        {product.version}
                      </span>
                    </div>
                    <h3 className="mt-3 font-heading text-2xl font-bold text-[var(--ks-text)]">{product.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--ks-text-secondary)]">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[var(--ks-border)] pt-4">
                    <Link
                      href={product.href}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#542177] dark:text-[#98E8DE] hover:underline"
                    >
                      <span>Product details</span>
                      <ArrowRightIcon className="h-3.5 w-3.5" />
                    </Link>
                    <a
                      href={product.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs font-semibold text-[var(--ks-text-muted)] hover:text-[var(--ks-text)]"
                    >
                      GitHub ↗
                    </a>
                  </div>
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
