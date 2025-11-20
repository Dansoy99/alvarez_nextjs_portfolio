"use client";

import Link from "next/link";
import Image from "next/image";
import Fade from "./fade";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fade
      className="
        fixed top-0 left-0 right-0 z-50
        bg-stone-900/95 backdrop-blur-md
        flex items-center justify-between
        px-5 py-4 md:px-10 md:py-6
        w-full max-w-[1200px] mx-auto
        rounded-none lg:rounded-xl
        text-white text-lg md:text-2xl
      "
    >
      <a
        href="#very-top"
        className="cursor-pointer font-bold tracking-wide hover:text-cyan-300 transition"
      >
        Nathaniel Alvarez
      </a>

      <nav className="hidden md:flex gap-8 text-xl">
        <a href="#introduction-section" className="hover:text-cyan-300 transition">About me</a>
        <a href="#education-section" className="hover:text-cyan-300 transition">Education</a>
        <a href="#languages-section" className="hover:text-cyan-300 transition">Languages</a>
        <a href="#contact-section" className="hover:text-cyan-300 transition">Contact</a>
      </nav>

      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {isOpen && (
        <div
          className="
            absolute top-full left-0 right-0
            bg-stone-900/95 backdrop-blur-md
            flex flex-col text-center
            py-4 gap-4 md:hidden
          "
        >
          <a onClick={() => setIsOpen(false)} href="#introduction-section" className="hover:text-cyan-300 transition">About me</a>
          <a onClick={() => setIsOpen(false)} href="#education-section" className="hover:text-cyan-300 transition">Education</a>
          <a onClick={() => setIsOpen(false)} href="#languages-section" className="hover:text-cyan-300 transition">Languages</a>
          <a onClick={() => setIsOpen(false)} href="#contact-section" className="hover:text-cyan-300 transition">Contact</a>
        </div>
      )}
    </Fade>
  );
};

export default Header;
