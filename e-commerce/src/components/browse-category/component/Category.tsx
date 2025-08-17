import Image from 'next/image';
interface CategoryProps {
    imageSrc: string;
    imageAlt: string;
    text: string;
}

const Category = ({ imageSrc, imageAlt, text }: CategoryProps) => {
  return (
    <div className='border border-gray-400 rounded-md pt-6 lg:w-[150px] flex flex-col justify-items-center leading-16'>
        <div className='justify-items-center'>
        <Image src={imageSrc} alt={imageAlt} width={50} height={100}/>
        </div>
      <p className='text-center font-medium'>{text}</p>
    </div>
  )
};
export default Category;
