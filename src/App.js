import { getSuggestedQuery } from "@testing-library/react";
import image from "./healthy-food-bowl.jpg";
import ProductsList from "./products";
import styles from "./styles";

function App() {
  return (
    <div style={styles.text}>
      <h1> Welcome to Health Mart!</h1>
      <h3>Your destination for healthy food shopping!</h3>
      <img src={image} alt={"Healthy food!"} style={styles.shopImage} />
      <div style={styles.list}>
        <ProductsList />
      </div>
    </div>
  );
}

export default App;
