import Link from "next/link"
import Image from "next/image";

const header = () => {
    return<div>
        <div className="bg-stone-900 flex p-10 justify-between items-center w-4/5 mx-auto rounded-xl mt-10 text-2xl">
            <h1>Nathaniel Alvarez</h1>
            <nav className="flex gap-x-8">
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </div>

        <div className="w-4/5 bg-stone-900 flex items-center justify-center flex-col mx-auto rounded-xl pt-10 mt-10">
            <Image 
            src ="/Nathaniel.jpg"
            width={500}
            height={500}
            className="rounded-full"
            
            alt="profile"
            />
            <h2 className="text-white text-[60px] font-bold pt-[20px]">Nathaniel Alvarez</h2>
            <p className="max-w-[500px] w-full text-white text-center pb-10 text-3xl" >Software Developer</p>
            <nav className="flex justify-center pb-[30px] gap-[30px]">
              <Link href="https://www.facebook.com/nathaniel.alvarez.9809">
                <img src="/fb_logo.png" width={40} height={40} className="filter grayscale hover:grayscale-0 transition ease-in-out duration-300" alt="Facebook" />
              </Link>
              <Link href="https://www.instagram.com/usernathfound___/">
                <img src="/instagram-logo-colored.jpg" width={40} className="rounded-full filter grayscale hover:grayscale-0 transition ease-in-out duration-300" alt="Instagram" />
              </Link>
            </nav>
        </div>

    </div>
}

export default header;