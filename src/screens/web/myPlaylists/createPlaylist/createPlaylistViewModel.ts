import axios from "axios";
import { useState } from "react";

import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { CreatePlaylistSchema, type CreatePlaylistType } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

import { useNavigate } from "react-router-dom";
import type { Track, Playlist } from "../../../../model/playlistDto";
import api from "../../../../service/api";

export function CreatePlaylistViewModel() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

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
    duration: 0,
    preview_url: "",
    title: "",
    album: "",
  });
  const [playlist, setPlaylist] = useState<Track[]>([]);

  const [indexTab, setIndexTab] = useState<number>(0);

  const { handleSubmit, control } = useForm<CreatePlaylistType>({
    defaultValues: { descricao: "", nome: "" },
    resolver: zodResolver(CreatePlaylistSchema),
  });

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

      setMusic(responseMusic);
    } catch (Error: any) {
      console.log("Ocorreu um erro: ", Error);
    }
  };

  //Função para remover uma música da playlist
  const removeMusic = (id: string) => {
    if (!playlist) return;

    const updatedTracks = playlist.filter((track) => track.deezer_id !== id);
    toast.success("Música removida com sucesso");
    setPlaylist(updatedTracks);
  };
  //Função para adicionar uma música na playlist
  const addMusic = () => {
    if (playlist) {
      const jaExiste = playlist.some(
        (musicP) => musicP.deezer_id === music.deezer_id
      );

      if (jaExiste) {
        toast.error("Essa música já está inserida na sua playlist!");
      } else {
        toast.success("Música adicionada com sucesso!");
        setPlaylist([...playlist, music]);
        clearMusic();
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
      duration: 0,
      preview_url: "",
      title: "",
    });
    setQuery("");
  };

  const goBack = () => {
    navigate("/playlist");
  };

  const OnSubmit = async (data: CreatePlaylistType) => {
    try {
      setLoading(true);

      if (playlist.length == 0) {
        toast.error("Adicione alguma música na playlist");
        return;
      }

      const payload: Playlist = {
        description: data.descricao,
        gender: data.genero,
        title: data.nome,
        tracks: playlist,
      };

      const response = await api.post(`/playlists/`, payload);

      if (response.status == 201 || 200) {
        toast.success("Playlist criada com sucesso");
        setTimeout(() => {
          navigate("/playlist");
        }, 2500);
      } else {
        toast.error("Erro ao criar playlist");
      }
    } catch (Error: any) {
      console.log("Ocorreu um erro, tente novamente: ", Error);
    } finally {
      setLoading(false);
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
    handleSubmit,
    OnSubmit,
    control,
    goBack,
    loading,
  };
}
