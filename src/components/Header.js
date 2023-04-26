import styled from "styled-components";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SearchResult from "./SearchResult";

const HeaderStyled = styled.header`
  .top-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgb(0, 0, 0, 0.5);
    color: #fff;
    .title {
      text-decoration: none;
      color: #fff;
      font-size: 45px;
      font-weight: bold;
    }
  }
`;

const Header = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  const handleSearchClick = () => {
    if (products !== null) {
      const product = products.find((product) => product.title === search);
      setFiltered(product);
      console.log(product);
    }
  };

  return (
    <HeaderStyled>
      <div className="top-container">
        <Link className="title" to="/">
          DeMazon
        </Link>
        <SearchResult />
        <Navbar />
      </div>
    </HeaderStyled>
  );
};

export default Header;
