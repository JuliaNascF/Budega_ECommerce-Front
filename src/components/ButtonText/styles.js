import styled from "styled-components";

export const Container = styled.button`
  
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.BLUE_GREEN_700};
  font-size: 16px;
  margin-bottom: 24px;
  gap: 8px;
  display: flex;
  align-items: center;
   

  &.color{
    color: red;
  
  }
`; 