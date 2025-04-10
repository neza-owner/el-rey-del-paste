import AvailableOn from "../components/availableon";
import Contact from "../components/Contact";
import FAQ from "../components/faq";
import Kings from "../components/Kings";
import Location from "../components/location";
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
