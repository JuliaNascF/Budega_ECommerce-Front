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

    main {
 
  .back{
   
    margin-left: 150px;
    margin-top: 30px;
    svg{
      color:${({ theme }) => theme.COLORS.BLUE_GREEN_900};
    }
  }
}


  `;

export const Content = styled.div`
  max-width: 1130px;
  margin: 0 auto;
  
  display: flex;
 flex-direction:column;
  gap: 20px;
  margin-bottom:40px;

  h2{
    font-size:25px;
  }

  h3{
    
    color:${({ theme }) => theme.COLORS.BLUE_GREEN_900};
    font-size:22px;

  }


 p{
  color:${({ theme }) => theme.COLORS.GRAY_900};
  font-size: 16px;

 }

  .noOrder{
    font-size: 35px;
  color: ${({ theme }) => theme.COLORS.GRAY_900};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 20%;
  }

  .loading-spinner {
   margin-top: 20%;
   margin-left: 50%;
 animation:${spin} 1s linear infinite;
}

   
`;



