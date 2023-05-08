import styled from "styled-components";

export const Container = styled.div`
 cursor: pointer;
  width: 200px;
  height:  230px;
  display: flex;
  flex-direction: column;
  align-items:center;
  margin-bottom: 24px;
  padding: 32px;
  border-radius: 16px;
 
  box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.08), 0px 6px 5px rgba(0, 0, 0, 0.05), 0px 2px 2px rgba(0, 0, 0, 0.03);


  
    img{
    width: 100px;
   }
  
    

    h1{
    margin-bottom: 8px;
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-size: 12px;
   
  }
   p {
    
    margin-top: 15px;
    margin-bottom: 15px;
    color: ${({ theme }) => theme.COLORS.BLACK}
  }
`;