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
 width: 100%;
  display: flex; 
  align-items: center;
  justify-content:space-between;
  
  gap: 12px;
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.BLUE_GREEN_900};
  border: 2px solid #158A8A;
  
  height: 70px;
  padding: 20px;
  margin-top: 20px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;


  > svg {
    margin-right: 5px;
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




  .loading-spinner {
  animation:${spin} 1s linear infinite;
}

&.freightMobile{
 
  height: 70px;
  .title{
    margin-bottom: 20px;

    >:nth-child(1){
        font-size: 16px;
    }

    >:nth-child(2){
        font-size: 12px;
      
    }
  }

  p1{
   font-size:16px; 
   margin-left: 40px;
  }
}


 `
