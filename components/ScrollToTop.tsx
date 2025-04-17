
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg gradient-purple transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{ transform: isVisible ? "scale(1)" : "scale(0)" }}
    >
      <ArrowUp className="h-6 w-6 text-white" />
    </button>
  );
};

export default ScrollToTop;
