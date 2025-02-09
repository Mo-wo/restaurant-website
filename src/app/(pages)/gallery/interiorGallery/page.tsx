import { PageBanner } from '@/components/lvl2/banner/pageBanner/PageBanner';
import { InteriorGallery } from '@/components/pages/interiorGallery/InteriorGallery';

export default function InteriorGallery() {
  return (
    <>
      <PageBanner heading={'STEP INTO OUR WORLD'} desc={'Experience the charm and warmth of our inviting ambiance, where every detail is designed for your comfort and delight'} />
      <InteriorGallery />
    </>
  )
}
