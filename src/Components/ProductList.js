import ProductItem from "./ProductItem";
import products from "../products";

const ProductList = () => {
  return products.map((product) => <ProductItem product={product} />);
};

export default ProductList;
