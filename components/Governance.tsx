'use client';

export default function Governance() {
    return (
        <section id="governance" className="py-24 bg-white border-t border-black/5">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-4xl md:text-5xl font-mono font-bold text-black uppercase tracking-tight">Governance</h2>
                            <div className="w-20 h-2 bg-accent-crimson"></div>
                            <p className="text-xl text-black/60 leading-relaxed font-medium mt-4">
                                We believe in "Community over Code." Our governance model ensures that Knight Shadows remains a neutral territory for innovation, governed by its contributors.
                            </p>
                        </div>

                        <div className="flex flex-col gap-8">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center text-xl">⚖️</div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-mono font-bold text-black">Meritocratic Model</h3>
                                    <p className="text-black/60 font-medium">Earn influence through contributions. Our technical steering committees are led by those who build the most.</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center text-xl">🛡️</div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-mono font-bold text-black">Foundation Bylaws</h3>
                                    <p className="text-black/60 font-medium">A clear set of rules that protect the organization's neutrality and longevity.</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center text-xl">🤝</div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-mono font-bold text-black">Vendor Neutrality</h3>
                                    <p className="text-black/60 font-medium">Knight Shadows is not tied to any single corporation. We are a home for everyone.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#F8F9FA] rounded-[40px] p-12 md:p-16 border border-black/5">
                        <div className="flex flex-col gap-8">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">Leadership Structure</span>
                            <div className="flex flex-col gap-4">
                                <div className="p-6 bg-white rounded-2xl border border-black/5 flex justify-between items-center group hover:border-accent-green transition-colors">
                                    <span className="font-mono font-bold text-black">Board of Directors</span>
                                    <i className="fas fa-chevron-right text-black/20 group-hover:text-black"></i>
                                </div>
                                <div className="p-6 bg-white rounded-2xl border border-black/5 flex justify-between items-center group hover:border-accent-green transition-colors">
                                    <span className="font-mono font-bold text-black">Technical Steering Committee</span>
                                    <i className="fas fa-chevron-right text-black/20 group-hover:text-black"></i>
                                </div>
                                <div className="p-6 bg-white rounded-2xl border border-black/5 flex justify-between items-center group hover:border-accent-green transition-colors">
                                    <span className="font-mono font-bold text-black">Ambassador Program</span>
                                    <i className="fas fa-chevron-right text-black/20 group-hover:text-black"></i>
                                </div>
                                <div className="p-6 bg-white rounded-2xl border border-black/5 flex justify-between items-center group hover:border-accent-green transition-colors">
                                    <span className="font-mono font-bold text-black">Legal & IP Committee</span>
                                    <i className="fas fa-chevron-right text-black/20 group-hover:text-black"></i>
                                </div>
                            </div>
                            <p className="text-xs text-black/40 font-bold uppercase tracking-widest mt-4">
                                <i className="fas fa-file-alt mr-2"></i> Download Foundation Charter (PDF)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
