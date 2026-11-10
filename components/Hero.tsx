'use client';

export default function Hero() {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-white dot-grid py-20 px-6">
            <div className="container mx-auto relative z-10">
                <div className="flex flex-col items-center text-center gap-12">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-green/10 border border-accent-green/20 rounded-full">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-green">Knight Shadows Program 2026</span>
                    </div>

                    {/* Headline (GSoC Bold Style) */}
                    <div className="flex flex-col gap-8">
                        <h1 className="text-5xl md:text-8xl font-mono font-bold tracking-tight text-[#202124] max-w-5xl leading-[1.1]">
                            Elite Open Source <br />
                            <span className="text-black underline decoration-accent-green decoration-8 underline-offset-8">Contribution</span>
                        </h1>
                        <p className="max-w-2xl text-xl md:text-2xl text-black/60 leading-relaxed mx-auto font-medium">
                            A new era of elite contribution. Join the global organization dedicated to building secure and equitable software for everyone.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
                        <a href="#apply" className="px-10 py-4 bg-black text-white font-bold uppercase text-xs tracking-[0.2em] rounded-full hover:bg-black/80 transition-all shadow-lg">
                            Apply Now
                        </a>
                        <a href="#about" className="px-10 py-4 bg-white border border-black/10 text-black font-bold uppercase text-xs tracking-[0.2em] rounded-full hover:bg-black/5 transition-all">
                            How it works
                        </a>
                    </div>

                    {/* Program Stats Bar (GSoC style layout) */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20 w-full max-w-6xl">
                        {[
                            { label: 'Contributors', val: '500+' },
                            { label: 'Projects', val: '30+' },
                            { label: 'Countries', val: '15+' },
                            { label: 'PRs Raised', val: '1,000+' }
                        ].map((stat) => (
                            <div key={stat.label} className="bg-white border border-black/5 p-8 rounded-[32px] flex flex-col items-center gap-2 shadow-sm">
                                <span className="text-4xl font-mono font-bold text-black">{stat.val}</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
