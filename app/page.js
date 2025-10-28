// import Navbar from "@/components/Navbar"; 
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks"
import AboutUs from "@/components/AboutUs"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
export default function Layout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      <Hero/>
      <HowItWorks/>
      <AboutUs/>
      <ContactSection/>
      <Footer/>
    </>
  );
}
