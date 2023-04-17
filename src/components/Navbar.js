import { Link } from "react-router-dom";
import styled from "styled-components";

const NavStyled = styled.nav`
  ul {
    display: flex;
    list-style: none;
    gap: 4vw;
    padding: 30px;
    a {
      text-decoration: none;
      color: #fff;
      font-size: 20px;
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
        {navbar.map((nav) => {
          return <Link to={`/${nav}`}>{nav}</Link>;
        })}
      </ul>
    </NavStyled>
  );
};

export default Navbar;