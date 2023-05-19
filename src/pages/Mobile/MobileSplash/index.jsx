import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from "./styles";
import logo from "../../../assets/logoMobile.svg"

 export function MobileSplash() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      navigate('/home');
    }
  }, [isLoading, navigate]);
  
  return (
    <Container>
      
      <img src={logo} alt="Logo" className="splash-logo" />


    </Container>

  );
}


