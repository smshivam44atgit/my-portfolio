import HeroScene from './components/HeroScene';
import Experience from './components/Experience';
import { motion } from 'framer-motion';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-500/30">
      <HeroScene />

      <section className="relative z-10 flex flex-col items-center justify-center h-screen px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4"
        >
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
            ANURAG
          </h1>
          <div className="h-px w-24 bg-blue-500 mx-auto"></div>
          <p className="text-slate-400 text-lg md:text-xl font-light tracking-widest uppercase">
            Full-Stack Engineer | JS/TS | React | MEAN & MERN | Python | DevOps Enthusiast
          </p>
        </motion.div>

        <div className="absolute bottom-10 animate-bounce text-slate-500 text-sm tracking-[0.2em]">
          SCROLL TO EXPLORE
        </div>
      </section>

      <div className="relative z-10 bg-slate-950/50 backdrop-blur-sm">
        <Experience />
        <Projects />
        <Contact />
      </div>

      <footer className="relative z-10 py-20 text-center border-t border-slate-900">
        <p className="text-slate-600 text-xs tracking-widest uppercase">
          {new Date().getFullYear()} ANURAG MISHRA • Passion • Code • Innovation
        </p>
      </footer>
    </div>
  )
}

export default App