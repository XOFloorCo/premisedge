import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ParticleCanvas } from './ParticleCanvas';
import { Link } from 'react-router-dom';
import edgeNodeImg from '../assets/images/isometric_edge_node_1781540557811.jpg';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hideChevron = scrollY > 100;

  return (
    <section className="relative w-full min-h-screen bg-bg-primary overflow-hidden flex items-center pt-24 pb-16">
      {/* Background Canvas */}
      <ParticleCanvas />
      
      {/* Radial Gradient Overlay to fade edges into background */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, #0A1628 80%)',
          opacity: 0.4,
          zIndex: 1
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center flex-col-reverse lg:flex-row">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left"
          >
            {/* Label Pill */}
            <div className="rounded-full p-[1px] bg-gradient-custom inline-block mb-6">
              <div className="bg-bg-primary rounded-full px-4 py-1">
                <span className="text-gradient uppercase tracking-[3px] text-[12px] font-semibold">
                  Physical AI Platform
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-white text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-tight mb-6">
              They're spending a trillion dollars to make you dependent. <span className="text-transparent bg-clip-text bg-gradient-custom">We built the alternative.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-text-secondary text-[18px] lg:text-[22px] font-normal leading-[1.6]">
              Three technologies. One platform. Your facility, finally illuminated.
            </p>

            {/* Target Environments Inline Links */}
            <div className="flex flex-col mt-12 w-full max-w-xl">
              <span className="text-white text-[14px] font-bold tracking-wider uppercase mb-5 border-b border-border-subtle pb-3">Design My Edge System:</span>
              <div className="flex flex-wrap gap-2.5">
                <Link to="/markets/mobile-security" className="rounded-full p-[1px] bg-gradient-custom inline-block hover:-translate-y-0.5 transition-transform group shadow-sm">
                  <div className="bg-[#06081A] rounded-full px-4 py-2 hover:bg-[#0A0F24] transition-colors">
                    <span className="text-gradient uppercase tracking-[1px] text-[11px] font-bold whitespace-nowrap">Mobile Security & Surveillance</span>
                  </div>
                </Link>
                <Link to="/markets/restaurants-qsr" className="rounded-full p-[1px] bg-gradient-custom inline-block hover:-translate-y-0.5 transition-transform group shadow-sm">
                  <div className="bg-[#06081A] rounded-full px-4 py-2 hover:bg-[#0A0F24] transition-colors">
                    <span className="text-gradient uppercase tracking-[1px] text-[11px] font-bold whitespace-nowrap">Restaurants, QSR & Pizzerias</span>
                  </div>
                </Link>
                <Link to="/markets/smart-cities" className="rounded-full p-[1px] bg-gradient-custom inline-block hover:-translate-y-0.5 transition-transform group shadow-sm">
                  <div className="bg-[#06081A] rounded-full px-4 py-2 hover:bg-[#0A0F24] transition-colors">
                    <span className="text-gradient uppercase tracking-[1px] text-[11px] font-bold whitespace-nowrap">Smart Cities & Municipalities</span>
                  </div>
                </Link>
                <Link to="/markets/education-campuses" className="rounded-full p-[1px] bg-gradient-custom inline-block hover:-translate-y-0.5 transition-transform group shadow-sm">
                  <div className="bg-[#06081A] rounded-full px-4 py-2 hover:bg-[#0A0F24] transition-colors">
                    <span className="text-gradient uppercase tracking-[1px] text-[11px] font-bold whitespace-nowrap">Education & Campuses</span>
                  </div>
                </Link>
                <Link to="/markets/construction-remote" className="rounded-full p-[1px] bg-gradient-custom inline-block hover:-translate-y-0.5 transition-transform group shadow-sm">
                  <div className="bg-[#06081A] rounded-full px-4 py-2 hover:bg-[#0A0F24] transition-colors">
                    <span className="text-gradient uppercase tracking-[1px] text-[11px] font-bold whitespace-nowrap">Construction & Remote Sites</span>
                  </div>
                </Link>
                <Link to="/markets/warehousing-logistics" className="rounded-full p-[1px] bg-gradient-custom inline-block hover:-translate-y-0.5 transition-transform group shadow-sm">
                  <div className="bg-[#06081A] rounded-full px-4 py-2 hover:bg-[#0A0F24] transition-colors">
                    <span className="text-gradient uppercase tracking-[1px] text-[11px] font-bold whitespace-nowrap">Warehousing & Logistics</span>
                  </div>
                </Link>
                <Link to="/markets/retail-multi-location" className="rounded-full p-[1px] bg-gradient-custom inline-block hover:-translate-y-0.5 transition-transform group shadow-sm">
                  <div className="bg-[#06081A] rounded-full px-4 py-2 hover:bg-[#0A0F24] transition-colors">
                    <span className="text-gradient uppercase tracking-[1px] text-[11px] font-bold whitespace-nowrap">Retail & Multi-Location</span>
                  </div>
                </Link>
                <Link to="/markets/manufacturing-industrial" className="rounded-full p-[1px] bg-gradient-custom inline-block hover:-translate-y-0.5 transition-transform group shadow-sm">
                  <div className="bg-[#06081A] rounded-full px-4 py-2 hover:bg-[#0A0F24] transition-colors">
                    <span className="text-gradient uppercase tracking-[1px] text-[11px] font-bold whitespace-nowrap">Manufacturing & Industrial</span>
                  </div>
                </Link>
                <Link to="/markets/energy-utilities" className="rounded-full p-[1px] bg-gradient-custom inline-block hover:-translate-y-0.5 transition-transform group shadow-sm">
                  <div className="bg-[#06081A] rounded-full px-4 py-2 hover:bg-[#0A0F24] transition-colors">
                    <span className="text-gradient uppercase tracking-[1px] text-[11px] font-bold whitespace-nowrap">Energy & Utilities</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Badges Row */}
            <div className="flex flex-wrap justify-start gap-3 mt-12 w-full">
              {['Powered by NVIDIA Jetson', 'Intelligence by Claude AI', 'Sovereign by Design'].map((badge) => (
                <div 
                  key={badge}
                  className="bg-bg-card border border-border-subtle hover:border-[#00A885] transition-colors rounded-full px-4 py-2 text-text-secondary text-[13px] font-medium"
                >
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column (Visual Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full relative order-last"
          >
            {/* The Visual Card */}
            <div className="bg-slate-50 border border-slate-200 text-slate-900 rounded-xl p-8 shadow-xl relative overflow-hidden z-10 flex flex-col">
              
              {/* Header / Status Bar */}
              <div className="flex justify-between items-center mb-6 border-b border-slate-300 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#00A885] animate-pulse"></div>
                  <span className="text-[#00A885] font-mono text-[10px] sm:text-xs tracking-wider font-bold">LOCAL COMPUTE ACTIVE // 0% CLOUD LEAKAGE</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                </div>
              </div>

              {/* Main Visual Display */}
              <div className="relative bg-white rounded-lg border border-slate-200 overflow-hidden mb-6 shadow-sm">
                <img 
                  src={edgeNodeImg}
                  alt="Edge AI Hardware Node" 
                  className="w-full h-auto object-cover max-h-[300px] object-center"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Capabilities Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {/* Cap 1 */}
                <div className="bg-white border border-slate-200 rounded-lg p-3 flex items-start gap-3 shadow-sm hover:border-[#0066FF] transition-colors">
                  <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF] shrink-0">
                    <i className="fa-solid fa-gauge-high text-sm"></i>
                  </div>
                  <div>
                    <div className="text-slate-900 text-xs font-bold mb-0.5">Real-Time Response</div>
                    <div className="text-slate-500 text-[10px] leading-tight">Process data locally for instant decisions.</div>
                  </div>
                </div>
                {/* Cap 2 */}
                <div className="bg-white border border-slate-200 rounded-lg p-3 flex items-start gap-3 shadow-sm hover:border-[#00A885] transition-colors">
                  <div className="w-8 h-8 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-[#00A885] shrink-0">
                    <i className="fa-solid fa-shield-halved text-sm"></i>
                  </div>
                  <div>
                    <div className="text-slate-900 text-xs font-bold mb-0.5">Privacy & Control</div>
                    <div className="text-slate-500 text-[10px] leading-tight">Keep sensitive video data on-premises.</div>
                  </div>
                </div>
                {/* Cap 3 */}
                <div className="bg-white border border-slate-200 rounded-lg p-3 flex items-start gap-3 shadow-sm hover:border-[#0066FF] transition-colors">
                  <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF] shrink-0">
                    <i className="fa-solid fa-cloud-arrow-down text-sm"></i>
                  </div>
                  <div>
                    <div className="text-slate-900 text-xs font-bold mb-0.5">Lower Bandwidth</div>
                    <div className="text-slate-500 text-[10px] leading-tight">Send only alerts, not heavy streams.</div>
                  </div>
                </div>
                {/* Cap 4 */}
                <div className="bg-white border border-slate-200 rounded-lg p-3 flex items-start gap-3 shadow-sm hover:border-[#9848FC] transition-colors">
                  <div className="w-8 h-8 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-[#9848FC] shrink-0">
                    <i className="fa-solid fa-server text-sm"></i>
                  </div>
                  <div>
                    <div className="text-slate-900 text-xs font-bold mb-0.5">Operational Resilience</div>
                    <div className="text-slate-500 text-[10px] leading-tight">Runs smoothly even offline.</div>
                  </div>
                </div>
              </div>

              {/* Embedded Actions */}
              <div className="flex flex-col gap-3 w-full mt-auto">
                <Link 
                  to="/custom-journey"
                  className="group relative overflow-hidden bg-gradient-custom text-white text-[16px] font-medium px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition-all w-full text-center"
                  style={{ backgroundSize: '150% auto' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundPosition = 'right center';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundPosition = 'left center';
                  }}
                >
                  <span className="relative z-10 font-bold tracking-wide">START DIAGNOSTIC FUNNEL</span>
                </Link>
                <Link 
                  to="/how-it-works"
                  className="group relative overflow-hidden bg-slate-900 hover:bg-slate-800 text-white text-[16px] font-medium px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition-all text-center"
                >
                  <span className="relative z-10 font-bold tracking-wide">EXPLORE ARCHITECTURE</span>
                </Link>
              </div>

            </div>

            {/* Glowing Accent Behind Card */}
            <div className="absolute -inset-4 bg-gradient-custom opacity-[0.15] blur-2xl z-0 rounded-[30%] w-[110%] h-[110%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-4 lg:bottom-10 left-1/2 -translate-x-1/2 z-10 text-[#00A885] text-2xl"
        animate={{ 
          y: [0, 10, 0],
          opacity: hideChevron ? 0 : 1
        }}
        transition={{ 
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
          opacity: { duration: 0.3 }
        }}
      >
        <i className="fa-solid fa-chevron-down"></i>
      </motion.div>
    </section>
  );
}
