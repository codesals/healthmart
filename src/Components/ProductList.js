import ProductItem from "./ProductItem";
import products from "../products";
import { ListWrapper } from "../styles";

const ProductList = () => {
  return (
    <ListWrapper>
      {products.map((item) => (
        <ProductItem product={item} key={item.id} />
      ))}
    </ListWrapper>
  );
};

export default ProductList;
