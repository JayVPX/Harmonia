import { PlaylistCard } from "../../../components/playlistCard/playlistCard";
import { MyPlaylistsViewModel } from "./myPlaylistViewModel";
import { AddButton, Container, PlaylistCardsContainer, Title } from "./styled";
import { Plus } from "lucide-react";
import { ToastContainer } from "react-toastify";

export function MyPlaylistsView() {
  const {
    SendToCreatePlaylist,
    SendToUpdatePlaylist,
    playlists,
    deletePlaylist,
  } = MyPlaylistsViewModel();
  return (
    <Container>
      <Title>Minhas Playlists</Title>
      <PlaylistCardsContainer>
        {playlists.map((playlist) => (
          <PlaylistCard
            onPress={() => {
              SendToUpdatePlaylist(String(playlist.id));
            }}
            key={playlist.id}
            nome={playlist.title}
            user={playlist.created_by ?? ""}
            isRemovable={true}
            onTrashClick={() => deletePlaylist(String(playlist.id))}
            image={
              playlist.tracks[0]?.cover_url ?? "https://placehold.co/400x400"
            }
          />
        ))}
      </PlaylistCardsContainer>

      <AddButton onClick={() => SendToCreatePlaylist()}>
        <Plus size={36} color="white" />
      </AddButton>

      <ToastContainer position="top-center" autoClose={2000} />
    </Container>
  );
}
