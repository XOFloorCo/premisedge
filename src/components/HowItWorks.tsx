import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  return (
    <div className="bg-bg-primary min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0A1628] pt-[120px] pb-[80px] px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#162545]/50 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 pt-[80px] lg:pt-[120px]">
          <FadeIn>
            <h4 className="text-gradient uppercase tracking-[3px] text-[12px] font-semibold mb-6">ARCHITECTURE & DEPLOYMENT</h4>
            <h1 className="text-white text-[40px] md:text-[56px] font-bold tracking-tight mb-6 leading-[1.1]">
              From legacy machinery to living intelligence in 24 hours.
            </h1>
            <p className="text-[#8BA5C4] text-[18px] md:text-[20px] max-w-[700px] mx-auto leading-[1.6]">
              We don't do six-month rip-and-replace IT projects. PremisEdge layers modern edge computing and enterprise-grade sensors directly over your existing physical footprint.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Architecture Layers */}
      <section className="bg-[#0F2040] py-[120px] px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-[120px]">
          
          {/* Layer 1 */}
          <FadeIn>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 lg:pr-8">
                <h4 className="text-[#00A885] uppercase tracking-[3px] text-[12px] font-semibold mb-4">LAYER 01: SENSE</h4>
                <h2 className="text-white text-[32px] md:text-[40px] font-bold mb-6 leading-tight">The Physical Edge</h2>
                <p className="text-text-secondary text-[16px] md:text-[18px] leading-[1.7]">
                  We deploy enterprise-grade, off-the-shelf vibration, acoustic, and thermal sensors alongside high-speed vision cameras. They mount directly to your legacy machinery and facility pinch points without interfering with your existing operations. We collect the raw physical data your equipment has been broadcasting for years, but no one was listening to.
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

          {/* Layer 2 */}
          <FadeIn>
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="flex-1 lg:pl-8">
                <h4 className="text-[#00A885] uppercase tracking-[3px] text-[12px] font-semibold mb-4">LAYER 02: PROCESS</h4>
                <h2 className="text-white text-[32px] md:text-[40px] font-bold mb-6 leading-tight">The Logic Engine</h2>
                <p className="text-text-secondary text-[16px] md:text-[18px] leading-[1.7]">
                  Cloud latency kills physical operations. Instead of sending terabytes of your secure video and sensor data to an external server, we drop a localized edge-compute appliance straight into your electrical or server room. Your facility processes its own pulse in milliseconds with zero cloud exposure and zero bandwidth throttling.
                </p>
              </div>
              <div className="flex-1 w-full relative">
                <div className="aspect-[4/3] bg-[#162545] border border-[#1E3A5F] rounded-2xl flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-custom opacity-5"></div>
                  <i className="fa-solid fa-server text-[#1E3A5F] text-[80px] group-hover:text-[#00A885]/20 text-opacity-50 transition-colors duration-500"></i>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Layer 3 */}
          <FadeIn>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 lg:pr-8">
                <h4 className="text-[#00A885] uppercase tracking-[3px] text-[12px] font-semibold mb-4">LAYER 03: ACT</h4>
                <h2 className="text-white text-[32px] md:text-[40px] font-bold mb-6 leading-tight">The Intelligence Output</h2>
                <p className="text-text-secondary text-[16px] md:text-[18px] leading-[1.7]">
                  Raw data is useless if your floor managers can't read it. The edge appliance instantly synthesizes those massive data streams using localized AI models. When a micro-anomaly or safety risk is detected, Claude AI instantly translates the event into a plain-English alert sent directly to your phone. Real-time protection, zero dashboard fatigue.
                </p>
              </div>
              <div className="flex-1 w-full relative">
                <div className="aspect-[4/3] bg-[#162545] border border-[#1E3A5F] rounded-2xl flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-custom opacity-5"></div>
                  <i className="fa-solid fa-bolt text-[#1E3A5F] text-[80px] group-hover:text-[#00A885]/20 text-opacity-50 transition-colors duration-500"></i>
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
              Book a Free Assessment
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
