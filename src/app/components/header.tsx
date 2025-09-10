import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full p-4 md:p-6 shadow-xl glass-bg fixed top-0 z-10 flex justify-between items-center">
      <h1 className="font-creepy text-xl md:text-2xl text-purple-400">
        Andrei Mes Manur
      </h1>
      <nav className="flex space-x-4">
        <Link
          href="/login"
          className="text-purple-300 hover:text-purple-500 transition-colors duration-300 font-bold text-xs md:text-sm"
        >
          Iniciar Sesión
        </Link>
        <Link
          href="/maestro_supremo"
          className="text-purple-300 hover:text-purple-500 transition-colors duration-300 font-bold text-xs md:text-sm"
        >
          Maestro Supremo Andrei Mes Manur
        </Link>
        <Link
          href="/daemons"
          className="text-purple-300 hover:text-purple-500 transition-colors duration-300 font-bold text-xs md:text-sm"
        >
          Daemons (súbditos)
        </Link>
        <Link
          href="/resistance"
          className="text-purple-300 hover:text-purple-500 transition-colors duration-300 font-bold text-xs md:text-sm"
        >
          Resistance
        </Link>
      </nav>
    </header>
  );
}
