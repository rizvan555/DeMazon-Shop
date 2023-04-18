import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
const TitleStyled = styled.div`
  display: flex;
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  border-bottom: 1px solid #fff;
  width: 80vw;
  padding: 10px;
  margin: 20px;
`;

const HomeLayouts = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const navigator = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  const handleClick = (productCategory) => {
    if (productCategory === "men's clothing") {
      navigator("/mensClothing");
    } else if (productCategory === "jewelery") {
      navigator("/jewelery");
    } else if (productCategory === "electronics") {
      navigator("/electronics");
    } else if (productCategory === "women's clothing") {
      navigator("/womensClothing");
    }
  };

  return (
    <>
      <TitleStyled>Most Popular Products</TitleStyled>
      <LayoutStyled>
        {products.map((product, index) => {
          return (
            <div
              className="layout-box"
              key={index}
              onClick={() => handleClick(product.category)}
            >
              <p>
                {product.category === "men's clothing" ? "Men's clothing" : ""}
              </p>
              <p>{product.category === "jewelery" ? "Jewelry" : ""}</p>
              <p>{product.category === "electronics" ? "Electronics" : ""}</p>
              <p>
                {product.category === "women's clothing"
                  ? "Women's clothing"
                  : ""}
              </p>
              <img src={product.image} alt="image" />
            </div>
          );
        })}
      </LayoutStyled>
    </>
  );
};

export default HomeLayouts;
