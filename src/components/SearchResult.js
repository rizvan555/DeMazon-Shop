import { useEffect, useState } from "react";
import styled from "styled-components";

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

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  const handleSearchClick = () => {
    if (products) {
      const myProduct = products.filter((product) => product.title === search);
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
              <>
                <img src={product.image} alt="" />
                <h3>{product.title}</h3>
                <p>⭐️⭐️⭐️⭐️⭐️ {product.rating.rate}</p>
                <h6>€ {product.price}</h6>
              </>
            );
          })}
      </ResultStyled>
    </>
  );
};

export default SearchResult;
