import axios from "axios";
import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { UpdatePlaylistSchema, type UpdatePlaylistType } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

import { useNavigate, useParams } from "react-router-dom";

import type { Track, Playlist } from "../../../../model/playlistDto";
import api from "../../../../service/api";

export function UpdatePlaylistViewModel() {
  const navigate = useNavigate();

  // UseStates
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
  const [loading, setLoading] = useState<boolean>(false);

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
  const [playlist, setPlaylist] = useState<Playlist>();

  const [tracks, setTracks] = useState<Track[]>([]);

  const [indexTab, setIndexTab] = useState<number>(0);

  // Params ID
  const { id } = useParams();

  const { handleSubmit, control, reset } = useForm<UpdatePlaylistType>({
    defaultValues: { descricao: "", nome: "" },
    resolver: zodResolver(UpdatePlaylistSchema),
  });

  //useEffect para renderizar os dados da playlist escolhida
  useEffect(() => {
    console.log("olá");
    const renderData = async () => {
      console.log("Tentando");
      const response = await api.get(`/playlists/${id}/`);
      if (response.status === 200) {
        const responseData = response.data as Playlist;
        setPlaylist(responseData);
        reset({
          descricao: responseData.description,
          genero: responseData.gender,
          nome: responseData.title,
        });
        setTracks(responseData.tracks);
      } else {
        toast.error("Ocorreu um erro, tente novamente");
      }
    };
    renderData();
  }, []);

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
    if (!tracks) return;

    const updatedTracks = tracks.filter((track) => track.deezer_id !== id);

    toast.success("Música removida com sucesso!");
    setTracks(updatedTracks);
  };

  // Função para adicionar música na playlist
  const addMusic = () => {
    if (tracks) {
      const jaExiste = tracks.some(
        (musicP) => musicP.deezer_id === music.deezer_id
      );

      if (jaExiste) {
        toast.error("Essa música já está inserida na sua playlist!");
      } else {
        toast.success("Música adicionada com sucesso!");
        setTracks([...tracks, music]);
        clearMusic();
      }
    }
  };

  // Função para limpar música pesquisada
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

  const OnSubmit = async (data: UpdatePlaylistType) => {
    try {
      setLoading(true);

      if (tracks.length == 0) {
        toast.error("Adicione alguma música na playlist");
        return;
      }
      const payload: Playlist = {
        id: Number(id),
        title: data.nome,
        description: data.descricao,
        gender: data.genero,
        tracks: tracks,
      };

      const response = await api.put(`/playlists/${id}/`, payload);

      if (response.status === 200) {
        toast.success("A playlist foi atualizada com sucesso");
        setTimeout(() => {
          goBack();
        }, 2500);
      } else {
        toast.error("Erro ao atualizar playlist");
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
    tracks,
    goBack,
    loading,
  };
}
