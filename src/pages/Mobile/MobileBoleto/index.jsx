
import { Container, Content } from "./styles";
import { ButtonText } from "../../../components/ButtonText";
import { Information} from "../../../components/Information";
import { Button } from "../../../components/Button";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";

export function MobileBoleto() {
  const [showCard, setShowCard] = useState(false);
  const location = useLocation();
  const { cartItems, deliveryMethod, totalPrice } = location.state;

  function handleConfirm() {
    navigate("/confirm", {
      state: {
        cartItems,
        deliveryMethod,
        totalPrice,
        paymentMethod: "Boleto"
      }
    });
  }

  function handleShowCard() {
    setShowCard(true);
  }
  
  function handleCloseCard() {
    setShowCard(false);
  }

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

 

  return (
    <Container>
      <main>
        <div className="back">
          <ButtonText onClick={handleBack} icon={FiArrowLeft}  />
          <h3>Pagamento</h3>
        </div>
        <Content>
          <h2>Boleto Bancário </h2>
          <p>Use o código para realizar o pagamento e após validado, enviaremos a confirmação da comprar para você!</p>
         
            <h3>34191.79001 01043.510047 91020.150008 8 87980026000</h3>
           
             <Button onClick={handleConfirm} title="Efetuar pagamento "/>

             <p>Em caso de dúvida clique <span onClick={handleShowCard}>aqui</span>
            </p>

        </Content>
         {showCard && <Information Mobile onClose={handleCloseCard} />}

      </main>
    </Container>
  );
}