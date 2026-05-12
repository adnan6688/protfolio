import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiGithub,
    FiLinkedin,
    FiSend,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title Animation
            gsap.from(".title-anim", {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            // Left Cards Animation
            gsap.from(".left-anim", {
                x: -50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".contact-wrapper",
                    start: "top 80%",
                },
            });

            // Right Form Animation
            gsap.from(".right-anim", {
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".right-anim",
                    start: "top 80%",
                },
            });
        }, sectionRef);

        // Layout রিসেট করার জন্য
        ScrollTrigger.refresh();

        return () => ctx.revert();
    }, []);



    return (
        <section
            ref={sectionRef}
            className="
        min-h-screen
        bg-black
        text-[#FFF6DE]
        py-12         
        md:py-20
         px-6
            md:px-10
                lg:px-20
        flex
        items-center  
        overflow-hidden
      "
        >
            <div className=" w-full">
                {/* TOP SECTION */}
                <div className="mb-10 md:mb-16">
                    <h1
                        className="
              title-anim
              text-[3rem]
              sm:text-[4.5rem]
              md:text-[7rem]
              leading-none
              font-light
              tracking-[-2px]
              md:tracking-[-4px]
            "
                    >
                        LET’S
                        <br />
                        CONNECT
                    </h1>

                    <p
                        className="
              title-anim
              mt-4
              max-w-xl
              text-white/60
              text-sm
              md:text-lg
              leading-relaxed
            "
                    >
                        Have a project idea or just want to say hi? I love building modern
                        digital experiences with smooth interactions.
                    </p>
                </div>

                {/* MAIN GRID */}
                <div
                    className="
            contact-wrapper
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-8            /* গ্যাপ কমিয়েছি */
            xl:gap-16
            items-center
          "
                >
                    {/* LEFT SIDE (INFO CARDS) */}
                    <div className="space-y-4 w-full">
                        {[
                            {
                                icon: <FiMail size={20} />,
                                title: "Email",
                                value: "adnan@example.com",
                            },
                            {
                                icon: <FiPhone size={20} />,
                                title: "Phone",
                                value: "+880 1234 567890",
                            },
                            {
                                icon: <FiMapPin size={20} />,
                                title: "Location",
                                value: "Dhaka, Bangladesh",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="
                  left-anim
                  group
                  bg-white/3
                  border
                  border-white/10
                  rounded-3xl
                  p-4
                  md:p-5
                  transition-all
                  duration-500
                  hover:bg-white
                  hover:text-black
                "
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className="
                      min-w-10
                      w-10
                      h-10
                      rounded-xl
                      bg-white
                      text-black
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-500
                      group-hover:bg-black
                      group-hover:text-white
                    "
                                    >
                                        {item.icon}
                                    </div>

                                    <div className="overflow-hidden">
                                        <p className="text-xs text-white/50 group-hover:text-black/60 transition-all">
                                            {item.title}
                                        </p>
                                        <h2 className="text-lg md:text-xl font-light wrap-break-word">
                                            {item.value}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* SOCIALS */}
                        <div className="left-anim flex gap-3 pt-2">
                            {[FiGithub, FiLinkedin].map((Icon, i) => (
                                <button
                                    key={i}
                                    className="
                    w-12
                    h-12
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-500
                    hover:bg-white
                    hover:text-black
                    hover:scale-110
                  "
                                >
                                    <Icon size={20} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE (FORM) */}
                    <div
                        className="
              right-anim
              relative
              w-full
           bg-white/4
              border
              border-white/10
              rounded-4xl
              p-6
              md:p-8
              overflow-hidden
            "
                    >
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-4xl font-light">Send Message</h2>

                            <form className="mt-6 space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="
                    w-full
                    h-12
                    md:h-14
                    rounded-xl
                    bg-black
                    border
                    border-white/10
                    px-4
                    outline-none
                    text-white
                    placeholder:text-white/30
                    focus:border-white/40
                    transition-all
                  "
                                />

                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="
                    w-full
                    h-12
                    md:h-14
                    rounded-xl
                    bg-black
                    border
                    border-white/10
                    px-4
                    outline-none
                    text-white
                    placeholder:text-white/30
                    focus:border-white/40
                    transition-all
                  "
                                />

                                <textarea
                                    rows={4} /* Rows কমিয়েছি যেন ফর্মটি ছোট হয় */
                                    placeholder="Write your message..."
                                    className="
                    w-full
                    rounded-xl
                    bg-black
                    border
                    border-white/10
                    px-4
                    py-4
                    outline-none
                    text-white
                    placeholder:text-white/30
                    resize-none
                    focus:border-white/40
                    transition-all
                  "
                                />

                                <button
                                    type="submit"
                                    className="
                    group
                    w-full
                    h-12
                    md:h-14
                    rounded-xl
                    bg-[#FFF6DE]
                    text-black
                    font-medium
                    flex
                    items-center
                    justify-center
                    gap-2
                    transition-all
                    duration-500
                    hover:bg-gray-200
                  "
                                >
                                    Send Message
                                    <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}