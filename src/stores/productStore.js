import products from "../products";
// import { action, makeObservable, observable } from "mobx";
import { makeAutoObservable } from "mobx";
class ProductStore {
  products = products;

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
}

const productStore = new ProductStore();

export default productStore;
