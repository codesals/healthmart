// import { getSuggestedQuery } from "@testing-library/react";
import Home from "./Components/Home";
import ProductList from "./Components/ProductList";
import { GlobalStyle, ThemeButton, Logo } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import logo from "./health-mart-logo.png";

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
        <Logo to="/">
          <img src={logo} alt="healthmart logo" width="50" />
        </Logo>

        <Link to="/products" style={{ margin: "1.25em", float: "right" }}>
          Products
        </Link>
        <Switch>
          <Route path={["/", "/home"]} exact>
            <Home />
          </Route>
          <Route path="/products" exact>
            <ProductList />
          </Route>
          <Route path={["/404", "not-found"]} exact>
            <div style={{ textAlign: "center" }}>
              <h1>404</h1>
              <h3>Page not found!</h3>
              <Link to="/">
                <b>Home</b>
              </Link>
            </div>
          </Route>
          <Route>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
