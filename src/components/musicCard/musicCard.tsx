import { useRef, useState } from "react";
import {
  Button,
  CardRow,
  MusicImage,
  MusicImageWrapper,
  PlayButton,
  Text,
} from "./styled";
import { Trash2 } from "lucide-react";
import { FaPlay, FaPause } from "react-icons/fa6";

interface Props {
  album?: string;
  artist?: string;
  music?: string;
  cover?: string;
  preview?: string;
  onClick?: () => void;
}

export function MusicCard({
  album,
  artist,
  music,
  cover,
  onClick,
  preview,
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
    <CardRow>
      <MusicImageWrapper onClick={handlePlayPreview}>
        <MusicImage src={cover} alt={music} />
        <PlayButton>
          {isPlaying ? (
            <FaPause size={12} color="#0d83e4" />
          ) : (
            <FaPlay size={12} color="#0d83e4" />
          )}
        </PlayButton>
      </MusicImageWrapper>

      <Text>
        {music} - {artist}
      </Text>
      <Text>{album}</Text>
      <Button>
        <Trash2 size={24} color="#102539" onClick={onClick} />
      </Button>
    </CardRow>
  );
}
