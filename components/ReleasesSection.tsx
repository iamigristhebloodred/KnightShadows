import Link from 'next/link';
import { ArrowRightIcon, BeruIcon, IndexIcon, TuipdfIcon } from './Icons';
import { RELEASES } from '@/lib/data';

export default function ReleasesSection() {
  const [featured, ...secondary] = RELEASES;

  return (
    <section className="bg-[var(--ks-bg)] py-20 lg:py-28 text-[var(--ks-text)]">
      <div className="ks-container">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="ks-subtitle text-[#8E1EA2] dark:text-[#98E8DE]">Changelog &amp; Notes</span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-[var(--ks-text)] sm:text-5xl">
              Space to ship
            </h2>
          </div>
          <a
            href="https://github.com/KnightShadows"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#542177] dark:text-[#98E8DE] hover:underline"
          >
            <span>All GitHub Releases</span>
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Featured Release */}
          <div className="lg:col-span-7">
            <Link
              href={featured.slug}
              className="ks-card group block overflow-hidden rounded-[14px] border border-[var(--ks-border)] bg-[var(--ks-surface)]"
            >
              <div className="relative flex h-[240px] sm:h-[320px] items-center justify-center bg-gradient-to-br from-[#140721] via-[#542177] to-[#8E1EA2] ks-dark-grid-pattern p-8">
                <div className="flex flex-col items-center gap-4 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-[14px] border border-[#D552A3] bg-[#140721] text-[#98E8DE]">
                    <BeruIcon className="h-8 w-8" />
                  </span>
                  <span className="rounded-full bg-[#98E8DE] px-4 py-1 font-mono text-xs font-bold text-[#140721]">
                    {featured.badge}
                  </span>
                </div>

                {/* Notched Category Tag */}
                <div className="absolute bottom-0 left-0 rounded-tr-[12px] bg-[var(--ks-surface)] px-5 pb-1.5 pt-2.5 font-mono text-xs font-bold uppercase tracking-wider text-[#8E1EA2] dark:text-[#98E8DE]">
                  {featured.category}
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-3">
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--ks-text-muted)]">
                  {featured.date}
                </p>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--ks-text)] group-hover:text-[#8E1EA2] dark:group-hover:text-[#98E8DE] transition-colors">
                  {featured.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-[var(--ks-text-secondary)]">
                  {featured.summary}
                </p>
              </div>
            </Link>
          </div>

          {/* Secondary Notes */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {secondary.map((item, idx) => (
              <Link
                key={item.title}
                href={item.slug}
                className="ks-card group flex-1 overflow-hidden rounded-[14px] border border-[var(--ks-border)] bg-[var(--ks-surface)]"
              >
                <div className="relative flex h-[150px] items-center justify-between bg-[var(--ks-mist)] px-7">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-[10px] border border-[#542177] ${
                        idx === 0 ? 'bg-[#140721] text-[#D552A3]' : 'bg-[#542177] text-[#98E8DE]'
                      }`}
                    >
                      {idx === 0 ? <TuipdfIcon className="h-6 w-6" /> : <IndexIcon className="h-6 w-6" />}
                    </span>
                    <span
                      className={`rounded px-2.5 py-1 font-mono text-xs font-bold ${
                        idx === 0
                          ? 'bg-[#D552A3] text-[#140721]'
                          : 'bg-[#98E8DE] text-[#140721]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Notched Category Tag */}
                  <div className="absolute bottom-0 left-0 rounded-tr-[10px] bg-[var(--ks-surface)] px-4 pb-1 pt-2 font-mono text-[11px] font-bold uppercase tracking-wider text-[#8E1EA2] dark:text-[#98E8DE]">
                    {item.category}
                  </div>
                </div>

                <div className="p-6 space-y-2.5">
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--ks-text-muted)]">
                    {item.date}
                  </p>
                  <h3 className="font-heading text-lg font-bold text-[var(--ks-text)] group-hover:text-[#8E1EA2] dark:group-hover:text-[#98E8DE] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--ks-text-secondary)]">
                    {item.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
