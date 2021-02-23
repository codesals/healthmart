// Styling
import { ThemeButton, Logo, NavItem } from "../styles";
import logo from "../health-mart-logo.png";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      <Logo className="navbar-brand" to="/">
        <img src={logo} alt="healthmart logo" width="50" />
      </Logo>
      <div className="navbar-nav ml-auto">
        <NavItem
          className="nav-item"
          to="/products"
          style={{
            padding: "0.25em 1em",
          }}
        >
          Products
        </NavItem>
        <ThemeButton className="nav-item" onClick={props.toggleCurrentTheme}>
          {props.currentTheme.buttonTitle}
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
