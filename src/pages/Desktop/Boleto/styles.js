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

  h3{
    width: 20%;
    color:${({ theme }) => theme.COLORS.BLUE_GREEN_900};
    font-size:25px;
    text-align:center;
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

    .loading-spinner {
   margin-top: 30%;
 animation:${spin} 1s linear infinite;
}

button{
  width: 400px;
}
   
`;



