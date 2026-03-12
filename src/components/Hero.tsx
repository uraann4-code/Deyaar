import { motion } from 'motion/react';
import { Search, MapPin, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80" 
          alt="Luxury Real Estate Islamabad" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4 block">
              Premium Real Estate in Pakistan
            </span>
            <h1 className="text-6xl md:text-8xl text-white leading-[0.9] mb-8">
              Islamabad's <br />
              <span className="italic text-gold">Finest</span> <br />
              Properties.
            </h1>
            <p className="text-white/70 text-lg mb-10 max-w-md font-light leading-relaxed">
              Deyaar Realestate brings you exclusive investment opportunities in the heart of Islamabad and Rawalpindi. From DHA to Bahria Town, we find your perfect space.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-2 rounded-sm flex flex-col md:flex-row items-stretch gap-2 max-w-xl"
          >
            <div className="flex-1 flex items-center px-4 py-3 gap-3 border-b md:border-b-0 md:border-r border-gray-200">
              <MapPin className="text-gold w-5 h-5" />
              <input 
                type="text" 
                placeholder="Location, City..." 
                className="bg-transparent border-none outline-none w-full text-sm font-medium"
              />
            </div>
            <button className="bg-gold text-white px-8 py-4 flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-xs hover:bg-ink transition-all duration-300">
              Search <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          <div className="mt-16 flex gap-12">
            {[
              { label: 'Happy Clients', value: '1,500+' },
              { label: 'Major Projects', value: '50+' },
              { label: 'Experience', value: '15+ Years' }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
              >
                <div className="text-white text-2xl font-serif">{stat.value}</div>
                <div className="text-white/50 text-[10px] uppercase tracking-widest font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Vertical Rail Text */}
      <div className="absolute right-10 bottom-20 hidden lg:block">
        <div className="rotate-90 origin-right text-white/20 text-[10px] uppercase tracking-[1em] font-bold whitespace-nowrap">
          ESTABLISHED IN 2010 • LUXURY REAL ESTATE
        </div>
      </div>
    </section>
  );
}
