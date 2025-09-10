

import LogoutButton from '../components/LogoutButton';

export default function daemons(){
    return (
          <div className="w-full h-full flex flex-col items-center p-4 overflow-y-auto">
            <div className="w-full flex justify-end mb-4">
              <LogoutButton />
            </div>
            <h2 className="font-creepy text-2xl md:text-3xl text-purple-400 mb-6">
              Mis Daemons
            </h2>
            <p className="text-base md:text-lg text-gray-400">
              Aquí reside la legión de desarrolladores corrompidos por mis hechizos.
            </p>
            
            <div className="w-full max-w-xl p-6 rounded-2xl shadow-2xl glass-bg mb-8 mt-6">
              <h3 className="font-creepy text-xl text-purple-300 mb-4">Registro de Víctimas</h3>
              <p className="text-gray-400 text-xs mb-4">
                ¡Trae una nueva alma para que se una a nuestras filas!
              </p>
              <form>
                <input
                  type="text"
                  className="w-full p-2 rounded-lg bg-gray-900 border border-purple-600 text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm mb-4"
                  placeholder="Nombre de la nueva víctima"
                />
                <button
                  type="submit"
                  className="w-full p-2 rounded-lg font-bold bg-purple-600 text-white shadow-lg transition-all hover:bg-purple-700 text-sm"
                >
                  Registrar Víctima
                </button>
              </form>
            </div>

            <div className="w-full max-w-xl p-6 rounded-2xl shadow-2xl glass-bg mb-8">
              <h3 className="font-creepy text-xl text-purple-300 mb-4">Ranking de Daemons</h3>
              <ul className="text-left text-gray-300 space-y-3 text-sm">
                <li><span className="font-bold text-yellow-400">1. Sombra Letal:</span> 1,245 víctimas</li>
                <li><span className="font-bold text-gray-400">2. Corruptor de Código:</span> 987 víctimas</li>
                <li><span className="font-bold text-gray-400">3. El Inestable:</span> 765 víctimas</li>
                <li><span className="font-bold text-gray-400">4. El Hacedor de Bugs:</span> 543 víctimas</li>
                <li><span className="font-bold text-gray-400">5. El Falso DevOps:</span> 321 víctimas</li>
              </ul>
            </div>

            <div className="w-full max-w-xl p-6 rounded-2xl shadow-2xl glass-bg mb-8">
              <h3 className="font-creepy text-xl text-purple-300 mb-4">Mis Estadísticas</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-center">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <span className="font-bold text-purple-400 text-lg">23</span>
                  <p className="mt-1 text-gray-300">Víctimas Registradas</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <span className="font-bold text-purple-400 text-lg">5°</span>
                  <p className="mt-1 text-gray-300">Puesto en el Ranking</p>
                </div>
              </div>
            </div>
          </div>
        );
}
    