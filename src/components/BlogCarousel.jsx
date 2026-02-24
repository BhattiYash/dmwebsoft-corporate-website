import { useState, useEffect, useRef, useCallback } from 'react';
import styles from '../assets/styles/blogcarousel.module.css';

const BlogCarousel = () => {
  const blogs = [
    { id: 1, date: "January 31, 2024", title: "Cloud Computing in Web Development: Advantages for Modern Businesses", image: "https://dmwebsoft.com/wp-content/uploads/2025/03/No-Code-Innovation-From-Concept-to-Launch-in-Record-Time-DM-WebSoft-LLP-scaled.jpg" },
    { id: 2, date: "February 5, 2024", title: "Integrating AI into Web Development: Opportunities and Challenges", image: "https://dmwebsoft.com/wp-content/uploads/2024/01/How-AI-is-Transforming-Web-Development-Opportunities-and-Challenges-AI-DM-WebSoft.png" },
    { id: 3, date: "February 8, 2024", title: "Starting an AI Startup: A Step-by-Step Guide for Entrepreneurs", image: "https://dmwebsoft.com/wp-content/uploads/2024/01/Cloud-Computing-in-Web-Development-Advantages-for-Modern-Businesses-AI-DM-WebSoft-scaled.jpg" },
    { id: 4, date: "January 1, 2024", title: "No-Code Innovation: From Concept to Launch in Record Time", image: "https://dmwebsoft.com/wp-content/uploads/2024/02/Integrating-AI-into-Web-Development-Opportunities-and-Challenges-in-2024-DM-WebSoft-scaled.jpg" },
    { id: 5, date: "January 29, 2024", title: "How AI is Transforming Web Development: Opportunities and Challenges", image: "https://dmwebsoft.com/wp-content/uploads/2024/02/Starting-an-AI-Startup-A-Step-by-Step-Guide-for-Entrepreneurs-AIBlog-DM-WebSoft.jpg" },
  ];

  const totalReal = blogs.length;
  const [visibleCount, setVisibleCount] = useState(3);
  // We prepend `visibleCount` clones at the start and append `visibleCount` at the end
  // Index starts at `visibleCount` to show the first real card
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
  const extendedBlogs = [
    ...blogs.slice(-cloneCount),
    ...blogs,
    ...blogs.slice(0, cloneCount),
  ];

  useEffect(() => {
    const handleResize = () => {
      const newCount = getVisibleCount();
      setVisibleCount(newCount);
      // Reset to first real card on resize
      setIsTransitioning(false);
      setCurrentIndex(newCount);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getVisibleCount]);

  // After a transition ends, check if we're on a clone and snap to the real card
  const handleTransitionEnd = useCallback(() => {
    // If we've scrolled past the last real card into the appended clones
    if (currentIndex >= totalReal + cloneCount) {
      setIsTransitioning(false);
      setCurrentIndex(cloneCount); // snap to first real
    }
    // If we've scrolled before the first real card into the prepended clones
    if (currentIndex < cloneCount) {
      setIsTransitioning(false);
      setCurrentIndex(totalReal + cloneCount - 1); // snap to last real
    }
  }, [currentIndex, totalReal, cloneCount]);

  // Re-enable transition after a snap (instant jump)
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
      const dragPercent = (dragDelta.current / trackRef.current.parentElement.offsetWidth) * 100;
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
    <section className={styles["blog-section"]}>
      <h1 className={styles["blog-title"]}>Our <span>Blogs</span></h1>

      <div
        className={styles["carousel-viewport"]}
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
          className={styles["carousel-track"]}
          style={{
            transform: `translateX(${translateX}%)`,
            transition: isTransitioning ? 'transform 0.5s ease' : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedBlogs.map((blog, index) => (
            <div
              key={`blog-${index}`}
              className={styles["blog-card"]}
              style={{ flex: `0 0 calc(${cardWidthPercent}% - 17px)` }}
            >
              <div className={styles["blog-image-placeholder"]}>
                <div className={styles["img-box"]}>
                  <img src={blog.image} alt="Blog" className={styles["blog-img"]} draggable="false" />
                </div>
              </div>
              <div className={styles["blog-content"]}>
                <p className={styles["blog-date"]}>{blog.date}</p>
                <h3 className={styles["blog-header-text"]}>{blog.title}</h3>
                <div className={styles["read-more-container"]}>
                  <div className={styles["arrow-circle"]}>
                    <span className={styles["arrow-svg"]}><i className="fa-solid fa-arrow-right-long"></i></span>
                  </div>
                  <span className={styles["read-more-label"]}>Read More</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;