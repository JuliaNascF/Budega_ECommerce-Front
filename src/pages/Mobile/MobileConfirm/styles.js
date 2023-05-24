import styled, { keyframes } from 'styled-components'

export const Container = styled.div`

    main {
      .back{
    display: flex;
    gap: 5px;
    margin-left: 20px;
    margin-top: 30px;
    svg{
      color:${({ theme }) => theme.COLORS.BLUE_GREEN_900};
    }

    h2{
      color:${({ theme }) => theme.COLORS.BLUE_GREEN_900};
      font-size:25px;
    }

  }
}
  `;

export const Content = styled.div`

  display: flex;
  align-items: center;
 flex-direction:column;
  gap: 20px;
  margin: 30px;
 


 p{
  color:${({ theme }) => theme.COLORS.GRAY_900};
  font-size: 20px;

 }

 
 
   
`;



