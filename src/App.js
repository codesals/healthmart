// import { getSuggestedQuery } from "@testing-library/react";
import Home from "./Components/Home";
import { GlobalStyle, ThemeButton } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

const theme = {
  light: {
    mainColor: "darkred", // main font color
    backgroundColor: "white", // main background color
    prices: "grey",
    buttonTitle: "Dark Theme",
  },

  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    prices: "grey",
    buttonTitle: "Light Theme",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState(theme.light);

  const toggleCurrentTheme = () => {
    if (currentTheme === theme.light) setCurrentTheme(theme.dark);
    else setCurrentTheme(theme.light);
  };

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <ThemeButton onClick={toggleCurrentTheme}>
          {currentTheme.buttonTitle}
        </ThemeButton>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
