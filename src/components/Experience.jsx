import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Code2 } from 'lucide-react';

const Card = ({ children, className = "" }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className={`bg-slate-900/50 border border-slate-800 backdrop-blur-xl p-6 rounded-3xl ${className}`}
    >
        {children}
    </motion.div>
)

export default function Experience() {
    return (
        <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <Card className="md:col-span-2 flex flex-col justify-between border-blue-500/30 bg-gradient-to-br from-slate-900/50 to-blue-900/10">
                    <div>
                        <Award className="text-blue-400 mb-4" size={32} />
                        <h3 className="text-2xl font-bold mb-2">SPOT Award Recognition</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Recognized for exceptional contributions as a Front-End Engineer.
                            Delivered high-impact solutions for core gaming platforms, focusing on
                            performance optimization and seamless user interfaces.
                        </p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-sm text-blue-400 font-mono">
                        <span>ISSUED BY ARISTOCRAT</span>
                        <span className="h-px w-12 bg-blue-500/30"></span>
                        <span>2025</span>
                    </div>
                </Card>

                <Card>
                    <GraduationCap className="text-purple-400 mb-4" size={28} />
                    <h3 className="text-xl font-bold mb-2">Education</h3>
                    <p className="text-slate-400 text-sm">
                        Bachelor of Technology<br />
                        Computer Science & Engineering
                    </p>
                </Card>

                <Card>
                    <Code2 className="text-emerald-400 mb-4" size={28} />
                    <h3 className="text-xl font-bold mb-2">Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {['React', 'Three.js', 'TypeScript', 'Tailwind'].map(tech => (
                            <span key={tech} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300">
                                {tech}
                            </span>
                        ))}
                    </div>
                </Card>

                <Card className="md:col-span-2">
                    <Briefcase className="text-orange-400 mb-4" size={28} />
                    <h3 className="text-xl font-bold mb-2">Experience</h3>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between items-center text-sm mb-1">
                                <span className="text-white font-medium">Front-End Engineer</span>
                                <span className="text-slate-500 italic">Aristocrat • Present</span>
                            </div>
                            <p className="text-slate-400 text-sm">Building next-gen digital gaming experiences and robust platform architectures.</p>
                        </div>
                    </div>
                </Card>

            </div>
        </section>
    )
}