import Hero from './components/Hero'
import Problem from './components/Problem'
import Objectives from './components/Objectives'
import Setup from './components/Setup'
import Sponsorship from './components/Sponsorship'
import Footer from './components/Footer'

/**
 * BakkieBot — single-page investor site.
 * Ordered sections: Hero → Problem → Objectives → Setup → Sponsorship → Footer.
 */
function App() {
  return (
    <div id="top">
      <Hero />
      <Problem />
      <Objectives />
      <Setup />
      <Sponsorship />
      <Footer />
    </div>
  )
}

export default App