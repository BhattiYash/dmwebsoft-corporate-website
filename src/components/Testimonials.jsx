import { useState, useRef } from 'react';
import styles from '../assets/styles/testimonials.module.css';
import client1 from '../assets/images/client-review-section/client-review-section-client1.jpeg';
import client2 from '../assets/images/client-review-section/client-review-section-client2.jpeg';
import client3 from '../assets/images/client-review-section/client-review-section-client3.jpeg';
import client4 from '../assets/images/client-review-section/client-review-section-client4.jpeg';
import client5 from '../assets/images/client-review-section/client-review-section-client5.jpeg';
import client6 from '../assets/images/client-review-section/client-review-section-client6.jpeg';
import client7 from '../assets/images/client-review-section/client-review-section-client7.jpeg';
import client8 from '../assets/images/client-review-section/client-review-section-client8.jpeg';
import client9 from '../assets/images/client-review-section/client-review-section-client9.jpeg';
import client10 from '../assets/images/client-review-section/client-review-section-client10.jpeg';

const Testimonials = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const testimonialsData = [
    {
      id: 1,
      text: "DM WebSoft LLP exceeded our expectations! Their seasoned team of experts delivered a website that perfectly captures our brand essence. Their 15+ years of experience truly shine through in their exceptional web development skills.",
      name: "Mark Thompson",
      position: "CEO, T******* Enterprises",
      avatar: client1
    },
    {
      id: 2,
      text: "Working with DM WebSoft LLP was a game-changer for our business. Their technical prowess and innovative solutions transformed our online presence. A highly recommended web development agency with a stellar track record.",
      name: "Jennifer Miller",
      position: "VP of Marketing, M****** Innovations",
      avatar: client2
    },
    {
      id: 3,
      text: "We are thrilled with the results DM WebSoft LLP delivered. Their deep understanding of web development coupled with years of expertise ensured a seamless and visually stunning website. True professionals!",
      name: "Brian Harrison",
      position: "CTO, H******* Tech Solutions",
      avatar: client3
    },
    {
      id: 4,
      text: "In a digital age where first impressions matter, DM WebSoft LLP crafted a website that speaks volumes. The team's attention to detail and commitment to quality set them apart. Thank you for making our vision a reality.",
      name: "Sarah Collins",
      position: "Director of Operations, C******** Enterprises",
      avatar: client4
    },
    {
      id: 5,
      text: "DM WebSoft LLP's team demonstrated unparalleled expertise. Their ability to navigate complex technical challenges with ease is truly commendable. Choosing them for our web development needs was the best decision.",
      name: "Ryan Foster",
      position: "Founder, F***** Digital Ventures",
      avatar: client5
    },
    {
      id: 6,
      text: "Exceptional service, unmatched skills! DM WebSoft LLP stands out as a leading web development agency. Their collaborative approach and commitment to excellence make them our go-to partner for all things web-related.",
      name: "Emily Turner",
      position: "Chief Marketing Officer, T***** Tech Solutions",
      avatar: client6
    },
    {
      id: 7,
      text: "DM WebSoft LLP turned our ideas into a digital masterpiece. The seamless communication and timely delivery of our project showcased their professionalism. Highly impressed with the level of creativity and skill.",
      name: "Michael Johnson",
      position: "Head of IT, J******* Innovations",
      avatar: client7
    },
    {
      id: 8,
      text: "Our experience with DM WebSoft LLP was nothing short of amazing. From concept to execution, their team provided top-notch web development services. A reliable partner for businesses looking to elevate their online presence.",
      name: "Amanda White",
      position: "Director of Creative Services, W******* Studios",
      avatar: client8
    },
    {
      id: 9,
      text: "DM WebSoft LLP’s team of tech experts is second to none. Their wealth of experience reflects in the quality of their work. Our website not only meets but exceeds industry standards, thanks to their dedication.",
      name: "Jason Adams",
      position: "Chief Technology Officer, A******  Enterprises",
      avatar: client9
    },
    {
      id: 10,
      text: "Choosing DM WebSoft LLP was the best investment for our web development needs. Their team’s proficiency, coupled with a customer-centric approach, made the entire process smooth and enjoyable. A pleasure to work with!",
      name: "Lauren Carter",
      position: "VP of Digital Strategy, C****** Solutions",
      avatar: client10
    }
  ];

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const handleMouseDown = (e) => {
    isDown.current = true;
    // Set active class for cursor change
    scrollContainerRef.current.classList.add(styles['active']);
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeftStart.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    scrollContainerRef.current.classList.remove(styles['active']);
  };

  const handleMouseUp = () => {
    isDown.current = false;
    scrollContainerRef.current.classList.remove(styles['active']);
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Multiply by 2 for faster scroll
    scrollContainerRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const firstCard = scrollContainerRef.current.firstElementChild;
      let scrollAmount = clientWidth;

      if (firstCard) {
        const cardStyle = window.getComputedStyle(firstCard);
        const cardWidth = firstCard.offsetWidth;
        const cardMargin = parseFloat(cardStyle.marginRight) || 0;
        scrollAmount = cardWidth + cardMargin;
      }

      let newScrollLeft;
      if (direction === 'left') {
        newScrollLeft = scrollLeft - scrollAmount;
      } else {
        const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;
        newScrollLeft = isAtEnd ? 0 : scrollLeft + scrollAmount;
      }

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
          <span className={styles["testimonials-first"]}>Real <span className={styles["highlight-blue"]}>Stories,</span> Real <span className={styles["highlight-blue"]}>Results.</span></span> Discover What Our Clients Say
        </h1>

        <div className={styles["testimonials-wrapper"]}>
          <button
            className={`${styles["scroll-button"]} ${styles["scroll-left"]} ${!canScrollLeft ? styles["disabled"] : ''}`}
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
          >
            <i className="fa-solid fa-arrow-left-long"></i>
          </button>

          <div
            className={styles["testimonials-scroll-container"]}
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            // --- ATTACH DRAG EVENTS ---
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className={styles["testimonial-card"]}>
                <p className={styles["testimonial-text"]}>{testimonial.text}</p>
                <div className={styles["testimonial-author"]}>
                  <img src={testimonial.avatar} alt={testimonial.name} className={styles["author-avatar"]} />
                  <div className={styles["author-info"]}>
                    <h4 className={styles["author-name"]}>{testimonial.name}</h4>
                    <p className={styles["author-position"]}>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className={`${styles["scroll-button"]} ${styles["scroll-right"]} ${!canScrollRight ? styles["disabled"] : ''}`}
            onClick={() => scroll('right')}
          >
            <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;