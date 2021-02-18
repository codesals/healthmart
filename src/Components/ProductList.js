import ProductItem from "./ProductItem";
import products from "../products";
import { ListWrapper } from "../styles";

const ProductList = () => {
  const productList = products.map((x) => (
    <ProductItem product={x} key={x.id} />
  ));

  return <ListWrapper>{productList}</ListWrapper>;
};

export default ProductList;
