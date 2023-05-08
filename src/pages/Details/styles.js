import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";
  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 40px 0;
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb{
      background-color: ${({ theme }) => theme.COLORS.BLUE_GREEN_900};
      border-radius: 8px;
    }

    p{
        margin-bottom: 15px
    }

  }
`;

export const Content = styled.div`
  max-width: 1130px;
  margin: 0 auto;

  h1{
    color:  ${({ theme }) => theme.COLORS.BLACK};
  }
`;


  
