import { Outlet } from "react-router-dom";
import { LinkCustom, Logo, LogoContainer, Menus, Navbar } from "./styled";

export function MainLayout() {
  return (
    <div>
      <Navbar>
        <LogoContainer>
          <Logo src="/src/assets/HarmoniaLogo.jpg" alt="Harmonia" />
        </LogoContainer>

        <Menus>
          <LinkCustom to="/home">Home</LinkCustom>
          <LinkCustom to="/playlist">Minhas Playlists</LinkCustom>
          <LinkCustom to="/playlist/all">Melhores</LinkCustom>
        </Menus>
      </Navbar>

      <Outlet />
    </div>
  );
}
