
import { Container, Content } from "./styles";
import { Header } from '../../../components/Header';
import { ButtonText } from "../../../components/ButtonText";
import { Button } from "../../../components/Button";
import { Information} from "../../../components/Information";
import { useLocation } from "react-router-dom";
import { useState} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import { BsQrCode}  from "react-icons/bs"


export function QRCode() {
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
      <Header />
      <main>
        <div className="back">
          <ButtonText onClick={handleBack} icon={FiArrowLeft}  />
    
        </div>
        <Content>
          <h2>QRCode</h2>
          <p>Aponte a câmera para o QRCode para realizar o pagamento e após validado, enviaremos a confirmação da compra para você!</p>
         
            <BsQrCode/>
           
            <Button onClick={handleConfirm} title="Efetuar pagamento"/>

            <p>Em caso de dúvida clique <span onClick={handleShowCard}>aqui</span>
            </p>

        </Content>
         {showCard && <Information onClose={handleCloseCard} />}

      </main>
    </Container>
  );
}