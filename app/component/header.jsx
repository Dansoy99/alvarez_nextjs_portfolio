import Link from "next/link";
import Image from "next/image";
import Fade from "./fade";

const Header = () => {
  return (
      <Fade
        className="
          fixed top-0 left-0 right-0 z-50
          bg-stone-900/95 backdrop-blur-md
          flex items-center justify-between
          px-5 py-4 md:px-10 md:py-6
          w-full lg:w-4/5 mx-auto
          rounded-none lg:rounded-xl
          text-white text-lg md:text-2xl
          transition-all
        "
      >
        {/* CLICK → SCROLL TO TRUE TOP */}
        <a
          href="#very-top"
          className="cursor-pointer font-bold tracking-wide hover:text-cyan-300 transition"
        >
          Nathaniel Alvarez
        </a>

        {/* DESKTOP LINKS */}
        <nav className="hidden md:flex gap-8 text-xl">
          <a href="#introduction-section" className="hover:text-cyan-300 transition">About me</a>
          <a href="#education-section" className="hover:text-cyan-300 transition">Education</a>
          <a href="#languages-section" className="hover:text-cyan-300 transition">Languages</a>
          <a href="#contact-section" className="hover:text-cyan-300 transition">Contact</a>
        </nav>
      </Fade>     
    
  );
};

export default Header;
