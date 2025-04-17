import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Wallet, Lock, ArrowRight } from "lucide-react";

const ForUsers = () => {
  return (
    <section id="for-users" className="py-24 bg-gradient-to-br from-neutral-dark to-neutral-dark/90 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-primary-purple/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent-blue/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Cards */}
          <div className="space-y-8 animate-on-scroll opacity-0">
            {/* Example project cards */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Eco-friendly Water Bottle</h3>
                  <p className="text-white/70 text-sm">Self-filtering, plastic-free design</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-primary-purple/20 text-primary-purple text-xs font-medium">
                  Trending
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-white/80 mb-4">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>87% success prediction</span>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-xs text-white/80 mb-1">
                  <span>180 backers</span>
                  <span>$900 of $1,200</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary-purple w-3/4 rounded-full"></div>
                </div>
              </div>
              
              <Button className="w-full bg-white text-neutral-dark hover:bg-white/90 font-medium">
                Back for $5
              </Button>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Pocket Translator</h3>
                  <p className="text-white/70 text-sm">Instant 40-language voice translation</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-accent-orange/20 text-accent-orange text-xs font-medium">
                  New
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-white/80 mb-4">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>92% success prediction</span>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-xs text-white/80 mb-1">
                  <span>210 backers</span>
                  <span>$1,050 of $2,000</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-accent-blue w-1/2 rounded-full"></div>
                </div>
              </div>
              
              <Button className="w-full bg-white text-neutral-dark hover:bg-white/90 font-medium">
                Back for $5
              </Button>
            </div>
          </div>
          
          {/* Right column - Content */}
          <div className="animate-on-scroll opacity-0" style={{ animationDelay: '200ms' }}>
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white font-medium text-sm mb-4">
              For Early Adopters
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
              Discover & Support <span className="text-primary-purple">Tomorrow&apos;s Products</span>
            </h2>
            
            <p className="text-white/80 text-lg mb-8">
              Find innovative products in their earliest stages, support the ones you believe in, 
              and help shape the future of technology and entrepreneurship.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mr-4">
                  <Heart className="text-primary-purple w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Support Innovation</h3>
                  <p className="text-white/70">Help bring promising ideas to life with minimal financial commitment.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mr-4">
                  <Wallet className="text-primary-purple w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Risk-Free Backing</h3>
                  <p className="text-white/70">Your money is only released to founders who deliver on their promises.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mr-4">
                  <Lock className="text-primary-purple w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Early Access Guaranteed</h3>
                  <p className="text-white/70">Be the first to try new products and receive exclusive supporter benefits.</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-white text-neutral-dark hover:bg-white/90 py-6 px-8 text-lg font-semibold rounded-xl flex items-center gap-2 group btn-hover">
              Explore Projects 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForUsers;

