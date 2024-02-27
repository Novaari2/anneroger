import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white">
            <div className="flex justify-between ml-20 p-5">
                <Image src="/images/logo.png" alt="logo" width={50} height={50} className="item-center" />
                <div className="flex gap-5 relative items-center mr-20">
                    <Link href="/">Home</Link>
                    <Link href="/">Categories</Link>
                    <Link href="/">Sign Up</Link>
                    <button className="bg-color-button text-white rounded p-2 w-24">Sign Up</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;