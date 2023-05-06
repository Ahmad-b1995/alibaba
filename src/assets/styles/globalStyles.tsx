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

// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)

// ## Typography

// ### Body Copy

// - Homepage Items: 14px
// - Detail Page: 16px

// ### Fonts

// - Family: [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans)
// - Weights: 300, 600, 800

// ## Icons

// For the icons, you can use a font icon library. Don't worry if the icons that you choose don't look exactly like they do on the design.

// Some suggestions can be found below:

// - [Font Awesome](https://fontawesome.com)
// - [IcoMoon](https://icomoon.io)
// - [Ionicons](https://ionicons.com)
