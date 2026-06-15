import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';

export function Zone3() {
  const groups = [
    {
      label: 'INTEGRATE',
      items: [
        { icon: 'fa-network-wired', title: 'Brownfield Stack Integration', desc: 'Plugging directly into your legacy machinery and existing camera streams.' },
        { icon: 'fa-microchip', title: 'Custom Firmware Deployments', desc: 'Bridging old physical mechanical relays with modern edge computing nodes.' },
        { icon: 'fa-truck', title: 'Turnkey Hardware Procurement', desc: 'Sourcing, configuring, and delivering the exact localized edge appliances you need.' }
      ]
    },
    {
      label: 'OPTIMIZE',
      items: [
        { icon: 'fa-users', title: 'Predictive Shift Scheduling', desc: 'Identifies over/under-staffed windows in real time to recommend automated shift adjustments.' },
        { icon: 'fa-heart-pulse', title: 'Auxiliary Equipment Health', desc: 'Micro-pulse tracking on minor facility assets so small failures don\'t bottleneck production.' },
        { icon: 'fa-bolt', title: 'Energy Profile Monitoring', desc: 'Real-time power draw profiling to eliminate hidden utility waste on heavy machinery.' }
      ]
    },
    {
      label: 'ANTICIPATE & SAFEGUARD',
      items: [
        { icon: 'fa-boxes-stacked', title: 'Predictive Supply Tracking', desc: 'Tracks raw ingredient levels like flour to auto-generate and print POs days before you run out.' },
        { icon: 'fa-video', title: 'Local Incident Archiving', desc: 'Securing local high-speed video logging for instant liability protection and shift clarity.' },
        { icon: 'fa-shield-halved', title: 'Floor & Worker Safety', desc: 'Visual mapping to eliminate environmental hazards, line blockages, and high-risk zones.' }
      ]
    }
  ];

  return (
    <section className="bg-bg-card py-[80px] lg:py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn className="text-center mb-[64px]">
          <h4 className="text-gradient uppercase tracking-[3px] text-[12px] font-semibold mb-4">EXTENDED CAPABILITIES</h4>
          <h2 className="text-white text-[32px] lg:text-[48px] font-bold tracking-tight mb-6 leading-tight">Every facility has a different starting line.<br className="hidden lg:block" /> We meet you there.</h2>
          <p className="text-text-secondary text-[18px] lg:text-[20px] max-w-[800px] mx-auto leading-[1.6]">
            PremisEdge bridges the gap between legacy physical machinery and modern edge intelligence. Whether you are optimizing a decades-old footprint or deploying an entirely new automated line.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {groups.map((group, gIdx) => (
            <div key={group.label} className="flex flex-col gap-6">
              <FadeIn delay={gIdx * 0.1}>
                <h5 className="text-text-secondary uppercase tracking-[3px] text-[12px] font-semibold flex items-center mb-4">
                  {group.label}
                </h5>
                <div className="flex flex-col gap-4">
                  {group.items.map((item, iIdx) => (
                    <a 
                      key={item.title}
                      href="#"
                      className="group bg-[#162545] border border-[#1E3A5F] rounded-xl p-5 flex flex-col gap-2 transition-all duration-300 hover:border-[#00A885] hover:shadow-[0_8px_30px_rgba(0,168,133,0.1)] hover:-translate-y-1.5 active:translate-y-0"
                    >
                      <div className="flex items-center gap-3">
                        <i className={`fa-solid ${item.icon} text-[#00A885] text-[18px] w-6 text-center transition-transform group-hover:scale-110 duration-300`}></i>
                        <span className="text-white text-[16px] font-semibold">{item.title}</span>
                      </div>
                      <p className="text-text-secondary text-[14px] leading-[1.6] pl-9">
                        {item.desc}
                      </p>
                    </a>
                  ))}
                </div>
              </FadeIn>
            </div>
          ))}
        </div>

        {/* Spatial Digital Twin Row */}
        <FadeIn delay={0.3} className="mt-6 lg:mt-8">
          <Link to="/#contact" className="group bg-[#162545] border border-[#1E3A5F] rounded-xl p-6 lg:p-8 flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center justify-between transition-all duration-300 hover:border-[#00A885] hover:shadow-[0_8px_30px_rgba(0,168,133,0.1)] hover:-translate-y-1.5 active:translate-y-0">
            <div className="flex items-center gap-4 md:shrink-0">
              <i className="fa-solid fa-cube text-[#00A885] text-[24px] w-8 text-center transition-transform group-hover:scale-110 duration-300"></i>
              <span className="text-white text-[18px] lg:text-[20px] font-semibold">Spatial Digital Twin Mapping</span>
            </div>
            <p className="text-text-secondary text-[15px] lg:text-[16px] leading-[1.6]">
              Maps a living, software-replicated spatial replica of your entire physical footprint to effortlessly optimize and monitor multi-unit operations as you scale.
            </p>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
