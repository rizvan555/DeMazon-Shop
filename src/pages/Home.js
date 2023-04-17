import styled from "styled-components";
import Header from "../components/Header";
import HomeLayouts from "../components/HomeLayouts";

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
      <HomeLayouts />
    </HomeStyled>
  );
};

export default Home;
