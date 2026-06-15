import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';

export default function ActionableInsights() {
  return (
    <div className="bg-bg-primary min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0A1628] pt-[120px] pb-[80px] px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#162545]/50 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 pt-[80px] lg:pt-[120px]">
          <FadeIn>
            <h4 className="text-gradient uppercase tracking-[3px] text-[12px] font-semibold mb-6">SIGNATURE SOLUTION: CUSTOM ACTIONABLE INSIGHTS</h4>
            <h1 className="text-white text-[40px] md:text-[56px] font-bold tracking-tight mb-6 leading-[1.1]">
              Intelligence that tells you exactly what to do.
            </h1>
            <p className="text-[#8BA5C4] text-[18px] md:text-[20px] max-w-[700px] mx-auto leading-[1.6]">
              Data is noise. Insights are action. We use localized Claude AI models to synthesize millions of data points into clear, plain-English directives for your team.
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
                  Most facility managers are drowning in dashboards and starving for answers.
                </h2>
              </div>
              <div className="flex-1">
                <p className="text-[#8BA5C4] text-[16px] md:text-[18px] leading-[1.7]">
                  The 'Smart Factory' promise was supposed to make things easier, but it just added another chore: dashboard monitoring. If you have to spend your morning interpreting charts to find a problem, the software has failed you. PremisEdge treats data as raw material. Our localized AI engine mines that material 24/7. It doesn't ask you to find the problem; it tells you the problem, why it happened, and how to fix it before you even arrive at the facility.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Intelligence Engine */}
      <section className="bg-[#0A1628] py-[120px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <FadeIn delay={0.1}>
              <div className="group h-full bg-[#162545] border border-[#1E3A5F] rounded-xl p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,168,133,0.1)] hover:border-[#00A885] hover:-translate-y-1 flex flex-col">
                <div className="mb-8">
                  <i className="fa-solid fa-brain text-[#00A885] text-[40px] transition-transform group-hover:scale-110 duration-300"></i>
                </div>
                <h3 className="text-white text-[24px] font-bold mb-4 leading-tight">Localized Claude AI</h3>
                <p className="text-text-secondary text-[16px] leading-[1.6] flex-grow">
                  We utilize high-performance language models running on your local edge hardware. Your facility’s data never leaves your walls to be processed.
                </p>
              </div>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn delay={0.2}>
              <div className="group h-full bg-[#162545] border border-[#1E3A5F] rounded-xl p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,168,133,0.1)] hover:border-[#00A885] hover:-translate-y-1 flex flex-col">
                <div className="mb-8">
                  <i className="fa-solid fa-comments text-[#00A885] text-[40px] transition-transform group-hover:scale-110 duration-300"></i>
                </div>
                <h3 className="text-white text-[24px] font-bold mb-4 leading-tight">Plain-English Alerts</h3>
                <p className="text-text-secondary text-[16px] leading-[1.6] flex-grow">
                  No more error codes or technical jargon. You get a text that says: 'Freezer 4 in the Southwest corner is trending 4 degrees high. Check the compressor seals now.'
                </p>
              </div>
            </FadeIn>

            {/* Card 3 */}
            <FadeIn delay={0.3}>
              <div className="group h-full bg-[#162545] border border-[#1E3A5F] rounded-xl p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,168,133,0.1)] hover:border-[#00A885] hover:-translate-y-1 flex flex-col">
                <div className="mb-8">
                  <i className="fa-solid fa-calendar-check text-[#00A885] text-[40px] transition-transform group-hover:scale-110 duration-300"></i>
                </div>
                <h3 className="text-white text-[24px] font-bold mb-4 leading-tight">Predictive Scheduling</h3>
                <p className="text-text-secondary text-[16px] leading-[1.6] flex-grow">
                  The AI analyzes production and labor flow to tell you exactly when you are overstaffed on a Wednesday or under-supported for a Friday rush.
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
            <h2 className="text-white text-[32px] md:text-[48px] font-bold tracking-tight">A game plan for every shift.</h2>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 lg:pr-8">
                <h3 className="text-white text-[28px] md:text-[32px] font-bold mb-6 leading-tight">The Monday Morning Briefing</h3>
                <p className="text-text-secondary text-[16px] md:text-[18px] leading-[1.7]">
                  Start your week with an automated executive summary detailing last week's wins, hidden losses, and the three most important actions for the week ahead.
                </p>
              </div>
              <div className="flex-1 w-full relative">
                <div className="aspect-[4/3] bg-[#162545] border border-[#1E3A5F] rounded-2xl flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-custom opacity-5"></div>
                  <i className="fa-solid fa-clipboard text-[#1E3A5F] text-[80px] group-hover:text-[#00A885]/20 text-opacity-50 transition-colors duration-500"></i>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="flex-1 lg:pl-8">
                <h3 className="text-white text-[28px] md:text-[32px] font-bold mb-6 leading-tight">Instant Floor Directives</h3>
                <p className="text-text-secondary text-[16px] md:text-[18px] leading-[1.7]">
                  When an asset flags or a safety risk is detected, the right person gets the right instruction instantly. Minimal noise, maximum response.
                </p>
              </div>
              <div className="flex-1 w-full relative">
                <div className="aspect-[4/3] bg-[#162545] border border-[#1E3A5F] rounded-2xl flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-custom opacity-5"></div>
                  <i className="fa-solid fa-list-ol text-[#1E3A5F] text-[80px] group-hover:text-[#00A885]/20 text-opacity-50 transition-colors duration-500"></i>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 lg:pr-8">
                <h3 className="text-white text-[28px] md:text-[32px] font-bold mb-6 leading-tight">Multi-Unit Operational Parity</h3>
                <p className="text-text-secondary text-[16px] md:text-[18px] leading-[1.7]">
                  If you run 20 locations, you can’t be everywhere. PremisEdge acts as your eyes and ears at every site, ensuring operational consistency across your entire footprint.
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

        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#0A1628] py-[100px] px-6 text-center border-t border-[#1E3A5F]">
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-white text-[32px] md:text-[40px] font-bold mb-8">Ready to experience continuous intelligence?</h2>
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
