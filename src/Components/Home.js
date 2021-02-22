import { Description, Title, ShopImage } from "../styles";
import coverimage from "../healthy-food-bowl.jpg";

const Home = () => {
  return (
    <div>
      <Title> Welcome to Health Mart!</Title>
      <Description>Your destination for healthy food shopping!</Description>
      <ShopImage src={coverimage} alt={"Healthy food!"} />
    </div>
  );
};

export default Home;
