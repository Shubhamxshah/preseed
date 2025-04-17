
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import ForFounders from "@/components/ForFounders";
import ForUsers from "@/components/ForUsers";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
// import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {

  return (
    <div className="min-h-screen overflow-x-hidden overflow-y-auto scroll-none">
      {/* <LoadingScreen /> */}
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <ForFounders />
      <ForUsers />
      <Testimonials />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;

