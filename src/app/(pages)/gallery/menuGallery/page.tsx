import { PageBanner } from '@/components/lvl2/banner/pageBanner/PageBanner';
import MenuGallery from '@/components/pages/menuGallery/MenuGallery';

export default function Gallery() {
  return (
    <>
      <PageBanner heading={'A GLIMPSE OF OUR WORLD'} desc={'Explore the sights of our vibrant dishes, cozy ambiance, and unforgettable moments'} />
      <MenuGallery />
    </>
  )
}
