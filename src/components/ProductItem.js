import styled from "styled-components";
import ProductDetails from "./ProductDetails";

const ItemStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  flex-direction: column;
  border: 1px solid #e3e3e3;
  width: 20vw;
  height: 100%;
  background-color: #fff;
  h3 {
    font-size: 15px;
    text-align: center;
  }
  img {
    width: 5vw;
  }
`;

const ProductItem = (props) => {
  const handleItemClick = (id) => {
    window.location.href = `/bestseller/${props.id}`;
  };

  return (
    <>
      <ItemStyled onClick={() => handleItemClick(props.id)}>
        <img src={props.image} alt="image" />
        <h3>{props.title}</h3>
        <span>⭐️{props.rating.rate}</span>
        <p>€ {props.price}</p>
      </ItemStyled>
    </>
  );
};

export default ProductItem;
