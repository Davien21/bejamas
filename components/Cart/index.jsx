import { useState } from "react";
import { CartIcon } from "../../assets/images";
import { useCartContext } from "../../contexts";
import styles from "./cart.module.css";

import CartWindow from "./cartwindow";

function Cart() {
  const { cart, setCart } = useCartContext();
  const [cartWindow, toggleCartWindow] = useState(false);

  return (
    <div className={`${styles["container"]}`}>
      <div>
        <button
          className="mr-4"
          title="Your cart"
          onClick={() => toggleCartWindow(!cartWindow)}
        >
          <CartIcon />
        </button>
        {cart?.length > 0 && (
          <div className={`${styles["counter"]}`}>{cart?.length}</div>
        )}
      </div>
      <CartWindow
        isOpen={cartWindow}
        onToggleCartWindow={toggleCartWindow}
        cart={cart}
        onSetCart={setCart}
      />
    </div>
  );
}

export default Cart;
