import Link from "next/link"
import Image from "next/image";
import Fade from "./fade";

const header = () => {
    return<div id="top">
        <Fade className="fixed top-0 left-0 right-0 z-50 bg-stone-900 flex p-10 justify-between items-center w-4/5 mx-auto rounded-xl text-2xl">
    
            <div className="flex justify-between w-full">
                <a href="#top" className="cursor-pointer">Nathaniel Alvarez</a>

                <div className="flex flex-row gap-[10px]">
                    <a href="#introduction-section" className="cursor-pointer">About me</a>
                    <a href="#education-section" className="cursor-pointer">Education</a>
                    <a href="#languages-section" className="cursor-pointer">Languages</a>
                    <a href="#contact-section" className="cursor-pointer">Contact</a>
                </div>
            </div>
        </Fade>

        <Fade className="w-4/5 bg-stone-900 flex items-center justify-center flex-col mx-auto rounded-xl pt-10 mt-40">
            <Image 
            src ="/profile.jpg"
            width={500}
            height={500}
            className="rounded-full"
            
            alt="profile"
            />
            <h2 className="text-white text-[60px] font-bold pt-[20px]">Nathaniel Alvarez</h2>
            <p className="max-w-[500px] w-full text-white text-center pb-10 text-3xl" >Software Developer</p>
            <nav className="flex justify-center pb-[30px] gap-[30px]">
              <Link href="https://www.facebook.com/nathaniel.alvarez.9809">
                <img src="/fb_logo.png" width={40} height={40} className="filter grayscale hover:grayscale-0 transition ease-in-out duration-500" alt="Facebook" />
              </Link>
              <Link href="https://www.instagram.com/usernathfound___/">
                <img src="/instagram-logo-colored.jpg" width={40} height={40} className="rounded-full filter grayscale hover:grayscale-0 transition ease-in-out duration-500" alt="Instagram" />
              </Link>
            </nav>
            <button className="bg-transparent border-2 border-white p-[10px] rounded-[5px] text-[30px] mb-[30px] hover:border-cyan-300 hover:text-cyan-300 transition-all ease-in-out duration-500 self-end mr-[30px]">Contact me</button>
        </Fade>

    </div>
}

export default header;