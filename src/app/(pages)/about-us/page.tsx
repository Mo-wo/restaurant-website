import { PageBanner } from '@/components/lvl2/banner/pageBanner/PageBanner';
import Hero from '@/components/pages/aboutUs/hero/Hero';
import Team from '@/components/pages/aboutUs/team/Team';
import ChefsCorner from '@/components/pages/aboutUs/chefsCorner/ChefsCorner';


export default function AboutUs() {
  return (
    <>
      <PageBanner heading={'GET TO KNOW US'} desc={'Meet the people and passion behind your favorite dining experience'} />
      <Hero />
      <Team />
      <ChefsCorner />
    </>
  );
}
