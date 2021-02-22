// Styling
import { SearchBarStyled } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      onChange={(event) => props.findItems(event.target.value)}
      placeholder="Search for a product name"
    />
  );
};

export default SearchBar;
