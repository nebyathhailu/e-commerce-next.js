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
        <div className="bg-black p-10 items-end">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p>{description}</p>
            <p className="underline">{link}</p>
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