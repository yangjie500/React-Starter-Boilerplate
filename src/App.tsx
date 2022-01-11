import React, {Component} from "react";
import {createGlobalStyle} from "styled-components"

import Overview from "./components/Overview";

const GlobalStyle = createGlobalStyle`
  li {
    list-style-type: none;
    
  }

  div {
    max-width: 350px;
    display: flex;
    flex-direction: column;
  }

  p {
    max-width: 250px;
  }

  span {
    margin-left: auto;
  }
`

class App extends Component {

  render() {
    return (
      <>
        <GlobalStyle />
        <Overview />
      </>
    )
   
  }
}

export default App;