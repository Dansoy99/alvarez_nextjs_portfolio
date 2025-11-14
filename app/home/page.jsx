import Image from "next/image";

const HomePage = () => {
    return <div className="bg-white h-[100vh] w-full flex items-center justify-center">
        
        <div className="flex items-center justify-center flex-col gap-[25px]">
            <Image 
            src ="/Nathaniel.jpg"
            width={500}
            height={500}
            alt="profile"
            />
            <h2 className="text-black text-[60px] font-bold">Juan Dela Cruz</h2>
            <p className="max-w-[500px] w-full text-black text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint doloribus ipsum, officia, ullam beatae nobis eius autem laudantium pariatur repudiandae nihil rerum molestias quo excepturi voluptates delectus reprehenderit consectetur? Accusantium?</p>
        </div>
    </div>
}
export default HomePage;