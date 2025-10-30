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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  background-color: #eaeaea;
  padding: 20px;
  border-radius: 20px;
  gap: 20px;
`;

export { Container, Form };
