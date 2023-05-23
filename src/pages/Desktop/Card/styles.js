import styled from 'styled-components'


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
  align-items: center;
 flex-direction:column;
  gap: 20px;

  h2{
    font-size:25px;
  }

 img{
  cursor:pointer;
 }

 p{
  color:${({ theme }) => theme.COLORS.GRAY_900};
  font-size: 16px;

  span{
    cursor:pointer;
    color:${({ theme }) => theme.COLORS.BLUE_GREEN_900};
  }
 }

  @media(max-width:1130px){
  max-width: 800px;
  margin: 0 auto;
  }

button{
  width: 400px;
}
   
`;



