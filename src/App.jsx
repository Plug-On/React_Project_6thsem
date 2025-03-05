import Navbar from './components/Navbar'
import ProductContainer from './components/ProductContainer'
import ServiceContianer from './components/ServiceContainer'
import Footer from './components/Footer'
import About from './components/AboutContent'
import EventContainer from './components/EventContainer'
import TopBar from './components/TopBar'

function App() {


  return (
    <>
      <TopBar/>
      <Navbar/>
      <ProductContainer/>
      <ServiceContianer/>
      <EventContainer/>
      <About/>
      <Footer/>
      
    </>
  )
}

export default App
