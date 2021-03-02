import { ProductWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <ProductWrapper>
      <h4 style={{ textAlign: "center" }}>{product.name}</h4>
      <img
        src={product.image}
        alt={product.alt}
        onClick={() => props.setProduct(product)}
      />
      <p className="product-price">{product.price} KD</p>
      {/* <DeleteButton onClick={() => productStore.deleteProduct(product.id)}> */}
      <DeleteButton productId={product.id}>Delete</DeleteButton>
    </ProductWrapper>
  );
};

export default ProductItem;
