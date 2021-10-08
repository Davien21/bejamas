import React, { useState } from "react";
import { CartIcon, CloseIcon } from "../../assets/images";
import { useCartContext } from "../../contexts";
import { useProducts } from "../../hooks";
import styles from "./cart.module.css";
import Image from "next/image";
import { getBlurPath } from "../../utils";
import { Button } from "../Button";
import { toast } from "react-toastify";

function Cart() {
  const { products, isError, isLoading } = useProducts();
  const { cart, setCart } = useCartContext();
  const [cartWindow, toggleCartWindow] = useState(false);
  let windowClasses = `${styles["cart-window"]} `;
  if (cartWindow) windowClasses += `${styles["active"]}`;

  return (
    <div className={`${styles["container"]}`}>
      <div title="Your cart">
        <CartIcon
          className="cursor-pointer mr-4"
          onClick={() => toggleCartWindow(!cartWindow)}
        />
        {cart?.length > 0 && (
          <div className={`${styles["counter"]}`}>{cart?.length}</div>
        )}
      </div>
      <div className={windowClasses}>
        <div className={`${styles["close"]} flex justify-end w-full`}>
          <CloseIcon onClick={() => toggleCartWindow(false)} />
        </div>
        {cart.length == 0 && <div className="mb-5">No Items in the Cart</div>}
        {cart.map((item) => {
          return (
            <div className="">
              <div className="grid grid-cols-5 gap-x-4">
                <div className="col-span-3 flex justify-center flex-col">
                  <div>
                    <span className="text-xl">{item.name}</span>
                  </div>
                  <div className="app-text-grey">
                    <span>
                      {item.currency == "USD" ? "$" : "$"}
                      {item.price}
                    </span>
                  </div>
                </div>
                <div className={`${styles["img-container"]} col-span-2`}>
                  <Image
                    src={item?.image?.src}
                    width="130"
                    height="180"
                    objectFit="cover"
                    alt={item?.image?.alt}
                    placeholder="blur"
                    blurDataURL={getBlurPath(item?.image?.src)}
                  />
                </div>
              </div>
              <hr className="hr-sm my-2 w-full" />
            </div>
          );
        })}
        <Button
          onClick={() => {
            setCart([]);
            toast.error("Your Cart Was Cleared");
          }}
          type="secondary"
          text="Clear"
        />
      </div>
    </div>
  );
}

export default Cart;
