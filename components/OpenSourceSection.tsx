import Link from 'next/link';
import { ArrowRightIcon, ExternalLinkIcon, GitHubIcon } from './Icons';
import { CONTRIBUTORS, ORG_INFO } from '@/lib/data';

export default function OpenSourceSection() {
  return (
    <section className="relative overflow-hidden bg-[#140721] py-24 lg:py-36 text-[#FBF9FE]">
      <div className="pointer-events-none absolute inset-0 ks-dark-grid-pattern opacity-65" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#542177]/35 blur-3xl" />

      <div className="ks-container relative z-10">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="hidden lg:col-span-3 lg:flex flex-col gap-6">
            <div className="rounded-[10px] border border-[#542177] bg-[#1E0C31] p-4 font-mono text-xs">
              <div className="text-[#98E8DE] font-bold">LICENSING</div>
              <div className="mt-1 text-[#FBF9FE]">MIT · Apache-2.0 · MPL-2.0</div>
              <div className="mt-1 text-[#DFD3EE]">Open source by design</div>
            </div>
            <div className="rounded-[10px] border border-[#542177] bg-[#1E0C31] p-4 font-mono text-xs">
              <div className="text-[#D552A3] font-bold">CORE STACK</div>
              <div className="mt-1 text-[#FBF9FE]">Rust 1.85+ · C++20 · TOML</div>
              <div className="mt-1 text-[#DFD3EE]">Single standalone binaries</div>
            </div>
          </div>

          <div className="lg:col-span-6 mx-auto max-w-2xl text-center space-y-7 py-6">
            <h2 className="font-mono text-3xl font-bold leading-none text-white sm:text-5xl lg:text-[56px]">
              built in the open<span className="inline-block animate-pulse text-[#98E8DE]">|</span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-[#E4D8F2]">
              Open-source, local-first, and permissively licensed. Engineered in {ORG_INFO.location} to give developers deterministic C++ builds and offline-first Rust terminal utilities.
            </p>

            {/* Mobile metric chips */}
            <div className="flex flex-wrap justify-center gap-2 lg:hidden">
              <span className="rounded border border-[#542177] bg-[#1E0C31] px-3 py-1 font-mono text-xs text-[#98E8DE]">
                MIT / Apache-2.0 / MPL-2.0
              </span>
              <span className="rounded border border-[#542177] bg-[#1E0C31] px-3 py-1 font-mono text-xs text-[#D552A3]">
                Rust 1.85+ · Zero Telemetry
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={ORG_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-[6px] border border-[#8E1EA2] bg-[#542177] px-5 py-2.5 font-mono text-xs font-semibold text-white transition-colors hover:border-[#98E8DE] hover:bg-[#98E8DE] hover:text-[#140721]"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>github.com/KnightShadows</span>
                <ExternalLinkIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="hidden lg:col-span-3 lg:flex flex-col gap-6">
            <div className="rounded-[10px] border border-[#542177] bg-[#1E0C31] p-4 font-mono text-xs">
              <div className="text-[#98E8DE] font-bold">PRIVACY POSTURE</div>
              <div className="mt-1 text-[#FBF9FE]">100% Local Execution</div>
              <div className="mt-1 text-[#DFD3EE]">Zero uploads · Air-gap ready</div>
            </div>
            <div className="rounded-[10px] border border-[#542177] bg-[#1E0C31] p-4 font-mono text-xs">
              <div className="text-[#D552A3] font-bold">REGISTRY SCALE</div>
              <div className="mt-1 text-[#FBF9FE]">223+ C/C++ Recipes</div>
              <div className="mt-1 text-[#DFD3EE]">Maintained in beru_index</div>
            </div>
          </div>
        </div>

        {/* Organization Contributors Row */}
        <div className="mt-14 border-t border-[#542177] pt-10">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="ks-subtitle text-[#98E8DE]">Core Contributors</span>
            <Link
              href="/about#contributors"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#D552A3] hover:text-[#98E8DE] transition-colors"
            >
              <span>Organization &amp; Team</span>
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-5">
            {CONTRIBUTORS.map((person, idx) => (
              <div
                key={person.name}
                className="flex flex-col justify-between gap-3 rounded-[10px] border border-[#542177] bg-[#1E0C31]/90 p-4 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#98E8DE] hover:shadow-[0_12px_28px_-12px_rgba(152,232,222,0.2)]"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-bold ${
                      idx % 2 === 0
                        ? 'border-[#8E1EA2] bg-[#542177] text-[#98E8DE]'
                        : 'border-[#542177] bg-[#281042] text-[#D552A3]'
                    }`}
                  >
                    {person.initials}
                  </span>
                  <div className="min-w-0">
                    <div className="truncate font-heading text-sm font-bold text-white">
                      {person.name}
                    </div>
                    <div className="truncate font-mono text-[11px] font-medium text-[#98E8DE]">
                      {person.title}
                    </div>
                  </div>
                </div>
                <p className="border-t border-[#542177]/60 pt-2.5 text-[11px] leading-relaxed text-[#DFD3EE]">
                  {person.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
