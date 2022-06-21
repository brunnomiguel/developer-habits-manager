import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    border: 0;
  }

  :root {

    /*green pallet*/
    --green-1: #027373;
    --green-2: #5FE1C9;

    /*gray pallet*/
    --gray-1: #434334;
    --gray-2: #565B65;
    --gray-3: #DADADA;
    --gray-4: #D9D9D9;
    --gray-5: #E8E8E8;
    --gray-6: #EAEAEA;

    /*black pallet*/
    --black-1: #000000;
    --black-2: #1A202C;

    /*link*/
    --blue-link: #2B6CB0;

    /*error*/
    --red-error: #C41431;

    /* white */

    --white-1: #FFFFFF;

    /* gradient pallet */
    --gradient-dark: #2A9898;
    --gradient-light: #5FE1C9;

    /*fonts*/

    --font-share-tech: font-family: 'Share Tech', sans-serif;
    --font-share-mono: font-family: 'Share Tech Mono', monospace;
    --font-lexend: font-family: 'Lexend Deca', sans-serif;
  }

  body {
    background-color: var(--gray-6);
  }

  button {
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-share-tech);
  }

  label {
    font-family:  var(--font-labels);
  }

`;
