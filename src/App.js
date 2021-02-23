// import { getSuggestedQuery } from "@testing-library/react";
import Home from "./Components/Home";
import ProductList from "./Components/ProductList";
import NavBar from "./Components/NavBar";
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import { Link } from "react-router-dom";

const theme = {
  light: {
    mainColor: "darkred", // main font color
    backgroundColor: "white", // main background color
    otherColor: "grey",
    buttonTitle: "Dark Mode",
  },

  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    otherColor: "grey",
    buttonTitle: "Light Mode",
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
        <NavBar
          currentTheme={currentTheme}
          toggleCurrentTheme={toggleCurrentTheme}
        />
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
