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
 
  .back{
    svg{
      color:${({ theme }) => theme.COLORS.BLUE_GREEN_900};
    }
    color:${({ theme }) => theme.COLORS.BLUE_GREEN_900};
    margin-left: 30px;
    margin-top: 30px;
  }
  `;


export const Content = styled.div`
  max-width: 1130px;
  margin: 0 auto;
  
  display: flex;
  justify-content:center;
  flex-wrap:wrap ;
  gap: 20px;
;
 
 >p{
  font-size: 35px;
  color: ${({ theme }) => theme.COLORS.GRAY_900};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 30%;

  
 }


  .favorite{
    cursor: pointer;
    display:flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 40px;
    position:relative;
  
    p{
      position: absolute;
      top: 100%;
      font-size:20px;
      color: ${({ theme }) => theme.COLORS.GRAY_900};
    }


    button{
      color: ${({ theme }) => theme.COLORS.GRAY_900};
      position: absolute;
      right:4%;
      top:4%;
    }
  }

  img{
    width: 300px;
  }

    h1{
      font-size: 20px;
      color:${({ theme }) => theme.COLORS.BLUE_GREEN_800};
      margin-top: 20px;
    }

    .loading-spinner {
   margin-top: 30%;
 animation:${spin} 1s linear infinite;
}

   
`;



