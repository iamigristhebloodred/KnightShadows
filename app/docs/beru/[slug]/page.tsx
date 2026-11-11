import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BeruDocsShell from '@/components/BeruDocsShell';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { getBeruDocSections, getDocBySlug, getFlatDocPages } from '@/lib/beru-docs';

export function generateStaticParams() {
  return getFlatDocPages()
    .filter((p) => p.slug !== '')
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getDocBySlug(slug);
  if (!page) {
    return { title: 'Beru Documentation | KNIGHTSHADOWS' };
  }
  return {
    title: `${page.title} — Beru Docs | KNIGHTSHADOWS`,
    description: `${page.title} (${page.section}) — Official documentation for Beru by KnightShadows.`,
  };
}

export default async function BeruDocSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sections = getBeruDocSections();
  const page = getDocBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--ks-bg)] text-[var(--ks-text)]">
      <Navbar />
      <main>
        <BeruDocsShell sections={sections} page={page}>
          <MarkdownRenderer markdown={page.markdown} />
        </BeruDocsShell>
      </main>
      <Footer />
    </div>
  );
}

