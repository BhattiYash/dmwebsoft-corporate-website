import styles from './ctabanner.module.css';
// import wave from '';

const CtaBanner = () => {
  return (
    <section className={styles.bannerContainer}>

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