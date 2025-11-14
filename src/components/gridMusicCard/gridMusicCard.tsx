import { useRef, useState } from "react";
import {
  GridBody,
  MusicImage,
  MusicImageWrapper,
  PlayButton,
  Text,
} from "./styled";
import { FaPlay, FaPause } from "react-icons/fa6";
interface Props {
  title: string;
  artist: string;
  preview: string;
  cover: string;
  album: string;
  duration: number;
  position: number;
}

export function GridMusicCard({
  album,
  artist,
  cover,
  duration,
  preview,
  title,
  position,
}: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPreview = () => {
    if (!preview) return;

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
      setIsPlaying(false);
      return;
    }

    const audio = new Audio(preview);
    audio.volume = 0.3;
    audioRef.current = audio;
    audio.play();
    setIsPlaying(true);

    audio.addEventListener("ended", () => {
      setIsPlaying(false);
      audioRef.current = null;
    });
  };

  return (
    <GridBody>
      <Text>{position}</Text>

      <MusicImageWrapper onClick={handlePlayPreview}>
        <MusicImage src={cover} alt={title} />
        <PlayButton>
          {isPlaying ? (
            <FaPause size={12} color="#0d83e4" />
          ) : (
            <FaPlay size={12} color="#0d83e4" />
          )}
        </PlayButton>
      </MusicImageWrapper>

      <Text>{album}</Text>
      <Text>{artist}</Text>
      <Text>{duration}</Text>
    </GridBody>
  );
}
