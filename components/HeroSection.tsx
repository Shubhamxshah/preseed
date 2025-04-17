import { Button } from "@/components/ui/button";
import { ArrowRight, Star, CheckCircle } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {

  return (
    <section className="relative pt-32 pb-40 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-dark to-neutral-dark/90 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary-purple/20 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-accent-blue/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className={`space-y-8 transition-all duration-700 opacity-100 translate-y-0`}>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Star className="w-4 h-4 text-yellow-300 mr-2" />
              <span className="text-white/90 text-sm font-medium">Validate ideas with real commitment</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white font-display leading-tight">
              Make Market Research 
              <span className="block text-primary-purple animate-pulse-slow">Easy & Effective</span>
            </h1>
            
            <p className="text-lg text-white/80 leading-relaxed max-w-xl">
              Get real validation through micro-payments from users who believe in your idea. 
              No more vanity metrics or empty promises.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button className="gradient-purple btn-hover w-full sm:w-auto text-lg py-6 px-8 rounded-xl font-semibold flex items-center justify-center group">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfnFyfBZBb3OLN8Eo6etvXRV9OblKQ0-x8UNC8iLShT-p4sxg/viewform?usp=sharing">Launch Your Idea
                </Link>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 w-full sm:w-auto text-lg py-6 px-8 rounded-xl font-semibold">
                Explore Projects
              </Button>
            </div>
            
            <div className="flex items-center space-x-5 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-neutral-dark bg-neutral-light flex items-center justify-center text-sm font-semibold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-white/90">
                <span className="font-semibold">500+</span> founders already using Preseed
              </div>
            </div>
          </div>
          
          {/* Right column - Illustration */}
          <div className={`relative transition-all duration-1000 delay-300 opacity-100 translate-y-0`}>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl animate-float">
              <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                VERIFIED
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">AI Writing Assistant</h3>
                  <span className="text-sm font-medium text-white/80">$5 pre-seed</span>
                </div>
                
                <p className="text-white/70">A revolutionary AI writing tool that helps content creators draft high-quality articles in seconds.</p>
                
                <div className="flex flex-col gap-2">
                  {['Beta access', 'Early supporter perks', 'Money-back guarantee'].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-purple mr-2" />
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-2">
                  <div className="flex justify-between text-sm text-white/80 mb-1">
                    <span>Progress</span>
                    <span>76%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary-purple w-3/4 rounded-full"></div>
                  </div>
                </div>
                
                <div className="pt-2 flex justify-between items-center">
                  <div className="text-white/80 text-sm">
                    <span className="font-bold text-white">187</span> backers
                  </div>
                  <Button className="bg-white text-neutral-dark hover:bg-white/90 font-medium">
                    Back this idea
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-lg bg-primary-purple/30 backdrop-blur-sm rotate-12 animate-bounce-subtle"></div>
            <div className="absolute -top-10 -right-10 w-16 h-16 rounded-lg bg-accent-orange/30 backdrop-blur-sm -rotate-12 animate-bounce-subtle" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

