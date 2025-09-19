import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Navbar'
import "@fortawesome/fontawesome-free/css/all.min.css"
import { Hero } from './assets/components/Hero'
import Analytics from './assets/components/Analytics'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Analytics/>
    </>
  )
}

export default App
