'use client'

import { useEffect, useRef } from "react";
import { PieChart, Users, DollarSign, RefreshCw } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Submit Your Idea",
    description: "Share your product vision and set a funding goal to validate market interest.",
    icon: <PieChart className="w-6 h-6" />,
    color: "bg-primary-purple"
  },
  {
    id: 2,
    title: "Gather Pre-seed Funding",
    description: "Early supporters commit small amounts to show they're genuinely interested.",
    icon: <Users className="w-6 h-6" />,
    color: "bg-accent-orange"
  },
  {
    id: 3,
    title: "Build With Confidence",
    description: "Use the validation and funding to build an MVP that customers actually want.",
    icon: <DollarSign className="w-6 h-6" />,
    color: "bg-accent-blue"
  },
  {
    id: 4,
    title: "Deliver or Refund",
    description: "Launch your product to backers or automatically refund if milestones aren't met.",
    icon: <RefreshCw className="w-6 h-6" />,
    color: "bg-accent-pink"
  }
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 bg-neutral-light relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-preseed-lightpurple opacity-60 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-preseed-lightpurple opacity-60 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display gradient-text">How Preseed Works</h2>
          <p className="text-neutral-gray text-lg max-w-2xl mx-auto">
            A transparent platform connecting innovative founders with early adopters 
            willing to put their money where their interest is.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className="preseed-card p-6 animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg ${step.color} text-white flex items-center justify-center mb-4`}>
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-neutral-dark font-display">
                {step.title}
              </h3>
              
              <p className="text-neutral-gray">
                {step.description}
              </p>
              
              <div className="mt-4 flex items-center text-sm text-primary-purple">
                <span className="font-medium">Step {step.id}</span>
                <div className="ml-2 h-px bg-primary-purple flex-grow max-w-[50px]"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10 animate-on-scroll opacity-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-preseed-lightpurple rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary-purple">$5</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-dark mb-2">Micro-commitments</h3>
              <p className="text-neutral-gray text-sm">Low-risk backing that proves real interest</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-preseed-lightpurple rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary-purple">100%</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-dark mb-2">Money-back Guarantee</h3>
              <p className="text-neutral-gray text-sm">Automatic refunds if founders dont deliver</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-preseed-lightpurple rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary-purple">0%</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-dark mb-2">Platform Fee</h3>
              <p className="text-neutral-gray text-sm">During beta, we charge no platform fees</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

