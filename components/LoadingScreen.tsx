import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate a short loading period
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Ensure scroll is enabled when loading is complete
      document.body.style.overflow = "auto";
    }, 1500);
    
    // Prevent scrolling during loading
    document.body.style.overflow = "hidden";
    
    return () => {
      clearTimeout(timer);
      // Ensure scroll is restored when component unmounts
      document.body.style.overflow = "auto";
    };
  }, []);
  
  if (!isLoading) return null;
  
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-neutral-dark">
      <div className="text-center">
        <div className="relative mb-6">
          <div className="w-20 h-20 border-4 border-primary-purple/30 rounded-full"></div>
          <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-r-4 border-primary-purple rounded-full animate-spin"></div>
        </div>
        <h2 className="text-xl font-bold text-white font-display">
          preseed<span className="text-primary-purple">.pro</span>
        </h2>
        <p className="mt-2 text-white/60">Loading amazing things...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;

