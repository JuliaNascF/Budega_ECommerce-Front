import styled from "styled-components";
import backgroundImg from '../../../assets/img.png'
import px2vw from "../../../utils/px2vw";  


export const Container = styled.div`
height: 100vh;
position: relative;
background: linear-gradient(
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2)
  ), url(${backgroundImg});
 
 background-size: cover; 

 h1{
font-weight: 400;
font-size: 60px;

display: flex;
flex-direction:column;

color: ${({ theme }) => theme.COLORS.WHITE};
position:absolute;
right: 60%;
top: 35%;

span{
font-weight: 300;
font-size: 60px;
line-height: 65px;
text-align: center;
letter-spacing: 0.5em;

}

@media(max-width:1025px){
  
  display: none;
}
 }

 > main{
position:absolute;
left: 65%;
top: 20%;
width: ${px2vw(400)};
height:${px2vw(450)};
background: linear-gradient(0.42deg, rgba(0, 0, 0, 0.35) 0.39%, rgba(0, 0, 0, 0) 101.3%);
backdrop-filter: blur(17.5px);
border: 1px solid #FFFFFF;
border-radius:14px;

@media(max-width:1025px){
  
  height: ${px2vw(650)}; 
  width: ${px2vw(600)};  
  position:absolute;
  left: 30%;
  top: 30%;

}

 }

`;

export const Form = styled.form`
margin: 40px;

img{
    margin-bottom:${px2vw(50)};

  
}

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;



border-radius: 14px;

img{
    width: ${px2vw(200)};
 
}

>p {
    margin-top: ${px2vw(25)};
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    span{
        color:rgba(21, 138, 138, 1);
;
    }

 
}

.backLogin{
    margin-top: 20px;
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.WHITE};
}


`;


