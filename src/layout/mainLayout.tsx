import { Outlet, useNavigate } from "react-router-dom";
import {
  LinkCustom,
  LinkText,
  Logo,
  LogoContainer,
  Menus,
  Navbar,
} from "./styled";
import { Compass, House, Library, LogOut } from "lucide-react";
export function MainLayout() {
  const navigate = useNavigate();
  const sendToHome = () => {
    navigate({ pathname: "/home" });
  };
  return (
    <div>
      <Navbar>
        <LogoContainer onClick={sendToHome}>
          <Logo src="/src/assets/HarmoniaLogo.jpg" alt="Harmonia" />
        </LogoContainer>

        <Menus>
          <LinkCustom to="/home">
            <House color="white" size={24} /> <LinkText>Home</LinkText>
          </LinkCustom>

          <LinkCustom to="/playlist">
            <Library color="white" size={24} />
            <LinkText>Minhas Playlists</LinkText>
          </LinkCustom>

          <LinkCustom to="/playlist/all">
            <Compass color="white" size={24} />
            <LinkText>Explorar</LinkText>
          </LinkCustom>

          <LinkCustom to="/">
            <LogOut color="white" size={24} />
            <LinkText>Logout</LinkText>
          </LinkCustom>
        </Menus>
      </Navbar>

      <Outlet />
    </div>
  );
}
