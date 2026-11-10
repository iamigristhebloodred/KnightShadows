'use client';

const testimonials = [
    { id: 1, name: 'Alex Rivera', role: 'Contributor 2024', text: 'Being part of Knight Shadows gave me the opportunity to work on production-level security tools that are actually making an impact.', avatar: '👨‍💻' },
    { id: 2, name: 'Sarah Chen', role: 'Mentor', text: 'The organization provides a structured environment for elite contributors to scale their impact across multiple open source projects.', avatar: '👩‍🔬' },
    { id: 3, name: 'Marcus Thorne', role: 'Project Lead', text: 'As an organization, the quality of contributors we received through this program exceeded all our expectations.', avatar: '🤴' },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white dot-grid">
            <div className="container mx-auto px-6">
                <div className="flex flex-col gap-6 mb-20 text-center items-center">
                    <h2 className="text-4xl md:text-5xl font-mono font-bold text-black uppercase tracking-tight">Testimonials</h2>
                    <div className="w-20 h-2 bg-accent-cyan"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {testimonials.map((t) => (
                        <div key={t.id} className="p-10 rounded-[32px] bg-white border border-black/10 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-8">
                            <div className="text-4xl text-black/20">"</div>
                            <p className="text-lg text-black/60 font-medium leading-relaxed italic">
                                {t.text}
                            </p>
                            <div className="flex items-center gap-4 mt-auto pt-8 border-t border-black/5">
                                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center text-xl">
                                    {t.avatar}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-mono font-bold text-black">{t.name}</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
