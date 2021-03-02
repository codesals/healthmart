import ProductItem from "./ProductItem";
// import products from "../products";
import { ListWrapper } from "../styles";
import SearchBar from "./SearchBar";
import { useState } from "react";

import productStore from "../stores/productStore";
import { observer } from "mobx-react";

const ProductList = ({ setProduct }) => {
  const [query, setQuery] = useState("");

  // const filteredProducts = productStore.products.filter((item) =>
  //   item.name.toLowerCase().includes(query)
  // );

  const filteredProducts = productStore.products.filter((item) =>
    item.name.toLowerCase().includes(query)
  );

  return (
    <>
      <SearchBar findItems={setQuery} />
      <ListWrapper>
        {filteredProducts.map((item) => (
          <ProductItem product={item} key={item.id} setProduct={setProduct} />
        ))}
      </ListWrapper>
    </>
  );
};

export default observer(ProductList);
// export default ProductList;
