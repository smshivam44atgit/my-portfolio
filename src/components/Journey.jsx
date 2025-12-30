import { motion } from 'framer-motion';

const careerData = [
    {
        year: "Aug 2022 - Present",
        role: "Lead Engineer",
        company: "R Systems (Client: Aristocrat Gaming)",
        impact: "Leading a team in designing and developing Real Money Slot & Bingo games/platform using TypeScript, React, and Node.js.",
        achievement: "SPOT Award for Excellence (2025)"
    },
    {
        year: "Dec 2020 - July 2022",
        role: "Senior Software Engineer",
        company: "R Systems (Client: Aristocrat Gaming)",
        impact: "Worked on the core TypeScript-based Game Development Kit (GDK) for Slot/Bingo games. Developed critical game modules.",
        achievement: "Employee of the Year (2021)"
    },
    {
        year: "Dec 2018 - Nov 2020",
        role: "Software Engineer",
        company: "Kenstel Networks Ltd.",
        impact: "Architected enterprise WiFi portals and worked on the hardware firmware.",
        achievement: "Enterprise WIFI Protal & Router Firmware Development"
    },
    {
        year: "Jan 2018 - Dec 2018",
        role: "IoT Developer",
        company: "Mobiloitte Technologies",
        impact: "Architected IoT automation systems utilizing MQTT Pub/Sub protocols, Alexa skill building and Ionic mobile app.",
        achievement: "Smart Home Solution, Alexa Skill Building, Ionic Mobile App"
    }
];

export default function Journey() {
    return (
        <section className="max-w-5xl mx-auto px-6 py-24 bg-white">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900">The Journey</h2>
                <p className="text-slate-400 mt-2 font-medium tracking-widest uppercase text-[10px]">8+ Years of Professional Evolution</p>
            </div>

            <div className="relative">
                <div className="absolute left-4 md:left-1/2 h-full w-px bg-slate-100 transform -translate-x-1/2"></div>

                <div className="space-y-12">
                    {careerData.map((item, index) => {
                        const isPresent = index === 0;

                        return (
                            <div key={index} className="relative flex items-center justify-between md:justify-normal group">

                                <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 shadow-sm transform -translate-x-1/2 z-10 transition-transform group-hover:scale-125 
                                    ${isPresent
                                        ? 'border-emerald-500 ring-4 ring-emerald-50'
                                        : 'border-blue-600 ring-4 ring-blue-50'
                                    }`}
                                ></div>

                                <div className={`w-full md:w-[45%] ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                                    <motion.div
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className={`bg-white p-8 rounded-[2.5rem] border shadow-sm hover:shadow-xl transition-all duration-500
                                            ${isPresent
                                                ? 'border-emerald-100 hover:shadow-emerald-50/50'
                                                : 'border-slate-100 hover:shadow-blue-50/50'
                                            }`}
                                    >
                                        <div className="flex flex-col md:flex-row justify-between items-start mb-2 gap-2">
                                            <span className={`${isPresent ? 'text-emerald-600' : 'text-blue-600'} font-bold text-[10px] tracking-widest uppercase`}>
                                                {item.year}
                                            </span>
                                            <div className={`px-3 py-1 rounded-lg ${isPresent ? 'bg-emerald-50' : 'bg-blue-50'}`}>
                                                <p className={`text-[9px] font-bold italic tracking-wide uppercase ${isPresent ? 'text-emerald-600' : 'text-blue-600'}`}>
                                                    ★ {item.achievement}
                                                </p>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-slate-900">{item.role}</h3>
                                        <p className="text-slate-400 text-xs font-semibold mb-4 uppercase tracking-wider">{item.company}</p>
                                        <p className="text-sm text-slate-500 font-light leading-relaxed">
                                            {item.impact}
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}