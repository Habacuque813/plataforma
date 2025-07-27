import "@/styles/globals.css";


export const metadata = {
  title: "Plataforma Edu – Dashboard",
};

export default function Footer() {
  return (
  <footer className="border-t bg-white px-6 py-4 text-center text-sm text-gray-500">
  © {new Date().getFullYear()} Plataforma Edu. Todos os direitos reservados.
  </footer>
  );
}
