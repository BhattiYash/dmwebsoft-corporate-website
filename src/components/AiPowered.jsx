import styles from "./ai-powered.module.css"
import webDevelopment from "../assets/images/web-development.svg"
import mobileDevelopment from "../assets/images/mobile-application.svg"
import aiInfusion from "../assets/images/ai-infusion.svg"
import staffAugmentation from "../assets/images/staff-augmentation.svg"
export default function AiPowered() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* HEADER */}
        <div className={styles.header}>
          <h2>
            <span>AI Powered</span> Digital Solutions
          </h2>
          <p>
            We bring together creative thinkers and technical experts to conceive
            solutions that solve problems and open new possibilities.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className={styles.grid}>
          
          <div className={styles.card}>
            <div className={styles.first}>
            <img src={webDevelopment} alt="Web Development" className={styles.icon} />
            <h3>Web Development</h3>
            </div>
            <p>
              We conceive and build immersive digital experiences – strategic web
              apps, portals, ecommerce stores that drive real adoption and ROI.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.first}>
            <img src={mobileDevelopment} alt="Mobile App Development" className={styles.icon} />
           <h3>Mobile App Development</h3>
            </div>
            <p>
              End-to-end iOS and Android app engineering – we strategize,
              architect, code, test and launch intuitive native or cross-platform
              mobile apps.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.first}>
            <img src={staffAugmentation} alt="Staff Augmentation" className={styles.icon} />
            <h3>Staff Augmentation</h3>
            </div>
            <p>
              Expand your tech teams with proven digital specialists – developers,
              testers, data scientists, DevOps experts, security – all with niche
              skillsets.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.first}>
            <img src={aiInfusion} alt="AI Infusion" className={styles.icon} />
            <h3>AI Infusion</h3>
            </div>
            <p>
              Our AI specialists enhance software capabilities via machine
              learning, NLP, computer vision, predictive analytics, and data
              science integrations.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}