// import { getSuggestedQuery } from "@testing-library/react";
import Home from "./Components/Home";
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "grey", // main font color
  backgroundColor: "white", // main background color
  green: "darkgreen",
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
