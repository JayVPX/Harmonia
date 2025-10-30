import { useEffect, useState } from "react";
import type { Music } from "../home/homeViewModel";
import { Container, PlaylistCardsContainer, Title } from "./styled";
import { PlaylistCard } from "../../../components/playlistCard/playlistCard";
import { AllPlaylistsViewModel } from "./playlistViewModel";

export function AllPlaylistsView() {
  // const [playlist, setPlaylist] = useState<Music[]>(() => {
  //   const saved = localStorage.getItem("playlist");
  //   return saved ? JSON.parse(saved) : [];
  // });

  const { Playlists } = AllPlaylistsViewModel();

  return (
    <Container>
      <Title>Playlists</Title>
      <PlaylistCardsContainer>
        {Playlists.map((playlist, i) => (
          <PlaylistCard
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
