import LenisProvider from "@/components/LenisProvider";
import Background3D from "@/components/Background3D";
import { Code, Mail, Briefcase, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <LenisProvider>
      <main className="relative bg-transparent text-white w-full overflow-hidden font-sans">
        <Background3D />
        
        {/* Scrollable Content Overlay */}
        <div className="relative z-10 w-full">
          {/* Section 1: Hero */}
          <section className="min-h-screen flex flex-col items-center justify-center p-8 lg:p-24">
            <div className="max-w-5xl w-full text-center space-y-6">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-500">
                Architect.OS
              </h1>
              <p className="text-2xl md:text-4xl font-light tracking-widest text-neutral-300 uppercase">
                Software Engineer
              </p>
            </div>
          </section>

          {/* Section 2: Tech Stack */}
          <section className="min-h-screen flex items-center justify-center p-8 lg:p-24 bg-black/20 backdrop-blur-sm">
            <div className="max-w-6xl w-full space-y-12">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase border-b border-white/20 pb-4">
                01 / Tech Stack
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                {[
                  { name: "Java", desc: "Enterprise applications & high-performance backend systems." },
                  { name: "Spring Boot", desc: "Robust microservices architecture and RESTful APIs." },
                  { name: "React / Next.js", desc: "Interactive, scalable frontend web interfaces." },
                  { name: "Python", desc: "Data processing, Machine Learning & Automation scripts." }
                ].map((tech) => (
                  <div key={tech.name} className="p-8 border border-white/10 rounded-none bg-white/5 hover:bg-white/10 transition duration-300">
                    <h3 className="text-3xl font-semibold mb-2">{tech.name}</h3>
                    <p className="text-neutral-400 text-lg leading-relaxed">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Open Source & Production */}
          <section className="min-h-screen flex items-center justify-center p-8 lg:p-24">
            <div className="max-w-6xl w-full space-y-12">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase border-b border-white/20 pb-4">
                02 / Open Source & Prod
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Lichess DB", tag: "Open Source", desc: "Contributions to the open source Lichess database infrastructure and tools." },
                  { title: "Opening Forge", tag: "Production", desc: "Chess opening preparation tool serving active players with real-time stats." },
                  { title: "Sleepyhead Studios", tag: "Deployed", desc: "Deployed site and backend architecture for an indie game development studio." }
                ].map((item) => (
                  <div key={item.title} className="flex flex-col justify-between p-8 border border-white/10 bg-black/40 backdrop-blur-md hover:border-cyan-400/50 transition-colors duration-500 min-h-[300px]">
                    <div>
                      <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-4 block">{item.tag}</span>
                      <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                      <p className="text-neutral-300">{item.desc}</p>
                    </div>
                    <div className="mt-8 flex items-center text-sm font-bold uppercase tracking-wider hover:text-cyan-400 cursor-pointer w-max">
                      View Project <ExternalLink className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4: Backend & AI */}
          <section className="min-h-screen flex items-center justify-center p-8 lg:p-24 bg-black/20 backdrop-blur-sm">
            <div className="max-w-6xl w-full flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1 space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase border-b border-white/20 pb-4">
                  03 / Architecture
                </h2>
                <div className="space-y-6">
                  <h3 className="text-5xl font-black text-cyan-400">MailSense AI</h3>
                  <p className="text-xl text-neutral-300 leading-relaxed">
                    A sophisticated Spring Boot architecture utilizing advanced AI models to categorize, summarize, and auto-reply to complex email threads. Built with scalability and security in mind.
                  </p>
                  <ul className="space-y-4 font-mono text-sm text-neutral-400">
                    <li className="flex items-center"><span className="text-cyan-400 mr-2">▹</span> Java 17 & Spring Boot 3</li>
                    <li className="flex items-center"><span className="text-cyan-400 mr-2">▹</span> LangChain4j & OpenAI Integration</li>
                    <li className="flex items-center"><span className="text-cyan-400 mr-2">▹</span> PostgreSQL & Vector Databases</li>
                  </ul>
                  <a href="#" className="inline-flex items-center px-6 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-cyan-400 transition-colors">
                    <Code className="w-5 h-5 mr-3" /> View Repository
                  </a>
                </div>
              </div>
              <div className="flex-1 w-full border border-white/10 bg-white/5 p-8 font-mono text-xs md:text-sm text-neutral-400 overflow-x-auto relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                <pre><code>{`@Service
public class EmailProcessorService {
    
    private final AiModelService aiModel;
    private final EmailRepository repo;

    @Transactional
    public void processIncoming(Email e) {
        // 1. Vectorize Content
        Vector embedding = aiModel.embed(e.getBody());
        
        // 2. Semantic Analysis
        Classification category = aiModel.classify(e);
        
        // 3. Automated Action
        if(category.isActionable()) {
            repo.save(e.withTag(category));
            triggerWorkflow(e);
        }
    }
}`}</code></pre>
              </div>
            </div>
          </section>

          {/* Section 5: Data & ML */}
          <section className="min-h-screen flex flex-col justify-center p-8 lg:p-24">
            <div className="max-w-6xl w-full mx-auto space-y-12">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase border-b border-white/20 pb-4">
                04 / Data & ML
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-12 border border-white/10 bg-black/40 backdrop-blur-sm group hover:border-white/30 transition duration-500">
                  <div className="text-4xl font-light mb-6 text-neutral-500 group-hover:text-white transition-colors">01</div>
                  <h3 className="text-3xl font-bold mb-4">Odd-Even Policy Analysis</h3>
                  <p className="text-neutral-400 leading-relaxed mb-8">
                    Comprehensive statistical analysis and visualization of traffic flow and emission reductions during the Odd-Even vehicle rationing policy implementation.
                  </p>
                  <div className="flex gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400">
                    <span>Pandas</span>
                    <span>•</span>
                    <span>Matplotlib</span>
                    <span>•</span>
                    <span>Jupyter</span>
                  </div>
                </div>
                <div className="p-12 border border-white/10 bg-black/40 backdrop-blur-sm group hover:border-white/30 transition duration-500">
                  <div className="text-4xl font-light mb-6 text-neutral-500 group-hover:text-white transition-colors">02</div>
                  <h3 className="text-3xl font-bold mb-4">Accident Prediction</h3>
                  <p className="text-neutral-400 leading-relaxed mb-8">
                    Machine learning models predicting traffic accident severity and frequency based on historical geospatial data, weather conditions, and time series analysis.
                  </p>
                  <div className="flex gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400">
                    <span>Scikit-Learn</span>
                    <span>•</span>
                    <span>XGBoost</span>
                    <span>•</span>
                    <span>GeoPandas</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Contact */}
          <section className="min-h-screen flex items-center justify-center p-8 lg:p-24 bg-black/20 backdrop-blur-sm text-center">
            <div className="max-w-4xl w-full space-y-12">
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">
                Initiate.
              </h2>
              <p className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl mx-auto">
                Ready to build robust, scalable architectures or explore AI-driven solutions? Let&apos;s connect.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
                <a href="mailto:hello@example.com" className="flex items-center px-8 py-5 border border-white hover:bg-white hover:text-black transition-colors uppercase tracking-widest font-bold w-full sm:w-auto justify-center">
                  <Mail className="w-5 h-5 mr-3" /> hello@example.com
                </a>
                <a href="#" className="flex items-center px-8 py-5 bg-white text-black hover:bg-cyan-400 transition-colors uppercase tracking-widest font-bold w-full sm:w-auto justify-center">
                  <Briefcase className="w-5 h-5 mr-3" /> LinkedIn Profile
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </LenisProvider>
  );
}
