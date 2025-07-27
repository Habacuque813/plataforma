import { useState } from "react";
import {
  FiMenu,
  FiSearch,
  FiBell,
  FiUser,
  FiChevronDown,
} from "react-icons/fi";

type HeaderProps = {
  onToggleSidebar?: () => void;
  userName?: string;
  avatarUrl?: string;
};

export default function Header({
  onToggleSidebar,
  userName = "Usuário",
  avatarUrl = "/avatar-placeholder.png",
}: HeaderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Menu e logo */}
        <div className="flex items-center">
          {onToggleSidebar && (
            <button
              onClick={onToggleSidebar}
              className="text-gray-500 hover:text-gray-700 mr-4 lg:hidden"
            >
              <FiMenu size={24} />
            </button>
          )}

          <a className="text-2xl font-bold text-indigo-600 hover:text-indigo-700">
            MinhaApp
          </a>
        </div>

        {/* Campo de busca */}
        <div className="flex-1 px-4 hidden sm:block">
          <div className="relative text-gray-600 focus-within:text-gray-900">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <FiSearch />
            </span>
            <input
              type="search"
              name="search"
              placeholder="Buscar..."
              className="w-full py-2 pl-10 pr-4 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>
        </div>

        {/* Ações do usuário */}
        <div className="flex items-center space-x-4">
          {/* Notificações */}
          <button className="relative text-gray-500 hover:text-gray-700">
            <FiBell size={20} />
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* Avatar e dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen((o) => !o)}
              className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <img
                src={avatarUrl}
                alt="Avatar do usuário"
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="ml-2 hidden sm:block">{userName}</span>
              <FiChevronDown className="ml-1" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1">
                <Link href="/profile">
                  <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Meu perfil
                  </a>
                </Link>
                <Link href="/settings">
                  <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Configurações
                  </a>
                </Link>
                <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Sair
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
