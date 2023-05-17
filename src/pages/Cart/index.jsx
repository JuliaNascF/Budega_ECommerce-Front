
import { Container, Content } from "./styles"
import { Header } from '../../components/Header'
import { Input } from "../../components/Input";
import { Button } from '../../components/Button'
import { CartItem } from "../../components/CartItem";
import { ButtonFreight } from "../../components/ButtonFreight";
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { BiHome, BiStore } from 'react-icons/bi'

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
              <CartItem key={item.productId}
                data={item}
              />
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}   

           <div className="priceDetails">

          <h1>Calcular Frete</h1>
          <Input
            freight
          />

          <div className="home">
            <ButtonFreight title={'Receber em casa'}
              icon={BiHome}
              showLoadingIcon={true} 
              deliveryTime={'23 dias úteis'}
              
              />

            <ButtonFreight title={'Retirada na loja'}
              icon={BiStore} 
              showLoadingIcon={false}
              deliveryTime={'2 horas apos confirmação de pagamento'}
              />

          </div>
           

           

           <h2>Resumo</h2>

           <div className="priceCart">

             <div className="text">
              <p2>Valor dos produtos  </p2>
              <p2>Valor do frete  </p2>
              <h2>Total</h2>
             </div>

             <div className="price">
              <p2>R$5000</p2>
              <p2>R$0,00</p2>
              <h2>R$5000</h2>
             </div>

           </div>

           </div>
            <div className="pay">
         <Button title="Ir ao pagamento"/>

            </div>
                
           

        </Content>
      </main>
    </Container>
  )
}