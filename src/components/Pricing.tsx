import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="bg-bg-primary min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0A1628] pt-[120px] pb-[80px] px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#162545]/50 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 pt-[80px] lg:pt-[120px]">
          <FadeIn>
            <h4 className="text-gradient uppercase tracking-[3px] text-[12px] font-semibold mb-6">INVESTMENT ARCHITECTURE</h4>
            <h1 className="text-white text-[40px] md:text-[56px] font-bold tracking-tight mb-6 leading-[1.1]">
              We price intelligence exactly like you build a custom home.
            </h1>
            <p className="text-[#8BA5C4] text-[18px] md:text-[20px] max-w-[700px] mx-auto leading-[1.6]">
              First, you pay the architect for the blueprints. Second, you pay the builder for the physical materials and labor. Third, you pay the monthly utility bill to keep the lights on. Total transparency, zero lock-in.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Phase 01 (The Architect) */}
      <section className="bg-[#0F2040] py-[120px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 lg:pr-8">
                <span className="text-[#00A885] text-[14px] uppercase tracking-[2px] font-semibold block mb-4">PHASE 01</span>
                <h2 className="text-white text-[40px] font-bold mb-6 leading-tight">The Architect: Engineering Blueprint</h2>
                <p className="text-[#8BA5C4] text-[18px] leading-[1.7]">
                  Just like a custom home, we don't start swinging hammers without a blueprint. Our Engineering Blueprints start at $3,500. After a brief discovery call to understand your footprint, our engineers deploy to your floor to map your infrastructure and build your exact Edge Intelligence Blueprint.
                </p>
              </div>
              <div className="flex-1 w-full relative">
                <div className="aspect-[4/3] bg-[#162545] border border-[#1E3A5F] rounded-2xl flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-custom opacity-5"></div>
                  <i className="fa-solid fa-compass-drafting text-[#1E3A5F] text-[80px] group-hover:text-[#00A885]/20 text-opacity-50 transition-colors duration-500"></i>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Phase 02 (The Builder) */}
      <section className="bg-[#0A1628] py-[120px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="flex-1 lg:pl-8">
                <span className="text-[#00A885] text-[14px] uppercase tracking-[2px] font-semibold block mb-4">PHASE 02</span>
                <h2 className="text-white text-[40px] font-bold mb-6 leading-tight">The Builder: Physical Rigging</h2>
                <p className="text-[#8BA5C4] text-[18px] leading-[1.7] mb-8">
                  We don't hide massive software margins inside marked-up hardware. You pay a transparent, one-time deployment fee that covers the exact off-the-shelf sensors, cameras, and localized edge appliance required for your specific floor plan, plus the day-rate for our certified integrators to rig it.
                </p>
                <span className="text-gradient font-bold text-[18px]">Paid once. You own the hardware.</span>
              </div>
              <div className="flex-1 w-full relative">
                <div className="aspect-[4/3] bg-[#162545] border border-[#1E3A5F] rounded-2xl flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-custom opacity-5"></div>
                  <i className="fa-solid fa-server text-[#1E3A5F] text-[80px] group-hover:text-[#00A885]/20 text-opacity-50 transition-colors duration-500"></i>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Phase 03 (The Utilities) */}
      <section className="bg-[#0F2040] py-[120px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 lg:pr-8">
                <span className="text-[#00A885] text-[14px] uppercase tracking-[2px] font-semibold block mb-4">PHASE 03</span>
                <h2 className="text-white text-[40px] font-bold mb-6 leading-tight">The Utilities: Active License</h2>
                <p className="text-[#8BA5C4] text-[18px] leading-[1.7] mb-8">
                  Once your facility is live, you pay a flat, predictable monthly fee per location—just like a utility bill. This covers the continuous localized Claude AI processing, the real-time alerts, and predictive scheduling. No per-user seat limits, no hidden data storage fees, and no cloud-bandwidth upcharges.
                </p>
                <span className="text-gradient font-bold text-[18px]">Flat monthly fee. Unlimited facility users.</span>
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

      {/* The 90-Day Standard */}
      <section className="bg-[#0A1628] py-[120px] px-6 text-center">
        <div className="max-w-[800px] mx-auto">
          <FadeIn>
            <h2 className="text-white text-[48px] font-bold mb-6 leading-tight">
              The 90-Day Standard
            </h2>
            <p className="text-[#8BA5C4] text-[20px] leading-[1.8] relaxed">
              We only deploy where we know we can win. Our goal for every pilot partner is to ensure the system recovers enough lost margin—through eliminated waste, prevented downtime, and optimized labor—to completely pay for its own deployment within the first 90 days.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0F2040] py-[100px] px-6 text-center">
        <FadeIn>
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-white text-[40px] font-bold mb-[32px]">Ready to draw up the blueprints?</h2>
            <Link 
              to="/#contact" 
              className="inline-block bg-gradient-custom text-white text-[18px] font-medium py-4 px-8 rounded-md hover:shadow-[0_0_20px_rgba(0,168,133,0.3)] transition-shadow"
            >
              Request Engineering Blueprint
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
