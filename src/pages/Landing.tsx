import Coupons from "../components/coupons";
/* import Promos from "../components/Promos"; */
/* import Social from "../components/Social"; */
/* import Jobs from "./Jobs"; */
import styles from "../styles/landing.module.css";

function Landing() {
  return (
    <div className={styles.landing}>
      <Coupons />
    </div>
  );
}

export default Landing;
