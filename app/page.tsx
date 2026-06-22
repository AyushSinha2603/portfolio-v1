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
      <main className="relative bg-black text-white w-full overflow-hidden font-sans">
        <Background3D />
        
        <Canvas shadows camera={{ position: [5, 5, 5], fov: 45 }} style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
          <color attach="background" args={['#000000']} />
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 5]} intensity={0.5} />
          <Stage environment="city" adjustCamera={true}>
            <F1car />
          </Stage>
          <OrbitControls makeDefault />
        </Canvas>
        
        {/* Unified Background Marquee overlay for the entire site */}
        <div className="fixed inset-0 pointer-events-none flex flex-col justify-center gap-24 opacity-[0.02] z-0 overflow-hidden select-none">
          <div className="flex whitespace-nowrap animate-marquee">
              <h1 className="text-[12rem] md:text-[20rem] font-black uppercase mx-8 text-white">ENGINEER</h1>
              <h1 className="text-[12rem] md:text-[20rem] font-black uppercase mx-8 text-white">DESIGN</h1>
              <h1 className="text-[12rem] md:text-[20rem] font-black uppercase mx-8 text-white">BUILD</h1>
          </div>
          <div className="flex whitespace-nowrap animate-marquee-reverse">
              <h1 className="text-[12rem] md:text-[20rem] font-black uppercase mx-8 text-white">INNOVATE</h1>
              <h1 className="text-[12rem] md:text-[20rem] font-black uppercase mx-8 text-white">CREATE</h1>
              <h1 className="text-[12rem] md:text-[20rem] font-black uppercase mx-8 text-white">SCALE</h1>
          </div>
        </div>

        {/* Global Glow */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] bg-cyan-500/10 blur-[200px] rounded-full pointer-events-none z-0"></div>

        {/* Scrollable Content Overlay */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          
          {/* Section 1: Hero */}
          <section className="min-h-screen flex flex-col items-center justify-center p-8 lg:p-24 relative">
            <motion.div 
              initial="hidden" animate="visible" variants={staggerContainer}
              className="max-w-5xl w-full text-center space-y-6 mix-blend-difference"
            >
              <motion.h1 variants={fadeUp} className="text-7xl md:text-9xl lg:text-[12rem] font-black tracking-tighter uppercase leading-none drop-shadow-2xl">
                Ayush <br/> Sinha
              </motion.h1>
              <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-center justify-center gap-4 text-2xl md:text-4xl font-black tracking-[0.2em] uppercase mt-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-lg">
                <span>Software Engineer</span>
              </motion.div>
              <motion.div variants={fadeUp} className="pt-8 text-neutral-300 font-light text-xl max-w-2xl mx-auto space-y-4 tracking-wide">
                <p>Designing Systems. Building the Future.</p>
              </motion.div>
            </motion.div>
          </section>

          {/* Section 2: Bento Dashboard */}
          <section className="min-h-screen flex items-center justify-center p-4 lg:p-12 xl:p-24 relative">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="max-w-7xl w-full relative z-10"
            >
              <motion.h2 variants={fadeUp} className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-16 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-800 drop-shadow-2xl">
                Dashboard
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                
                {/* Tech Stack (Wide) */}
                <motion.div variants={fadeUp} className="md:col-span-2 p-12 rounded-[3rem] border border-white/5 bg-black/60 backdrop-blur-3xl hover:border-cyan-500/30 transition-all duration-500 group relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-150"></div>
                  <h3 className="text-3xl font-black uppercase tracking-widest mb-10 flex items-center gap-4">
                    <Server className="text-cyan-400 w-8 h-8" /> Core Stack
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <p className="text-xs tracking-[0.2em] text-cyan-500 font-black mb-4 uppercase">Languages</p>
                      <div className="flex flex-wrap gap-3">
                        {['Java', 'JavaScript', 'Python', 'SQL'].map(t => (
                          <span key={t} className="px-5 py-2 bg-white/5 hover:bg-white/10 transition-colors rounded-full text-sm font-bold tracking-widest border border-white/5 uppercase">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.2em] text-cyan-500 font-black mb-4 uppercase">Backend & Databases</p>
                      <div className="flex flex-wrap gap-3">
                        {['Spring Boot', 'Node.js', 'PostgreSQL', 'MongoDB', 'REST APIs'].map(t => (
                          <span key={t} className="px-5 py-2 bg-white/5 hover:bg-white/10 transition-colors rounded-full text-sm font-bold tracking-widest border border-white/5 uppercase">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.2em] text-cyan-500 font-black mb-4 uppercase">Frontend</p>
                      <div className="flex flex-wrap gap-3">
                        {['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'].map(t => (
                          <span key={t} className="px-5 py-2 bg-white/5 hover:bg-white/10 transition-colors rounded-full text-sm font-bold tracking-widest border border-white/5 uppercase">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Open Source Lichess */}
                <motion.div variants={fadeUp} className="md:col-span-2 p-12 rounded-[3rem] border border-white/5 bg-black/60 backdrop-blur-3xl hover:border-cyan-500/30 transition-all duration-500 group flex flex-col justify-between relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -ml-20 -mb-20 transition-transform group-hover:scale-150"></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:border-cyan-500/50 transition-colors"><GitMerge className="text-cyan-400 w-8 h-8" /></div>
                      <span className="text-xs font-black uppercase tracking-widest bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full border border-cyan-500/20">Merged PRs</span>
                    </div>
                    <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">lichess-org / chess-openings</h3>
                    <p className="text-neutral-400 text-lg leading-relaxed font-light">
                      Improved opening classification and transposition mapping for Lichess, one of the largest open-source chess platforms.
                    </p>
                  </div>
                  <a href="https://github.com/lichess-org/chess-openings" target="_blank" rel="noopener noreferrer" className="relative z-10 mt-12 inline-flex items-center text-sm font-black uppercase tracking-[0.2em] text-white hover:text-cyan-400 transition-colors w-max">
                    View Impact <ExternalLink className="w-5 h-5 ml-3" />
                  </a>
                </motion.div>

                {/* Open Source Rosen */}
                <motion.div variants={fadeUp} className="md:col-span-4 p-12 rounded-[3rem] border border-white/5 bg-black/60 backdrop-blur-3xl hover:border-cyan-500/30 transition-all duration-500 group flex flex-col md:flex-row md:items-center justify-between relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-3xl transition-transform group-hover:scale-110"></div>
                  <div className="relative z-10 max-w-2xl mb-8 md:mb-0">
                    <div className="flex items-center gap-6 mb-4">
                      <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:border-cyan-500/50 transition-colors"><GitMerge className="text-cyan-400 w-6 h-6" /></div>
                      <span className="text-xs font-black uppercase tracking-widest bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full border border-cyan-500/20">Merged PR</span>
                    </div>
                    <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">fitztrev / rosen-score</h3>
                    <p className="text-neutral-400 text-base leading-relaxed font-light">
                      Engineered concurrent API request handling for cross-platform Lichess/Chess.com data fetching.
                    </p>
                  </div>
                  <a href="https://github.com/fitztrev/rosen-score/pull/12" target="_blank" rel="noopener noreferrer" className="relative z-10 px-8 py-4 bg-white text-black rounded-full font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-transform flex items-center shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    View PR <ExternalLink className="w-4 h-4 ml-3" />
                  </a>
                </motion.div>

              </div>
            </motion.div>
          </section>

          {/* Section 3: Featured Projects (6 Items) */}
          <section className="min-h-screen flex items-center justify-center p-4 lg:p-12 xl:p-24 relative">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="max-w-7xl w-full"
            >
              <motion.h2 variants={fadeUp} className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-16 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-800 drop-shadow-2xl">
                Architecture
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 1. MailSense AI */}
                <motion.div variants={fadeUp} className="p-12 rounded-[3rem] border border-white/5 bg-black/60 backdrop-blur-3xl hover:border-cyan-500/30 transition-all duration-500 group overflow-hidden relative shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col justify-between min-h-[500px]">
                  <Mail className="absolute -right-10 -bottom-10 w-96 h-96 text-white/5 group-hover:text-cyan-500/10 transition-colors duration-700" />
                  <div className="relative z-10">
                    <h3 className="text-4xl font-black mb-6 uppercase tracking-tight">MailSense AI</h3>
                    <p className="text-neutral-300 text-lg leading-relaxed mb-8 font-light">
                      AI-powered email assistant integrating Spring Boot, React, and the Gemini API. Designed a layered backend architecture achieving sub-500ms API response times across 100+ concurrent requests.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-12">
                      {['Spring Boot', 'React', 'Gemini API'].map(t => (
                        <span key={t} className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold tracking-widest border border-white/5 uppercase">{t}</span>
                      ))}
                    </div>
                  </div>
                  <a href="https://github.com/AyushSinha2603/MailSense-AI" target="_blank" rel="noopener noreferrer" className="relative z-10 inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-white text-black font-black uppercase tracking-[0.2em] text-sm rounded-full hover:bg-cyan-400 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]">
                    View Source <Code className="w-5 h-5 ml-3" />
                  </a>
                </motion.div>

                {/* 2. Opening Forge */}
                <motion.div variants={fadeUp} className="p-12 rounded-[3rem] border border-white/5 bg-black/60 backdrop-blur-3xl hover:border-cyan-500/30 transition-all duration-500 group overflow-hidden relative shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col justify-between min-h-[500px]">
                  <Database className="absolute -right-10 -bottom-10 w-96 h-96 text-white/5 group-hover:text-cyan-500/10 transition-colors duration-700" />
                  <div className="relative z-10">
                    <h3 className="text-4xl font-black mb-6 uppercase tracking-tight">Opening Forge</h3>
                    <p className="text-neutral-300 text-lg leading-relaxed mb-8 font-light">
                      Chess opening analysis system with an optimized data model recognizing over 3,700 unique openings via Lichess ECO dataset.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-12">
                      {['Data Modeling', 'FEN', 'Chess'].map(t => (
                        <span key={t} className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold tracking-widest border border-white/5 uppercase">{t}</span>
                      ))}
                    </div>
                  </div>
                  <a href="https://github.com/AyushSinha2603/opening-forge" target="_blank" rel="noopener noreferrer" className="relative z-10 inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-white text-black font-black uppercase tracking-[0.2em] text-sm rounded-full hover:bg-cyan-400 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]">
                    View Source <Code className="w-5 h-5 ml-3" />
                  </a>
                </motion.div>

                {/* 3. Sleepyhead Studios */}
                <motion.div variants={fadeUp} className="p-12 rounded-[3rem] border border-white/5 bg-black/60 backdrop-blur-3xl hover:border-cyan-500/30 transition-all duration-500 group overflow-hidden relative shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col justify-between min-h-[400px]">
                  <Layout className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5 group-hover:text-cyan-500/10 transition-colors duration-700" />
                  <div className="relative z-10">
                    <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">Sleepyhead Studios</h3>
                    <p className="text-neutral-300 text-base leading-relaxed mb-8 font-light">
                      Official landing platform utilizing Next.js 14, React 19, and Framer Motion. Leveraged Server Components to optimize rendering performance.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-12">
                      <span className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold tracking-widest border border-white/5 uppercase">Next.js</span>
                    </div>
                  </div>
                  <a href="https://github.com/AyushSinha2603/sh-website" target="_blank" rel="noopener noreferrer" className="relative z-10 flex items-center text-sm font-black uppercase tracking-[0.2em] text-white hover:text-cyan-400 transition-colors w-max">
                    Live Demo <ExternalLink className="w-4 h-4 ml-3" />
                  </a>
                </motion.div>

                {/* 4. Cineverse */}
                <motion.div variants={fadeUp} className="p-12 rounded-[3rem] border border-white/5 bg-black/60 backdrop-blur-3xl hover:border-cyan-500/30 transition-all duration-500 group overflow-hidden relative shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col justify-between min-h-[400px]">
                  <Layout className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5 group-hover:text-cyan-500/10 transition-colors duration-700" />
                  <div className="relative z-10">
                    <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">Cineverse</h3>
                    <p className="text-neutral-300 text-base leading-relaxed mb-8 font-light">
                      A modern movie discovery app built with React, Appwrite, and TMDB API for dynamic UI rendering.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-12">
                      <span className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold tracking-widest border border-white/5 uppercase">React</span>
                      <span className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold tracking-widest border border-white/5 uppercase">TMDB</span>
                    </div>
                  </div>
                  <a href="https://github.com/AyushSinha2603/cineverse" target="_blank" rel="noopener noreferrer" className="relative z-10 flex items-center text-sm font-black uppercase tracking-[0.2em] text-white hover:text-cyan-400 transition-colors w-max">
                    View Source <Code className="w-4 h-4 ml-3" />
                  </a>
                </motion.div>

                {/* 5. Accident Prediction Model */}
                <motion.div variants={fadeUp} className="md:col-span-2 p-12 rounded-[3rem] border border-white/5 bg-black/60 backdrop-blur-3xl hover:border-cyan-500/30 transition-all duration-500 group overflow-hidden relative shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col md:flex-row justify-between items-center min-h-[300px]">
                  <Activity className="absolute -left-10 -bottom-10 w-96 h-96 text-white/5 group-hover:text-cyan-500/10 transition-colors duration-700" />
                  <div className="relative z-10 max-w-xl mb-8 md:mb-0">
                    <h3 className="text-4xl font-black mb-6 uppercase tracking-tight">Accident Prediction</h3>
                    <p className="text-neutral-300 text-lg leading-relaxed mb-8 font-light">
                      Machine learning system predicting accident severity, trained on 300,000+ real-world traffic records.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold tracking-widest border border-white/5 uppercase">Python</span>
                      <span className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold tracking-widest border border-white/5 uppercase">ML</span>
                    </div>
                  </div>
                  <a href="https://github.com/AyushSinha2603/Traffic-Accident-Severity-Prediction" target="_blank" rel="noopener noreferrer" className="relative z-10 inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white text-white font-black uppercase tracking-[0.2em] text-sm rounded-full hover:bg-white hover:text-black transition-colors">
                    View Source <Code className="w-5 h-5 ml-3" />
                  </a>
                </motion.div>

                {/* 6. Odd Even Policy Analysis */}
                <motion.div variants={fadeUp} className="md:col-span-2 p-12 rounded-[3rem] border border-white/5 bg-black/60 backdrop-blur-3xl hover:border-cyan-500/30 transition-all duration-500 group overflow-hidden relative shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col md:flex-row-reverse justify-between items-center min-h-[300px]">
                  <Rocket className="absolute -right-10 -bottom-10 w-96 h-96 text-white/5 group-hover:text-cyan-500/10 transition-colors duration-700" />
                  <div className="relative z-10 max-w-xl mb-8 md:mb-0 md:text-right">
                    <h3 className="text-4xl font-black mb-6 uppercase tracking-tight">Odd Even Policy</h3>
                    <p className="text-neutral-300 text-lg leading-relaxed mb-8 font-light">
                      Data analysis project evaluating the impact of Delhi's Odd-Even traffic policy on air pollution levels using real-world datasets, scientific computing, and visualization.
                    </p>
                    <div className="flex flex-wrap md:justify-end gap-3">
                      {['Python', 'Data Science', 'Analysis'].map(t => (
                        <span key={t} className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold tracking-widest border border-white/5 uppercase">{t}</span>
                      ))}
                    </div>
                  </div>
                  <a href="https://github.com/AyushSinha2603/Odd-Even-Policy" target="_blank" rel="noopener noreferrer" className="relative z-10 inline-flex items-center justify-center px-8 py-4 bg-white text-black font-black uppercase tracking-[0.2em] text-sm rounded-full hover:bg-cyan-400 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]">
                    View Source <Code className="w-5 h-5 ml-3" />
                  </a>
                </motion.div>

              </div>
            </motion.div>
          </section>

          {/* Section 4: Massive Animated Footer */}
          <section className="min-h-screen relative flex flex-col justify-center overflow-hidden bg-transparent pt-24 pb-12 mt-24">
            <div className="max-w-7xl mx-auto w-full px-8 lg:px-24 relative z-10 flex flex-col items-center text-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-12">
                <motion.h2 variants={fadeUp} className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-none drop-shadow-2xl">
                  Got an idea? <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_40px_rgba(34,211,238,0.3)]">Let's Talk.</span>
                </motion.h2>

                <motion.div variants={fadeUp} className="max-w-3xl mx-auto">
                  <p className="text-2xl md:text-4xl text-neutral-300 font-light leading-relaxed tracking-wide">
                    I'm always open to discussing new projects, creative ideas, or opportunities.
                  </p>
                </motion.div>

                <motion.div variants={fadeUp} className="flex justify-center pt-16">
                  <a href="mailto:ayushsinha@example.com" className="group relative flex items-center justify-center px-16 py-8 bg-white text-black font-black uppercase tracking-[0.3em] text-2xl rounded-[3rem] overflow-hidden hover:scale-105 transition-transform shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:shadow-[0_0_80px_rgba(34,211,238,0.6)]">
                    <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                    <span className="relative z-10 flex items-center"><Mail className="w-8 h-8 mr-6" /> Say Hello</span>
                  </a>
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-between items-center gap-8 pt-32 w-full mt-32 border-t border-white/10 pb-8">
                  <div className="flex gap-12 items-center">
                    <a href="https://github.com/AyushSinha2603" target="_blank" rel="noopener noreferrer" className="text-3xl md:text-5xl font-black uppercase tracking-tight hover:text-cyan-400 transition-colors drop-shadow-md">GitHub</a>
                    <a href="https://linkedin.com/in/ayush-sinha-70046a319/" target="_blank" rel="noopener noreferrer" className="text-3xl md:text-5xl font-black uppercase tracking-tight hover:text-cyan-400 transition-colors drop-shadow-md">LinkedIn</a>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl text-neutral-300 uppercase tracking-widest font-black">Open to Opportunities</p>
                    <p className="text-sm text-neutral-500 font-mono mt-4 uppercase tracking-[0.2em]">© {new Date().getFullYear()} Ayush Sinha. Built with Next.js.</p>
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
