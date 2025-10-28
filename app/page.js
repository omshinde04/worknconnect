import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks"
import AboutUs from "@/components/AboutUs"
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Hero/>
      <HowItWorks/>
      <AboutUs/>
    </>
  );
}
