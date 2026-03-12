import { Home, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gold flex items-center justify-center rounded-sm">
                <Home className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-serif font-bold tracking-widest uppercase">Deyaar</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              The region's most trusted partner in luxury real estate. Excellence in every square foot.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-full hover:bg-gold hover:border-gold hover:text-white transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Properties', 'Services', 'About Us', 'Contact'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-500 hover:text-gold transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Twin Cities Projects</h4>
            <ul className="space-y-4">
              {['DHA Islamabad', 'Bahria Town Rawalpindi', 'Gulberg Greens', 'Eighteen Islamabad', 'Capital Smart City'].map(loc => (
                <li key={loc}>
                  <a href="#" className="text-sm text-gray-500 hover:text-gold transition-colors">{loc}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-sm text-gray-500 mb-4">Subscribe to receive the latest luxury listings.</p>
            <div className="flex border-b border-gray-200 pb-2">
              <input type="email" placeholder="Email Address" className="bg-transparent text-sm outline-none w-full" />
              <button className="text-xs font-bold uppercase tracking-widest text-gold">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
            © 2024 Deyaar Realestate. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] text-gray-400 uppercase tracking-widest font-bold hover:text-gold">Privacy Policy</a>
            <a href="#" className="text-[10px] text-gray-400 uppercase tracking-widest font-bold hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
