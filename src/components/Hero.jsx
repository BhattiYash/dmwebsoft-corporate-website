import styles from '../assets/styles/hero.module.css'
import heroSectionColoredLine from '../assets/images/hero-section/hero-section-colored-line.png'
import top_rated_agency_upwork from '../assets/images/hero-section/hero-section-upwork.svg'
import heroSectionArrow from '../assets/images/hero-section/hero-section-arrow.svg'
export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.contentHero}>
        <h1>Web Development Company</h1>
        <img src={heroSectionColoredLine} alt="hero-image" className={styles.elementLine} />
        <div className={styles.text}>
          <span className={styles.spanText}>TOP <span className={styles.ratedPlus}>RATED PLUS</span>AGENCY ON
            <div className="forImage">
              <img src={top_rated_agency_upwork} alt="UpworkLogo" className={styles.topRatedAgencyUpwork} /></div></span>

          <div className={styles.buttonContainer}>
            <button className={styles.button}>SEE PORTFOLIO</button>
            <button className={styles.button}>LEARN MORE</button>
          </div>
        </div>
        <div className={`${styles.extraElement}`}>
          <img src={heroSectionArrow} alt="arrow" />
          <p className={styles.supportText}>Visit to see our work in action</p>
        </div>
      </div>
    </div>
  )
}