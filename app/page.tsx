"use client";

import LenisProvider from "@/components/LenisProvider";
import MorphSection from '@/components/MorphSection';
import { Code, Mail, Briefcase, ExternalLink, Activity, Database, Layout, Server, GitMerge, ChevronDown, Rocket, Map, Users, Crown, Gamepad2, X, Download, Terminal, Box, Layers, Globe, GitBranch, Send, Cpu, Monitor, FileJson, Hash, Network, Triangle, Sparkles, Zap, MoveVertical } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";
import F1car from '../components/F1car';
import Background3D from "@/components/Background3D";
import { motion, AnimatePresence } from "framer-motion";

import { SiTypescript, SiJavascript, SiPython, SiHtml5, SiCss, SiSpringboot, SiNodedotjs, SiPostgresql, SiGit, SiPostman, SiUbuntu, SiVercel, SiReact, SiNextdotjs, SiVite, SiTailwindcss, SiGreensock, SiFramer } from "react-icons/si";
import { FaDatabase, FaNetworkWired, FaJava } from "react-icons/fa";
import { TbLayoutAlignTop, TbBrandCSharp } from "react-icons/tb";

import { useState, useEffect } from "react";
import ContactForm from "@/components/ContactForm";

const fadeUp: any = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    // Disable browser's default scroll restoration behavior
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // Force scroll to top on page load/refresh
    window.scrollTo(0, 0);
  }, []);

  return (
    <LenisProvider>
      <main className="relative bg-black text-white w-full overflow-x-hidden font-sans">
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
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] bg-white/10 blur-[200px] rounded-full pointer-events-none z-0"></div>

        {/* Scrollable Content Overlay */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          
          {/* Section 1: Hero */}
          <MorphSection>
<section className="min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center p-8 pb-0 md:pb-8 lg:p-24 relative">
            <motion.div 
              initial="hidden" animate="visible" variants={staggerContainer}
              className="max-w-5xl w-full text-center space-y-6 mix-blend-difference"
            >
              <motion.h1 variants={fadeUp} className="text-7xl md:text-9xl lg:text-[12rem] font-black tracking-tighter uppercase leading-none drop-shadow-2xl">
                Ayush <br/> Sinha
              </motion.h1>
              <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-center justify-center gap-4 text-2xl md:text-4xl font-black tracking-[0.2em] uppercase mt-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500 drop-shadow-lg">
                <span>Software Engineer</span>
              </motion.div>
              <motion.div variants={fadeUp} className="pt-8 text-neutral-300 font-light text-xl max-w-2xl mx-auto space-y-4 tracking-wide">
                <p>Designing Systems. Building the Future.</p>
              </motion.div>
            </motion.div>
          </section>
</MorphSection>

          {/* Section 1.5: About Me */}
          <MorphSection>
<section className="flex items-center justify-center pt-8 pb-24 px-6 md:p-4 md:py-24 lg:p-12 xl:p-24 relative z-10 mt-0">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="max-w-7xl w-full relative z-10 mx-auto"
            >
                <motion.div variants={fadeUp} className="p-8 md:p-12 lg:p-16 rounded-[3rem] border border-white/5 bg-black/40 backdrop-blur-3xl shadow-[0_0_40px_rgba(0,0,0,1)] hover:border-white/30 transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] hover:rotate-1 z-10 hover:z-50 group flex flex-col lg:flex-row gap-16 lg:gap-24 items-center relative overflow-hidden w-full">
                  
                  {/* Photo */}
                  <div className="relative flex justify-center shrink-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[24rem] md:h-[24rem] bg-white/10 blur-3xl rounded-full z-0 opacity-60 transition-transform group-hover:scale-125 duration-700"></div>
                    <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 shrink-0 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.1)] group-hover:border-white/30 transition-colors duration-500">
                      <img src="/image/profilepic.jpeg" alt="Ayush Sinha" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale" />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="space-y-8 text-lg md:text-xl text-neutral-400 font-light leading-relaxed tracking-wide flex-1 relative z-10 w-full">
                    <p className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-snug">
                      Software Engineer.<br/>
                      <span className="text-neutral-400 font-light text-xl md:text-2xl tracking-widest">NIT Rourkela '27.</span>
                    </p>
                    <div className="h-px w-full bg-white/10 my-6"></div>
                    <p className="leading-relaxed text-neutral-300">
                      I don’t just build applications; I <span className="text-white font-medium">engineer them for scale.</span>
                    </p>
                    <p className="leading-relaxed text-neutral-300">
                      <span className="text-white font-medium">My focus?</span> Constructing high-performance backend systems with Java and Spring Boot.
                    </p>
                    <p className="leading-relaxed text-neutral-300">
                      <span className="text-white font-medium">My passion?</span> Crafting clean, efficient architecture that drives modern, lightning-fast web experiences with Next.js.
                    </p>
                    <div className="h-px w-full bg-white/10 my-6"></div>
                    <p className="leading-relaxed text-neutral-300">
                      Beyond the IDE, I thrive on the <span className="text-white font-medium">strategy of the chessboard</span>, the <span className="text-white font-medium">precision of F1</span>, and the <span className="text-white font-medium">creative perspective of photography.</span>
                    </p>
                  </div>
                </motion.div>
            </motion.div>
          </section>
