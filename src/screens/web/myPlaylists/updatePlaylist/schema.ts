import z from "zod";

export const UpdatePlaylistSchema = z.object({
  nome: z.string().min(3, "O nome da playlist é obrigatório"),
  descricao: z.string().min(3, "A descrição é obrigatória"),
  genero: z.string({ message: "Escolha o gênero da playlist" }),
});

export type UpdatePlaylistType = z.infer<typeof UpdatePlaylistSchema>;
