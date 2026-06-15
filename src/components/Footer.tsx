import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#060E1A] pt-[40px] lg:pt-[60px] pb-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between mb-12 gap-10">
          
          {/* Left Column */}
          <div className="lg:w-1/3 flex flex-col items-start">
            <div className="flex items-center mb-2">
              <span className="text-white font-bold text-2xl">Premis</span><span className="text-gradient font-bold text-2xl">Edge</span>
            </div>
            <p className="text-text-secondary text-[14px]">Three technologies. One platform.</p>
            <p className="text-transparent bg-clip-text bg-gradient-custom text-[14px] mb-4">Your facility, finally illuminated.</p>
            <div className="flex items-center gap-2 mt-4">
              <i className="fa-solid fa-location-dot text-[#00A885] text-[14px]"></i>
              <span className="text-text-secondary text-[14px]">Livonia, Michigan</span>
            </div>
          </div>

          {/* Middle Column */}
          <div className="lg:w-1/3 flex flex-col">
            <h5 className="text-white text-[14px] font-bold mb-4">Platform</h5>
            <div className="flex flex-col space-y-2">
              <Link to="/how-it-works" className="text-text-secondary hover:text-white text-[14px] transition-colors leading-loose">How It Works</Link>
              <Link to="/#markets" className="text-text-secondary hover:text-white text-[14px] transition-colors leading-loose">Markets</Link>
              <Link to="/#solutions" className="text-text-secondary hover:text-white text-[14px] transition-colors leading-loose">Solutions</Link>
              <Link to="/#why-on-premises" className="text-text-secondary hover:text-white text-[14px] transition-colors leading-loose">Why On-Premises</Link>
              <Link to="/pricing" className="text-text-secondary hover:text-white text-[14px] transition-colors leading-loose">Pricing</Link>
              <Link to="/#about" className="text-text-secondary hover:text-white text-[14px] transition-colors leading-loose">About</Link>
              <Link to="/#contact" className="text-text-secondary hover:text-white text-[14px] transition-colors leading-loose">Book a Free Assessment</Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/3 flex flex-col items-start lg:items-end">
            <h5 className="text-white text-[14px] font-bold mb-4">Contact</h5>
            <a href="mailto:hello@premisedge.com" className="text-transparent bg-clip-text bg-gradient-custom font-medium text-[14px] hover:opacity-80 transition-opacity mb-6">
              hello@premisedge.com
            </a>
            
            <Link to="/founding-pilot" className="inline-block mt-2 border-gradient-custom rounded-full px-4 py-1.5 cursor-pointer group transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-custom opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-[#0066FF] via-[#00A885] to-[#00E5FF] group-hover:text-white group-hover:bg-none transition-all text-[12px] font-medium">
                Founding Pilot Partner Program
              </span>
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-subtle pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-[13px]">
            © 2026 PremisEdge. All rights reserved.
          </p>
          <p className="text-transparent bg-clip-text bg-gradient-custom text-[13px] font-medium">
            Architect. Deploy. Illuminate.
          </p>
        </div>
      </div>
    </footer>
  );
}
