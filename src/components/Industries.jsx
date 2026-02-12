import styles from './industries.module.css';

const Industries = () => {
  const industriesData = [
    {
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 5C23.6193 5 22.5 6.11929 22.5 7.5V10H17.5C16.1193 10 15 11.1193 15 12.5V17.5H12.5C11.1193 17.5 10 18.6193 10 20V42.5C10 43.8807 11.1193 45 12.5 45H37.5C38.8807 45 40 43.8807 40 42.5V20C40 18.6193 38.8807 17.5 37.5 17.5H35V12.5C35 11.1193 33.8807 10 32.5 10H27.5V7.5C27.5 6.11929 26.3807 5 25 5Z" stroke="currentColor" strokeWidth="2"/>
          <circle cx="25" cy="15" r="3" fill="currentColor"/>
          <path d="M20 25H30M20 30H30M20 35H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'HealthCare',
      description: 'We design intuitive telehealth platforms and telemedicine apps, empowering healthcare providers and patients, enabling patients to access high-quality healthcare online effortlessly.'
    },
    {
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="15" r="8" stroke="currentColor" strokeWidth="2"/>
          <path d="M25 23V30M25 30L20 35M25 30L30 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="15" cy="28" r="3" stroke="currentColor" strokeWidth="2"/>
          <circle cx="35" cy="28" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M15 31V40M35 31V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Fintech',
      description: 'We construct ultra-secure fintech applications ranging from mobile banking to investment and payment apps. Our approach integrates cutting-edge technologies such as blockchain and AI, reshaping the financial landscape with disruptive innovations.'
    },
    {
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="15" width="30" height="25" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M15 20H35M15 25H35M15 30H25" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="38" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
          <path d="M35 12H41M38 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'SaaS Products',
      description: 'Unlock growth with our SaaS product development. Tailored to your unique requirements, we prioritize innovation, reliability, and scalability, positioning your business for sustained success.'
    },
    {
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="18" width="26" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M18 18V14C18 12.8954 18.8954 12 20 12H30C31.1046 12 32 12.8954 32 14V18" stroke="currentColor" strokeWidth="2"/>
          <rect x="20" y="25" width="10" height="8" stroke="currentColor" strokeWidth="2"/>
          <path d="M15 28H19M31 28H35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'MarketPlace',
      description: 'We specialise in developing customized marketplace Web & Mobile apps that bridge buyers and sellers across industries. Whether you\'re envisioning the next Uber, Airbnb, food delivery service, or local services marketplace, our expertise ensures a tailored solution to help you compete at scale.'
    },
    {
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="12" width="18" height="26" rx="2" stroke="currentColor" strokeWidth="2"/>
          <circle cx="19" cy="20" r="2" fill="currentColor"/>
          <path d="M14 28H24M14 32H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M32 15L40 20L32 25V15Z" stroke="currentColor" strokeWidth="2"/>
          <circle cx="36" cy="32" r="6" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'eCommerce',
      description: 'We craft bespoke eCommerce solutions, delivering seamless online shopping experiences. From intuitive interfaces to secure transactions, our tailored approach ensures your eCommerce venture thrives in the digital marketplace.'
    },
    {
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 20L25 12L35 20V38C35 39.1046 34.1046 40 33 40H17C15.8954 40 15 39.1046 15 38V20Z" stroke="currentColor" strokeWidth="2"/>
          <rect x="20" y="24" width="10" height="16" stroke="currentColor" strokeWidth="2"/>
          <path d="M25 8V12M25 28V32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="38" cy="14" r="5" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'EdTech',
      description: 'Ignite educational transformation with our EdTech prowess. Our development service promises unparalleled innovation, scalability, and a competitive edge, redefining the future of learning for your institution.'
    }
  ];

  return (
    <div className={styles.industriesSection}>
      <div className={styles.industriesContainer}>
        <h1 className={styles.industriesHeading}>
          <span className={styles.highlightText}>Industries</span> we've excelled in
        </h1>
        <p className={styles.industriesSubtitle}>
          Leading the way with Innovative Web & Mobile Apps
        </p>

        <div className={styles.cardsGrid}>
          {industriesData.map((industry, index) => (
            <div key={index} className={styles.industryCard}>
              <div className={styles.iconWrapper}>
                {industry.icon}
              </div>
              <h3 className={styles.cardTitle}>{industry.title}</h3>
              <p className={styles.cardDescription}>{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;