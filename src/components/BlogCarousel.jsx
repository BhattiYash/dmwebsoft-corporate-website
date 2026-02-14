import { motion } from 'framer-motion';
import styles from './blogcarousel.module.css';

const BlogCarousel = () => {
  const blogs = [
    { id: 1, date: "January 31, 2024", title: "Cloud Computing in Web Development: Advantages for Modern Businesses", image: "https://dmwebsoft.com/wp-content/uploads/2025/03/No-Code-Innovation-From-Concept-to-Launch-in-Record-Time-DM-WebSoft-LLP-scaled.jpg" },
    { id: 2, date: "February 5, 2024", title: "Integrating AI into Web Development: Opportunities and Challenges", image: "https://dmwebsoft.com/wp-content/uploads/2024/01/How-AI-is-Transforming-Web-Development-Opportunities-and-Challenges-AI-DM-WebSoft.png" },
    { id: 3, date: "February 8, 2024", title: "Starting an AI Startup: A Step-by-Step Guide for Entrepreneurs", image: "https://dmwebsoft.com/wp-content/uploads/2024/01/Cloud-Computing-in-Web-Development-Advantages-for-Modern-Businesses-AI-DM-WebSoft-scaled.jpg" },
    { id: 4, date: "January 1, 2024", title: "No-Code Innovation: From Concept to Launch in Record Time", image: "https://dmwebsoft.com/wp-content/uploads/2024/02/Integrating-AI-into-Web-Development-Opportunities-and-Challenges-in-2024-DM-WebSoft-scaled.jpg" },
    { id: 5, date: "December 20, 2023", title: "The Future of MERN Stack in 2026", image: "https://dmwebsoft.com/wp-content/uploads/2024/02/Starting-an-AI-Startup-A-Step-by-Step-Guide-for-Entrepreneurs-AIBlog-DM-WebSoft.jpg" },
  ];

  // Calculate the width of one card + gap (approx 400px based on 1200px container)
  const cardStep = -390;

  return (
    <section className={styles["blog-section"]}>
      <h1 className={styles["blog-title"]}>Our <span>Blogs</span></h1>

      <div className={styles["carousel-viewport"]}>
        <motion.div
          className={styles["carousel-track"]}
          drag="x"
          dragConstraints={{ right: 0, left: -2000 }}
          animate={{
            // We repeat values to "hold" the position during the 3s delay
            x: [0, -390, -390, -780, -780, -1170, -1170, -1560, -1560, -1950, -1950]
          }}
          transition={{
            x: {
              repeat: Infinity,
              duration: 16.5, // (3s pause + 0.3s move) * 5 steps
              ease: "easeInOut",
              // Each pair represents: [Arrive at position, Stay until...]
              times: [
                0,    // Start at 0
                0.02, // Arrive at -400 (after 0.3s)
                0.20, // Stay at -400 (for 3s)
                0.22, // Arrive at -800 (after 0.3s)
                0.40, // Stay at -800 (for 3s)
                0.42, // ...and so on
                0.60,
                0.62,
                0.80,
                0.82,
                1
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