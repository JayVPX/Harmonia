import { useRef, useState } from "react";
import {
  Button,
  MusicCard,
  MusicImage,
  MusicImageWrapper,
  MusicTitle,
  PlayButton,
} from "./styled";
import { FaPlay, FaPause } from "react-icons/fa6";

interface Props {
  title: string;
  album: string;
  image: string;
  preview: string;
  artist: string;
  onClick: () => void;
}

export function SearchMusicCard({
  album,
  artist,
  image,
  onClick,
  preview,
  title,
}: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPreview = () => {
    if (!preview) return;

    // Se já existe um áudio tocando, para
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
      setIsPlaying(false);
      return;
    }

    // Cria um novo áudio e toca
    const audio = new Audio(preview);
    audioRef.current = audio;
    audio.play();
    setIsPlaying(true);

    // Quando o áudio terminar, resetar o estado
    audio.addEventListener("ended", () => {
      setIsPlaying(false);
      audioRef.current = null;
    });
  };

  return (
    <MusicCard>
      <MusicTitle>
        {title} - {album}
      </MusicTitle>
      <MusicImageWrapper onClick={handlePlayPreview}>
        <MusicImage src={image} alt={title} />
        {isPlaying ? (
          <PlayButton>
            <FaPause size={26} color="#0d83e4" />
          </PlayButton>
        ) : (
          <PlayButton>
            <FaPlay size={26} color="#0d83e4" />
          </PlayButton>
        )}
      </MusicImageWrapper>

      <MusicTitle>{artist}</MusicTitle>

      <Button type="button" onClick={onClick}>
        Adicionar
      </Button>
    </MusicCard>
  );
}
