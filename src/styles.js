import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props)=> props.theme.secondaryColor};
    backgroundColor: ${(props)=> props.theme.backgroundColor};
  }
`;

export default GlobalStyle
