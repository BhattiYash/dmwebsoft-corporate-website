import styles from "../assets/styles/mainfooter.module.css";
import shortLogo from "../assets/images/website-logo/website-logo-short.png";

const footerData = [
  { title: "Company", links: ["About us", "Services", "Case Studies", "Careers", "Contact us", "Hire Developers", "Blog"] },
  { title: "Web", links: ["Core PHP", "WordPress", "CodeIgniter", "Node JS", "AngularJS", "Python", "Laravel", "Custom Solution"] },
  { title: "Mobile", links: ["iOS", "Android", "Custom Solution"] },
  { title: "Design", links: ["UI/UX Services", "Service Design", "Custom Solution"] },
  { title: "Ecommerce", links: ["Magento", "Shopify", "Drupal", "Custom Solution"] },
  { title: "Digital Marketing", links: ["Search Engine Optimization", "Social Media Marketing"] }
];

export default function MainFooter() {
  return (
    <>
      <footer className={styles.footerWrapper}>
        <div className={`${styles.footerContent} ${styles.innerHandler}`}>
          <div className={styles.unionImg}>
            {/* TOP */}
            <div className={styles.topSection}>
              <img src={shortLogo} alt="DM WebSoft" className={styles.logo} />

              <div className={styles.socials}>
                <a href="#" className={styles.social}><i className="fab fa-facebook-f" /></a>
                <a href="#" className={styles.social}><i className="fab fa-linkedin-in" /></a>
                <a href="#" className={styles.social}><i className="fab fa-x-twitter" /></a>
                <a href="#" className={styles.social}><i className="fab fa-instagram" /></a>
              </div>

              <p className={styles.socialText}>Visit us on social media</p>
            </div>

            {/* LINKS */}
            <div className={styles.grid}>
              {footerData.map((col, i) => (
                <div key={i} className={styles.column}>
                  <h5>{col.title}</h5>
                  <ul>
                    {col.links.map((link, j) => (
                      <li key={j}>{link}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className={styles.bottomBar}>
          <div className={styles.legal}>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Site Map</a>
          </div>
          <p>© 2026 DM WebSoft LLP All Rights Reserved.</p>
        </div>

      </footer>
    </>
  );
}