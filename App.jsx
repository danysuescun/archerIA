{"name":"app-arqueria","type":"code/react","content":"""
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AppArqueria() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-200 flex flex-col items-center">
      {/* Header */}
      <header className="w-full py-6 bg-white/70 backdrop-blur-md shadow-sm">
        <div className="max-w-5xl mx-auto flex justify-between items-center px-6">
          <div className="flex items-center gap-2 text-emerald-700 font-semibold text-xl">
            <Target className="w-6 h-6" />
            ArcScore
          </div>
          <Button variant="outline" className="border-emerald-600 text-emerald-700">
            Iniciar sesión
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center text-center px-6 py-20">
        <motion.h1
          className="text-5xl font-bold text-emerald-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Lleva tus tanteos al siguiente nivel 🎯
        </motion.h1>
        <p className="text-emerald-900 max-w-2xl mb-8">
          Registra tus puntuaciones, analiza tu progreso y conviértete en un arquero más preciso con <strong>ArcScore</strong>, la app diseñada para los amantes de la arquería.
        </p>
        <Button className="bg-emerald-700 hover:bg-emerald-800 text-white flex items-center gap-2 px-6 py-3 text-lg rounded-xl shadow-md">
          Comenzar ahora <ArrowRight className="w-5 h-5" />
        </Button>
      </main>

      {/* Features */}
      <section className="w-full max-w-5xl px-6 grid md:grid-cols-3 gap-6 mb-20">
        <Card className="rounded-2xl shadow-md border-emerald-200">
          <CardHeader>
            <CardTitle className="text-emerald-800">Guarda tus tiros</CardTitle>
          </CardHeader>
          <CardContent className="text-emerald-700">
            Registra cada serie de disparos fácilmente y lleva un historial detallado de tu rendimiento.
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-md border-emerald-200">
          <CardHeader>
            <CardTitle className="text-emerald-800">Analiza tus resultados</CardTitle>
          </CardHeader>
          <CardContent className="text-emerald-700">
            Gráficos y estadísticas te ayudarán a detectar patrones y mejorar tu precisión.
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-md border-emerald-200">
          <CardHeader>
            <CardTitle className="text-emerald-800">Comparte con tu club</CardTitle>
          </CardHeader>
          <CardContent className="text-emerald-700">
            Conecta con otros arqueros y comparte tus logros y avances fácilmente.
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-emerald-800 text-white text-center">
        <p>© 2025 ArcScore · Desarrollado con pasión por la arquería 🏹</p>
      </footer>
    </div>
  );
}
"""}
