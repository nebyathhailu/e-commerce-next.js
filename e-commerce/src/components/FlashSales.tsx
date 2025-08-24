import { FLASH_SALES } from "@/constants";
import ProductCard from "../shared-components/ProductCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "../shared-components/Button";

const FlashSales = () => {
    return (
        <div className=" px-3 mt-25 lg:w-3/4 lg:mx-auto">

            <div className="mb-6">
                <div className="flex mb-3 items-center gap-3">
                    <p className="w-[15px] h-[30px] rounded-sm bg-[#db4444]"></p>
                    <p className="text-[#db4444] font-medium "> Today&apos;s</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-3  pb-10 lg:gap-20">
                        <h1 className="font-bold mt-5 text-2xl md:text-4xl lg:mt-6">Flash Sales</h1>
                        <div className="flex flex-row gap-2 lg:gap-4 items-center">
                            <div className="flex flex-col">
                                <p className="text-sm lg:text-base">Days</p>
                                <h1 className="font-bold text-xl md:text-4xl">03</h1>
                            </div>
                            <p className="mt-4 text-[#db4444] lg:text-3xl">:</p>
                            <div className="flex flex-col">
                                <p className="text-sm lg:text-base">Hours</p>
                                <h1 className="font-bold text-xl md:text-4xl">23</h1>
                            </div>
                            <p className="mt-4 text-[#db4444] lg:text-3xl">:</p>

                            <div className="flex flex-col">
                                <p className="text-sm lg:text-base">Minutes</p>
                                <h1 className="font-bold text-xl md:text-4xl">19</h1>
                            </div>
                            <p className="mt-4 text-[#db4444] lg:text-3xl">:</p>

                            <div className="flex flex-col">
                                <p className="text-sm lg:text-base">Seconds</p>
                                <h1 className="font-bold text-xl md:text-4xl">56</h1>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex gap-5">
                        <FaArrowLeft />
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className=" flex flex-col gap-2 justify-evenly lg:flex-row ">
                {FLASH_SALES.map((product) =>
                    <ProductCard
                        key={product.description}
                        buttonText={product.buttonText}
                        imageSrc={product.imageSrc}
                        imageAlt={product.imageAlt}
                        priceOne={product.priceOne}
                        priceTwo={product.priceTwo}
                        rate={product.rate}
                        rating={product.rating}
                        description={product.description}
                        variant={product.variant}
                    />)}
            </div>
            <div className="flex justify-items-center">
            <Button buttonText="View All Products" type="button" variant="main" />
            </div>
        </div>
    )
};
export default FlashSales;