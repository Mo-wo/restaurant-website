import Hero from "@/components/pages/home/hero/Hero";
import { BestSeller } from "@/components/pages/home/bestSeller/BestSeller";
import { MenuPreview } from "@/components/pages/home/menuPreview/MenuPreview";
import { InteriorPreview } from "@/components/pages/home/interiorPreview/InteriorPreview";
import { Value } from "@/components/pages/home/value/Value";

export default function Home() {
  return(
    <>
      <Hero />
      <BestSeller />
      <MenuPreview />
      <InteriorPreview />
      <Value />
    </>
  );
}
