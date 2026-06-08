import Header from './components/Header'
import Hero from './components/Hero'
import Advantages from './components/Advantages'
import Services from './components/Services'
import Calculator from './components/Calculator'
import Portfolio from './components/Portfolio'
import Steps from './components/Steps'
import Testimonials from './components/Testimonials'
import Stats from './components/Stats'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Services />
        <Calculator />
        <Portfolio />
        <Steps />
        <Testimonials />
        <Stats />
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </>
  )
}
