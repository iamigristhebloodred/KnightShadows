'use client';

const stats = [
    { id: 1, label: 'Pull Requests', value: '1,000+', icon: '🚀' },
    { id: 2, label: 'Contributors', value: '500+', icon: '🤝' },
    { id: 3, label: 'Project Admins', value: '20+', icon: '👑' },
    { id: 4, label: 'Mentors', value: '45+', icon: '🎓' },
    { id: 5, label: 'Campus Ambassadors', value: '150+', icon: '🌎' },
    { id: 6, label: 'Active Participants', value: '2,500+', icon: '🔥' },
];

export default function Stats() {
    return (
        <section className="py-24 bg-[#F8F9FA]">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="group p-10 rounded-[32px] bg-white border border-black/5 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center gap-6"
                        >
                            <div className="w-20 h-20 rounded-[24px] bg-black/5 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                                {stat.icon}
                            </div>

                            <div className="flex flex-col items-center gap-1">
                                <span className="text-5xl font-mono font-bold text-black">
                                    {stat.value}
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                                    {stat.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
