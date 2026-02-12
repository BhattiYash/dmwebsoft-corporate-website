import styles from './ctabanner.module.css';

const CtaBanner = () => {
  return (
    <section className={styles.bannerContainer}>
      {/* Background Waves */}
      <div className={styles.waveWrapper}>
        <div className={styles.wave1}></div>
        <div className={styles.wave2}></div>
        <div className={styles.wave3}></div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h2 className={styles.title}>
          Need expert feedback <br /> on your idea?
        </h2>
        <button className={styles.ctaButton}>
          Schedule A Meeting
        </button>
      </div>
    </section>
  );
};

export default CtaBanner;