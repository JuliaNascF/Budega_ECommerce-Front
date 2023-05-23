
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;



export const Container = styled.div`
 width: 100%;

 
.cart{
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
  svg{
    color:${({ theme }) => theme.COLORS.BLUE_GREEN_900};
  }
  >h1{
      color:${({ theme }) => theme.COLORS.BLUE_GREEN_900};
      font-size:25px;
      margin-bottom: 30px;
      margin-top:5px;
     
    
    }
}
    
  

  `;

export const Content = styled.div`
 
 .productValue{
  margin: 40px;
 }
 
 >p{
  font-size: 35px;
  color: ${({ theme }) => theme.COLORS.GRAY_900};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 30%;

  
 }

 .priceDetails{
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content:center;
   margin: 20px;
  
 }
 

 .priceCart{
   display: flex;
    gap: 35px;
   margin-top:20px;
   
   .text{
    h2{
      margin-top:20px;
    }
   }

   .price{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    h2{
      margin-top:20px;
    }
     
   }


   p2{
      display: flex;
      gap: 50px;
      color:${({ theme }) => theme.COLORS.GRAY_900};
      font-size:18px;
    }

 }

 

  .home{
   
    display: flex; 
   flex-direction: column;
   

      svg{
        color:${({ theme }) => theme.COLORS.BLUE_GREEN_900};
   
    }
  }
    h1{
      font-size: 25px;
      color:${({ theme }) => theme.COLORS.BLUE_GREEN_800};
      margin-top: 20px;
    }

    h2{
      margin-top: 20px;
      font-size: 22px;
      color:${({ theme }) => theme.COLORS.GRAY_900};
    }

   .pay{
    margin:30px;
   }
    
   .loading-spinner {
   
    margin-left: 50%;
    margin-top: 30%;
  animation:${spin} 1s linear infinite;
}

`;



