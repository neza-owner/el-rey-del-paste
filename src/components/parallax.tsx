import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import styles from '../styles/parallax.module.css';
import { useTranslation } from 'react-i18next';


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
        <div className="relative w-full overflow-hidden pb-[10rem]"> {/* Altura del viewport al 150% */}

          {/* Primer párrafo con efecto Parallax */}
          <Parallax speed={-15}>
            <div className="max-w-5xl mx-auto grid grid-cols-2 gap-8 items-center my-20 px-4">
              {/* Primera columna: Título y texto */}

              {/* Segunda columna: Imagen o espacio vacío (puedes personalizarlo) */}
              <div className="flex justify-center">
                <p className=" w-full  text-eg text-gray-700 mt-4 line-clamp-3 text-center">
                  {t("Palallax.part1")}
                  
                </p>
              </div>
            </div>
          </Parallax>


          {/* Sección Parallax con imágenes */}
          <div className="relative w-full h-[130vh]"> {/* Contenedor relative */}



            {images.map((img, index) => (
              <Parallax key={`img-${index}`} speed={speeds[index]}>
                <img
                  src={img}
                  alt={`Imagen ${index + 1}`}
                  className={`absolute ${positions[index]} rounded-lg shadow-lg`}
                  style={{ transform: scales[index], transformOrigin: "center" }}
                />
              </Parallax>
            ))}
            <Parallax key={`paste-3`} speed={-20}>

              <img
                src={"/paste1.png"}
                alt={`Paste 1`}
                className={"absolute top-10 right-10"}
                style={{ transform: "scale(0.6)", transformOrigin: "center" }}
              />
            </Parallax>

            <Parallax key={`puesto`} speed={15}>
              <img
                src={"/puesto.jpg"}
                alt={`puesto`}
                className="absolute top-60 right-0 rounded-lg shadow-lg "
                style={{ transform: "scale(0.2)", transformOrigin: "center" }}
              />
            </Parallax>


            {pastes.map((img, index) => (
              <Parallax key={`paste-${index}`} speed={speedspastes[index]}>
                <img
                  src={img}
                  alt={`Paste ${index + 1}`}
                  className={`absolute ${positionspastes[index]}`}
                  style={{
                    transform: "scale(0.6)",
                    transformOrigin: "center"
                  }}
                />
              </Parallax>
            ))}

          </div>


          {/* Segundo párrafo con efecto Parallax */}
          <Parallax speed={10}>
            <div className="relative flex justify-center mt-[-10rem]">
              <img
                src={"/paste3.png"}
                alt={`Paste3`}
                className="w-auto absolute top-[-5rem] right-1/3 transform -translate-x-1/2 z-[-1]"
                style={{ transform: "scale(0.8)", transformOrigin: "center" }}
              />
            </div>
          </Parallax>


          {/* Texto con un efecto Parallax más lento */}
          <Parallax speed={3}>
            <div className="max-w-3xl text-center mt-[6rem] px-4 relative z-10">
              <p className="text-eg text-gray-700 mt-2 p-4">
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
