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

const Content = styled.div`
  width: 1000px;
  border-radius: 18px;
  background-color: #eaeaea;
  padding: 16px 30px;
`;

const Title = styled.p`
  font-size: 55px;
  font-weight: bold;
  color: grey;
  margin: 0px;
  margin-top: 20px;
`;

const UserText = styled.p`
  color: gray;
  font-size: 18px;
  font-weight: 700;

  &:hover {
  }
`;

const Desc = styled.p`
  color: grey;
  font-size: 22px;
  margin: 0px;
`;

const InfoText = styled.p`
  color: grey;
  font-size: 18px;
  font-weight: 600;
`;

const Pin = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: grey;
`;

const InfoDataRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  margin-bottom: 40px;
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #1f4261ff;
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: 45px repeat(2, 1fr) 200px 80px;
  gap: 8px;
  margin: 20px auto 10px auto;
  justify-content: flex-start;
  align-items: center;
`;

const MenuTitle = styled.div`
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding: 8px;
  /* border-radius: 10px; */
  border-bottom: 2px solid #1f4261ff;
  font-size: 16px;
  color: #1f4261ff;
`;

const MusicCardsContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 12px;
`;

export {
  Container,
  Content,
  Title,
  UserText,
  Desc,
  InfoText,
  InfoDataRow,
  Pin,
  Line,
  MenuGrid,
  MenuTitle,
  MusicCardsContent,
};
