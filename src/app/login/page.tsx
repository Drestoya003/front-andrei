export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6 rounded-2xl shadow-2xl glass-bg hypnotic-glow text-center">
        {/* Agregamos text-center al contenedor */}
        <h2 className="font-creepy text-2xl md:text-3xl text-purple-400 mb-4">
          Inicia Tu Posesión
        </h2>
        <p className="text-xs text-gray-400 mb-6">
          Ingresa tus credenciales para unirte al Imperio.
        </p>
        <form className="space-y-4 text-left">
          {/* text-left aquí para mantener etiquetas e inputs alineados */}
          <div>
            <label
              className="block text-purple-300 font-bold mb-1"
              htmlFor="username"
            >
              Usuario
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-2 rounded-lg bg-gray-900 border border-purple-600 text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Tu nombre de súbdito"
            />
          </div>
          <div>
            <label
              className="block text-purple-300 font-bold mb-1"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 rounded-lg bg-gray-900 border border-purple-600 text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="El sello de tu juramento"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 rounded-lg font-bold bg-purple-600 text-white shadow-lg transition-all hover:bg-purple-700 text-sm"
          >
            Entrar al Portal
          </button>
        </form>
      </div>
    </div>
  );
}
