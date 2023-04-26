import { Link } from "react-router-dom";
import styled from "styled-components";
import "animate.css";

const NavStyled = styled.nav`
  ul {
    display: flex;
    list-style: none;
    gap: 1vw;
    padding: 30px;
    a {
      text-decoration: none;
      color: #fff;
      font-size: 13px;
    }
    a:hover {
      font-weight: bold;
    }
  }
`;

const Navbar = () => {
  const navbar = ["Home", "Bestseller", "Sale", "Prime", "Service", "Contact"];
  return (
    <NavStyled>
      <ul>
        {navbar.map((nav, index) => {
          return (
            <Link key={index} to={`/${nav}`}>
              {nav}
            </Link>
          );
        })}
      </ul>
    </NavStyled>
  );
};

export default Navbar;
