import styled, { keyframes } from 'styled-components'



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
  
  height: 95px;
  padding: 20px;
  margin-top: 20px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 15px;


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
    margin-bottom:20px;
  }




  .loading-spinner {
    margin-right: 50px;
    margin-bottom: 25px;
  animation:${spin} 1s linear infinite;
}

&.freightMobile{
  .loading-spinner {
    margin-right: 40px;
    margin-bottom: 20px;
  animation:${spin} 1s linear infinite;
}

 
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

  p{
    margin-bottom:0;
  }

  p1{
   font-size:16px; 
   margin-left: 40px;
  }
}

&.clicked{
  background-color:  ${({ theme }) => theme.COLORS.BLUE_GREEN_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  .title{
  
    >:nth-child(1){
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    >:nth-child(2){
      color: ${({ theme }) => theme.COLORS.WHITE};
      
    }
  }

  svg{
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
}

 `
