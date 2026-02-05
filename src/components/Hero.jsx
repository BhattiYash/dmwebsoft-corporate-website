import styles from './hero.module.css'
import heroSectionColoredLine from '../assets/hero-section-colored-line.png'
import top_rated_agency_upwork from '../assets/top_rated_agency_upwork.svg'
import heroSectionArrow from '../assets/hero-section-arrow.png'
export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.contentHero}>
        <h1>Web Development Company</h1>
        <img src={heroSectionColoredLine} alt="hero-image" className={styles.elementLine} />
        <div className={styles.text}>
          <span className={styles.spanText}>TOP <span className={styles.ratedPlus}>RATED PLUS</span>AGENCY ON<img src={top_rated_agency_upwork} alt="" className={styles.topRatedAgencyUpwork} /></span>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>SEE PORTFOLIO</button>
            <button>LEARN MORE</button>
          </div>
        </div>
        <div className={styles.extraElement}>
          <img src={heroSectionArrow} alt="arrow" />
          <p className={styles.supportText}>Visit to see our work in action</p>
        </div>
      </div>
    </div>
  )
}