import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';

export function Zone2() {
  return (
    <section id="solutions" className="bg-bg-primary py-[80px] lg:py-[120px] px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h4 className="text-gradient uppercase tracking-[3px] text-[12px] font-semibold mb-4">SIGNATURE SOLUTIONS</h4>
          <h2 className="text-white text-[32px] lg:text-[48px] font-bold tracking-tight">The problems we were built to solve</h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <FadeIn delay={0}>
            <div className="group h-full bg-bg-card rounded-2xl p-12 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,168,133,0.15)] flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-custom"></div>
              <div className="mb-6">
                <i className="fa-solid fa-wave-pulse text-transparent bg-clip-text bg-gradient-custom text-[40px]"></i>
              </div>
              <h3 className="text-white text-[28px] font-bold mb-3 leading-tight">Predictive Maintenance</h3>
              <p className="text-gradient text-[16px] font-semibold mb-6">Catching failure weeks before it stops the line.</p>
              <p className="text-text-secondary text-[16px] leading-[1.6] mb-8 flex-grow">
                You can't afford unexpected downtime. PremisEdge deploys vibration and thermal tracking directly onto your critical machinery to map your operational baseline. Our system detects micro-anomalies—subtle shifts in frequency or heat—and alerts your team to mechanical failure weeks before a machine breaks down. You schedule the fix on your terms, not during a midnight emergency shift.
              </p>
              <Link to="/predictive-maintenance" className="block text-center w-full bg-gradient-custom text-white font-medium py-3 px-6 rounded-md hover:shadow-[0_0_20px_rgba(0,168,133,0.3)] transition-shadow">
                See the Detection Blueprint →
              </Link>
            </div>
          </FadeIn>

          {/* Card 2 */}
          <FadeIn delay={0.1}>
            <div className="group h-full bg-bg-card rounded-2xl p-12 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,168,133,0.15)] flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-custom"></div>
              <div className="mb-6">
                <i className="fa-solid fa-eye text-transparent bg-clip-text bg-gradient-custom text-[40px]"></i>
              </div>
              <h3 className="text-white text-[28px] font-bold mb-3 leading-tight">Millisecond Quality Control</h3>
              <p className="text-gradient text-[16px] font-semibold mb-6">Defect detection at a mile a minute.</p>
              <p className="text-text-secondary text-[16px] leading-[1.6] mb-8 flex-grow">
                Human eyes can't catch a microscopic fracture on a high-speed conveyor belt, and they can't perfectly audit every single tray coming out of a commercial oven. PremisEdge's vision intelligence monitors your production output in real time. Whether it's spotting a structural defect on a factory line moving at a mile a minute, or instantly identifying undercooked or burnt food the second it exits the oven, the system flags and isolates anomalies instantly.
              </p>
              <Link to="/quality-control" className="block text-center w-full bg-gradient-custom text-white font-medium py-3 px-6 rounded-md hover:shadow-[0_0_20px_rgba(0,168,133,0.3)] transition-shadow">
                Explore the Architecture →
              </Link>
            </div>
          </FadeIn>

          {/* Card 3 */}
          <FadeIn delay={0.2}>
            <div className="group h-full bg-bg-card rounded-2xl p-12 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,168,133,0.15)] flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-custom"></div>
              <div className="mb-6">
                <i className="fa-solid fa-comment-dots text-transparent bg-clip-text bg-gradient-custom text-[40px]"></i>
              </div>
              <h3 className="text-white text-[28px] font-bold mb-3 leading-tight">Custom Actionable Insights</h3>
              <p className="text-gradient text-[16px] font-semibold mb-6">Real-Time Insights in Plain English.</p>
              <p className="text-text-secondary text-[16px] leading-[1.6] mb-8 flex-grow">
                Generic software floods your team with constant, noisy alerts they eventually ignore. PremisEdge runs silently in the background, instantly flagging critical operational failures the exact moment they occur. Claude AI synthesizes complex raw data into clear, plain-English real-time alerts delivered straight to your phone. You get immediate, actionable protection when it matters most, eliminating the noise and focusing your team on exactly what to do next.
              </p>
              <Link to="/actionable-insights" className="block text-center w-full bg-gradient-custom text-white font-medium py-3 px-6 rounded-md hover:shadow-[0_0_20px_rgba(0,168,133,0.3)] transition-shadow">
                Explore the Intelligence Engine →
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Section Anchor */}
        <FadeIn delay={0.3} className="mt-12">
          <div className="bg-bg-elevated border border-border-subtle rounded-2xl p-10 lg:p-14 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-custom"></div>
            <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
              <div className="flex-1">
                <h3 className="text-white text-[28px] md:text-[32px] font-bold mb-4 flex items-center gap-3">
                  <i className="fa-solid fa-bolt text-transparent bg-clip-text bg-gradient-custom"></i>
                  The On-Premise Advantage
                </h3>
                <p className="text-text-secondary text-[16px] md:text-[18px] leading-[1.7]">
                  Processing video lines running at lightning speeds and tracking thousands of sensor data points requires zero-latency compute. Because PremisEdge processes everything locally on your hardware, you get split-second response times without cloud lag. As a crucial bi-product, your competitive intelligence and operational data never leave your building. You own the data, you own the infrastructure, and you never pay someone else’s ballooning cloud bill.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
