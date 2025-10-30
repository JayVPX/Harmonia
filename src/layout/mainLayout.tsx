import { Link, Outlet } from "react-router-dom";
import { Logo, LogoContainer, Navbar } from "./styled";

export function MainLayout() {
  return (
    <div>
      <Navbar>
        <LogoContainer>
          <Logo src="/src/assets/HarmoniaLogo.jpg" alt="Harmonia" />
        </LogoContainer>
        <Link to="/home">Home</Link>
        <Link to="/playlist/">Minhas Playlists</Link>
        <Link to="/playlist/all">Melhores Playlists</Link>
      </Navbar>

      <Outlet />
    </div>
  );
}
