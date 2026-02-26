import { useState, useEffect } from 'react';
import styles from '../assets/styles/navbar.module.css';
import fullLogo from '../assets/images/website-logo/website-logo-full.svg';

export default function Navbar() {
    const dropdownData = {
        services: [
            [
                { icon: "fa-laptop-code", label: "Website Development" },
                { icon: "fa-mobile-screen", label: "Mobile App Development" },
                { icon: "fa-users-gear", label: "Staff Augmentation" },
            ],
            [
                { icon: "fa-microchip", label: "AI Infusion" },
                { icon: "fa-cart-shopping", label: "eCommerce Solution" },
                { icon: "fa-lightbulb", label: "Industry Specific Solution" },
            ]
        ],
        industry: [
            [
                { icon: "fa-heart-pulse", label: "Healthcare & Life Sciences" },
                { icon: "fa-building-columns", label: "Finance & Banking" },
                { icon: "fa-graduation-cap", label: "Education & EdTech" },
            ],
            [
                { icon: "fa-store", label: "Retail & eCommerce" },
                { icon: "fa-plane", label: "Travel & Hospitality" },
                { icon: "fa-truck-fast", label: "Logistics & Supply Chain" },
            ]
        ],
        company: [
            [
                { icon: "fa-circle-info", label: "About Us" },
                { icon: "fa-users", label: "Our Team" },
            ],
            [
                { icon: "fa-briefcase", label: "Careers" },
                { icon: "fa-handshake", label: "Our Partners" },
            ]
        ],
        caseStudies: [
            [
                { icon: "fa-file-lines", label: "Recent Projects" },
                { icon: "fa-chart-line", label: "Success Stories" },
            ],
            [
                { icon: "fa-video", label: "Video Testimonials" },
                { icon: "fa-star", label: "Client Reviews" },
            ]
        ]
    };

    const renderDropdown = (columns) => (
        <div className={styles.dropdownMenu} onClick={(e) => e.stopPropagation()}>
            {columns.map((col, idx) => (
                <div key={idx} className={styles.dropdownColumn}>
                    {col.map((item, id) => (
                        <div key={id} className={styles.dropdownItem}>
                            <i className={`fa-solid ${item.icon}`}></i>
                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
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
                        <li className={styles.hasDropdown}>
                            <span className={styles.navLinkName}>Services</span>
                            {renderDropdown(dropdownData.services)}
                        </li>
                        <li className={styles.hasDropdown}>
                            <span className={styles.navLinkName}>Industry</span>
                            {renderDropdown(dropdownData.industry)}
                        </li>
                        <li className={styles.hasDropdown}>
                            <span className={styles.navLinkName}>Company</span>
                            {renderDropdown(dropdownData.company)}
                        </li>
                        <li className={styles.hasDropdown}>
                            <span className={styles.navLinkName}>Case Studies</span>
                            {renderDropdown(dropdownData.caseStudies)}
                        </li>
                        <li><span className={styles.navLinkName}>Blog</span></li>
                        <li><span className={styles.navLinkName}>Contact us</span></li>
                    </ul>
                    <button className={styles.navbarButton}>Free Quote</button>
                </div>

                <div className={styles.rightActions}>
                    {/* Hamburger icon */}
                    <button
                        className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span className={styles.hamburgerLine}></span>
                        <span className={styles.hamburgerLine}></span>
                        <span className={styles.hamburgerLine}></span>
                    </button>
                    {/* Free Quote button */}
                    <button className={styles.tabletQuoteButton}>Free Quote</button>
                </div>
            </div>

            {/* Overlay */}
            {menuOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}

            {/* Mobile / Tablet Full-Screen Menu */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
                <div className={styles.mobileMenuHeader}>
                    <img src={fullLogo} alt="dmwebsoft-logo" className={styles.imgLogo} />
                    <button className={styles.closeButton} onClick={toggleMenu} aria-label="Close menu">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div className={styles.mobileMenuBody}>
                    <ul className={styles.mobileNavList}>
                        <li onClick={toggleMenu}>Services <i className="fa-solid fa-angle-down"></i></li>
                        <li onClick={toggleMenu}>Industry <i className="fa-solid fa-angle-down"></i></li>
                        <li onClick={toggleMenu}>Company <i className="fa-solid fa-angle-down"></i></li>
                        <li onClick={toggleMenu}>Case Studies</li>
                        <li onClick={toggleMenu}>Blog</li>
                        <li onClick={toggleMenu}>Contact us</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}