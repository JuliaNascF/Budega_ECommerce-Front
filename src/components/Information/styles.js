import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
export const Container = styled.div`
  position: fixed;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 200px;
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 999;
  animation: ${props => (props.isVisible ? fadeIn : fadeOut)} 0.3s ease-in-out;

  &.Mobile{
    width: 300px;
    height: 300px;
    position: fixed;
  top: 80%;
  left: 50%;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;


 export const CardText = styled.p`
  text-align: center;
  font-size:14px;
`;

 export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
`;
