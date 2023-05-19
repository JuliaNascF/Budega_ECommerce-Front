import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 70px auto;
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

    .back{
      svg{
        color:${({ theme }) => theme.COLORS.BLUE_GREEN_900};
      }
      margin-left: 150px;
    }

  }
  `;

export const Content = styled.div`
  max-width: 1130px;
  margin: 0 auto;
  
  h1{
    color:  ${({ theme }) => theme.COLORS.BLACK};
  }
   

  @media(max-width:1130px){
  max-width: 800px;
  margin: 0 auto;
  }

  

 .price_heart{
  height: 38px;
  display: flex;
  justify-content: space-between;

  >:last-child{
    margin-top: 20px;
  }
 }

.selected-image{
  img{
    width: 600px;
   

  }
}

  .image-gallery{
    display: flex;
    gap: 20px;
    margin-top:20px;

  }

  .stars{
    svg {
    color: rgba(255, 214, 70, 1);
  }
  }

  .thumbnails{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 40px;
    img{
      cursor:pointer;
      width: 100px;
    }

    img.active{
      border: 1px solid #DBDBDB;
      border-radius: 3px
    }

  }

    .buttons{
      margin-top: 50px;
  
    }

    h2{
      margin-top:100px;
     
    }

    .relatedProducts{
      display: flex;
      gap: 15px;
      padding: 20px;
    }

    h3{
      font-size:15px;
      color:${({ theme }) => theme.COLORS.BLUE_GREEN_800};
      margin-left: 20px;
    
    }

    > p{
      font-weight: 300;
      font-size: 15px;
      line-height: 20px;
      color:${({ theme }) => theme.COLORS.GRAY_900};
      margin:20px ;

    }
`;



