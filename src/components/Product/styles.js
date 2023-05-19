import styled from "styled-components";

export const Container = styled.div`
 cursor: pointer;
  width: 270px;
  height:  300px;
  display: flex;
  flex-direction: column;
  align-items:center;
  margin-bottom: 24px;
  padding: 32px;
  border-radius: 16px;
 
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.05),
            0px 6px 10px rgba(0, 0, 0, 0.0325794),
            0px 3px 5px rgba(0, 0, 0, 0.025),
            0px 1px 2px rgba(0, 0, 0, 0.0174206);


  
    img{
    width: 160px;
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