import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import styles from './components/hero.module.css'
import Statistics from './components/Statistics'
import CaseStudies from './components/CaseStudies'
import AwardAchivements from './components/AwardAchivements'
import AiPowered from './components/AiPowered'
// import ContactSection from './components/ContactSection'
import AddedNew from './components/AddedNew'
import Industries from './components/Industries'
import Testimonials from './components/Testimonials'
import CtaBanner from './components/CtaBanner'
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
      {/* <ContactSection/> */}
      <AddedNew/>
      <Industries/>
      <Testimonials/>
      <CtaBanner/>
    </>
  )
}

export default App
