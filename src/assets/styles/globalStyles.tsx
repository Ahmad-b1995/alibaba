import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
 
    body {
        color: $bg-color;
        margin: 0;
        padding: 0;
        font-family: 'Nunito Sans', sans-serif;
        background-color: ${(props: any) => props.theme.backgroundColor};
        font-size: 14px;
    }
`;

export default GlobalStyles;