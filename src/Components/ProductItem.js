import { ProductWrapper } from "../styles";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <ProductWrapper>
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.alt} />
      <p className="product-price">{product.price} KD</p>
    </ProductWrapper>
  );
};

export default ProductItem;
