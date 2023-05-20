import { Container } from "./styles";
import { Input } from '../Input/index'
import { useState, useEffect} from "react";
import { api } from "../../services/api";
import { BiX } from 'react-icons/bi'
import { ButtonText } from "../ButtonText";



export function  CartItem({ data,   fetchCartData, cartMobile=false, ...rest }){
  const { price, title, thumbnail } = data.product;
  const [cartItems, setCartItems] = useState(data.quantity);

  async function updateQuantity(newQuantity) {
    setCartItems(newQuantity);
    try {
      await api.post(`/cart/${data.productId}`, { quantity: newQuantity });
      fetchCartData()
    } catch (error) {
      console.log(error);
   
    }
  }

  function increaseQuantity() {
    const newQuantity = cartItems + 1;
    updateQuantity(newQuantity);

    
  }

  async function decreaseQuantity() {
    if (cartItems > 1) {
      const newQuantity = cartItems - 1;
      setCartItems(newQuantity);
      try {
        await api.post(`/cart/decrease/${data.productId}`, { quantity: newQuantity });
        fetchCartData();
      } catch (error) {
        console.log(error);
      
      }
    }
  }

  async function removeProduct() {
    try {
      await api.delete(`/cart/${data.productId}`);
      fetchCartData()
    } catch (error) {
    
      console.log(error);
   
    }
  }
  

  return(
    <Container  className={cartMobile ? 'cartMobile' : ''} {...rest}>
 
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
          <div className="inputQuantity">
          <Input 
          quantity
          value={cartItems}
          onChange={(e) => setCartItems(parseInt(e.target.value))}
          readOnly/>

          </div>
          <button onClick={increaseQuantity}>+</button>
        </div>

       <div className="remove">
      <ButtonText onClick={removeProduct} icon={BiX}/>

       </div>
    </Container>
  )
};