import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import { Hero } from './components/sections/Hero'
import { Navbar } from './components/Navber'
import { Footer } from './components/sections/Footer'

function App() {


  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Navbar></Navbar>
      <Hero/>
      {/* <Footer></Footer> */}
   
    </main>
  )
}


export default App