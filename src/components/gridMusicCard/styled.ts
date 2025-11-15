import styled from "styled-components";

const MusicImageWrapper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
`;

const MusicImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  cursor: pointer;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #102539;
`;

const GridBody = styled.div`
  display: grid;
  grid-template-columns: 45px repeat(2, 1fr) 200px 80px;
  gap: 2px;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  padding-bottom: 8px;
  padding-top: 8px;
  padding-left: 10px;
  border-radius: 8px;

  &:hover {
    background-color: #5280a8ff;
    transform: translateY(-3px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
  }

  &:hover ${Text} {
    color: white;
  }
`;

const CardRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: aliceblue;
  padding: 8px;
  border-radius: 12px;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    background-color: #5280a8ff;
    transform: translateY(-3px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
  }

  &:hover ${Text} {
    color: white;
  }
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0eaeaff;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
`;

const ImageTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
`;

export {
  GridBody,
  MusicImage,
  MusicImageWrapper,
  CardRow,
  PlayButton,
  Text,
  ImageTitleContainer,
};
