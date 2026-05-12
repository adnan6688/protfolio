import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import profile from "../../assets/boy.jpg"

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const imageWrapperRef = useRef<HTMLDivElement | null>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // TEXT ANIMATION
            gsap.fromTo(
                ".fade-up",
                {
                    y: 80,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    },
                }
            );

            // IMAGE REVEAL
            gsap.fromTo(
                overlayRef.current,
                {
                    y: "0%",
                },
                {
                    y: "-100%",
                    duration: 1.5,
                    ease: "power4.inOut",
                    scrollTrigger: {
                        trigger: imageWrapperRef.current,
                        start: "top 80%",
                    },
                }
            );

            // IMAGE SCALE
            gsap.fromTo(
                imageRef.current,
                {
                    scale: 1.2,
                    opacity: 0,
                },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: imageWrapperRef.current,
                        start: "top 80%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="
                min-h-screen
                bg-[#FFF6DE]
                overflow-hidden
                px-6
                md:px-10
                lg:px-20
                py-20
                flex
                items-center
            "
        >
            <div
                className="
                    w-full
                    grid
                    lg:grid-cols-2
                    gap-14
     
                    items-center
                "
            >
                {/* LEFT CONTENT */}
                <div className="space-y-7 order-2 lg:order-1">
                    <p
                        className="
            fade-up
            text-black/40
            uppercase
            tracking-[0.25em]
            text-xs
            md:text-sm
            font-light
        "
                    >
                        About Me
                    </p>

                    <h1
                        className="
            fade-up
            text-black/90
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            leading-[1.1]
            font-light
        "
                    >
                        Passion For
                        <br />
                        Development
                    </h1>

                    <p
                        className="
            fade-up
            text-black/60
            leading-relaxed
            text-base
            md:text-lg
            max-w-xl
            font-light
        "
                    >
                        I create modern, responsive and interactive web
                        applications with clean user experiences and smooth
                        performance across all devices.
                    </p>

                    <p
                        className="
            fade-up
            text-black/50
            leading-relaxed
            text-base
            md:text-lg
            max-w-xl
            font-light
        "
                    >
                        Previously worked at Betopia Group as a Full Stack
                        Developer where I collaborated on real-world projects,
                        backend systems and modern frontend interfaces.
                    </p>

                    <p
                        className="
            fade-up
            text-black/45
            leading-relaxed
            text-base
            md:text-lg
            max-w-xl
            font-light
        "
                    >
                        I enjoy working in teams, sharing ideas and building
                        scalable digital products through collaboration and
                        problem solving.
                    </p>

                    <p
                        className="
            fade-up
            text-black/35
            leading-relaxed
            text-sm
            md:text-base
            max-w-lg
            font-light
        "
                    >
                        Diploma in Computer Science & Technology from
                        Feni Computer Institute.
                    </p>
                </div>

                {/* RIGHT IMAGE */}
                <div
                    ref={imageWrapperRef}
                    className="
                        relative
                        w-full
                        flex
                        justify-center
                        lg:justify-end
                        order-1 lg:order-2
                    "
                >
                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-[30px]
                            w-full
                            max-w-162.5
                            h-105
                           sm:h-130
                            md:h-162.5
                            lg:h-195
                            border
                            border-black/10
                            bg-black/5
                        "
                    >
                        {/* IMAGE */}
                        <img
                            ref={imageRef}
                            src={profile || 'https://c8.alamy.com/comp/R2B9AF/portrait-of-young-handsome-man-in-white-shirt-outdoor-nice-appearance-with-stylish-hair-and-beard-leaning-with-a-side-on-a-wall-R2B9AF.jpg'}
                            alt="profile"
                            className="
                                w-full
                                h-full
                                object-cover
                                opacity-0
                                scale-110
                            "
                        />

                        {/* BLACK OVERLAY */}
                        <div
                            ref={overlayRef}
                            className="
                                absolute
                                inset-0
                                bg-gray-900
                                z-10
                            "
                        />

                        {/* GRADIENT */}
                        <div
                            className="
                                absolute
                                bottom-0
                                left-0
                                w-full
                                h-[30%]
                                bg-linear-to-t
                                from-black/90
                                to-transparent
                                z-20
                            "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}