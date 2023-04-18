import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselComp() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Carousel interval={3000} indicators={false} controls={false}>
      {products.map((product, index) => {
        if (index % 5 === 0) {
          return (
            <Carousel.Item key={product.id}>
              <div className="d-flex">
                <img
                  className="d-block w-100"
                  src={products[index].image}
                  alt={products[index].title}
                />
                {products[index + 1] && (
                  <img
                    className="d-block w-100"
                    src={products[index + 1].image}
                    alt={products[index + 1].title}
                  />
                )}
                {products[index + 2] && (
                  <img
                    className="d-block w-100"
                    src={products[index + 2].image}
                    alt={products[index + 2].title}
                  />
                )}
                {products[index + 3] && (
                  <img
                    className="d-block w-100"
                    src={products[index + 3].image}
                    alt={products[index + 3].title}
                  />
                )}
                {products[index + 4] && (
                  <img
                    className="d-block w-100"
                    src={products[index + 4].image}
                    alt={products[index + 4].title}
                  />
                )}
              </div>
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          );
        } else {
          return null;
        }
      })}
    </Carousel>
  );
}

export default CarouselComp;
