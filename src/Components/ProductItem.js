import styles from "../styles";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <div style={styles.product}>
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.alt} style={styles.productImages} />
      <h4>{product.price} KD</h4>
    </div>
  );
};

export default ProductItem;
