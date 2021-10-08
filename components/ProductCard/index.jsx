import React from "react";
import styles from "./product-card.module.css";
import Image from "next/image";
import { Button } from "../Button";

function ProductCard({ product }) {
  // console.log(product);
  return (
    <div className={`${styles["container"]} relative mb-20 md:mb-10`}>
      {product.bestseller && (
        <div className="absolute top-0 left-0 bg-white z-10 px-3 py-2 shadow-sm ">
          <span>Best Seller</span>
        </div>
      )}
      <div className={`${styles["image"]} border`}>
        <Image
          src={product.image.src}
          width="300"
          height="350"
          objectFit="cover"
        />
      </div>
      <div className={`${styles["button-container"]} absolute bottom-0 w-full`}>
        <Button text="Add to cart" />
      </div>
    </div>
  );
}

export { ProductCard };
