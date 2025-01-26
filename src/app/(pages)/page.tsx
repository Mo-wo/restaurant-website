import Hero from "@/components/pages/home/hero/Hero";
import { BestSeller } from "@/components/pages/home/bestSeller/BestSeller";
import { MenuPreview } from "@/components/pages/home/menuPreview/MenuPreview";
import { InteriorPreview } from "@/components/pages/home/interiorPreview/InteriorPreview";
import { Value } from "@/components/pages/home/value/Value";
import Head from "next/head";

export default function Home() {
  return(
    <>
    <Head>
        <link rel="preload" href="../../assets/images/menuItems/bestsellerimagetwo.svg" as="image" />
      </Head>
      <Hero />
      <BestSeller />
      <MenuPreview />
      <InteriorPreview />
      <Value />
    </>
  );
}
