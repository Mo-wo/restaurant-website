import Hero from "@/components/pages/home/hero/Hero";
import { BestSeller } from "@/components/pages/home/bestSeller/BestSeller";
import { MenuPreview } from "@/components/pages/home/menuPreview/MenuPreview";

export default function Home() {
  return(
    <>
      <Hero />
      <BestSeller />
      <MenuPreview />
    </>
  );
}
