import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    --gradient-text: -webkit-linear-gradient(45deg, #FB286B 10%, #9000ffad  100%);
    --gradient-bar: linear-gradient(103.22deg, #FB286B -13.86%, #9000FF63 99.55%);
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.87);
    background-color: #000000;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
}
a {
    font-weight: 500;
    font-size: 1.2rem;
    color: #ffffff;
    text-decoration: inherit;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h1 {
    font-size: 3em;
    line-height: 1.1;
}
h2 {
    font-size: 1.3em;
}
body::-webkit-scrollbar {
    width: 0.8em;
}

body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px white;
}

body::-webkit-scrollbar-thumb {

    box-shadow: inset 0 0 6px white;
    border-radius: 10px;
}
`;
export default GlobalStyle;
