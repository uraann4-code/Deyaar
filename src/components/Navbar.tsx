import { motion } from 'motion/react';
import { Home, Search, Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  onEnquire: () => void;
}

export default function Navbar({ onEnquire }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-gold flex items-center justify-center rounded-sm">
            <Home className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-serif font-bold tracking-widest uppercase">Deyaar</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {['Projects', 'Services', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium tracking-widest uppercase hover:text-gold transition-colors"
            >
              {item}
            </a>
          ))}
          <button 
            onClick={onEnquire}
            className="bg-ink text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-gold transition-all duration-300"
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white absolute top-full left-0 right-0 border-t border-gray-100 p-6 flex flex-col gap-6 shadow-xl"
        >
          {['Projects', 'Services', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-lg font-serif font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              onEnquire();
            }}
            className="bg-gold text-white py-4 font-bold uppercase tracking-widest"
          >
            Enquire Now
          </button>
        </motion.div>
      )}
    </nav>
  );
}
