import { PERFUME, PLAYSTATION, SPEAKER, WOMEN_COLLECTION } from "@/constants";
import Display from "./components/Display";

const NewArrival = () => {
  return (
    <div className=" px-3 lg:w-3/4 mb-10 mt-40 lg:mx-auto">
        <div className="flex mb-3 items-center gap-3">
            <p className="w-[15px] h-[30px] rounded-sm bg-[#db4444]"></p>
            <p className="text-[#db4444] font-medium ">Featured</p>
        </div>
        <div className="flex pb-10 items-center justify-between">
            <h1 className="font-bold mt-5 text-2xl md:text-4xl lg:mt-6">New Arrival</h1>
        </div>
        <div className="flex gap-10 justify-evenly">
          <div>
            { PLAYSTATION.map((item) =>
            <Display key={item.title} title={item.title} description={item.description} link={item.link} imageSrc={item.imageSrc} imageAlt={item.imageAlt} variant={item.variant}/>)
            } 
          </div>
          <div className="flex flex-col gap-10 justify-evenly">
            <div>
            { WOMEN_COLLECTION.map((item) =>
            <Display key={item.title} title={item.title} description={item.description} link={item.link} imageSrc={item.imageSrc} imageAlt={item.imageAlt} variant={item.variant}/>)
            } 
            </div>
            <div className="flex gap-10 items-stretch flex-row justify-evenly">
              <div className="flex-1">
              { SPEAKER.map((item) =>
            <Display key={item.title} title={item.title} description={item.description} link={item.link} imageSrc={item.imageSrc} imageAlt={item.imageAlt} variant={item.variant}/>)
            } 
              </div>
              <div className="flex-1">
              { PERFUME.map((item) =>
            <Display key={item.title} title={item.title} description={item.description} link={item.link} imageSrc={item.imageSrc} imageAlt={item.imageAlt} variant={item.variant}/>)
            } 
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NewArrival;