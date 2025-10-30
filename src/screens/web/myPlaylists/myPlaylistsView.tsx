import { PlaylistCard } from "../../../components/playlistCard/playlistCard";
import { MyPlaylistsViewModel } from "./myPlaylistViewModel";
import { AddButton, Container, PlaylistCardsContainer, Title } from "./styled";
import { Plus } from "lucide-react";
export function MyPlaylistsView() {
  const { Playlists, SendToCreatePlaylist, SendToUpdatePlaylist } =
    MyPlaylistsViewModel();
  return (
    <Container>
      <Title>Minhas Playlists</Title>
      <PlaylistCardsContainer>
        {Playlists.map((playlist, i) => (
          <PlaylistCard
            onPress={() => {
              SendToUpdatePlaylist(String(i + 1));
            }}
            key={i}
            image={playlist.image}
            nome={playlist.nome}
            user={playlist.user}
          />
        ))}
      </PlaylistCardsContainer>

      <AddButton onClick={() => SendToCreatePlaylist()}>
        <Plus size={36} color="white" />
      </AddButton>
    </Container>
  );
}
