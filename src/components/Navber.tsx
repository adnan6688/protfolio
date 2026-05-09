// components/Navbar.tsx

import { useState } from "react";
import { Download, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className="
          fixed top-0 left-0 w-full z-[100]
          px-6 md:px-10 py-5
          flex justify-between items-center
          mix-blend-difference
        "
      >
        {/* Logo */}
        <div
          className="
            text-[#FFF6DE]
            font-bold
            text-2xl
            tracking-[4px]
            cursor-pointer
          "
        >
          ADNAN
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul
            className="
              flex gap-10
              text-[#FFF6DE]
              text-sm
              uppercase
              tracking-[3px]
            "
          >
            {navItems.map((item) => (
              <li
                key={item}
                className="
                  relative
                  cursor-pointer
                  pb-2
                  after:absolute
                  after:left-0
                  after:bottom-0
                  after:h-[1px]
                  after:w-0
                  after:bg-[#FFF6DE]
                  after:transition-all
                  after:duration-500
                  hover:after:w-full
                "
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Download Button */}
          <button
            className="
              border border-[#FFF6DE]/30
              text-[#FFF6DE]
              px-5 py-2
              rounded-full
              flex items-center gap-2
              hover:bg-[#FFF6DE]
              hover:text-black
              transition-all duration-500
            "
          >
            <Download size={16} strokeWidth={1.5} />
            Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="
            md:hidden
            text-[#FFF6DE]
          "
        >
          <Menu size={30} strokeWidth={1.5} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          fixed inset-0 z-[200]
          bg-black
          flex flex-col
          transition-all duration-700 ease-in-out
          ${
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }
        `}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="
            absolute top-6 right-6
            text-[#FFF6DE]
          "
        >
          <X size={34} strokeWidth={1.2} />
        </button>

        {/* Mobile Items */}
        <div
          className="
            flex flex-col
            justify-center
            items-center
            h-full
            gap-7
          "
        >
          {navItems.map((item, index) => (
            <div
              key={item}
              className={`
                overflow-hidden
                transition-all duration-700
                ${
                  open
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }
              `}
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
            >
              <h1
                className="
                  relative
                  text-[#FFF6DE]
                  text-[52px]
                  sm:text-[72px]
                  font-light
                  uppercase
                  tracking-tight
                  cursor-pointer
                  pb-2
                  after:absolute
                  after:left-0
                  after:bottom-0
                  after:h-[1px]
                  after:w-0
                  after:bg-[#FFF6DE]
                  after:transition-all
                  after:duration-500
                  hover:after:w-full
                "
              >
                {item}
              </h1>
            </div>
          ))}

          {/* Mobile Resume Button */}
          <button
            className="
              mt-6
              border border-[#FFF6DE]/30
              text-[#FFF6DE]
              px-6 py-3
              rounded-full
              flex items-center gap-3
              hover:bg-[#FFF6DE]
              hover:text-black
              transition-all duration-500
            "
          >
            <Download size={18} strokeWidth={1.5} />
            Download Resume
          </button>
        </div>
      </div>
    </>
  );
};