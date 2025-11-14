import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  gap: 20px;
  /* height: 1vh; */
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 1080px;
  background-color: #eaeaea;
  padding: 20px;
  border-radius: 20px;
  gap: 20px;
`;

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  margin-bottom: 40px;
`;

const Button = styled.button`
  background-color: #102539;
  font-size: 16px;
  font-weight: bold;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 16px;
  cursor: pointer;

  transition: 0.3s ease;

  &:hover {
    background-color: #1f4261ff;
  }
`;

const Title = styled.p`
  font-size: 24px;
  color: grey;
  font-weight: bold;
  font-style: italic;
`;

const MusicContainer = styled.div`
  display: flex;
  margin: 0 auto;
`;

const MusicImage = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 18px;
`;

const MusicTitle = styled.p`
  font-size: 18px;
  font-weight: 900;
  color: white;
`;

export {
  Container,
  Body,
  FormBody,
  SearchContainer,
  InputRow,
  Button,
  Title,
  MusicContainer,
  MusicImage,
  MusicTitle,
};
