import { useState, useEffect } from 'react';
import styles from '../assets/styles/navbar.module.css';
import fullLogo from '../assets/images/website-logo/website-logo-full.svg';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles.container} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.subContainer}>
                <div className={styles.logo}>
                    <img src={fullLogo} alt="dmwebsoft-logo" className={styles.imgLogo} />
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
    );
}