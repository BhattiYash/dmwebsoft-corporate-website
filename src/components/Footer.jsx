import styles from '../assets/styles/footer.module.css'
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    <div className={styles.footerTop}>
                        <img src="https://dmwebsoft.com/wp-content/uploads/2023/09/Union.png" className={styles.footerTopImg} alt="footer-top-img" />
                        <div className={styles.footerTopText}>OK</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
