import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Property Investor",
    text: "Deyaar helped me find the perfect plot in DHA Phase 5. Their transparency and professional approach are unmatched in the twin cities.",
    rating: 5
  },
  {
    name: "Sarah Malik",
    role: "Home Owner",
    text: "The best real estate agency in Islamabad for overseas Pakistanis. They handled everything from documentation to possession seamlessly.",
    rating: 5
  },
  {
    name: "Dr. Faisal",
    role: "Commercial Client",
    text: "Professional team and great investment advice for Bahria Town projects. I highly recommend them for anyone looking for secure investments.",
    rating: 5
  }
];

const stats = [
  { label: 'Happy Clients', value: '1,500+' },
  { label: 'Major Projects', value: '50+' },
  { label: 'Experience', value: '15+ Years' },
  { label: 'Successful Deals', value: '1,500+' }
];

export default function Testimonials() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center mb-20">
          <div className="lg:col-span-1">
            <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
              Our Reputation
            </span>
            <h2 className="text-5xl md:text-6xl mb-8 leading-tight">
              Trusted by <br />
              <span className="italic text-gold">Thousands</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              With over a decade of excellence, we have built a legacy of trust and transparency in the Pakistan real estate market.
            </p>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-cream rounded-sm"
              >
                <div className="text-3xl font-serif text-gold mb-2">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-ink/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 border border-gray-100 relative group hover:border-gold/30 transition-colors"
            >
              <Quote className="absolute top-6 right-6 text-gold/10 w-12 h-12 group-hover:text-gold/20 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 leading-relaxed relative z-10">
                "{item.text}"
              </p>
              <div>
                <h4 className="font-bold text-lg">{item.name}</h4>
                <p className="text-gold text-xs uppercase tracking-widest font-medium">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
