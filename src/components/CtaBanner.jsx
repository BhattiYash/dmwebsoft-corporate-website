import styles from '../assets/styles/ctabanner.module.css';

const CtaBanner = () => {
  return (
    <section className={styles.bannerContainer}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Need expert feedback on your idea?
        </h2>
        <button className={styles.ctaButton}>
          Schedule A Meeting
        </button>
      </div>
    </section>
  );
};

export default CtaBanner;