import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* CSS reset, global classes */
  * {
    margin: 0;
    padding: 0;
  }
  html, body {
    font-family: Arial, Helvetica, sans-serif!important;
    font-size: 12px;
    color: #c6d4df;
    height: 100%;
    width: 100%;
    background: #1B2838;
  }
  html {
    overflow: hidden;
  }
  body {
    min-width: 320px;
    overflow: auto;
  }
  #root {
    width: 100%;
    margin: 0 auto;
  }
  img {
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    height: 21px;
    width: 14px;
    background: transparent;
    z-index: 500;
    overflow: visible;
  }
  ::-webkit-scrollbar-corner {
    background: #202020;
  }
  ::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: #434953;
    border-radius: 10px;
    z-index: 500;
    border: 4px solid rgba(0,0,0,0);
    background-clip: padding-box;
    transition: background-color .32s ease-in-out;
    margin: 4px;
    min-height: 32px;
    min-width: 32px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #4E5157;
  }

  /* Responsiveness */
  @media screen and (max-width: 940px) {
    #root {
      max-width: 940px;
      width: auto;
      margin: 0 2%;
    }
  }
`;
