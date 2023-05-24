
import { Container, Content } from "./styles";
import { ButtonText } from "../../../components/ButtonText";
import { Information} from "../../../components/Information";
import { Button } from "../../../components/Button";
import { useState} from 'react';
import { useLocation } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";


export function MobilePix() {
  const [showCard, setShowCard] = useState(false);
  const location = useLocation();
  const { cartItems, deliveryMethod, totalPrice } = location.state;

  function handleConfirm() {
    navigate("/confirm", {
      state: {
        cartItems,
        deliveryMethod,
        totalPrice,
        paymentMethod: "Pix"
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
          <h2>Pix </h2>
          <p>Use a chave pix para realizar o pagamento e após validado, enviaremos a confirmação da compra para você!</p>
         
            <h3>67.801.575/0001-84  <span>Tipo CNPJ</span></h3>
           
             <Button onClick={handleConfirm} title="Efetuar pagamento"/>
             <p>Em caso de dúvida clique <span onClick={handleShowCard}>aqui</span>
            </p>

        </Content>
         {showCard && <Information Mobile onClose={handleCloseCard} />}

      </main>
    </Container>
  );
}