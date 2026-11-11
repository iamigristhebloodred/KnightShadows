import React from 'react';
import Link from 'next/link';
import DocCodeBlock from './DocCodeBlock';
import { fileToHref, slugifyHeading } from '@/lib/beru-docs';

function renderInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const tokenRegex = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let key = 0;

  for (const match of text.matchAll(tokenRegex)) {
    const idx = match.index ?? 0;
    if (idx > lastIndex) {
      nodes.push(text.slice(lastIndex, idx));
    }

    const token = match[0];
    if (token.startsWith('`')) {
      nodes.push(
        <code
          key={key++}
          className="rounded-[4px] border border-[var(--ks-border)] bg-[var(--ks-mist)] px-1.5 py-0.5 font-mono text-[0.86em] font-semibold text-[#542177] dark:text-[#98E8DE]"
        >
          {token.slice(1, -1)}
        </code>
      );
    } else if (token.startsWith('**')) {
      nodes.push(
        <strong key={key++} className="font-semibold text-[var(--ks-text)]">
          {renderInline(token.slice(2, -2))}
        </strong>
      );
    } else if (token.startsWith('*')) {
      nodes.push(
        <em key={key++} className="italic">
          {renderInline(token.slice(1, -1))}
        </em>
      );
    } else if (token.startsWith('[')) {
      const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        const label = linkMatch[1];
        const rawHref = linkMatch[2].trim();
        if (/^https?:\/\//i.test(rawHref)) {
          nodes.push(
            <a
              key={key++}
              href={rawHref}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#8E1EA2] underline decoration-[#8E1EA2]/40 underline-offset-4 hover:decoration-[#8E1EA2] dark:text-[#98E8DE] dark:decoration-[#98E8DE]/40 dark:hover:decoration-[#98E8DE]"
            >
              {renderInline(label)}
            </a>
          );
        } else if (rawHref.endsWith('.md') || rawHref.includes('.md#')) {
          nodes.push(
            <Link
              key={key++}
              href={fileToHref(rawHref)}
              className="font-semibold text-[#8E1EA2] underline decoration-[#8E1EA2]/40 underline-offset-4 hover:decoration-[#8E1EA2] dark:text-[#98E8DE] dark:decoration-[#98E8DE]/40 dark:hover:decoration-[#98E8DE]"
            >
              {renderInline(label)}
            </Link>
          );
        } else {
          nodes.push(
            <a
              key={key++}
              href={rawHref}
              className="font-semibold text-[#8E1EA2] underline underline-offset-4 dark:text-[#98E8DE]"
            >
              {renderInline(label)}
            </a>
          );
        }
      } else {
        nodes.push(token);
      }
    }

    lastIndex = idx + token.length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function MermaidPipelineCard() {
  const stages = [
    {
      num: 'Stage 1',
      name: 'Resolution',
      crate: 'beru-resolve',
      detail: 'Beru.toml + ~/.beru/index/ -> PubGrub SAT -> Beru.lock',
    },
    {
      num: 'Stage 2',
      name: 'Acquisition',
      crate: 'beru-recipe',
      detail: 'Tarball / Git fetch -> SHA-256 verification -> Temp staging dir',
    },
    {
      num: 'Stage 3',
      name: 'Cache Build',
      crate: 'beru-build',
      detail: 'Isolated CMake compile -> ~/.beru/cache/<abi-hash>/',
    },
    {
      num: 'Stage 4',
      name: 'Orchestration',
      crate: 'beru-cli',
      detail: 'Synthesize beru-toolchain.cmake -> Link build/my_app',
    },
  ];

  return (
    <div className="my-6 rounded-[12px] border border-[#542177] bg-[#140721] p-5 sm:p-6 text-[#FBF9FE]">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#98E8DE]">
          Pipeline Flow Diagram
        </span>
        <span className="rounded bg-[#542177] px-2 py-0.5 font-mono text-[10px] font-bold text-[#98E8DE]">
          4-Stage Architecture
        </span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stages.map((st, idx) => (
          <div
            key={st.num}
            className="relative rounded-[8px] border border-[#542177] bg-[#1E0C31] p-4"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-bold text-[#D552A3]">{st.num}</span>
              <span className="font-mono text-[10px] text-[#98E8DE]">{st.crate}</span>
            </div>
            <div className="mt-1.5 font-heading text-base font-bold text-white">
              {idx + 1}. {st.name}
            </div>
            <p className="mt-2 font-mono text-[11px] leading-relaxed text-[#DFD3EE]">{st.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

interface ListItem {
  indent: number;
  ordered: boolean;
  content: string;
}

export default function MarkdownRenderer({ markdown }: { markdown: string }) {
  const lines = markdown.split(/\r?\n/);
  const blocks: React.ReactNode[] = [];
  const usedIds = new Map<string, number>();
  let i = 0;
  let blockKey = 0;

  const nextHeadingId = (rawText: string) => {
    const clean = rawText
      .replace(/`([^`]+)`/g, '$1')
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/\*([^*]+)\*/g, '$1')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
    const base = slugifyHeading(clean);
    const count = usedIds.get(base) ?? 0;
    usedIds.set(base, count + 1);
    return count === 0 ? base : `${base}-${count}`;
  };

  while (i < lines.length) {
    const line = lines[i];

    // Skip blank lines
    if (!line.trim()) {
      i++;
      continue;
    }

    // Fenced code blocks
    const fenceMatch = line.match(/^```([a-zA-Z0-9_-]*)/);
    if (fenceMatch) {
      const lang = fenceMatch[1] || 'text';
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // Skip closing ```
      if (lang === 'mermaid') {
        blocks.push(<MermaidPipelineCard key={blockKey++} />);
      } else {
        blocks.push(<DocCodeBlock key={blockKey++} code={codeLines.join('\n')} lang={lang} />);
      }
      continue;
    }

    // Horizontal rule
    if (/^---+$/.test(line.trim())) {
      blocks.push(<hr key={blockKey++} className="my-8 border-[var(--ks-border)]" />);
      i++;
      continue;
    }

    // Headings (# .. ####)
    const headingMatch = line.match(/^(#{1,4})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const content = headingMatch[2].trim();

      if (level === 1) {
        // Skip duplicate H1 inside body if already rendered in header, or render cleanly
        blocks.push(
          <h1
            key={blockKey++}
            className="mb-4 font-heading text-3xl font-bold tracking-tight text-[var(--ks-text)] sm:text-4xl"
          >
            {renderInline(content)}
          </h1>
        );
      } else if (level === 2) {
        const id = nextHeadingId(content);
        blocks.push(
          <h2
            key={blockKey++}
            id={id}
            className="mt-10 mb-4 scroll-mt-32 border-b border-[var(--ks-border)] pb-2 font-heading text-2xl font-bold tracking-tight text-[var(--ks-text)]"
          >
            <a href={`#${id}`} className="group inline-flex items-center gap-2">
              <span>{renderInline(content)}</span>
              <span className="font-mono text-base text-[var(--ks-accent-bright)] opacity-0 transition-opacity group-hover:opacity-100">
                #
              </span>
            </a>
          </h2>
        );
      } else if (level === 3) {
        const id = nextHeadingId(content);
        blocks.push(
          <h3
            key={blockKey++}
            id={id}
            className="mt-7 mb-3 scroll-mt-32 font-heading text-xl font-bold text-[var(--ks-text)]"
          >
            <a href={`#${id}`} className="group inline-flex items-center gap-1.5">
              <span>{renderInline(content)}</span>
              <span className="font-mono text-sm text-[var(--ks-accent-bright)] opacity-0 transition-opacity group-hover:opacity-100">
                #
              </span>
            </a>
          </h3>
        );
      } else {
        blocks.push(
          <h4 key={blockKey++} className="mt-5 mb-2 font-heading text-base font-bold text-[var(--ks-text)]">
            {renderInline(content)}
          </h4>
        );
      }
      i++;
      continue;
    }

    // Tables
    if (line.trim().startsWith('|') && i + 1 < lines.length && /^\s*\|?[\s:|-]+\|/.test(lines[i + 1])) {
      const parseRow = (rowStr: string) =>
        rowStr
          .trim()
          .replace(/^\|/, '')
          .replace(/\|$/, '')
          .split('|')
          .map((c) => c.trim());

      const headers = parseRow(line);
      i += 2; // skip header & separator row
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        rows.push(parseRow(lines[i]));
        i++;
      }

      blocks.push(
        <div
          key={blockKey++}
          className="my-6 overflow-x-auto ks-no-scrollbar rounded-[10px] border border-[var(--ks-border)] bg-[var(--ks-surface)]"
        >
          <table className="w-full min-w-[540px] text-left text-sm">
            <thead className="bg-[var(--ks-mist)] font-mono text-xs uppercase tracking-wider text-[var(--ks-text)]">
              <tr>
                {headers.map((h, hi) => (
                  <th key={hi} className="px-4 py-3 font-bold">
                    {renderInline(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--ks-border)]">
              {rows.map((row, ri) => (
                <tr key={ri} className="hover:bg-[var(--ks-mist)]/50">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 align-top text-[var(--ks-text-secondary)] leading-relaxed">
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Lists (ordered & unordered)
    const listMatch = line.match(/^(\s*)(\*|-|\d+\.)\s+(.+)$/);
    if (listMatch) {
      const items: ListItem[] = [];
      const isOrdered = /^\d+\./.test(listMatch[2]);
      while (i < lines.length) {
        const m = lines[i].match(/^(\s*)(\*|-|\d+\.)\s+(.+)$/);
        if (!m) break;
        items.push({
          indent: m[1].length,
          ordered: /^\d+\./.test(m[2]),
          content: m[3].trim(),
        });
        i++;
      }

      const Tag = isOrdered ? 'ol' : 'ul';
      blocks.push(
        <Tag
          key={blockKey++}
          className={`my-4 space-y-2 pl-5 text-[var(--ks-text-secondary)] ${
            isOrdered ? 'list-decimal' : 'list-disc'
          }`}
        >
          {items.map((it, idx) => (
            <li
              key={idx}
              style={it.indent >= 2 ? { marginLeft: '1.25rem' } : undefined}
              className="leading-relaxed marker:text-[#8E1EA2] dark:marker:text-[#98E8DE]"
            >
              {renderInline(it.content)}
            </li>
          ))}
        </Tag>
      );
      continue;
    }

    // Paragraph (gather contiguous non-special lines)
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !lines[i].startsWith('#') &&
      !lines[i].startsWith('```') &&
      !/^---+$/.test(lines[i].trim()) &&
      !lines[i].trim().startsWith('|') &&
      !/^(\s*)(\*|-|\d+\.)\s+/.test(lines[i])
    ) {
      paraLines.push(lines[i].trim());
      i++;
    }

    blocks.push(
      <p key={blockKey++} className="my-4 text-base leading-[1.75] text-[var(--ks-text-secondary)]">
        {renderInline(paraLines.join(' '))}
      </p>
    );
  }

  return <div className="min-w-0">{blocks}</div>;
}

