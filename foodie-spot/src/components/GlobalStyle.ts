import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #1f1f1f; /* Dark background for the app */
    color: #f1f1f1; /* Light text color for contrast */
  }

  h1, h2, h3 {
    color: #f8a04b; /* Orange headers */
    text-align: center;

  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p {
    line-height: 1.6;
  }
`;

export default GlobalStyle;
