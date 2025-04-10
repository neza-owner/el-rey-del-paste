/* import Promos from "../components/Promos"; */
/* import Social from "../components/Social"; */
import Stores from "../components/Stores";
/* import Jobs from "./Jobs"; */
import styles from "../styles/landing.module.css";

function Landing() {
  return (
    <div className={styles.landing}>
      <Stores />
    </div>
  );
}

export default Landing;
