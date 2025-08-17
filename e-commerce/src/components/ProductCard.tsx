import { FaRegEye, FaRegHeart } from "react-icons/fa";
import Button from "./Button";
import Image from "next/image";
import Rating from "./Rating";

interface ProductProps {
    buttonText: string;
    imageSrc: string;
    imageAlt: string;
    description: string;
    priceOne: string;
    priceTwo: string;
    rating: number;
    rate: number;
}

const ProductCard = ({ buttonText, imageSrc, imageAlt, priceOne, priceTwo, rate, rating, description}: ProductProps) => {
    return (
        <div className="flex w-3/4 mx-auto flex-col leading-8 p-4 lg:w-1/4">
            <div className="bg-[#f5f5f5] h-1/2 p-2">
                <div className="flex justify-between  mb-4">
                    <Button buttonText={buttonText} type="button" variant="primary" />
                    <FaRegHeart />
                </div>
                <div className="flex justify-between h-1/2">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={150}
                        height={150}
                        className="text-center ml-10" />
                    <FaRegEye />
                </div>
            </div>
            <p className="">{description}</p>
            <div className="flex gap-3">
                <p className="text-[#db4444] font-medium">{priceOne}</p>
                <p className="text-gray-500 line-through">{priceTwo}</p>
            </div>
            <div className="flex items-center gap-4">
                <Rating value={rating} max={5} />
                <p className="text-gray-500">({rate})</p>
            </div>
        </div>
    )
};

export default ProductCard;