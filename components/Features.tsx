'use client';

const features = [
    { id: 1, title: 'Open Source', description: 'All our code is open source and community-driven. Transparency is our core value.', icon: '🌐' },
    { id: 2, title: 'Privacy First', description: 'We build tools that respect user privacy by default. No tracking, just secure software.', icon: '🔒' },
    { id: 3, title: 'Elite Talent', description: 'Join a network of elite contributors who are pushing the boundaries of digital freedom.', icon: '⚡' },
    { id: 4, title: 'Global Impact', description: 'Connect with developers from 150+ countries. Build tools that empower millions.', icon: '🌍' }
];

export default function Features() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col gap-6 mb-20">
                    <h2 className="text-4xl md:text-5xl font-mono font-bold text-black uppercase tracking-tight">Why Knight Shadows?</h2>
                    <div className="w-20 h-2 bg-accent-cyan"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div key={feature.id} className="p-10 bg-white border border-black/10 rounded-[32px] flex flex-col items-start gap-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 rounded-[20px] bg-black/5 flex items-center justify-center text-3xl">
                                {feature.icon}
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-mono font-bold text-black">{feature.title}</h3>
                                <p className="text-base text-black/60 font-medium leading-relaxed">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
