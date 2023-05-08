

import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Container = styled.div`

   width: 100%;
   display: flex;
   align-items: center;

   background-color: ${({ theme }) => theme.COLORS.WHITE};
   color: ${({ theme }) => theme.COLORS.BLACK};

   margin-bottom: 2px;
   border-radius: 10px;

   > input{
    height: 40px;
    width: 100%;

    padding: 12px;
    

    color: ${({ theme }) => theme.COLORS.GRAY_900};
    background: transparent;
    border: 0;

    &::placeholder{
        color: ${({ theme }) => theme.COLORS.GRAY_700};

    }

}

> svg{
  margin-left: 16px;

}



`;