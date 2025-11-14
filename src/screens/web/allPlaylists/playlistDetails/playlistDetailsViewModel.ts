export function PlaylistDetailsViewModel() {
  const columns = ["Nº", "Título", "Álbum", "Artista", "Duração"];
  const music = [
    {
      deezer_id: 2743578151,
      title: "Espresso",
      artist: "Sabrina Carpenter",
      album: "Espresso",
      duration: 175,
      preview_url:
        "https://cdnt-preview.dzcdn.net/api/1/1/1/7/a/0/17a21c40ce4af3ac9514aac756403188.mp3?hdnea=exp=1763077270~acl=/api/1/1/1/7/a/0/17a21c40ce4af3ac9514aac756403188.mp3*~data=user_id=0,application_id=42~hmac=6d3dcf77be5c4202bcde878b55e03e26e4053872d2fc235dd56a1f0c712ac284",
      cover_url:
        "https://cdn-images.dzcdn.net/images/cover/e3221287a77eb262944e6528766eeba4/250x250-000000-80-0-0.jpg",
    },
  ];

  return { columns, music };
}
