'use client'
import { useState, useEffect } from "react";
import styles from "./discountButton.module.css";

export const DiscountButton = () => {

  return (

    <button onClick={undefined} className={styles.buttonBg}>
        <p>10% OFF or Discount</p>
      </button>
  );
};
