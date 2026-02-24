import { useState, useEffect, useRef, useCallback } from 'react';
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
  const testimonialsData = [
    { id: 1, text: "DM WebSoft LLP exceeded our expectations! Their seasoned team of experts delivered a website that perfectly captures our brand essence. Their 15+ years of experience truly shine through in their exceptional web development skills.", name: "Mark Thompson", position: "CEO, T******* Enterprises", avatar: client1 },
    { id: 2, text: "Working with DM WebSoft LLP was a game-changer for our business. Their technical prowess and innovative solutions transformed our online presence. A highly recommended web development agency with a stellar track record.", name: "Jennifer Miller", position: "VP of Marketing, M****** Innovations", avatar: client2 },
    { id: 3, text: "We are thrilled with the results DM WebSoft LLP delivered. Their deep understanding of web development coupled with years of expertise ensured a seamless and visually stunning website. True professionals!", name: "Brian Harrison", position: "CTO, H******* Tech Solutions", avatar: client3 },
    { id: 4, text: "In a digital age where first impressions matter, DM WebSoft LLP crafted a website that speaks volumes. The team's attention to detail and commitment to quality set them apart. Thank you for making our vision a reality.", name: "Sarah Collins", position: "Director of Operations, C******** Enterprises", avatar: client4 },
    { id: 5, text: "DM WebSoft LLP's team demonstrated unparalleled expertise. Their ability to navigate complex technical challenges with ease is truly commendable. Choosing them for our web development needs was the best decision.", name: "Ryan Foster", position: "Founder, F***** Digital Ventures", avatar: client5 },
    { id: 6, text: "Exceptional service, unmatched skills! DM WebSoft LLP stands out as a leading web development agency. Their collaborative approach and commitment to excellence make them our go-to partner for all things web-related.", name: "Emily Turner", position: "Chief Marketing Officer, T***** Tech Solutions", avatar: client6 },
    { id: 7, text: "DM WebSoft LLP turned our ideas into a digital masterpiece. The seamless communication and timely delivery of our project showcased their professionalism. Highly impressed with the level of creativity and skill.", name: "Michael Johnson", position: "Head of IT, J******* Innovations", avatar: client7 },
    { id: 8, text: "Our experience with DM WebSoft LLP was nothing short of amazing. From concept to execution, their team provided top-notch web development services. A reliable partner for businesses looking to elevate their online presence.", name: "Amanda White", position: "Director of Creative Services, W******* Studios", avatar: client8 },
    { id: 9, text: "DM WebSoft LLP's team of tech experts is second to none. Their wealth of experience reflects in the quality of their work. Our website not only meets but exceeds industry standards, thanks to their dedication.", name: "Jason Adams", position: "Chief Technology Officer, A******  Enterprises", avatar: client9 },
    { id: 10, text: "Choosing DM WebSoft LLP was the best investment for our web development needs. Their team's proficiency, coupled with a customer-centric approach, made the entire process smooth and enjoyable. A pleasure to work with!", name: "Lauren Carter", position: "VP of Digital Strategy, C****** Solutions", avatar: client10 },
  ];

  const totalReal = testimonialsData.length;
  const [visibleCount, setVisibleCount] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const autoPlayRef = useRef(null);
  const dragStartX = useRef(0);
  const dragDelta = useRef(0);
  const isDragging = useRef(false);
  const trackRef = useRef(null);

  const getVisibleCount = useCallback(() => {
    const w = window.innerWidth;
    if (w > 992) return 3;
    if (w > 767) return 2;
    return 1;
  }, []);

  // Build extended array: [last N clones] + [real] + [first N clones]
  const cloneCount = visibleCount;
  const extendedData = [
    ...testimonialsData.slice(-cloneCount),
    ...testimonialsData,
    ...testimonialsData.slice(0, cloneCount),
  ];

  useEffect(() => {
    const handleResize = () => {
      const newCount = getVisibleCount();
      setVisibleCount(newCount);
      setIsTransitioning(false);
      setCurrentIndex(newCount);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getVisibleCount]);

  // After transition ends, snap from clone to real card
  const handleTransitionEnd = useCallback(() => {
    if (currentIndex >= totalReal + cloneCount) {
      setIsTransitioning(false);
      setCurrentIndex(cloneCount);
    }
    if (currentIndex < cloneCount) {
      setIsTransitioning(false);
      setCurrentIndex(totalReal + cloneCount - 1);
    }
  }, [currentIndex, totalReal, cloneCount]);

  // Re-enable transition after snap
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning, currentIndex]);

  // Auto-play
  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 4000);
  }, [stopAutoPlay]);

  const resetAutoPlay = useCallback(() => {
    stopAutoPlay();
    startAutoPlay();
  }, [stopAutoPlay, startAutoPlay]);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [startAutoPlay, stopAutoPlay]);

  // --- Drag / Touch ---
  const handleDragStart = (clientX) => {
    isDragging.current = true;
    dragStartX.current = clientX;
    dragDelta.current = 0;
    stopAutoPlay();
    setIsTransitioning(false);
  };

  const handleDragMove = (clientX) => {
    if (!isDragging.current) return;
    dragDelta.current = clientX - dragStartX.current;
    if (trackRef.current) {
      const cardWidthPercent = 100 / visibleCount;
      const baseOffset = -(currentIndex * cardWidthPercent);
      trackRef.current.style.transform = `translateX(calc(${baseOffset}% + ${dragDelta.current}px))`;
    }
  };

  const handleDragEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const threshold = 50;
    setIsTransitioning(true);

    if (dragDelta.current < -threshold) {
      setCurrentIndex((prev) => prev + 1);
    } else if (dragDelta.current > threshold) {
      setCurrentIndex((prev) => prev - 1);
    }
    if (trackRef.current) {
      trackRef.current.style.transform = '';
    }
    dragDelta.current = 0;
    resetAutoPlay();
  };

  const onMouseDown = (e) => { e.preventDefault(); handleDragStart(e.clientX); };
  const onMouseMove = (e) => { handleDragMove(e.clientX); };
  const onMouseUp = () => { handleDragEnd(); };
  const onMouseLeave = () => { if (isDragging.current) handleDragEnd(); };
  const onTouchStart = (e) => { handleDragStart(e.touches[0].clientX); };
  const onTouchMove = (e) => { handleDragMove(e.touches[0].clientX); };
  const onTouchEnd = () => { handleDragEnd(); };

  const cardWidthPercent = 100 / visibleCount;
  const translateX = -(currentIndex * cardWidthPercent);

  return (
    <div className={styles["testimonials-section"]}>
      <div className={styles["testimonials-container"]}>
        <h1 className={styles["testimonials-heading"]}>
          <span className={styles["testimonials-first"]}>Real <span className={styles["highlight-blue"]}>Stories,</span> Real <span className={styles["highlight-blue"]}>Results.</span></span> Discover What Our Clients Say
        </h1>

        <div className={styles["testimonials-wrapper"]}>
          <div
            className={styles["testimonials-viewport"]}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              ref={trackRef}
              className={styles["testimonials-track"]}
              style={{
                transform: `translateX(${translateX}%)`,
                transition: isTransitioning ? 'transform 0.5s ease' : 'none',
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedData.map((testimonial, index) => (
                <div
                  key={`test-${index}`}
                  className={styles["testimonial-card"]}
                  style={{ flex: `0 0 calc(${cardWidthPercent}% - 17px)` }}
                >
                  <p className={styles["testimonial-text"]}>{testimonial.text}</p>
                  <div className={styles["testimonial-author"]}>
                    <img src={testimonial.avatar} alt={testimonial.name} className={styles["author-avatar"]} draggable="false" />
                    <div className={styles["author-info"]}>
                      <h4 className={styles["author-name"]}>{testimonial.name}</h4>
                      <p className={styles["author-position"]}>{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right arrow only */}
          <button
            className={`${styles["scroll-button"]} ${styles["scroll-right"]}`}
            onClick={() => { setIsTransitioning(true); setCurrentIndex((prev) => prev + 1); resetAutoPlay(); }}
          >
            <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;