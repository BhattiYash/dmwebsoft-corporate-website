import styles from "../assets/styles/award-achivements.module.css";
import achivements from "../assets/images/awards-achievements-section/awards-achievements-section-star-cup.svg"
import clutch from "../assets/images/awards-achievements-section/awards-achievements-section-clutch.svg"
import upwork from "../assets/images/awards-achievements-section/awards-achievements-section-upwork.svg"
import trustpilot from "../assets/images/awards-achievements-section/awards-achievements-section-trustpilot.png"
import google from "../assets/images/awards-achievements-section/awards-achievements-section-google.png"
import fiveStar from "../assets/images/awards-achievements-section/awards-achievements-section-five-star.png"

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
              <img className={styles.five_star} src={fiveStar} alt="Five Star" />
            </div>
            <div className={styles.card}><img src={upwork} alt="Upwork" />
              <img className={styles.five_star} src={fiveStar} alt="Five Star" />
            </div>
            <div className={styles.card}><img src={trustpilot} alt="Trustpilot" />
              <img className={styles.five_star} src={fiveStar} alt="Five Star" />
            </div>
            <div className={styles.card}><img src={google} alt="Google" />
              <img className={styles.five_star} src={fiveStar} alt="Five Star" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}