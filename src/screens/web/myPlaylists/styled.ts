import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-top: 60px;

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

const AddButton = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 60px;
  height: 60px;
  background-color: #121212;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #1f1f1f;
  }
`;
export { Container, Title, PlaylistCardsContainer, AddButton };
