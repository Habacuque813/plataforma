import "../styles/globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Plataforma EAD",
  description: "Aprenda online no seu ritmo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
