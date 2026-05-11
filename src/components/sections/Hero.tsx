import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import About from './About';
import Skills from './Skills';
import Introduction from './Introduction';
import Projects from './Projects';

import sound1 from '../../Sounds/one.mp3';
import sound2 from '../../Sounds/sound2.mp3'
import sound3 from '../../Sounds/sound3.mp3'
import { RiVoiceprintFill } from 'react-icons/ri';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);

  // Audio refs
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({
    intro: null,
    about: null,
    skills: null,
    projects: null,
  });

  useEffect(() => {
    // Inisialisasi Audio
    audioRefs.current.intro = new Audio(sound1);
    audioRefs.current.about = new Audio(sound2);
    audioRefs.current.skills = new Audio(sound3);
    audioRefs.current.projects = new Audio(sound1);

    Object.values(audioRefs.current).forEach(audio => {
      if (audio) audio.volume = 0.3;
    });

    const stopAllSounds = () => {
      Object.values(audioRefs.current).forEach(audio => {
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      });
    };

    const sections = gsap.utils.toArray('.panel') as HTMLElement[];

    sections.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: false,
        snap: 1 / (sections.length - 1),
      });

      ScrollTrigger.create({
        trigger: panel,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          stopAllSounds();
          if (isAudioEnabled) {
            audioRefs.current[panel.id]?.play().catch(() => { });
          }
        },
        onEnterBack: () => {
          stopAllSounds();
          if (isAudioEnabled) {
            audioRefs.current[panel.id]?.play().catch(() => { });
          }
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      stopAllSounds();
    };
  }, [isAudioEnabled]); // Trigger ulang saat audio diaktifkan

  // Handler untuk Button
  const handleEnableAudio = () => {
    setIsAudioEnabled(true);

    // Play suara pertama segera setelah klik
    if (audioRefs.current.intro) {
      audioRefs.current.intro.play().catch(e => console.log(e));
    }
  };

  return (
    <div onClick={handleEnableAudio} ref={containerRef} style={{ position: 'relative' }}>

      {/* Floating Button Suara */}
      {!isAudioEnabled && (
        <button
          onClick={handleEnableAudio}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 9999,
            padding: '12px 24px',
            backgroundColor: '#FFF6DE',
            color: 'black',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '16px'
          }}
        >
          <RiVoiceprintFill />

        </button>
      )}

      <section id="intro" className="panel"><Introduction /></section>
      <section id="about" className="panel"><About /></section>
      <section id="skills" className="panel"><Skills /></section>
      <section id="projects" className="panel"><Projects /></section>

    </div>
  );
};