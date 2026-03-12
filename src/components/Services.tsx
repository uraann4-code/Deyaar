import { motion } from 'motion/react';
import { Shield, TrendingUp, Key, Users } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Property Management',
    desc: 'Comprehensive management services ensuring your investment is maintained to the highest standards.'
  },
  {
    icon: TrendingUp,
    title: 'Investment Advisory',
    desc: 'Expert market analysis and strategic advice to maximize your real estate portfolio returns.'
  },
  {
    icon: Key,
    title: 'Sales & Leasing',
    desc: 'Specialized brokerage services for high-end residential and commercial properties.'
  },
  {
    icon: Users,
    title: 'Concierge Services',
    desc: 'Personalized assistance for relocation, interior design, and lifestyle management.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
              Expertise
            </span>
            <h2 className="text-5xl md:text-6xl mb-8 leading-tight">
              Beyond Just <br />
              <span className="italic">Transactions</span>
            </h2>
            <p className="text-gray-600 text-lg mb-12 max-w-md leading-relaxed">
              At Deyaar, we provide a holistic approach to real estate. Our services are tailored to meet the sophisticated needs of global investors and homeowners.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div 
                  key={service.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <div className="w-12 h-12 bg-white flex items-center justify-center rounded-sm shadow-sm">
                    <service.icon className="text-gold w-6 h-6" />
                  </div>
                  <h3 className="text-xl">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10 aspect-[3/4] rounded-sm overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80" 
                alt="Modern Office" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-gold/30 -z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gold/10 -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
