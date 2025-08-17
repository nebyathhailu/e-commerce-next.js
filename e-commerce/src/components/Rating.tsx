import { FaStar } from "react-icons/fa";

interface RatingProps {
    value:number;
    max:number;
}
const Rating = ({value, max=5}:RatingProps) => {
  return (
    <div className="flex gap-1">
        {Array.from({length:max}, (_,i) => {
            const starValue = i + 1;
            if(value >= starValue){
                return <FaStar key={i} className="text-yellow-500"/>;
            }else if (value >= starValue - 0.5){
                return(
                    <div key={i} className="relative inline-block">
                        <FaStar className="text-gray-400"/>
                        <FaStar className="absolute top-0 left-0 text-yellow-500"
                        style={{clipPath:"inset(0 50% 0 0)"}}/>
                    </div>
                );
            }else{
                return <FaStar key={i} className="text-gray-400"/>;
            }
        })}
    </div>
  );
};

export default Rating;