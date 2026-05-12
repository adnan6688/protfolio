/* eslint-disable no-useless-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const projects = Array.from({ length: 12 }).map((_, i) => ({
  title: `Project ${i + 1}`,
  desc:
    "Modern full stack application with clean UI and scalable backend architecture.",
  img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  tech: ["React", "Node", "MongoDB"],
}));

export default function Projects() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [index, setIndex] = useState(0);

  const move = (dir: "left" | "right") => {
    const isMobile = window.innerWidth < 768;

    const maxIndex = isMobile
      ? projects.length - 1
      : projects.length - 3;

    let newIndex = index;

    if (dir === "right") {
      newIndex = Math.min(index + 1, maxIndex);
    } else {
      newIndex = Math.max(index - 1, 0);
    }

    setIndex(newIndex);

    gsap.to(trackRef.current, {
      x: isMobile
        ? `-${newIndex * 96}vw`
        : `-${newIndex * 33.33}vw`,
      duration: 0.9,
      ease: "power3.inOut",
    });
  };

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const cards = gsap.utils.toArray(".card");

    cards.forEach((card: any, i: number) => {
      const center = isMobile
        ? i === index
        : i === index + 1;

      gsap.to(card, {
        scale: center ? 1 : 0.85,
        opacity: center ? 1 : 0.4,
        zIndex: center ? 10 : 1,
        duration: 0.6,
      });
    });
  }, [index]);

  return (
    <section
      className="
        min-h-screen
        bg-[#FFF6DE]
        relative
        overflow-hidden
        flex
        items-center
        py-20
        
                 md:px-10
                lg:px-20
      "
    >
      {/* TITLE */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center z-20 px-4">
        <h1 className="text-black text-4xl md:text-7xl font-light">
          Projects
        </h1>

        <p
          className="
            text-black/60
            mt-3
            text-sm
            md:text-xl
            max-w-xl
          "
        >
          12+ real world applications built with modern
          full stack technologies
        </p>
      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={() => move("left")}
        className="
          absolute
          left-2
          md:left-10
          top-1/2
          -translate-y-1/2
          z-30
        "
      >
        <div
          className="
            w-12
            h-12
            md:w-16
            md:h-16
            rounded-full
            border
            border-black/10
            bg-white/50
            backdrop-blur-md
            flex
            items-center
            justify-center
            transition-all
            duration-300
            hover:scale-110
            hover:bg-black
            group
          "
        >
          <FiChevronLeft
            size={28}
            className="
              text-black
              group-hover:text-white
              transition-all
            "
          />
        </div>
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={() => move("right")}
        className="
          absolute
          right-2
          md:right-10
          top-1/2
          -translate-y-1/2
          z-30
        "
      >
        <div
          className="
            w-12
            h-12
            md:w-16
            md:h-16
            rounded-full
            border
            border-black/10
            bg-white/50
            backdrop-blur-md
            flex
            items-center
            justify-center
            transition-all
            duration-300
            hover:scale-110
            hover:bg-black
            group
          "
        >
          <FiChevronRight
            size={28}
            className="
              text-black
              group-hover:text-white
              transition-all
            "
          />
        </div>
      </button>

      {/* SLIDER */}
      <div className="overflow-hidden w-full">
        <div
          ref={trackRef}
          className="
            flex
            gap-6
            md:gap-10
            px-[5vw]
            md:px-[10vw]
            items-center
          "
        >
          {projects.map((p, i) => (
            <div
              key={i}
              className="
                group
                relative
                card

                w-[90vw]
                md:w-[30vw]

                min-w-[90vw]
                md:min-w-[30vw]

                overflow-hidden
                bg-black/5
                border
                border-black/10
                rounded-3xl
                p-5
                md:p-6
                backdrop-blur-sm
                transition-all
                duration-500
              "
            >
              {/* IMAGE */}
              <div className="rounded-2xl overflow-hidden mb-5">
                <img
                  src={p.img}
                  alt={p.title}
                  className="
                    h-52
                    md:h-55
                    w-full
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                />
              </div>

              {/* TEXT */}
              <h2
                className="
                  text-2xl
                  md:text-3xl
                  font-light
                  text-black
                "
              >
                {p.title}
              </h2>

              <p
                className="
                  text-black/60
                  mt-2
                  font-light
                  text-sm
                  md:text-base
                "
              >
                {p.desc}
              </p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t, i) => (
                  <span
                    key={i}
                    className="
                      text-xs
                      px-3
                      py-1
                      border
                      border-black/10
                      rounded-full
                      text-black/60
                      bg-white/40
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  bg-black/50
                  backdrop-blur-[3px]
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:opacity-100
                "
              >
                {/* BUTTONS */}
                <div className="flex flex-col gap-4">
                  {[
                    "Live Project",
                    "Github Code",
                    "View Details",
                  ].map((btn, idx) => (
                    <button
                      key={btn}
                      className="
                        px-8
                        py-3
                        rounded-full
                        bg-black
                        text-[#FFF6DE]
                        font-medium
                        tracking-wide
                        shadow-2xl
                        transition-all
                        duration-500
                        opacity-0
                        scale-75
                        rotate-6
                        group-hover:opacity-100
                        group-hover:scale-100
                        group-hover:rotate-0
                        hover:scale-105
                      "
                      style={{
                        transitionDelay: `${idx * 140}ms`,
                      }}
                    >
                      {btn}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}