'use client';

import Link from 'next/link';

export default function Footer() {
    const footerLinks = [
        { title: 'Program', links: [{ name: 'How it works', href: '#' }, { name: 'Timeline', href: '#timeline' }, { name: 'FAQ', href: '#' }] },
        { title: 'Governance', links: [{ name: 'Foundation', href: '#governance' }, { name: 'Leadership', href: '#' }, { name: 'Bylaws', href: '#' }, { name: 'Code of Conduct', href: '#' }] },
        { title: 'Projects', links: [{ name: 'All Projects', href: '#projects' }, { name: 'Incubator', href: '#' }, { name: 'Security', href: '#' }, { name: 'Documentation', href: '#' }] },
        { title: 'Community', links: [{ name: 'Discord', href: 'https://discord.gg/7SVve8wkm' }, { name: 'GitHub', href: 'https://github.com/KnightShadows' }, { name: 'Sponsorship', href: '#sponsors' }] },
    ];

    return (
        <footer className="bg-white border-t border-black/10 py-24">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-4 gap-12 mb-20">
                    {/* Logo & Info */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="text-2xl font-mono font-bold text-black flex items-center gap-2">
                            <span className="w-10 h-10 bg-accent-green rounded-xl flex items-center justify-center text-black text-sm">KS</span>
                            Knight Shadows
                        </Link>
                        <p className="text-sm text-black/60 font-medium leading-relaxed">
                            Knight Shadows is a global organization dedicated to elite open source contribution and building secure digital infrastructure.
                        </p>
                    </div>

                    {/* Map Links */}
                    {footerLinks.map((column) => (
                        <div key={column.title} className="flex flex-col gap-8">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">{column.title}</span>
                            <div className="flex flex-col gap-4">
                                {column.links.map((link) => (
                                    <Link key={link.name} href={link.href} className="text-sm font-bold text-black/80 hover:text-accent-green transition-colors transition-all">
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-black/5 gap-8">
                    <div className="flex flex-wrap items-center gap-8">
                        <span className="text-xs font-bold text-black/40 uppercase tracking-widest">© 2026 Knight Shadows</span>
                        <Link href="#" className="text-xs font-bold text-black/40 hover:text-black uppercase tracking-widest">Privacy</Link>
                        <Link href="#" className="text-xs font-bold text-black/40 hover:text-black uppercase tracking-widest">Terms</Link>
                        <Link href="#" className="text-xs font-bold text-black/40 hover:text-black uppercase tracking-widest">Trademarks</Link>
                        <Link href="#" className="text-xs font-bold text-black/40 hover:text-black uppercase tracking-widest">Anti-Trust</Link>
                    </div>
                    <div className="flex items-center gap-6 text-black/40">
                        <i className="fab fa-github hover:text-black transition-colors cursor-pointer text-xl"></i>
                        <i className="fab fa-discord hover:text-black transition-colors cursor-pointer text-xl"></i>
                        <i className="fab fa-twitter hover:text-black transition-colors cursor-pointer text-xl"></i>
                    </div>
                </div>
            </div>
        </footer>
    );
}
