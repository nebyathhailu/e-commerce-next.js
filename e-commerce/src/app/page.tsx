import FlashSales from "@/components/FlashSales";
import Hero from "@/components/Hero";
import SellingBooks from "@/components/SellingBooks";
import BrowseCategory from "@/components/browse-category/BrowseCategory";

export default function Home() {
  return (
   <div>
    <Hero/>
    <FlashSales/>
    <BrowseCategory/>
    <SellingBooks/>
   </div>
  );
}
