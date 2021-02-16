import styles from "../styles";
import image from "../healthy-food-bowl.jpg";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <div style={styles.text}>
      <h1> Welcome to Health Mart!</h1>
      <h3>Your destination for healthy food shopping!</h3>
      <img src={image} alt={"Healthy food!"} style={styles.shopImage} />
      <div style={styles.list}>
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
