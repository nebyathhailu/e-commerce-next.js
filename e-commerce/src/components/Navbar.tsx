'use client';
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { FaBars, FaRegHeart, FaSearch } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Input from "../shared-components/Input";

const Navbar = () => {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    return (
        <nav className="flex items-center justify-between px-3 py-4 lg:px-0 lg:w-3/4 m-auto">
            <h1 className="text-2xl font-bold lg:w-1/4">Exclusive</h1>
            <div className="items-center flex flex-row-reverse w-3/4 lg:flex-row lg:justify-between ">
                <div>
                    <FaBars className="absolute left-92 top-22 lg:hidden" />
                    <ul className="hidden h-full items-bottom gap-12 md:flex md:align-center lg:flex">
                        {NAV_LINKS.map((link) => (
                            <Link href={link.href} key={link.value}
                                className="regular-16 flexCenter cursor-pointer transition-all hover:font-bold">
                                {link.label}
                            </Link>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center gap-4 ml-5">
                    <Input type="text" placeholder="What are you looking for?" variant="search" />
                    <FaSearch className="relative right-15 text-gray-400 pl-1" />
                    {isHomePage && (
                        <>
                            <FaRegHeart className="hidden cursor-pointer lg:block h-10 w-6" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="hidden lg:block w-10"><path d="M351.9 329.506H206.81l-3.072-12.56H368.16l26.63-116.019-217.23-26.04-9.952-58.09h-50.4v21.946h31.894l35.233 191.246a32.927 32.927 0 1 0 36.363 21.462h100.244a32.825 32.825 0 1 0 30.957-21.945zM181.427 197.45l186.51 22.358-17.258 75.195H198.917z" data-name="Shopping Cart" /></svg>
                        </>
                    )
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;