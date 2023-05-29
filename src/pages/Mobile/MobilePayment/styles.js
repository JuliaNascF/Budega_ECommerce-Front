import styled from 'styled-components'

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

    h3{
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
 
 .paymentMethod{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  justify-content: center;
 
  img{
    cursor: pointer;
   
  }
 }

 h2{
  font-size:20px;
  width: 300px;
  text-align:left;
  margin-bottom:40px;
 }

 p{
  color:${({ theme }) => theme.COLORS.GRAY_900};
  font-size: 16px;
  margin-bottom:20px;

  span{
    cursor:pointer;
    color:${({ theme }) => theme.COLORS.BLUE_GREEN_900};
  }
 }
  
`;



