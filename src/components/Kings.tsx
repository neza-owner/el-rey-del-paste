import { useEffect, useState } from "react";
import styles from "../styles/kings.module.css";

const Kings = () => {
  interface King {
    name: string;
    title: string;
    image: string;
  }

  const [kings, setKings] = useState<King[]>([]);

  useEffect(() => {
    const fetchKings = async () => {
      try {
        const response = await fetch("../data/kings.json");
        const data = await response.json();
        setKings(data);
      }
      catch (error) {
        console.error("Error fetching kings", error);
      }
    };

    fetchKings();
  }, []);

  return (
    <section id="about" className={styles.kings}>
      <header>
        {/* title */}
        <h2 className={styles.heading}>
          CONOCE A <span className="text-yellow-500">LOS REYES</span> 👑
        </h2>
        <h3 className={styles.subheading}>Del reino de los pastes</h3>
      </header>

      {/* Kings List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {kings.map((king, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={king.image}
              alt={king.name}
              className={`${styles.profile} shadow-lg`}
            />
            <h3 className="font-bold text-lg mt-4">{king.name}</h3>
            <span className={styles.title}>“{king.title}”</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Kings;
