import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid #fff;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 100px;
  cursor: pointer;
`;

const Menus = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
  align-items: center;
`;

const LinkCustom = styled(Link)`
  padding: 4px 16px;
  text-decoration: none;
  color: white;
  border-radius: 8px;

  &:hover {
    background-color: #1f4261ff;
  }
`;
export { Navbar, Logo, LogoContainer, Menus, LinkCustom };
