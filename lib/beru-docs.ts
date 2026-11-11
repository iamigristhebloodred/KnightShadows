import fs from 'node:fs';
import path from 'node:path';

export interface DocNavItem {
  title: string;
  file: string;
  slug: string;
  href: string;
  section: string;
  children?: DocNavItem[];
}

export interface DocSection {
  title: string;
  items: DocNavItem[];
}

export interface DocHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface DocPageData {
  slug: string;
  file: string;
  title: string;
  section: string;
  href: string;
  githubUrl: string;
  markdown: string;
  headings: DocHeading[];
  prev: DocNavItem | null;
  next: DocNavItem | null;
}

const DOCS_ROOT = path.join(process.cwd(), 'content', 'docs', 'beru');

export function fileToSlug(file: string): string {
  const clean = file.replace(/^\.\//, '').replace(/\.md$/i, '');
  if (clean.toLowerCase() === 'home') return '';
  return clean.toLowerCase();
}

export function fileToHref(fileWithHash: string): string {
  const [filePart, hashPart] = fileWithHash.split('#');
  const slug = fileToSlug(filePart.trim());
  const base = slug ? `/docs/beru/${slug}` : '/docs/beru';
  return hashPart ? `${base}#${hashPart}` : base;
}

export function slugifyHeading(text: string): string {
  return text
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-');
}

function stripInlineFormatting(text: string): string {
  return text
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .trim();
}

export function getBeruDocSections(): DocSection[] {
  const summaryPath = path.join(DOCS_ROOT, 'SUMMARY.md');
  const raw = fs.readFileSync(summaryPath, 'utf-8');
  const sections: DocSection[] = [];
  let currentSection: DocSection | null = null;
  let lastTopItem: DocNavItem | null = null;

  for (const line of raw.split(/\r?\n/)) {
    const secMatch = line.match(/^###\s+(.+)$/);
    if (secMatch) {
      const cleanTitle = secMatch[1].replace(/^[^\w]+/, '').trim();
      currentSection = { title: cleanTitle, items: [] };
      sections.push(currentSection);
      lastTopItem = null;
      continue;
    }

    const nestedMatch = line.match(/^\s{2,}\*\s+\[([^\]]+)\]\(([^)]+)\)/);
    if (nestedMatch && currentSection && lastTopItem) {
      const title = stripInlineFormatting(nestedMatch[1]);
      const file = nestedMatch[2].trim();
      const child: DocNavItem = {
        title,
        file,
        slug: fileToSlug(file),
        href: fileToHref(file),
        section: currentSection.title,
      };
      if (!lastTopItem.children) lastTopItem.children = [];
      lastTopItem.children.push(child);
      continue;
    }

    const itemMatch = line.match(/^\*\s+\[([^\]]+)\]\(([^)]+)\)/);
    if (itemMatch && currentSection) {
      const title = stripInlineFormatting(itemMatch[1]);
      const file = itemMatch[2].trim();
      const item: DocNavItem = {
        title,
        file,
        slug: fileToSlug(file),
        href: fileToHref(file),
        section: currentSection.title,
      };
      currentSection.items.push(item);
      lastTopItem = item;
    }
  }

  return sections;
}

export function getFlatDocPages(): DocNavItem[] {
  const sections = getBeruDocSections();
  const flat: DocNavItem[] = [];
  for (const sec of sections) {
    for (const item of sec.items) {
      flat.push(item);
      if (item.children) {
        flat.push(...item.children);
      }
    }
  }
  return flat;
}

export function extractHeadings(markdown: string): DocHeading[] {
  const headings: DocHeading[] = [];
  const usedIds = new Map<string, number>();
  let inFence = false;

  for (const line of markdown.split(/\r?\n/)) {
    if (line.trim().startsWith('```')) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (match) {
      const level = match[1].length as 2 | 3;
      const text = stripInlineFormatting(match[2]);
      const baseId = slugifyHeading(text);
      const count = usedIds.get(baseId) ?? 0;
      usedIds.set(baseId, count + 1);
      const id = count === 0 ? baseId : `${baseId}-${count}`;
      headings.push({ id, text, level });
    }
  }

  return headings;
}

export function getDocBySlug(slug: string): DocPageData | null {
  const pages = getFlatDocPages();
  const idx = pages.findIndex((p) => p.slug === slug);
  if (idx === -1) return null;

  const current = pages[idx];
  const filePath = path.join(DOCS_ROOT, current.file);
  if (!fs.existsSync(filePath)) return null;

  const markdown = fs.readFileSync(filePath, 'utf-8');
  const h1Match = markdown.match(/^#\s+(.+)$/m);
  const title = h1Match ? stripInlineFormatting(h1Match[1]) : current.title;
  const headings = extractHeadings(markdown);

  return {
    slug: current.slug,
    file: current.file,
    title,
    section: current.section,
    href: current.href,
    githubUrl: `https://github.com/KnightShadows/beru/blob/main/docs/${current.file}`,
    markdown,
    headings,
    prev: idx > 0 ? pages[idx - 1] : null,
    next: idx < pages.length - 1 ? pages[idx + 1] : null,
  };
}
