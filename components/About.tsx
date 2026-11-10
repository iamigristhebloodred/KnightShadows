'use client';

import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="flex flex-col gap-6 mb-20 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-mono font-bold text-black uppercase tracking-tight">The Organization</h2>
                    <div className="w-20 h-2 bg-accent-green"></div>
                </div>

                {/* Alternating Content Blocks (GSoC Style) */}
                <div className="flex flex-col gap-32">
                    {/* Block 1 */}
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative aspect-video rounded-[32px] overflow-hidden bg-black/5 flex items-center justify-center p-12">
                            <Image src="/images/KnightShadows logo.jpg" alt="Knight Shadows Logo" width={300} height={300} className="object-contain grayscale opacity-50 transition-all hover:grayscale-0 hover:opacity-100" />
                        </div>
                        <div className="flex flex-col gap-8">
                            <h3 className="text-3xl font-mono font-bold text-black underline decoration-accent-green decoration-4 underline-offset-4">Our Mission</h3>
                            <p className="text-lg text-black/60 leading-relaxed font-medium">
                                KnightShadows began in 2024 as a small collective of developers concerned about the increasing centralization and surveillance on the internet. What started as a privacy-focused browser has grown into a global movement.
                            </p>
                            <p className="text-lg text-black/60 leading-relaxed font-medium">
                                Our journey has been guided by one simple principle: technology should serve people, not corporations. We build free and open-source software that protects privacy and builds a more equitable internet.
                            </p>
                        </div>
                    </div>

                    {/* Block 2 (Founder Card) */}
                    <div className="grid lg:grid-cols-2 gap-20 items-center lg:flex-row-reverse">
                        <div className="lg:order-2 flex flex-col gap-8">
                            <h3 className="text-3xl font-mono font-bold text-black underline decoration-accent-cyan decoration-4 underline-offset-4">Leadership</h3>
                            <p className="text-lg text-black/60 leading-relaxed font-medium">
                                Led by volunteers and supported by a global community of contributors, KnightShadows provides the infrastructure and mentorship needed for elite developers to scale their impact.
                            </p>
                            <a href="#team" className="text-sm font-bold uppercase tracking-[0.2em] text-black hover:text-accent-green transition-colors inline-flex items-center gap-2">
                                Meet the Team <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                        <div className="lg:order-1 p-10 bg-white border border-black/10 rounded-[32px] flex items-center gap-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-24 h-24 rounded-full bg-black/5 flex items-center justify-center text-4xl">🤴</div>
                            <div className="flex flex-col gap-1">
                                <span className="text-2xl font-mono font-bold text-black">Igris</span>
                                <span className="text-sm font-bold uppercase tracking-widest text-black/40">Founder & Project Lead</span>
                                <div className="flex gap-4 mt-4 text-black/40">
                                    <i className="fab fa-github hover:text-black transition-colors"></i>
                                    <i className="fab fa-linkedin hover:text-black transition-colors"></i>
                                    <i className="fab fa-twitter hover:text-black transition-colors"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
