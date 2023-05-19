import { createGlobalStyle } from 'styled-components';

function App() {

  return (
    <>
    <GlobalStyle/>
    </>
  )
}

export default App

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap');

    :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;
  }
  
  body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
`