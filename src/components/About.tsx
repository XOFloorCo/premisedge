import { FadeIn } from './FadeIn';

export function About() {
  return (
    <section id="about" className="bg-bg-primary py-[80px] lg:py-[120px] px-6">
      <div className="max-w-[800px] mx-auto text-center">
        <FadeIn>
          <h4 className="text-gradient uppercase tracking-[3px] text-[12px] font-semibold mb-4">ABOUT PREMISEDGE</h4>
          <h2 className="text-white text-[32px] lg:text-[48px] font-bold tracking-tight mb-[48px] leading-[1.1]">
            Built for the businesses that build everything else.
          </h2>
          
          <div className="text-text-secondary text-[18px] leading-[1.8] space-y-6 text-left md:text-center">
            <p>
              For twenty years we walked the floors of restaurants, factories, and facilities across the country. We met the people who run them — franchise operators working six days a week, plant managers responsible for hundreds of jobs, manufacturers competing against companies ten times their size.
            </p>
            <p>
              The story was the same everywhere. Equipment failing without warning. Quality slipping without detection. Costs rising without explanation. And the technology that could fix it was built for Fortune 500 companies with IT departments and enterprise budgets — not for them.
            </p>
            <p>So we built PremisEdge.</p>
            <p>
              We believe every business deserves to know what their facility is telling them. When someone trusts us with their operation they get our full commitment — not a software subscription and a support ticket. We show up, we stay in, and we don't stop until the intelligence is working.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-[48px]">
            {['Powered by NVIDIA Jetson', 'Intelligence by Claude AI', 'Sovereign by Design'].map((badge) => (
              <div 
                key={badge}
                className="bg-bg-card border border-gradient-custom rounded-full px-5 py-2.5"
                style={{
                  border: '1px solid transparent',
                  background: 'linear-gradient(#0F2040, #0F2040) padding-box, linear-gradient(135deg, #0066FF, #00A885, #00E5FF) border-box'
                }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-custom text-[13px] font-medium">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
