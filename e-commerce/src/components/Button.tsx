interface ButtonProps{
    type: 'button' | 'submit';
    buttonText:string;
    variant:string;
    onClickHandler:() => void;
}

const Button = ({type, buttonText, variant, onClickHandler}:ButtonProps) =>{
    const variantSwitch = (variant: string) => {
        switch(variant){
            case "primary":
                return "bg-green-500 text-white-500";
            case "secondary":
                return "bg-white-500 text-green-500 border-1 border-green";
            default:
                return "bg-green-500 text-white-500";

        }
    }
    const variantClass = variantSwitch(variant);
    return(
        <button type={type} className={`${variantClass} px-[16px] py-[12px] border-none rounded-sm cursor-pointer`} onClick={onClickHandler}>
            {buttonText}
        </button>
    );
}

export default Button;