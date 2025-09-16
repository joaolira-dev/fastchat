import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProfitSection from "../components/ProfitSection";
import HowItWorks from "../components/HowItWorks";
import PlansSection from "../components/PlansSection";
import ContactSection from "../components/ContactSection";


function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <ProfitSection/>
      <HowItWorks/>
      <PlansSection/>
      <ContactSection/>
  </>
  );
}

export default Home;
