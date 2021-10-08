import React from "react";
import { toast } from "react-toastify";

function useToggleToCart({ product, cart, setCart }) {
  const isInCart = cart.find((item) => item?.id === product.id);

  const toggleCart = () => {
    const addInCart = [...cart, product];

    if (!isInCart) {
      setCart(addInCart);
      return toast.success("You added a new Item to the cart");
    }
    if (isInCart && cart.length) {
      const removeFromCart = cart.filter(
        (cartItem) => cartItem.id !== product.id
      );
      setCart(removeFromCart);
      return toast.error("You just removed an item from the cart");
    }
  };

  return {
    toggleCart,
    isInCart,
  };
}

export { useToggleToCart };
