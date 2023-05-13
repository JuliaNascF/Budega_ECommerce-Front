import styled from "styled-components";

 export const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  

  >h1{
    margin-top:20px;
    color:${({ theme }) => theme.COLORS.BLACK}
    
  }

   p{
    margin-left:2px;
    font-size:16px;
    color:${({ theme }) => theme.COLORS.BLACK}
  }
 
`;