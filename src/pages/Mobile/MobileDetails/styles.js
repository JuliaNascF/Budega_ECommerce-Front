import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    overflow-y: auto;
 
    padding: 30px;
  
    .back{
      svg{
        color:${({ theme }) => theme.COLORS.BLUE_GREEN_900};
      }
     
    }

  }
  `;

export const Content = styled.div`

 .details{
  position: relative;
  margin-top: 25px;
  h1{
  
    color:  ${({ theme }) => theme.COLORS.BLACK};
    font-size: 20px;
    span{
      font-size:16px;
      font-weight:400;
    }
  }
  
  p{
    font-size:12px;
  }
  .heart{
    position: absolute;
    left: 90%;
    top: 0;
  }
 }
   
  .images{
    display: flex;
    overflow-x: auto ;
    width: 400px;
    img{
      width: 350px;
    }
    margin-bottom:50px;
  }

 .price_heart{
  >h2{
    color:  ${({ theme }) => theme.COLORS.BLACK};
    font-size: 20px;
  }
 }

 

  .stars{
    svg {
    color: rgba(255, 214, 70, 1);
    font-size: 15px;
  }
  }

 .relatedProducts{
  display: flex;
  gap: 10px;
  overflow-x: auto;
  

 }

    .buttons{
      margin-top: 50px;
  
    }

    h2{
      margin-top:100px;
      font-size: 20px;
   
      
    }
    .Slider{
     margin-left: 15%;
     width: 220px;
 
    }

 
    h3{
      font-size:15px;
      color:${({ theme }) => theme.COLORS.BLUE_GREEN_800};
      margin: 20px;
    
    }

    > p{
      font-weight: 300;
      font-size: 15px;
      line-height: 20px;
      color:${({ theme }) => theme.COLORS.GRAY_900};
      margin:20px ;

    }
`;



