import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background-color: #F6F8FC;
    background-image: 
      radial-gradient(at 10% 10%, rgba(224, 231, 255, 0.65) 0px, transparent 40%),
      radial-gradient(at 90% 15%, rgba(238, 225, 255, 0.7) 0px, transparent 45%),
      radial-gradient(at 80% 50%, rgba(219, 234, 254, 0.55) 0px, transparent 50%),
      radial-gradient(at 15% 75%, rgba(237, 233, 254, 0.6) 0px, transparent 45%),
      radial-gradient(at 85% 90%, rgba(224, 231, 255, 0.7) 0px, transparent 50%);
    background-attachment: fixed;
    color: ${props => props.theme.colors.primary1};
    cursor: default;
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.title};
    color: ${props => props.theme.colors.primary1};
    letter-spacing: -0.02em;
  }

  button, input, textarea, select {
    font-family: ${props => props.theme.fonts.main};
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease;
  }

  li {
    list-style: none;
  }

  ::selection {
    background-color: #DDD6FE;
    color: #4338CA;
  }

  /* Custom minimal scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #F1F5F9;
  }
  ::-webkit-scrollbar-thumb {
    background: #CBD5E1;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #94A3B8;
  }
`;

export default GlobalStyles;