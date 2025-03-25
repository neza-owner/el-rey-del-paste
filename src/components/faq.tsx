import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import styles from "../styles/faq.module.css";

const FAQ = () => {
  interface FAQ {
    question: string;
    answer: string;
  }

  const [t] = useTranslation("global");
  const [faqs, setFAQs] = useState<FAQ[]>([]);
  const [isOpen, setIsOpen] = useState<number | null>(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch("../data/faqs.json");
        const data = await response.json();
        const translatedData = data.map((faq: FAQ) => ({
          question: t(`FAQ.${faq.question}`),
          answer: t(`FAQ.${faq.answer}`),
        }));
        setFAQs(translatedData);
      }
      catch (error) {
        console.error("Error fetching FAQs", error);
      }
    };

    fetchFAQs();
  }, [t]);

  const handleToggle = (index: number, e: React.MouseEvent<HTMLElement>) => {
    /* prevent default behavior */
    e.preventDefault();
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faq}>

      <header>
        <h2 className={styles.heading}>
          {t("FAQ.heading.part1")} <span>{t("FAQ.heading.part2")}</span> {t("FAQ.heading.part3")} <FontAwesomeIcon icon={faCircleQuestion} className={styles.icon} />
        </h2>
        <h3 className={styles.subheading}>
          {t("FAQ.subheading")}
        </h3>
      </header>

      {/* faq list */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            open={isOpen === index}
            onClick={(e) => handleToggle(index, e)}
          >
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
