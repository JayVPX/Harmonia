import { Container, PlaylistCardsContainer, Title } from "./styled";
import { PlaylistCard } from "../../../components/playlistCard/playlistCard";
import { AllPlaylistsViewModel } from "./playlistViewModel";

export function AllPlaylistsView() {
  const { Playlists, sendToPlaylist, playlists } = AllPlaylistsViewModel();

  return (
    <Container>
      <Title>Playlists</Title>
      <PlaylistCardsContainer>
        {playlists?.map((playlist) => (
          <PlaylistCard
            onPress={() => sendToPlaylist(String(playlist.id))}
            key={playlist.id}
            image={
              playlist.tracks[0]?.cover_url ?? "https://placehold.co/400x400"
            }
            nome={playlist.title}
            user={playlist.created_by ?? ""}
          />
        ))}
      </PlaylistCardsContainer>
    </Container>
  );
}
