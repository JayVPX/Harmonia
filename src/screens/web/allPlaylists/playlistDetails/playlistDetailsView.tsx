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
  const { columns, music } = PlaylistDetailsViewModel();

  return (
    <Container>
      <Content>
        <Title>We are so back</Title>
        <Desc>
          As melhores músicas em um só lugar, só vim rapazeada. AURA + EGO
        </Desc>

        <InfoDataRow>
          <UserText>@JayVPX</UserText>
          <Pin />
          <InfoText>149 músicas</InfoText>
        </InfoDataRow>

        {/* <Line /> */}

        <MenuGrid>
          {columns.map((title, i) => (
            <MenuTitle key={i}>{title}</MenuTitle>
          ))}
        </MenuGrid>

        <MusicCardsContent>
          {music.map((m, i) => (
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
