import AvailableOn from "../components/AvailableOn";
import { Combo } from "../components/Combo";
import Contact from "../components/Contact";
import Coupons from "../components/Coupons";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import { Hero } from "../components/Hero";
import Kings from "../components/Kings";
import Location from "../components/Location";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Order from "../components/Order";
import Parallax from "../components/Parallax";
import Social from "../components/Social";
import Testimonials from "../components/Testmonials";
import Franchises from "./Franchises";

function Landing() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <Combo />
      <Menu />
      <Coupons />
      <Order />
      <AvailableOn />
      <Franchises />
      <Location />
      <Testimonials />
      <Kings />
      <Parallax />
      <Social />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Landing;
