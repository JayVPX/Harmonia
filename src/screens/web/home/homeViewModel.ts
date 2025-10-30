import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export interface Music {
  id: string;
  titulo: string;
  artista: string;
  album: string;
  cover: string;
  preview: string;
  duracao: string;
}

export function useHomeViewModel() {
  const [query, setQuery] = useState<string>("");
  const [music, setMusic] = useState<Music>({
    album: "",
    artista: "",
    cover: "",
    id: "",
    preview: "",
    titulo: "",
    duracao: "",
  });
  const [playlist, setPlaylist] = useState<Music[]>(() => {
    const saved = localStorage.getItem("playlist");
    return saved ? JSON.parse(saved) : [];
  });

  const searchMusic = async () => {
    try {
      const response = await axios.get(
        `/api/search?q=${encodeURIComponent(query)}`
      );

      const responseData = response.data.data[0];

      const responseMusic: Music = {
        id: responseData.id,
        titulo: responseData.title,
        artista: responseData.artist.name,
        album: responseData.album.title,
        duracao: responseData.duration,
        preview: responseData.preview,
        cover: responseData.album.cover_medium,
      };

      setMusic(responseMusic);
    } catch (Error: any) {
      console.log("Ocorreu um erro: ", Error);
    }
  };

  const clearMusic = () => {
    setMusic({
      album: "",
      artista: "",
      cover: "",
      id: "",
      preview: "",
      titulo: "",
      duracao: "",
    });

    setQuery("");
  };

  const addToPlaylist = () => {
    const jaExiste = playlist.some((musicP) => musicP.id === music.id);

    if (jaExiste) {
      window.alert("Essa música já está inserida na sua playlist!");
    } else {
      setPlaylist([...playlist, music]);
    }
  };

  //   const removeMusicOnPlaylist = (id: string) => {
  //     const newPlaylist = playlist.filter((music) => music.id !== id);
  //     setPlaylist(newPlaylist);
  //   };

  useEffect(() => {
    localStorage.setItem("playlist", JSON.stringify(playlist));
  }, [playlist]);

  const navigate = useNavigate();

  const SendToPlaylist = () => {
    navigate("/playlist");
  };

  return {
    SendToPlaylist,
    addToPlaylist,
    clearMusic,
    searchMusic,
    query,
    setQuery,
    music,
    setMusic,
  };
}
