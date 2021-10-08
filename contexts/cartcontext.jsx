import { createContext, useContext, useState } from "react";
import useSWR from "swr";


const CartContext = createContext();

export function CartProvider({ children }) {
  let cartInLocalStorage = [];
  // useEffect(() => {
  //   localStorage.setItem("cart", cart);
  //   cartInLocalStorage = localStorage.getItem("cart");
  // });
  const [cart, setCart] = useState(cartInLocalStorage);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);

  if (!context) throw new Error("useCart must be used inside a `CartProvider`");

  return context;
}
