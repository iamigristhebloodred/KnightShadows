import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const spaceGrotesk = localFont({
  src: './fonts/SpaceGrotesk-Variable.woff2',
  variable: '--font-space-grotesk',
  weight: '500 700',
  display: 'swap',
});

const inter = localFont({
  src: './fonts/Inter-Variable.woff2',
  variable: '--font-inter',
  weight: '400 700',
  display: 'swap',
});

const jetbrainsMono = localFont({
  src: './fonts/JetBrainsMono-Variable.woff2',
  variable: '--font-jetbrains-mono',
  weight: '400 700',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'KNIGHTSHADOWS — High-Performance Rust Developer Tooling',
  description:
    'KnightShadows builds fast, deterministic, local-first developer tools in Rust: Beru (C++ package manager), beru_index (223+ C++ recipes), and tuipdf (offline TUI PDF optimizer).',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('ks-theme');
                  if (saved === 'dark') document.documentElement.classList.add('dark');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} min-h-screen font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
