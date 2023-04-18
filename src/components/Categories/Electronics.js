import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Header from "../Header";

const TitleStyled = styled.div`
  width: 90vw;
  margin: 10px auto;
  border-bottom: 1px solid #000;
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: bold;
`;

const ElectronicStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin: 0 auto;
  text-align: center;
  width: 90vw;
  padding: 20px;

  .electronics {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 1px solid #000;
    padding: 10px;
    width: 22vw;
    border-radius: 5px;
    img {
      width: 8vw;
      height: 10vw;
      margin-bottom: 10px;
    }
    h5 {
      text-align: center;
    }
    p {
      display: flex;
      justify-content: center;
      width: 2vw;
    }
  }
`;

const Electronics = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  return (
    <>
      <Header />
      <TitleStyled>Electronics</TitleStyled>
      <ElectronicStyled>
        {products.map((product) => {
          return (
            <div className="electronics" key={product.id}>
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <p>⭐️⭐️⭐️⭐️⭐️ {product.rating.count} rating</p>
              <h4>ab {product.price} €</h4>
            </div>
          );
        })}
      </ElectronicStyled>
    </>
  );
};

export default Electronics;
