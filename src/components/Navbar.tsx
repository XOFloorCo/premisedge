import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAnnouncement, setHasAnnouncement] = useState(true);

  useEffect(() => {
    // Check if announcement bar is dismissed to adjust top position
    const checkAnnouncement = () => {
      const dismissed = sessionStorage.getItem('announcement_dismissed');
      setHasAnnouncement(!dismissed);
    };
    
    checkAnnouncement();
  }, []);

  const navLinks = [
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Why On-Premises', href: '/#why-on-premises' },
    { name: 'Pricing', href: '/pricing' },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-40 transition-all duration-300 ${hasAnnouncement ? 'top-10' : 'top-0'}`}
      >
        <div className="w-full bg-[#0A1628]/95 backdrop-blur-[20px] border-b border-[#1E3A5F]/50">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="flex items-center z-50">
              <span className="text-white font-bold text-2xl tracking-tight">Premis</span><span className="text-gradient font-bold text-2xl tracking-tight">Edge</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className="text-[#8BA5C4] hover:text-white transition-colors text-[15px] font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/#contact"
                className="bg-gradient-custom text-white font-medium px-6 py-2.5 rounded-md hover:shadow-[0_0_20px_rgba(0,168,133,0.3)] transition-shadow"
              >
                Book a Free Assessment
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button 
              className="lg:hidden text-white z-50 p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#0A1628] flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-2xl font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/#contact"
                onClick={() => setIsOpen(false)}
                className="bg-gradient-custom text-white font-medium px-8 py-4 rounded-md mt-4 shadow-[0_0_20px_rgba(0,168,133,0.2)]"
              >
                Book a Free Assessment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