</MorphSection>

          {/* Section 2: Dashboard */}
          <MorphSection>
<section className="min-h-[70vh] flex items-center justify-center py-24 px-6 md:p-4 lg:p-12 xl:p-24 relative">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="max-w-7xl w-full relative z-10 mx-auto"
            >
              <motion.h2 variants={fadeUp} className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-16 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 md:to-neutral-800 drop-shadow-2xl">
                Tech Stack
              </motion.h2>

              {/* Tech Stack (Glassmorphism Cards) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                {/* Languages */}
                <motion.div variants={fadeUp} className="p-8 lg:p-10 rounded-[3rem] border border-white/5 bg-black/60 backdrop-blur-3xl hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] z-10 hover:z-50 group flex flex-col relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,1)] min-h-[420px]">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-150"></div>
                  <div className="flex items-center gap-4 mb-8 relative z-10">
                    <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-colors shadow-lg">
                      <Code className="w-6 h-6 text-white"/>
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-widest text-white">Languages</h3>
                  </div>
                  <div className="flex flex-wrap gap-3 relative z-10 w-full">
                    {[
                      { name: 'Java', icon: <FaJava className="w-4 h-4" /> },
                      { name: 'TypeScript', icon: <SiTypescript className="w-4 h-4" /> },
                      { name: 'JavaScript', icon: <SiJavascript className="w-4 h-4" /> },
                      { name: 'Python', icon: <SiPython className="w-4 h-4" /> },
                      { name: 'C#' },
                      { name: 'SQL', icon: <FaDatabase className="w-4 h-4" /> },
                      { name: 'HTML5', icon: <SiHtml5 className="w-4 h-4" /> },
                      { name: 'CSS3', icon: <SiCss className="w-4 h-4" /> }
                    ].map(t => (
                      <div key={t.name} className="flex items-center gap-2 px-4 py-3 bg-white/5 rounded-2xl text-xs font-bold tracking-widest border border-white/10 uppercase text-neutral-400 hover:border-white/50 hover:text-white hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300 cursor-default group/skill">
                        {t.icon && <span className="text-white/50 group-hover/skill:text-white transition-colors duration-300">{t.icon}</span>}
                        <span>{t.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Backend & Infrastructure */}
                <motion.div variants={fadeUp} className="p-8 lg:p-10 rounded-[3rem] border border-white/5 bg-black/60 backdrop-blur-3xl hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] z-10 hover:z-50 group flex flex-col relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,1)] min-h-[420px]">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-150"></div>
                  <div className="flex items-center gap-4 mb-8 relative z-10">
                    <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-colors shadow-lg">
                      <Server className="w-6 h-6 text-white"/>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-black uppercase tracking-widest text-white">Backend & Infra</h3>
                  </div>
                  <div className="flex flex-wrap gap-3 relative z-10 w-full">
                    {[
                      { name: 'Spring Boot', icon: <SiSpringboot className="w-4 h-4" /> },
                      { name: 'Node.js', icon: <SiNodedotjs className="w-4 h-4" /> },
                      { name: 'PostgreSQL', icon: <SiPostgresql className="w-4 h-4" /> },
                      { name: 'REST APIs', icon: <FaNetworkWired className="w-4 h-4" /> },
                      { name: 'Git', icon: <SiGit className="w-4 h-4" /> },
                      { name: 'Postman', icon: <SiPostman className="w-4 h-4" /> },
                      { name: 'Vercel', icon: <SiVercel className="w-4 h-4" /> }
                    ].map(t => (
                      <div key={t.name} className="flex items-center gap-2 px-4 py-3 bg-white/5 rounded-2xl text-xs font-bold tracking-widest border border-white/10 uppercase text-neutral-400 hover:border-white/50 hover:text-white hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300 cursor-default group/skill">
                        {t.icon && <span className="text-white/50 group-hover/skill:text-white transition-colors duration-300">{t.icon}</span>}
                        <span>{t.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Frontend & UI */}
                <motion.div variants={fadeUp} className="p-8 lg:p-10 rounded-[3rem] border border-white/5 bg-black/60 backdrop-blur-3xl hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] z-10 hover:z-50 group flex flex-col relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,1)] min-h-[420px]">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-150"></div>
                  <div className="flex items-center gap-4 mb-8 relative z-10">
                    <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-colors shadow-lg">
                      <Monitor className="w-6 h-6 text-white"/>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-black uppercase tracking-widest text-white">Frontend & UI</h3>
                  </div>
                  <div className="flex flex-wrap gap-3 relative z-10 w-full">
                    {[
                      { name: 'React', icon: <SiReact className="w-4 h-4" /> },
                      { name: 'Next.js', icon: <SiNextdotjs className="w-4 h-4" /> },
                      { name: 'Vite', icon: <SiVite className="w-4 h-4" /> },
                      { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-4 h-4" /> },
                      { name: 'GSAP', icon: <SiGreensock className="w-4 h-4" /> },
                      { name: 'Framer Motion', icon: <SiFramer className="w-4 h-4" /> },
                      { name: 'Lenis', icon: <TbLayoutAlignTop className="w-4 h-4" /> }
                    ].map(t => (
                      <div key={t.name} className="flex items-center gap-2 px-4 py-3 bg-white/5 rounded-2xl text-xs font-bold tracking-widest border border-white/10 uppercase text-neutral-400 hover:border-white/50 hover:text-white hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300 cursor-default group/skill">
                        {t.icon && <span className="text-white/50 group-hover/skill:text-white transition-colors duration-300">{t.icon}</span>}
                        <span>{t.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>\n            </motion.div>\n          </section>\n</MorphSection>

          {/* Section 3: Projects */}
          <MorphSection>
            <section className="min-h-[70vh] flex flex-col items-center justify-center py-24 px-6 md:p-4 lg:p-12 xl:p-24 relative">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl w-full">
                <motion.h2 variants={fadeUp} className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-16 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 md:to-neutral-800 drop-shadow-2xl">
                  Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  {/* MailSense AI */}
                  <motion.div variants={fadeUp} className="p-8 lg:p-10 rounded-[3rem] border border-white/5 bg-black/60 backdrop-blur-3xl hover:border-white/30 transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] z-10 hover:z-50 group flex flex-col justify-between relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,1)] min-h-[400px]">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-150"></div>
                    <div className="relative z-10 h-full flex flex-col">
                      <div>
                        <div className="flex justify-between items-start mb-8">
                          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:border-white/50 transition-colors"><Server className="text-white w-6 h-6" /></div>
                          <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest bg-white/20 text-white px-3 py-2 rounded-full border border-white/20 text-center">Backend & AI</span>
                        </div>
                        <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-white">MailSense AI</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed font-light mb-6">
                          A sophisticated Spring Boot architecture utilizing advanced AI models to categorize, summarize, and auto-reply to complex email threads.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                          {['Java', 'Spring Boot', 'Spring AI', 'Next.js', 'Gemini'].map(tag => (
                             <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full text-neutral-300">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <a href="https://github.com/AyushSinha2603/MailSense-AI" target="_blank" rel="noopener noreferrer" className="relative z-10 mt-auto inline-flex items-center text-sm font-black uppercase tracking-[0.2em] text-white hover:text-neutral-400 transition-colors w-max">
                        View Code <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </motion.div>

                  {/* Opening Forge */}
                  <motion.div variants={fadeUp} className="p-8 lg:p-10 rounded-[3rem] border border-white/5 bg-black/60 backdrop-blur-3xl hover:border-white/30 transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] z-10 hover:z-50 group flex flex-col justify-between relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,1)] min-h-[400px]">
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mb-20 transition-transform group-hover:scale-150"></div>
                    <div className="relative z-10 h-full flex flex-col">
                      <div>
                        <div className="flex justify-between items-start mb-8">
                          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:border-white/50 transition-colors"><Layout className="text-white w-6 h-6" /></div>
                          <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest bg-white/20 text-white px-3 py-2 rounded-full border border-white/20 text-center">Open Source & ML</span>
                        </div>
                        <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-white">Opening Forge</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed font-light mb-6">
                          Chess opening preparation tool serving active players with real-time stats and dynamic game analysis.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                          {['Python', 'Python-Chess', 'Numpy', 'Zstandard', 'Tqdm', 'Pytest'].map(tag => (
                             <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full text-neutral-300">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <a href="https://github.com/AyushSinha2603/opening-forge" target="_blank" rel="noopener noreferrer" className="relative z-10 mt-auto inline-flex items-center text-sm font-black uppercase tracking-[0.2em] text-white hover:text-neutral-400 transition-colors w-max">
                        View Project <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </motion.div>

                  {/* Sleepyhead Studios */}
                  <motion.div variants={fadeUp} className="p-8 lg:p-10 rounded-[3rem] border border-white/5 bg-black/60 backdrop-blur-3xl hover:border-white/30 transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] z-10 hover:z-50 group flex flex-col justify-between relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,1)] min-h-[400px]">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-20 -mt-20 transition-transform group-hover:scale-150"></div>
                    <div className="relative z-10 h-full flex flex-col">
                      <div>
                        <div className="flex justify-between items-start mb-8">
                          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:border-white/50 transition-colors"><Globe className="text-white w-6 h-6" /></div>
                          <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest bg-white/20 text-white px-3 py-2 rounded-full border border-white/20 text-center">Web Platform</span>
                        </div>
                        <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-white">Sleepyhead Studios</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed font-light mb-6">
                          Deployed site and backend architecture for an indie game development studio, optimizing content delivery.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                          {['Next.js', 'Tailwind', 'Framer Motion', 'Lenis'].map(tag => (
                             <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full text-neutral-300">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <a href="#" className="relative z-10 mt-auto inline-flex items-center text-sm font-black uppercase tracking-[0.2em] text-white hover:text-neutral-400 transition-colors w-max">
                        View Live <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </motion.div>

                  {/* Cineverse */}
                  <motion.div variants={fadeUp} className="p-8 lg:p-10 rounded-[3rem] border border-white/5 bg-black/60 backdrop-blur-3xl hover:border-white/30 transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] z-10 hover:z-50 group flex flex-col justify-between relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,1)] min-h-[400px]">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-150"></div>
                    <div className="relative z-10 h-full flex flex-col">
                      <div>
                        <div className="flex justify-between items-start mb-8">
                          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:border-white/50 transition-colors"><Layout className="text-white w-6 h-6" /></div>
                          <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest bg-white/20 text-white px-3 py-2 rounded-full border border-white/20 text-center">Web App</span>
                        </div>
                        <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-white">Cineverse</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed font-light mb-6">
                          A modern movie discovery app built with React, Appwrite, and TMDB API for dynamic UI rendering.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                          {['React', 'Tailwind', 'Appwrite', 'TMDB'].map(tag => (
                             <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full text-neutral-300">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <a href="https://github.com/AyushSinha2603/cineverse" target="_blank" rel="noopener noreferrer" className="relative z-10 mt-auto inline-flex items-center text-sm font-black uppercase tracking-[0.2em] text-white hover:text-neutral-400 transition-colors w-max">
                        View Source <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </motion.div>

                  {/* Accident Prediction */}
                  <motion.div variants={fadeUp} className="p-8 lg:p-10 rounded-[3rem] border border-white/5 bg-black/60 backdrop-blur-3xl hover:border-white/30 transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] z-10 hover:z-50 group flex flex-col justify-between relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,1)] min-h-[400px]">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-150"></div>
                    <div className="relative z-10 h-full flex flex-col">
                      <div>
                        <div className="flex justify-between items-start mb-8">
                          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:border-white/50 transition-colors"><Database className="text-white w-6 h-6" /></div>
                          <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest bg-white/20 text-white px-3 py-2 rounded-full border border-white/20 text-center">Data & ML</span>
                        </div>
                        <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-white">Accident Prediction</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed font-light mb-6">
                          Machine learning models predicting traffic accident severity and frequency based on historical geospatial data, weather conditions, and time series analysis.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                          {['Python', 'NumPy', 'Pandas', 'Scikit-Learn', 'XGBoost', 'TensorFlow', 'Keras'].map(tag => (
                             <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full text-neutral-300">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <a href="https://github.com/AyushSinha2603/Traffic-Accident-Severity-Prediction" target="_blank" rel="noopener noreferrer" className="relative z-10 mt-auto inline-flex items-center text-sm font-black uppercase tracking-[0.2em] text-white hover:text-neutral-400 transition-colors w-max">
                        View Models <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </motion.div>

                  {/* Odd-Even Policy Analysis */}
                  <motion.div variants={fadeUp} className="p-8 lg:p-10 rounded-[3rem] border border-white/5 bg-black/60 backdrop-blur-3xl hover:border-white/30 transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] z-10 hover:z-50 group flex flex-col justify-between relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,1)] min-h-[400px]">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-150"></div>
                    <div className="relative z-10 h-full flex flex-col">
                      <div>
                        <div className="flex justify-between items-start mb-8">
                          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:border-white/50 transition-colors"><Activity className="text-white w-6 h-6" /></div>
                          <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest bg-white/20 text-white px-3 py-2 rounded-full border border-white/20 text-center">Data & ML</span>
                        </div>
                        <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-white">Odd Even Policy</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed font-light mb-6">
                          Comprehensive statistical analysis and visualization of traffic flow and emission reductions during the Odd-Even vehicle rationing policy implementation.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                          {['Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'].map(tag => (
                             <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full text-neutral-300">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <a href="https://github.com/AyushSinha2603/Odd-Even-Policy" target="_blank" rel="noopener noreferrer" className="relative z-10 mt-auto inline-flex items-center text-sm font-black uppercase tracking-[0.2em] text-white hover:text-neutral-400 transition-colors w-max">
                        View Research <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </motion.div>

                </div>
              </motion.div>
            </section>
          </MorphSection>

          {/* Section 3.5: Open Source */}
          <MorphSection>
            <section className="min-h-[50vh] flex items-center justify-center p-4 lg:p-12 xl:p-24 relative">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/[0.02] via-transparent to-transparent"></div>
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
                className="max-w-7xl w-full space-y-12 z-10"
              >
                <div className="flex justify-end w-full">
                  <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight uppercase flex items-center gap-4">
                    Open Source <span className="w-12 h-2 bg-white block"></span>
                  </motion.h2>
                </div>

                <div className="flex justify-end w-full">
                  <div className="w-full max-w-3xl">
                  {/* Lichess */}
                  <motion.div variants={fadeUp} className="p-8 lg:p-10 rounded-[3rem] border border-white/5 bg-black/60 backdrop-blur-3xl hover:border-white/30 transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] z-10 hover:z-50 group flex flex-col justify-between relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,1)] min-h-[300px]">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-150"></div>
                    <div className="relative z-10 h-full flex flex-col">
                      <div>
                        <div className="flex justify-between items-start mb-8">
                          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:border-white/50 transition-colors"><GitMerge className="text-white w-6 h-6" /></div>
                          <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest bg-white/20 text-white px-3 py-2 rounded-full border border-white/20 text-center">Merged PRs</span>
                        </div>
                        <h3 className="text-2xl font-black mb-4 tracking-tight text-white">lichess-org / chess-openings</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed font-light mb-6">
                          Improved opening classification and transposition mapping for Lichess, one of the largest open-source chess platforms.
                        </p>
                      </div>
                      <a href="https://github.com/lichess-org/chess-openings" target="_blank" rel="noopener noreferrer" className="relative z-10 mt-auto inline-flex items-center text-sm font-black uppercase tracking-[0.2em] text-white hover:text-neutral-400 transition-colors w-max">
                        View Impact <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </motion.div>
                  </div>
                </div>

              </motion.div>
            </section>
          </MorphSection>

          {/* Section 4: Sleek Animated Footer */}
          <MorphSection>
            <section className="relative flex flex-col justify-center bg-transparent py-16">
              <div className="max-w-7xl mx-auto w-full px-8 lg:px-24 relative z-10 flex flex-col items-center text-center">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8">
                  <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none drop-shadow-2xl">
                    Got an idea? <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500 drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]">Let's Talk.</span>
                  </motion.h2>

                  <motion.div variants={fadeUp} className="max-w-3xl mx-auto">
                    <p className="text-lg md:text-2xl text-neutral-300 font-light leading-relaxed tracking-wide">
                      I'm always open to discussing new projects, creative ideas, or opportunities.
                    </p>
                  </motion.div>

                  <motion.div variants={fadeUp} className="flex justify-center pt-8">
                    <button onClick={() => setIsContactModalOpen(true)} className="group relative flex items-center justify-center px-12 py-6 bg-white text-black font-black uppercase tracking-[0.3em] text-lg rounded-full overflow-hidden hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] cursor-pointer outline-none border-none">
                      <div className="absolute inset-0 bg-neutral-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                      <span className="relative z-10 flex items-center"><Mail className="w-6 h-6 mr-4" /> Let's Collaborate</span>
                    </button>
                  </motion.div>

                  <motion.div variants={fadeUp} className="flex flex-col justify-center items-center gap-8 pt-12 w-full mt-16 border-t border-white/10 pb-8">
                    <div className="flex gap-8 items-center flex-wrap justify-center">
                      <a href="https://github.com/AyushSinha2603" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-black uppercase tracking-tight hover:text-neutral-400 transition-colors drop-shadow-md">GitHub</a>
                      <a href="https://linkedin.com/in/ayush-sinha-70046a319/" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-black uppercase tracking-tight hover:text-neutral-400 transition-colors drop-shadow-md">LinkedIn</a>
                      <button onClick={() => setIsResumeModalOpen(true)} className="text-xl md:text-2xl font-black uppercase tracking-tight hover:text-neutral-400 transition-colors drop-shadow-md cursor-pointer bg-transparent border-none outline-none">Resume</button>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </section>
          </MorphSection>
        </div>

        {/* Contact Form Modal */}
        <AnimatePresence>
          {isContactModalOpen && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            >
              <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsContactModalOpen(false)}></div>
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
                className="relative z-10 w-full max-w-2xl bg-black/90 border border-white/10 p-8 sm:p-16 rounded-[3rem] shadow-[0_0_80px_rgba(255,255,255,0.4)]"
              >
                <button onClick={() => setIsContactModalOpen(false)} className="absolute top-8 right-8 p-4 bg-white/5 hover:bg-white/20 rounded-full transition-colors text-white hover:text-neutral-400">
                  <X className="w-6 h-6" />
                </button>
                <h3 className="text-4xl font-black uppercase tracking-widest text-white mb-8">Send a Message</h3>
                <div className="flex flex-col gap-4 [&_input]:w-full [&_input]:p-6 [&_input]:bg-white/5 [&_input]:border [&_input]:border-white/10 [&_input]:rounded-2xl [&_input]:text-white [&_input]:font-sans [&_input]:font-bold [&_input]:tracking-widest [&_input]:focus:border-white [&_input]:outline-none [&_textarea]:w-full [&_textarea]:p-6 [&_textarea]:bg-white/5 [&_textarea]:border [&_textarea]:border-white/10 [&_textarea]:rounded-2xl [&_textarea]:text-white [&_textarea]:font-sans [&_textarea]:font-bold [&_textarea]:tracking-widest [&_textarea]:focus:border-white [&_textarea]:outline-none [&_textarea]:min-h-[200px] [&_button]:w-full [&_button]:mt-8 [&_button]:py-6 [&_button]:bg-white [&_button]:text-black [&_button]:font-black [&_button]:uppercase [&_button]:tracking-[0.2em] [&_button]:rounded-2xl hover:[&_button]:bg-neutral-400 [&_button]:transition-colors [&_button]:cursor-pointer [&_p]:mt-4 [&_p]:text-center [&_p]:text-white [&_p]:font-bold [&_p]:tracking-widest [&_p]:uppercase">
                  <ContactForm />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Resume Modal */}
        <AnimatePresence>
          {isResumeModalOpen && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            >
              <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsResumeModalOpen(false)}></div>
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
                className="relative z-10 w-[calc(100vw-2rem)] md:w-[calc(95vh*0.707)] max-w-none h-[95vh] bg-black/90 border border-white/10 p-2 sm:p-6 rounded-[2rem] shadow-[0_0_80px_rgba(255,255,255,0.4)] flex flex-col"
              >
                <div className="flex justify-between items-center mb-4 px-2">
                  <h3 className="text-xl font-black uppercase tracking-widest text-white">Resume</h3>
                  <div className="flex gap-4">
                    <a href="/resume/123CE0125_AyushSinha.pdf" download="AyushSinha_Resume.pdf" className="p-2 bg-white/5 hover:bg-white/20 rounded-full transition-colors text-white hover:text-neutral-400 cursor-pointer outline-none flex items-center justify-center">
                      <Download className="w-5 h-5" />
                    </a>
                    <button onClick={() => setIsResumeModalOpen(false)} className="p-2 bg-white/5 hover:bg-white/20 rounded-full transition-colors text-white hover:text-neutral-400 cursor-pointer outline-none flex items-center justify-center">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="flex-grow w-full rounded-xl overflow-hidden border border-white/10 bg-white/5 relative">
                  <iframe src="/resume/123CE0125_AyushSinha.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH" className="absolute inset-0 w-full h-full border-none" title="Resume PDF" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </LenisProvider>
  );
}
