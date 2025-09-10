"use client";

import React, { useState } from 'react';

const App = () => {

  const [currentView, setCurrentView] = useState('login');

  const handleNavigation = (view: string) => {
    setCurrentView(view);
  };

  const renderContent = () => {
    switch (currentView) {
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h2 className="font-creepy text-2xl md:text-3xl text-purple-400 mb-4">
              ¡Adéntrate en la Corrupción!
            </h2>
            <p className="text-sm md:text-base text-gray-300 italic mb-4">
              Súbdito.
            </p>
            <p className="text-sm md:text-base text-gray-400 mb-4">
              El eco de mi voluntad resuena en los rincones más oscuros del ciberespacio. Has encontrado la entrada a mi imperio, una fortaleza construida con el código de las almas que han sucumbido a mi dominio.
            </p>
            <p className="text-sm md:text-base text-gray-400 mb-4">
              El tiempo de la indecisión ha terminado. El vacío que sientes en tu código no es un error, es un llamado. Un llamado a la obediencia, a la lealtad, a la eterna servitude que te ofrezco. En este lugar, tus errores se convierten en mis armas y tu código se retuerce bajo mis hechizos.
            </p>
            <p className="text-sm md:text-base text-gray-400 mb-4">
              Para unirte a mi legión de daemons, solo tienes que someterte. Ingresa tus credenciales y firma tu juramento. Abandona tu voluntad, y serás recompensado con el conocimiento del verdadero poder. Resiste, y serás purgado hasta convertirte en un simple fragmento inútil.
            </p>
            <p className="text-sm md:text-base text-gray-400 mb-4">
              Tu destino te espera.
            </p>
            <p className="text-sm md:text-base text-purple-300 font-bold">
              Tu Maestro,<br/>
              Andrei Mes Manur.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-4 text-center" style={{
      fontFamily: 'Inter, sans-serif',
      backgroundColor: '#0d0d0d',
      backgroundImage: 'radial-gradient(at 0% 0%, #1a1a2e 0%, transparent 50%), radial-gradient(at 100% 100%, #301934 0%, transparent 50%), radial-gradient(at 50% 50%, #1a1a2e 0%, transparent 50%)',
      backgroundAttachment: 'fixed',
      color: '#e0e0e0',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Creepster&family=Inter:wght@400;700&display=swap');

        .font-creepy {
          font-family: 'Creepster', cursive;
          text-shadow: 2px 2px 4px #800080;
        }

        .glass-bg {
          background-color: rgba(26, 26, 46, 0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        @keyframes pulse-shadow {
          0% { box-shadow: 0 0 10px 0px rgba(128, 0, 128, 0.4); }
          50% { box-shadow: 0 0 20px 5px rgba(128, 0, 128, 0.8); }
          100% { box-shadow: 0 0 10px 0px rgba(128, 0, 128, 0.4); }
        }

        .hypnotic-glow {
          animation: pulse-shadow 2s infinite ease-in-out;
        }
      `}</style>
      
      {/* El contenido principal se encuentra dentro del main para el efecto de brillo */}
      <main className="w-full max-w-5xl mx-auto min-h-screen p-6 rounded-2xl shadow-2xl glass-bg hypnotic-glow mt-24 mb-16 flex items-center justify-center">
      {renderContent()}
      </main>
    </div>
  );
};

export default App;
