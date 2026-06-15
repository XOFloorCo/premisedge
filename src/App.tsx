import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OutcomeGap } from './components/OutcomeGap';
import { Zone2 } from './components/Zone2';
import { Zone3 } from './components/Zone3';
import { StatsBar } from './components/StatsBar';
import { WhyOnPremises } from './components/WhyOnPremises';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import HowItWorks from './components/HowItWorks';
import Architect from './components/Architect';
import Deploy from './components/Deploy';
import Illuminate from './components/Illuminate';
import RestaurantJourney from './components/RestaurantJourney';
import Thesis from './components/Thesis';
import PredictiveMaintenance from './components/PredictiveMaintenance';
import QualityControl from './components/QualityControl';
import ActionableInsights from './components/ActionableInsights';
import Pricing from './components/Pricing';
import FoundingPilot from './components/FoundingPilot';
import CustomJourney from './components/CustomJourney';
import MarketCategory from './components/MarketCategory';

function ScrollToTopOrHash() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function LandingPage() {
  return (
    <>
      <Hero />
      <OutcomeGap />
      <WhyOnPremises />
      <Zone2 />
      <Zone3 />
      <StatsBar />
      <About />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOrHash />
      <main className="min-h-screen bg-bg-primary text-white font-sans selection:bg-[#00A885]/30 selection:text-white pb-0">
        <AnnouncementBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/architect" element={<Architect />} />
          <Route path="/deploy" element={<Deploy />} />
          <Route path="/illuminate" element={<Illuminate />} />
          <Route path="/restaurant-journey" element={<RestaurantJourney />} />
          <Route path="/thesis" element={<Thesis />} />
          <Route path="/predictive-maintenance" element={<PredictiveMaintenance />} />
          <Route path="/quality-control" element={<QualityControl />} />
          <Route path="/actionable-insights" element={<ActionableInsights />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/founding-pilot" element={<FoundingPilot />} />
          <Route path="/custom-journey" element={<CustomJourney />} />
          <Route path="/markets/:categoryId" element={<MarketCategory />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

