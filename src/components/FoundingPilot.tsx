import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';

export default function FoundingPilot() {
  return (
    <div className="bg-bg-primary min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0A1628] pt-[120px] pb-[80px] px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#162545]/50 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 pt-[80px] lg:pt-[120px]">
          <FadeIn>
            <h4 className="text-gradient uppercase tracking-[3px] text-[12px] font-semibold mb-6">THE ALPHA TRACK</h4>
            <h1 className="text-white text-[40px] md:text-[56px] font-bold tracking-tight mb-6 leading-[1.1]">
              Physical AI is frontier technology. Let's map your industry together.
            </h1>
            <p className="text-[#8BA5C4] text-[18px] md:text-[20px] max-w-[700px] mx-auto leading-[1.6]">
              We haven't built a use case for every profession yet. If you have a high-stakes operational problem that generic software can't fix, we are hungry to prove our architecture can. Here is our offer.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* "The Trade" Section (The Deal) */}
      <section className="bg-[#0F2040] py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center">
              <div className="flex-1">
                <h2 className="text-white text-[32px] md:text-[40px] font-bold leading-[1.2] max-w-[500px]">
                  The R&D is on us. The hardware is on you.
                </h2>
              </div>
              <div className="flex-1">
                <p className="text-[#8BA5C4] text-[16px] md:text-[18px] leading-[1.7]">
                  Building custom intelligence for a new industry requires heavy engineering, bespoke AI model training, and rigorous physical mapping. Normally, that costs thousands just to blueprint. For our Founding Pilots, we absorb 100% of the consulting and design costs. You simply pay the pass-through cost for the physical edge hardware, and you only pay the monthly intelligence license once the system is live and actively recovering your margins.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Partnership Terms */}
      <section className="bg-[#0A1628] py-[120px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <FadeIn delay={0.1}>
              <div className="group h-full bg-[#162545] border border-[#1E3A5F] rounded-xl p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,168,133,0.1)] hover:border-[#00A885] hover:-translate-y-1 flex flex-col">
                <div className="mb-8">
                  <i className="fa-solid fa-handshake text-[#00A885]/70 text-[40px] transition-transform group-hover:scale-110 duration-300 group-hover:text-[#00A885]"></i>
                </div>
                <h3 className="text-white text-[24px] font-bold mb-4 leading-tight">Waived Engineering Blueprint</h3>
                <p className="text-text-secondary text-[16px] leading-[1.6] flex-grow">
                  We waive the standard $3,500 Engineering Blueprint fee. Our team will audit your facility, design the network topology, and train the custom Claude AI models for your specific machinery at absolutely zero cost to you.
                </p>
              </div>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn delay={0.2}>
              <div className="group h-full bg-[#162545] border border-[#1E3A5F] rounded-xl p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,168,133,0.1)] hover:border-[#00A885] hover:-translate-y-1 flex flex-col">
                <div className="mb-8">
                  <i className="fa-solid fa-server text-[#00A885]/70 text-[40px] transition-transform group-hover:scale-110 duration-300 group-hover:text-[#00A885]"></i>
                </div>
                <h3 className="text-white text-[24px] font-bold mb-4 leading-tight">At-Cost Hardware Rigging</h3>
                <p className="text-text-secondary text-[16px] leading-[1.6] flex-grow">
                  You pay only for the physical reality of the build. This covers the exact off-the-shelf sensors, cameras, the localized edge appliance, and the day-rate for our certified integrators to install it.
                </p>
              </div>
            </FadeIn>

            {/* Card 3 */}
            <FadeIn delay={0.3}>
              <div className="group h-full bg-[#162545] border border-[#1E3A5F] rounded-xl p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,168,133,0.1)] hover:border-[#00A885] hover:-translate-y-1 flex flex-col">
                <div className="mb-8">
                  <i className="fa-solid fa-bolt text-[#00A885]/70 text-[40px] transition-transform group-hover:scale-110 duration-300 group-hover:text-[#00A885]"></i>
                </div>
                <h3 className="text-white text-[24px] font-bold mb-4 leading-tight">The Active Intelligence License</h3>
                <p className="text-text-secondary text-[16px] leading-[1.6] flex-grow">
                  Once the hardware is rigged and the AI models are successfully learning and alerting your team, you transition to our standard flat monthly Active License to keep the intelligence engine running.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#0F2040] py-[100px] px-6 text-center border-t border-[#1E3A5F]">
        <FadeIn>
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-white text-[32px] md:text-[40px] font-bold mb-8">Pitch your operational challenge.</h2>
            <Link 
              to="/#contact" 
              className="inline-block bg-gradient-custom text-white text-[18px] font-medium py-[16px] px-[32px] rounded-md hover:shadow-[0_0_20px_rgba(0,168,133,0.3)] transition-shadow"
            >
              Request Technical Scoping Session
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
