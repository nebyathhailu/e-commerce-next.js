import { FOOTER_COLUMN } from "@/constants";
import Input from "@/shared-components/Input";
import FooterColumn from "./components/FooterColumn";
import Image from "next/image";
import { FaApple } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:flex w-3/4 m-auto gap-6">
        {/* Column 1: Subscribe */}
        <div>
          <h3 className="text-lg font-semibold text-white">Exclusive</h3>
          <p className="mt-2">Subscribe to get 10% off your first order</p>
          <div className="mt-3 flex relative">

            <Input type="email" placeholder="Enter your email" variant="footer-email" />
            <Image src="/right-arrow.png" alt="Right arrow" width={30} height={10} className="h-6 absolute left-58 top-3.5" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {
            FOOTER_COLUMN.map((column) =>
              <FooterColumn
                key={column.title}
                title={column.title}
                links={column.links} />)
          }
        </div>

        {/* Column 5: Download App */}
        <div>
          <h3 className="text-lg font-semibold text-white">Download App</h3>
          <p className="mt-2 text-sm text-gray-400">Save $3 with App New User Only</p>
          <div className="flex mt-3 space-x-2">
            <div className="bg-white p-1 inline items-center rounded-sm">
              <Image src="/qr-code.png" alt="Play store " width={84} height={10} className="m-auto" />
            </div>
            <div className="flex flex-col">
              <div className="flex border">
                <Image src="/playstore.png" alt="Play store " width={25} height={10} className="" />
                <div>
                  <h1>GET IT ON</h1>
                  <h1>Google Play</h1>
                </div>
              </div>
              <div className="flex border">
                <FaApple className="w-8 h-8 " />
                <div>
                  <h1>Download on the</h1>
                  <h1>App  Sore</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#"><Image src="/facebook.png" alt="Right arrow" width={30} height={6} className="h-6 "/></a>
            <a href="#"><Image src="/twitter.png" alt="Right arrow" width={30} height={6} className="h-6 " /></a>
            <a href="#"><Image src="/instagram.png" alt="Right arrow" width={30} height={6} className="h-6" /></a>
            <a href="#"><Image src="/linkedin.png" alt="Right arrow" width={30} height={6} className="h-6" /></a>
          </div>
        </div>
      </div>
      {/* Bottom copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;