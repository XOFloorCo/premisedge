import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';

export function OutcomeGap() {
  return (
    <section className="bg-bg-primary pt-[100px] pb-[100px] px-6 border-b border-border-subtle">
      <div className="max-w-[1400px] mx-auto text-center">
        
        {/* Header (Text) */}
        <div className="flex flex-col items-center max-w-[1000px] mx-auto mb-16">
          <FadeIn>
            <div className="rounded-full p-[1px] bg-gradient-custom inline-block mb-6">
              <div className="bg-[#06081A] rounded-full px-4 py-1">
                <span className="text-gradient uppercase tracking-[3px] text-[12px] font-semibold">THE OUTCOME GAP</span>
              </div>
            </div>
            <h2 className="text-white text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.15] tracking-tight mb-8">
              Every edge platform sells infrastructure to enterprises who already have engineers. <span className="text-transparent bg-clip-text bg-gradient-custom">PremisEdge sells outcomes to operators who don't.</span>
            </h2>
            <p className="text-[#8BA5C4] text-[18px] md:text-[20px] leading-[1.6]">
              The giants expect you to bring a DevOps team. We deliver proprietary self-powered sensors, local AI compute, and plain-English alerts in one box, under one subscription. Works with whatever you already run.
            </p>
          </FadeIn>
        </div>

        {/* Features Row - Evenly Spaced */}
        <div className="relative w-full">
          <FadeIn delay={0.2} className="h-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full text-left">
              
              {/* Card 1 */}
              <Link to="/architect" className="bg-slate-900/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 group hover:border-[#00E5FF]/50 transition-colors shadow-2xl relative overflow-hidden flex flex-col min-h-[300px] cursor-pointer block">
                <div className="text-gradient text-[20px] font-bold mb-4 tracking-wider group-hover:drop-shadow-[0_0_10px_rgba(0,229,255,0.5)] transition-all">
                  01 / ARCHITECT
                </div>
                <p className="text-slate-300 text-[15px] leading-relaxed flex-grow relative z-10 group-hover:text-white transition-colors">
                  Every facility is different. Before we recommend a single sensor or mount a single camera, we spend time in your operation — learning your machines, your workflow, your vulnerabilities, and your goals. What comes out the other side is a custom intelligence blueprint designed specifically for your facility, not a generic package built for someone else's problems.
                </p>
                <div className="mt-4 text-[#00E5FF] text-sm font-bold tracking-wider flex items-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all z-10 uppercase h-5">
                  Learn More <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {/* Background Visual: Blueprint Scanner */}
                <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="0" y1="20" x2="100" y2="20" stroke="#00E5FF" strokeWidth="0.5" strokeDasharray="2,2" />
                    <line x1="0" y1="40" x2="100" y2="40" stroke="#00E5FF" strokeWidth="0.5" strokeDasharray="2,2" />
                    <line x1="0" y1="60" x2="100" y2="60" stroke="#00E5FF" strokeWidth="0.5" strokeDasharray="2,2" />
                    <line x1="0" y1="80" x2="100" y2="80" stroke="#00E5FF" strokeWidth="0.5" strokeDasharray="2,2" />
                    <line x1="20" y1="0" x2="20" y2="100" stroke="#00E5FF" strokeWidth="0.5" strokeDasharray="2,2" />
                    <line x1="40" y1="0" x2="40" y2="100" stroke="#00E5FF" strokeWidth="0.5" strokeDasharray="2,2" />
                    <line x1="60" y1="0" x2="60" y2="100" stroke="#00E5FF" strokeWidth="0.5" strokeDasharray="2,2" />
                    <line x1="80" y1="0" x2="80" y2="100" stroke="#00E5FF" strokeWidth="0.5" strokeDasharray="2,2" />
                    <rect x="0" y="0" width="100" height="2" fill="#00E5FF">
                      <animate attributeName="y" values="0;100;0" dur="3s" repeatCount="indefinite" />
                    </rect>
                  </svg>
                </div>
              </Link>

              {/* Card 2 */}
              <Link to="/deploy" className="bg-slate-900/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 group hover:border-[#0066FF]/50 transition-colors shadow-2xl relative overflow-hidden flex flex-col min-h-[300px] cursor-pointer block">
                <div className="text-transparent bg-clip-text bg-gradient-to-br from-[#0066FF] to-[#00A885] text-[20px] font-bold mb-4 tracking-wider group-hover:drop-shadow-[0_0_10px_rgba(0,102,255,0.5)] transition-all">
                  02 / DEPLOY
                </div>
                <p className="text-slate-300 text-[15px] leading-relaxed flex-grow relative z-10 group-hover:text-white transition-colors">
                  A PremisEdge deployment doesn't require an IT department, a construction crew, or a six-month implementation project. Our certified integration partners install everything in a single day — the exact right sensors for your specific machinery, cameras in optimal positions, and a localized edge computing appliance in your electrical room. By end of day your facility is live and learning.
                </p>
                <div className="mt-4 text-[#0066FF] text-sm font-bold tracking-wider flex items-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all z-10 uppercase h-5">
                  Learn More <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {/* Background Visual: Modular Hardware Drop */}
                <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <circle cx="30" cy="70" r="4" stroke="#0066FF" strokeWidth="1" fill="none" />
                    <circle cx="70" cy="60" r="4" stroke="#00A885" strokeWidth="1" fill="none" />
                    <circle cx="50" cy="80" r="4" stroke="#0066FF" strokeWidth="1" fill="none" />
                    
                    <g opacity="0">
                      <rect x="28" y="20" width="4" height="4" fill="#0066FF" />
                      <line x1="30" y1="24" x2="30" y2="66" stroke="#0066FF" strokeWidth="0.5" strokeDasharray="1,2" />
                      <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite" />
                      <animateTransform attributeName="transform" type="translate" values="0,-20;0,46;0,46;0,46" dur="2s" repeatCount="indefinite" />
                    </g>
                    
                    <g opacity="0">
                      <rect x="68" y="10" width="4" height="4" fill="#00A885" />
                      <line x1="70" y1="14" x2="70" y2="56" stroke="#00A885" strokeWidth="0.5" strokeDasharray="1,2" />
                      <animate attributeName="opacity" values="0;1;1;0" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
                      <animateTransform attributeName="transform" type="translate" values="0,-10;0,46;0,46;0,46" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
                    </g>
                    
                    <g opacity="0">
                      <rect x="48" y="30" width="4" height="4" fill="#0066FF" />
                      <line x1="50" y1="34" x2="50" y2="76" stroke="#0066FF" strokeWidth="0.5" strokeDasharray="1,2" />
                      <animate attributeName="opacity" values="0;1;1;0" dur="1.8s" begin="1s" repeatCount="indefinite" />
                      <animateTransform attributeName="transform" type="translate" values="0,-30;0,46;0,46;0,46" dur="1.8s" begin="1s" repeatCount="indefinite" />
                    </g>
                  </svg>
                </div>
              </Link>

              {/* Card 3 */}
              <Link to="/illuminate" className="bg-slate-900/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 group hover:border-[#00A885]/50 transition-colors shadow-2xl relative overflow-hidden flex flex-col min-h-[300px] cursor-pointer block">
                <div className="text-[#00A885] text-[20px] font-bold mb-4 tracking-wider group-hover:drop-shadow-[0_0_10px_rgba(0,168,133,0.5)] transition-all">
                  03 / ILLUMINATE
                </div>
                <p className="text-slate-300 text-[15px] leading-relaxed flex-grow relative z-10 group-hover:text-white transition-colors">
                  This is where everything changes. Your facility stops being a collection of machines and spaces you react to and becomes an intelligent operation you see clearly. PremisEdge delivers real-time, plain-English insights telling you exactly what just happened, what's about to fail, and exactly what to do about it — powered by Claude AI, directly to your phone.
                </p>
                <div className="mt-4 text-[#00A885] text-sm font-bold tracking-wider flex items-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all z-10 uppercase h-5">
                  Learn More <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#00A885]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                {/* Background Visual: Radar Wave */}
                <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none overflow-hidden flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <circle cx="50" cy="50" r="2" fill="#00A885" />
                    <circle cx="50" cy="50" r="10" fill="none" stroke="#00A885" strokeWidth="0.5">
                      <animate attributeName="r" values="2;50" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="1;0" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="50" cy="50" r="10" fill="none" stroke="#00A885" strokeWidth="0.5">
                      <animate attributeName="r" values="2;50" dur="2s" begin="1s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="1;0" dur="2s" begin="1s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                </div>
              </Link>

            </div>
            
            {/* Glow Accent Behind Grid */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-gradient-custom opacity-[0.03] blur-3xl pointer-events-none z-[-1]"></div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
