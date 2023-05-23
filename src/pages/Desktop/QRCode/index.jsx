
import { Container, Content } from "./styles";
import { Header } from '../../../components/Header';
import { ButtonText } from "../../../components/ButtonText";
import { useState, useEffect } from 'react';
import { api } from '../../../services/api';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import { BsQrCode}  from "react-icons/bs"


export function QRCode() {

 
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
           
          

          <p>Em caso de dúvida clique <span>aqui</span> </p>

        </Content>
      </main>
    </Container>
  );
}