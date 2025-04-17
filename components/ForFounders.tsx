import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Users, Zap, ArrowRight } from "lucide-react";

const ForFounders = () => {
  const benefits = [
    {
      icon: <TrendingUp className="text-primary-purple w-5 h-5" />,
      title: "Validate Before Building",
      description: "Test your ideas with real financial commitments, not just email signups or survey responses."
    },
    {
      icon: <Shield className="text-primary-purple w-5 h-5" />,
      title: "De-Risk Development",
      description: "Use pre-seed funds to cover initial costs while knowing there's guaranteed interest."
    },
    {
      icon: <Users className="text-primary-purple w-5 h-5" />,
      title: "Build a Loyal Community",
      description: "Early backers become your most engaged users and vocal advocates."
    },
    {
      icon: <Zap className="text-primary-purple w-5 h-5" />,
      title: "Fast Iteration",
      description: "Get immediate feedback from committed users who want you to succeed."
    }
  ];

  return (
    <section id="for-founders" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/3 -right-10 w-72 h-72 rounded-full bg-preseed-lightpurple opacity-50 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="animate-on-scroll opacity-0">
            <div className="inline-block px-4 py-1 rounded-full bg-preseed-lightpurple text-primary-purple font-medium text-sm mb-4">
              For Founders
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display text-neutral-dark">
              Stop Guessing, <span className="gradient-text">Start Validating</span>
            </h2>
            
            <p className="text-neutral-gray text-lg mb-8">
              Market research shouldnt be expensive or unreliable. Get real product validation from users 
              willing to put their money where their mouth is.
            </p>
            
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-preseed-lightpurple flex items-center justify-center mr-4">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-dark mb-1">{benefit.title}</h3>
                    <p className="text-neutral-gray">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="gradient-purple btn-hover text-white py-6 px-8 text-lg font-semibold rounded-xl flex items-center gap-2 group">
              Start Your Campaign 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Right side - Image/card */}
          <div className="animate-on-scroll opacity-0" style={{ animationDelay: '200ms' }}>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-light relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-purple rounded-br-3xl rounded-tl-xl"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-neutral-dark">Campaign Dashboard</h3>
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">ACTIVE</span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex justify-between text-sm text-neutral-gray mb-1">
                      <span>Funding Progress</span>
                      <span>$1,250 of $2,000</span>
                    </div>
                    <div className="w-full h-3 bg-neutral-light rounded-full overflow-hidden">
                      <div className="h-full bg-primary-purple w-[62.5%] rounded-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm text-neutral-gray mb-1">
                      <span>Backers</span>
                      <span>250</span>
                    </div>
                    <div className="w-full h-3 bg-neutral-light rounded-full overflow-hidden">
                      <div className="h-full bg-accent-blue w-[70%] rounded-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm text-neutral-gray mb-1">
                      <span>Time Remaining</span>
                      <span>14 days</span>
                    </div>
                    <div className="w-full h-3 bg-neutral-light rounded-full overflow-hidden">
                      <div className="h-full bg-accent-orange w-[40%] rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-neutral-light/50 rounded-lg p-4">
                    <span className="text-neutral-gray text-sm">Avg. Pledge</span>
                    <p className="text-xl font-bold text-neutral-dark">$5.00</p>
                  </div>
                  <div className="bg-neutral-light/50 rounded-lg p-4">
                    <span className="text-neutral-gray text-sm">Conversion</span>
                    <p className="text-xl font-bold text-neutral-dark">8.2%</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-neutral-dark">Recent Backers</h4>
                  
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-neutral-light/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary-purple/20 flex items-center justify-center text-sm font-semibold text-primary-purple">
                          {String.fromCharCode(64 + i)}
                        </div>
                        <span className="text-neutral-dark font-medium">User{i}23</span>
                      </div>
                      <span className="text-green-600 font-semibold">+$5.00</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForFounders;

