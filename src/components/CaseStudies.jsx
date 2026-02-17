import styles from "../assets/styles/case-studies.module.css"
// IMAGE IMPORTS (adjust paths if needed)
import aiImg from "../assets/images/case-studies-section/case-studies-ai.png"
import ecommerceImg from "../assets/images/case-studies-section/case-studies-e-commerce.png"
import travelImg from "../assets/images/case-studies-section/case-studies-travel.png"
import productivityImg from "../assets/images/case-studies-section/case-studies-productivity.png"
import fintechImg from "../assets/images/case-studies-section/case-studies-fintech.png"

export default function CaseStudies() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <h2>Case Studies</h2>
          <p>Purpose-built technology that hits the mark</p>
        </div>

        <div className={styles.grid}>
          {/* Card 1: AI (Spans 2/4 columns) */}
          <div className={`${styles.card} ${styles.aiCard}`}>
            <span className={styles.tag}>AI</span>
            <div className={styles.content}>
              <img src={aiImg} alt="AI Ecommerce" />
            </div>
          </div>

          {/* Card 2: E-commerce (Spans 2/4 columns) */}
          <div className={`${styles.card} ${styles.ecommerceCard}`}>
            <span className={styles.tag}>E-commerce</span>
            <img src={ecommerceImg} alt="AI Tutor" />
          </div>

          {/* Card 3: Travel (Spans 1/4 columns) */}
          <div className={`${styles.card} ${styles.travelCard}`}>
            <span className={styles.tag}>Travel</span>
            <img src={travelImg} alt="Travel UI" />
          </div>

          {/* Card 4: Productivity (Spans 2/4 columns) */}
          <div className={`${styles.card} ${styles.productivityCard}`}>
            <span className={styles.tag}>Productivity</span>
            <img src={productivityImg} alt="Productivity UI" />
          </div>

          {/* Card 5: FinTech (Spans 1/4 columns) */}
          <div className={`${styles.card} ${styles.fintechCard}`}>
            <span className={styles.tag}>FinTech</span>
            <img src={fintechImg} alt="Fintech App" />
          </div>
        </div>

      </div>
    </section>
  )
}