import AvailableOn from "../components/availableon";
import Combo from "../components/combo";
import Contact from "../components/Contact";
import Coupons from "../components/coupons";
import FAQ from "../components/faq";
import Hero2 from "../components/temp/Hero2";
import Kings2 from "../components/temp/Kings2";
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
      <Hero2 />
      <Combo />
      <Menu />
      <Coupons />
      <Order />
      <AvailableOn />
      <Stores />
      <Location />
      <Testimonials />
      <Kings2 />
      <div className={styles.hideOnMobile}>
      <Parallax />
      </div>
      {/* <Social /> */}
      <Contact />
      {/* <Jobs /> */}
      <FAQ />
    </div>
  );
}

export default Landing;
