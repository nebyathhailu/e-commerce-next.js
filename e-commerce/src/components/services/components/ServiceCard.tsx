import Image from "next/image";

interface ServiceCardProps{
  title:string;
  description:string;
  imageSrc:string;
  imageAlt:string;
}
const ServiceCard = ({title, description, imageSrc, imageAlt}:ServiceCardProps) => {
  return (
    <div className="flex gap-1.5 flex-col m-auto">
      <div className="bg-[#c1c0c1] flex rounded-full w-16 h-16 m-auto mb-4">
        <div className="bg-black flex w-12 h-12 rounded-full m-auto">
          <Image
          src={imageSrc}
          alt={imageAlt}
          width={30}
          height={30}
          className="m-auto"/>
        </div>
      </div>
      <h1 className="m-auto font-bold text-xl">{title}</h1>
      <p className="m-auto">{description}</p>
    </div>
  )
}

export default ServiceCard;