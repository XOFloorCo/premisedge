import React, { useState } from 'react';
import { FadeIn } from './FadeIn';

type Option = {
  title: string;
  subtitle: string;
  value: string;
};

const industries: Option[] = [
  { 
    title: "Manufacturing & Heavy Industry", 
    subtitle: "Protecting production lines and machinery", 
    value: "manufacturing or heavy industry" 
  },
  { 
    title: "Warehousing, Logistics & Cold Chain", 
    subtitle: "Protecting inventory and high-speed flow", 
    value: "warehousing, logistics, or cold chain" 
  },
  { 
    title: "Multi-Unit Operations & Healthcare", 
    subtitle: "Protecting distributed critical assets", 
    value: "multi-unit operations or healthcare" 
  }
];

const painPoints: Option[] = [
  { 
    title: "Unplanned Machine Downtime", 
    subtitle: "We run to failure and react to breakdowns", 
    value: "unplanned machine downtime" 
  },
  { 
    title: "Quality Control & Scrap Waste", 
    subtitle: "We catch defects too late in the process", 
    value: "quality control and scrap waste" 
  },
  { 
    title: "Labor & Shift Inefficiency", 
    subtitle: "We struggle to balance headcount with real-time demand", 
    value: "labor and shift inefficiency" 
  }
];

const scales: Option[] = [
  { 
    title: "Single Facility", 
    subtitle: "Under 100,000 sq ft", 
    value: "single facility" 
  },
  { 
    title: "Massive Single Campus", 
    subtitle: "100,000+ sq ft", 
    value: "massive single campus" 
  },
  { 
    title: "Distributed Network", 
    subtitle: "Multiple locations across regions", 
    value: "distributed network" 
  }
];

