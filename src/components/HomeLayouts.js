import styled from "styled-components";
import { useEffect, useState } from "react";

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
    width: 17vw;
    height: 35vh;
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
      {products.map((product, index) => {
        return (
          <div className="layout-box" key={index}>
            <h5>{product.title}</h5>
            <img src={product.image} alt="image" />
          </div>
        );
      })}
    </LayoutStyled>
  );
};

export default HomeLayouts;
