import { Link } from "react-router-dom";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

const Bestseller = (props) => {
  return (
    <>
      <Header />
      <ProductList products={props.products} />
    </>
  );
};

export default Bestseller;
