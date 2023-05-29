import { Container, Content } from "./styles";
import { ButtonText } from "../../../components/ButtonText";
import { Button } from "../../../components/Button";
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";

import { useLocation } from "react-router-dom";

export function MobileConfirm() {
    const location = useLocation();
    const orderData = location.state; 
    const navigate = useNavigate();
  
    function handleBack() {
      navigate(-1);
    }

    async function handlePlaceOrder() {
      navigate("/home")
      try {
        await api.post("/orders", orderData); 
      } catch (error) {
      
        console.error(error);
      }
   
  
    }

    
    return (
      <Container>
      <main>
        <div className="back">
          <ButtonText onClick={handleBack} icon={FiArrowLeft}  />
          <h2>Resumo da Compra</h2>
        </div>
        <Content> 
      
       
        <p>Produtos: {orderData.cartItems.map(item => item.product.title).join(", ")}</p>
        <p>Forma de entrega: {orderData.deliveryMethod}</p>
        <p>Forma de pagamento: {orderData.paymentMethod}</p>
        <p>Total: {orderData.totalPrice}</p>
        
       <Button onClick={handlePlaceOrder} title="Confirmar pagamento"/>
        </Content>
      

      </main>
    </Container>
     
    );
  }
  