import { useState, useEffect } from 'react';
import styles from '../assets/styles/navbar.module.css';
import fullLogo from '../assets/images/website-logo/website-logo-full.svg';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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

    // Close menu on window resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992) {
                setMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <nav className={`${styles.container} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.subContainer}>
                <div className={styles.logo}>
                    <img src={fullLogo} alt="dmwebsoft-logo" className={styles.imgLogo} />
                </div>

                {/* Desktop nav — hidden below 993px */}
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

                {/* Free Quote button — visible only 767-992px (tablet) */}
                <button className={styles.tabletQuoteButton}>Free Quote</button>

                {/* Hamburger icon — visible below 993px */}
                <button
                    className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                </button>
            </div>

            {/* Overlay */}
            {menuOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}

            {/* Mobile / Tablet drawer */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
                <ul className={styles.mobileNavList}>
                    <li onClick={toggleMenu}>Services</li>
                    <li onClick={toggleMenu}>Industry</li>
                    <li onClick={toggleMenu}>Company</li>
                    <li onClick={toggleMenu}>Case Studies</li>
                    <li onClick={toggleMenu}>Blog</li>
                    <li onClick={toggleMenu}>Contact us</li>
                </ul>
                <button className={styles.mobileQuoteButton} onClick={toggleMenu}>Free Quote</button>
            </div>
        </nav>
    );
}