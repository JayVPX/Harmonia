import { PlaylistCard } from "../../../components/playlistCard/playlistCard";
import { MyPlaylistsViewModel } from "./myPlaylistViewModel";
import {
  AddButton,
  Container,
  PlaylistCardsContainer,
  Subtitle,
  Title,
} from "./styled";
import { Plus } from "lucide-react";
import { ToastContainer } from "react-toastify";

export function MyPlaylistsView() {
  const {
    SendToCreatePlaylist,
    SendToUpdatePlaylist,
    playlists,
    deletePlaylist,
    loading,
  } = MyPlaylistsViewModel();
  return (
    <Container>
      <Title>Minhas Playlists</Title>
      <PlaylistCardsContainer>
        {loading ? (
          <Subtitle>Carregando playlists...</Subtitle>
        ) : playlists.length > 0 ? (
          playlists.map((playlist) => (
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
          ))
        ) : (
          <Subtitle>
            Você ainda não tem nenhuma playlist criada, considere começar a
            criar uma!
          </Subtitle>
        )}
      </PlaylistCardsContainer>

      <AddButton onClick={() => SendToCreatePlaylist()}>
        <Plus size={36} color="white" />
      </AddButton>

      <ToastContainer position="top-center" autoClose={2000} />
    </Container>
  );
}
