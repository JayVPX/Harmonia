import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Playlist } from "../../../model/playlistDto";
import api from "../../../service/api";
import { toast } from "react-toastify";

export function MyPlaylistsViewModel() {
  const navigate = useNavigate();
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  //useEffect para capturar as playlists do usuário
  useEffect(() => {
    const renderPlaylists = async () => {
      setLoading(true);
      const response = await api.get("/playlists/");
      if (response.status === 200) {
        setPlaylists(response.data.results);
        setLoading(false);
      } else {
        toast.error("Ocorreu um erro, tente novamente");
        setLoading(false);
      }
    };

    renderPlaylists();
  }, []);
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

    if ([200, 201, 204].includes(response.status)) {
      toast.success("Playlist deletada com sucesso");
      setPlaylists((prev) => prev.filter((p) => String(p.id) !== id));
    } else {
      toast.error("Não foi possível deletar a playlist");
    }
  };

  return {
    SendToCreatePlaylist,
    SendToUpdatePlaylist,
    playlists,
    deletePlaylist,
    loading,
  };
}
