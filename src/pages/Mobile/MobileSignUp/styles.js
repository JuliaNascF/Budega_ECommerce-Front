import styled from "styled-components";
import px2vw from "../../../utils/px2vw";  


export const Container = styled.div`
height: 100vh;
position: relative;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

export const Form = styled.form`
margin: 40px;

img{
    margin-bottom:${px2vw(50)};
}

display: flex;
flex-direction: column;
align-items: center;
text-align: center;



.backLogin{
    margin-top: 20px;
}


`;


