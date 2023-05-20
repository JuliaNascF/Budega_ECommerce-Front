import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  gap:20px;
  align-items:center;
 
  padding: 40px;
  border-bottom: 1px solid #AEA3A3;
  border-radius:5px;


.details{
  margin-right: 50px;

    >:nth-child(2){
        font-size:18px;
        span{
            font-size:14px
        }
    }
}
  
    img{
    width:  200px;
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

  .quantity{
    display:flex;
   
    button{
      color: ${({ theme }) => theme.COLORS.WHITE};
      background-color: ${({ theme }) => theme.COLORS.BLUE_GREEN_900};
      border: none;
      width: 30px;
      box-shadow: inset 2px 2px 5px rgba(255, 255, 255, 0.4), inset -1px -1px 1px rgba(0, 0, 0, 0.25);
      border-radius: 3px;
      transform: rotate(179.48deg);
      
    }

  }

  .remove{
    position: absolute;
    left: 95%;
    top: 10%;
    svg{
      color: ${({ theme }) => theme.COLORS.GRAY_700};
    }
  }

&.cartMobile{
 padding: 20px;
 padding-right: 0px;

 img{
  width: 100px;
 }

 .details{
  margin-right: 0px;
  width: 150px;
  >:nth-child(3){
        font-size:12px;
      
    }
}
 
.quantity{
    display:flex;
    gap: 20px;
    position: absolute;
    top: 60%;
    left: 70%;
    .inputQuantity{
     position: absolute;
     left: 40%;
    
    }
    
    button{
    
     margin-left: 20px;
      width: 20px;
      height:40px
   
      
    }

  }


  .remove{
    position: absolute;
    left: 85%;
    top: 10%;
    svg{
      color: ${({ theme }) => theme.COLORS.GRAY_700};
    }
  }

 

}
`;