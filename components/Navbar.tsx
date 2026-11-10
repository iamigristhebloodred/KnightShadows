'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* GSoC style Vertical Brand Sidebar */}
            <div className="vertical-brand">
                Knight Shadows Organization
            </div>

            {/* GSoC style Top Navbar */}
            <nav className="fixed top-0 left-0 right-0 h-[60px] bg-white border-b border-black/10 z-50 flex items-center justify-between px-6 pl-[80px]">
                <div className="flex items-center gap-6">
                    <button className="text-black/60 hover:text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <Link href="/" className="text-lg font-bold tracking-tight text-black flex items-center gap-2">
                        <div className="relative w-8 h-8">
                            <Image src="/images/KnightShadows logo.jpg" alt="Logo" fill className="object-contain" />
                        </div>
                        Knight Shadows
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="#apply" className="px-6 py-2 border border-black/10 rounded-full text-sm font-bold text-black hover:bg-black/5 transition-all uppercase tracking-wider">
                        Apply Now
                    </Link>
                    <button className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-black/60">
                        <i className="fas fa-user-circle text-xl"></i>
                    </button>
                </div>
            </nav>

            {/* Mobile/Side Menu (GSoC Style Overlay) */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[70] transition-opacity" onClick={() => setIsMenuOpen(false)}>
                    <div className="absolute top-0 left-0 bottom-0 w-[300px] bg-white shadow-2xl p-8 flex flex-col gap-6" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center justify-between mb-8">
                            <span className="text-xl font-bold uppercase tracking-widest text-black">Menu</span>
                            <button onClick={() => setIsMenuOpen(false)}><i className="fas fa-times"></i></button>
                        </div>
                        {[
                            { name: 'Home', href: '#' },
                            { name: 'About', href: '#about' },
                            { name: 'Projects', href: '#projects' },
                            { name: 'How It Works', href: '#how-it-works' },
                            { name: 'Timeline', href: '#timeline' },
                            { name: 'Governance', href: '#governance' },
                            { name: 'Sponsors', href: '#sponsors' },
                            { name: 'Team', href: '#team' },
                            { name: 'Contact', href: '#contact' },
                        ].map((link) => (
                            <Link key={link.name} href={link.href} className="text-lg font-bold text-black/60 hover:text-black uppercase tracking-wider" onClick={() => setIsMenuOpen(false)}>
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
