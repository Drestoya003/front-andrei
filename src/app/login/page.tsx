'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLogin } from '@/hooks/useLogin';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error } = useLogin();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      const role = response.user.role;
      
      if (role === 'ANDREI') {
        router.push('/maestro_supremo');
      } else if (role === 'DAEMON') {
        router.push('/daemons');
      } else if (role === 'NETWORK_ADMIN') {
        router.push('/resistance');
      } else {
        router.push('/');
      }
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6 rounded-2xl shadow-2xl glass-bg hypnotic-glow text-center">
        <h2 className="font-creepy text-2xl md:text-3xl text-purple-400 mb-4">
          Inicia Tu Posesión
        </h2>
        <p className="text-xs text-gray-400 mb-6">
          Ingresa tus credenciales para unirte al Imperio.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {error && (
            <div className="text-red-400 text-sm text-center">
              {error}
            </div>
          )}
          <div>
            <label className="block text-purple-300 font-bold mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded-lg bg-gray-900 border border-purple-600 text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Tu nombre de súbdito"
              required
            />
          </div>
          <div>
            <label className="block text-purple-300 font-bold mb-1" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded-lg bg-gray-900 border border-purple-600 text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="El sello de tu juramento"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full p-2 rounded-lg font-bold bg-purple-600 text-white shadow-lg transition-all hover:bg-purple-700 text-sm disabled:opacity-50"
          >
            {loading ? 'Entrando...' : 'Entrar al Portal'}
          </button>
        </form>
      </div>
    </div>
  );
}
