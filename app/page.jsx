"use client";
import Fade from "@/app/component/fade";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center mt-10">

      {/* Invisible anchor for spacing */}
      <div id="very-top" className="pt-24 md:pt-28"></div>

      {/* PROFILE CARD */}
      <Fade
        className="
          w-full lg:w-4/5 bg-stone-900 text-white
          flex flex-col items-center
          rounded-xl px-6 py-10 md:px-10 md:py-14
        "
      >
        <Image
          src="/profile.jpg"
          width={300}
          height={300}
          alt="Profile"
          className="
            rounded-full shadow-xl 
            w-40 h-40 md:w-64 md:h-64
            object-cover
          "
        />

        <h2 className="text-4xl md:text-6xl font-bold pt-6 tracking-wide">
          Nathaniel Alvarez
        </h2>

        <p className="text-lg md:text-2xl opacity-80 text-center mt-2">
          Software Developer
        </p>

        <nav className="flex gap-6 mt-6 md:mt-8">
          <Link href="https://www.facebook.com/nathaniel.alvarez.9809">
            <img
              src="/fb_logo.png"
              className="w-10 md:w-12 filter grayscale hover:grayscale-0 transition duration-500"
            />
          </Link>

          <Link href="https://www.instagram.com/usernathfound___/">
            <img
              src="/instagram-logo-colored.jpg"
              className="w-10 md:w-12 rounded-full filter grayscale hover:grayscale-0 transition duration-500"
            />
          </Link>
        </nav>

        <a
          href="#contact-section"
          className="
            mt-10 bg-transparent border-2 border-white
            text-xl md:text-3xl px-6 py-2 md:px-8 md:py-3
            rounded-lg hover:bg-white hover:text-stone-900
            transition-all duration-300 font-medium
          "
        >
          Contact me
        </a>
      </Fade>

      {/* INTRODUCTION */}
      <Fade
        className="
          bg-stone-900 w-full md:w-4/5 rounded-2xl text-white
          p-6 md:p-10 mt-10 text-center
        "
      >
        <div id="introduction-section" className="scroll-mt-40">
          <h1 className="pt-5 pb-5 text-3xl md:text-4xl font-bold break-all">
  INTRODUCTION
</h1>


          <p className="text-lg md:text-2xl leading-relaxed">
            Hello! My name is Nathaniel Alvarez, a dedicated and passionate software developer 
            with a strong foundation in computer science. I am currently pursuing my degree at 
            Central Philippine University, where I have honed my skills in various programming 
            languages and development frameworks. My journey in software development has been 
            driven by a deep curiosity and a desire to create innovative solutions that can make 
            a positive impact. I thrive in collaborative environments and am always eager to 
            learn new technologies to enhance my craft.
          </p>
        </div>
      </Fade>

      {/* EDUCATION */}
      <Fade
        className="
          bg-stone-900 w-full md:w-4/5 rounded-xl text-white
          p-6 md:p-10 mt-10 text-center
        "
      >
        <div id="education-section" className="scroll-mt-40">
          <h1 className="text-3xl md:text-4xl font-bold">EDUCATION</h1>

          <div className="text-lg md:text-2xl mt-4 flex flex-col gap-3">
            <p>Primary - Central Panay College of Science and Technology</p>
            <p>Secondary - Central Panay College (JHS)</p>
            <p>Secondary - Garcia College (SHS)</p>
            <p>Tertiary - Central Philippine University (CPU)</p>
          </div>
        </div>
      </Fade>

      {/* LANGUAGES */}
      <Fade
        className="
          bg-stone-900 w-full md:w-4/5 rounded-xl text-white 
          p-6 md:p-10 mt-10
        "
      >
        <div id="languages-section" className="scroll-mt-40 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">LANGUAGES</h1>

          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {[
              { src: "/html_logo.png", alt: "HTML" },
              { src: "/css_logo.png", alt: "CSS" },
              { src: "/js_logo.png", alt: "JS" },
              { src: "/nextjs_logo.svg", alt: "Next.js" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-3 rounded-lg w-28 md:w-32 flex justify-center"
              >
                <img src={item.src} alt={item.alt} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      </Fade>

      {/* CONTACT */}
      <Fade
        className="
          bg-stone-900 w-full md:w-4/5 rounded-2xl text-white
          mt-10 mb-10 p-6 md:p-10
        "
      >
        <div id="contact-section" className="scroll-mt-40">
          <h1 className="pb-5 text-3xl md:text-4xl font-bold text-center">CONTACT</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Lets work together!</h2>

              <p className="mt-6 text-lg md:text-2xl leading-relaxed">
                I am always open to discussing new projects, creative ideas, or opportunities.
                Feel free to reach out!
              </p>

              <div
  className="
    group flex items-center mt-10 gap-4 
    w-full sm:w-auto border-2 border-white 
    p-4 rounded-md 
    hover:border-cyan-300 
    transition duration-500
  "
>
  <AiOutlineMail
    size={40}
    className="text-white group-hover:text-cyan-300 transition duration-500 shrink-0"
  />

  <div
    className="
      flex flex-col group-hover:text-cyan-300 
      transition duration-500 
      break-words
    "
  >
    <p className="font-bold">Email</p>
    <p className="text-sm md:text-base break-all">
  alvareznathaniel2003@gmail.com
</p>

  </div>
</div>

            </div>

            {/* RIGHT */}
            <div className="flex justify-center">
              <img
                src="/contactProfile.jpg"
                className="
                  rounded-xl w-full max-w-[250px] md:max-w-[200px]
                  h-auto object-cover
                "
              />
            </div>

          </div>
        </div>
      </Fade>

    </div>
  );
};

export default Home;
