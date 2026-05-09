import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import photo from './../../assets/photo.png';
import { SiLeetcode } from 'react-icons/si';
import { LiaLinkedin } from 'react-icons/lia';
import { GiThunderBlade } from 'react-icons/gi';

gsap.registerPlugin(ScrollTrigger);

export default function Introduction() {
    const textRef = useRef<HTMLHeadingElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!textRef.current) return;

        // Split text into chars
        const originalText = textRef.current.innerText;

        textRef.current.innerHTML = originalText
            .split('')
            .map(
                (char) =>
                    `<span class="char inline-block translate-y-30 opacity-0">
            ${char === ' ' ? '&nbsp;' : char}
          </span>`
            )
            .join('');

        const chars = textRef.current.querySelectorAll('.char');

        // MASTER TIMELINE
        const tl = gsap.timeline();

        // TEXT INTRO ANIMATION
        tl.to(chars, {
            y: 0,
            opacity: 1,
            stagger: 0.03,
            duration: 1,
            ease: 'power4.out',
        });

        // SCROLL ANIMATION
        gsap.to(contentRef.current, {
            y: -120,
            ease: 'none',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: 2,
            },
        });

        gsap.to(imageRef.current, {
            y: -180,
            rotate: 8,
            ease: 'none',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: 2,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="min-h-screen w-full bg-black flex items-center overflow-hidden px-5 sm:px-8 md:px-12 lg:px-20 py-10"
        >
            <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-5">

                {/* LEFT CONTENT */}
                <div
                    ref={contentRef}
                    className="z-20  lg:text-left items-center order-2 lg:order-1 -mt-10 sm:-mt-16 md:-mt-20 lg:-mt-32"
                >

                    {/* Name */}
                    <h3
                        className="
              text-[#FFF6DE]/70
              text-sm
              sm:text-base
              md:text-lg
              uppercase
              tracking-[6px]
              mb-5
            "
                    >
                        Golam Faruk Adnan
                    </h3>

                    {/* Main Title */}
                    <h1
                        ref={textRef}
                        className="
              text-[#FFF6DE]
              text-4xl
      
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-8xl
              2xl:text-7xl
          
              leading-[0.9]
              tracking-tighter
              uppercase
            "
                    >
                        Full Stack Developer
                    </h1>

                    <div className="h-6 sm:h-8 md:h-10" />

                    {/* Description */}
                    <p
                        className="
              text-gray-400
              text-sm
              sm:text-base
              md:text-lg
              leading-relaxed
              max-w-xl
              mx-auto
              lg:mx-0
            "
                    >
                        Passionate about building modern full-stack web applications using
                        React, Next.js, Node.js, Express.js, MongoDB, REST APIs,
                        authentication systems, backend architecture, database management,
                        and interactive frontend experiences.
                    </p>



                     <div className="flex items-center gap-4 mt-8">
    <a
      href="https://github.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-12 h-12
        rounded-full
        border border-[#FFF6DE]
        flex items-center justify-center
        text-[#FFF6DE]
        hover:bg-[#FFF6DE]
        hover:text-black
        transition-all duration-300
        hover:scale-110
      "
    >
      <GiThunderBlade size={22} />
    </a>

    <a
      href="https://leetcode.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-12 h-12
        rounded-full
        border border-[#FFF6DE]
        flex items-center justify-center
        text-[#FFF6DE]
        hover:bg-[#FFF6DE]
        hover:text-black
        transition-all duration-300
        hover:scale-110
      "
    >
      <SiLeetcode size={20} />
    </a>

    <a
      href="https://linkedin.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-12 h-12
        rounded-full
        border border-[#FFF6DE]
        flex items-center justify-center
        text-[#FFF6DE]
        hover:bg-[#FFF6DE]
        hover:text-black
        transition-all duration-300
        hover:scale-110
      "
    >
      <LiaLinkedin size={22} />
    </a>
  </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex  justify-center lg:justify-end order-1 lg:order-2">

                    <div
                        ref={imageRef}
                        className="
              relative
    w-full
max-w-145
    aspect-square
    flex
    items-center
    justify-center

            "
                    >

                        {/* Rotating Border */}
                        <div className="absolute inset-0 animate-spin-slow rounded-full">

                            <span className="absolute inset-0 rounded-full border-[5px] sm:border-[6px] border-transparent border-t-[#FFF6DE]" />

                            <span className="absolute inset-4 rounded-full border-[5px] sm:border-[6px] border-transparent border-r-[#FFF6DE]" />

                            <span className="absolute inset-8 rounded-full border-[5px] sm:border-[6px] border-transparent border-b-[#FFF6DE]" />

                            <span className="absolute inset-12 rounded-full border-[5px] sm:border-[6px] border-transparent border-l-[#FFF6DE]" />
                        </div>

                        {/* Image */}
                        <div
                            className="
                w-[80%]
                h-[80%]
                sm:w-60
                sm:h-60
                md:w-85
              md:h-85
            lg:w-105
                lg:h-105
            xl:w-120
                xl:h-120
                overflow-hidden
                rounded-full
                border-4
                border-[#FFF6DE]
                shadow-[0_0_40px_rgba(255,246,222,0.2)]
              "
                        >
                            <img
                                src={photo}
                                alt="profile"
                                className="w-full h-full object-cover hover:scale-105 duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}