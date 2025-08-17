interface ButtonProps{
    type: 'button' | 'submit';
    buttonText:string;
    variant:string;
    onClickHandler?:() => void;
}

const Button = ({type, buttonText, variant, onClickHandler}:ButtonProps) =>{
    const variantSwitch = (variant: string) => {
        switch(variant){
            case "primary":
                return "bg-[#db4444] text-white px-[16px] rounded-sm ";
            case "secondary":
                return "bg-black text-white w-[240px] text-center mt-4";
            case "main":
                return "bg-[#db4444] text-white w-[240px] py-2.5 rounded-sm text-center m-auto";
            case "sales":
                return "bg-[#db4444] text-white w-[140px] py-2.5 rounded-sm text-center m-auto";

            default:
                return "bg-green-500 text-white-500";

        }
    }
    const variantClass = variantSwitch(variant);
    return(
        <button type={type} className={`${variantClass}  border-none cursor-pointer`} onClick={onClickHandler}>
            {buttonText}
        </button>
    );
}

export default Button;