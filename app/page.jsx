import { AiOutlineMail } from "react-icons/ai";
import Fade from "@/app/component/fade";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-10">
      <Fade className="bg-stone-900 w-4/5 flex-col flex justify-center items-center rounded-2xl text-white text-4xl font-bold mt-10 p-10">
        <div id="introduction-section">
          <h1 className="pt-[20px] pb-[20px]">INTRODUCTION</h1>
          <p className="text-[30px] pl-[30px] pr-[30px] pb-[20px] leading-relaxed">
            Hello! My name is Nathaniel Alvarez, a dedicated and passionate software developer with a strong foundation in computer science. I am currently pursuing my degree at Central Philippine University, where I have honed my skills in various programming languages and development frameworks. My journey in software development has been driven by a deep curiosity and a desire to create innovative solutions that can make a positive impact. I thrive in collaborative environments and am always eager to learn new technologies and methodologies to enhance my craft. With a keen eye for detail and a commitment to excellence, I am excited to contribute my skills and enthusiasm to dynamic projects and teams in the tech industry.
          </p>
        </div>
      </Fade>

      <Fade
        className="bg-stone-900 flex justify-center items-center flex-col gap-9 w-4/5 mx-auto mt-10 rounded-xl p-10">
        <div id="education-section">
          <h1 className="text-[35px] font-bold">EDUCATION</h1>

          <div className="text-white text-[30px] gap-y-2 flex flex-col text-lg">
            <p>Primary - Central Panay College of Science and Technology</p>
            <p>Secondary - Central Panay College of Science and Technology (Junior Highschool)</p>
            <p>Secondary - Garcia College of Technology (Senior Highschool)</p>
            <p>Tertiary - Central Philippine University (CPU)</p>
          </div>
        </div>
      </Fade>

      <Fade className="bg-stone-900 w-4/5 flex justify-center items-center flex-col gap-9 mx-auto mt-10 rounded-xl p-10">
        <div id="languages-section">
          <h1 className="text-[35px] font-bold">LANGUAGES</h1>
          <div className="flex justify-center items-center gap-10">
            <div className="bg-white p-[10px] rounded-[10px] w-[170px] flex justify-center">
              <img src="/html_logo.png" width={145} height={100} alt="HTML Logo" />
            </div>
            <div className="bg-white p-[10px] rounded-[10px] w-[165px] flex justify-center">
              <img src="/css_logo.png" width={100} height={100} alt="CSS Logo" />
            </div>
            <div className="bg-white p-[10px] rounded-[10px] flex justify-center ">
              <img src="/js_logo.png" width={135} height={100} alt="JavaScript Logo" />
            </div>
            <div className="bg-white p-[10px] rounded-[10px]">
              <img src="/nextjs_logo.svg" width={135} height={100} alt="Next.js Logo" />
            </div>
          </div>
        </div>

      </Fade>

      <Fade className="bg-stone-900 w-4/5 flex-col flex justify-center items-center rounded-2xl text-white text-4xl font-bold mt-10 mb-10 p-10">
        <div id="contact-section">
          <h1 className="pb-10">CONTACT</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2>Let&apos;s work together!</h2>
              <p className="mt-10">
                I am always open to discussing new projects, creative ideas, or opportunities
                to be part of your visions. Feel free to reach out to discuss your project!.
              </p>

              <div className="group flex items-center mt-10 gap-4 w-fit border-2 border-white p-[20px] rounded-[5px] hover:border-cyan-300 transition-all ease-in-out duration-500">
                <AiOutlineMail size={60} className="text-white group-hover:text-cyan-300 transition-all ease-in-out duration-500 cursor-pointer" />
                <div className="flex flex-col group-hover:text-cyan-300 transition-all ease-in-out duration-500">
                  <p className="font-bold">Email</p>
                  <p>alvareznathaniel2003@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <img src="/contactProfile.jpg" alt="profile" className="rounded-xl height-[200px] width-[200px] object-contain rounded-xl" />
            </div>
          </div>
        </div>
      </Fade>


    </div>
  );
}
