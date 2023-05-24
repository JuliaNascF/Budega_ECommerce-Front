
import { Container, Content } from "./styles";
import { ButtonText } from "../../../components/ButtonText";
import { Button } from "../../../components/Button";
import { useState, useEffect } from 'react';
import { api } from '../../../services/api';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";


export function MobilePix() {

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
           
             <Button title="Copiar chave"/>

          <p>Em caso de dúvida clique <span>aqui</span> </p>

        </Content>
      </main>
    </Container>
  );
}