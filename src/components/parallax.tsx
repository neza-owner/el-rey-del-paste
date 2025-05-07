import { useTranslation } from 'react-i18next';
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import styles from '../styles/parallax.module.css';

const images = [
  "/team.jpg", "/local1.jpg", "/paste.jpg"];
const pastes = [
  "paste2.png",
  "/paste3.png", "/paste4.png"];


const speeds = [-10, 15, -10];
const speedspastes = [15, -10, -13];
const scales = [
  "scale(0.5)", "scale(0.5)", "scale(0.5)",
  "scale(0.35)"
]

const positions = [
  "top-5 left-70", "top-0 right-20", "top-40 left-5"
];

const positionspastes = [
  "top-20 left-72", "top-40 right-10",
  "top-40 left-5"
];

const ParallaxSection = () => {
  const [t] = useTranslation("global");
  return (
    <section className={styles.parallax}>
      <ParallaxProvider>
        <div className={styles.container}>

          {/* first paragraph with Parallax effect */}
          <Parallax speed={-15}>
            <div className={styles.firstParagraph}>
              {/* first column: Title and text */}

              {/* second column: Image or empty space (you can customize it) */}
              <div className={styles.secondColumn}>
                <p className={styles.paragraph}>
                  {t("Palallax.part1")}
                </p>
              </div>
            </div>
          </Parallax>

          {/* parallax section with images */}
          <div className={styles.parallaxImages}>

            {images.map((img, index) => (
              <Parallax key={`img-${index}`} speed={speeds[index]}>
                <img
                  src={img}
                  alt={`Imagen ${index + 1}`}
                  className={`${styles.firstImage} ${positions[index]} `}
                  style={{ transform: scales[index], transformOrigin: "center" }}
                />
              </Parallax>
            ))}

            <Parallax key={`paste-3`} speed={-20}>
              <img
                src={"/paste1.png"}
                alt={`Paste 1`}
                className={styles.secondImage}
                style={{ transform: "scale(0.6)", transformOrigin: "center" }}
              />
            </Parallax>

            <Parallax key={`puesto`} speed={15}>
              <img
                src={"/puesto.jpg"}
                alt={`puesto`}
                className={styles.thirdImage}
                style={{ transform: "scale(0.2)", transformOrigin: "center" }}
              />
            </Parallax>

            {pastes.map((img, index) => (
              <Parallax key={`paste-${index}`} speed={speedspastes[index]}>
                <img
                  src={img}
                  alt={`Paste ${index + 1}`}
                  className={`${styles.fourthImage} ${positionspastes[index]}`}
                  style={{
                    transform: "scale(0.6)",
                    transformOrigin: "center"
                  }}
                />
              </Parallax>
            ))}
          </div>

          {/* second paragraph with Parallax effect */}
          <Parallax speed={10}>
            <div className={styles.secondParagraph}>
              <img
                src={"/paste3.png"}
                alt={`Paste3`}
                className={`${styles.illustrations}`}
                style={{ transform: "scale(0.8)", transformOrigin: "center" }}
              />
            </div>
          </Parallax>

          {/* text with a slower Parallax effect */}
          <Parallax speed={3}>
            <div className={styles.textParallax}>
              <p className={styles.paragraph}>
                {t("Palallax.part2")}
              </p>
            </div>
          </Parallax>
        </div>
      </ParallaxProvider>
    </section>
  );
};

export default ParallaxSection;
