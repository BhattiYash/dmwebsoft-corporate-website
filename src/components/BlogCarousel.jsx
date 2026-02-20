import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from '../assets/styles/blogcarousel.module.css';

const BlogCarousel = () => {
  const blogs = [
    { id: 1, date: "January 31, 2024", title: "Cloud Computing in Web Development: Advantages for Modern Businesses", image: "https://dmwebsoft.com/wp-content/uploads/2025/03/No-Code-Innovation-From-Concept-to-Launch-in-Record-Time-DM-WebSoft-LLP-scaled.jpg" },
    { id: 2, date: "February 5, 2024", title: "Integrating AI into Web Development: Opportunities and Challenges", image: "https://dmwebsoft.com/wp-content/uploads/2024/01/How-AI-is-Transforming-Web-Development-Opportunities-and-Challenges-AI-DM-WebSoft.png" },
    { id: 3, date: "February 8, 2024", title: "Starting an AI Startup: A Step-by-Step Guide for Entrepreneurs", image: "https://dmwebsoft.com/wp-content/uploads/2024/01/Cloud-Computing-in-Web-Development-Advantages-for-Modern-Businesses-AI-DM-WebSoft-scaled.jpg" },
    { id: 4, date: "January 1, 2024", title: "No-Code Innovation: From Concept to Launch in Record Time", image: "https://dmwebsoft.com/wp-content/uploads/2024/02/Integrating-AI-into-Web-Development-Opportunities-and-Challenges-in-2024-DM-WebSoft-scaled.jpg" },
    { id: 5, date: "January 29, 2024", title: "TheHow AI is Transforming Web Development: Opportunities and Challenges", image: "https://dmwebsoft.com/wp-content/uploads/2024/02/Starting-an-AI-Startup-A-Step-by-Step-Guide-for-Entrepreneurs-AIBlog-DM-WebSoft.jpg" },
  ];

  const trackRef = useRef(null);
  const [cardStep, setCardStep] = useState(-395);

  useEffect(() => {
    const handleResize = () => {
      // If we can measure the first card, dynamically get its width + gap (25px)
      if (trackRef.current) {
        const firstCard = trackRef.current.querySelector('.' + styles["blog-card"]);
        if (firstCard) {
          setCardStep(-(firstCard.offsetWidth + 25));
        }
      }
    };

    // Slight delay to ensure CSS has applied on mount, then measure
    setTimeout(handleResize, 50);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Generate the animation values dynamically based on cardStep
  const animationSteps = [
    0,
    cardStep, cardStep,
    cardStep * 2, cardStep * 2,
    cardStep * 3, cardStep * 3,
    cardStep * 4, cardStep * 4,
    cardStep * 5, cardStep * 5
  ];

  return (
    <section className={styles["blog-section"]}>
      <h1 className={styles["blog-title"]}>Our <span>Blogs</span></h1>

      <div className={styles["carousel-viewport"]}>
        <motion.div
          ref={trackRef}
          className={styles["carousel-track"]}
          drag="x"
          dragConstraints={{ right: 0, left: -(Math.abs(cardStep) * blogs.length) }}
          animate={{ x: animationSteps }}
          transition={{
            x: {
              repeat: Infinity,
              duration: 16.5,
              ease: "easeInOut",
              times: [
                0, 0.02, 0.20, 0.22, 0.40, 0.42, 0.60, 0.62, 0.80, 0.82, 1
              ],
            }
          }}
        >
          {/* We duplicate the array to ensure the loop is seamless */}
          {blogs.concat(blogs).map((blog, index) => (
            <div key={index} className={styles["blog-card"]}>
              <div className={styles["blog-image-placeholder"]}>
                <div className={styles["img-box"]}>
                  <img src={blog.image} alt="Blog" className={styles["blog-img"]} />
                </div>
              </div>
              <div className={styles["blog-content"]}>
                <p className={styles["blog-date"]}>{blog.date}</p>
                <h3 className={styles["blog-header-text"]}>{blog.title}</h3>
                <div className={styles["read-more-container"]}>
                  <div className={styles["arrow-circle"]}>
                    <span className={styles["arrow-svg"]}><i class="fa-solid fa-arrow-right-long"></i></span>
                  </div>
                  <span className={styles["read-more-label"]}>Read More</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogCarousel;