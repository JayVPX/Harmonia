import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export interface Music {
  deezer_id: string;
  title: string;
  artist: string;
  // album: string;
  cover_url: string;
  preview_url: string;
  duration: string;
}

export function useHomeViewModel() {
  const [query, setQuery] = useState<string>("");
  const [music, setMusic] = useState<Music>({
    // album: "",
    artist: "",
    cover_url: "",
    deezer_id: "",
    preview_url: "",
    title: "",
    duration: "",
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
        deezer_id: responseData.id,
        title: responseData.title,
        artist: responseData.artist.name,
        // album: responseData.album.title,
        duration: responseData.duration,
        preview_url: responseData.preview,
        cover_url: responseData.album.cover_medium,
      };

      setMusic(responseMusic);
    } catch (Error: any) {
      console.log("Ocorreu um erro: ", Error);
    }
  };

  const clearMusic = () => {
    setMusic({
      // album: "",
      artist: "",
      cover_url: "",
      deezer_id: "",
      preview_url: "",
      title: "",
      duration: "",
    });

    setQuery("");
  };

  const addToPlaylist = () => {
    const jaExiste = playlist.some(
      (musicP) => musicP.deezer_id === music.deezer_id
    );

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
