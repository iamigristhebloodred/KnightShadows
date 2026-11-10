'use client';

import { useState } from 'react';
import { CheckIcon, CopyIcon } from './Icons';

export default function CopyCode({
  command,
  prompt = '$',
  className = '',
}: {
  command: string;
  prompt?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback ignored if clipboard is restricted
    }
  };

  return (
    <div
      className={`flex w-full min-w-0 items-center justify-between gap-3 rounded-[8px] border border-[#542177] bg-[#140721] px-3.5 py-2.5 sm:px-4 sm:py-3 text-left font-mono text-xs sm:text-sm text-[#FBF9FE] shadow-sm ${className}`}
    >
      <div className="relative flex min-w-0 flex-1 items-center gap-2.5 overflow-x-auto ks-no-scrollbar pr-2">
        <span className="select-none shrink-0 font-bold text-[#98E8DE]">{prompt}</span>
        <code className="whitespace-nowrap text-[#FBF9FE]">{command}</code>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? 'Copied command' : 'Copy command'}
        className="flex shrink-0 items-center gap-1.5 rounded-[5px] border border-[#8E1EA2] bg-[#281042] px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#FBF9FE] transition-colors hover:border-[#98E8DE] hover:bg-[#98E8DE] hover:text-[#140721]"
      >
        {copied ? (
          <>
            <CheckIcon className="h-3.5 w-3.5" />
            <span>Copied</span>
          </>
        ) : (
          <>
            <CopyIcon className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Copy</span>
          </>
        )}
      </button>
    </div>
  );
}
