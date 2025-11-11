export interface Playlist {
  id: number;
  title: string;
  description: string;
  likes: number;
  gender: string;
  created_at: string;
  tracks: Track[];
}

export interface Track {
  deezer_id: string;
  title: string;
  artist: string;
  duration: string;
  preview_url: string;
  cover_url: string;
  album: string;
}
