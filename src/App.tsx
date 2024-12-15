import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import Reviews from './components/Reviews'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import FAQ from './components/FAQ';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <section id="features">
        <Features />
      </section>
      <section id="stats">
        <Stats isVisible={false} />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <AboutUs />  {/* Moved AboutUs here */}
      <section id="reviews">
        <Reviews />
      </section>
      <Footer />
    </div>
  )
}

export default App;