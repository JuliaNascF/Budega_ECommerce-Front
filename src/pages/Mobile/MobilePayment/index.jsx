
import { Container, Content } from "./styles";
import { FaSpinner } from "react-icons/fa";
import { ButtonText } from "../../../components/ButtonText";
import { useState, useEffect } from 'react';
import { api } from '../../../services/api';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import creditCard from "../../../assets/creditCard.svg";
import methodCard from "../../../assets/card.svg";
import methodPix from "../../../assets/pix.svg";
import methodBoleto from "../../../assets/boleto.svg";
import methodQRCode from "../../../assets/qrCode.svg";


export function MobilePayment() {

  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  function handleBoleto() {
    navigate("/boleto");
  }

  function handleCard() {
    navigate("/card");
  }

  function handlePix() {
    navigate("/pix");
  }

  function handleQRCode() {
    navigate("/qrcode");
  }



  return (
    <Container>
      <main>
        <div className="back">
          <ButtonText onClick={handleBack} icon={FiArrowLeft}  />
          <h3>Pagamento</h3>
        </div>
        <Content>
         <h2>Selecione o método de pagamento </h2>
          
          <div className="paymentMethod">
            <img onClick={handleBoleto} src={methodBoleto} alt="" />
            <img onClick={handleCard} src={methodCard} alt="" />
            <img onClick={handleQRCode} src={methodQRCode} alt="" />
            <img onClick={handlePix} src={methodPix} alt="" />
          </div>

          <p>Em caso de dúvida clique <span>aqui</span> </p>

        </Content>
      </main>
    </Container>
  );
}