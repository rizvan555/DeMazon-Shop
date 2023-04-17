import styled from "styled-components";
import { useEffect, useState } from "react";
import Header from "./Header";

const LayoutStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
  .layout-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    background-color: #fff;
    text-align: center;
    padding: 10px 20px;
  }
  img {
    width: 20vw;
    height: 30vh;
  }
`;

const HomeLayouts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);
  return (
    <LayoutStyled>
      {products.map((product) => {
        return (
          <div className="layout-box">
            <h5>{product.title}</h5>
            <img src={product.image} alt="image" />
          </div>
        );
      })}
    </LayoutStyled>
  );
};

export default HomeLayouts;
