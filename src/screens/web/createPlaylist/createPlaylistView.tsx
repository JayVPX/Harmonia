import { MenuItem, Select, TextField } from "@mui/material";
import { Container, Form } from "./styled";
import { CreatePlaylistViewModel } from "./createPlaylistViewModel";

export function CreatePlaylistView() {
  const { generos } = CreatePlaylistViewModel();

  return (
    <Container>
      <Form>
        <TextField label="Nome " />
        <TextField label="Descrição " />
        <Select label="Gênero">
          {generos.map((g) => (
            <MenuItem value={g}>{g}</MenuItem>
          ))}
        </Select>
      </Form>
    </Container>
  );
}
