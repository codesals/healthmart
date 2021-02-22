import ProductItem from "./ProductItem";
import products from "../products";
import { ListWrapper } from "../styles";
import SearchBar from "./SearchBar";
import { useState } from "react";

const ProductList = () => {
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(query)
  );

  return (
    <>
      <SearchBar findItems={setQuery} />
      <ListWrapper>
        {filteredProducts.map((item) => (
          <ProductItem product={item} key={item.id} />
        ))}
      </ListWrapper>
    </>
  );
};

export default ProductList;