export default function CustomJourney() {
  const [step, setStep] = useState(1);
  const [industry, setIndustry] = useState('');
  const [painPoint, setPainPoint] = useState('');
  const [scale, setScale] = useState('');

  const handleIndustry = (val: string) => { setIndustry(val); setStep(2); };
  const handlePainPoint = (val: string) => { setPainPoint(val); setStep(3); };
  const handleScale = (val: string) => { setScale(val); setStep(4); };

  return (
    <div className="bg-[#0A1628] min-h-screen pt-[120px] pb-[80px] px-6">
      <div className="max-w-[800px] mx-auto">
        <div className="bg-[#0F2040] border border-[#1E3A5F] rounded-2xl p-8 lg:p-[64px] relative min-h-[500px]">
          
          {step > 1 && (
            <button 
              onClick={() => setStep(step - 1)}
              className="absolute top-6 left-6 lg:top-8 lg:left-8 text-[#8BA5C4] hover:text-[#00A885] transition-colors text-sm font-medium flex items-center gap-2 z-10"
            >
              <i className="fa-solid fa-arrow-left"></i> Back
            </button>
          )}

          {step === 1 && (
            <FadeIn key="step1">
              <div className="text-center mb-10 mt-4">
                <h2 className="text-white text-[32px] md:text-[40px] font-bold tracking-tight mb-4 leading-tight">Let's map your operational baseline.</h2>
                <p className="text-[#8BA5C4] text-[18px] leading-[1.6]">Tell us what you build, move, or manage, and we'll show you exactly how edge compute protects it.</p>
              </div>
              <div className="flex flex-col gap-4">
                {industries.map((opt) => (
                  <button 
                    key={opt.value} 
                    onClick={() => handleIndustry(opt.value)}
                    className="w-full text-left bg-[#162545] border border-[#1E3A5F] rounded-xl p-6 transition-all duration-300 hover:border-[#00A885] hover:bg-[#1C2C4F] hover:-translate-y-[2px]"
                  >
                    <div className="text-white text-[18px] font-semibold mb-1">{opt.title}</div>
                    <div className="text-[#8BA5C4] text-[15px]">{opt.subtitle}</div>
                  </button>
                ))}
              </div>
            </FadeIn>
          )}

          {step === 2 && (
            <FadeIn key="step2">
              <div className="text-center mb-10 mt-4">
                <h2 className="text-white text-[32px] md:text-[40px] font-bold tracking-tight mb-4 leading-tight">Every operation bleeds margin somewhere.</h2>
                <p className="text-[#8BA5C4] text-[18px] leading-[1.6]">Where is your biggest operational blind spot right now?</p>
              </div>
              <div className="flex flex-col gap-4">
                {painPoints.map((opt) => (
                  <button 
                    key={opt.value} 
                    onClick={() => handlePainPoint(opt.value)}
                    className="w-full text-left bg-[#162545] border border-[#1E3A5F] rounded-xl p-6 transition-all duration-300 hover:border-[#00A885] hover:bg-[#1C2C4F] hover:-translate-y-[2px]"
                  >
                    <div className="text-white text-[18px] font-semibold mb-1">{opt.title}</div>
                    <div className="text-[#8BA5C4] text-[15px]">{opt.subtitle}</div>
                  </button>
                ))}
              </div>
            </FadeIn>
          )}

          {step === 3 && (
            <FadeIn key="step3">
              <div className="text-center mb-10 mt-4">
                <h2 className="text-white text-[32px] md:text-[40px] font-bold tracking-tight mb-4 leading-tight">Scaling blind spots just scales waste.</h2>
                <p className="text-[#8BA5C4] text-[18px] leading-[1.6]">What is the physical footprint of your current deployment?</p>
              </div>
              <div className="flex flex-col gap-4">
                {scales.map((opt) => (
                  <button 
                    key={opt.value} 
                    onClick={() => handleScale(opt.value)}
                    className="w-full text-left bg-[#162545] border border-[#1E3A5F] rounded-xl p-6 transition-all duration-300 hover:border-[#00A885] hover:bg-[#1C2C4F] hover:-translate-y-[2px]"
                  >
                    <div className="text-white text-[18px] font-semibold mb-1">{opt.title}</div>
                    <div className="text-[#8BA5C4] text-[15px]">{opt.subtitle}</div>
                  </button>
                ))}
              </div>
            </FadeIn>
          )}

          {step === 4 && (
            <FadeIn key="step4">
              <div className="text-center mb-10 mt-4">
                <h2 className="text-white text-[32px] md:text-[40px] font-bold tracking-tight mb-4 leading-tight">We have your architecture blueprint.</h2>
                <p className="text-[#8BA5C4] text-[18px] leading-[1.6]">
                  If you are running a {scale} in {industry} and bleeding margin to {painPoint}, generic cloud software won't save you. PremisEdge's localized edge infrastructure will.
                </p>
              </div>
              
              <form className="flex flex-col gap-5 max-w-[500px] mx-auto text-left" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-[#8BA5C4] text-[14px] font-semibold mb-2">Name</label>
                  <input type="text" className="w-full bg-[#162545] border border-[#1E3A5F] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#00A885] focus:ring-1 focus:ring-[#00A885] transition-all" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-[#8BA5C4] text-[14px] font-semibold mb-2">Company</label>
                  <input type="text" className="w-full bg-[#162545] border border-[#1E3A5F] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#00A885] focus:ring-1 focus:ring-[#00A885] transition-all" placeholder="Enter your company name" />
                </div>
                <div>
                  <label className="block text-[#8BA5C4] text-[14px] font-semibold mb-2">Email</label>
                  <input type="email" className="w-full bg-[#162545] border border-[#1E3A5F] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#00A885] focus:ring-1 focus:ring-[#00A885] transition-all" placeholder="Enter your email address" />
                </div>
                <button type="submit" className="w-full bg-gradient-custom text-white text-[18px] font-medium py-4 px-8 rounded-md hover:shadow-[0_0_20px_rgba(0,168,133,0.3)] transition-shadow mt-4">
                  Request Engineering Blueprint
                </button>
              </form>
            </FadeIn>
          )}

        </div>
      </div>
    </div>
  );
}
