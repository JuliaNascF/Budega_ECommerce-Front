import styled from 'styled-components'
import px2vw from '../../utils/px2vw';

export const Container = styled.header`
grid-area:header;

height: 70px;
width: 100%;

background-color: ${({ theme }) => theme.COLORS.BLUE_GREEN_800};
border-bottom-width: 1px;
border-bottom-style : solid ;
border-bottom-color : ${({ theme }) => theme.COLORS.BLUE_GREEN_800};

display: flex;
justify-content: space-between;
align-items: center;
padding: 0 ${px2vw(123)};
gap: 64px;

.menu{
    width: 50px;
}

.Budega{
    width: 250px;
}

p{
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 16px;
}

.bag{
    cursor: pointer; 
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex ;
    justify-content: center;
    align-items:center;
    gap: 5px;
    font-size: 16px;
;
}



.Avatar{
    width: ${px2vw(36)};
    height:${px2vw(36)};
    border-radius: 50%;
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.COLORS.GRAY_700};
}

@media (max-width: 767px) {
        display: none;
      }



`;

