import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import styles from '../assets/styles/blogcarousel.module.css';

const BlogCarousel = () => {
  const blogs = [
    { id: 1, date: "January 31, 2024", title: "Cloud Computing in Web Development: Advantages for Modern Businesses", image: "https://dmwebsoft.com/wp-content/uploads/2025/03/No-Code-Innovation-From-Concept-to-Launch-in-Record-Time-DM-WebSoft-LLP-scaled.jpg" },
    { id: 2, date: "February 5, 2024", title: "Integrating AI into Web Development: Opportunities and Challenges", image: "https://dmwebsoft.com/wp-content/uploads/2024/01/How-AI-is-Transforming-Web-Development-Opportunities-and-Challenges-AI-DM-WebSoft.png" },
    { id: 3, date: "February 8, 2024", title: "Starting an AI Startup: A Step-by-Step Guide for Entrepreneurs", image: "https://dmwebsoft.com/wp-content/uploads/2024/01/Cloud-Computing-in-Web-Development-Advantages-for-Modern-Businesses-AI-DM-WebSoft-scaled.jpg" },
    { id: 4, date: "January 1, 2024", title: "No-Code Innovation: From Concept to Launch in Record Time", image: "https://dmwebsoft.com/wp-content/uploads/2024/02/Integrating-AI-into-Web-Development-Opportunities-and-Challenges-in-2024-DM-WebSoft-scaled.jpg" },
    { id: 5, date: "January 29, 2024", title: "How AI is Transforming Web Development: Opportunities and Challenges", image: "https://dmwebsoft.com/wp-content/uploads/2024/02/Starting-an-AI-Startup-A-Step-by-Step-Guide-for-Entrepreneurs-AIBlog-DM-WebSoft.jpg" },
  ];

  return (
    <section className={styles["blog-section"]}>
      <h1 className={styles["blog-title"]}>Our <span>Blogs</span></h1>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={25}
        slidesPerView={1}
        loop={true}
        speed={500}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          993: { slidesPerView: 3 }
        }}
        className={styles["carousel-viewport"]}
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id} className={styles["swiper-slide-custom"]}>
            <div className={styles["blog-card"]}>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BlogCarousel;