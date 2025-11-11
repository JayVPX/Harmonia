import axios from "axios";
import { useState } from "react";
import type { Playlist, Track } from "../../../types/playlist";
import type { Music } from "../home/homeViewModel";

export function CreatePlaylistViewModel() {
  const generos = [
    "Rock",
    "Pop",
    "Jazz",
    "Blues",
    "Hip Hop",
    "Rap",
    "R&B",
    "Soul",
    "Funk",
    "Reggae",
    "Ska",
    "Metal",
    "Punk",
    "Country",
    "Folk",
    "Sertanejo",
    "MPB",
    "Bossa Nova",
    "Samba",
    "Pagode",
    "Forró",
    "Axé",
    "Frevo",
    "Maracatu",
    "Choro",
    "Gospel",
    "Música Clássica",
    "Ópera",
    "Eletrônica",
    "House",
    "Techno",
    "Trance",
    "Drum and Bass",
    "Dubstep",
    "Lo-fi",
    "Indie",
    "K-pop",
    "J-pop",
    "C-pop",
    "Trap",
    "Reggaeton",
    "Dancehall",
    "Latina",
    "Flamenco",
    "Bolero",
    "Jazz Fusion",
    "Progressive Rock",
    "Hard Rock",
    "Grunge",
    "Alternative Rock",
    "Psychedelic Rock",
    "New Wave",
  ];
  const [query, setQuery] = useState<string>("");
  const [music, setMusic] = useState<Track>({
    artist: "",
    cover_url: "",
    deezer_id: "",
    duration: "",
    preview_url: "",
    title: "",
    album: "",
  });
  const [playlist, setPlaylist] = useState<Track[]>([]);

  const [indexTab, setIndexTab] = useState<number>(0);

  //Function chamada para pesquisar a música
  const searchMusic = async () => {
    try {
      const response = await axios.get(
        `/api/search?q=${encodeURIComponent(query)}`
      );

      const responseData = response.data.data[0];

      const responseMusic: Track = {
        deezer_id: responseData.id,
        title: responseData.title,
        artist: responseData.artist.name,
        album: responseData.album.title,
        duration: responseData.duration,
        preview_url: responseData.preview,
        cover_url: responseData.album.cover_medium,
      };
      console.log(responseMusic);
      setMusic(responseMusic);
    } catch (Error: any) {
      console.log("Ocorreu um erro: ", Error);
    }
  };

  //Função para remover uma música da playlist
  const removeMusic = (id: string) => {
    if (!playlist) return;

    const updatedTracks = playlist.filter((track) => track.deezer_id !== id);

    setPlaylist(updatedTracks);
  };
  //Função para adicionar uma música na playlist
  const addMusic = () => {
    if (playlist) {
      const jaExiste = playlist.some(
        (musicP) => musicP.deezer_id === music.deezer_id
      );

      if (jaExiste) {
        window.alert("Essa música já está inserida na sua playlist!");
      } else {
        setPlaylist([...playlist, music]);
      }
    }
  };
  //Função para limpar a música pesquisada
  const clearMusic = () => {
    setMusic({
      album: "",
      artist: "",
      cover_url: "",
      deezer_id: "",
      duration: "",
      preview_url: "",
      title: "",
    });
    setQuery("");
  };

  const OnSubmit = async () => {
    try {
    } catch {
    } finally {
    }
  };

  return {
    generos,
    indexTab,
    setIndexTab,
    playlist,
    query,
    setQuery,
    music,
    searchMusic,
    removeMusic,
    clearMusic,
    addMusic,
  };
}
