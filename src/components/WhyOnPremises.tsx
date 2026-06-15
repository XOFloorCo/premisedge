import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';

export function WhyOnPremises() {
  return (
    <section id="why-on-premises" className="bg-bg-card py-[80px] lg:py-[120px] px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
        
        {/* Left Column */}
        <div className="w-full lg:w-1/2">
          <FadeIn>
            <h4 className="text-gradient uppercase tracking-[3px] text-[12px] font-semibold mb-4">WHY ON-PREMISES</h4>
            <h2 className="text-white text-[32px] lg:text-[48px] font-bold leading-[1.2] tracking-tight mb-8 max-w-[520px]">
              The trillion dollar question nobody is asking.
            </h2>
            <div className="text-text-secondary text-[16px] leading-[1.7] space-y-6">
              <p>
                Consider what's actually happening with the trillion-dollar data center buildout. Microsoft, Amazon, Google, and Meta are collectively spending over a trillion dollars building AI infrastructure. That capital doesn't come from generosity. It comes from investors who expect a return.
              </p>
              <p>
                The business model is straightforward. Get your critical operations dependent on their AI. Make the switching cost high enough that leaving becomes unthinkable. Then price accordingly.
              </p>
              <p>
                Your internet bill went up. Your cloud storage bill went up. Your SaaS subscription bills went up — every one of them, every year. The question is whether you want your core operational intelligence sitting on that same infrastructure.
              </p>
              <p className="text-transparent bg-clip-text bg-gradient-custom text-[20px] font-medium leading-[1.5] mt-4">
                The companies that own their operational AI today won't be paying someone else's infrastructure bill tomorrow.
              </p>
            </div>
            <Link to="/thesis" className="inline-block bg-gradient-custom text-white font-medium py-4 px-8 rounded-lg mt-8 hover:shadow-[0_0_30px_rgba(0,168,133,0.3)] transition-shadow">
              Read Our Full Thesis →
            </Link>
          </FadeIn>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2">
          <FadeIn delay={0.2} className="bg-bg-elevated rounded-2xl p-8 lg:p-10 border border-border-subtle/50 shadow-2xl">
            <div className="flex flex-col">
              
              {/* Row 1 */}
              <div className="flex items-center gap-8 py-8 border-b border-gradient-to-r from-transparent via-[#1E3A5F] to-transparent border-t-0 border-l-0 border-r-0 border-[1px] border-solid" style={{ borderBottomImage: 'linear-gradient(to right, transparent, #1E3A5F, transparent) 1' }}>
                <div className="w-1/3 text-gradient text-[48px] lg:text-[64px] font-bold leading-none tracking-tighter">83%</div>
                <div className="w-2/3 text-text-secondary text-[16px] leading-[1.5]">Cost savings over 5 years versus cloud on-demand rates</div>
              </div>

              {/* Row 2 */}
              <div className="flex items-center gap-8 py-8 border-b border-gradient-to-r from-transparent via-[#1E3A5F] to-transparent border-t-0 border-l-0 border-r-0 border-[1px] border-solid" style={{ borderBottomImage: 'linear-gradient(to right, transparent, #1E3A5F, transparent) 1' }}>
                <div className="w-1/3 text-gradient text-[48px] lg:text-[64px] font-bold leading-none tracking-tighter">0%</div>
                <div className="w-2/3 text-text-secondary text-[16px] leading-[1.5]">Of your operational data leaves your facility</div>
              </div>

              {/* Row 3 */}
              <div className="flex items-center gap-8 py-8">
                <div className="w-1/3 text-gradient text-[48px] lg:text-[64px] font-bold leading-none tracking-tighter">$1T+</div>
                <div className="w-2/3 text-text-secondary text-[16px] leading-[1.5]">Being invested in infrastructure your competitors want you dependent on</div>
              </div>

            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
