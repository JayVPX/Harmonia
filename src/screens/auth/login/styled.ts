import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90vh;
  width: 1080px;
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 400px;
`;

const AuthBox = styled.div`
  width: 500px;
  padding: 16px;
  background-color: #eaeaea;
  border-radius: 26px;
`;

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h1`
  color: black;
  margin: 0;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Container, Logo, AuthBox, Form, Title, TitleContainer };
