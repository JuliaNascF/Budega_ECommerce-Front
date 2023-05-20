import styled from "styled-components";
import px2vw from "../../../utils/px2vw";  


export const Container = styled.div`
height: 100vh;
position: relative;
 
display: flex;
flex-direction: column;
justify-content: center;

`;

export const Form = styled.form`
margin: 40px;

display: flex;
flex-direction: column;
align-items: center;
text-align: center;


img{
    margin-bottom:${px2vw(50)};

}

>p {
    margin-top:30px;
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_700};

    span{
      cursor:pointer;
        color:rgba(21, 138, 138, 1);
;
    }

 
}


`;


