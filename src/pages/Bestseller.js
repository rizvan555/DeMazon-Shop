import { Link } from "react-router-dom";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import styled from "styled-components";

const BestsellerStyled = styled.div`
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
`;

const Bestseller = (props) => {
  return (
    <BestsellerStyled>
      <Header />
      <ProductList products={props.products} />
    </BestsellerStyled>
  );
};

export default Bestseller;
