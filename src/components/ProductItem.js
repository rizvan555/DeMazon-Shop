import styled from "styled-components";

const ItemStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #e3e3e3;
  width: 30vw;
  height: 60vh;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  h3 {
    font-size: 10px;
    text-align: center;
    width: 25vw;
  }
  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #fff;
    margin-bottom: 10px;
    img {
      width: 8vw;
      height: 15vh;
    }
  }
  p {
    font-size: 10px;
    font-weight: bold;
    color: #78040d;
  }
  span {
    font-size: 10px;
  }
  .price {
    margin-top: 20px;
    font-size: 10px;
  }
`;

const ProductItem = (props) => {
  const handleItemClick = (id) => {
    window.location.href = `/bestseller/${props.id}`;
  };
  return (
    <>
      <ItemStyled onClick={() => handleItemClick(props.id)}>
        <div className="image">
          <img src={props.image} alt="image" />
        </div>
        <h3>{props.title}</h3>
        <span>⭐️⭐️⭐️⭐️⭐️ {props.rating.rate}</span>
        <p className="price">€ {props.price}</p>
      </ItemStyled>
    </>
  );
};

export default ProductItem;
