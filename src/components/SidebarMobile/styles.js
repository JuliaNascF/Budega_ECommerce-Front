import styled from 'styled-components';

export const Container = styled.div`
 background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 5px;
  z-index: 1000;
  position: fixed;
  height: 60%;
  top: 70px;
  width: 300px;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;


  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  padding:  20px;
`;