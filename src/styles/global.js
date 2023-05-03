import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/px2vw";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }

    }


body{
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
}

body , input, button , textarea{
    
    font-family: 'Poppins', sans-serif;
    outline: none;
}

a{
    text-decoration: none;
}

button , a{
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover ,a:hover{
  filter: brightness(0.9);
}
`;

export default Global;
