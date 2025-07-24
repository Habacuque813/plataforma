import NextAuth, { type NextAuthOptions } from "next-auth";
import { credentialsProvider } from "@/lib/auth/credentials";

// aqui declaramos authOptions, mas não o exportamos
const authOptions: NextAuthOptions = {
  providers: [credentialsProvider],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.accessToken = (user as any).token;
      return token;
    },
    async session({ session, token }) {
      session.user.token = token.accessToken as string;
      return session;
    },
  },
};

// criamos o handler do NextAuth passando authOptions
const handler = NextAuth(authOptions);

// e somente exportamos os métodos HTTP que queremos
export { handler as GET, handler as POST };
