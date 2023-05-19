import styled from 'styled-components';

export const Container = styled.div`
 background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 5px;
  z-index: 1000;
  position: fixed;
  height: 10%;
  top: 70px;
  width: 300px;
  left: ${props => props.sidebar ? '30' : '-100%'};
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
  padding: 0 20px;
`;