'use client';

export default function CTA() {
    return (
        <section id="apply" className="py-24 bg-white border-t border-black/5">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Guide (GSoC Style) */}
                    <div className="flex flex-col gap-10">
                        <h2 className="text-4xl md:text-5xl font-mono font-bold text-black uppercase tracking-tight">How to participate</h2>
                        <div className="w-20 h-2 bg-accent-green"></div>

                        <div className="flex flex-col gap-8 mt-4">
                            {[
                                { step: '01', text: 'Read the Contributor Guide to understand our expectations.' },
                                { step: '02', text: 'Browse list of organizations and find a project that interests you.' },
                                { step: '03', text: 'Join our Discord server and introduce yourself to potential mentors.' },
                                { step: '04', text: 'Submit your formal application through the dashboard.' }
                            ].map((item) => (
                                <div key={item.step} className="flex gap-6 items-start">
                                    <span className="text-xl font-mono font-bold text-accent-green">{item.step}</span>
                                    <p className="text-lg text-black/60 font-medium leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action Cards */}
                    <div className="flex flex-col gap-8">
                        <div className="p-10 rounded-[40px] border border-black/10 bg-[#F8F9FA] shadow-sm flex flex-col gap-6">
                            <h3 className="text-2xl font-mono font-bold text-black">Contributor?</h3>
                            <p className="text-black/60 font-medium">Ready to contribute to elite projects and build your career in open source?</p>
                            <a href="#" className="px-8 py-4 bg-black text-white font-bold uppercase text-xs tracking-widest rounded-full text-center hover:bg-black/80 transition-all">
                                Apply as Contributor
                            </a>
                        </div>

                        <div className="p-10 rounded-[40px] border border-black/10 bg-white shadow-sm flex flex-col gap-6">
                            <h3 className="text-2xl font-mono font-bold text-black">Organization?</h3>
                            <p className="text-black/60 font-medium">Bring your open source project to Knight Shadows and find elite contributors.</p>
                            <a href="#" className="px-8 py-4 bg-white border border-black/10 text-black font-bold uppercase text-xs tracking-widest rounded-full text-center hover:bg-black/5 transition-all">
                                Apply as Organization
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
