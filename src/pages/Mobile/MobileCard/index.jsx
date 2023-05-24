
import { Container, Content } from "./styles";
import { ButtonText } from "../../../components/ButtonText";
import { useState, useEffect } from 'react';
import { api } from '../../../services/api';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import creditCard from "../../../assets/creditCard.svg";


export function MobileCard() {


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
            <h2>Cartão</h2> 
            <p>Você possui um cartão cadastrado! Para realizar a compra basta clicar no cartão.</p>
           
             <img src={creditCard} alt="" />

  
            <p>Em caso de dúvida clique <span>aqui</span> </p>
  
          </Content>
        </main>
      </Container>
    );
  }