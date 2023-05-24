
import { Container, Content } from "./styles";
import { ButtonText } from "../../../components/ButtonText";
import { Information} from "../../../components/Information";
import { Button } from "../../../components/Button";
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import { BsQrCode}  from "react-icons/bs"


export function MobileQRCode() {
  const [showCard, setShowCard] = useState(false);
  const location = useLocation();
  const { cartItems, deliveryMethod, totalPrice } = location.state;

  function handleConfirm() {
    navigate("/confirm", {
      state: {
        cartItems,
        deliveryMethod,
        totalPrice,
        paymentMethod: "QRCode"
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
          <ButtonText onClick={handleBack} icon={FiArrowLeft} />
            <h3>Pagamento</h3>
        </div>
        <Content>
          <h2>QRCode</h2>
          <p>Aponte a câmera para o QRCode para realizar o pagamento e após validado, enviaremos a confirmação da compra para você!</p>
         
            <BsQrCode/>
           
          
            <p>Em caso de dúvida clique <span onClick={handleShowCard}>aqui</span>
            </p>

            <Button onClick={handleConfirm} title="Efetuar pagamento"/>

        </Content>
         {showCard && <Information Mobile onClose={handleCloseCard} />}

      </main>
    </Container>
  );
}