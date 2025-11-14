import { Box, MenuItem, Select, Tab, Tabs, TextField } from "@mui/material";
import {
  Body,
  Button,
  Container,
  FormBody,
  InputRow,
  MusicContainer,
  SearchContainer,
  Title,
} from "./styled";
import { CreatePlaylistViewModel } from "./createPlaylistViewModel";
import { MusicCard } from "../../../components/musicCard/musicCard";
import type { Track } from "../../../types/playlist";
import { SearchMusicCard } from "../../../components/searchMusicCard/searchMusicCard";
import { ToastContainer, toast } from "react-toastify";

export function CreatePlaylistView() {
  const {
    generos,
    indexTab,
    setIndexTab,
    playlist,
    query,
    setQuery,
    searchMusic,
    music,
    removeMusic,
    clearMusic,
    addMusic,
    OnSubmit,
    control,
    handleSubmit,
  } = CreatePlaylistViewModel();

  return (
    <Container>
      <form onSubmit={handleSubmit(OnSubmit)}>
        <Body>
          <Tabs
            value={indexTab}
            onChange={(_, newValue) => setIndexTab(newValue)}
          >
            <Tab label="Dados Gerais" />
            <Tab label="Músicas" />
          </Tabs>

          <Box hidden={indexTab !== 0}>
            <FormBody>
              <TextField label="Nome " />
              <TextField label="Descrição " />
              <Select label="Gênero">
                {generos.map((g) => (
                  <MenuItem value={g}>{g}</MenuItem>
                ))}
              </Select>

              <SearchContainer>
                <Title>Vamos adicionar músicas</Title>
                <InputRow>
                  <TextField
                    style={{ width: 400 }}
                    placeholder="Digite a música"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <Button type="button" onClick={searchMusic}>
                    Buscar
                  </Button>
                  {music.deezer_id !== "" && (
                    <Button type="button" onClick={clearMusic}>
                      Limpar
                    </Button>
                  )}
                </InputRow>

                {music.deezer_id !== "" && (
                  <MusicContainer>
                    <SearchMusicCard
                      album={music.album}
                      artist={music.artist}
                      image={music.cover_url}
                      onClick={addMusic}
                      preview={music.preview_url}
                      title={music.title}
                      key={music.deezer_id}
                    />
                  </MusicContainer>
                )}
              </SearchContainer>
            </FormBody>
          </Box>

          <Box hidden={indexTab !== 1}>
            <FormBody>
              {playlist?.map((p: Track) => (
                <MusicCard
                  key={p.deezer_id}
                  album={p.album}
                  artist={p.artist}
                  cover={p.cover_url}
                  music={p.title}
                  preview={p.preview_url}
                  onClick={() => removeMusic(p.deezer_id)}
                />
              ))}
            </FormBody>
          </Box>
        </Body>
      </form>
      <ToastContainer autoClose={2000} position="top-center" />
    </Container>
  );
}
