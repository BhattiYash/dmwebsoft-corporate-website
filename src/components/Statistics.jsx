import styles from './statistics.module.css'
export default function Statistics() {
    return (
        <>
        <div className={styles.container}>
                <div className={styles.statistics}>
                <div className={styles.stats}>
                    <div className={styles.styleContainer}>
                    <h5>08+</h5>
                    <p className="">Years In Business</p>
                    </div>
                </div>
                <div className={styles.vline}></div>
                <div className={styles.stats}>
                    <div className={styles.styleContainer}>
                    <h5>120+</h5>
                    <p>Experts Team</p>
                    </div>
                </div>
                <div className={styles.vline}></div>
                <div className={styles.stats}>
                    <div className={styles.styleContainer}>
                    <h5>250+</h5>
                    <p>Successful Projects</p>
                    </div>
                </div>
                <div className={styles.vline}></div>
                <div className={styles.stats}>
                    <div className={styles.styleContainer}>
                    <h5>25+</h5>
                    <p>Consistent Clients</p>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}
