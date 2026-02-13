import { useState } from 'react';
import styles from './faq.module.css';
const FAQ = () => {
  // State to track the index of the currently open question
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "Do you sign Non-Disclosure Agreements (NDAs)?",
      answer: "Yes, we prioritize the confidentiality of our clients' projects. We are open to signing NDAs to ensure the protection of sensitive information."
    },
    {
      question: "Will I have ownership of the code developed for my project?",
      answer: "Yes, you will have full ownership of the source code and intellectual property upon project completion."
    },
    {
      question: "How does DM WebSoft LLP ensure the security of web and mobile applications?",
      answer: "We implement industry-standard security measures, including data encryption, secure authentication, and regular vulnerability assessments."
    },
    {
      question: "What technologies does DM WebSoft LLP use in web and mobile app development?",
      answer: "We utilize modern frameworks like React, Node.js, Flutter, and Swift to build high-performance, scalable solutions."
    },
    {
      question: "How does DM WebSoft LLP ensure client satisfaction during and after the development process?",
      answer: "We maintain transparent communication through regular updates, feedback sessions, and dedicated post-launch support."
    },
    {
      question: "What sets DM WebSoft LLP apart from other web and mobile development firms?",
      answer: "Our commitment to quality, user-centric design approach, and technical expertise make us a trusted partner for digital transformation."
    }
  ];

  const handleToggle = (index) => {
    // If clicking the already open one, close it; otherwise, open the new one
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles["faq-section"]}>
      <h1 className={styles["faq-heading"]}>
        Frequently Asked <span>Questions</span>
      </h1>

      <div className={styles["faq-container"]}>
        {faqData.map((item, index) => (
          <div key={index} className={styles["faq-item"]}>
            <div 
              className={`${styles["faq-question-row"]} ${openIndex === index ? styles["active"] : ''}`}
              onClick={() => handleToggle(index)}
            >
              <h2 className={styles["faq-question-text"]}>{item.question}</h2>
              <span className={`${styles["dropdown-arrow"]} ${openIndex === index ? styles["up"] : styles["down"]}`}>
                {/* Simple CSS Chevron */}
              </span>
            </div>
            
            <div className={`${styles["faq-answer-container"]} ${openIndex === index ? styles["open"] : ''}`}>
              <p className={styles["faq-answer-text"]}>{item.answer}</p>
            </div>
            <hr className={styles["faq-divider"]} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
