import styles from "./styles";

const products = [
  {
    name: "Dairy-free Ice Cream",
    price: 2,
    image:
      "https://mfacdn.cachefly.net/chooseveg/2018/06/Mocha-Chocolate-Cookie.png",
  },

  {
    name: "Sesame Corn Thins",
    price: 1,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71gOV9NvtfL._SL1500_.jpg",
  },
];

function ProductsList() {
  return products.map((product) => (
    <>
      <div style={styles.list}>
        <div style={styles.product}>
          <h3>{product.name}</h3>
          <img src={product.image} style={styles.productImages} />
          <h4>{product.price} KD</h4>
        </div>
      </div>
    </>
  ));
}

export default ProductsList;
