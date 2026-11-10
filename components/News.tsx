'use client';

const news = [
    { id: 1, date: 'May 12, 2026', title: 'Shadow Browser v2.0 Released', summary: 'Major performance improvements and new decentralized extension support.' },
    { id: 2, date: 'April 28, 2026', title: 'Knight Shadows Joins Open Source Security Coalition', summary: 'Collaborating with industry leaders to set new standards for security.' },
    { id: 3, date: 'April 05, 2026', title: 'Annual Contribution Report 2025', summary: 'Celebrating 5,000+ merges and 1,200 new contributors across the ecosystem.' },
];

export default function News() {
    return (
        <section id="news" className="py-24 bg-white border-t border-black/5">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-4xl md:text-5xl font-mono font-bold text-black uppercase tracking-tight">Organization News</h2>
                        <div className="w-20 h-2 bg-accent-green"></div>
                    </div>
                    <a href="#" className="hidden md:block text-sm font-bold uppercase tracking-widest text-black/40 hover:text-black">View All News <i className="fas fa-arrow-right ml-2 text-xs"></i></a>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {news.map((item) => (
                        <div key={item.id} className="flex flex-col gap-6 group cursor-pointer">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">{item.date}</span>
                            <h3 className="text-xl font-mono font-bold text-black group-hover:text-accent-green transition-colors leading-tight">{item.title}</h3>
                            <p className="text-base text-black/60 font-medium line-clamp-2">{item.summary}</p>
                            <div className="mt-2 w-10 h-1 bg-black/5 group-hover:w-full group-hover:bg-accent-green transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
