import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';

export function Markets() {
  return (
    <section id="markets" className="bg-[#0A1628] py-[100px] lg:py-[140px] px-6 border-t border-[#1E3A5F]">
      <div className="max-w-[1400px] mx-auto">
        <FadeIn className="text-center mb-[80px] max-w-[900px] mx-auto">
          <h4 className="text-gradient uppercase tracking-[3px] text-[12px] font-semibold mb-4 text-center">ENVIRONMENTS UNDER PROMOTION</h4>
          <h2 className="text-white text-[36px] lg:text-[56px] font-bold tracking-tight mb-6 leading-[1.1] text-center">
            Purpose-Built Architecture for the <span className="text-transparent bg-clip-text bg-gradient-custom">Hardest Edges.</span>
          </h2>
          <p className="text-[#8BA5C4] text-[20px] leading-[1.6] text-center mx-auto">
            We are aggressively expanding our intelligence networks across high-stakes, physically intensive environments. Find your operational baseline below to see how localized compute recovers your hidden margin.
          </p>
        </FadeIn>

        {/* TIER 1: CORE BEACHHEADS (High Priority / Visceral Impact Grid) */}
        <div className="mb-20">
          <FadeIn>
            <h3 className="text-white text-[24px] font-bold tracking-tight mb-8 border-b border-slate-800 pb-4">Tier 1: Core Beachheads</h3>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Card 1 */}
            <FadeIn>
              <div className="bg-slate-950 border border-slate-800/60 rounded-xl p-8 hover:border-[#00A885]/30 transition-all group h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-mono tracking-widest text-[#00A885] uppercase border border-[#00A885]/30 bg-[#00A885]/10 px-3 py-1 rounded-full">HIGH PRIORITY // BEACHHEAD</span>
                </div>
                <h4 className="text-white text-[28px] font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-custom transition-all">Quick-Service Restaurants</h4>
                <p className="text-slate-300 italic text-[15px] mb-4 border-l-4 border-slate-700 pl-4 py-1">
                  "A Friday night POS failure or a walk-in freezer outage isn't an IT ticket—it's an immediate $2,000 revenue write-off."
                </p>
                <p className="text-slate-400 text-[16px] leading-[1.6] mb-8 flex-grow">
                  A POS-neutral local brain that runs seamlessly beneath Toast, Worldpay, or PAR Brink. Continuous monitoring of fryers, walk-ins, and drive-thru loops preserves your margins even during complete external internet blackouts.
                </p>
                <div className="flex justify-between items-center mt-auto pt-6 border-t border-slate-800">
                  <span className="text-slate-500 text-[12px] font-mono uppercase tracking-wider">Zero-Friction Offline Resilience</span>
                  <Link to="/custom-journey" className="text-[#00A885] hover:text-white transition-colors group-hover:translate-x-1 duration-300">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn>
              <div className="bg-slate-950 border border-slate-800/60 rounded-xl p-8 hover:border-[#00A885]/30 transition-all group h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-mono tracking-widest text-[#00A885] uppercase border border-[#00A885]/30 bg-[#00A885]/10 px-3 py-1 rounded-full">HIGH PRIORITY // MACHINE IQ 3.0</span>
                </div>
                <h4 className="text-white text-[28px] font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-custom transition-all">Carpet, Textiles & Precision Mills</h4>
                <p className="text-slate-300 italic text-[15px] mb-4 border-l-4 border-slate-700 pl-4 py-1">
                  "Unscheduled downtime on a high-speed tufting machine or a compressed air drop can paralyze an entire shift's production quota."
                </p>
                <p className="text-slate-400 text-[16px] leading-[1.6] mb-8 flex-grow">
                  Powered by our patent-pending Machine IQ 3.0 self-powered sensors. No batteries to change, no complex field wiring. Mounts in minutes to capture micro-vibrations and thermal anomalies before mechanical failure halts the line.
                </p>
                <div className="flex justify-between items-center mt-auto pt-6 border-t border-slate-800">
                  <span className="text-slate-500 text-[12px] font-mono uppercase tracking-wider">Predictive Tufting & Line Maintenance</span>
                  <Link to="/custom-journey" className="text-[#00A885] hover:text-white transition-colors group-hover:translate-x-1 duration-300">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Card 3 */}
            <FadeIn>
              <div className="bg-slate-950 border border-slate-800/60 rounded-xl p-8 hover:border-[#00A885]/30 transition-all group h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-mono tracking-widest text-[#00A885] uppercase border border-[#00A885]/30 bg-[#00A885]/10 px-3 py-1 rounded-full">HIGH PRIORITY // PARTNER CHANNEL</span>
                </div>
                <h4 className="text-white text-[28px] font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-custom transition-all">General Manufacturing & CNC Plants</h4>
                <p className="text-slate-300 italic text-[15px] mb-4 border-l-4 border-slate-700 pl-4 py-1">
                  "Hidden utility waste, energy anomalies, and unexpected bearing failures on critical pumps, conveyors, and compressors."
                </p>
                <p className="text-slate-400 text-[16px] leading-[1.6] mb-8 flex-grow">
                  Continuous edge harvesting of motor harmonics feeds instant, real-time data directly into your existing MaintainX or Tulip dashboards via zero-latency MQTT streams.
                </p>
                <div className="flex justify-between items-center mt-auto pt-6 border-t border-slate-800">
                  <span className="text-slate-500 text-[12px] font-mono uppercase tracking-wider">Vibration Energy Harvesting</span>
                  <Link to="/custom-journey" className="text-[#00A885] hover:text-white transition-colors group-hover:translate-x-1 duration-300">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Card 4 */}
            <FadeIn>
              <div className="bg-slate-950 border border-slate-800/60 rounded-xl p-8 hover:border-[#00A885]/30 transition-all group h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-mono tracking-widest text-[#00A885] uppercase border border-[#00A885]/30 bg-[#00A885]/10 px-3 py-1 rounded-full">HIGH PRIORITY // COLD ROOMS</span>
                </div>
                <h4 className="text-white text-[28px] font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-custom transition-all">Data Center Operators</h4>
                <p className="text-slate-300 italic text-[15px] mb-4 border-l-4 border-slate-700 pl-4 py-1">
                  "Complex rack monitoring, sudden thermal pooling, and cooling inefficiency that spikes PDU utility costs."
                </p>
                <p className="text-slate-400 text-[16px] leading-[1.6] mb-8 flex-grow">
                  Deploying NVIDIA Jetson architecture directly inside edge topologies for localized rack micro-climate analysis, airflow optimization, and absolute data sovereignty—raw operational data never leaves the floor.
                </p>
                <div className="flex justify-between items-center mt-auto pt-6 border-t border-slate-800">
                  <span className="text-slate-500 text-[12px] font-mono uppercase tracking-wider">Sovereign Micro-Climate Tracking</span>
                  <Link to="/custom-journey" className="text-[#00A885] hover:text-white transition-colors group-hover:translate-x-1 duration-300">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>

        {/* TIER 2 & 3: ENTERPRISE EXPANSIONS */}
        <div>
          <FadeIn>
            <h3 className="text-white text-[24px] font-bold tracking-tight mb-8 border-b border-slate-800 pb-4">Tier 2 & 3: Enterprise Expansions</h3>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 5 */}
            <FadeIn>
              <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 hover:border-[#00A885]/20 transition-all group h-full flex flex-col cursor-pointer">
                <h4 className="text-white text-[20px] font-bold mb-3 group-hover:text-[#00A885] transition-colors">Healthcare & Clinical</h4>
                <p className="text-slate-400 text-[15px] leading-[1.6] flex-grow">
                  HIPAA-compliant, on-premises data sovereignty for pharmacy cold chains, sterile HVAC systems, and surgical suite monitoring where cloud latency is an absolute liability.
                </p>
                <div className="mt-6 pt-4 border-t border-slate-800/60 font-mono text-[11px] text-slate-500 group-hover:text-slate-300 transition-colors uppercase">
                  Expand Blueprint →
                </div>
              </div>
            </FadeIn>

            {/* Card 6 */}
            <FadeIn>
              <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 hover:border-[#00A885]/20 transition-all group h-full flex flex-col cursor-pointer">
                <h4 className="text-white text-[20px] font-bold mb-3 group-hover:text-[#00A885] transition-colors">Defense & Comms-Agnostic</h4>
                <p className="text-slate-400 text-[15px] leading-[1.6] flex-grow">
                  Ruggedized MIL-STD-810 sensor arrays built via Arrow procurement, transmitting isolated telemetry packets across local tactical radios with zero cellular dependency.
                </p>
                <div className="mt-6 pt-4 border-t border-slate-800/60 font-mono text-[11px] text-slate-500 group-hover:text-slate-300 transition-colors uppercase">
                  Expand Blueprint →
                </div>
              </div>
            </FadeIn>

            {/* Card 7 */}
            <FadeIn>
              <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 hover:border-[#00A885]/20 transition-all group h-full flex flex-col cursor-pointer">
                <h4 className="text-white text-[20px] font-bold mb-3 group-hover:text-[#00A885] transition-colors">Warehousing & Logistics</h4>
                <p className="text-slate-400 text-[15px] leading-[1.6] flex-grow">
                  Real-time loading dock visual mapping, floor hazard avoidance, forklift utilization, and automated sorting line conveyor tracking along the industrial transit corridor.
                </p>
                <div className="mt-6 pt-4 border-t border-slate-800/60 font-mono text-[11px] text-slate-500 group-hover:text-slate-300 transition-colors uppercase">
                  Expand Blueprint →
                </div>
              </div>
            </FadeIn>

            {/* Card 8 */}
            <FadeIn>
              <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 hover:border-[#00A885]/20 transition-all group h-full flex flex-col cursor-pointer">
                <h4 className="text-white text-[20px] font-bold mb-3 group-hover:text-[#00A885] transition-colors">Autonomous Mobile Surveillance</h4>
                <p className="text-slate-400 text-[15px] leading-[1.6] flex-grow">
                  Turnkey edge AI computing packages for self-contained, autonomous surveillance trailers requiring zero fixed power or communication infrastructure.
                </p>
                <div className="mt-6 pt-4 border-t border-slate-800/60 font-mono text-[11px] text-slate-500 group-hover:text-slate-300 transition-colors uppercase">
                  Expand Blueprint →
                </div>
              </div>
            </FadeIn>

            {/* Card 9 */}
            <FadeIn>
              <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 hover:border-[#00A885]/20 transition-all group h-full flex flex-col cursor-pointer">
                <h4 className="text-white text-[20px] font-bold mb-3 group-hover:text-[#00A885] transition-colors">Retail & Commercial Real Estate</h4>
                <p className="text-slate-400 text-[15px] leading-[1.6] flex-grow">
                  POS resilience, shrink reduction via video edge analytics, elevator predictive tracking, and localized HVAC utility profiling across distributed multi-location footprints.
                </p>
                <div className="mt-6 pt-4 border-t border-slate-800/60 font-mono text-[11px] text-slate-500 group-hover:text-slate-300 transition-colors uppercase">
                  Expand Blueprint →
                </div>
              </div>
            </FadeIn>
            
            {/* CTA Fill Card */}
            <FadeIn>
              <div className="bg-gradient-to-r from-slate-900/50 to-[#00A885]/10 border border-[#00A885]/30 rounded-xl p-6 hover:border-[#00A885]/60 transition-all hover:bg-[#00A885]/5 group h-full flex flex-col justify-center items-center text-center cursor-pointer">
                <h4 className="text-white text-[20px] font-bold mb-3">Not listed?</h4>
                <p className="text-slate-400 text-[15px] leading-[1.6] mb-6">
                  If you have a high-stakes operational problem, we want to architect the solution.
                </p>
                <Link to="/custom-journey" className="inline-block bg-gradient-custom text-white text-[14px] font-medium py-3 px-6 rounded-md shadow-[0_0_15px_rgba(0,168,133,0.2)] group-hover:shadow-[0_0_20px_rgba(0,168,133,0.4)] transition-all">
                  Start Diagnostic
                </Link>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
}
