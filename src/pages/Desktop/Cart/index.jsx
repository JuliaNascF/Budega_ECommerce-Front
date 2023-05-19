
import { Container, Content } from "./styles"
import { Header } from '../../../components/Header'
import { Input } from "../../../components/Input";
import { Button } from '../../../components/Button'
import { CartItem } from "../../../components/CartItem";
import { ButtonFreight } from "../../../components/ButtonFreight";
import { ButtonText } from "../../../components/ButtonText";
import { useState, useEffect } from 'react';
import { api } from '../../../services/api';
import { BiHome, BiStore } from 'react-icons/bi'
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

export function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetchCartData();
  }, [totalPrice]);

  async function fetchCartData() {
    try {
      const response = await api.get("/cart");
      setCartItems(response.data.cartItems);
      setTotalPrice(response.data.total);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }


  return (
    <Container>
      <Header />
      <main>
      <div className="back">
          <ButtonText onClick={handleBack} icon={FiArrowLeft} />
        </div>
        <Content>
        {isLoading ? (
             <FaSpinner size={25} className="loading-spinner" />
          ) : cartItems.length > 0 ? (
            cartItems.map(item => (
              <CartItem key={item.productId}
                data={item}
                fetchCartData={fetchCartData}
              />
            ))
          ) : (
            <p>Seu carrinho está vazio.</p>
          )}

          {cartItems.length > 0 && (
            <div className="priceDetails">
              <h1>Calcular Frete</h1>
              <Input freight />

              <div className="home">
                <ButtonFreight
                  title={'Receber em casa'}
                  icon={BiHome}
                  showLoadingIcon={true}
                  deliveryTime={'23 dias úteis'}
                />

                <ButtonFreight
                  title={'Retirada na loja'}
                  icon={BiStore}
                  showLoadingIcon={false}
                  deliveryTime={'2 horas apos confirmação de pagamento'}
                />
              </div>

              <h2>Resumo</h2>

              <div className="priceCart">
                <div className="text">
                  <p2>Valor dos produtos</p2>
                  <p2>Valor do frete</p2>
                  <h2>Total</h2>
                </div>

                <div className="price">
                  <p2> {totalPrice}</p2>
                  <p2>R$0,00</p2>
                  <h2> {totalPrice}</h2>
                </div>
              </div>

              <div className="pay">
                <Button title="Ir ao pagamento" />
              </div>
            </div>
          )}



        </Content>
      </main>
    </Container>
  )
}