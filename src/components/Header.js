import styled from "styled-components";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const HeaderStyled = styled.header`
  .top-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgb(0, 0, 0, 0.4);
    color: #fff;
    .title {
      text-decoration: none;
      color: #fff;
      font-size: 40px;
      font-weight: bold;
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <div className="top-container">
        <div className="title">
          <Link className="title" to="/">
            DeMazon
          </Link>
        </div>
        <Navbar />
      </div>
    </HeaderStyled>
  );
};

export default Header;
