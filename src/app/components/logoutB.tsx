'use client';

import { useRouter } from 'next/navigation';
import { clearSession } from '@/lib/session';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    clearSession();
    window.location.href = '/login';
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
    >
      Cerrar Sesión
    </button>
  );
}