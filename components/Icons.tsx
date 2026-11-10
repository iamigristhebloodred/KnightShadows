import React, { useId } from 'react';

const KNIGHT_HORSE_PATH =
  'M 52.4 46.1 C 52.5 44.4, 52.3 43.5, 52.0 42.2 C 51.6 40.9, 50.7 39.8, 50.4 39.6 C 50.2 39.3, 50.8 40.0, 50.9 41.1 C 50.9 42.2, 51.0 43.9, 50.7 45.2 C 50.3 46.6, 50.0 47.0, 49.3 47.8 C 48.7 48.7, 49.4 48.7, 47.6 49.3 C 45.8 50.0, 42.2 50.5, 40.2 51.3 C 38.2 52.1, 38.3 52.4, 37.6 53.3 C 36.9 54.1, 37.1 54.9, 36.7 55.4 C 36.3 56.0, 36.3 55.7, 35.7 55.9 C 35.0 56.0, 34.3 56.2, 33.7 56.1 C 33.0 56.0, 32.4 56.0, 32.4 55.4 C 32.3 54.9, 33.6 53.5, 33.5 53.5 C 33.4 53.4, 32.4 54.9, 32.0 55.2 C 31.5 55.6, 31.5 55.4, 31.1 55.2 C 30.7 55.0, 30.3 55.2, 29.8 54.1 C 29.3 53.1, 27.6 52.2, 28.5 50.0 C 29.4 47.8, 33.0 44.8, 34.3 43.0 C 35.7 41.3, 35.1 42.2, 35.2 41.3 C 35.3 40.4, 35.0 39.2, 35.0 38.5 C 35.0 37.8, 34.3 38.9, 35.4 37.8 C 36.6 36.7, 39.8 34.8, 40.9 33.0 C 41.9 31.3, 40.5 30.6, 40.7 29.1 C 40.8 27.7, 41.3 26.3, 41.7 25.9 C 42.2 25.4, 42.2 26.0, 42.8 27.0 C 43.4 27.9, 44.2 30.2, 44.8 30.7 C 45.4 31.1, 44.9 29.7, 45.9 29.1 C 46.8 28.5, 48.1 28.4, 49.6 27.6 C 51.0 26.8, 52.5 25.0, 53.0 25.2 C 53.6 25.4, 52.6 27.5, 52.2 28.5 C 51.7 29.5, 50.4 29.9, 50.9 30.2 C 51.3 30.5, 53.1 29.9, 54.6 30.0 C 56.0 30.1, 56.6 30.2, 58.0 30.7 C 59.5 31.1, 60.0 31.3, 61.7 32.2 C 63.4 33.1, 65.5 34.5, 66.5 35.2 C 67.5 35.9, 67.2 35.7, 66.7 35.7 C 66.3 35.6, 65.3 35.1, 64.3 35.0 C 63.4 34.9, 62.7 34.9, 62.2 35.0 C 61.7 35.1, 61.5 35.3, 61.7 35.4 C 62.0 35.6, 62.3 35.3, 63.3 35.9 C 64.2 36.4, 65.2 36.8, 66.5 38.0 C 67.9 39.3, 69.0 40.4, 70.0 42.0 C 71.0 43.5, 71.3 44.4, 71.7 45.7 C 72.2 46.9, 72.2 46.7, 72.4 48.3 C 72.6 49.9, 72.8 52.3, 72.8 53.7 C 72.8 55.1, 72.6 56.1, 72.4 55.4 C 72.2 54.7, 72.1 51.9, 71.7 50.2 C 71.3 48.6, 71.0 48.1, 70.4 47.2 C 69.9 46.3, 69.1 45.4, 69.1 45.7 C 69.2 45.9, 70.1 47.2, 70.7 48.5 C 71.2 49.7, 71.5 50.0, 71.7 52.0 C 72.0 54.0, 72.0 57.2, 72.0 58.5 C 71.9 59.7, 71.8 59.1, 71.5 58.3 C 71.2 57.4, 71.1 55.8, 70.4 54.3 C 69.8 52.9, 69.0 52.0, 68.3 51.1 C 67.6 50.2, 67.0 49.6, 67.0 50.0 C 66.9 50.4, 67.9 51.5, 68.0 53.0 C 68.2 54.6, 68.1 56.2, 67.8 57.8 C 67.6 59.4, 67.7 59.6, 66.7 61.1 C 65.8 62.6, 64.5 64.2, 63.3 65.4 C 62.0 66.7, 61.6 66.7, 60.4 67.4 C 59.3 68.0, 57.3 69.3, 57.4 68.7 C 57.5 68.1, 60.0 65.9, 60.9 64.6 C 61.8 63.3, 61.7 63.1, 62.0 62.2 C 62.2 61.3, 62.2 60.2, 62.2 60.0 C 62.1 59.8, 62.6 60.5, 61.7 61.3 C 60.9 62.1, 60.1 63.1, 58.0 64.1 C 56.0 65.1, 51.7 66.0, 51.5 66.3 C 51.3 66.6, 58.0 64.9, 57.0 65.7 C 55.9 66.4, 49.0 68.5, 46.3 70.0 C 43.6 71.5, 44.0 72.0, 43.3 73.0 C 42.5 74.0, 42.7 74.2, 42.6 75.0 C 42.5 75.8, 42.5 76.4, 42.6 77.2 C 42.8 79.4, 44.0 81.4, 45.6 82.6 C 42.2 81.2, 39.6 77.6, 38.5 73.0 C 38.1 71.7, 37.8 70.4, 37.8 68.7 C 37.9 67.0, 38.1 66.0, 38.7 64.3 C 39.3 62.7, 39.3 62.2, 40.7 60.7 C 42.0 59.1, 44.5 57.4, 45.4 56.5 C 46.4 55.6, 44.7 56.8, 45.4 56.1 C 46.2 55.3, 48.3 53.7, 49.1 52.8 C 50.0 51.9, 49.6 51.7, 49.8 51.5 C 50.0 51.4, 50.1 51.7, 50.0 52.2 C 49.9 52.6, 49.3 53.5, 49.3 53.7 C 49.3 53.9, 49.6 53.9, 50.0 53.3 C 50.4 52.7, 51.0 52.1, 51.5 50.7 C 52.0 49.2, 52.3 47.8, 52.4 46.1 Z M 41.1 40.9 C 41.3 40.7, 41.6 40.6, 41.7 40.4 C 41.9 40.3, 41.6 40.2, 41.7 40.0 C 41.9 39.8, 42.4 39.6, 42.6 39.3 C 42.8 39.1, 43.2 38.8, 42.8 38.7 C 42.4 38.6, 41.1 38.8, 40.7 38.9 C 40.2 39.0, 40.9 39.0, 40.7 39.1 C 40.4 39.2, 39.7 39.2, 39.3 39.3 C 39.0 39.5, 39.0 39.5, 38.7 40.0 C 38.4 40.5, 37.7 41.7, 38.0 42.0 C 38.4 42.2, 40.0 41.5, 40.7 41.3 C 41.3 41.1, 40.9 41.0, 41.1 40.9 Z M 35.7 52.2 C 35.9 52.0, 35.8 52.0, 35.7 52.0 C 35.5 51.9, 35.0 51.9, 34.8 52.0 C 34.6 52.0, 34.7 52.3, 34.6 52.4 C 34.4 52.5, 34.3 52.3, 34.1 52.4 C 33.9 52.5, 33.6 52.8, 33.5 53.0 C 33.3 53.3, 33.3 53.6, 33.5 53.5 C 33.7 53.4, 33.9 52.9, 34.3 52.6 C 34.8 52.3, 35.4 52.3, 35.7 52.2 Z';

