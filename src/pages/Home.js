import styled from "styled-components";
import Header from "../components/Header";
import HomeLayouts from "../components/HomeLayouts";
import Carousel from "../components/CarouselComp";
import CarouselComp from "../components/CarouselComp";

const HomeStyled = styled.div`
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(116, 65, 128, 1) 100%
  );
`;
const Home = () => {
  return (
    <HomeStyled>
      <Header />
      <CarouselComp />
      <HomeLayouts />
    </HomeStyled>
  );
};

export default Home;
