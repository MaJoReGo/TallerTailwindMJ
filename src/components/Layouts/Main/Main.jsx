import React from 'react';

export const Main = () => {
  return (
    <main className="flex flex-col h-screen">
      <div className="flex justify-center items-center h-screen">
        <div className="h-screen w-screen bg-purple-500">
          {/* Contenedor verde */}
          <p className="text-white text-center">Contenido del contenedor verde</p>
        </div>
        <div className="h-screen w-screen bg-purple-500">
          {/* Contenedor azul */}
          <p className="text-white text-center">Contenido del contenedor azul</p>
        </div>
      </div>
    </main>
  );
};
