
import px2vw from '../../utils/px2vw';
import styled, { keyframes } from 'styled-components';


const barsRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-180deg);
  }
`;

const timesRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

export const Container = styled.header`
grid-area:header;
position: relative;
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

.menu {
    svg {
        font-size: 30px;
      color: ${({ theme }) => theme.COLORS.WHITE}; /* Adicione a cor desejada */
      cursor: pointer;
      transition:  transform 0.3s ease-in-out;
    }
    &.bars-rotate {
      animation: ${barsRotate} 0.5s forwards;
    }

    &.times-rotate {
      animation: ${timesRotate} 0.5s forwards;
    }
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

