import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  gap:20px;
  align-items:center;
 
  padding: 40px;
  border-bottom: 1px solid #AEA3A3;
  border-left: 1px solid #AEA3A3;
  border-right: 1px solid #AEA3A3;
  border-radius:5px;


.details{
    >:nth-child(2){
        font-size:18px;
        span{
            font-size:14px
        }
    }
}

.quantity{
    display: flex;
   

}
  
    img{
    width: 200px;
   }
  
    

    h1{
    margin-bottom: 8px;
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-size: 18px;
   
  }
   p {
    
    margin-bottom: 5px;
    color: ${({ theme }) => theme.COLORS.BLACK}
  }


  button{
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BLUE_GREEN_900};
    border: none;
    width: 30px;
    box-shadow: inset 2px 2px 5px rgba(255, 255, 255, 0.4), inset -1px -1px 1px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    transform: rotate(179.48deg);
  }
`;