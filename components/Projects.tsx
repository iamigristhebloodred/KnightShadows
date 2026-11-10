'use client';

const projects = [
    { id: 1, title: 'Shadow Browser', description: 'A privacy-first, decentralized browsing experience with built-in VPN and ad-blocking.', category: 'Web Privacy' },
    { id: 2, title: 'Igris Engine', description: 'A high-performance, secure backend framework designed for distributed systems.', category: 'Core Dev' },
    { id: 3, title: 'Knight Vault', description: 'An end-to-end encrypted password and secret management system for elite teams.', category: 'Security' },
    { id: 4, title: 'Shadow Mesh', description: 'Peers-based mesh networking protocol for secure local communication.', category: 'Networking' },
    { id: 5, title: 'Cyber Sentinel', description: 'Automated vulnerability scanner and security auditing tool for open source repos.', category: 'DevSecOps' },
    { id: 6, title: 'Ethos Ledger', description: 'Transparent and immutable contributor reputation system on the blockchain.', category: 'Community' },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-[#F8F9FA]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col gap-6 mb-20 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-mono font-bold text-black uppercase tracking-tight">Our Projects</h2>
                    <div className="w-20 h-2 bg-accent-green"></div>
                    <p className="text-lg text-black/40 font-medium">Explore the ecosystem of tools built and maintained by the Knight Shadows community.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group p-10 bg-white border border-black/10 rounded-[32px] flex flex-col gap-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="flex justify-between items-start">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-accent-green bg-accent-green/5 px-3 py-1 rounded-full">{project.category}</span>
                                <i className="fas fa-external-link-alt text-black/20 group-hover:text-black transition-colors"></i>
                            </div>
                            <h3 className="text-2xl font-mono font-bold text-black">{project.title}</h3>
                            <p className="text-base text-black/60 font-medium leading-relaxed">
                                {project.description}
                            </p>
                            <div className="mt-auto pt-8 flex gap-4 text-black/40 text-sm font-bold uppercase tracking-widest">
                                <span className="hover:text-black cursor-pointer">Documention</span>
                                <span className="hover:text-black cursor-pointer">GitHub</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 flex justify-center">
                    <a href="#" className="px-10 py-5 bg-black text-white font-bold uppercase text-xs tracking-widest rounded-full hover:bg-black/80 transition-all shadow-lg">
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
}
