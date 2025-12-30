import Experience from './components/Experience';
import { motion } from 'framer-motion';
import { ChevronsDown } from 'lucide-react';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Journey from './components/Journey';

function App() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">

      <section className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-4 grayscale brightness-110"
          >
            <source src='home_background.mp4' type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 space-y-6 text-center"
        >
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600">
            ANURAG
          </h1>
          <div className="h-px w-24 bg-blue-600 mx-auto"></div>
          <p className="text-slate-700 text-sm md:text-base font-medium tracking-[0.3em] uppercase max-w-2xl mx-auto leading-relaxed">
            Lead Engineer | Full-Stack & DevOps Enthusiast
          </p>
        </motion.div>

        <div className="absolute bottom-10 flex flex-col items-center gap-2 text-slate-400">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <ChevronsDown size={24} strokeWidth={1.5} />
          </motion.div>
          <span className="text-[10px] tracking-[0.2em] font-semibold">SCROLL TO EXPLORE</span>
        </div>
      </section>

      <div className="relative z-10 bg-white">
        <Experience />
        <Journey />
        <Projects />
        <Contact />
      </div>

      <footer className="relative z-10 py-20 text-center border-t border-slate-100 bg-white">
        <p className="text-slate-400 text-[10px] tracking-widest uppercase">
          &copy; {new Date().getFullYear()} ANURAG MISHRA • Lead Engineer
        </p>
      </footer>
    </div>
  )
}

export default App