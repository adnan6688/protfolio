import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import About from './About';
import Skills from './Skills';
import Introduction from './Introduction';
import Projects from './Projects';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray('.panel') as HTMLElement[];

    sections.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top", 
        pin: true,
        pinSpacing: false, 
        snap: 1 / (sections.length - 1), 
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef}>
     
      <div className="panel">
        <Introduction></Introduction>
      </div>
      
      <section className="panel ">
        <About></About>
      </section>
      
      <section className="panel">
       <Skills></Skills>
      </section>

      <div className="panel">
        <Projects></Projects>
      </div>
    </div>
  );
};