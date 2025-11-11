import styled from "styled-components";

const MusicCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  background-color: #5280a8ff;
  padding: 20px 40px;
  border-radius: 16px;
`;

const MusicImageWrapper = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
`;

const MusicImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  cursor: pointer;
`;

const MusicTitle = styled.p`
  font-size: 18px;
  font-weight: 900;
  color: white;
`;

const PlayButton = styled.div`
  position: absolute;
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: #f0eaeaff;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
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

export {
  MusicCard,
  MusicImage,
  MusicImageWrapper,
  MusicTitle,
  Button,
  PlayButton,
};
