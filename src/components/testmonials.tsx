import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import styles from "../styles/testimonials.module.css";

const Testimonials = () => {
  interface Testimonial {
    username: string;
    comment: string;
    image: string;
    profilelink: string;
  }

  const [t] = useTranslation("global");
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("../data/testimonials.json");
        const data = await response.json();
        const translatedData = data.map((testimonial: Testimonial) => ({
          ...testimonial,
          comment: t(`Testimonials.${testimonial.comment}`),
        }));
        setTestimonials(translatedData);
      } catch (error) {
        console.error("Error fetching testimonials", error);
      }
    };

    fetchTestimonials();
  }, [t]);

  return (
    <section className={styles.testimonials}>
      <header>
        <h2 className={styles.heading}>
          {t("Testimonials.heading.part1")} <span>{t("Testimonials.heading.part2")}</span> {t("Testimonials.heading.part3")}
        </h2>
        <h3 className={styles.subheading}>{t("Testimonials.subheading")}</h3>
      </header>

      <div className={styles.testimonialsList}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonial}>
            <img
              src={testimonial.image}
              alt={testimonial.username}
              className={styles.profile}
            />

            <div className={styles.caption}>
              <p className={styles.comment}>
                “{testimonial.comment}”
              </p>
              <a
                href={testimonial.profilelink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.username}>
                {testimonial.username}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
