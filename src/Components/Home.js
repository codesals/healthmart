import { Description, Title, ShopImage } from "../styles";
import coverimage from "../healthy-food-bowl.jpg";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <div>
      <Title> Welcome to Health Mart!</Title>
      <Description>Your destination for healthy food shopping!</Description>
      <ShopImage src={coverimage} alt={"Healthy food!"} />
      <ProductList />
    </div>
  );
};

export default Home;
