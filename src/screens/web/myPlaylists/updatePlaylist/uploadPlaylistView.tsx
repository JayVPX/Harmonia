import {
  Box,
  CircularProgress,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import {
  Body,
  Button,
  ButtonContainer,
  Container,
  FormBody,
  InputRow,
  MusicContainer,
  ReturnButton,
  SearchContainer,
  SubmitButton,
  Title,
} from "./styled";

import { FormInput as Input } from "../../../../components/inputForm";

import { UpdatePlaylistViewModel } from "./uploadPlaylistViewModel";
import { ToastContainer } from "react-toastify";
import { Controller } from "react-hook-form";
import { MusicCard } from "../../../../components/musicCard/musicCard";
import { SearchMusicCard } from "../../../../components/searchMusicCard/searchMusicCard";
import type { Track } from "../../../../model/playlistDto";

export function UpdatePlaylistView() {
  const {
    generos,
    indexTab,
    setIndexTab,
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
    tracks,
    goBack,
    loading,
  } = UpdatePlaylistViewModel();

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
              <Controller
                name="nome"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    label="Nome"
                    value={field.value}
                    onChange={field.onChange}
                    errors={fieldState.error?.message}
                  />
                )}
              />

              <Controller
                name="descricao"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    label="Descrição"
                    value={field.value}
                    onChange={field.onChange}
                    errors={fieldState.error?.message}
                    isMultiline={true}
                    rows={4}
                  />
                )}
              />

              <Controller
                control={control}
                name="genero"
                render={({ field, fieldState }) => (
                  <FormControl fullWidth error={!!fieldState.error}>
                    <InputLabel id="genero-playlist">Gênero</InputLabel>
                    <Select
                      id="genero-playlist"
                      labelId="genero-playlist"
                      label="Gênero"
                      value={field.value ?? ""}
                      onChange={field.onChange}
                      displayEmpty
                    >
                      {generos.map((g) => (
                        <MenuItem value={g}>{g}</MenuItem>
                      ))}
                    </Select>

                    {fieldState.error && (
                      <FormHelperText style={{ color: "red" }}>
                        {fieldState.error.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                )}
              />

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
              {tracks.map((p: Track) => (
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
          <ButtonContainer>
            <ReturnButton type="button" onClick={goBack}>
              Fechar
            </ReturnButton>
            <SubmitButton type="submit">
              {" "}
              {loading && (
                <CircularProgress sx={{ color: "white" }} size={20} />
              )}
              {!loading && "Salvar"}
            </SubmitButton>
          </ButtonContainer>
        </Body>
      </form>

      <ToastContainer position="top-center" autoClose={2000} />
    </Container>
  );
}
