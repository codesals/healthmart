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

  createProduct = (newProduct) => {
    //
  };
}

const productStore = new ProductStore();

export default productStore;
