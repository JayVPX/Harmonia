import z from "zod";

export const CreatePlaylistSchema = z.object({
  nome: z.string().min(3, "O nome da playlist é obrigatório"),
  descricao: z.string().min(3, "A descrição é obrigatória"),
});

export type CreatePlaylistType = z.infer<typeof CreatePlaylistSchema>;
