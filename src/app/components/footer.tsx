import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full p-4 md:p-6 rounded-t-2xl shadow-xl glass-bg fixed bottom-0 z-10 flex justify-center">
      <p className="text-xs text-gray-400">
        &copy; 2024 El Imperio Retorcido. Todos los derechos corrompidos.
      </p>
    </footer>
  );
}
