import Header from './components/Header'
import Hero from './components/Hero'
import Flavors from './components/Flavors'
import Moments from './components/Moments'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen font-arabic" dir="rtl">
      <Header />
      <main>
        <Hero />
        <Flavors />
        <Moments />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
