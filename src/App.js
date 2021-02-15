import image from "./healthy-food-bowl.jpg";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1> Welcome to Health Mart!</h1>
      <h3>Your destination for healthy food shopping!</h3>
      <img src={image} alt={"Healthy food!"} style={{ width: "80%" }} />
    </div>
  );
}

export default App;
