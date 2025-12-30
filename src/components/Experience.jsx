import { motion, AnimatePresence } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Code2, X, Maximize2, PlayCircle } from 'lucide-react';
import { useState } from 'react';

const Card = ({ children, className = "" }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className={`bg-white border border-slate-100 shadow-xl shadow-slate-200/50 p-8 rounded-[2.5rem] ${className}`}
    >
        {children}
    </motion.div>
)

export default function Experience() {
    const [selectedAward, setSelectedAward] = useState(null);

    const awards = [
        {
            title: "SPOT Award",
            org: "Aristocrat Gaming",
            year: "2025",
            desc: "Recognized for exceptional ownership and technical excellence in delivering high-quality UI components for the Aristocrat account.",
            type: "image",
            url: "spot_award_2025.jpeg"
        },
        {
            title: "Star of the Month",
            org: "Aristocrat Gaming",
            year: "2023",
            desc: "Recognized for outstanding performance and dedication to achieving team goals.",
            type: "image",
            url: "som_2023.jpeg"
        },
        {
            title: "Star of the Month",
            org: "Aristocrat Gaming",
            year: "2022",
            desc: "Integral contributor to RMG projects, delivering key features including game outcome data and balance updates with full ownership.",
            type: "image",
            url: "som_2022.jpeg"
        },
        {
            title: "Star of the Month",
            org: "Aristocrat Gaming",
            year: "2022",
            desc: "Spearheaded the development of the core Game GDK to support Class II Bingo game integration, ensuring modularity and performance.",
            type: "video",
            url: "som_2022_2.mp4",
            poster: "som_2022_2_poster.jpeg"
        },
        {
            title: "Employee of the Year",
            org: "R Systems",
            year: "2021",
            desc: "Awarded for outstanding performance and contribution to core engineering goals.",
            type: "image",
            url: "eoy_2021.jpeg"
        },
        {
            title: "Star of the Month",
            org: "Aristocrat Gaming",
            year: "2021",
            desc: "Built an understanding of the three.js library to create the PHR game and enhanced content for the Mobile Class 2 team.",
            type: "image",
            url: "som_2021.jpeg"
        },
    ];

    return (
        <section className="relative z-10 max-w-6xl mx-auto px-6 py-24 bg-white">
            {/* Lightbox Modal with Media Detection */}
            <AnimatePresence>
                {selectedAward && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedAward(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-white/90 backdrop-blur-xl p-2 md:p-10"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            // Added max-h-[95vh] and overflow-y-auto for mobile scrollability
                            className="relative max-w-5xl w-full max-h-[95vh] bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-y-auto md:overflow-hidden border border-slate-100"
                        >
                            <button
                                onClick={() => setSelectedAward(null)}
                                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-3 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-[110]"
                            >
                                <X size={18} className="text-slate-600" />
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                                {/* Media Container: Ensure video doesn't break layout */}
                                <div className="bg-slate-50 p-4 md:p-8 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 min-h-[250px] md:min-h-[400px]">
                                    {selectedAward.type === 'video' ? (
                                        <video
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            controls // Added controls for better mobile UX
                                            className="w-full h-auto max-h-[50vh] md:max-h-[70vh] rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl"
                                        >
                                            <source src={selectedAward.url} type="video/mp4" />
                                        </video>
                                    ) : (
                                        <img
                                            src={selectedAward.url}
                                            alt={selectedAward.title}
                                            className="max-h-[50vh] md:max-h-[70vh] w-full object-contain drop-shadow-2xl"
                                        />
                                    )}
                                </div>

                                {/* Content Container */}
                                <div className="p-6 md:p-10 flex flex-col justify-center">
                                    <span className="text-blue-600 font-bold text-[10px] md:text-xs tracking-widest uppercase mb-2 md:mb-4">
                                        {selectedAward.org} • {selectedAward.year}
                                    </span>
                                    <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
                                        {selectedAward.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm md:text-lg font-light leading-relaxed">
                                        {selectedAward.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* MANUAL SLIDING AWARDS SECTION */}
                <Card className="md:col-span-3 border-blue-100 bg-gradient-to-br from-white to-blue-50/20 overflow-hidden">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <Award className="text-blue-600 mb-2" size={32} />
                            <h3 className="text-2xl font-bold text-slate-900">Professional Recognitions</h3>
                        </div>
                        <motion.div
                            animate={{ x: [0, -8, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            <p className="text-slate-400 text-[10px] font-bold tracking-widest uppercase">Slide to view more</p>
                        </motion.div>
                    </div>

                    <div className="flex gap-6 overflow-x-auto pb-6 snap-x no-scrollbar scroll-smooth relative">
                        {awards.map((award, idx) => (
                            <div
                                key={idx}
                                onClick={() => setSelectedAward(award)}
                                className="min-w-[300px] md:min-w-[350px] snap-center bg-white border border-slate-100 p-6 rounded-3xl shadow-sm cursor-pointer group hover:border-blue-200 transition-all"
                            >
                                <div className="relative aspect-video mb-4 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                                        <div className="bg-white p-4 rounded-full shadow-xl">
                                            {award.type === 'video' ? (
                                                <PlayCircle className="text-blue-600" size={32} />
                                            ) : (
                                                <Maximize2 className="text-blue-600" size={24} />
                                            )}
                                        </div>
                                    </div>

                                    {award.type === 'video' ? (
                                        <video muted className="w-full h-full object-contain" poster={award.poster || ''}>
                                            <source src={award.url} type="video/mp4" />
                                        </video>
                                    ) : (
                                        <img
                                            src={award.url}
                                            alt={award.title}
                                            className="max-h-full max-w-full object-contain p-2 mx-auto"
                                        />
                                    )}
                                </div>
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-bold text-slate-900">{award.title}</h4>
                                    <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded-md font-bold">{award.year}</span>
                                </div>
                                <p className="text-xs text-slate-500 font-light truncate">{award.desc}</p>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* EDUCATION */}
                <Card>
                    <GraduationCap className="text-slate-400 mb-6" size={28} />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Education</h3>
                    <div className="space-y-2">
                        <p className="text-slate-500 text-sm leading-relaxed">
                            <span className="font-semibold text-slate-700">B.Tech in Electronics & Communication</span><br />
                            Maharana Pratap Engineering College (AKTU)<br />
                            <span className="text-xs italic text-slate-400 font-medium">Result: 79.06% (1st Division Honors)</span>
                        </p>
                        <div className="flex flex-wrap gap-1 pt-1">
                            {['DSA', 'Cloud', 'Networking', 'IoT'].map(course => (
                                <span key={course} className="text-[9px] bg-slate-50 text-slate-400 px-1.5 py-0.5 rounded border border-slate-100">
                                    {course}
                                </span>
                            ))}
                        </div>
                    </div>
                </Card>

                {/* CORE STACK */}
                <Card>
                    <Code2 className="text-slate-400 mb-6" size={28} />
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Core Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {['TypeScript', 'JavaScript', 'Node.js', 'React', 'Angular', 'Ionic', 'AWS', 'Devops'].map(tech => (
                            <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-bold tracking-tighter uppercase">
                                {tech}
                            </span>
                        ))}
                    </div>
                </Card>

                {/* LEAD ENGINEERING SUMMARY */}
                <Card className="md:col-span-1 border-emerald-50 bg-gradient-to-br from-white to-emerald-50/20">
                    <Briefcase className="text-emerald-500 mb-6" size={28} />
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-slate-900">Lead Engineer</h3>
                        <span className="text-[10px] bg-emerald-500 text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider animate-pulse">Present</span>
                    </div>
                    <div className="space-y-3">
                        <p className="text-slate-500 text-sm font-light leading-relaxed">
                            Leading team to deliver high-quality real-money slot & bingo games/platform with 8+ years of technical expertise.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-emerald-100/50">
                            <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest">Mentorship,</span>
                            <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest">Code Reviews,</span>
                            <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest">GDK Architecture</span>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}