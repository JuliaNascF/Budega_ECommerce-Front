import styled, {keyframes} from "styled-components";

const loadingAnimation= keyframes`
0% {
  opacity: 0.5; /* Inicia com 50% de opacidade */
}
50% {
  opacity: 1; /* Aumenta para 100% de opacidade */
}
100% {
  opacity: 0.5; /* Retorna para 50% de opacidade */
}

` ;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  img.splash-logo {
    animation: ${loadingAnimation} 1s infinite;
   
  }
`;