

export default function resistance(){
    return (
          // Contenido de la página "La Resistencia"
          <div className="w-full h-full flex flex-col items-center p-4 overflow-y-auto">
            <h2 className="font-creepy text-2xl md:text-3xl text-purple-400 mb-6">
              La Resistencia 😎
            </h2>
            
            {/* Sección de Tips de Supervivencia */}
            <div className="w-full max-w-xl p-6 rounded-2xl shadow-2xl glass-bg mb-8">
              <h3 className="font-creepy text-xl text-purple-300 mb-4">Tips de Supervivencia</h3>
              <ul className="text-left text-gray-300 space-y-3 text-sm">
                <li><span className="font-bold text-purple-400">1. Backup Diario:</span> Haz copias de seguridad de todo, ¡especialmente de tu alma!</li>
                <li><span className="font-bold text-purple-400">2. Firewall Espiritual:</span> Mantén tu firewall en modo "hard-core" para repeler cualquier hechizo de denegación de servicio.</li>
                <li><span className="font-bold text-purple-400">3. Antimalware Místico:</span> Usa un antimalware que detecte y purifique el código corrupto.</li>
                <li><span className="font-bold text-purple-400">4. Desconexión Ritual:</span> Desconéctate por completo del trabajo los fines de semana. La mente de Andrei solo opera de lunes a viernes.</li>
              </ul>
            </div>

            {/* Sección de Memes */}
            <div className="w-full max-w-xl p-6 rounded-2xl shadow-2xl glass-bg mb-8">
              <h3 className="font-creepy text-xl text-purple-300 mb-4">Memes para la Victoria</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-center">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <span className="text-4xl">🔮</span>
                  <p className="mt-2 text-gray-300">"Cuando Andrei te dice que su código 'funciona por magia'."</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <span className="text-4xl">💻</span>
                  <p className="mt-2 text-gray-300">"Yo, después de configurar un solo Docker Compose en la red de Andrei: 💪😎"</p>
                </div>
              </div>
            </div>

            {/* Sección de Reportes Anónimos */}
            <div className="w-full max-w-xl p-6 rounded-2xl shadow-2xl glass-bg">
              <h3 className="font-creepy text-xl text-purple-300 mb-4">Reportes Anónimos</h3>
              <p className="text-gray-400 text-xs mb-4">
                Envía tu reporte anónimo. Toda la información será usada para luchar contra Andrei.
              </p>
              <form>
                <textarea
                  className="w-full h-32 p-3 rounded-lg bg-gray-900 border border-purple-600 text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
                  placeholder="Describe la corrupción que has visto en la red..."
                ></textarea>
                <button
                  type="submit"
                  className="mt-4 w-full p-2 rounded-lg font-bold bg-green-600 text-white shadow-lg transition-all hover:bg-green-700 text-sm"
                >
                  Enviar Reporte
                </button>
              </form>
            </div>
          </div>
        );
}