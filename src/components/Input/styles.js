

import styled from 'styled-components';

export const Container = styled.div`

   width: 100%;
   display: flex;
   align-items: center;
 

   background-color: ${({ theme }) => theme.COLORS.WHITE};
   color: ${({ theme }) => theme.COLORS.BLACK};

   margin-bottom: 2px;
   border-radius: 20px;

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
  margin-right: 15px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
}

&.login{
  background: none;
  color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border-bottom: 1px solid #FFFFFF;
    margin: 10px; 
    border-radius: 8px;
   
    
    > input{
      color: ${({ theme }) => theme.COLORS.WHITE};
          &::placeholder{
              color: ${({ theme }) => theme.COLORS.WHITE};
      
          }
    }
}

&.loginMobile{
  background: none;
  color: ${({ theme }) => theme.COLORS.BLUE_GREEN_900};
    background: transparent;
    border-bottom: 2px solid #158A8A;
    margin: 10px; 
    border-radius: 8px;
   
    > input{
      color: ${({ theme }) => theme.COLORS.GRAY_900};
          &::placeholder{
              color: ${({ theme }) => theme.COLORS.GRAY_700};
      
          }
    }
}


&.quantity{

    background-color: #E3E3E3;
    width: 40px;
    border-radius: 8px;
   
   
    
    > input{
      text-align:center;
      color: ${({ theme }) => theme.COLORS.GRAY_900};
     
    }
}

&.freight{

  background: transparent;
    border-bottom: 2px solid #158A8A;
    width: 200px;
    border-radius: 10px;

> input{
  color: ${({ theme }) => theme.COLORS.GRAY_900};
 
}
}




`;