import styled from "styled-components";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const HeaderStyled = styled.header`
  .top-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgb(0, 0, 0, 0.4);
    color: #fff;
    .title {
      text-decoration: none;
      color: #fff;
      font-size: 40px;
      font-weight: bold;
    }
    .search-box {
      display: flex;
      align-items: center;
      input {
        width: 25vw;
        height: 4.8vh;
        border-radius: 5px 0 0 5px;
        border: none;
      }
      button {
        width: 5vw;
        height: 5vh;
        border-radius: 5px;
        border: none;
        border-radius: 0 5px 5px 0;
        background-color: orange;
      }
    }
  }
`;

const Header = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <HeaderStyled>
      <div className="top-container">
        <div className="title">
          <Link className="title" to="/">
            DeMazon
          </Link>
        </div>
        <div className="search-box">
          <input type="text" placeholder=" Search" onChange={handleSearch} />
          <button>Search</button>
        </div>
        <Navbar />
      </div>
    </HeaderStyled>
  );
};

export default Header;
