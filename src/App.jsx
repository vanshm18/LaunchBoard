import KeyFeatures from "./components/KeyFeatures"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <KeyFeatures/>
      <Pricing/>
      <Testimonials/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default App
