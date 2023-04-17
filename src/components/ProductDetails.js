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
  gap: 5vw;
  img {
    width: 20vw;
  }
  .info-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50vw;
    span {
      font-weight: bold;
      font-size: 30px;
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
            <img src={idCheck.image} alt="" />
            <div className="info-box">
              <h2>{idCheck.title}</h2>
              <h6>{idCheck.description}</h6>
              <p>⭐️ {idCheck.rating.rate}</p>
              <span>€ {idCheck.price}</span>
            </div>
          </DetailsStyled>
        );
      })}
    </div>
  );
};

export default ProductDetails;
