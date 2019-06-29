import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body {
        margin: 0 auto;
        width: 50%;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:14px;
        background-color: white;
    }
`;

export default globalStyles;
