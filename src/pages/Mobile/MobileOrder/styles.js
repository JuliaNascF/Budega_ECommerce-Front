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
 flex-direction:column;
  gap: 10px;
  margin: 30px;

  .order{
    border-bottom: 1px solid #AEA3A3;
    .price{
      margin-bottom:10px;
    }
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



