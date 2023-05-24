import styled, { keyframes } from 'styled-components'


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

  
   
`;



