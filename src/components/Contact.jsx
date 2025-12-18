import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Card = ({ children, className = "" }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className={`bg-slate-900/50 border border-slate-800 backdrop-blur-xl p-6 rounded-3xl ${className}`}
    >
        {children}
    </motion.div>
)

export default function Contact() {
    return (
        <section className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="space-y-8"
            >
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Let's build together.</h2>
                <div className="flex justify-center gap-6">
                    <a href="https://github.com/yourusername" className="p-4 bg-slate-900 border border-slate-800 rounded-full hover:border-blue-500 transition-all">
                        <Github size={24} />
                    </a>
                    <a href="https://linkedin.com/in/yourusername" className="p-4 bg-slate-900 border border-slate-800 rounded-full hover:border-blue-500 transition-all">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:your@email.com" className="p-4 bg-slate-900 border border-slate-800 rounded-full hover:border-blue-500 transition-all">
                        <Mail size={24} />
                    </a>
                </div>
                <button
                    onClick={() => window.location.href = 'mailto:your@email.com'}
                    className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-medium transition-all"
                >
                    Get in touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </motion.div>
        </section>
    )
}