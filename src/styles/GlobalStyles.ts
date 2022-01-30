import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html,
#root,
body {
  width: 100vw;
  height: 100%;

  font-size: 16px;
  background-color: #192720;
}

html, #root, body, * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar-thumb {
  background-color: #CCCCCC;
  border-radius: 1rem;
}

::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.5rem;
  }

::-webkit-scrollbar-thumb {
  background-color: #e7e7e7;
  border-radius: 1rem;
  }

@media screen and (max-width: 768px) {
  html, body {
    font-size: 11px;
  }
}

@media screen and (max-width: 1024px) {
  html,body {
    font-size: 12px;
  }
}

@media screen and (max-width: 1440px) {
  html, body {
    font-size: 13px;
  }
}
`;
export default GlobalStyles;
