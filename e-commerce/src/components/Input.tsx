interface InputProps{
    type:string;
    placeholder:string;
    variant:string;
}

const Input = ({type, placeholder, variant}:InputProps) => {
    const variantSwitch = (variant:string) => {
        switch(variant){
            case "search":{
                return "bg-gray-100  pl-4 text-gray-500 text-sm relative";
            }
        }
    }
  return (
    <div>
        <input type={type} placeholder={placeholder} className={variantSwitch(variant)}/>
    </div>
  )
}

export default Input;