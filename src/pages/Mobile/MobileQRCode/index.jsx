
import { Container, Content } from "./styles";
import { ButtonText } from "../../../components/ButtonText";
import { Information} from "../../../components/Information";
import { useState, useEffect } from 'react';
import { api } from '../../../services/api';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import { BsQrCode}  from "react-icons/bs"


export function MobileQRCode() {
  const [showCard, setShowCard] = useState(false);

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

        </Content>
         {showCard && <Information Mobile onClose={handleCloseCard} />}

      </main>
    </Container>
  );
}