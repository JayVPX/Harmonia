import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 60px;

  /* height: 1vh; */
`;

const Title = styled.h1``;

const Image = styled.img`
  width: 400px;
`;

export { Container, Title, Image };
