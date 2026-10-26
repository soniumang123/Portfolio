import React, { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const section = document.querySelectorAll("section[id] , div[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 },
    );
    section.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className=" absolute md:fixed top-0 left-0 z-50 w-full h-13 bg-[#1C1C1C] border-b border-[#333333] text-white flex items-center justify-around">
      <div className="text-white text-xl flex  justify-center items-center font-semibold tracking-tight ">
        Umang Soni
      </div>
      <div className="hidden text-white text-md md:flex items-center font-semibold gap-7.5 ">
        <a
          href="#home"
          className={`px-3 py-2 rounded-lg transition-colors ${
            activeSection === "home"
              ? "text-cyan-400 bg-cyan-400/10"
              : "text-white hover:text-cyan-400"
          }`}
        >
          Home
        </a>
        <a
          href="#about"
          className={`px-3 py-2 rounded-lg transition-colors ${
            activeSection === "about"
              ? "text-cyan-400 bg-cyan-400/10"
              : "text-white hover:text-cyan-400"
          }`}
        >
          About
        </a>
        <a
          href="#skills"
          className={`px-3 py-2 rounded-lg transition-colors ${
            activeSection === "skills"
              ? "text-cyan-400 bg-cyan-400/10"
              : "text-white hover:text-cyan-400"
          }`}
        >
          Skills
        </a>
        <a
          href="#project"
          className={`px-3 py-2 rounded-lg transition-colors ${
            activeSection === "project"
              ? "text-cyan-400 bg-cyan-400/10"
              : "text-white hover:text-cyan-400"
          }`}
        >
          Project
        </a>
        <a
          href="#contact"
          className={`px-3 py-2 rounded-lg transition-colors ${
            activeSection === "contact"
              ? "text-cyan-400 bg-cyan-400/10"
              : "text-white hover:text-cyan-400"
          }`}
        >
          Contact
        </a>
      </div>
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="md:hidden text-white text-3xl"
      >
        {openMenu ? <HiX /> : <HiMenu />}
      </button>

      {openMenu && (
        <div
          className="absolute top-full right-0 w-56
                bg-[#1C1C1C] border border-[#333333]
                rounded-bl-xl shadow-lg
                flex flex-col gap-4 p-5 md:hidden"
        >
          <a
            href="#home"
            onClick={() => setOpenMenu(false)}
            className="hover:text-blue-500"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setOpenMenu(false)}
            className="hover:text-blue-500"
          >
            About
          </a>
          <a
            href="#project"
            onClick={() => setOpenMenu(false)}
            className="hover:text-blue-500"
          >
            Project
          </a>
          <a
            href="#skills"
            onClick={() => setOpenMenu(false)}
            className="hover:text-blue-500"
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={() => setOpenMenu(false)}
            className="hover:text-blue-500"
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
