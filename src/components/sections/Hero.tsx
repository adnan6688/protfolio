import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import About from './About';
import Skills from './Skills';
import Introduction from './Introduction';
import Projects from './Projects';

import sound1 from '../../Sounds/one.mp3'


gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Audio refs
  const introSound = useRef<HTMLAudioElement | null>(null);
  const aboutSound = useRef<HTMLAudioElement | null>(null);
  const skillsSound = useRef<HTMLAudioElement | null>(null);
  const projectsSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Sounds initialize
    introSound.current = new Audio(sound1);
    aboutSound.current = new Audio(sound1);
    skillsSound.current = new Audio(sound1);
    projectsSound.current = new Audio(sound1);

    // volume control
    introSound.current.volume = 0.3;
    aboutSound.current.volume = 0.3;
    skillsSound.current.volume = 0.3;
    projectsSound.current.volume = 0.3;

    const sections = gsap.utils.toArray('.panel') as HTMLElement[];

    const stopAllSounds = () => {
      [
        introSound.current,
        aboutSound.current,
        skillsSound.current,
        projectsSound.current,
      ].forEach((audio) => {
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      });
    };

    sections.forEach((panel) => {
      // Pin Scroll Effect
      ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: false,
        snap: 1 / (sections.length - 1),
      });

      // Sound Trigger
      ScrollTrigger.create({
        trigger: panel,
        start: 'top center',
        end: 'bottom center',

        onEnter: () => {
          stopAllSounds();

          if (panel.id === 'intro') {
            introSound.current?.play();
          }

          if (panel.id === 'about') {
            aboutSound.current?.play();
          }

          if (panel.id === 'skills') {
            skillsSound.current?.play();
          }

          if (panel.id === 'projects') {
            projectsSound.current?.play();
          }
        },

        onEnterBack: () => {
          stopAllSounds();

          if (panel.id === 'intro') {
            introSound.current?.play();
          }

          if (panel.id === 'about') {
            aboutSound.current?.play();
          }

          if (panel.id === 'skills') {
            skillsSound.current?.play();
          }

          if (panel.id === 'projects') {
            projectsSound.current?.play();
          }
        },
      });
    });

    // Browser autoplay unlock
    const unlockAudio = () => {
      introSound.current?.play().then(() => {
        introSound.current?.pause();
        introSound.current!.currentTime = 0;
      });

      window.removeEventListener('click', unlockAudio);
    };

    window.addEventListener('click', unlockAudio);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());

      stopAllSounds();

      window.removeEventListener('click', unlockAudio);
    };
  }, []);

  return (
    <div ref={containerRef}>
      
      <section id="intro" className="panel">
        <Introduction />
      </section>

      <section id="about" className="panel">
        <About />
      </section>

      <section id="skills" className="panel">
        <Skills />
      </section>

      <section id="projects" className="panel">
        <Projects />
      </section>

    </div>
  );
};