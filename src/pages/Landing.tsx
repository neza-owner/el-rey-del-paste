import AvailableOn from "../components/availableon";
import { Combo } from "../components/combo";
import Coupons from "../components/coupons";
import FAQSection from "../components/faq";
import Footer from "../components/Footer";
import { Hero } from "../components/Hero";
import Location from "../components/location";
import Menu from "../components/menu";
import Navbar from "../components/navbar";
import ParallaxSection from "../components/parallax";
import Pedidos from "../components/pedidos";
import KingsSection from "../components/reyes";
import Testimonials from "../components/testmonials";

function Landing() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <Combo />
      <Menu />
      <Coupons />
      <Pedidos />
      <AvailableOn />
      <Location />
      <Testimonials />
      <KingsSection />
      <ParallaxSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default Landing;
