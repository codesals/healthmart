import { DetailWrapper, ThemeButton } from "../styles";
// import DeleteButton from "../Components/buttons/DeleteButton";
import { observer } from "mobx-react";
// import productStore from "../stores/productStore";

//destructured props
const ProductDetail = ({ product, setProduct }) => {
  return (
    <DetailWrapper>
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      {/* <DeleteButton productId={product.id}>Delete</DeleteButton> */}
      <ThemeButton onClick={() => setProduct(null)}> Back to list </ThemeButton>
    </DetailWrapper>
  );
};

export default observer(ProductDetail);
