"use client";

import LenisProvider from "@/components/LenisProvider";
import { Code, Mail, Briefcase, ExternalLink, Activity, Database, Layout, Server, GitMerge, ChevronDown, Rocket, Map, Users } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";
import F1car from '../components/F1car';
import Background3D from "@/components/Background3D";
import { motion } from "framer-motion";

const fadeUp: any = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  return (
    <LenisProvider>
      <main className="relative bg-transparent text-white w-full overflow-hidden font-sans">
        <Background3D />
        
        <Canvas shadows camera={{ position: [5, 5, 5], fov: 45 }} style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
          <color attach="background" args={['#0f0f0f']} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Stage environment="city" adjustCamera={true}>
            <F1car />
          </Stage>
          <OrbitControls makeDefault />
        </Canvas>
        
        {/* Scrollable Content Overlay */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          
          {/* Section 1: Hero */}
          <section className="min-h-screen flex flex-col items-center justify-center p-8 lg:p-24 relative">
            <motion.div 
              initial="hidden" animate="visible" variants={staggerContainer}
              className="max-w-5xl w-full text-center space-y-6"
            >
              <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter uppercase drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-700">
                Ayush Sinha
              </motion.h1>
              <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-center justify-center gap-4 text-xl md:text-3xl font-light tracking-widest text-cyan-400 uppercase">
                <span>Software Engineer</span>
                <span className="hidden md:inline text-neutral-600">•</span>
                <span className="text-neutral-300">System Design</span>
              </motion.div>
              <motion.div variants={fadeUp} className="pt-8 text-neutral-400 font-mono text-sm max-w-2xl mx-auto space-y-4">
                <p>🎓 B.Tech in Civil Engineering @ NIT Rourkela ('27)</p>
                <p>🏎️ Avid F1 fan, love photography, and enjoy a good game of chess.</p>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
              className="absolute bottom-12 flex flex-col items-center text-neutral-500 animate-bounce"
            >
              <span className="text-xs uppercase tracking-widest mb-2">Explore</span>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </section>

          {/* Section 2: Bento Dashboard */}
          <section className="min-h-[80vh] flex items-center justify-center p-4 lg:p-12 xl:p-24">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="max-w-7xl w-full"
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-12 flex items-center gap-4">
                <span className="w-12 h-2 bg-cyan-400 block"></span> Dashboard
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 lg:gap-6">
                
                {/* Tech Stack (Wide) */}
                <motion.div variants={fadeUp} className="md:col-span-2 md:row-span-2 p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl hover:bg-white/10 transition-colors group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-150"></div>
                  <h3 className="text-2xl font-bold uppercase tracking-widest mb-8 flex items-center gap-3">
                    <Server className="text-cyan-400" /> Core Stack
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs text-neutral-500 font-mono mb-2 uppercase">Languages</p>
                      <div className="flex flex-wrap gap-2">
                        {['Java', 'JavaScript', 'Python', 'SQL'].map(t => (
                          <span key={t} className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium border border-white/5">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 font-mono mb-2 uppercase">Backend & Databases</p>
                      <div className="flex flex-wrap gap-2">
                        {['Spring Boot', 'Node.js', 'PostgreSQL', 'MongoDB', 'REST APIs'].map(t => (
                          <span key={t} className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium border border-white/5">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 font-mono mb-2 uppercase">Frontend</p>
                      <div className="flex flex-wrap gap-2">
                        {['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'].map(t => (
                          <span key={t} className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium border border-white/5">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 font-mono mb-2 uppercase">Fundamentals</p>
                      <div className="flex flex-wrap gap-2">
                        {['DSA', 'OOPs', 'System Design'].map(t => (
                          <span key={t} className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium border border-white/5">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Open Source Lichess */}
                <motion.div variants={fadeUp} className="md:col-span-2 p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl hover:border-cyan-400/30 transition-all group flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-white/10 rounded-2xl"><GitMerge className="text-white w-6 h-6" /></div>
                      <span className="text-xs font-mono bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">Merged PRs</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">lichess-org / chess-openings</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      Improved opening classification and transposition mapping for Lichess, one of the largest open-source chess platforms.
                    </p>
                  </div>
                  <a href="https://github.com/lichess-org/chess-openings" target="_blank" rel="noopener noreferrer" className="mt-6 flex items-center text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-white transition-colors w-max">
                    View Impact <ExternalLink className="w-3 h-3 ml-2" />
                  </a>
                </motion.div>

                {/* Open Source Rosen */}
                <motion.div variants={fadeUp} className="md:col-span-2 p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl hover:border-cyan-400/30 transition-all group flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-white/10 rounded-2xl"><GitMerge className="text-white w-6 h-6" /></div>
                      <span className="text-xs font-mono bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">Merged PR</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">fitztrev / rosen-score</h3>
                    <p className="text-neutral-500 text-xs leading-relaxed">
                      Engineered concurrent API request handling for cross-platform Lichess/Chess.com data fetching.
                    </p>
                  </div>
                  <a href="https://github.com/fitztrev/rosen-score/pull/12" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-white transition-colors">
                    View PR <ExternalLink className="w-3 h-3 ml-2" />
                  </a>
                </motion.div>

              </div>
            </motion.div>
          </section>

          {/* Section 3: Featured Projects (8 Items) */}
          <section className="min-h-screen flex items-center justify-center p-4 lg:p-12 xl:p-24">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="max-w-7xl w-full space-y-12"
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight uppercase flex items-center gap-4">
                <span className="w-12 h-2 bg-cyan-400 block"></span> Project Architecture
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                
                {/* 1. MailSense AI (col-span-2) */}
                <motion.div variants={fadeUp} className="md:col-span-2 p-8 lg:p-12 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-2xl hover:border-cyan-400/40 transition-all group overflow-hidden relative">
                  <Mail className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5 group-hover:text-cyan-500/10 transition-colors duration-700" />
                  <div className="relative z-10 max-w-xl">
                    <h3 className="text-4xl font-black mb-4">MailSense AI</h3>
                    <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                      AI-powered email assistant integrating Spring Boot, React, and the Gemini API. Designed a layered backend architecture achieving sub-500ms API response times across 100+ concurrent requests.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {['Spring Boot', 'React', 'Gemini API'].map(t => (
                        <span key={t} className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono border border-white/5">{t}</span>
                      ))}
                    </div>
                    <a href="https://github.com/AyushSinha2603/MailSense-AI" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-cyan-400 transition-colors">
                      View Source <Code className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>

                {/* 2. Sleepyhead Studios (col-span-1) */}
                <motion.div variants={fadeUp} className="p-8 lg:p-12 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-2xl hover:border-cyan-400/40 transition-all group overflow-hidden relative flex flex-col justify-between">
                  <Layout className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5 group-hover:text-cyan-500/10 transition-colors duration-700" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Sleepyhead Studios</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                      Official landing platform utilizing Next.js 14, React 19, and Framer Motion. Leveraged Server Components to optimize rendering performance.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono border border-white/5">Next.js</span>
                    </div>
                  </div>
                  <a href="https://github.com/AyushSinha2603/sh-website" target="_blank" rel="noopener noreferrer" className="relative z-10 flex items-center text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-white transition-colors w-max">
                    Live Demo <ExternalLink className="w-3 h-3 ml-2" />
                  </a>
                </motion.div>

                {/* 3. Remote Profiler (col-span-1) */}
                <motion.div variants={fadeUp} className="p-8 lg:p-12 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-2xl hover:border-cyan-400/40 transition-all group overflow-hidden relative flex flex-col justify-between">
                  <Map className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5 group-hover:text-cyan-500/10 transition-colors duration-700" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Remote Profiler</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                      A full-stack ecosystem for an automated road profiling RC vehicle. Handles real-time geolocation mapping and sensor data processing.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono border border-white/5">Full-Stack</span>
                    </div>
                  </div>
                  <a href="https://github.com/AyushSinha2603/remote-profiler" target="_blank" rel="noopener noreferrer" className="relative z-10 flex items-center text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-white transition-colors w-max">
                    View Source <Code className="w-3 h-3 ml-2" />
                  </a>
                </motion.div>

                {/* 4. Project Smarak (col-span-2) */}
                <motion.div variants={fadeUp} className="md:col-span-2 p-8 lg:p-12 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-2xl hover:border-cyan-400/40 transition-all group overflow-hidden relative flex flex-col justify-center">
                  <Users className="absolute -left-10 -bottom-10 w-64 h-64 text-white/5 group-hover:text-cyan-500/10 transition-colors duration-700" />
                  <div className="relative z-10 md:ml-auto md:text-right max-w-xl">
                    <h3 className="text-4xl font-black mb-4">Smarak '26</h3>
                    <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                      The official website for Smarak, the annual Civil Engineering festival at NIT Rourkela. Features dynamic event registration, beautiful animations, and a seamless user experience.
                    </p>
                    <div className="flex flex-wrap md:justify-end gap-2 mb-8">
                      {['Next.js', 'Web UI', 'Events'].map(t => (
                        <span key={t} className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono border border-white/5">{t}</span>
                      ))}
                    </div>
                    <a href="https://github.com/AyushSinha2603/project-smarak-26" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-transparent border border-white text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white hover:text-black transition-colors">
                      View Source <Code className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>

                {/* 5. Opening Forge (col-span-2) */}
                <motion.div variants={fadeUp} className="md:col-span-2 p-8 lg:p-12 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-2xl hover:border-cyan-400/40 transition-all group overflow-hidden relative flex flex-col justify-center">
                  <Database className="absolute -left-10 -bottom-10 w-64 h-64 text-white/5 group-hover:text-cyan-500/10 transition-colors duration-700" />
                  <div className="relative z-10 max-w-xl">
                    <h3 className="text-4xl font-black mb-4">Opening Forge</h3>
                    <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                      Chess opening analysis system with an optimized data model recognizing over 3,700 unique openings via Lichess ECO dataset.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {['Data Modeling', 'FEN', 'Chess'].map(t => (
                        <span key={t} className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono border border-white/5">{t}</span>
                      ))}
                    </div>
                    <a href="https://github.com/AyushSinha2603/opening-forge" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-cyan-400 transition-colors">
                      View Source <Code className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>

                {/* 6. Cineverse (col-span-1) */}
                <motion.div variants={fadeUp} className="p-8 lg:p-12 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-2xl hover:border-cyan-400/40 transition-all group overflow-hidden relative flex flex-col justify-between">
                  <Layout className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5 group-hover:text-cyan-500/10 transition-colors duration-700" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Cineverse</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                      A modern movie discovery app built with React, Appwrite, and TMDB API for dynamic UI rendering.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono border border-white/5">React</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono border border-white/5">TMDB</span>
                    </div>
                  </div>
                  <a href="https://github.com/AyushSinha2603/cineverse" target="_blank" rel="noopener noreferrer" className="relative z-10 flex items-center text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-white transition-colors w-max">
                    View Source <Code className="w-3 h-3 ml-2" />
                  </a>
                </motion.div>

                {/* 7. Accident Prediction Model (col-span-1) */}
                <motion.div variants={fadeUp} className="p-8 lg:p-12 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-2xl hover:border-cyan-400/40 transition-all group overflow-hidden relative flex flex-col justify-between">
                  <Activity className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5 group-hover:text-cyan-500/10 transition-colors duration-700" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Accident Prediction</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                      Machine learning system predicting accident severity, trained on 300,000+ real-world traffic records.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono border border-white/5">Python</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono border border-white/5">ML</span>
                    </div>
                  </div>
                  <a href="https://github.com/AyushSinha2603/Traffic-Accident-Severity-Prediction" target="_blank" rel="noopener noreferrer" className="relative z-10 flex items-center text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-white transition-colors w-max">
                    View Source <Code className="w-3 h-3 ml-2" />
                  </a>
                </motion.div>

                {/* 8. Odd Even Policy Analysis (col-span-2) */}
                <motion.div variants={fadeUp} className="md:col-span-2 p-8 lg:p-12 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-2xl hover:border-cyan-400/40 transition-all group overflow-hidden relative flex flex-col justify-center">
                  <Rocket className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5 group-hover:text-cyan-500/10 transition-colors duration-700" />
                  <div className="relative z-10 md:ml-auto md:text-right max-w-xl">
                    <h3 className="text-4xl font-black mb-4">Odd Even Policy</h3>
                    <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                      Data analysis project evaluating the impact of Delhi's Odd-Even traffic policy on air pollution levels using real-world datasets, scientific computing, and visualization.
                    </p>
                    <div className="flex flex-wrap md:justify-end gap-2 mb-8">
                      {['Python', 'Data Science', 'Analysis'].map(t => (
                        <span key={t} className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono border border-white/5">{t}</span>
                      ))}
                    </div>
                    <a href="https://github.com/AyushSinha2603/Odd-Even-Policy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-transparent border border-white text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white hover:text-black transition-colors">
                      View Source <Code className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </section>

          {/* Section 4: Massive Animated Footer */}
          <section className="min-h-screen relative flex flex-col justify-center overflow-hidden bg-black/50 border-t border-white/10 pt-24 pb-12 mt-24">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none"></div>
            
            {/* Marquee Background */}
            <div className="absolute inset-0 flex flex-col justify-center gap-12 opacity-[0.03] overflow-hidden pointer-events-none select-none">
              <div className="flex whitespace-nowrap animate-marquee">
                  <h1 className="text-[12rem] md:text-[15rem] font-black uppercase mx-8 text-white">ENGINEER</h1>
                  <h1 className="text-[12rem] md:text-[15rem] font-black uppercase mx-8 text-white">DESIGN</h1>
                  <h1 className="text-[12rem] md:text-[15rem] font-black uppercase mx-8 text-white">BUILD</h1>
                  <h1 className="text-[12rem] md:text-[15rem] font-black uppercase mx-8 text-white">ENGINEER</h1>
                  <h1 className="text-[12rem] md:text-[15rem] font-black uppercase mx-8 text-white">DESIGN</h1>
                  <h1 className="text-[12rem] md:text-[15rem] font-black uppercase mx-8 text-white">BUILD</h1>
              </div>
              <div className="flex whitespace-nowrap animate-marquee-reverse">
                  <h1 className="text-[12rem] md:text-[15rem] font-black uppercase mx-8 text-white">INNOVATE</h1>
                  <h1 className="text-[12rem] md:text-[15rem] font-black uppercase mx-8 text-white">CREATE</h1>
                  <h1 className="text-[12rem] md:text-[15rem] font-black uppercase mx-8 text-white">SCALE</h1>
                  <h1 className="text-[12rem] md:text-[15rem] font-black uppercase mx-8 text-white">INNOVATE</h1>
                  <h1 className="text-[12rem] md:text-[15rem] font-black uppercase mx-8 text-white">CREATE</h1>
                  <h1 className="text-[12rem] md:text-[15rem] font-black uppercase mx-8 text-white">SCALE</h1>
              </div>
            </div>

            <div className="max-w-7xl mx-auto w-full px-8 lg:px-24 relative z-10 flex flex-col items-center text-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-12">
                <motion.h2 variants={fadeUp} className="text-5xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter leading-none mix-blend-difference">
                  Got an idea? <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-2xl">Let's Talk.</span>
                </motion.h2>

                <motion.div variants={fadeUp} className="max-w-3xl mx-auto">
                  <p className="text-xl md:text-3xl text-neutral-300 font-light leading-relaxed">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                  </p>
                </motion.div>

                <motion.div variants={fadeUp} className="flex justify-center pt-12">
                  <a href="mailto:ayushsinha@example.com" className="group relative flex items-center justify-center px-16 py-8 bg-white text-black font-black uppercase tracking-[0.2em] text-xl rounded-full overflow-hidden hover:scale-105 transition-transform shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)]">
                    <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                    <span className="relative z-10 flex items-center"><Mail className="w-8 h-8 mr-4" /> Say Hello</span>
                  </a>
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-between items-center gap-8 pt-32 w-full mt-32 border-t border-white/10 pb-8">
                  <div className="flex gap-8 items-center">
                    <a href="https://github.com/AyushSinha2603" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-4xl font-black uppercase tracking-tight hover:text-cyan-400 transition-colors drop-shadow-md">GitHub</a>
                    <a href="https://linkedin.com/in/ayush-sinha-70046a319/" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-4xl font-black uppercase tracking-tight hover:text-cyan-400 transition-colors drop-shadow-md">LinkedIn</a>
                  </div>
                  <div className="text-right">
                    <p className="text-xl text-neutral-300 uppercase tracking-widest font-bold">Open to Opportunities</p>
                    <p className="text-sm text-neutral-500 font-mono mt-2 uppercase tracking-widest">© {new Date().getFullYear()} Ayush Sinha. Built with Next.js.</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </div>
      </main>
    </LenisProvider>
  );
}
