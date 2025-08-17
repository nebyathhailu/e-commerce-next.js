import { BROWSE_CATEGORY } from "@/constants";
import Category from "./component/Category";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const BrowseCategory = () => {
    return (
        <div className="flex flex-col justify-evenly px-3 mt-40 lg:w-3/4 lg:mx-auto">
            <div className="flex mb-3 items-center gap-3">
                <p className="w-[15px] h-[30px] rounded-sm bg-[#db4444]"></p>
                <p className="text-[#db4444] font-medium "> Categories</p>
            </div>
            <div className="flex justify-between pb-10 items-center">
                <h1 className="font-bold mt-5 text-2xl md:text-4xl lg:mt-6">Browse By Category</h1>
                <div className="hidden lg:flex gap-5">
                    <FaArrowLeft />
                    <FaArrowRight />
                </div>
            </div>
            <div className=" grid grid-cols-3 gap-2 lg:flex flex-row justify-between mt-10">
                {BROWSE_CATEGORY.map((category) =>
                    <Category key={category.text}
                        imageSrc={category.imageSrc}
                        imageAlt={category.imageAlt}
                        text={category.text}
                    />)
                }
            </div>
        </div>
    )
}

export default BrowseCategory