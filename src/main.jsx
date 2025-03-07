import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router ,Route ,Routes} from 'react-router-dom'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contacts from './pages/Contacts.jsx'
import SingleProduct from './pages/SingleProduct.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/singleproduct' element={<SingleProduct/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

      </Routes>
    </Router> 
    
  </StrictMode>,
)
