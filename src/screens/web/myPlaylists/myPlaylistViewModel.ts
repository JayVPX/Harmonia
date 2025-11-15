import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Playlist } from "../../../model/playlistDto";
import api from "../../../service/api";
import { toast } from "react-toastify";

export function MyPlaylistsViewModel() {
  const navigate = useNavigate();
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  //useEffect para capturar as playlists do usuário
  useEffect(() => {
    const renderPlaylists = async () => {
      const response = await api.get("/playlists/");
      if (response.status === 200) {
        setPlaylists(response.data.results);
      } else {
        toast.error("Ocorreu um erro, tente novamente");
      }
    };

    renderPlaylists();
  }, [playlists]);
  // Navigate para criação de uma playlist
  const SendToCreatePlaylist = () => {
    navigate({ pathname: "/playlist/create/0" });
  };

  // Navigate para update de uma playlist
  const SendToUpdatePlaylist = (id: string) => {
    navigate({ pathname: `/playlist/update/${id}` });
  };

  const deletePlaylist = async (id: string) => {
    const response = await api.delete(`/playlists/${id}/`);

    if (response.status == 200 || 201 || 204) {
      toast.success("Playlist deletada com sucesso");
    } else {
      toast.error("Não foi possível deletar a playlist");
    }
  };

  return {
    SendToCreatePlaylist,
    SendToUpdatePlaylist,
    playlists,
    deletePlaylist,
  };
}
