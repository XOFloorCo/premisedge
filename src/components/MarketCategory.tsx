import { useParams, Link } from 'react-router-dom';
import { FadeIn } from './FadeIn';

type MarketData = {
  title: string;
  subtitle: string;
  description: string;
  useCases: string;
};

const marketData: Record<string, MarketData> = {
  'mobile-security': {
    title: 'Mobile Security & Surveillance',
    subtitle: 'Turn mobile security trailers, camera systems, and remote monitoring setups into intelligent edge AI command posts.',
    description: 'We design and deploy cloud-independent edge AI systems for businesses, institutions, and cities that need intelligence on-site — close to cameras, sensors, staff, vehicles, equipment, and customers.',
    useCases: 'Use edge AI for perimeter detection, person and vehicle alerts, loitering detection, license plate capture, false-alarm reduction, construction site security, and remote asset protection.',
  },
  'restaurants-qsr': {
    title: 'Restaurants, QSR & Pizzerias',
    subtitle: 'Deploy private AI inside restaurants to improve speed, consistency, visibility, and daily operations.',
    description: 'We design and deploy cloud-independent edge AI systems for businesses, institutions, and cities that need intelligence on-site — close to cameras, sensors, staff, vehicles, equipment, and customers.',
    useCases: 'Use edge AI for kitchen flow, drive-thru analytics, order accuracy, phone and ordering assistance, customer traffic insights, employee safety, loss prevention, inventory alerts, and multi-location performance visibility.',
  },
  'smart-cities': {
    title: 'Smart Cities & Municipalities',
    subtitle: 'Build local AI infrastructure for cities that need faster decisions, better visibility, and less dependence on centralized cloud systems.',
    description: 'We design and deploy cloud-independent edge AI systems for businesses, institutions, and cities that need intelligence on-site — close to cameras, sensors, staff, vehicles, equipment, and customers.',
    useCases: 'Use edge AI for traffic monitoring, parking intelligence, public safety, city-owned camera networks, environmental sensors, utility monitoring, emergency response, and connected infrastructure.',
  },
  'education-campuses': {
    title: 'Education & Campuses',
    subtitle: 'Create safer, smarter, more responsive schools, colleges, and campus environments with private edge AI systems.',
    description: 'We design and deploy cloud-independent edge AI systems for businesses, institutions, and cities that need intelligence on-site — close to cameras, sensors, staff, vehicles, equipment, and customers.',
    useCases: 'Use edge AI for campus safety, access monitoring, parking and traffic flow, building occupancy, maintenance alerts, emergency response, energy optimization, student flow analytics, and secure on-site AI assistants for staff operations.',
  },
  'construction-remote': {
    title: 'Construction & Remote Sites',
    subtitle: 'Protect jobsites, equipment, materials, and workers with AI systems built for temporary and rugged environments.',
    description: 'We design and deploy cloud-independent edge AI systems for businesses, institutions, and cities that need intelligence on-site — close to cameras, sensors, staff, vehicles, equipment, and customers.',
    useCases: 'Use edge AI for site security, equipment monitoring, safety alerts, restricted-area detection, delivery tracking, project visibility, after-hours intrusion detection, and remote site intelligence.',
  },
  'warehousing-logistics': {
    title: 'Warehousing & Logistics',
    subtitle: 'Bring real-time intelligence to fast-moving operations where cameras, people, vehicles, docks, and inventory all need to work together.',
    description: 'We design and deploy cloud-independent edge AI systems for businesses, institutions, and cities that need intelligence on-site — close to cameras, sensors, staff, vehicles, equipment, and customers.',
    useCases: 'Use edge AI for dock monitoring, yard visibility, forklift safety, inventory movement, package flow, staging areas, loading zones, route support, and operational bottleneck detection.',
  },
  'retail-multi-location': {
    title: 'Retail & Multi-Location Businesses',
    subtitle: 'Give stores and multi-site operators local AI tools for visibility, security, customer experience, and operational control.',
    description: 'We design and deploy cloud-independent edge AI systems for businesses, institutions, and cities that need intelligence on-site — close to cameras, sensors, staff, vehicles, equipment, and customers.',
    useCases: 'Use edge AI for loss prevention, customer traffic analytics, inventory alerts, staff coverage insights, smart displays, energy optimization, queue monitoring, and location-level performance intelligence.',
  },
  'manufacturing-industrial': {
    title: 'Manufacturing & Industrial Operations',
    subtitle: 'Deploy AI close to machines, cameras, sensors, and production lines for faster detection and better uptime.',
    description: 'We design and deploy cloud-independent edge AI systems for businesses, institutions, and cities that need intelligence on-site — close to cameras, sensors, staff, vehicles, equipment, and customers.',
    useCases: 'Use edge AI for visual inspection, predictive maintenance, worker safety, machine monitoring, anomaly detection, robotics support, quality control, and facility intelligence.',
  },
  'energy-utilities': {
    title: 'Energy, Utilities & Critical Infrastructure',
    subtitle: 'Design rugged edge AI systems for infrastructure that needs reliability, local intelligence, and real-time alerts.',
    description: 'We design and deploy cloud-independent edge AI systems for businesses, institutions, and cities that need intelligence on-site — close to cameras, sensors, staff, vehicles, equipment, and customers.',
    useCases: 'Use edge AI for water systems, substations, pump stations, power assets, solar and storage monitoring, leak detection, grid equipment alerts, remote asset monitoring, and critical infrastructure protection.',
  }
};

export default function MarketCategory() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const market = categoryId ? marketData[categoryId] : null;

  if (!market) {
    return (
      <div className="bg-bg-primary min-h-screen flex items-center justify-center">
        <h1 className="text-white text-3xl">Market not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-bg-primary min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0A1628] pt-[120px] pb-[80px] px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#162545]/50 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 pt-[80px] lg:pt-[120px]">
          <FadeIn>
            <h4 className="text-gradient uppercase tracking-[3px] text-[12px] font-semibold mb-6">EXPLORE EDGE AI MARKETS</h4>
            <h1 className="text-white text-[40px] md:text-[56px] font-bold tracking-tight mb-6 leading-[1.1]">
              {market.title}
            </h1>
            <p className="text-[#8BA5C4] text-[18px] md:text-[20px] max-w-[700px] mx-auto leading-[1.6]">
              {market.subtitle}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Details Section */}
      <section className="bg-[#0F2040] py-[100px] px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <FadeIn>
            <p className="text-[#8BA5C4] text-[18px] leading-[1.7] mb-12">
              {market.description}
            </p>
            <div className="bg-[#162545] border border-[#1E3A5F] rounded-xl p-8 lg:p-10 text-left relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#00A885]"></div>
              <h3 className="text-white text-[24px] font-bold mb-4">Core Use Cases</h3>
              <p className="text-slate-300 text-[18px] leading-[1.7]">
                {market.useCases}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#0A1628] py-[100px] px-6 text-center border-t border-[#1E3A5F]">
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-white text-[32px] md:text-[40px] font-bold mb-8">Ready to architect your deployment?</h2>
            <Link 
              to="/custom-journey" 
              className="inline-block bg-gradient-custom text-white text-[18px] font-medium py-4 px-8 rounded-md hover:shadow-[0_0_20px_rgba(0,168,133,0.3)] transition-shadow"
            >
              Start Diagnostic Funnel
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
