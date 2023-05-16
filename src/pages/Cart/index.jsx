
import { Container, Content } from "./styles"
import { Header } from '../../components/Header'
import { CartItem } from "../../components/CartItem";
import { useState, useEffect } from 'react';
import {api} from '../../services/api';

export function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchCartItems() {
      try {
        const response = await api.get('/cart');
        setCartItems(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCartItems();
  }, []);
  

  return (
    <Container>
      <Header />
      <main>
        <Content>
        
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <CartItem  key={item.productId}
            data={item}
           />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
        
        </Content>
      </main>
    </Container>
  )
}