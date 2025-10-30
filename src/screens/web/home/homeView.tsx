import { useState } from "react";
import { useHomeViewModel } from "./homeViewModel";
import { Container, Image, Title } from "./styled";

export function HomeView() {
  // const { addToPlaylist, clearMusic, searchMusic, query, setQuery, music } =
  //   useHomeViewModel();

  return (
    // <div style={{ padding: "20px" }}>
    //   <h1>Busca de Músicas 🎵</h1>
    //   <input
    //     type="text"
    //     value={query}
    //     placeholder="Digite o nome da música"
    //     onChange={(e) => setQuery(e.target.value)}
    //   />
    //   <button onClick={searchMusic}>Buscar</button>

    //   {music.id !== "" && (
    //     <>
    //       <h2>{music.titulo}</h2>
    //       <img src={music.cover} alt="cover" />
    //       <h3>{music.artista}</h3>
    //       <div
    //         style={{
    //           display: "flex",
    //           flexDirection: "row",
    //           gap: 10,
    //           justifyContent: "center",
    //         }}
    //       >
    //         <audio controls>
    //           <source src={music.preview} type="audio/mpeg" />
    //           Seu navegador não suporta o player de áudio.
    //         </audio>

    //         <button onClick={addToPlaylist}>Inserir na playlist</button>
    //         <button onClick={clearMusic}>Limpar</button>
    //       </div>
    //     </>
    //   )}
    // </div>

    <Container>
      <Image src="/src/assets/HarmoniaLogo.jpg" alt="Harmonia" />
      <Title>Crie, ouça e compartilhe sua harmonia.</Title>
    </Container>
  );
}
