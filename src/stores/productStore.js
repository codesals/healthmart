// import { action, makeObservable, observable } from "mobx";
import { makeAutoObservable } from "mobx";
import axios from "axios";

class ProductStore {
  products = [];

  constructor() {
    // makeObservable(this, {
    //   products: observable,
    //   createProduct: action,
    // });

    makeAutoObservable(this);
  }

  deleteProduct = (productId) => {
    this.products = this.products.filter((product) => product.id !== productId);
  };

  fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/products");
      this.products = res.data;
    } catch (error) {
      console.error("ProductStore -> fetchProducts -> error", error);
    }
  };
}

const productStore = new ProductStore();
productStore.fetchProducts();

export default productStore;
