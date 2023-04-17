import styled from "styled-components";

const RestultStyled = styled.div`
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
const Result = ({ product }) => {
  return (
    <RestultStyled>
      <img src={product.image} alt="" />
      <h3>{product.title}</h3>
      <p>⭐️⭐️⭐️⭐️⭐️ {product.rating.rate}</p>
      <h6>€ {product.price}</h6>
    </RestultStyled>
  );
};

export default Result;
