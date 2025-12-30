import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, MessageCircle } from 'lucide-react';

export default function Contact() {
    return (
        <section className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="space-y-12"
            >
                <div className="space-y-4">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900">Let's build together.</h2>
                    <p className="text-slate-400 font-medium tracking-[0.2em] uppercase text-xs">Based in Noida, India</p>
                </div>

                <div className="flex justify-center gap-6">
                    <a href="https://github.com/smshivam44atgit" className="p-5 bg-white border border-slate-100 rounded-full shadow-lg shadow-slate-200/50 text-slate-600 hover:text-blue-600 transition-all hover:scale-110">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/anurag-mishra-2b8310160" className="p-5 bg-white border border-slate-100 rounded-full shadow-lg shadow-slate-200/50 text-slate-600 hover:text-blue-600 transition-all hover:scale-110">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:smshivam44@gmail.com" className="p-5 bg-white border border-slate-100 rounded-full shadow-lg shadow-slate-200/50 text-slate-600 hover:text-blue-600 transition-all hover:scale-110">
                        <Mail size={24} />
                    </a>
                    <a
                        href="https://wa.me/919044300637?text=Hi%20Anurag,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-5 bg-white border border-slate-100 rounded-full shadow-lg shadow-slate-200/50 text-slate-600 hover:text-emerald-600 transition-all hover:scale-110"
                    >
                        <MessageCircle size={24} />
                    </a>
                </div>

                <button
                    onClick={() => window.location.href = 'mailto:smshivam44@gmail.com'}
                    className="group inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-blue-600 transition-all shadow-xl shadow-blue-200"
                >
                    Start a Conversation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </motion.div>
        </section>
    )
}