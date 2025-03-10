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
import Stores from "../components/Stores";
import Testimonials from "../components/Testmonials";
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
