'use client';
import Dropdown from "./component/Dropdown";
import Link from "next/link";
import { OPTIONS } from "@/constants";

const handleSelect = (option :{value:string; label:string}) =>{
    console.log('selected options', option);
    
};

const Header = () => {
  return (
    <div className="bg-black px-3 flex md:pr-36 align-middle">
        <p className="text-sm text-white py-3 w-5/6 text-left md:text-center md:ml-24 md:pl-10">Summer Sale For All Swim Suits And Free Express Delivery- OFF 50%! <Link href={"/"} className="font-bold underline ml-2">ShopNow</Link></p>
        <Dropdown options={OPTIONS} onSelect={handleSelect}/>
    </div>
  )
}

export default Header;