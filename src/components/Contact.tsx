import { useState, FormEvent } from 'react';
import { FadeIn } from './FadeIn';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate real form submission delay before opening mailto client
    // Or normally we'd make an API call here.
    setTimeout(() => {
      setStatus('success');
      const formData = new FormData(e.currentTarget);
      const data: Record<string, string> = {};
      formData.forEach((value, key) => {
        data[key] = value.toString();
      });
      
      const body = `
Name: ${data.name}
Company: ${data.company}
Industry: ${data.industry}
Locations: ${data.locations}

Challenge:
${data.challenge}
      `;

      window.location.href = `mailto:hello@premisedge.com?subject=Free Assessment Request - ${data.company}&body=${encodeURIComponent(body)}`;
    }, 1200);
  };

  return (
    <section id="contact" className="bg-bg-card py-[80px] lg:py-[120px] px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <FadeIn className="text-center w-full">
          <h4 className="text-gradient uppercase tracking-[3px] text-[12px] font-semibold mb-4">GET STARTED</h4>
          <h2 className="text-white text-[32px] lg:text-[48px] font-bold tracking-tight mb-4">Book a Free Assessment</h2>
          <p className="text-text-secondary text-[20px] max-w-[600px] mx-auto mb-[48px]">
            We don't do generic sales pitches. In this 15-minute assessment, we will analyze your existing hardware stack, map your infrastructure requirements, and pinpoint exactly where edge intelligence can claw back your operational margin.
          </p>

          <form onSubmit={handleSubmit} className="max-w-[560px] mx-auto w-full text-left">
            <div className="space-y-4">
              <input 
                type="text" 
                name="name"
                placeholder="Your name" 
                required
                className="w-full bg-bg-elevated border border-border-subtle rounded-lg p-4 text-white text-[16px] placeholder:text-text-secondary outline-none focus:border-[#00A885] focus:shadow-[0_0_0_3px_rgba(0,168,133,0.15)] transition-all"
              />
              <input 
                type="text" 
                name="company"
                placeholder="Company name" 
                required
                className="w-full bg-bg-elevated border border-border-subtle rounded-lg p-4 text-white text-[16px] placeholder:text-text-secondary outline-none focus:border-[#00A885] focus:shadow-[0_0_0_3px_rgba(0,168,133,0.15)] transition-all"
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email address" 
                required
                className="w-full bg-bg-elevated border border-border-subtle rounded-lg p-4 text-white text-[16px] placeholder:text-text-secondary outline-none focus:border-[#00A885] focus:shadow-[0_0_0_3px_rgba(0,168,133,0.15)] transition-all"
              />
              
              <select 
                name="industry"
                required
                defaultValue=""
                className="w-full bg-bg-elevated border border-border-subtle rounded-lg p-4 text-white text-[16px] outline-none focus:border-[#00A885] focus:shadow-[0_0_0_3px_rgba(0,168,133,0.15)] transition-all appearance-none"
                style={{ backgroundImage: 'linear-gradient(45deg, transparent 50%, #8BA5C4 50%), linear-gradient(135deg, #8BA5C4 50%, transparent 50%)', backgroundPosition: 'calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px)', backgroundSize: '5px 5px, 5px 5px', backgroundRepeat: 'no-repeat' }}
              >
                <option value="" disabled className="text-text-secondary">Select your industry</option>
                <option value="industrial_auto">Industrial & Automotive Manufacturing</option>
                <option value="warehousing_logistics">Warehousing, Supply Chain & Logistics</option>
                <option value="food_processing">Commercial Food Processing & Manufacturing</option>
                <option value="restaurant_networks">Restaurant & Food Service Networks</option>
                <option value="multi_unit_hospitality">Multi-Family, Senior Living, Hotels</option>
                <option value="healthcare">Healthcare & Critical Assets</option>
                <option value="other">Other / Custom Operation</option>
              </select>

              <select 
                name="locations"
                required
                defaultValue=""
                className="w-full bg-bg-elevated border border-border-subtle rounded-lg p-4 text-white text-[16px] outline-none focus:border-[#00A885] focus:shadow-[0_0_0_3px_rgba(0,168,133,0.15)] transition-all appearance-none"
                style={{ backgroundImage: 'linear-gradient(45deg, transparent 50%, #8BA5C4 50%), linear-gradient(135deg, #8BA5C4 50%, transparent 50%)', backgroundPosition: 'calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px)', backgroundSize: '5px 5px, 5px 5px', backgroundRepeat: 'no-repeat' }}
              >
                <option value="" disabled className="text-text-secondary">How many locations or facilities?</option>
                <option value="1">1 location</option>
                <option value="2-5">2-5 locations</option>
                <option value="6-20">6-20 locations</option>
                <option value="20+">20+ locations</option>
              </select>

              <textarea 
                name="challenge"
                placeholder="Tell us about your biggest operational challenge (optional)" 
                className="w-full h-[120px] resize-y bg-bg-elevated border border-border-subtle rounded-lg p-4 text-white text-[16px] placeholder:text-text-secondary outline-none focus:border-[#00A885] focus:shadow-[0_0_0_3px_rgba(0,168,133,0.15)] transition-all"
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={status !== 'idle'}
              className="w-full mt-4 bg-gradient-custom text-white font-bold tracking-[1px] text-[18px] py-[18px] rounded-lg transition-all hover:shadow-[0_0_40px_rgba(0,168,133,0.4)] disabled:opacity-80 disabled:cursor-not-allowed group relative overflow-hidden"
              style={{ backgroundSize: '200% auto' }}
              onMouseEnter={(e) => {
                if (status === 'idle') e.currentTarget.style.backgroundPosition = 'right center';
              }}
              onMouseLeave={(e) => {
                if (status === 'idle') e.currentTarget.style.backgroundPosition = 'left center';
              }}
            >
              {status === 'idle' && <span>Book a Free Assessment</span>}
              {status === 'sending' && <span>Sending...</span>}
              {status === 'success' && <span className="text-white drop-shadow-md">We'll be in touch shortly <i className="fa-solid fa-check ml-1"></i></span>}
            </button>

            <p className="text-text-secondary text-[13px] text-center mt-4">
              We respect your privacy. Your information is never shared or sold.
            </p>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
