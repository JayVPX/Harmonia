import { Container, PlaylistCardsContainer, Title } from "./styled";
import { PlaylistCard } from "../../../components/playlistCard/playlistCard";
import { AllPlaylistsViewModel } from "./playlistViewModel";

export function AllPlaylistsView() {
  const { Playlists, sendToPlaylist } = AllPlaylistsViewModel();

  return (
    <Container>
      <Title>Playlists</Title>
      <PlaylistCardsContainer>
        {Playlists.map((playlist, i) => (
          <PlaylistCard
            onPress={() => sendToPlaylist(String(i + 1))} //TODO editar para ter ID das playlists
            key={i}
            image={playlist.image}
            nome={playlist.nome}
            user={playlist.user}
          />
        ))}
      </PlaylistCardsContainer>
    </Container>
  );
}
