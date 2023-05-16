import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState({});

  function updateCartItem(productId, quantity) {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [productId]: quantity,
    }));
  }

  function removeCartItem(productId) {
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      delete updatedCartItems[productId];
      return updatedCartItems;
    });
  }

  function clearCart() {
    setCartItems({});
  }

  return (
    <CartContext.Provider
      value={{ cartItems, updateCartItem, removeCartItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
