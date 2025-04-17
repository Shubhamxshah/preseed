import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-preseed-lightpurple opacity-60 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-preseed-lightpurple opacity-60 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative bg-gradient-to-br from-primary-purple to-primary-dark rounded-3xl overflow-hidden animate-on-scroll opacity-0">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.2),transparent_40%)]"></div>
          </div>
          
          <div className="relative p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
              Ready to Validate Your Next Big Idea?
            </h2>
            
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Join hundreds of founders who are already using pre-seed validation to build products people want.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-white text-primary-purple hover:bg-white/90 py-6 px-8 text-lg font-semibold rounded-xl flex items-center gap-2 group btn-hover">
                Create Your Campaign 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-white text-primary-purple hover:bg-white/10 py-6 px-8 text-lg font-semibold rounded-xl">
                Learn More
              </Button>
            </div>
            
            <div className="mt-8 text-white/80 text-sm">No credit card required • 5-minute setup</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
