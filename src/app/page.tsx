import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import AssetPerformance from "@/components/Home/AssetPerformance";
import TopTrades from "@/components/Home/TopTrades";
import About from "@/components/Home/About";
import Pricing from "@/components/Home/Pricing";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <Features />
      <AssetPerformance />
      <TopTrades />
      <About />
      <Pricing />
    </div>
  );
}
