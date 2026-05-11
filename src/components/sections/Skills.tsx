import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
    SiJavascript,
    SiTypescript,
    SiNodedotjs,
    SiExpress,
    SiReact,
    SiTailwindcss,
    SiMongodb,
    SiPostgresql,
    SiFirebase,
    SiStripe,
    SiGithub,
    SiGit,
    SiPython,
    SiLeetcode,
    SiHtml5,
    SiCss,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const skills = [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "React", icon: SiReact },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Firebase", icon: SiFirebase },
    { name: "Stripe", icon: SiStripe },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss },
    { name: "Python", icon: SiPython },
    { name: "LeetCode", icon: SiLeetcode },
];

export default function Skills() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".fade-up-skill",
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.08,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    },
                }
            );

            gsap.fromTo(
                ".skill-card",
                { y: 60, opacity: 0, scale: 0.95 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    stagger: 0.05,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".skills-grid",
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
                w-full
                bg-gradient-to-b from-black via-[#050505] to-black
                px-6 md:px-10 lg:px-20
                py-24
                overflow-hidden
            "
        >
            <div className="max-w-[1700px] mx-auto">

                {/* HEADER */}
                <div className="space-y-7 mb-20">
                    <p className="fade-up-skill uppercase tracking-[0.25em] text-[#FFF6DE]/40 text-xs md:text-sm font-light">
                        Skills & Experience
                    </p>

                    <h1 className="fade-up-skill text-[#FFF6DE] text-5xl md:text-7xl font-light leading-[1.05] max-w-5xl">
                        Tools that power
                        <br />
                        my digital craft
                    </h1>

                    <p className="fade-up-skill text-[#FFF6DE]/55 text-base md:text-lg leading-relaxed max-w-2xl font-light">
                        Comfortable building modern full stack applications,
                        APIs, authentication systems, and scalable user experiences
                        with clean architecture.
                    </p>
                </div>

                {/* GRID */}
                <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">

                    {skills.map((skill, index) => {
                        const Icon = skill.icon;

                        return (
                            <div
                                key={index}
                                className="
                                    skill-card
                                    group
                                    relative
                                    rounded-[30px]
                                    p-6 md:p-7
                                    h-[160px]
                                    flex flex-col justify-between
                                    overflow-hidden

                                    bg-white/[0.04]
                                    border border-white/10
                                    backdrop-blur-xl

                                    transition-all duration-500 ease-out

                                    hover:-translate-y-2
                                    hover:rotate-[1deg]
                                    hover:bg-white/[0.06]
                                    hover:border-white/20
                                "
                            >
                                {/* glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                                    <div className="absolute -top-10 -right-10 w-[140px] h-[140px] bg-white/10 blur-3xl rounded-full" />
                                </div>

                                {/* icon */}
                                <div className="relative z-10">
                                    <Icon className="text-4xl md:text-5xl text-[#FFF6DE]/90 group-hover:scale-110 transition" />
                                </div>

                                {/* name */}
                                <p className="relative z-10 text-[#FFF6DE]/70 text-lg font-light group-hover:text-[#FFF6DE] transition">
                                    {skill.name}
                                </p>

                                {/* bottom line */}
                                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-white/20 transition-all duration-500" />
                            </div>
                        );
                    })}
                </div>

                {/* EXTRA INFO */}
                <div className="fade-up-skill mt-24 flex flex-col md:flex-row gap-10 md:gap-24">

                    <div>
                        <h2 className="text-5xl md:text-6xl text-[#FFF6DE] font-light">
                            115+
                        </h2>
                        <p className="text-[#FFF6DE]/45 mt-3 text-base md:text-lg font-light">
                            LeetCode problems solved with strong DSA foundation.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-5xl md:text-6xl text-[#FFF6DE] font-light">
                            Full Stack
                        </h2>
                        <p className="text-[#FFF6DE]/45 mt-3 text-base md:text-lg font-light max-w-xl">
                            Experience in APIs, auth systems, database design,
                            payments and scalable backend architecture.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}