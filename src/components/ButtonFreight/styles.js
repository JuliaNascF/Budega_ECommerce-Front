import styled, { keyframes } from 'styled-components'
import px2vw from "../../utils/px2vw";


const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.button`
 width: 460px;
  display: flex; 
  align-items: center;
  
  gap: 12px;
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.BLUE_GREEN_900};
  border: 2px solid #158A8A;
  
  height: ${px2vw(70)};
  padding: ${px2vw(20)};
  margin-top: ${px2vw(16)};
  margin-bottom: ${px2vw(20)};
  border-radius: ${px2vw(5)};
  font-weight: 500;
  font-size: ${px2vw(16)};


  > svg {
    margin-right: ${px2vw(5)};
  } 

  .title{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  p{
  
    font-size:14px;
    text-align:left;
  }

  p1{
    margin-left: ${px2vw(45)}
  }



  .loading-spinner {
  animation:${spin} 1s linear infinite;
}



 `
