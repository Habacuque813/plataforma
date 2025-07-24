import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      token?: string; // ← Aqui você adiciona o token ao Session.user
    };
  }

  interface User {
    token?: string; // ← Caso queira expor o token no objeto user interno
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string; // ← Aqui seu callback `jwt` pode gravar o accessToken
  }
}
