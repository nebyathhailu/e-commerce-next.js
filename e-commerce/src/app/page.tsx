import FlashSales from "@/components/FlashSales";
import Hero from "@/components/Hero";
import NewArrival from "@/components/new-arrival/NewArrival";
import OurProducts from "@/components/OurProducts";
import SellingProducts from "@/components/SellingProducts";
import BrowseCategory from "@/components/browse-category/BrowseCategory";
import MusicExperience from "@/components/music-experience/MusicExperience";
import Services from "@/components/services/Services";

export default function Home() {
  return (
   <div>
    <Hero/>
    <FlashSales/>
    <BrowseCategory/>
    <SellingProducts/>
    <MusicExperience/>
    <OurProducts/>
    <NewArrival/>
    <Services/>
   </div>
  );
}
