import { SERVICES } from "@/constants"
import ServiceCard from "./components/ServiceCard"
const Services = () => {
  return (
    <div className="flex gap-20 m-auto w-3/4 my-30">
        {
            SERVICES.map((item)=>
            <ServiceCard key={item.description} 
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}/>)
        }
    </div>
  )
}

export default Services