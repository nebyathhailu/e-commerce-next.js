import { SIDEBAR } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { FaApple, FaArrowRight } from "react-icons/fa";
const Hero = () => {
    return (
        <div className=" flex flex-column p-3 m-auto mt-8 lg:p-0 lg:flex-row lg:w-3/4  ">
            <div className="lg:w-1/5">
                <ul className="hidden h-full items-bottom gap-12 md:flex flex-column md:align-center lg:block">
                    {SIDEBAR.map((link) =>
                        <Link href={link.href} key={link.value}
                            className="regular-16 flexCenter cursor-pointer pb-4 block transition-all hover:font-bold">
                            {link.label}
                        </Link>
                    )}
                </ul>
            </div>
            <div className="flex gap-5 flex-col-reverse justify-center bg-black text-white p-10 lg:pb-0 lg:w-4/5 lg:flex-row">
                <div className=" flex flex-col lg:w-1/2">
                    <p className="flex items-center pb-5">
                        <FaApple className="w-10 h-10 " />
                        <span className="pl-4">iPhone 14 Series</span></p>
                    <h1 className="font-bold text-5xl leading-14">Up to 10%<br/>off Voucher</h1>
                    <p className="mt-10 flex items-center"><span className="border-b pb-1 mr-2">Shop Now</span><FaArrowRight className="w-5 h-5"/></p>
                </div>
                <div className="flex justify-center items-center lg:w-1/2">
                    <Image src="/phone.png"
                    alt="Hero phone"
                    width={400}
                    height={100} />
                </div>
            </div>
        </div>
    )
}

export default Hero;