import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-evenly;
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

export { Navbar, Logo, LogoContainer };
