import { MUSIC_EXPERIENCE } from "@/constants"
import DisplayDate from "./components/DisplayDate"
import Button from "../../shared-components/Button";
import Image from "next/image";

const MusicExperience = () => {
  return (
    <div className="flex justify-between p-10 m-auto bg-black flex-col lg:flex-row lg:w-3/4 ">
        <div>
            <p className="text-[#00ff66] font-bold mb-4">Categories</p>
            <h1 className="font-bold text-5xl text-white leading-14">Enhance Your <br/>Music Experience</h1>
            <div className="flex flex-row gap-6 mt-10">
            {
                MUSIC_EXPERIENCE.map((date)=> 
                <DisplayDate key={date.description} num={date.num} description={date.description} variant={date.variant}/>)
            }
            </div>
           <Button buttonText="Buy Now!" type="button" variant="music-experience-btn"/>
        </div>
        <div className="flex items-center justify-items-center">
            <Image src="/jbl.png" alt="JBL" width={650} height={100} className="drop-shadow-[0_0_20px-rgba(255,0,0, 1)]"/>
        </div>
    </div>
  )
}

export default MusicExperience