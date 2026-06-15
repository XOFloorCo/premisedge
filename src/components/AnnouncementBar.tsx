import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissing, setIsDismissing] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('announcement_dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissing(true);
    setTimeout(() => {
      sessionStorage.setItem('announcement_dismissed', 'true');
      setIsVisible(false);
    }, 300); // Matches transition duration
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 bg-gradient-custom transition-transform duration-300 ease-in-out ${isDismissing ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="flex items-center justify-center py-2 px-4 relative max-w-7xl mx-auto">
        <Link 
          to="/#contact" 
          className="text-white text-[14px] font-medium hover:opacity-80 transition-opacity text-center mr-8"
        >
          Now accepting Founding Pilot Partners — Limited availability. Apply today →
        </Link>
        <button 
          onClick={handleDismiss}
          className="absolute right-4 text-white/80 hover:text-white top-1/2 -translate-y-1/2"
          aria-label="Dismiss announcement"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
}
