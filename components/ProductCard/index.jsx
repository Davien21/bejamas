import React from "react";
import styles from "./product-card.module.css";
import Image from "next/image";
import { Button } from "../Button";
import { getBlurPath } from "../../utils";
import { useCartContext } from "../../contexts";
import { useToggleToCart } from "../../hooks";

function ProductCard({ product }) {
  const { cart, setCart } = useCartContext();
  const { toggleCart, isInCart } = useToggleToCart({
    product,
    cart,
    setCart,
  });

  return (
    <div className=" mb-20 md:mb-10">
      <div className={`${styles["container"]} relative mb-2`}>
        {product?.bestseller && (
          <div className="absolute top-0 left-0 bg-white z-10 px-3 py-2 shadow-sm ">
            <span>Best Seller</span>
          </div>
        )}
        <div className={`${styles["image"]} border`}>
          <Image
            src={product?.image?.src}
            width="300"
            height="350"
            objectFit="cover"
            alt={product?.image?.alt}
            placeholder="blur"
            blurDataURL={getBlurPath(product?.image?.src)}
          />
        </div>
        <div
          className={`${styles["button-container"]} absolute bottom-0 w-full`}
        >
          <Button
            onClick={() => toggleCart()}
            text={isInCart ? "Remove From Cart" : "Add to Cart"}
          />
        </div>
      </div>
      <div className="capitalize">
        <div className="app-text-grey">
          <span>{product.category}</span>
        </div>
        <div className="my-1 text-xl font-semibold">
          <span>{product.name}</span>
        </div>
        <div className="app-text-grey">
          <span>
            {product.currency == "USD" ? "$" : "$"}
            {product.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export { ProductCard };
