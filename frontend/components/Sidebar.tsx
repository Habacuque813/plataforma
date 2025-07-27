"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // remova se não usar Next.js
import {
  HomeIcon,
  ChartBarIcon,
  UsersIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: <HomeIcon className="h-6 w-6" />,
  },
  {
    label: "Estatísticas",
    href: "/admin/stats",
    icon: <ChartBarIcon className="h-6 w-6" />,
  },
  {
    label: "Usuários",
    href: "/admin/users",
    icon: <UsersIcon className="h-6 w-6" />,
  },
  {
    label: "Configurações",
    href: "/admin/settings",
    icon: <Cog6ToothIcon className="h-6 w-6" />,
  },
];

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname() || "";
  // se não usar Next.js, comente a linha acima e use:
  // const pathname = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <aside
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`
      h-screen bg-white border-r flex flex-col
      transition-[width] duration-200 ease-in-out
      ${isExpanded ? "w-64" : "w-16"}
      `}
    >
      {/* Logo */}
      <div className="flex items-center px-4 py-5">
        <a href="/admin" className="flex items-center">
          <HomeIcon className="h-8 w-8 text-blue-600" />
          {isExpanded && (
            <span className="ml-2 text-2xl font-bold text-blue-600">
              Plataforma Edu
            </span>
          )}
        </a>
      </div>

      {/* Navegação */}
      <nav className="flex-1 px-2 space-y-1">
        {navItems.map(({ label, href, icon }) => {
          const isActive = pathname === href;
          return (
            <a
              key={href}
              href={href}
              className={`
            flex items-center px-3 py-2 text-sm font-medium rounded-md
            transition-colors duration-150
            ${isActive ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"}
            `}
            >
              <div
                className={`${isActive ? "text-blue-700" : "text-gray-500"}`}
              >
                {icon}
              </div>
              <span
                className={`
              ml-3 whitespace-nowrap overflow-hidden
              transition-opacity duration-200
              ${isExpanded ? "opacity-100" : "opacity-0"}
              `}
              >
                {label}
              </span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
