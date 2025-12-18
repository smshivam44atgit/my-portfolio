import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Project Alpha",
        description: "High-performance data visualization dashboard built for real-time analytics.",
        tags: ["React", "Three.js", "Node.js"],
        link: "#",
        github: "#"
    },
    {
        title: "Project Beta",
        description: "Full-stack e-commerce engine with microservices architecture and Stripe integration.",
        tags: ["Next.js", "TypeScript", "PostgreSQL"],
        link: "#",
        github: "#"
    }
]

export default function Projects() {
    return (
        <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
            <h2 className="text-3xl font-bold mb-12 text-slate-200 tracking-tight">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-slate-900/40 border border-slate-800 p-8 rounded-3xl hover:border-blue-500/50 transition-colors"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex gap-4">
                                <a href={project.github} className="text-slate-400 hover:text-white transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href={project.link} className="text-slate-400 hover:text-white transition-colors">
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>

                        <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
                        <p className="text-slate-400 mb-6 font-light leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-[10px] uppercase tracking-widest px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}