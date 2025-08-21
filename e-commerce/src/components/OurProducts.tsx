import { OUR_PRODUCTS, OUR_PRODUCTS1 } from "@/constants";
import ProductCard from "./ProductCard";
import Button from "./Button";

const OurProducts = () => {
    return (
        <div className=" px-3 lg:w-3/4 mb-10 mt-40 lg:mx-auto">
            <div className="flex mb-3 items-center gap-3">
                <p className="w-[15px] h-[30px] rounded-sm bg-[#db4444]"></p>
                <p className="text-[#db4444] font-medium "> Our Products</p>
            </div>
            <div className="flex pb-10 items-center justify-between">
                <h1 className="font-bold mt-5 text-2xl md:text-4xl lg:mt-6">Explore Our Products</h1>
                <div className="flex justify-items-end">
                    <Button buttonText="View All" type="button" variant="sales" />
                </div>
            </div>
            <div className=" flex flex-col gap-2 justify-evenly lg:flex-row ">
                {OUR_PRODUCTS.map((product) =>
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
            <div className=" flex flex-col gap-2 justify-evenly lg:flex-row ">
                {OUR_PRODUCTS1.map((product) =>
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
        </div>
    )
};

export default OurProducts;