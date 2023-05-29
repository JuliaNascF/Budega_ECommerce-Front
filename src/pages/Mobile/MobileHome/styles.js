import styled, { keyframes } from 'styled-components';
import background from "../../../assets/ImgMobile.png"
import px2vw from "../../../utils/px2vw";



const barsRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-180deg);
  }
`;

const timesRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

export const Container = styled.div`
 
  position: relative;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 0 auto auto;
  grid-template-areas:
    "headerPage"
    "content"
    "footer" ;

  > main {
    grid-area: content;
    overflow-y: auto;
    
    &.no-scroll {
      overflow: hidden;
  }

 
    
     h3 {

    margin-bottom: 20px;
    margin-left: 30px;

    font-size: 22px;
    color:${({ theme }) => theme.COLORS.BLUE_GREEN_800}
  }

  >footer{
    grid-area: footer;
    z-index:2000;
    position:fixed;
    top: 90%;
    left: 44%;
    right: 40%;
    
  }
   
  }
`;

export const Image = styled.div`
 grid-area: headerPage;
 position: relative;
  overflow-y: auto;
  height: 300px;
  background: linear-gradient(
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2)
  ), url(${background});
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
 
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  h2{
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    flex-direction:column;
    align-items: end;
    
    position: absolute;
    left:  ${px2vw(140)};
    bottom:  ${px2vw(20)};
    
    font-family: 'Prata', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 45px;
  }
 
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:  ${px2vw(70)};
    gap: 20px;
   
  }

.menu {
    svg {
        font-size: 30px;
      color: ${({ theme }) => theme.COLORS.WHITE}; /* Adicione a cor desejada */
      cursor: pointer;
      transition:  transform 0.3s ease-in-out;
    }
    &.bars-rotate {
      animation: ${barsRotate} 0.5s forwards;
    }

    &.times-rotate {
      animation: ${timesRotate} 0.5s forwards;
    }
}

`;

export const Content = styled.div`

  margin: 0 auto;
  padding-bottom: 50px;
 
  .HeaderPage{
    height: 100px;
    background:${({ theme }) => theme.COLORS.WHITE};
   h1{
    font-size: 20px;
   }

  
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




