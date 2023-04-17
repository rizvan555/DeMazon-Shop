import styled from "styled-components";
import Header from "../components/Header";
import HomeLayouts from "../components/HomeLayouts";

const HomeStyled = styled.div`
  background-color: rgb(0, 0, 0, 0.2);
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
