import FlashSales from "@/components/FlashSales";
import Hero from "@/components/Hero";
import BrowseCategory from "@/components/browse-category/BrowseCategory";

export default function Home() {
  return (
   <div>
    <Hero/>
    <FlashSales/>
    <BrowseCategory/>
   </div>
  );
}
