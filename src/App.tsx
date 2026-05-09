import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import { Hero } from './components/sections/Hero'
import { Navbar } from './components/Navber'

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
   
    </main>
  )
}


export default App