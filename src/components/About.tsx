import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
              Our Vision
            </span>
            <h2 className="text-5xl md:text-6xl mb-8 leading-tight font-serif">
              CEO <span className="italic text-gold">Mansoor Ahmed</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              "At Deyaar, our vision is to redefine the standards of real estate by blending integrity with innovation. We don't just build properties; we create legacies that stand the test of time, ensuring every investment is a step towards a prosperous future."
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] bg-gray-100 rounded-sm overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
              alt="Mansoor Ahmed"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
