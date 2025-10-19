export default function App() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center">
      {/* Header */}
      <header className="w-full py-6 bg-white shadow-sm flex justify-between px-6">

        <h1 className="text-2xl font-bold text-green-800">ArcherIA</h1>

        <button className="border border-green-600 text-green-700 px-4 py-2 rounded-lg">
          Iniciar sesión
        </button>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center text-center px-6 py-20">
        <h2 className="text-4xl font-bold text-green-800 mb-6">Lleva tus tanteos al siguiente nivel 🎯</h2>
        <p className="text-green-900 max-w-2xl mb-8">

             Registra tus puntuaciones, analiza tu progreso y conviértete en un arquero más preciso con ArcherIA.

        </p>
        <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl">
          Comenzar ahora
        </button>
      </main>

      {/* Features */}
      <section className="w-full max-w-5xl px-6 grid md:grid-cols-3 gap-6 mb-20">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-green-800 font-semibold mb-2">Guarda tus tiros</h3>
          <p className="text-green-700">
            Registra cada serie de disparos fácilmente y lleva un historial detallado.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-green-800 font-semibold mb-2">Analiza tus resultados</h3>
          <p className="text-green-700">
            Gráficos y estadísticas te ayudarán a mejorar tu precisión.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-green-800 font-semibold mb-2">Comparte con tu club</h3>
          <p className="text-green-700">
            Conecta con otros arqueros y comparte tus logros fácilmente.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-green-800 text-white text-center">

     
        <p>© 2025 ArcherIA 🏹</p>

      </footer>
    </div>
  );
}
