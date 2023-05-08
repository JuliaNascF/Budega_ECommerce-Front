import styled from 'styled-components'
import px2vw from "../../utils/px2vw";


export const Container = styled.button`
 width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BLUE_GREEN_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  height: ${px2vw(44)};
  border: 0;
  padding: ${px2vw(12)};
  margin-top: ${px2vw(16)};
  border-radius: ${px2vw(10)};
  font-weight: 500;
  font-size: ${px2vw(16)};
  
  &:disabled {
    opacity: 0.5;
  }
  
  > svg {
    margin-right: ${px2vw(5)};
  } 


  
`;

