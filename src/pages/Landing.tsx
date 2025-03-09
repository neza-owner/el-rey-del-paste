import AvailableOn from "../components/AvailableOn";
import Combo from "../components/Combo";
import Contact from "../components/Contact";
import Coupons from "../components/Coupons";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import Kings from "../components/Kings";
import Location from "../components/Location";
import Menu from "../components/Menu";
import Order from "../components/Order";
import Parallax from "../components/Parallax";
/* import Promos from "../components/Promos"; */
/* import Social from "../components/Social"; */
import Franchises from "../components/Stores";
import Testimonials from "../components/Testmonials";
/* import Jobs from "./Jobs"; */

function Landing() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Combo />
      <Menu />
      <Coupons />
      {/* <Promos /> */}
      <Order />
      <AvailableOn />
      <Franchises />
      <Location />
      <Testimonials />
      <Kings />
      <Parallax />
      {/* <Social /> */}
      <Contact />
      {/* <Jobs /> */}
      <FAQ />
    </div>
  );
}

export default Landing;
