import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BeruDocsShell from '@/components/BeruDocsShell';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { getBeruDocSections, getDocBySlug } from '@/lib/beru-docs';

export const metadata: Metadata = {
  title: 'Beru Documentation — The Beru Book | KNIGHTSHADOWS',
  description:
    'Official documentation for Beru, the declarative C++ package manager and build orchestrator built in Rust by KnightShadows.',
};

const QUICK_JUMP = [
  {
    eyebrow: 'Start Here',
    title: 'Getting Started',
    desc: 'Install Beru, verify prerequisites with beru setup, and scaffold your first C++20 project.',
    href: '/docs/beru/getting-started',
  },
  {
    eyebrow: 'Reference',
    title: 'Beru.toml Manifest',
    desc: 'Full specification for [package], [dependencies], [workspace], [profile], and [system-dependencies].',
    href: '/docs/beru/reference-manifest-berutoml',
  },
  {
    eyebrow: 'CLI Manual',
    title: 'CLI Reference',
    desc: 'Complete command manual covering new, add, build, run, test, vendor, setup, and self-update.',
    href: '/docs/beru/reference-cli',
  },
  {
    eyebrow: 'Deep Dive',
    title: 'Architecture & PubGrub',
    desc: 'How Beru parses manifests, solves constraints mathematically, isolates ABIs, and synthesizes CMake.',
    href: '/docs/beru/architecture',
  },
];

export default function BeruDocsHomePage() {
  const sections = getBeruDocSections();
  const page = getDocBySlug('');

  if (!page) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[var(--ks-bg)] text-[var(--ks-text)]">
      <Navbar />
      <main>
        <BeruDocsShell sections={sections} page={page}>
          {/* Quick-Start Cards */}
          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            {QUICK_JUMP.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group rounded-[10px] border border-[var(--ks-border)] bg-[var(--ks-mist)] p-5 transition-all hover:border-[#8E1EA2] dark:hover:border-[#98E8DE]"
              >
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#8E1EA2] dark:text-[#98E8DE]">
                  {card.eyebrow}
                </span>
                <div className="mt-1.5 font-heading text-lg font-bold text-[var(--ks-text)] group-hover:text-[#542177] dark:group-hover:text-[#98E8DE]">
                  {card.title} →
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--ks-text-secondary)]">
                  {card.desc}
                </p>
              </Link>
            ))}
          </div>

          <MarkdownRenderer markdown={page.markdown} />
        </BeruDocsShell>
      </main>
      <Footer />
    </div>
  );
}

