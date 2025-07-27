// components/BrandProvider.tsx
//"use client";
//import { createContext, useContext } from "react";
//import branding from "/public/branding.json";

//const BrandContext = createContext(branding);
//export function BrandProvider({ children }: { children: //React.ReactNode }) {
//return (
//<BrandContext.Provider //value={branding}>{children}</BrandContext.Provider>
// );
//}
//export const useBrand = () => //useContext(BrandContext);
//Centralizar configurações de marca

//Crie um arquivo JSON ou variáveis de ambiente por cliente, ex. public/branding.json:

//json
//{
//    "name": "Escola Alfa",
//   "themeColor": "#1e40af",
//   "logoUrl": "/assets/branding/logo-alfa.png"
//}
//No build ou em tempo de execução, carregue essa config e disponibilize via Context API.
//componente.

//Aproveitar o Context na Sidebar, Header, Footer etc.

//tsx
// components/Sidebar.tsx (trecho)
//import { useBrand } from "./BrandProvider";
//export default function Sidebar() {
//  const { name, logoUrl, themeColor } = useBrand();
//return (
//   <aside style={{ borderColor: themeColor }}>
//   <img src={logoUrl} alt={name} className="h-8" />
//  <h2 style={{ color: themeColor }}>{name}</h2>
// {/* … */}
// </aside>
// );
//}
