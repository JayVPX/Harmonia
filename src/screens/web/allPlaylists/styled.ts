import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 60px;
  /* height: 1vh; */
`;

const Title = styled.h1`
  margin-bottom: 60px;
`;

const PlaylistCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 80px;
`;

export { Container, Title, PlaylistCardsContainer };
