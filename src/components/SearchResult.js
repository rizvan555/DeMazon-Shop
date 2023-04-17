import { useEffect, useState } from "react";
import styled from "styled-components";
import Result from "./Result";

const SearchStyled = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 25vw;
    height: 4.8vh;
    border-radius: 5px 0 0 5px;
    border: none;
  }
  button {
    width: 6vw;
    height: 5vh;
    border-radius: 5px;
    border: none;
    border-radius: 0 5px 5px 0;
    background-color: orange;
  }
`;

const SearchResult = () => {
  const [products, setProducts] = useState(null);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(null); //axtarisdan sonra alinan neticedir "filtered"

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchClick = () => {
    if (products) {
      const myProduct = products.find((product) => product.title === search);
      setFiltered(myProduct);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };
  return (
    <>
      <SearchStyled>
        <input
          type="text"
          placeholder=" Search"
          onChange={handleSearch}
          value={search}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearchClick}>Search</button>
      </SearchStyled>
      {filtered && <Result product={filtered} />}
    </>
  );
};

export default SearchResult;
