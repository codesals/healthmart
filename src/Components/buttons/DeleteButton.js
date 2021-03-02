import { DeleteButtonStyled } from "../../styles";
import productStore from "../../stores/productStore";

const DeleteButton = ({ productId }) => {
  const handleDelete = () => {
    productStore.deleteProduct(productId);
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
