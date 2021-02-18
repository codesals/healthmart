import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
    text-align: center;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: #672422;
`;

const Description = styled.h3`
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

export {
  GlobalStyle,
  Description,
  Title,
  ShopImage,
  ListWrapper,
  ProductWrapper,
};
