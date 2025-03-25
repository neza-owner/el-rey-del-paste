import AvailableOn from "../components/availableon";
import Combo from "../components/combo";
import Contact from "../components/Contact";
import Coupons from "../components/coupons";
import FAQ from "../components/faq";
import Hero from "../components/Hero";
import Kings from "../components/Kings";
import Location from "../components/location";
import Menu from "../components/menu";
import Order from "../components/Order";
import Parallax from "../components/parallax";
/* import Promos from "../components/Promos"; */
/* import Social from "../components/Social"; */
import Stores from "../components/Stores";
import Testimonials from "../components/testmonials";
/* import Jobs from "./Jobs"; */
import styles from "../styles/landing.module.css";

function Landing() {
  return (
    <div className={styles.landing}>
      <Hero />
      <Combo />
      <Menu />
      <Coupons />
      {/* <Promos /> */}
      <Order />
      <AvailableOn />
      <Stores />
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
