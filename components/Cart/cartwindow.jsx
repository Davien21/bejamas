import React from "react";
import Image from "next/image";
import { toast } from "react-toastify";

import styles from "./cart.module.css";
import { getBlurPath } from "../../utils";
import { Button } from "../Button";
import { CartIcon, CloseIcon } from "../../assets/images";

function CartWindow({ isOpen, onToggleCartWindow, cart, onSetCart }) {
  let windowClasses = `${styles["cart-window"]} `;
  if (isOpen) windowClasses += `${styles["active"]}`;

  return (
    <div className={windowClasses}>
      <div className={`${styles["close"]} flex justify-end w-full`}>
        <CloseIcon onClick={() => onToggleCartWindow(false)} />
      </div>
      {cart.length == 0 && <div className="mb-5">No Items in the Cart</div>}
      {cart.map((item) => {
        return (
          <div key={item.id} className="">
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
          if (!cart.length) return
          onSetCart([]);
          toast.error("Your Cart Was Cleared");
        }}
        type="secondary"
        text="Clear"
      />
    </div>
  );
}

export default CartWindow;
