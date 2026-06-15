import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';

export default function QualityControl() {
  return (
    <div className="bg-bg-primary min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0A1628] pt-[120px] pb-[80px] px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#162545]/50 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 pt-[80px] lg:pt-[120px]">
          <FadeIn>
            <h4 className="text-gradient uppercase tracking-[3px] text-[12px] font-semibold mb-6">SIGNATURE SOLUTION: MILLISECOND QUALITY CONTROL</h4>
            <h1 className="text-white text-[40px] md:text-[56px] font-bold tracking-tight mb-6 leading-[1.1]">
              Detecting defects the human eye misses.
            </h1>
            <p className="text-[#8BA5C4] text-[18px] md:text-[20px] max-w-[700px] mx-auto leading-[1.6]">
              Human fatigue is the greatest risk to your product quality. We deploy high-speed vision intelligence that monitors every inch of your production line with zero-latency precision.
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
                  A four-hour shift is long enough for a human to start missing micro-fractures.
                </h2>
              </div>
              <div className="flex-1">
                <p className="text-[#8BA5C4] text-[16px] md:text-[18px] leading-[1.7]">
                  In high-speed environments like flooring mills or food processing, quality control is usually reactive. You find the defect after the batch is finished, or worse, after it's shipped. PremisEdge changes the game. By placing vision sensors at the source and processing the feed locally, our AI identifies knots, cracks, or discoloration in milliseconds. We don't just find defects; we give you the ability to stop the line and save the material before it becomes scrap.
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
                  <i className="fa-solid fa-eye text-[#00A885] text-[40px] transition-transform group-hover:scale-110 duration-300"></i>
                </div>
                <h3 className="text-white text-[24px] font-bold mb-4 leading-tight">High-Speed Vision Logic</h3>
                <p className="text-text-secondary text-[16px] leading-[1.6] flex-grow">
                  Enterprise-grade cameras capture your production flow at frame rates far beyond human perception, feeding raw visual data directly to the edge.
                </p>
              </div>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn delay={0.2}>
              <div className="group h-full bg-[#162545] border border-[#1E3A5F] rounded-xl p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,168,133,0.1)] hover:border-[#00A885] hover:-translate-y-1 flex flex-col">
                <div className="mb-8">
                  <i className="fa-solid fa-microchip text-[#00A885] text-[40px] transition-transform group-hover:scale-110 duration-300"></i>
                </div>
                <h3 className="text-white text-[24px] font-bold mb-4 leading-tight">Edge-Based Inference</h3>
                <p className="text-text-secondary text-[16px] leading-[1.6] flex-grow">
                  Because the AI models live on-premise, there is no 'cloud-trip' delay. Decisions are made in milliseconds, allowing for real-time rejection of defective units.
                </p>
              </div>
            </FadeIn>

            {/* Card 3 */}
            <FadeIn delay={0.3}>
              <div className="group h-full bg-[#162545] border border-[#1E3A5F] rounded-xl p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,168,133,0.1)] hover:border-[#00A885] hover:-translate-y-1 flex flex-col">
                <div className="mb-8">
                  <i className="fa-solid fa-diagram-predecessor text-[#00A885] text-[40px] transition-transform group-hover:scale-110 duration-300"></i>
                </div>
                <h3 className="text-white text-[24px] font-bold mb-4 leading-tight">Pattern Recognition</h3>
                <p className="text-text-secondary text-[16px] leading-[1.6] flex-grow">
                  Claude AI is trained on your specific product baselines. It learns the difference between a natural variation and a structural flaw that will compromise the end-user's experience.
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
            <h2 className="text-white text-[32px] md:text-[48px] font-bold tracking-tight">Precision you can prove.</h2>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 lg:pr-8">
                <h3 className="text-white text-[28px] md:text-[32px] font-bold mb-6 leading-tight">Elimination of Scrap Waste</h3>
                <p className="text-text-secondary text-[16px] md:text-[18px] leading-[1.7]">
                  Identify the defect at the exact moment it occurs, allowing you to salvage material instead of throwing away entire finished batches.
                </p>
              </div>
              <div className="flex-1 w-full relative">
                <div className="aspect-[4/3] bg-[#162545] border border-[#1E3A5F] rounded-2xl flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-custom opacity-5"></div>
                  <i className="fa-solid fa-recycle text-[#1E3A5F] text-[80px] group-hover:text-[#00A885]/20 text-opacity-50 transition-colors duration-500"></i>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="flex-1 lg:pl-8">
                <h3 className="text-white text-[28px] md:text-[32px] font-bold mb-6 leading-tight">Absolute Brand Protection</h3>
                <p className="text-text-secondary text-[16px] md:text-[18px] leading-[1.7]">
                  Ensure that 100% of the product leaving your facility meets your premium standards, eliminating the risk of costly returns or liability claims.
                </p>
              </div>
              <div className="flex-1 w-full relative">
                <div className="aspect-[4/3] bg-[#162545] border border-[#1E3A5F] rounded-2xl flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-custom opacity-5"></div>
                  <i className="fa-solid fa-shield-halved text-[#1E3A5F] text-[80px] group-hover:text-[#00A885]/20 text-opacity-50 transition-colors duration-500"></i>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 lg:pr-8">
                <h3 className="text-white text-[28px] md:text-[32px] font-bold mb-6 leading-tight">Automated Quality Logging</h3>
                <p className="text-text-secondary text-[16px] md:text-[18px] leading-[1.7]">
                  Every defect caught is logged with a timestamp and visual proof, providing a mathematically undeniable record of your facility’s quality performance.
                </p>
              </div>
              <div className="flex-1 w-full relative">
                <div className="aspect-[4/3] bg-[#162545] border border-[#1E3A5F] rounded-2xl flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-custom opacity-5"></div>
                  <i className="fa-solid fa-list-check text-[#1E3A5F] text-[80px] group-hover:text-[#00A885]/20 text-opacity-50 transition-colors duration-500"></i>
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
            <h2 className="text-white text-[32px] md:text-[40px] font-bold mb-8">Ready to automate your quality standards?</h2>
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
