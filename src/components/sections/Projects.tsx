/* eslint-disable no-useless-assignment */
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const projects = Array.from({ length: 12 }).map((_, i) => ({
  title: `Project ${i + 1}`,
  desc: "Modern full stack application with clean UI and scalable backend architecture.",
  img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  tech: ["React", "Node", "MongoDB"],
}));

export default function Projects() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const maxIndex = projects.length - 3;

  const move = (dir: "left" | "right") => {
    let newIndex = index;

    if (dir === "right") {
      newIndex = Math.min(index + 1, maxIndex);
    } else {
      newIndex = Math.max(index - 1, 0);
    }

    setIndex(newIndex);

    gsap.to(trackRef.current, {
      x: `-${newIndex * 33.33}vw`,
      duration: 0.9,
      ease: "power3.inOut",
    });
  };

  useEffect(() => {
    const cards = gsap.utils.toArray(".card");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cards.forEach((card: any, i: number) => {
      const center = i === index + 1;

      gsap.to(card, {
        scale: center ? 1 : 0.85,
        opacity: center ? 1 : 0.4,
        zIndex: center ? 10 : 1,
        duration: 0.6,
      });
    });
  }, [index]);

  return (
    <section className="h-screen bg-[#FFF6DE] relative overflow-hidden flex items-center">

      {/* CENTER TITLE */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center z-20">
        <h1 className="text-black text-5xl md:text-7xl font-light">
          Projects
        </h1>
        <p className="text-black/60 mt-3 text-lg md:text-xl max-w-xl">
          12+ real world applications built with modern full stack technologies
        </p>
      </div>

      {/* ARROWS */}
      <button
        onClick={() => move("left")}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-30"
      >
        <FiChevronLeft size={45} className="text-black/60 hover:text-black" />
      </button>

      <button
        onClick={() => move("right")}
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-30"
      >
        <FiChevronRight size={45} className="text-black/60 hover:text-black" />
      </button>

      {/* TRACK */}
      <div
        ref={trackRef}
        className="flex w-[400vw] gap-10 px-[10vw] items-center"
      >
        {projects.map((p, i) => (
          <div
            key={i}
            className="
              card
              w-[30vw]
             min-w-75
              bg-black/5
              border
              border-black/10
              rounded-3xl
              p-6
              backdrop-blur-sm
              transition-all
            "
          >
            {/* IMAGE */}
            <div className="rounded-2xl overflow-hidden mb-5">
              <img
                src={p.img}
                className="h-55 w-full object-cover"
              />
            </div>

            {/* TEXT */}
            <h2 className="text-2xl font-light text-black">
              {p.title}
            </h2>

            <p className="text-black/60 mt-2 font-light">
              {p.desc}
            </p>

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
                  "
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}