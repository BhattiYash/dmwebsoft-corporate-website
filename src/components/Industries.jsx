import styles from '../assets/styles/industries.module.css';
import healthCareIcon from '../assets/images/industries-section/industries-section-healthcare.svg';
import fintechIcon from '../assets/images/industries-section/industries-section-fintech.svg';
import saasProductsIcon from '../assets/images/industries-section/industries-section-saas-product.svg';
import marketplaceIcon from '../assets/images/industries-section/industries-section-marketplace.svg';
import eCommerceIcon from '../assets/images/industries-section/industries-section-e-commerce.svg';
import edTechIcon from '../assets/images/industries-section/industries-section-edtech-industry.svg';

const Industries = () => {
  const industriesData = [
    {
      icon: (
        <img src={healthCareIcon} alt="HealthCare" />
      ),
      title: 'HealthCare',
      description: 'We design intuitive telehealth platforms and telemedicine apps, empowering healthcare providers and patients, enabling patients to access high-quality healthcare online effortlessly.'
    },
    {
      icon: (
        <img src={fintechIcon} alt="Fintech" />
      ),
      title: 'Fintech',
      description: 'We construct ultra-secure fintech applications ranging from mobile banking to investment and payment apps. Our approach integrates cutting-edge technologies such as blockchain and AI, reshaping the financial landscape with disruptive innovations.'
    },
    {
      icon: (
        <img src={saasProductsIcon} alt="SaaS Products" />
      ),
      title: 'SaaS Products',
      description: 'Unlock growth with our SaaS product development. Tailored to your unique requirements, we prioritize innovation, reliability, and scalability, positioning your business for sustained success.'
    },
    {
      icon: (
        <img src={marketplaceIcon} alt="MarketPlace" />
      ),
      title: 'MarketPlace',
      description: 'We specialise in developing customized marketplace Web & Mobile apps that bridge buyers and sellers across industries. Whether you\'re envisioning the next Uber, Airbnb, food delivery service, or local services marketplace, our expertise ensures a tailored solution to help you compete at scale.'
    },
    {
      icon: (
        <img src={eCommerceIcon} alt="eCommerce" />
      ),
      title: 'eCommerce',
      description: 'We craft bespoke eCommerce solutions, delivering seamless online shopping experiences. From intuitive interfaces to secure transactions, our tailored approach ensures your eCommerce venture thrives in the digital marketplace.'
    },
    {
      icon: (
        <img src={edTechIcon} alt="EdTech" />
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