import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
    /* text-align: center; */
    /* justify-content: center; */
  }
`;

const Title = styled.h1`
  text-align: center;
  color: #672422;
`;

const Description = styled.h4`
  text-align: center;
`;

const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  border-radius: 3px;
`;

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const ProductWrapper = styled.div`
  margin: 20px;

  img {
    width: 200px;
  }

  p {
    text-align: center;
    font-weight: bold;

    &.product-price {
      color: ${(props) => props.theme.green};
    }
  }
`;

export const ThemeButton = styled.button`
  /* font-size: 1em; */
  /* margin: 1.25em; */
  /* padding: 0.25em 1em; */
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
  /* float: right; */
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const Logo = styled(Link)`
  padding: 0.75em;
  /* margin: 2%; */

  img {
    width: 4rem;
  }
`;

export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  color: ${(props) => props.theme.mainColor};

  &.active {
    color: ${(props) => props.theme.otherColor};
  }
`;

export {
  GlobalStyle,
  Description,
  Title,
  ShopImage,
  ListWrapper,
  ProductWrapper,
};
