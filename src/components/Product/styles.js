import styled from "styled-components";

export const Container = styled.div`
 position:relative;
 cursor: pointer;
  width: 270px;
  height:  290px;
  display: flex;
  flex-direction: column;

  margin-bottom: 24px;
  padding: 32px;
  border-radius: 16px;
 
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.05),
            0px 6px 10px rgba(0, 0, 0, 0.0325794),
            0px 3px 5px rgba(0, 0, 0, 0.025),
            0px 1px 2px rgba(0, 0, 0, 0.0174206);


  
    img{
    width: 180px;
    
   }
  
   .stars{
    svg {
    color: rgba(255, 214, 70, 1);
    font-size: 10px;
  }
  }

    .productDetails{
      position: absolute;
      top: 55%;
      
    }

    h1{
 
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-size: 20px;
   
  }
   p {
    font-size:18px;
    color: ${({ theme }) => theme.COLORS.BLACK}
  }

  p1{
    font-size: 12px;
  }

  .heart{
    position: absolute;
    bottom: 0;
    right: 10%;

  }
`;