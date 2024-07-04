import {createContext, useState} from 'react'

import {ItemList} from "../components/menu/Menu";

export const CartContext = createContext(null)

const getDefaultCart = () => {
  let cart = {};
  for (let item of ItemList){
    cart[item.id] = 0
  }
  return cart;
};

export const CartContextProvider = ({children}) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  console.log(cartItems);
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if(cartItems[item] > 0){
        let itemInfo = ItemList.find((product) => String(product.id) === String(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newQuantity, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newQuantity }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}
