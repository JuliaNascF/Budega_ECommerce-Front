import styled from "styled-components";
import background from "../../../assets/imgEdit.png"
import px2vw from "../../../utils/px2vw";

export const Container = styled.div`
 

  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 70px auto auto;
  grid-template-areas:
    "header"
    "headerPage"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
    
   
    &::-webkit-scrollbar {
      width: 6px;
     
    }
    &::-webkit-scrollbar-thumb{
      background-color: ${({ theme }) => theme.COLORS.BLUE_GREEN_900};
      border-radius: 8px;
    }
    
     h3 {
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 22px;
    color:${({ theme }) => theme.COLORS.BLUE_GREEN_800}
  }

   
  }
`;

export const Image = styled.div`
 grid-area: headerPage;
 position: relative;
  overflow-y: auto;
  height:  ${px2vw(250)};
  background: linear-gradient(
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2)
  ), url(${background});
 
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  h2{
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    flex-direction:column;
    align-items: end;
    
    position: absolute;
    right:  ${px2vw(140)};
    top:  ${px2vw(60)};
    
    font-family: 'Prata', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    
    
    span{
      font-size: 45px;
    }

  }
 

`;

export const Content = styled.div`

  max-width: ${px2vw(1070)};
  margin: 0 auto;
  padding-bottom: 50px;
 
  .HeaderPage{
    height: 100px;
    background:${({ theme }) => theme.COLORS.WHITE};


  
  }
 
`;


export const Category = styled.div`
   display: flex;
  

  > .products {
    display: flex;
    overflow-x: auto;
    gap: 15px;
    padding: 20px;

    &::-webkit-scrollbar {
      display: none;
     
  }
  }
`;


  

