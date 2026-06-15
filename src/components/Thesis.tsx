import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';

export default function Thesis() {
  return (
    <div className="bg-bg-primary min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0A1628] pt-[120px] pb-[80px] px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#162545]/50 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 pt-[80px] lg:pt-[120px]">
          <FadeIn>
            <h4 className="text-gradient uppercase tracking-[3px] text-[12px] font-semibold mb-6">THE PREMISEDGE THESIS</h4>
            <h1 className="text-white text-[40px] md:text-[56px] font-bold tracking-tight mb-6 leading-[1.1]">
              The Sovereign Compute Manifesto.
            </h1>
            <p className="text-[#8BA5C4] text-[18px] md:text-[20px] max-w-[700px] mx-auto leading-[1.6]">
              Why owning your intelligence is the only way to survive the coming cloud squeeze.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Introduction: The Trillion-Dollar Trap */}
      <section className="bg-[#0F2040] py-[100px] px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <FadeIn>
            <p className="text-[#8BA5C4] text-[18px] md:text-[20px] leading-[1.8] font-medium">
              You already know the trap is being set. The centralized infrastructure being built today is designed to make you completely dependent on their processing power. But what happens when the physical limits of that cloud infrastructure are reached? The cost of enterprise intelligence is about to decouple from Moore's Law and become tied to brutal physical constraints: finite grid power, throttled fiber bandwidth, and strict regulatory walls. Here is exactly how the squeeze will happen, and why localized edge compute is your only escape hatch.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Four Pillars */}
      <section className="bg-[#0A1628] py-[120px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1 */}
            <FadeIn delay={0.1}>
              <div className="group h-full bg-[#162545] border border-[#1E3A5F] rounded-xl p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,168,133,0.1)] hover:border-[#00A885] hover:-translate-y-1 flex flex-col">
                <h3 className="text-white text-[24px] font-bold mb-4 leading-tight">01. Compute is the New Crude</h3>
                <p className="text-text-secondary text-[16px] leading-[1.6] flex-grow">
                  Data and compute pricing are about to mirror global gas prices. Instead of being controlled by nation-states, the tap will be controlled by three or four massive tech corporations. When one raises the price, they all do. If your facility relies entirely on their servers, you will absorb whatever surge pricing they dictate.
                </p>
              </div>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn delay={0.2}>
              <div className="group h-full bg-[#162545] border border-[#1E3A5F] rounded-xl p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,168,133,0.1)] hover:border-[#00A885] hover:-translate-y-1 flex flex-col">
                <h3 className="text-white text-[24px] font-bold mb-4 leading-tight">02. The Energy Squeeze</h3>
                <p className="text-text-secondary text-[16px] leading-[1.6] flex-grow">
                  Infinite cloud scaling is a myth because grid energy is finite. AI data centers consume staggering amounts of power, and the grid is buckling. The hyperscalers will not eat that cost. As energy scarcity drives up the cost of powering servers, that premium will be baked directly into your monthly cloud bill.
                </p>
              </div>
            </FadeIn>

            {/* Card 3 */}
            <FadeIn delay={0.3}>
              <div className="group h-full bg-[#162545] border border-[#1E3A5F] rounded-xl p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,168,133,0.1)] hover:border-[#00A885] hover:-translate-y-1 flex flex-col">
                <h3 className="text-white text-[24px] font-bold mb-4 leading-tight">03. The $200 Trillion Bottleneck</h3>
                <p className="text-text-secondary text-[16px] leading-[1.6] flex-grow">
                  Over the next decade, we will see the tokenization of $200 trillion worth of real-world assets. Processing that global ledger will place unprecedented strain on cloud infrastructure. When the system bogs down, hyperscalers will prioritize enterprise clients paying massive premiums for speed. Everyone else gets throttled.
                </p>
              </div>
            </FadeIn>

            {/* Card 4 */}
            <FadeIn delay={0.4}>
              <div className="group h-full bg-[#162545] border border-[#1E3A5F] rounded-xl p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,168,133,0.1)] hover:border-[#00A885] hover:-translate-y-1 flex flex-col">
                <h3 className="text-white text-[24px] font-bold mb-4 leading-tight">04. The Compliance Wall</h3>
                <p className="text-text-secondary text-[16px] leading-[1.6] flex-grow">
                  The Wild West of cloud data is ending. Regulatory bodies are rapidly waking up to the security risks of transmitting critical operational data off-site. Soon, compliance mandates won't just suggest data sovereignty—they will legally enforce it. Send data off-site, and you'll be regulated out of compliance.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Ultimatum */}
      <section className="bg-[#0F2040] py-[120px] px-6 text-center border-t border-[#1E3A5F]">
        <div className="max-w-[800px] mx-auto">
          <FadeIn>
            <h2 className="text-white text-[32px] md:text-[48px] font-bold mb-8 leading-tight">
              Pay the ransom or own your destiny.
            </h2>
            <p className="text-[#8BA5C4] text-[18px] md:text-[20px] leading-[1.8] mb-12">
              By deploying PremisEdge's localized edge computing architecture, you sever the dependency. You process your data inside your own walls. You own your intelligence, you control your costs, and you insulate your business from the coming cloud squeeze.
            </p>
            <Link 
              to="/#contact" 
              className="inline-block bg-gradient-custom text-white text-[18px] font-medium py-4 px-8 rounded-md hover:shadow-[0_0_20px_rgba(0,168,133,0.3)] transition-shadow"
            >
              Secure Your Operation Today
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
