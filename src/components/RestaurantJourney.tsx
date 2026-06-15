import { useState } from 'react';
import { FadeIn } from './FadeIn';

type Identity = 'Corporate Franchisor' | 'Multi-Unit Franchisee' | 'Independent Operator';
type PainPoint = 'Equipment Failure' | 'Quality & Waste' | 'Labor Inefficiency';
type Scale = '1–5 Locations' | '6–20 Locations' | '21+ Locations';

export default function RestaurantJourney() {
  const [step, setStep] = useState(1);
  const [identity, setIdentity] = useState<Identity | ''>('');
  const [painPoint, setPainPoint] = useState<PainPoint | ''>('');
  const [scale, setScale] = useState<Scale | ''>('');

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleIdentity = (id: Identity) => {
    setIdentity(id);
    nextStep();
  };

  const handlePainPoint = (pp: PainPoint) => {
    setPainPoint(pp);
    nextStep();
  };

  const handleScale = (sc: Scale) => {
    setScale(sc);
    nextStep();
  };

  const getDynamicSubheadline = () => {
    if (!identity || !painPoint || !scale) return "Generic dashboards won't save you. PremisEdge will.";
    
    return `If you are a ${identity} running ${scale} and losing margin to ${painPoint.toLowerCase()}, generic dashboards won't save you. PremisEdge will.`;
  };

  return (
    <div className="bg-[#0A1628] min-h-screen py-[120px] px-6 relative overflow-hidden flex items-center justify-center">
      <div className="max-w-[700px] w-full relative z-10">
        
        {step > 1 && (
          <button 
            onClick={prevStep}
            className="text-[#8BA5C4] hover:text-white transition-colors flex items-center gap-2 mb-8 text-[14px] font-medium"
          >
            &larr; Back
          </button>
        )}

        <div className="relative min-h-[400px]">
          {/* Step 1 */}
          {step === 1 && (
            <FadeIn>
              <div className="text-center mb-10">
                <h1 className="text-white text-[32px] md:text-[48px] font-bold tracking-tight mb-4 leading-tight">
                  At what level are you fighting the margin battle?
                </h1>
                <p className="text-[#8BA5C4] text-[18px] md:text-[20px] leading-[1.6]">
                  Tell us how you operate, and we'll show you how edge intelligence secures your bottom line.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <OptionButton 
                  title="Corporate Franchisor" 
                  subtitle="Protecting the brand standard" 
                  onClick={() => handleIdentity('Corporate Franchisor')}
                />
                <OptionButton 
                  title="Multi-Unit Franchisee" 
                  subtitle="Scaling operational consistency" 
                  onClick={() => handleIdentity('Multi-Unit Franchisee')}
                />
                <OptionButton 
                  title="Independent Operator" 
                  subtitle="Protecting every single dollar" 
                  onClick={() => handleIdentity('Independent Operator')}
                />
              </div>
            </FadeIn>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <FadeIn>
              <div className="text-center mb-10">
                <h1 className="text-white text-[32px] md:text-[48px] font-bold tracking-tight mb-4 leading-tight">
                  Every kitchen leaks profit differently.
                </h1>
                <p className="text-[#8BA5C4] text-[18px] md:text-[20px] leading-[1.6]">
                  What is the biggest blind spot in your operation right now?
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <OptionButton 
                  title="Equipment Failure" 
                  subtitle="Losing inventory to walk-in/freezer drops" 
                  onClick={() => handlePainPoint('Equipment Failure')}
                />
                <OptionButton 
                  title="Quality & Waste" 
                  subtitle="Inconsistent product leaving the make line" 
                  onClick={() => handlePainPoint('Quality & Waste')}
                />
                <OptionButton 
                  title="Labor Inefficiency" 
                  subtitle="Overstaffed on slow hours, crushed on the rush" 
                  onClick={() => handlePainPoint('Labor Inefficiency')}
                />
              </div>
            </FadeIn>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <FadeIn>
              <div className="text-center mb-10">
                <h1 className="text-white text-[32px] md:text-[48px] font-bold tracking-tight mb-4 leading-tight">
                  Scaling blind spots just scales waste.
                </h1>
                <p className="text-[#8BA5C4] text-[18px] md:text-[20px] leading-[1.6]">
                  How wide is your current operational footprint?
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <OptionButton 
                  title="1–5 Locations" 
                  onClick={() => handleScale('1–5 Locations')}
                />
                <OptionButton 
                  title="6–20 Locations" 
                  onClick={() => handleScale('6–20 Locations')}
                />
                <OptionButton 
                  title="21+ Locations" 
                  onClick={() => handleScale('21+ Locations')}
                />
              </div>
            </FadeIn>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <FadeIn>
              <div className="text-center mb-10">
                <h1 className="text-white text-[32px] md:text-[48px] font-bold tracking-tight mb-4 leading-tight">
                  We know exactly how to fix this.
                </h1>
                <p className="text-[#8BA5C4] text-[18px] md:text-[20px] leading-[1.6]">
                  {getDynamicSubheadline()}
                </p>
              </div>

              <div className="bg-[#162545] border border-[#1E3A5F] rounded-2xl p-8 max-w-[500px] mx-auto">
                <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-white text-[14px] font-medium mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full bg-[#0A1628] border border-[#1E3A5F] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00A885] transition-colors"
                      placeholder="Jane Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white text-[14px] font-medium mb-2">Work Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full bg-[#0A1628] border border-[#1E3A5F] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00A885] transition-colors"
                      placeholder="jane@company.com"
                      required
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-gradient-custom text-white text-[16px] font-medium py-3.5 px-6 rounded-lg hover:shadow-[0_0_20px_rgba(0,168,133,0.3)] transition-all mt-4"
                  >
                    Request Your Custom Scoping Session
                  </button>
                </form>
              </div>
            </FadeIn>
          )}
        </div>

      </div>
    </div>
  );
}

function OptionButton({ title, subtitle, onClick }: { title: string, subtitle?: string, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="w-full bg-[#162545] border border-[#1E3A5F] rounded-xl p-6 text-left transition-all duration-300 hover:border-[#00A885] hover:shadow-[0_8px_30px_rgba(0,168,133,0.1)] hover:-translate-y-1 group"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div>
          <h3 className="text-white text-[20px] font-semibold">{title}</h3>
          {subtitle && (
            <p className="text-[#8BA5C4] text-[15px] mt-1">{subtitle}</p>
          )}
        </div>
        <i className="fa-solid fa-arrow-right text-[#1E3A5F] text-[20px] group-hover:text-[#00A885] transition-colors transform group-hover:translate-x-1 duration-300"></i>
      </div>
    </button>
  );
}
