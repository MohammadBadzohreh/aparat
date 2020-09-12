import { createGlobalStyle } from 'styled-components';
import bgImage from './images/bg.jpg';

const GlobalStyle = createGlobalStyle`


*{
  font-family: IRANSansWeb !important;

}
html,
body {
  height: 100%;
  width: 100%;
  font-size: 14px;

}

  html,
  body {
    font-family: IRANSansWeb !important;
    height: 100%;
    width: 100%;
  }


  body {
    font-family: IRANSansWeb, "Roboto", "Helvetica", "Arial", sans-serif !important;
  }

  body.fontLoaded {
    font-family: IRANSansWeb, "Roboto", "Helvetica", "Arial", sans-serif !important;
  }

  #app {
    font-family: IRANSansWeb, "Roboto", "Helvetica", "Arial", sans-serif !important;
    background-color: #fff;
    background-size:cover;
    background-position:100% 100%;
    background-repeat:no-repeat;

    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: IRANSansWeb, "Roboto", "Helvetica", "Arial", sans-serif !important;
    font-family: IRANSansWeb,Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
