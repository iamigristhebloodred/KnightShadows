import Link from 'next/link';
import { ArrowRightIcon, GitHubIcon } from './Icons';
import { ORG_INFO } from '@/lib/data';

export default function PreFooterCTA() {
  return (
    <section className="bg-[var(--ks-bg)] pb-12">
      <div className="ks-container">
        <div className="relative overflow-hidden rounded-[14px] border border-[#542177] bg-gradient-to-br from-[#140721] via-[#542177] to-[#8E1EA2] text-white shadow-xl">
          <div className="pointer-events-none absolute inset-0 ks-dark-grid-pattern opacity-60" />
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[540px] -translate-x-1/2 rounded-full bg-[#D552A3]/30 blur-3xl" />

          <div className="relative z-10 px-6 py-16 sm:py-20 text-center">
            <span className="ks-subtitle text-[#98E8DE]">Open Source · Pure Rust</span>
            <h2 className="mx-auto mt-3 max-w-3xl font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Supercharge your systems workflow
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-[#FBF9FE]">
              Start building C++ cleanly with Beru, explore 223+ community recipes, or optimize PDFs offline with tuipdf.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/products/beru"
                className="ks-btn bg-[#98E8DE] text-[#140721] hover:bg-white"
              >
                <span>Get Started with Beru</span>
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <a
                href={ORG_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="ks-btn border-2 border-[#98E8DE] bg-[#140721]/60 text-white hover:bg-[#98E8DE] hover:text-[#140721]"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>Explore GitHub Org</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
