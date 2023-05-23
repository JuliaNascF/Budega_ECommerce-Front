
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
  height: 100vh;
  display: grid;
  grid-template-rows: 70px auto;
  grid-template-areas: 
  "header"
  "content";
 
    main {
      grid-area: content;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb{
      background-color: ${({ theme }) => theme.COLORS.BLUE_GREEN_900};
      border-radius: 8px;
    display: flex;
    justify-content: center; 
    align-items: center; 

  }
  .back{
    svg{
      color:${({ theme }) => theme.COLORS.BLUE_GREEN_900};
    }
    margin-left: 150px;
    margin-top: 10px;
  }
}


  `;

export const Content = styled.div`
  max-width: 1130px;
  margin: 0 auto;
  
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
 }
 

 .priceCart{
   display: flex;
   gap: 200px;
   margin-top:20px;
   
   .text{
    h2{
      margin-top:20px;
    }
   }

   .price{
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

  @media(max-width:1130px){
  max-width: 800px;
  margin: 0 auto;
  }

  .home{
    display: flex;
    gap: 20px;

   
     
    }

    h1{
      font-size: 25px;
      color:${({ theme }) => theme.COLORS.BLUE_GREEN_800};
      margin-top: 20px;
    }

    h2{
      margin-top:20px;
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



