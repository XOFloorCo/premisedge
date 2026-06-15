import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';

export default function PredictiveMaintenance() {
  return (
    <div className="bg-bg-primary min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0A1628] pt-[120px] pb-[80px] px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#162545]/50 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 pt-[80px] lg:pt-[120px]">
          <FadeIn>
            <h4 className="text-gradient uppercase tracking-[3px] text-[12px] font-semibold mb-6">SIGNATURE SOLUTION: PREDICTIVE MAINTENANCE</h4>
            <h1 className="text-white text-[40px] md:text-[56px] font-bold tracking-tight mb-6 leading-[1.1]">
              Catching failure weeks before it stops the line.
            </h1>
            <p className="text-[#8BA5C4] text-[18px] md:text-[20px] max-w-[700px] mx-auto leading-[1.6]">
              Unexpected downtime kills margins. We deploy edge-based acoustic and thermal tracking to map your mechanical baseline and flag anomalies before the machine breaks.
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
                  By the time a human hears a machine grinding, the damage is already done.
                </h2>
              </div>
              <div className="flex-1">
                <p className="text-[#8BA5C4] text-[16px] md:text-[18px] leading-[1.7]">
                  Most facilities run on a reactive 'run-to-failure' model, or they rely on calendar-based maintenance that wastes perfectly good parts. The truth is, your machines broadcast their health constantly. A bearing changing its vibration frequency, or a motor running three degrees hotter than normal, is the machine telling you it's going to fail next week. PremisEdge gives you the architecture to actually listen.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Detection Blueprint */}
      <section className="bg-[#0A1628] py-[120px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <FadeIn delay={0.1}>
              <div className="group h-full bg-[#162545] border border-[#1E3A5F] rounded-xl p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,168,133,0.1)] hover:border-[#00A885] hover:-translate-y-1 flex flex-col">
                <div className="mb-8">
                  <i className="fa-solid fa-temperature-half text-[#00A885] text-[40px] transition-transform group-hover:scale-110 duration-300"></i>
                </div>
                <h3 className="text-white text-[24px] font-bold mb-4 leading-tight">Thermal Mapping</h3>
                <p className="text-text-secondary text-[16px] leading-[1.6] flex-grow">
                  Sensors track the microscopic heat signatures of your high-friction assets, instantly flagging baseline deviations that precede motor burnout.
                </p>
              </div>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn delay={0.2}>
              <div className="group h-full bg-[#162545] border border-[#1E3A5F] rounded-xl p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,168,133,0.1)] hover:border-[#00A885] hover:-translate-y-1 flex flex-col">
                <div className="mb-8">
                  <i className="fa-solid fa-wave-square text-[#00A885] text-[40px] transition-transform group-hover:scale-110 duration-300"></i>
                </div>
                <h3 className="text-white text-[24px] font-bold mb-4 leading-tight">Acoustic & Vibration Sensing</h3>
                <p className="text-text-secondary text-[16px] leading-[1.6] flex-grow">
                  We capture the sub-audible frequencies of your machinery. When a belt frays or a gear slips, the edge appliance catches the frequency shift in milliseconds.
                </p>
              </div>
            </FadeIn>

            {/* Card 3 */}
            <FadeIn delay={0.3}>
              <div className="group h-full bg-[#162545] border border-[#1E3A5F] rounded-xl p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,168,133,0.1)] hover:border-[#00A885] hover:-translate-y-1 flex flex-col">
                <div className="mb-8">
                  <i className="fa-solid fa-server text-[#00A885] text-[40px] transition-transform group-hover:scale-110 duration-300"></i>
                </div>
                <h3 className="text-white text-[24px] font-bold mb-4 leading-tight">Localized Edge Processing</h3>
                <p className="text-text-secondary text-[16px] leading-[1.6] flex-grow">
                  Because we don't rely on cloud latency, your mechanical pulse is analyzed continuously on-premise. No dropped signals, no missed warnings.
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
            <h2 className="text-white text-[32px] md:text-[48px] font-bold tracking-tight">Maintenance on your terms, not the machine's.</h2>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 lg:pr-8">
                <h3 className="text-white text-[28px] md:text-[32px] font-bold mb-6 leading-tight">Zero Unplanned Downtime</h3>
                <p className="text-text-secondary text-[16px] md:text-[18px] leading-[1.7]">
                  Stop reacting to emergency midnight breakdowns. You get the intelligence to order parts and schedule repairs during planned shift changes.
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
                <h3 className="text-white text-[28px] md:text-[32px] font-bold mb-6 leading-tight">Maximized Asset Lifespan</h3>
                <p className="text-text-secondary text-[16px] md:text-[18px] leading-[1.7]">
                  Stop replacing parts just because the calendar says so. You only replace components when the data proves they are failing.
                </p>
              </div>
              <div className="flex-1 w-full relative">
                <div className="aspect-[4/3] bg-[#162545] border border-[#1E3A5F] rounded-2xl flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-custom opacity-5"></div>
                  <i className="fa-solid fa-gears text-[#1E3A5F] text-[80px] group-hover:text-[#00A885]/20 text-opacity-50 transition-colors duration-500"></i>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 lg:pr-8">
                <h3 className="text-white text-[28px] md:text-[32px] font-bold mb-6 leading-tight">Real-Time Triaging</h3>
                <p className="text-text-secondary text-[16px] md:text-[18px] leading-[1.7]">
                  When an anomaly is detected, Claude AI sends a plain-English alert to your maintenance lead detailing exactly which machine is flagging and what the probable cause is.
                </p>
              </div>
              <div className="flex-1 w-full relative">
                <div className="aspect-[4/3] bg-[#162545] border border-[#1E3A5F] rounded-2xl flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-custom opacity-5"></div>
                  <i className="fa-solid fa-triangle-exclamation text-[#1E3A5F] text-[80px] group-hover:text-[#00A885]/20 text-opacity-50 transition-colors duration-500"></i>
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
            <h2 className="text-white text-[32px] md:text-[40px] font-bold mb-8">Ready to protect your critical assets?</h2>
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
