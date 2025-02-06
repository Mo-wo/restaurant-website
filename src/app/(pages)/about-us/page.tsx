import { PageBanner } from '@/components/lvl2/pageBanner/PageBanner';
import Hero from '@/components/pages/aboutUs/hero/Hero';

export default function AboutUs() {
  return (
    <>
      <PageBanner heading={'GET TO KNOW US'} desc={'Meet the people and passion behind your favorite dining experience'} />
      <Hero />
    </>
  );
}
