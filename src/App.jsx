import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import styles from './assets/styles/hero.module.css'
import Statistics from './components/Statistics'
import CaseStudies from './components/CaseStudies'
import AwardAchivements from './components/AwardAchivements'
import AiPowered from './components/AiPowered'
import ContactSection from './components/ContactSection'
import Industries from './components/Industries'
import Testimonials from './components/Testimonials'
import CtaBanner from './components/CtaBanner'
import FAQ from './components/FAQ'
import OfficeGallery from './components/OfficeGallary'
import BlogCarousel from './components/BlogCarousel'
import ContactBanner from './components/ContactBanner'
import MainFooter from './components/MainFooter'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <div className={styles.image}>
        <Navbar />
        <Hero />
      </div>
      <Statistics />
      <CaseStudies />
      <AwardAchivements />
      <AiPowered />
      <ContactSection />
      <Industries />
      <Testimonials />
      <CtaBanner />
      <FAQ />
      <OfficeGallery />
      <BlogCarousel />
      <ContactBanner />
      <MainFooter />
      {/* <Footer /> */}
    </>
  )
}

export default App
