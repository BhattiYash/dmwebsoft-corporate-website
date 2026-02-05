import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import styles from './components/hero.module.css'
function App() {
  return (
    <>
    <div className={styles.image}>
      <Navbar />
      <Hero />
    </div>
    </>
  )
}

export default App
