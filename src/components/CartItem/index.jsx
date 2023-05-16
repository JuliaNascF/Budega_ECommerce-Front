import { Container } from "./styles";
import { Input } from '../Input/index'
import { useState, useEffect} from "react";
import { api } from "../../services/api";
import { useCart } from "../CartContext/index";


export function  CartItem({ data, ...rest }){
  const { cartItems, updateCartItem } = useCart();
  const { price, title, thumbnail } = data?.product || {};
  const quantity = cartItems[data.productId] || 1;

  async function increaseQuantity() {
    const newQuantity = quantity + 1;
    updateCartItem(data.productId, newQuantity);
    try {
      await api.post(`/cart/${data.productId}`, { quantity: newQuantity });
      // Restante do código...
    } catch (error) {
      console.log(error);
      // Trate os erros adequadamente
    }
  }

  async function decreaseQuantity() {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      updateCartItem(data.productId, newQuantity);
      try {
        await api.post(`/cart/decrease/${data.productId}`, { quantity: newQuantity });
        // Restante do código...
      } catch (error) {
        console.log(error);
        // Trate os erros adequadamente
      }
    }
  }

  return(
    <Container {...rest}>

         
        <img src={thumbnail} />
       
        
        <div className="details">
            
      <h1>{title} </h1>

      <p>
        {price.currency}
      
        {price.cents} 
        <span> à vista</span> 
      </p>

      <p>10x de R$250 sem juros</p>
        </div>
        
        <div className="quantity">
            
          <button onClick={decreaseQuantity}>-</button>
          <Input type="number"
        value={quantity}
        readOnly />
          <button onClick={increaseQuantity}>+</button>
        </div>

    </Container>
  )
};