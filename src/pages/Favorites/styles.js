import styled from "styled-components";


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
  
 
 >p{
  font-size: 35px;
  color: ${({ theme }) => theme.COLORS.GRAY_900};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 30%;

  
 }


  @media(max-width:1130px){
  max-width: 800px;
  margin: 0 auto;
  }

  

    h1{
      font-size: 25px;
      color:${({ theme }) => theme.COLORS.BLUE_GREEN_800};
      margin-top: 20px;
    }

   
`;



