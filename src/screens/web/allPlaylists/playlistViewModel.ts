import { useNavigate } from "react-router-dom";

export function AllPlaylistsViewModel() {
  const navigate = useNavigate();

  const Playlists = [
    {
      nome: "TheBestTOP",
      user: "HLE Zeus",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCSbXwI5ZfELU9rgMD6XJpZY1nv42Bjlis9Q&s",
    },
    {
      nome: "TheBestJG",
      user: "GEN Canyon",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWzmMYFZFHECjW1PpHredJfqWwcBsTbJP3MQ&s",
    },
    {
      nome: "TheBestMID",
      user: "GEN Chovy TLGD MENOR",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCSbXwI5ZfELU9rgMD6XJpZY1nv42Bjlis9Q&s",
    },
    {
      nome: "TheBestADC",
      user: "GEN Ruler",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCSbXwI5ZfELU9rgMD6XJpZY1nv42Bjlis9Q&s",
    },
    {
      nome: "TheBestSUP",
      user: "T1 Keria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCSbXwI5ZfELU9rgMD6XJpZY1nv42Bjlis9Q&s",
    },
    {
      nome: "TheBestTOP",
      user: "HLE Zeus",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCSbXwI5ZfELU9rgMD6XJpZY1nv42Bjlis9Q&s",
    },
    {
      nome: "TheBestJG",
      user: "GEN Canyon",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWzmMYFZFHECjW1PpHredJfqWwcBsTbJP3MQ&s",
    },
    {
      nome: "TheBestMID",
      user: "GEN Chovy TLGD MENOR",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCSbXwI5ZfELU9rgMD6XJpZY1nv42Bjlis9Q&s",
    },
    {
      nome: "TheBestADC",
      user: "GEN Ruler",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCSbXwI5ZfELU9rgMD6XJpZY1nv42Bjlis9Q&s",
    },
    {
      nome: "TheBestSUP",
      user: "T1 Keria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCSbXwI5ZfELU9rgMD6XJpZY1nv42Bjlis9Q&s",
    },
    {
      nome: "TheBestTOP",
      user: "HLE Zeus",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCSbXwI5ZfELU9rgMD6XJpZY1nv42Bjlis9Q&s",
    },
    {
      nome: "TheBestJG",
      user: "GEN Canyon",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWzmMYFZFHECjW1PpHredJfqWwcBsTbJP3MQ&s",
    },
    {
      nome: "TheBestMID",
      user: "GEN Chovy TLGD MENOR",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCSbXwI5ZfELU9rgMD6XJpZY1nv42Bjlis9Q&s",
    },
    {
      nome: "TheBestADC",
      user: "GEN Ruler",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCSbXwI5ZfELU9rgMD6XJpZY1nv42Bjlis9Q&s",
    },
    {
      nome: "TheBestSUP",
      user: "T1 Keria",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCSbXwI5ZfELU9rgMD6XJpZY1nv42Bjlis9Q&s",
    },
  ];

  const sendToPlaylist = (id: string) => {
    navigate({ pathname: `/playlist/all/${id}` });
  };

  return { Playlists, sendToPlaylist };
}