export function KnightLogo({
  className = 'w-9 h-9',
  monochrome = false,
}: {
  className?: string;
  monochrome?: boolean;
}) {
  const uid = useId().replace(/:/g, '');
  const ringGradId = `ks-ring-${uid}`;
  const discGradId = `ks-disc-${uid}`;

  if (monochrome) {
    return (
      <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
        <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="2.5" strokeDasharray="160 28" />
        <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <path fillRule="evenodd" clipRule="evenodd" d={KNIGHT_HORSE_PATH} fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={ringGradId} x1="12" y1="12" x2="88" y2="88" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D552A3" />
          <stop offset="52%" stopColor="#8E1EA2" />
          <stop offset="100%" stopColor="#542177" />
        </linearGradient>
        <radialGradient id={discGradId} cx="42%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#8E1EA2" />
          <stop offset="60%" stopColor="#542177" />
          <stop offset="100%" stopColor="#281042" />
        </radialGradient>
      </defs>
      <path
        d="M 50 7 C 74 7, 93 26, 93 50 C 93 74, 74 93, 50 93 C 27 93, 8.5 75.5, 7.2 53 C 10 73, 27 88, 48.5 88 C 70 88, 86.5 71, 86.5 50 C 86.5 29, 70 13, 49.5 13 C 29 13, 13.5 28.5, 13.5 49 C 13.5 64, 22.5 77, 36 82.5 C 19.5 78, 7.5 64.5, 7.5 47.5 C 7.5 25, 26.5 7, 50 7 Z"
        fill={`url(#${ringGradId})`}
      />
      <path
        d="M 19 20.5 C 27.5 11.5, 40 7, 54 7.8 C 73 9, 88 22, 92 40.5 C 87 24.5, 72 12.5, 53.5 11.2 C 40.5 10.2, 28.5 13.5, 19 20.5 Z"
        fill="#98E8DE"
      />
      <path
        d="M 81.5 79 C 72.5 88.5, 59.5 93.2, 45 92 C 26.5 90.5, 11.5 76, 8.5 57.5 C 12.5 74, 27 86.5, 45 88.2 C 59.5 89.5, 72.5 85.5, 81.5 79 Z"
        fill="#D552A3"
      />
      <circle cx="50" cy="50" r="35" fill={`url(#${discGradId})`} />
      <path fillRule="evenodd" clipRule="evenodd" d={KNIGHT_HORSE_PATH} fill="#98E8DE" />
    </svg>
  );
}

export function BeruIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2L20.5 7V17L12 22L3.5 17V7L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 22V12M12 12L20.5 7M12 12L3.5 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function TuipdfIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" stroke="currentColor" strokeWidth="2" />
      <path d="M7.5 9H16.5M7.5 13H13.5M7.5 17H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 14.5L16 18M16 18L14 16M16 18L18 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IndexIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 6.5L12 3L20 6.5L12 10L4 6.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M4 12L12 15.5L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 17.5L12 21L20 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GitHubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function DiscordIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export function LinkedInIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function ArrowRightIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ExternalLinkIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5h5v5M19 5l-9 9M19 14v4a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1h4" />
    </svg>
  );
}

export function ChevronDownIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function CopyIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  );
}

export function CheckIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function SunIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
    </svg>
  );
}

export function MoonIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

export function MenuIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className={className} aria-hidden="true">
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className={className} aria-hidden="true">
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

