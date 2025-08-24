import { FaRegEye, FaRegHeart } from "react-icons/fa";
import Button from "./Button";
import Image from "next/image";
import Rating from "../components/Rating";

interface ProductProps {
    buttonText: string;
    imageSrc: string;
    imageAlt: string;
    description: string;
    priceOne: string;
    priceTwo: string;
    rating: number;
    rate: number;
    variant: string;
}

const ProductCard = ({ buttonText, imageSrc, imageAlt, priceOne, priceTwo, rate, rating, description, variant}: ProductProps) => {
    return (
        <div className="flex justify-evenly w-3/4 mx-auto flex-col leading-8 p-4 mb-10 lg:w-1/4">
            <div className="bg-[#f5f5f5] p-2 mb-8">
                <div className="flex justify-between  mb-4">
                    <Button buttonText={buttonText} type="button" variant={variant} />
                    <FaRegHeart />
                </div>
                <div className="flex justify-between">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={200}
                        height={150}
                        className="text-center h-40 ml-10" />
                    <FaRegEye />
                </div>
            </div>
            <div>
                <p className="font-bold">{description}</p>
                <div className="flex gap-3">
                    <p className="text-[#db4444] font-medium">{priceOne}</p>
                    <p className="text-gray-500 line-through">{priceTwo}</p>
                </div>
                <div className="flex items-center gap-4">
                    <Rating value={rating} max={5} />
                    <p className="text-gray-500">({rate})</p>
                </div>
            </div>
        </div>
    )
};

export default ProductCard;