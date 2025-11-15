import { GridMusicCard } from "../../../../components/gridMusicCard/gridMusicCard";
import { PlaylistDetailsViewModel } from "./playlistDetailsViewModel";
import {
  Container,
  Content,
  Desc,
  InfoDataRow,
  InfoText,
  MenuGrid,
  MenuTitle,
  MusicCardsContent,
  Pin,
  Title,
  UserText,
} from "./styled";

export function PlaylistDetailsView() {
  const { columns, music, playlist } = PlaylistDetailsViewModel();

  return (
    <Container>
      <Content>
        <Title>{playlist?.title}</Title>
        <Desc>{playlist?.description}</Desc>

        <InfoDataRow>
          <UserText>@{playlist?.created_by}</UserText>
          <Pin />
          <InfoText>{playlist?.tracks.length} músicas</InfoText>
        </InfoDataRow>

        {/* <Line /> */}

        <MenuGrid>
          {columns.map((title, i) => (
            <MenuTitle key={i}>{title}</MenuTitle>
          ))}
        </MenuGrid>

        <MusicCardsContent>
          {playlist?.tracks.map((m, i) => (
            <GridMusicCard
              album={m.album}
              artist={m.artist}
              cover={m.cover_url}
              duration={m.duration}
              position={i + 1}
              preview={m.preview_url}
              title={m.title}
              key={m.deezer_id}
            />
          ))}
        </MusicCardsContent>
      </Content>
    </Container>
  );
}
