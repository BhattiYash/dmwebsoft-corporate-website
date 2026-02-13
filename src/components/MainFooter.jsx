import styles from './mainfooter.module.css';
import logo from '../assets/images/dm-1.png';
const MainFooter = () => {
  const footerData = [
    { title: "Company", links: ["About us", "Services", "Case Studies", "Careers", "Contact us", "Hire Developers", "Blog"] },
    { title: "Web", links: ["Core PHP", "WordPress", "CodeIgniter", "Node JS", "AngularJS", "Python", "Laravel", "Custom Solution"] },
    { title: "Mobile", links: ["iOS", "Android", "Custom Solution"] },
    { title: "Design", links: ["UI/UX Services", "Service Design", "Custom Solution"] },
    { title: "Ecommerce", links: ["Magento", "Shopify", "Drupal", "Custom Solution"] },
    { title: "Digital Marketing", links: ["Search Engine Optimization", "Social Media Marketing"] }
  ];

  return (
    <footer className={styles.mainFooter}>
      {/* The White Arc and Logo Overlap */}
      <div className={styles.overlapWrapper}>
        <div className={styles.whiteArc}>
          <img src="https://dmwebsoft.com/wp-content/uploads/2023/09/Union.png" alt="Background Image" />
        </div>
        <div className={styles.footerLogo}>
          <img src={logo} alt="DM WebSoft" />
        </div>
      </div>

      <div className={styles.footerSocials}>
        <div className={styles.socialIcon}><i className='fab fa-facebook-f'></i></div>
        <div className={styles.socialIcon}><i className="fab fa-linkedin-in"></i></div>
        <div className={styles.socialIcon}><i className="fab fa-twitter"></i></div>
        <div className={styles.socialIcon}><i className="fab fa-instagram"></i></div>
      </div>
      <p className={styles.socialSubtext}>Visit us on social media</p>

      <div className={styles.footerGrid}>
        {footerData.map((section, idx) => (
          <div key={idx} className={styles.footerColumn}>
            <h5 className={styles.columnTitle}>{section.title}</h5>
            <ul className={styles.columnLinks}>
              {section.links.map((link, i) => <li key={i}>{link}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.footerBottomBar}>
        <div className={styles.legalLinks}>
          <a href="#terms">Terms & Conditions</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#map">Site Map</a>
        </div>
        <p className={styles.copyright}>© 2026 DM WebSoft LLP All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default MainFooter;