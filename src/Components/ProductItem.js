import { ProductWrapper } from "../styles";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <ProductWrapper>
      <h4 style={{ textAlign: "center" }}>{product.name}</h4>
      <img src={product.image} alt={product.alt} />
      <p className="product-price">{product.price} KD</p>
    </ProductWrapper>
  );
};

export default ProductItem;
