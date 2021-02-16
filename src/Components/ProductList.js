import ProductItem from "./ProductItem";
import products from "../products";

const ProductList = () => {
  return products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
};

export default ProductList;
