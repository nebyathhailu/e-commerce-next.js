interface DateProps{
    num:number | string;
    description:string;
    variant:string;
}
const DisplayDate = ({num, description, variant}:DateProps) => {
    const variantSwitch = (variant: string) => {
        switch(variant){
            case "flash-screen":
                return "";
            case "music-experience":
                return "bg-white w-16 h-16 text-white text-center rounded-full";
            default:
                return "bg-green-500 text-white-500";
        }
    }
    const variantClass = variantSwitch(variant);

  return (
    <div className={`bg-white flex flex-col items-center justify-center ${variantClass}`}>
        <p className="text-2xl text-black font-bold">{num}</p>
        <p className="text-black text-[11px]">{description}</p>
    </div>
  )
}

export default DisplayDate;