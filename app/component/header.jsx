import Link from "next/link"

const header = () => {
    return<div>
        <div className=" bg-black flex p-20 justify-between items-center">
            <h1>Nathaniel Alvarez</h1>
            <nav className="flex gap-x-8">
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </div>
    </div>
}

export default header;