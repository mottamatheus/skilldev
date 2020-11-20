import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #fcfcfc;
    }

    body, input, button {
        font-family: 'Fira Sans', sans-serif;
    }


    button {
        cursor: pointer;
    }
`;
