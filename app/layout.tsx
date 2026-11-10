import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Knight Shadows | Elite Open Source Contribution",
  description: "A new era of open source, collaboration, and elite contribution. Join the Knight Shadows movement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body
        className={`${syne.variable} ${inter.variable} font-sans antialiased bg-[#0a0a0a] text-white selection:bg-cyan-500/30`}
      >
        {children}
      </body>
    </html>

  );
}

