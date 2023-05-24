import { Container, CloseButton, CardContent, CardText } from "./styles"
import React, { useEffect, useState } from "react";

export function Information({ onClose, Mobile=false }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (!isVisible) {
            onClose();
        }
    }, [isVisible, onClose]);


    return (
        <Container   className={Mobile ? 'Mobile' : ''} isVisible={isVisible} >
            <CloseButton onClick={() => setIsVisible(false)}>X</CloseButton>
            <CardContent>

                <CardText>
                A funcionalidade de pagamento nesta plataforma não está em operação.
                 O objetivo da aplicação é demonstrar minhas habilidades como desenvolvedor, 
                 portanto, a etapa de pagamento não está ativa. No entanto, você pode navegar e visualizar os produtos disponíveis no ecommerce.
                  Ao clicar em "pagar", a ação será registrada no seu histórico de compras, mas o pagamento não será processado.
                </CardText>
            </CardContent>
        </Container>
    );
}