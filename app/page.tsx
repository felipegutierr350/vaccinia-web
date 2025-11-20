"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, BookOpen, FileText, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4 md:mb-6">
            <Sparkles className="h-12 w-12 md:h-16 md:w-16" />
          </div>
          <div className="text-sm md:text-base mb-3 md:mb-4 text-cyan-100">
            🤖 Powered by AI + Guías Oficiales Colombia
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            Recomendaciones de Vacunación Inteligentes
          </h1>
          <p className="text-base md:text-xl max-w-3xl mx-auto mb-6 md:mb-8 text-cyan-50 px-4">
            Sistema RAG basado en IA que combina guías del PAI Colombia, IDSA 2025, ACIP/CDC para brindarte recomendaciones precisas y actualizadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Link href="/consulta">
              <Button size="lg" className="w-full sm:w-auto bg-white text-cyan-600 hover:bg-cyan-50 text-base md:text-lg px-6 md:px-8">
                <MessageSquare className="mr-2 h-5 w-5" />
                Empezar Consulta
              </Button>
            </Link>
            <Link href="/comunicacion">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 text-base md:text-lg px-6 md:px-8">
                <BookOpen className="mr-2 h-5 w-5" />
                Tips de Comunicación
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
          {/* Consulta IA */}
          <Link href="/consulta" className="block">
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-cyan-500">
              <CardHeader>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <MessageSquare className="h-6 w-6 md:h-8 md:w-8 text-cyan-600" />
                </div>
                <CardTitle className="text-lg md:text-xl">Consulta de IA</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Pregunta sobre vacunación y recibe recomendaciones basadas en guías oficiales colombianas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  Ir a Consulta
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Tips Comunicación */}
          <Link href="/comunicacion" className="block">
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-blue-500">
              <CardHeader>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg md:text-xl">Tips de Comunicación</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Estrategias efectivas para comunicar sobre vacunación con pacientes y familias
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  Ver Estrategias
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* MIPRES */}
          <Link href="/mipres" className="block">
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-green-500">
              <CardHeader>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <FileText className="h-6 w-6 md:h-8 md:w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg md:text-xl">MIPRES</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Herramientas para gestión de prescripciones médicas en Colombia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  Ir a MIPRES
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Info Section */}
        <div className="mt-8 md:mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200">
            <CardContent className="pt-6 px-4 md:px-6">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-center">
                ¿Cómo funciona VaccinIA?
              </h3>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base">
                <div className="flex items-start gap-3">
                  <div className="text-2xl md:text-3xl">🎯</div>
                  <div>
                    <strong>Consulta Inteligente:</strong> Haz preguntas sobre esquemas de vacunación, 
                    indicaciones especiales, o situaciones clínicas específicas.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl md:text-3xl">📚</div>
                  <div>
                    <strong>Basado en Evidencia:</strong> Respuestas fundamentadas en PAI Colombia, 
                    ACIP/CDC, IDSA, y guías oficiales actualizadas.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl md:text-3xl">💬</div>
                  <div>
                    <strong>Comunicación Efectiva:</strong> Estrategias probadas para mejorar 
                    la aceptación de vacunas por parte de pacientes y familias.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
