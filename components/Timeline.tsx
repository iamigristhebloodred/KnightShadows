'use client';

const steps = [
    { id: 1, date: 'Oct 1', title: 'Applications Open', description: 'Students and contributors submit their applications to participate in the 2026 cycle.' },
    { id: 2, date: 'Oct 25', title: 'Community Bonding', description: 'Accepted contributors get to know their mentors and projects.' },
    { id: 3, date: 'Nov 1', title: 'Coding Begins', description: 'The official start of the elite contribution period.' },
    { id: 4, date: 'Dec 20', title: 'Final Evaluations', description: 'Project admins review and celebrate the contributions made.' },
];

export default function Timeline() {
    return (
        <section id="timeline" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col gap-6 mb-20 text-center items-center">
                    <h2 className="text-4xl md:text-5xl font-mono font-bold text-black uppercase tracking-tight">Program Cycle</h2>
                    <div className="w-20 h-2 bg-accent-crimson"></div>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 md:-translate-x-1/2 w-1 bg-black/5"></div>

                    <div className="flex flex-col gap-12">
                        {steps.map((step, index) => (
                            <div key={step.id} className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 md:gap-0`}>

                                {/* Node */}
                                <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-accent-green z-10 hidden md:flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-accent-green"></div>
                                </div>

                                {/* Content */}
                                <div className="w-full md:w-[45%] pl-12 md:pl-0">
                                    <div className="p-8 bg-white border border-black/10 rounded-[24px] shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
                                        <span className="text-sm font-mono font-bold text-accent-green uppercase tracking-widest">{step.date}</span>
                                        <h3 className="text-xl font-mono font-bold text-black">{step.title}</h3>
                                        <p className="text-base text-black/60 font-medium">{step.description}</p>
                                    </div>
                                </div>

                                {/* Spacer */}
                                <div className="w-full md:w-[45%]"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
