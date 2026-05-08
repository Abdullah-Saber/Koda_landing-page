import Hero from "@/components/sections/Hero";
import FeaturedCollections from "@/components/sections/FeaturedCollections";
import BrandStory from "@/components/sections/BrandStory";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedCollections />
      <BrandStory />
      <Newsletter />
    </div>
  );
}
