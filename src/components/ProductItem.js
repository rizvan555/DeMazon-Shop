import styled from "styled-components";

const ItemStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #e3e3e3;
  width: 20vw;
  height: 50vh;
  background-color: #fff;
  padding: 10px;
  h3 {
    font-size: 15px;
    text-align: center;
  }
  img {
    width: 12vw;
    height: 25vh;
  }
  p {
    font-size: 20px;
    font-weight: bold;
    color: #78040d;
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
        <span>⭐️⭐️⭐️⭐️⭐️ {props.rating.rate}</span>
        <div className="price">
          <p>€ {props.price}</p>
        </div>
      </ItemStyled>
    </>
  );
};

export default ProductItem;
