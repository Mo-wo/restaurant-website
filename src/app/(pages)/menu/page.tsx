import { PageBanner } from "@/components/lvl2/banner/pageBanner/PageBanner";
import Offerings from "@/components/pages/menu/offerings/Offerings";
import Categories from "@/components/pages/menu/categories/Categories";
import SignatureDishes from "@/components/pages/menu/signatureDishes/SignatureDishes";

export default function Menu() {
  return (
    <>
      <PageBanner
        heading={'A feast for every taste'}
        desc={'From hearty classics to modern favorites, our menu is crafted to please every palate. Explore our signature dishes, seasonal specials, and delightful drinks'}
      />
      <Offerings />
      <Categories/>
      <SignatureDishes />
    </>
  );
}
