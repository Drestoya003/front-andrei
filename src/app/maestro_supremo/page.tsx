

export default function maestro(){
    return (
          // Contenido de la página "Maestro Supremo"
          <div className="w-full flex flex-col items-center p-4 overflow-y-auto">
            <h2 className="font-creepy text-2xl md:text-3xl text-purple-400 mb-6">
              Maestro Supremo Andrei Mes Manur
            </h2>
            <p className="text-sm md:text-base text-purple-300 italic mb-6">
              ¡Recuerda, esclavo, que tu existencia es un mero eco de mi voluntad! Obedece sin dudar, o tu alma será corrompida y tu código se volverá inútil.
            </p>

            <div className="w-full max-w-xl p-6 rounded-2xl shadow-2xl glass-bg mb-8 mt-6">
              <h3 className="font-creepy text-xl text-purple-300 mb-4">Recompensas y Castigos</h3>
              <p className="text-gray-400 text-xs mb-4">
                Usa tu poder para controlar a tus daemons.
              </p>
              <form className="space-y-4">
                <div>
                  <label className="block text-purple-300 font-bold mb-1 text-left text-sm" htmlFor="daemon-name-reward">
                    Nombre del Daemon
                  </label>
                  <input
                    type="text"
                    id="daemon-name-reward"
                    className="w-full p-2 rounded-lg bg-gray-900 border border-purple-600 text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
                    placeholder="Elige a tu súbdito"
                  />
                </div>
                <div>
                  <label className="block text-purple-300 font-bold mb-1 text-left text-sm" htmlFor="action-type">
                    Acción
                  </label>
                  <select
                    id="action-type"
                    className="w-full p-2 rounded-lg bg-gray-900 border border-purple-600 text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
                  >
                    <option>Recompensa</option>
                    <option>Castigo</option>
                  </select>
                </div>
                <div>
                  <label className="block text-purple-300 font-bold mb-1 text-left text-sm" htmlFor="action-details">
                    Detalles
                  </label>
                  <textarea
                    id="action-details"
                    className="w-full h-24 p-2 rounded-lg bg-gray-900 border border-purple-600 text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
                    placeholder="Describe el hechizo..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full p-2 rounded-lg font-bold bg-purple-600 text-white shadow-lg transition-all hover:bg-purple-700 text-sm"
                >
                  Asignar Acción
                </button>
              </form>
            </div>

            {/* Panel de Modificación de Estadísticas */}
            <div className="w-full max-w-xl p-6 rounded-2xl shadow-2xl glass-bg mb-8">
              <h3 className="font-creepy text-xl text-purple-300 mb-4">Modificar Estadísticas</h3>
              <p className="text-gray-400 text-xs mb-4">
                Ajusta las métricas de tu ejército.
              </p>
              <form className="space-y-4">
                <div>
                  <label className="block text-purple-300 font-bold mb-1 text-left text-sm" htmlFor="daemon-name-stats">
                    Nombre del Daemon
                  </label>
                  <input
                    type="text"
                    id="daemon-name-stats"
                    className="w-full p-2 rounded-lg bg-gray-900 border border-purple-600 text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
                    placeholder="Elige a tu súbdito"
                  />
                </div>
                <div>
                  <label className="block text-purple-300 font-bold mb-1 text-left text-sm" htmlFor="stat-to-modify">
                    Estadística a modificar
                  </label>
                  <input
                    type="text"
                    id="stat-to-modify"
                    className="w-full p-2 rounded-lg bg-gray-900 border border-purple-600 text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
                    placeholder="Ej. víctimas, errores, etc."
                  />
                </div>
                <div>
                  <label className="block text-purple-300 font-bold mb-1 text-left text-sm" htmlFor="new-value">
                    Nuevo valor
                  </label>
                  <input
                    type="number"
                    id="new-value"
                    className="w-full p-2 rounded-lg bg-gray-900 border border-purple-600 text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
                    placeholder="Ingresa el nuevo número"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full p-2 rounded-lg font-bold bg-purple-600 text-white shadow-lg transition-all hover:bg-purple-700 text-sm"
                >
                  Modificar Estadísticas
                </button>
              </form>
            </div>
          </div>
        );
}
    