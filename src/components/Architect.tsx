import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';

export default function Architect() {
  return (
    <div className="bg-bg-primary min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0A1628] pt-[120px] pb-[80px] px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#162545]/50 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 pt-[80px] lg:pt-[120px]">
          <FadeIn>
            <h4 className="text-gradient uppercase tracking-[3px] text-[12px] font-semibold mb-6">PHASE 01: ARCHITECT</h4>
            <h1 className="text-white text-[40px] md:text-[56px] font-bold tracking-tight mb-6 leading-[1.1]">
              We map the reality of your floor before we write a single line of code.
            </h1>
            <p className="text-[#8BA5C4] text-[18px] md:text-[20px] max-w-[700px] mx-auto leading-[1.6]">
              Generic AI fails because it doesn't understand your physical constraints. We build a custom intelligence blueprint based on how your facility actually operates.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Reality on the Floor */}
      <section className="bg-[#0F2040] py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center">
              <div className="flex-1">
                <h2 className="text-white text-[32px] md:text-[40px] font-bold leading-[1.2] max-w-[500px]">
                  Your facility is already talking. You just don't have the architecture to listen.
                </h2>
              </div>
              <div className="flex-1">
                <p className="text-[#8BA5C4] text-[16px] md:text-[18px] leading-[1.7]">
                  Most modern deployments fail because software companies try to force cloud solutions onto physical realities. They ignore the heat, the vibration, the legacy relays, and the blind spots. The Architect phase isn't a sales call—it is a rigorous, boots-on-the-ground engineering audit. We map the physical constraints of your specific operation so that when we deploy, we capture the exact data streams required to recover your lost margin.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Assessment Breakdown */}
      <section className="bg-[#0A1628] py-[120px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <FadeIn delay={0.1}>
              <div className="group h-full bg-[#162545] border border-[#1E3A5F] rounded-xl p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,168,133,0.1)] hover:border-[#00A885] hover:-translate-y-1 flex flex-col">
                <div className="mb-8">
                  <i className="fa-solid fa-magnifying-glass-chart text-[#00A885] text-[40px] transition-transform group-hover:scale-110 duration-300"></i>
                </div>
                <h3 className="text-white text-[24px] font-bold mb-4 leading-tight">The Operational Audit</h3>
                <p className="text-text-secondary text-[16px] leading-[1.6] flex-grow">
                  We don't just look at your machines; we look at your margins. We identify exactly where waste, micro-downtime, and labor inefficiencies are bleeding profitability.
                </p>
              </div>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn delay={0.2}>
              <div className="group h-full bg-[#162545] border border-[#1E3A5F] rounded-xl p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,168,133,0.1)] hover:border-[#00A885] hover:-translate-y-1 flex flex-col">
                <div className="mb-8">
                  <i className="fa-solid fa-network-wired text-[#00A885] text-[40px] transition-transform group-hover:scale-110 duration-300"></i>
                </div>
                <h3 className="text-white text-[24px] font-bold mb-4 leading-tight">Infrastructure Mapping</h3>
                <p className="text-text-secondary text-[16px] leading-[1.6] flex-grow">
                  We audit your legacy equipment and existing camera streams to determine exactly what off-the-shelf sensors are needed to bridge the intelligence gap.
                </p>
              </div>
            </FadeIn>

            {/* Card 3 */}
            <FadeIn delay={0.3}>
              <div className="group h-full bg-[#162545] border border-[#1E3A5F] rounded-xl p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,168,133,0.1)] hover:border-[#00A885] hover:-translate-y-1 flex flex-col">
                <div className="mb-8">
                  <i className="fa-solid fa-compass-drafting text-[#00A885] text-[40px] transition-transform group-hover:scale-110 duration-300"></i>
                </div>
                <h3 className="text-white text-[24px] font-bold mb-4 leading-tight">The Custom Blueprint</h3>
                <p className="text-text-secondary text-[16px] leading-[1.6] flex-grow">
                  You receive a comprehensive deployment map detailing hardware placement, localized network architecture, and the specific AI models we will train for your operation.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Deliverables */}
      <section className="bg-[#0F2040] py-[120px] px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-[120px]">
          
          <FadeIn className="text-center">
            <h2 className="text-white text-[32px] md:text-[48px] font-bold tracking-tight">What you get before a single wire is run.</h2>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 lg:pr-8">
                <h3 className="text-white text-[28px] md:text-[32px] font-bold mb-6 leading-tight">The Physical Edge Matrix</h3>
                <p className="text-text-secondary text-[16px] md:text-[18px] leading-[1.7]">
                  A precise hardware manifest. We tell you exactly which off-the-shelf acoustic, vibration, and thermal sensors are required, alongside optimal camera plotting to eliminate operational blind spots.
                </p>
              </div>
              <div className="flex-1 w-full relative">
                <div className="aspect-[4/3] bg-[#162545] border border-[#1E3A5F] rounded-2xl flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-custom opacity-5"></div>
                  <i className="fa-solid fa-microchip text-[#1E3A5F] text-[80px] group-hover:text-[#00A885]/20 text-opacity-50 transition-colors duration-500"></i>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="flex-1 lg:pl-8">
                <h3 className="text-white text-[28px] md:text-[32px] font-bold mb-6 leading-tight">Sovereign Network Topology</h3>
                <p className="text-text-secondary text-[16px] md:text-[18px] leading-[1.7]">
                  A customized local-area blueprint showing exactly how the edge-compute appliance will ingest your data streams without ever touching an external cloud server or throttling your facility's bandwidth.
                </p>
              </div>
              <div className="flex-1 w-full relative">
                <div className="aspect-[4/3] bg-[#162545] border border-[#1E3A5F] rounded-2xl flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-custom opacity-5"></div>
                  <i className="fa-solid fa-network-wired text-[#1E3A5F] text-[80px] group-hover:text-[#00A885]/20 text-opacity-50 transition-colors duration-500"></i>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 lg:pr-8">
                <h3 className="text-white text-[28px] md:text-[32px] font-bold mb-6 leading-tight">The Intelligence Rulebook</h3>
                <p className="text-text-secondary text-[16px] md:text-[18px] leading-[1.7]">
                  We map the specific baseline parameters Claude AI will monitor. From the exact temperature variance that ruins a batch, to the vibration frequency that indicates an impending machine failure.
                </p>
              </div>
              <div className="flex-1 w-full relative">
                <div className="aspect-[4/3] bg-[#162545] border border-[#1E3A5F] rounded-2xl flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-custom opacity-5"></div>
                  <i className="fa-solid fa-book text-[#1E3A5F] text-[80px] group-hover:text-[#00A885]/20 text-opacity-50 transition-colors duration-500"></i>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#0A1628] py-[100px] px-6 text-center border-t border-[#1E3A5F]">
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-white text-[32px] md:text-[40px] font-bold mb-8">Ready to map your facility?</h2>
            <Link 
              to="/#contact" 
              className="inline-block bg-gradient-custom text-white text-[18px] font-medium py-4 px-8 rounded-md hover:shadow-[0_0_20px_rgba(0,168,133,0.3)] transition-shadow"
            >
              Request Technical Scoping Session
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
