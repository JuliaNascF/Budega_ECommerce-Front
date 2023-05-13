import styled from 'styled-components'
import px2vw from "../../utils/px2vw";


export const Container = styled.button`
 width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BLUE_GREEN_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  height: ${px2vw(40)};
  border: 0;
  padding: ${px2vw(9)};
  margin-top: ${px2vw(16)};
  border-radius: ${px2vw(5)};
  font-weight: 500;
  font-size: ${px2vw(16)};
  
  &:disabled {
    opacity: 0.5;
  }
  
  > svg {
    margin-right: ${px2vw(5)};
  } 


  &.cart {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.BLUE_GREEN_900};
    border: 1px solid #158A8A;
    height: 38px;
    padding: 5px;
    font-size: 16px ;
   
  }
  
`;

