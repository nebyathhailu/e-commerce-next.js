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