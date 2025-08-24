import Image from "next/image";
interface DisplayProps {
    title: string,
    description: string,
    link: string,
    imageSrc: string,
    imageAlt: string,
    variant:string,
}
const Display = ({ title, description, link, imageSrc, imageAlt, variant}: DisplayProps) => {
    const variantSwitch = (variant:string) => {
        switch (variant){
            case "playstation":
                return {width:630, height:600};
            case "collection":
                return {width:300, height:300}
            default:
                return {width:200, height:200}
    }};

    const variantClass = variantSwitch(variant);
    return (
        <div className="bg-black p-10 items-end relative">
            <div className="absolute top-[60%]">
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            <p className="text-white">{description}</p>
            <p className="underline text-white">{link}</p>
            </div>
            
            <Image
                src={imageSrc}
                alt={imageAlt}
                width={variantClass.width}
                height={variantClass.height}
                />            
        </div>
    )
}

export default Display;