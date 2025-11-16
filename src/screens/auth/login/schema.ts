import z from "zod";

export const LoginSchema = z.object({
  username: z.string().nonempty("O username é obrigatório"),

  password: z.string().nonempty("A senha é obrigatória"),
});

export const RegisterSchema = z
  .object({
    username: z.string().min(3, "Preencha com seu username por favor"),
    email: z.string().email("Email inválido"),
    password: z.string().min(5, "A senha deve ter pelo menos 5 caracteres."),
    password2: z.string().min(5, "A senha deve ter pelo menos 5 caracteres."),
  })
  .refine((data) => data.password === data.password2, {
    message: "As senhas não coincidem.",
    path: ["password2"],
  });

export type RegisterType = z.infer<typeof RegisterSchema>;
export type LoginType = z.infer<typeof LoginSchema>;
