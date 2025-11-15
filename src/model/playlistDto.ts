export interface Playlist {
  id?: number;
  title: string;
  description: string;
  likes?: number;
  gender: string;
  created_at?: string;
  created_by?: string;
  tracks: Track[];
}

export interface Track {
  deezer_id: string;
  title: string;
  artist: string;
  duration: number;
  preview_url: string;
  cover_url: string;
  album: string;
}
