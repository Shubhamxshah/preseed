'use client'

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Founder, TechFlow",
    image: "AC",
    quote: "Preseed.pro helped us validate our SaaS idea with real customers. We raised $2,800 in micro-payments and turned those backers into our most loyal users.",
    stars: 5
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Creator, EcoPackage",
    image: "SJ",
    quote: "After two failed product launches, I used Preseed to test market fit before building. The pre-seed funds and validation gave me confidence to move forward.",
    stars: 5
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Developer, CodeBuddy",
    image: "MR",
    quote: "The feedback from early backers shaped our product roadmap significantly. Preseed provided not just validation but valuable insights from day one.",
    stars: 5
  },
  {
    id: 4,
    name: "Tanya Patel",
    role: "User",
    image: "TP",
    quote: "I've backed 6 projects on Preseed so far. It's exciting to be part of the journey from the beginning, and the $5 commitment is the perfect low-risk amount.",
    stars: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000); // Change testimonial every 5 seconds
    
    return () => clearInterval(interval); // Clean up on component unmount
  }); // Re-create interval when activeIndex changes

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className="py-24 bg-preseed-lightpurple relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-primary-purple/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-primary-dark/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display gradient-text">
            What Our Community Says
          </h2>
          <p className="text-neutral-gray text-lg max-w-2xl mx-auto">
            Hear from founders who validated their ideas and users who discovered innovative products early.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto" style={{ minHeight: '300px' }}>
          <div className="absolute inset-y-0 left-0 flex items-center z-10">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-neutral-dark hover:bg-neutral-light transition-colors focus:outline-none focus:ring-2 focus:ring-primary-purple -ml-5"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>
          
          <div className="overflow-visible mx-12"> {/* Added mx-12 for side padding */}
            <div className="relative h-full">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`transition-all duration-500 ease-in-out absolute w-full ${
                    index === activeIndex 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-full pointer-events-none'
                  }`}
                  style={{ minHeight: '250px' }}
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 h-full">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl text-neutral-dark font-medium mb-6 italic">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                    
                    <div className="flex items-center mt-auto">
                      <div className="w-12 h-12 rounded-full bg-primary-purple text-white flex items-center justify-center font-bold text-lg mr-4">
                        {testimonial.image}
                      </div>
                      <div>
                        <div className="font-bold text-neutral-dark">{testimonial.name}</div>
                        <div className="text-neutral-gray text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Invisible placeholder to maintain parent height */}
              <div className="invisible">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10" style={{ minHeight: '250px' }}>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5" />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl text-neutral-dark font-medium mb-6 italic">
                    {testimonials[0].quote}
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full mr-4"></div>
                    <div>
                      <div className="font-bold"></div>
                      <div className="text-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center z-10">
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-neutral-dark hover:bg-neutral-light transition-colors focus:outline-none focus:ring-2 focus:ring-primary-purple -mr-5"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true);
                setActiveIndex(index);
                setTimeout(() => setIsAnimating(false), 500);
              }}
              className={`w-3 h-3 rounded-full mx-1 transition-colors ${index === activeIndex ? 'bg-primary-purple' : 'bg-neutral-gray/30'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
