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
  font-size: 18px;
  font-weight: bold;
  color: #102539;
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

const Button = styled.div`
  cursor: pointer;
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

export { CardRow, MusicImage, Text, Button, PlayButton, MusicImageWrapper };
