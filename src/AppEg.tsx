import React, { FC, Component, useState } from "react";

import Header from "./components/Header";
import StyledButton, { FancyButton, CustomPropButton, SubmitButton, AnimatedRotate } from "./components/Button";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { DarkButton } from "./components/Button.styles";

const theme = {
  dark: {
    primary: "#000",
    text: "#fff"
  },
  light: {
    primary: '#fff',
    text: '#000'
  }
}

const GlobalStyle = createGlobalStyle`
  button {
    font-family: "Roboto";
  }
`

// const App: FC<AppProps> = (props) => {
//   const [count, setCount] = useState<number>(0);

//   function handleClick(): void {
//     setCount(prevCount => prevCount + 1)
//   }

//   return (
//     <ThemeProvider theme={theme}>
//       <GlobalStyle />
//       <Header text="Hello World???"/>
//       <h1>Hello World {props.num}</h1>
//       <div>{count}</div>
//       <StyledButton onClick={handleClick}>Increment</StyledButton>
//       <CustomPropButton variant="outline" onClick={handleClick}>Increment</CustomPropButton>
//       <FancyButton>Hello</FancyButton>
//       <SubmitButton>Submit me!!!</SubmitButton>
//       <AnimatedRotate>Lmao</AnimatedRotate>
//       <DarkButton>Theme</DarkButton>
//     </ThemeProvider>
//     )
// }

interface AppState {
  date: Date;
}

interface IAppProp {
  statement: string;
}

class App extends React.Component<IAppProp, AppState> { 
  static defaultProps = {
    statement: "Hello!!!"
  }
  private timerID: number | undefined
  
  state = {
    date: new Date()
  }
    
  componentDidMount() {
    console.log("heelo")
    this.timerID = window.setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount = () => {
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        <p>{this.props.statement}</p>
      </div>
    )
  }
}

export default App;