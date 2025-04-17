import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold font-display">
                preseed<span className="text-primary-purple">.pro</span>
              </span>
            </a>
            <p className="text-white/70 mb-6">
              The platform where founders validate ideas through micro-commitments from real users.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-primary-purple transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-primary-purple transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-primary-purple transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-primary-purple transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-primary-purple transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">For Founders</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-primary-purple transition-colors">Start a Campaign</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary-purple transition-colors">Pricing</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary-purple transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary-purple transition-colors">Resources</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary-purple transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">For Backers</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-primary-purple transition-colors">Explore Projects</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary-purple transition-colors">How It Works</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary-purple transition-colors">Trust & Safety</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary-purple transition-colors">FAQ</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary-purple transition-colors">Contact Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-primary-purple transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary-purple transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary-purple transition-colors">Press</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary-purple transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary-purple transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Preseed.pro. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 text-sm hover:text-primary-purple transition-colors">Privacy</a>
            <a href="#" className="text-white/60 text-sm hover:text-primary-purple transition-colors">Terms</a>
            <a href="#" className="text-white/60 text-sm hover:text-primary-purple transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

