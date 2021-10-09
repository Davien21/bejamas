import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isInitiallyFetched, setIsInitiallyFetched] = useState(false);

  useEffect(function () {
    let hasItemsInLS = window.localStorage.getItem("cart");
    if (!hasItemsInLS) return setIsInitiallyFetched(true);

    let cartInLS = window.localStorage.getItem("cart");
    cartInLS = JSON.parse(cartInLS);
    setCart(cartInLS);
    setIsInitiallyFetched(true);
  }, []);

  useEffect(
    function () {
      if (isInitiallyFetched)
        window.localStorage.setItem("cart", JSON.stringify(cart));
    },
    [cart]
  );

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
