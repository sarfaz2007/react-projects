
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

function App() {

  return (
    <>
     
     <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
     <Footer/>

    </>
  )
}

export default App
