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
    margin-top: 30px;
  }
}


  `;

export const Content = styled.div`
  max-width: 1130px;
  margin: 0 auto;
  
  display: flex;
  justify-content:center;
  flex-wrap :wrap ;
  gap: 20px;
 
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

  .favorite{
    cursor: pointer;
    display:flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 40px;
    position:relative;
  
    p{
      position: absolute;
      top: 100%;
      font-size:20px;
      color: ${({ theme }) => theme.COLORS.GRAY_900};
    }

  
   
    button{
      color: ${({ theme }) => theme.COLORS.GRAY_900};
      position: absolute;
      right:5%;
      top:8%;
    }
  }

  img{
    width: 300px;
  }

    h1{
      font-size: 20px;
      color:${({ theme }) => theme.COLORS.BLUE_GREEN_800};
      margin-top: 20px;
    }

    .loading-spinner {
   margin-top: 30%;
 animation:${spin} 1s linear infinite;
}

   
`;



