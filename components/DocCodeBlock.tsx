'use client';

import { useState } from 'react';
import { CheckIcon, CopyIcon } from './Icons';

export default function DocCodeBlock({
  code,
  lang = 'text',
}: {
  code: string;
  lang?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Ignore clipboard failures
    }
  };

  return (
    <div className="my-5 overflow-hidden rounded-[10px] border border-[#542177] bg-[#140721] text-[#FBF9FE] shadow-sm">
      <div className="flex items-center justify-between border-b border-[#542177]/70 bg-[#1E0C31] px-4 py-2">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#98E8DE]">
          {lang || 'text'}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? 'Copied code' : 'Copy code'}
          className="inline-flex items-center gap-1.5 rounded-[5px] border border-[#8E1EA2] bg-[#281042] px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#FBF9FE] transition-colors hover:border-[#98E8DE] hover:bg-[#98E8DE] hover:text-[#140721]"
        >
          {copied ? (
            <>
              <CheckIcon className="h-3 w-3" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <CopyIcon className="h-3 w-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto ks-no-scrollbar p-4 font-mono text-xs sm:text-[13px] leading-relaxed text-[#FBF9FE]">
        <code>{code}</code>
      </pre>
    </div>
  );
}

