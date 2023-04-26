import { useParams } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";
import styled from "styled-components";

const DetailsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  gap: 8vw;
  background-color: #e1e1e1;
  .image {
    padding: 20px 40px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background-color: #fff;
    img {
      width: 25vw;
    }
  }
  .info-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40vw;
    span {
      font-weight: bold;
      font-size: 15px;
    }
    h2 {
      font-size: 25px;
    }
    h6 {
      font-size: 10px;
      font-weight: 300;
      line-height: 20px;
      margin-top: 30px;
    }
    p {
      font-size: 10px;
    }
  }
`;

const ProductDetails = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  const { id } = useParams();

  const checkProductForId = (id) => {
    if (products) {
      return products.filter((product) => {
        return product.id.toString() === id;
      });
    }
  };

  const idChecker = checkProductForId(id);
  console.log(idChecker);
  return (
    <div>
      <Header />
      {idChecker.map((idCheck) => {
        return (
          <DetailsStyled>
            <div className="image">
              <img src={idCheck.image} alt="" />
            </div>
            <div className="info-box">
              <h2>{idCheck.title}</h2>
              <h6>{idCheck.description}</h6>
              <p>⭐️⭐️⭐️⭐️⭐️ {idCheck.rating.rate}</p>
              <span>€ {idCheck.price}</span>
            </div>
          </DetailsStyled>
        );
      })}
    </div>
  );
};

export default ProductDetails;
