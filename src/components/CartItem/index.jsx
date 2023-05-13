import { Container } from "./styles";
import { Input } from '../Input/index'
import { useState } from "react";



export function  CartItem({ data, title, price, thumbnail, ...rest }){
    const [quantity, setQuantity] = useState(1);

    function increaseQuantity() {
        setQuantity(quantity + 1);
      }
    
      function decreaseQuantity() {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
      }

  return(
    <Container {...rest}>

         
        <img src={data.thumbnail} />
       
        
        <div className="details">
            
      <h1>{data.title} </h1>

      <p>
        {data.price.currency}
        {data.price.cents} 
        <span> à vista</span> 
      </p>

      <p>10x de R$250 sem juros</p>
        </div>
        
        <div className="quantity">
            
          <button onClick={decreaseQuantity}>-</button>
          <Input quantity value={quantity} readOnly />
          <button onClick={increaseQuantity}>+</button>
        </div>

    </Container>
  )
};