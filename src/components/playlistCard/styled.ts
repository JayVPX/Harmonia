import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
  height: 240px;
  background-color: #121212;
  padding: 16px 10px;
  border-radius: 16px;
  justify-content: center;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #1f1f1f;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 160px;
  height: 140px;
  border-radius: 16px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
`;

const Title = styled.p`
  font-size: 14px;
  font-weight: 800;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

const Text = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: #777;
`;

const TrashContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const TrashButton = styled.div`
  display: flex;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease;
  &:hover {
    background-color: #466f96ff;
  }
`;

export {
  Card,
  Title,
  Text,
  TextContainer,
  Image,
  ImageContainer,
  TrashContainer,
  TrashButton,
};
