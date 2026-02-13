import styles from "./contactsection.module.css"
const ContactSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <h1 className={styles.heading}>Get Started Now !</h1>
          <p className={styles.subtitle}>
            Share your project or business idea,
            we will reach out to you!
          </p>

          <h3 className={styles.processTitle}>What's the Process ?</h3>
          <div className={styles.processList}>
            <div className={styles.processItem}>
              <span className={styles.chevron}>❯</span>
              Request a Call
            </div>
            <div className={styles.processItem}>
              <span className={styles.chevron}>❯</span>
              Consultation Meeting
            </div>
            <div className={styles.processItem}>
              <span className={styles.chevron}>❯</span>
              Crafting a Tailored Proposal
            </div>
          </div>

          <div className={styles.socialIcons}>
            <div className="w-iconbox us_custom_75e2102a iconpos_top style_default color_primary align_center no_text no_title icontype_img">
              <a
                href="tel:+61406871264"
                className="w-iconbox-link"
                aria-label="fas|star"
              >
                <div
                  className="w-iconbox-icon"
                  style={{ fontSize: "50px" }}
                >
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1811_2638)">
                      <path d="M21.7753 4.62563L20.5878 6.07657C20.7921 6.24376 21.0294 6.36593 21.2842 6.43507C21.539 6.50422 21.8055 6.51879 22.0663 6.47782L21.7753 4.62563ZM4.62532 21.7756L6.47782 22.0663C6.51874 21.8055 6.50415 21.5391 6.43501 21.2844C6.36586 21.0296 6.24372 20.7924 6.07657 20.5881L4.62532 21.7756ZM28.2247 45.3744L29.4119 43.9234C29.2076 43.7562 28.9704 43.6341 28.7157 43.5649C28.4609 43.4958 28.1945 43.4812 27.9337 43.5222L28.2247 45.3744ZM45.3744 28.2247L43.5222 27.9337C43.4812 28.1945 43.4958 28.4609 43.5649 28.7157C43.6341 28.9704 43.7562 29.2076 43.9234 29.4119L45.3744 28.2247ZM22.9628 3.1747C20.4531 1.11785 17.3074 -0.00422449 14.0625 1.19524e-05V3.75001C16.4416 3.74567 18.7484 4.56808 20.5881 6.07657L22.9628 3.1747ZM14.0625 1.19524e-05C6.29595 1.19524e-05 1.23064e-05 6.29595 1.23064e-05 14.0625H3.75001C3.75001 8.3672 8.3672 3.75001 14.0625 3.75001V1.19524e-05ZM1.23064e-05 14.0625C-0.00428633 17.3073 1.11767 20.4531 3.17439 22.9628L6.07657 20.5878C4.56815 18.7481 3.74575 16.4415 3.75001 14.0625H1.23064e-05ZM6.25001 25C6.25001 24.0006 6.32782 23.0209 6.47782 22.0663L2.77345 21.4847C2.59112 22.6476 2.4997 23.8229 2.50001 25H6.25001ZM25 43.75C14.6447 43.75 6.25001 35.3553 6.25001 25H2.50001C2.50001 37.4262 12.5738 47.5 25 47.5V43.75ZM27.9337 43.5222C26.9791 43.6719 25.9994 43.75 25 43.75V47.5C26.1947 47.5 27.3691 47.4066 28.5153 47.2266L27.9337 43.5222ZM27.0372 46.8256C29.5469 48.8823 32.6927 50.0043 35.9375 50V46.25C33.5584 46.2542 31.2517 45.4318 29.4119 43.9234L27.0372 46.8256ZM35.9375 50C43.7041 50 50 43.7041 50 35.9375H46.25C46.25 41.6328 41.6328 46.25 35.9375 46.25V50ZM50 35.9375C50.0043 32.6927 48.8823 29.5469 46.8256 27.0372L43.9234 29.4119C45.4318 31.2517 46.2542 33.5584 46.25 35.9375H50ZM43.75 25C43.75 25.9994 43.6719 26.9791 43.5222 27.9337L47.2266 28.5153C47.4066 27.3691 47.5 26.1947 47.5 25H43.75ZM25 6.25001C35.3553 6.25001 43.75 14.6447 43.75 25H47.5C47.5 12.5738 37.4262 2.50001 25 2.50001V6.25001ZM22.0663 6.47782C23.0367 6.32561 24.0176 6.24965 25 6.25001V2.50001C23.8053 2.50001 22.6313 2.59345 21.4844 2.77345L22.0663 6.47782Z" fill="white"></path>
                      <path d="M31.3637 15.8694C31.3637 15.8694 28.8183 14 25 14C22.4547 14 18 14 18 18.8889C18 25 32 25 32 31.1115C32 36 27.5453 36 25 36C21.182 36 18.6367 34.1306 18.6367 34.1306" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinecastrokeLinejoinp="round"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1811_2638">
                        <rect width="50" height="50" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </a>

              <div className="w-iconbox-meta"></div>
            </div>

            <div className={styles.icon}>
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1815_2641)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.814 25.4186C5.814 14.5013 14.6642 5.65116 25.5814 5.65116C36.4986 5.65116 45.3488 14.5013 45.3488 25.4186C45.3488 36.3358 36.4986 45.186 25.5814 45.186C21.6926 45.186 18.0727 44.0656 15.0186 42.1305C14.4502 41.7705 13.7537 41.6742 13.1089 41.8665L6.41323 43.8649L8.93426 37.9658C9.23223 37.2686 9.17161 36.47 8.77179 35.8258C6.89698 32.8046 5.814 29.2416 5.814 25.4186ZM25.5814 1C12.0954 1 1.16284 11.9326 1.16284 25.4186C1.16284 29.6933 2.26317 33.717 4.19686 37.2156L0.187143 46.5977C-0.167327 47.4272 -0.010206 48.3867 0.590282 49.0598C1.19077 49.733 2.12633 49.9981 2.99068 49.74L13.4544 46.6174C17.029 48.6663 21.1714 49.8372 25.5814 49.8372C39.0674 49.8372 50 38.9046 50 25.4186C50 11.9326 39.0674 1 25.5814 1ZM30.9128 30.494L27.8565 32.6467C26.4251 31.8314 24.8426 30.6933 23.2551 29.1058C21.6049 27.4556 20.3814 25.7519 19.4793 24.1891L21.4216 22.5405C22.2551 21.833 22.4833 20.6403 21.9698 19.6751L19.495 15.0239C19.1617 14.3976 18.5608 13.9577 17.8631 13.8292C17.1654 13.7007 16.4472 13.8977 15.9127 14.3642L15.179 15.0045C13.4145 16.5445 12.3709 19.0751 13.2358 21.6374C14.1325 24.2937 16.0461 28.4744 19.9663 32.3946C24.184 36.6123 28.4681 38.2733 30.9735 38.9184C32.9921 39.4379 34.9023 38.7414 36.2484 37.6447L37.624 36.5237C38.2123 36.0444 38.5298 35.3079 38.4744 34.5509C38.4188 33.794 37.9974 33.1116 37.3453 32.723L33.4423 30.3974C32.654 29.9279 31.6633 29.9656 30.9128 30.494Z" fill="white"></path>
                </g>
              </svg>
            </div>
          </div>

          <div className={styles.bottonClipArt}>
            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="100" height="87" viewBox="0 0 100 87" fill="none">
              <path d="M98.3548 59.8982C93.8987 50.686 79.931 34.7703 59.7097 44.8051C34.433 57.3487 9.59468 34.7809 8.04079 25.7901" stroke="white" strokeWidth="2" />
              <path d="M17.9098 28.4569L7.68337 24.4833L2.68991 34.4695" stroke="white" strokeWidth="2.61617" />
            </svg>
            <p className={styles.availabilityText}>We are available 24×7! Call us now</p>
          </div>
        </div>

        <div className={styles.formCard}>
          <form id="contactForm">
            <div className={styles.formGroup}>
              <input type="text" name="fullName" className={styles.input} placeholder="Full Name" required />
            </div>

            <div className={styles.formGroup}>
              <input type="email" name="email" className={styles.input} placeholder="Email Address" required />
            </div>

            <div className={styles.formGroup}>
              <div className={styles.phoneContainer}>
                <span className={styles.flag}>🇺🇸</span>
                <span className={styles.countryCode}>+1</span>
                <input type="tel" name="mobileNumber" placeholder="Mobile Number" className={styles.phoneInput} required />
              </div>
            </div>

            <div className={styles.formGroup}>
              <input type="text" name="budget" className={styles.input} placeholder="What's your Budget?" required />
            </div>

            <div className={styles.formGroup}>
              <textarea name="description" className={styles.input} placeholder="Description" required></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>Let's work together</button>

            <p className={styles.disclaimer}>
              We will revert back in 10-30 minutes, guaranteed !
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;