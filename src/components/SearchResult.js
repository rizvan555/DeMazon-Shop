import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";
import { useNavigate } from "react-router-dom";

const SearchStyled = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 25vw;
    height: 4.8vh;
    border-radius: 5px 0 0 5px;
    border: none;
    ::placeholder {
      font-size: 10px;
    }
  }
  button {
    width: 6vw;
    height: 5vh;
    border-radius: 5px;
    border: none;
    border-radius: 0 5px 5px 0;
    background-color: orange;
    font-size: 10px;
  }
`;
const ResultStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
  }
  img {
    width: 20vw;
  }
`;

const SearchResult = () => {
  const [products, setProducts] = useState(null);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(null); //axtarisdan sonra alinan neticedir "filtered"
  const navigator = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  const handleSearchClick = () => {
    if (products) {
      const myProduct = products.find((product) => product.title === search);
      navigator(`/bestseller/${myProduct.id}`);
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
          onChange={(event) => setSearch(event.target.value)}
          value={search}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearchClick}>Search</button>
      </SearchStyled>
      <ResultStyled>
        {filtered &&
          filtered.map((product) => {
            return (
              <div key={product.id}>
                <ProductItem
                  title={product.title}
                  image={product.image}
                  rating={product.rating}
                  price={product.price}
                  id={product.id}
                  description={product.description}
                />
              </div>
            );
          })}
      </ResultStyled>
    </>
  );
};

export default SearchResult;
