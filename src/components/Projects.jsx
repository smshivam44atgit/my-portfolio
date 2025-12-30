import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Maximize2, Code2 } from 'lucide-react';
import { useState } from 'react';

const projects = [
    {
        title: "Real Money Slot Games & Multi-Denomination Backend",
        description: "Led a team in the development of Real Money Slot games and a scalable Multi Denomination Backend. Designed a robust architecture to support dynamic betting tiers.",
        tags: ["Java", "TypeScript", "Node.js"],
        category: "Leadership / Engineering",
        type: "image",
        image: "slot.webp",
        poster: "slot.webp",
    },
    {
        title: "Ask BOLT: Enterprise Q&A Platform",
        description: "Led the development of a secure internal Q&A platform featuring JWT authentication, real-time reputation logic, and complex voting systems. Implemented a Redis-backed queue for asynchronous email processing and integrated a custom Rich Text Editor to streamline technical collaboration.",
        tags: ["TypeScript", "React", "Node.js", "MongoDB", "Redis"],
        category: "Leadership / Engineering",
        type: "image",
        image: "askbolt.webp",
        poster: "askbolt.webp"
    },
    {
        title: "Game Development Kit (GDK)",
        description: "Led the design and development of the TypeScript based Game Development Kit (GDK) for slot and bingo games, standardizing development workflows. Conducted high-level technical assessments for engineering talent acquisition.",
        tags: ["TypeScript", "Node.js", "GDK", "Architecture", "Mentorship"],
        category: "Leadership / Engineering",
        type: "image",
        image: "gdk.webp",
        poster: "gdk.webp"
    },
    {
        title: "Enterprise Network Management Cloud Dashboard",
        description: "Architected a global cloud dashboard for enterprise WiFi infrastructure. Features real-time MQTT data streaming, RF power simulation for floor plans, and dynamic web portal deploymentBuilt a cloud-based network management platform for Wi-Fi access points and routers, enabling global device monitoring and control across local and remote networks. Developed full-stack architecture using HTML5, CSS, JavaScript, and Node.js, with MQTT-driven real-time analytics, interactive network dashboards, and floor-plan–based RF visualization. Implemented secure authentication (OTP, email, social login), dynamic cloud-configured portals, and scalable data aggregation (hour/day/week) for actionable network insights.",
        tags: ["Node.js", "MQTT", "HTML5/JS", "AJAX", "REST API", "WebSockets", "MONGO"],
        category: "Cloud",
        type: "image",
        image: "kefi.webp",
        poster: "kefi.webp"
    },
    {
        title: "Kefi Router Firmware & Cloud Management",
        description: "Built a cloud-managed router firmware and dashboard supporting root and mesh network setup, client management, parental controls, access control, port forwarding, address reservation, speed testing, and OTA firmware upgrades. Enabled real-time monitoring and remote configuration using MQTT and SNMP with a scalable Node.js backend.",
        tags: ["Python", "Node.js", "MQTT", "SNMP", "Mesh Networking", "Firmware", "Cloud Systems"],
        category: "Systems",
        type: "image",
        image: "kefi_cloud.webp",
        poster: "kefi_cloud.webp"
    },
    {
        title: "ChatBook: Real-time Messaging Platform",
        description: "Independently built a real-time web-based messaging platform using MQTT and Django. Designed a Python-based 'ChatBook Handler' service to manage active and offline user presence via public MQTT brokers, enabling low-latency, scalable publish–subscribe communication.",
        tags: ["Python", "Django", "MQTT", "Real-time Systems", "Pub/Sub"],
        category: "Web",
        type: "image",
        image: "chat_book.webp",
        poster: "chat_book.webp",
        sourceCode: "https://bitbucket.org/dev_iotanurag/chatbook/src/master/"
    },
    {
        title: "MIT: Image Processing R&D",
        description: "Contributed to an MIT research project involving sensor-driven video data collection on Raspberry Pi Zero W. Built Python pipelines using OpenCV to process camera feeds and compute frame-level base-to-peak pixel displacement across multiple measurement points, synchronized with high-precision I2C sensor data.",
        tags: ["Python", "OpenCV", "Raspberry Pi", "Computer Vision", "I2C"],
        category: "Research",
        type: "image",
        image: ""
    },
    {
        title: "PolyHouse: Precision Agri-Tech Platform",
        description: "Built an IoT-based farming monitoring system to track temperature, humidity, and soil moisture in controlled environments. Developed sensor firmware for DHT11 and capacitive soil moisture sensors, along with a Django-based admin dashboard, analytics, and REST APIs to support mobile applications.",
        tags: ["Django", "IoT", "Sensor Firmware", "REST APIs", "AgriTech"],
        category: "IoT",
        type: "image",
        image: ""
    },
    {
        title: "Smart Home Solutions Platform",
        description: "Engineered an end-to-end home automation platform with a Python-based core controller managing local devices and cloud connectivity via MQTT. Developed embedded C firmware for smart lighting, relay boards, environmental sensors, and security devices, along with a Django-based admin dashboard supporting global control, scheduling, and intensity management.",
        tags: ["Python", "Embedded C", "MQTT", "Django", "IoT Systems"],
        category: "IoT",
        type: "video",
        video: "https://www.youtube.com/watch?v=QNjAKShfE6E",
        poster: "iot_demo.webp"
    },
    {
        title: "College Project – Home Automation System",
        description: "Built an Arduino-based home automation system enabling mobile-controlled operation of lights, fans, and household appliances. Implemented embedded C firmware and relay-based switching to support real-time device control via phone commands.",
        tags: ["Arduino", "Embedded C", "Home Automation", "IoT"],
        category: "College",
        type: "video",
        video: "https://www.youtube.com/watch?v=C0q_IisUsmw&t=4s",
        poster: "college_poster.webp"
    }
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    /* ---------------- YouTube Helper ---------------- */
    const getYouTubeEmbedUrl = (url) => {
        if (!url) return null;
        const regExp =
            /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11
            ? `https://www.youtube.com/embed/${match[2]}?autoplay=1&mute=1&loop=1&playlist=${match[2]}`
            : null;
    };

    /* ---------------- Media Renderer ---------------- */
    const renderProjectMedia = (project) => {
        // 1️⃣ VIDEO (YouTube or MP4)
        if (project.video) {
            const yt = getYouTubeEmbedUrl(project.video);

            return yt ? (
                <iframe
                    src={yt}
                    title={project.title}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full aspect-video rounded-2xl shadow-2xl"
                />
            ) : (
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="w-full max-h-[70vh] rounded-2xl shadow-2xl object-contain"
                >
                    <source src={project.video} type="video/mp4" />
                </video>
            );
        }

        // 2️⃣ IMAGE
        if (project.image) {
            return (
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl"
                />
            );
        }

        // 3️⃣ FALLBACK
        return (
            <div className="flex flex-col items-center text-slate-300">
                <Code2 size={48} strokeWidth={1} />
                <span className="mt-2 text-sm">No preview available</span>
            </div>
        );
    };

    return (
        <section className="relative max-w-7xl mx-auto px-6 py-24 bg-white">
            {/* ================= MODAL ================= */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-white/90 backdrop-blur-xl p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-6xl max-h-[95vh] bg-white rounded-[2.5rem] shadow-2xl overflow-y-auto border border-slate-100"
                        >
                            {/* Close */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 p-3 bg-slate-100 hover:bg-slate-200 rounded-full z-[110]"
                            >
                                <X size={18} />
                            </button>

                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                {/* Media */}
                                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 flex items-center justify-center min-h-[300px]">
                                    {renderProjectMedia(selectedProject)}
                                </div>

                                {/* Content */}
                                <div className="p-8 lg:p-12 flex flex-col">
                                    <span className="text-blue-600 font-bold text-xs tracking-widest uppercase mb-4">
                                        {selectedProject.category}
                                    </span>

                                    <h3 className="text-3xl font-bold text-slate-900 mb-6">
                                        {selectedProject.title}
                                    </h3>

                                    <p className="text-slate-500 text-lg font-light leading-relaxed mb-8">
                                        {selectedProject.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-10">
                                        {selectedProject.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-[10px] font-bold uppercase tracking-wider"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 mt-auto">
                                        {selectedProject.sourceCode && (
                                            <a
                                                href={selectedProject.sourceCode}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-blue-600"
                                            >
                                                <Github size={18} /> Source Code
                                            </a>
                                        )}

                                        {selectedProject.liveDemo && (
                                            <a
                                                href={selectedProject.liveDemo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl font-bold text-sm hover:bg-slate-50"
                                            >
                                                <ExternalLink size={18} /> Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ================= HEADER ================= */}
            <div className="mb-20 border-b border-slate-100 pb-12">
                <h2 className="text-5xl font-bold text-slate-900">
                    Featured Work
                </h2>
                <p className="text-slate-400 tracking-[0.3em] uppercase text-xs mt-4">
                    8+ Years of Engineering Impact
                </p>
            </div>

            {/* ================= GRID ================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -6 }}
                        onClick={() => setSelectedProject(project)}
                        className="cursor-pointer bg-slate-50/60 rounded-[2.5rem] border border-slate-100 p-6 hover:bg-white hover:shadow-2xl transition"
                    >
                        {/* Preview */}
                        <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 bg-slate-200">
                            {project.video ? (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                    poster={project.poster}
                                >
                                    <source src={project.video} type="video/mp4" />
                                </video>
                            ) : project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-slate-300">
                                    <Code2 size={40} />
                                </div>
                            )}

                            <div className="absolute inset-0 bg-blue-600/10 opacity-0 hover:opacity-100 transition flex items-center justify-center">
                                <div className="bg-white p-4 rounded-full shadow-xl">
                                    <Maximize2 size={24} className="text-blue-600" />
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                        <p className="text-xs text-slate-500 line-clamp-3">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-100">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[8px] font-bold uppercase px-2 py-1 bg-white rounded-lg border"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}