import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-ink text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-5xl md:text-6xl mb-8 leading-tight">
              Let's Start Your <br />
              <span className="italic text-gold">Journey</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-md leading-relaxed">
              Whether you're looking to buy, sell, or invest, our expert team is here to guide you every step of the way.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full border border-white/10">
                  <Phone className="text-gold w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Call Us</div>
                  <div className="text-lg">+92 306 0006667</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full border border-white/10">
                  <Mail className="text-gold w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Email Us</div>
                  <div className="text-lg">info@deyaar.pk</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full border border-white/10">
                  <MapPin className="text-gold w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Visit Us</div>
                  <div className="text-lg">Civic center Gulberg Green Near Meezan Bank</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-10 rounded-sm border border-white/10"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 outline-none focus:border-gold transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/20 py-2 outline-none focus:border-gold transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">Subject</label>
                <select className="w-full bg-transparent border-b border-white/20 py-2 outline-none focus:border-gold transition-colors appearance-none">
                  <option className="bg-ink">Buying Property</option>
                  <option className="bg-ink">Selling Property</option>
                  <option className="bg-ink">Investment Advisory</option>
                  <option className="bg-ink">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-2 outline-none focus:border-gold transition-colors resize-none"></textarea>
              </div>
              <button className="w-full bg-gold text-white py-4 flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-ink transition-all duration-500">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
