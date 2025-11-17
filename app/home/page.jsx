"use client";
import Fade from "../component/fade";
import { AiOutlineMail } from "react-icons/ai";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center mt-10">

      {/* INTRODUCTION */}
      <Fade className="
        bg-stone-900 w-full md:w-4/5 
        flex flex-col items-center justify-center 
        rounded-2xl text-white 
        p-6 md:p-10 mt-10 text-2xl md:text-4xl
      ">
        <div id="introduction-section">
          <h1 className="pt-5 pb-5 text-3xl md:text-4xl font-bold">INTRODUCTION</h1>
          <p className="text-lg md:text-2xl leading-relaxed px-5">
            Hello! My name is Nathaniel Alvarez, a dedicated and passionate software developer with a strong foundation in computer science. I am currently pursuing my degree at Central Philippine University, where I have honed my skills in various programming languages and development frameworks. My journey in software development has been driven by a deep curiosity and a desire to create innovative solutions that can make a positive impact. I thrive in collaborative environments and am always eager to learn new technologies and methodologies to enhance my craft. With a keen eye for detail and a commitment to excellence, I am excited to contribute my skills and enthusiasm to dynamic projects and teams in the tech industry.
          </p>
        </div>
      </Fade>

      {/* EDUCATION */}
      <Fade className="
        bg-stone-900 flex flex-col 
        items-center w-full md:w-4/5
        mx-auto mt-10 rounded-xl 
        p-6 md:p-10
      ">
        <div id="education-section">
          <h1 className="text-3xl md:text-4xl font-bold">EDUCATION</h1>

          <div className="text-white text-lg md:text-2xl mt-4 flex flex-col gap-3">
            <p>Primary - Central Panay College of Science and Technology</p>
            <p>Secondary - Central Panay College (Junior Highschool)</p>
            <p>Secondary - Garcia College (Senior Highschool)</p>
            <p>Tertiary - Central Philippine University (CPU)</p>
          </div>
        </div>
      </Fade>

      {/* LANGUAGES */}
      <Fade className="
        bg-stone-900 w-full md:w-4/5 
        flex flex-col items-center 
        mx-auto mt-10 rounded-xl 
        p-6 md:p-10
      ">
        <div id="languages-section">
          <h1 className="text-3xl md:text-4xl font-bold">LANGUAGES</h1>

          <div className="flex flex-wrap justify-center items-center gap-6 mt-5">
            <div className="bg-white p-3 rounded-lg w-[130px] flex justify-center">
              <img src="/html_logo.png" width={120} alt="HTML" />
            </div>
            <div className="bg-white p-3 rounded-lg w-[130px] flex justify-center">
              <img src="/css_logo.png" width={120} alt="CSS" />
            </div>
            <div className="bg-white p-3 rounded-lg w-[130px] flex justify-center">
              <img src="/js_logo.png" width={120} alt="JS" />
            </div>
            <div className="bg-white p-3 rounded-lg w-[130px] flex justify-center">
              <img src="/nextjs_logo.svg" width={120} alt="Next.js" />
            </div>
          </div>
        </div>
      </Fade>

      {/* CONTACT */}
      <Fade className="
        bg-stone-900 w-full md:w-4/5 
        flex flex-col items-center 
        rounded-2xl text-white 
        mt-10 mb-10 p-6 md:p-10
      ">
        <div id="contact-section">
          <h1 className="pb-5 text-3xl md:text-4xl font-bold">CONTACT</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* LEFT */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Lets work together!</h2>
              <p className="mt-6 text-lg md:text-2xl">
                I am always open to discussing new projects, creative ideas, or opportunities
                to be part of your visions. Feel free to reach out to discuss your project!.
              </p>

              <div className="
                group flex items-center mt-10 gap-4 
                w-fit border-2 border-white 
                p-4 rounded-md 
                hover:border-cyan-300 
                transition duration-500
              ">
                <AiOutlineMail 
                  size={50} 
                  className="text-white group-hover:text-cyan-300 transition duration-500"
                />
                <div className="flex flex-col group-hover:text-cyan-300 transition duration-500">
                  <p className="font-bold">Email</p>
                  <p>alvareznathaniel2003@gmail.com</p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex justify-center">
              <img 
                src="/contactProfile.jpg" 
                className="
                  rounded-xl 
                  h-[300px] w-[300px] 
                  md:h-[200px] md:w-[200px] 
                  object-cover
                "
              />
            </div>
          </div>
        </div>
      </Fade>

    </div>
  );
}

export default HomePage;
