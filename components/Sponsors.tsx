'use client';

export default function Sponsors() {
    return (
        <section id="sponsors" className="py-24 bg-[#F8F9FA]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center gap-6 mb-20">
                    <h2 className="text-4xl md:text-5xl font-mono font-bold text-black uppercase tracking-tight">Our Partners</h2>
                    <div className="w-20 h-2 bg-accent-green"></div>
                    <p className="max-w-2xl text-lg text-black/40 font-medium">Knight Shadows is supported by organizations that believe in the power of open source.</p>
                </div>

                {/* Sponsor Grid */}
                <div className="bg-white border border-black/5 rounded-[40px] p-12 md:p-20 shadow-sm">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 items-center justify-items-center opacity-40 grayscale group hover:grayscale-0 transition-all">
                        <div className="text-3xl font-bold font-mono text-black">GOOGLE</div>
                        <div className="text-3xl font-bold font-mono text-black">GITHUB</div>
                        <div className="text-3xl font-bold font-mono text-black">VERCEL</div>
                        <div className="text-3xl font-bold font-mono text-black">MICROSOFT</div>
                        <div className="text-3xl font-bold font-mono text-black">META</div>
                        <div className="text-3xl font-bold font-mono text-black">AMAZON</div>
                        <div className="text-3xl font-bold font-mono text-black">REDHAT</div>
                        <div className="text-3xl font-bold font-mono text-black">INTEL</div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-20 flex justify-center">
                    <a href="#" className="flex items-center gap-4 px-10 py-5 bg-white border border-black/10 rounded-full text-sm font-bold uppercase tracking-widest text-black hover:bg-black/5 transition-all">
                        <span>Become a Partner</span>
                        <i className="fas fa-external-link-alt text-xs opacity-40"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}
