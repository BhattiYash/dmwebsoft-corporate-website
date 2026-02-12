import { useState, useRef } from 'react';
import styles from './testimonials.module.css';

const Testimonials = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const testimonialsData = [
    {
      id: 1,
      text: "DM WebSoft LLP exceeded our expectations! Their seasoned team of experts delivered a website that perfectly captures our brand essence. Their 15+ years of experience truly shine through in their exceptional web development skills.",
      name: "Mark Thompson",
      position: "CEO, T******* Enterprises",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
      id: 2,
      text: "Working with DM WebSoft LLP was a game-changer for our business. Their technical prowess and innovative solutions transformed our online presence. A highly recommended web development agency with a stellar track record.",
      name: "Jennifer Miller",
      position: "VP of Marketing, M****** Innovations",
      avatar: "https://i.pravatar.cc/150?img=45"
    },
    {
      id: 3,
      text: "We are thrilled with the results DM WebSoft LLP delivered. Their deep understanding of web development coupled with years of expertise ensured a seamless and visually stunning website. True professionals!",
      name: "Brian Harrison",
      position: "CTO, H******* Tech Solutions",
      avatar: "https://i.pravatar.cc/150?img=33"
    },
    {
      id: 4,
      text: "In a digital age where first impressions matter, DM WebSoft LLP crafted a website that speaks volumes. The team's attention to detail and commitment to quality set them apart. Thank you for making our vision a reality.",
      name: "Sarah Collins",
      position: "Director of Operations, C******** Enterprises",
      avatar: "https://i.pravatar.cc/150?img=47"
    },
    {
      id: 5,
      text: "DM WebSoft LLP's team demonstrated unparalleled expertise. Their ability to navigate complex technical challenges with ease is truly commendable. Choosing them for our web development needs was the best decision.",
      name: "Ryan Foster",
      position: "Founder, F***** Digital Ventures",
      avatar: "https://i.pravatar.cc/150?img=15"
    },
    {
      id: 6,
      text: "Exceptional service and skills! DM WebSoft LLP went out as a leader in web development. Their innovative approach and commitment to excellence set them apart in the industry.",
      name: "Michael Chen",
      position: "Director, C**** Tech Group",
      avatar: "https://i.pravatar.cc/150?img=68"
    }
  ];

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });

      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <div className={styles["testimonials-section"]}>
      <div className={styles["testimonials-container"]}>
        <h1 className={styles["testimonials-heading"]}>
          Real <span className={styles["highlight-blue"]}>Stories,</span> Real <span className={styles["highlight-blue"]}>Results.</span> Discover What Our Clients Say
        </h1>

        <div className={styles["testimonials-wrapper"]}>
          <button 
            className={`scroll-button scroll-left ${!canScrollLeft ? 'disabled' : ''}`}
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div 
            className={styles["testimonials-scroll-container"]}
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
          >
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className={styles["testimonial-card"]}>
                <p className={styles["testimonial-text"]}>{testimonial.text}</p>
                
                <div className={styles["testimonial-author"]}>
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className={styles["author-avatar"]}
                  />
                  <div className={styles["author-info"]}>
                    <h4 className={styles["author-name"]}>{testimonial.name}</h4>
                    <p className={styles["author-position"]}>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            className={`scroll-button scroll-right ${!canScrollRight ? styles["disabled"] : ''}`}
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;