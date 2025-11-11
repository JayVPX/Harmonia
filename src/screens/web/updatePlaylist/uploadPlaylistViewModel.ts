import axios from "axios";
import { useEffect, useState } from "react";
import type { Playlist } from "../../../types/playlist";

export interface Music {
  deezer_id: string;
  title: string;
  artist: string;
  album: string;
  cover_url: string;
  preview_url: string;
  duration: string;
}

export function UpdatePlaylistViewModel() {
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
  const [music, setMusic] = useState<Music>({
    artist: "",
    cover_url: "",
    deezer_id: "",
    duration: "",
    preview_url: "",
    title: "",
    album: "",
  });
  const [playlist, setPlaylist] = useState<Playlist>();

  const [indexTab, setIndexTab] = useState<number>(0);

  useEffect(() => {
    fetch("/playlist.json") // caminho relativo à pasta public
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao carregar JSON");
        }
        return response.json();
      })
      .then((json) => setPlaylist(json))
      .catch((error) => console.error(error));
  }, []);

  //Function chamada para pesquisar a música
  const searchMusic = async () => {
    try {
      const response = await axios.get(
        `/api/search?q=${encodeURIComponent(query)}`
      );

      const responseData = response.data.data[0];

      const responseMusic: Music = {
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

    const updatedTracks = playlist.tracks.filter(
      (track) => track.deezer_id !== id
    );

    setPlaylist({
      ...playlist,
      tracks: updatedTracks,
    });
  };

  const addMusic = () => {
    if (playlist) {
      const jaExiste = playlist.tracks.some(
        (musicP) => musicP.deezer_id === music.deezer_id
      );

      if (jaExiste) {
        window.alert("Essa música já está inserida na sua playlist!");
      } else {
        setPlaylist({
          ...playlist,
          tracks: [...playlist.tracks, music],
        });
      }
    }
  };

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
