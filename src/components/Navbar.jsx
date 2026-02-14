import styles from './navbar.module.css'
import dmwebsoftLogo from '../assets/images/dm-logo.svg'
export default function Navbar() {
    return (
        <>
            <nav className={styles.container}>
                <div className={styles.subContainer}>
                    <div className={styles.logo}>
                        <img src={dmwebsoftLogo} alt="dmwebsoft-logo" className={styles.imgLogo} />
                    </div>
                    <div className={styles.navbar}>
                        <ul className={styles.navbarList}>
                            <li>Services</li>
                            <li>Industry</li>
                            <li>Company</li>
                            <li>Case Studies</li>
                            <li>Blog</li>
                            <li>Contact us</li>
                        </ul>
                        <button className={styles.navbarButton}>Free Quote</button>
                    </div>
                </div>
            </nav>
        </>
    )
}