import React from "react";
import styles from "./cartItem.module.css";
import ImageComponent from "@/components/lvl2/image/Image";

type CartItemProps = {
    data: any;
}

export const CartItem: React.FC<CartItemProps> = ({ data }) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imgTextWrapper}>
        <ImageComponent src={data.img} alt={`${data.name}-photo`} className={styles.img} />
        <div className={styles.titleWrapper}>
            <div>
                <p></p>
                <h3></h3>
            </div>
            
        </div>
      </div>
    </div>
  );
};
