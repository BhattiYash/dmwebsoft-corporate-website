import styles from "./award-achivements.module.css";
import achivements from "../assets/images/awards_win_cup.svg"
import clutch from "../assets/images/clutch.svg"
import top_rated_agency_upwork from "../assets/images/top_rated_agency_upwork.svg"
import trustpilot from "../assets/images/trustpilot.png"
import googole from "../assets/images/google.png"
import five_star from "../assets/images/five-star.png"

export default function AwardAchivements() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.left}>
            <div className={styles.textWrapper}>
              <h2>
                We’ve Got <br />
                <span>Awards</span> & <br />
                <span>Achievements</span>
              </h2>
              <img src={achivements} alt="Award Trophy" className={styles.trophy} />
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.card}><img src={clutch} alt="Clutch" />
              <img className={styles.five_star} src={five_star} alt="Five Star" />
            </div>
            <div className={styles.card}><img src={top_rated_agency_upwork} alt="Upwork" />
              <img className={styles.five_star} src={five_star} alt="Five Star" />
            </div>
            <div className={styles.card}><img src={trustpilot} alt="Trustpilot" />
              <img className={styles.five_star} src={five_star} alt="Five Star" />
            </div>
            <div className={styles.card}><img src={googole} alt="Google" />
              <img className={styles.five_star} src={five_star} alt="Five Star" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}