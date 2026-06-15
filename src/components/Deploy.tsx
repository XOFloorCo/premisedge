import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';

export default function Deploy() {
  return (
    <div className="bg-bg-primary min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0A1628] pt-[120px] pb-[80px] px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#162545]/50 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 pt-[80px] lg:pt-[120px]">
          <FadeIn>
            <h4 className="text-gradient uppercase tracking-[3px] text-[12px] font-semibold mb-6">PHASE 02: DEPLOY</h4>
            <h1 className="text-white text-[40px] md:text-[56px] font-bold tracking-tight mb-6 leading-[1.1]">
              Live and learning before your next shift begins.
            </h1>
            <p className="text-[#8BA5C4] text-[18px] md:text-[20px] max-w-[700px] mx-auto leading-[1.6]">
              We don't do six-month rip-and-replace implementations. We layer intelligence directly over your existing footprint in a single day without stopping your production line.
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
                  Most enterprise software deployments paralyze the business they are trying to save.
                </h2>
              </div>
              <div className="flex-1">
                <p className="text-[#8BA5C4] text-[16px] md:text-[18px] leading-[1.7]">
                  Traditional IoT and AI integrations require massive network overhauls, dedicated IT bandwidth, and days of forced equipment downtime. PremisEdge bypasses the headache. Because we utilize off-the-shelf edge sensors and a localized compute appliance, our certified partners rig your facility in parallel with your live operations. No ripped concrete, no severed wires, no lost shifts.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Deployment Execution */}
      <section className="bg-[#0A1628] py-[120px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <FadeIn delay={0.1}>
              <div className="group h-full bg-[#162545] border border-[#1E3A5F] rounded-xl p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,168,133,0.1)] hover:border-[#00A885] hover:-translate-y-1 flex flex-col">
                <div className="mb-8">
                  <i className="fa-solid fa-link text-[#00A885] text-[40px] transition-transform group-hover:scale-110 duration-300"></i>
                </div>
                <h3 className="text-white text-[24px] font-bold mb-4 leading-tight">Non-Invasive Rigging</h3>
                <p className="text-text-secondary text-[16px] leading-[1.6] flex-grow">
                  Sensors and cameras are mounted to pinch points and critical assets without interfering with mechanical pathways or existing legacy relays.
                </p>
              </div>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn delay={0.2}>
              <div className="group h-full bg-[#162545] border border-[#1E3A5F] rounded-xl p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,168,133,0.1)] hover:border-[#00A885] hover:-translate-y-1 flex flex-col">
                <div className="mb-8">
                  <i className="fa-solid fa-server text-[#00A885] text-[40px] transition-transform group-hover:scale-110 duration-300"></i>
                </div>
                <h3 className="text-white text-[24px] font-bold mb-4 leading-tight">The Edge Drop</h3>
                <p className="text-text-secondary text-[16px] leading-[1.6] flex-grow">
                  The localized edge appliance is racked securely in your server or electrical room, instantly creating a sovereign, high-speed compute environment.
                </p>
              </div>
            </FadeIn>

            {/* Card 3 */}
            <FadeIn delay={0.3}>
              <div className="group h-full bg-[#162545] border border-[#1E3A5F] rounded-xl p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,168,133,0.1)] hover:border-[#00A885] hover:-translate-y-1 flex flex-col">
                <div className="mb-8">
                  <i className="fa-solid fa-shield-check text-[#00A885] text-[40px] transition-transform group-hover:scale-110 duration-300"></i>
                </div>
                <h3 className="text-white text-[24px] font-bold mb-4 leading-tight">The Local Handshake</h3>
                <p className="text-text-secondary text-[16px] leading-[1.6] flex-grow">
                  Sensors pair to the edge appliance via secure local networks. Your data begins flowing instantly, with zero exposure to the public cloud.
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
            <h2 className="text-white text-[32px] md:text-[48px] font-bold tracking-tight">What happens on Day One.</h2>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 lg:pr-8">
                <h3 className="text-white text-[28px] md:text-[32px] font-bold mb-6 leading-tight">Zero Operational Downtime</h3>
                <p className="text-text-secondary text-[16px] md:text-[18px] leading-[1.7]">
                  Your facility didn't skip a beat. The deployment happens invisibly alongside your floor team.
                </p>
              </div>
              <div className="flex-1 w-full relative">
                <div className="aspect-[4/3] bg-[#162545] border border-[#1E3A5F] rounded-2xl flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-custom opacity-5"></div>
                  <i className="fa-solid fa-clock text-[#1E3A5F] text-[80px] group-hover:text-[#00A885]/20 text-opacity-50 transition-colors duration-500"></i>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="flex-1 lg:pl-8">
                <h3 className="text-white text-[28px] md:text-[32px] font-bold mb-6 leading-tight">The Live Data Feed</h3>
                <p className="text-text-secondary text-[16px] md:text-[18px] leading-[1.7]">
                  Your machines are officially talking. Acoustic, thermal, and visual data streams are successfully routing to the edge appliance in milliseconds.
                </p>
              </div>
              <div className="flex-1 w-full relative">
                <div className="aspect-[4/3] bg-[#162545] border border-[#1E3A5F] rounded-2xl flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-custom opacity-5"></div>
                  <i className="fa-solid fa-wave-square text-[#1E3A5F] text-[80px] group-hover:text-[#00A885]/20 text-opacity-50 transition-colors duration-500"></i>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 lg:pr-8">
                <h3 className="text-white text-[28px] md:text-[32px] font-bold mb-6 leading-tight">Baseline Calibration</h3>
                <p className="text-text-secondary text-[16px] md:text-[18px] leading-[1.7]">
                  Claude AI initiates its learning phase, mapping the 'normal' operational pulse of your facility so it can instantly flag when something deviates.
                </p>
              </div>
              <div className="flex-1 w-full relative">
                <div className="aspect-[4/3] bg-[#162545] border border-[#1E3A5F] rounded-2xl flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-custom opacity-5"></div>
                  <i className="fa-solid fa-chart-line text-[#1E3A5F] text-[80px] group-hover:text-[#00A885]/20 text-opacity-50 transition-colors duration-500"></i>
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
            <h2 className="text-white text-[32px] md:text-[40px] font-bold mb-8">Ready to upgrade your infrastructure?</h2>
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
