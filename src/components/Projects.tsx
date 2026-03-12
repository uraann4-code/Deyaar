import { motion } from 'motion/react';
import { Bed, Bath, Square, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'DHA Islamabad',
    location: 'Phase 2 & 5',
    desc: 'Premium residential and commercial plots in the most secure and developed community of the twin cities.',
    status: 'Ongoing Projects',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Bahria Town',
    location: 'Rawalpindi / Islamabad',
    desc: 'World-class infrastructure and lifestyle. We deal in Phase 7, 8, and Bahria Enclave luxury properties.',
    status: 'Investment Hotspot',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Gulberg Greens',
    location: 'Islamabad Expressway',
    desc: 'The greenest living experience in Islamabad. Exclusive farmhouses and luxury apartments available in Civic Center.',
    status: 'Premium Living',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Projects() {
  return (
    <section id="properties" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-5xl md:text-6xl leading-tight">
              Major <span className="italic text-gold">Projects</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs text-sm italic">
            Specializing in the most prestigious developments across the Twin Cities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-6 rounded-sm">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-gold text-white px-4 py-2 text-[10px] font-bold tracking-widest uppercase">
                  {project.status}
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl mb-1">{project.title}</h3>
                    <p className="text-gold text-sm font-medium uppercase tracking-wider">{project.location}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {project.desc}
                </p>
                <div className="pt-4">
                  <button className="text-xs font-bold uppercase tracking-widest border-b border-ink pb-1 hover:text-gold hover:border-gold transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
