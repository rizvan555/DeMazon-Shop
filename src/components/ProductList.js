import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import styled from "styled-components";
import Header from "./Header";

const ListStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
  padding: 20px;
  width: 90vw;
  column-gap: 10px;
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
    console.log(products);
  }, []);

  return (
    <ListStyled>
      {products.map((product) => {
        return (
          <div>
            <ProductItem
              title={product.title}
              image={product.image}
              rating={product.rating}
              price={product.price}
              key={product.id}
              id={product.id}
              description={product.description}
              products={products}
            />
          </div>
        );
      })}
    </ListStyled>
  );
};

export default ProductList;
