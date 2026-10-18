import Hero from './components/Hero'
import Problem from './components/Problem'
import Objectives from './components/Objectives'
import Setup from './components/Setup'
import Roadmap from './components/Roadmap'
import About from './components/About'
import Tiers from './components/Tiers'
import Sponsorship from './components/Sponsorship'
import Footer from './components/Footer'

/**
 * BakkieBot — single-page public-build site.
 * Ordered sections: Hero → Problem → Objectives → Setup → Tiers → Sponsorship → Footer.
 */
function App() {
  return (
    <div id="top">
      <Hero />
      <Problem />
      <Objectives />
      <Setup />
      <Roadmap />
      <About />
      <Tiers />
      <Sponsorship />
      <Footer />
    </div>
  )
}

export default App