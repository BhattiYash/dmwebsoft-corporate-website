import styles from '../assets/styles/contactbanner.module.css';
import wp from '../assets/images/contact-banner/contact-banner-whatsapp.png';
import skype from '../assets/images/contact-banner/contact-banner-skype.png';
import email from '../assets/images/contact-banner/contact-banner-email.png';
const ContactBanner = () => {
  return (
    <section className={styles.contactBanner}>
      <div className={styles.bannerContainer}>
        <h4 className={styles.bannerHeading}>
          Discuss your company goals, and we'll let you know how
          we can help, as well as provide you with a free quote.
        </h4>

        <button className={styles.connectButton}>Connect with us</button>

        <div className={styles.contactStrip}>
          <div className={styles.contactPill}>
            <div className={styles.iconWrapper}><img src={wp} alt="Whatsapp Logo" /></div>
            <div className={styles.pillText}>
              <span className={styles.pillLabel}>Talk with us</span>
              <span className={styles.pillValue}>+61 406 871 264</span>
            </div>
          </div>

          <div className={styles.contactPill}>
            <div className={styles.iconWrapper}><img src={skype} alt="Skype Logo" /></div>
            <div className={styles.pillText}>
              <span className={styles.pillLabel}>Chat with us</span>
              <span className={styles.pillValue}>dmwebsoft</span>
            </div>
          </div>

          <div className={styles.contactPill}>
            <div className={styles.iconWrapper}><img src={email} alt="Email Logo" /></div>
            <div className={styles.pillText}>
              <span className={styles.pillLabel}>Mail us</span>
              <span className={styles.pillValue}>info@dmwebsoft.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;