import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const credentialsProvider = CredentialsProvider({
  name: "Credenciais",
  credentials: {
    email: { label: "Email", type: "email" },
    password: { label: "Senha", type: "password" },
  },
  async authorize(rawCredentials) {
    const parsed = credentialsSchema.safeParse(rawCredentials);
    if (!parsed.success) return null;

    const res = await fetch(`${process.env.API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });
    if (!res.ok) return null;

    const { token, user } = await res.json();
    // Supondo que a API já retorne também `user.id`, `user.email`, `user.name`
    // Se API só retornar { token }, use parsed.data.email como fallback:
    const id = user?.id ?? parsed.data.email;
    const email = user?.email ?? parsed.data.email;
    const name = user?.name ?? parsed.data.email;

    return {
      id,
      email,
      name,
      token, // armazenado depois no JWT
    };
  },
});
