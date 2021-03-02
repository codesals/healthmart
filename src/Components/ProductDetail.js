import { DetailWrapper, ThemeButton } from "../styles";

//destructured props
const ProductDetail = ({ product, setProduct }) => {
  return (
    <DetailWrapper>
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <ThemeButton onClick={() => setProduct(null)}> Back to list </ThemeButton>
    </DetailWrapper>
  );
};

export default ProductDetail;
