import Link from "next/link"
import Image from "next/image";
import Fade from "./fade";

const Header = () => {
  return (
    <div id="top">
      {/* NAV BAR */}
      <Fade className="
        fixed top-0 left-0 right-0 z-50 
        bg-stone-900 
        flex p-4 md:p-6 
        justify-between items-center 
        w-full md:w-4/5 mx-auto 
        rounded-none md:rounded-xl 
        text-lg md:text-2xl
      ">
        <a href="#top" className="cursor-pointer font-bold">
          Nathaniel Alvarez
        </a>

        <div className="hidden md:flex flex-row gap-6">
          <a href="#introduction-section" className="cursor-pointer">About me</a>
          <a href="#education-section" className="cursor-pointer">Education</a>
          <a href="#languages-section" className="cursor-pointer">Languages</a>
          <a href="#contact-section" className="cursor-pointer">Contact</a>
        </div>
      </Fade>

      {/* HERO SECTION */}
      <Fade className="
        w-full md:w-4/5 
        bg-stone-900 flex flex-col items-center 
        mx-auto rounded-xl 
        p-6 md:p-10 
        mt-36 md:mt-40
      ">
        <Image 
          src="/profile.jpg"
          width={300}
          height={300}
          className="rounded-full w-[180px] h-[180px] md:w-[300px] md:h-[300px]"
          alt="profile"
        />

        <h2 className="text-white text-4xl md:text-6xl font-bold pt-5">
          Nathaniel Alvarez
        </h2>

        <p className="max-w-[500px] text-white text-center pb-8 text-lg md:text-2xl">
          Software Developer
        </p>

        <nav className="flex justify-center pb-5 gap-7">
          <Link href="https://www.facebook.com/nathaniel.alvarez.9809">
            <img src="/fb_logo.png" width={40} className="filter grayscale hover:grayscale-0 transition duration-500" />
          </Link>
          <Link href="https://www.instagram.com/usernathfound___/">
            <img src="/instagram-logo-colored.jpg" width={40} className="rounded-full filter grayscale hover:grayscale-0 transition duration-500" />
          </Link>
        </nav>

        <button className="
          bg-transparent border-2 border-white 
          p-2 md:p-3 rounded-md 
          text-xl md:text-3xl 
          mb-5 opacity-80 
          hover:opacity-100 hover:bg-gray-700 
          transition duration-500 
          self-end mr-5
        ">
          Contact me
        </button>
      </Fade>
    </div>
  )
}

export default Header;
