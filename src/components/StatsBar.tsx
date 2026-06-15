import { FadeIn } from './FadeIn';

export function StatsBar() {
  const stats = [
    { value: '0%', label: 'Cloud Data Exposure' },
    { value: '1 Day', label: 'Average Deployment' },
    { value: '24/7', label: 'Facility Monitoring' },
    { value: '3-5%', label: 'Bottom-line margin recovered from waste & defects' }
  ];

  return (
    <section className="bg-gradient-custom py-[60px] px-6 w-full">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="text-white font-bold text-[40px] lg:text-[56px] leading-tight tracking-tight drop-shadow-sm">
                  {stat.value}
                </div>
                <div className="text-white text-[16px] opacity-85 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
