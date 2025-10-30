import { Route, Routes } from "react-router-dom";

import { HomeView } from "../screens/web/home/homeView";
import { AllPlaylistsView } from "../screens/web/allPlaylists/playlistView";
import { MainLayout } from "../layout/mainLayout";
import { MyPlaylistsView } from "../screens/web/myPlaylists/myPlaylistsView";
import { LoginView } from "../screens/auth/login/loginView";
import { CreatePlaylistView } from "../screens/web/createPlaylist/createPlaylistView";
import { UpdatePlaylistView } from "../screens/web/updatePlaylist/uploadPlaylistView";

export function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginView />} />

      <Route element={<MainLayout />}>
        <Route path="/home" element={<HomeView />} />

        <Route path="/playlist/" element={<MyPlaylistsView />} />
        <Route path="/playlist/create/:id" element={<CreatePlaylistView />} />
        <Route path="/playlist/update/:id" element={<UpdatePlaylistView />} />

        <Route path="/playlist/all" element={<AllPlaylistsView />} />
      </Route>
    </Routes>
  );
}
