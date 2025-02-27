import { useEffect, useState } from "react";
import styles from "../styles/testimonials.module.css";

const Testimonials = () => {
  interface Testimonial {
    username: string;
    text: string;
    image: string;
    profilelink: string;
  }

  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("../data/testimonials.json");
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className={styles.testimonials}>
      <header>
        <h2 className={styles.heading}>
          LO <span className="text-yellow-500">QUE DICEN</span> DEL REY
        </h2>
        <h3 className={styles.subheading}>Comentarios de nuestros m&aacute;s reales clientes</h3>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={testimonial.image}
              alt={testimonial.username}
              className={`${styles.profile} shadow-lg`}
            />
            <p className={styles.caption}>
              “{testimonial.text}”
            </p>
            <a
              href={testimonial.profilelink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.username}>
              {testimonial.username}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
