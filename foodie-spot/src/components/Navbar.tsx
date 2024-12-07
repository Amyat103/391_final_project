import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled components for the navbar
const Nav = styled.nav`
  background-color: #2c2f36; /* Dark background */
  padding: 1rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 1.5rem;
`;

const NavLink = styled(Link)`
  color: #f8a04b; /* Orange color */
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: #f2b56e; /* Lighter orange */
    transform: scale(1.1); /* Slightly enlarge the text */
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/meal-plan">Meal Plan</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/restaurants">Restaurants</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
}
