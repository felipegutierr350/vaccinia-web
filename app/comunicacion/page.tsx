"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { 
  Syringe, 
  MessageSquare, 
  Users, 
  BookOpen,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function ComunicacionPage() {
  const vacunas = [
    {
      id: "vph",
      nombre: "VPH (Virus Papiloma Humano)",
      descripcion: "Estrategias para promover la vacunación contra 6 tipos de cáncer",
      color: "from-purple-600 to-pink-600",
      stats: ["8/10 personas", ">90% prevención", "6 tipos cáncer"],
      disponible: true,
      temas: [
        "Recomendación presumptiva",
        "Responder sobre fertilidad",
        "Calendario 2 vs 3 dosis",
        "Protección para varones"
      ]
    },
    {
      id: "menb",
      nombre: "Meningococo B",
      descripcion: "Cómo involucrar a los padres en la vacunación MenB",
      color: "from-blue-600 to-cyan-600",
      stats: ["17.5x efectividad", "24hrs mortalidad", "Lenguaje presuntivo"],
      disponible: true,
      temas: [
        "Conversación abierta y honesta",
        "Manejo de resistencia",
        "Evidencia de seguridad",
        "Respuestas a objeciones"
      ]
    },
    {
      id: "rsv",
      nombre: "RSV (Virus Respiratorio Sincitial)",
      descripcion: "Comunicación sobre RSV en embarazo y lactantes",
      color: "from-green-600 to-emerald-600",
      stats: ["32-36 sem gestación", "Protección pasiva", "Principal causa hosp"],
      disponible: false,
      temas: [
        "Timing crítico embarazo",
        "Transferencia anticuerpos",
        "Protección < 6 meses",
        "Abrysvo vs Nirsevimab"
      ]
    },
    {
      id: "tdap",
      nombre: "Tdap (Tétanos, Difteria, Tosferina)",
      descripcion: "Estrategias para vacunación en cada embarazo",
      color: "from-orange-600 to-red-600",
      stats: ["27-36 sem", "Cada embarazo", "Protección neonatal"],
      disponible: false,
      temas: [
        "Por qué cada embarazo",
        "Ventana óptima aplicación",
        "Seguridad demostrada",
        "Cocoon strategy"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl">
            <Badge className="bg-white/20 backdrop-blur text-white border-white/30 mb-4">
              VaccinIA - Comunicación Efectiva
            </Badge>
            <h1 className="text-5xl font-bold mb-4">
              Estrategias de Comunicación por Vacuna
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Guías basadas en evidencia para involucrar a padres y pacientes en decisiones de vacunación
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-4">
                  <MessageSquare className="h-8 w-8 mb-2" />
                  <div className="text-2xl font-bold mb-1">Evidencia</div>
                  <div className="text-sm text-white/80">Fuentes oficiales verificadas</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-4">
                  <Users className="h-8 w-8 mb-2" />
                  <div className="text-2xl font-bold mb-1">Práctica</div>
                  <div className="text-sm text-white/80">Scripts y ejemplos reales</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-4">
                  <BookOpen className="h-8 w-8 mb-2" />
                  <div className="text-2xl font-bold mb-1">FAQ</div>
                  <div className="text-sm text-white/80">Respuestas a objeciones</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Guías por Vacuna</h2>
          <p className="text-slate-600">
            Selecciona una vacuna para ver estrategias específicas de comunicación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {vacunas.map((vacuna) => (
            <Card 
              key={vacuna.id}
              className={`relative overflow-hidden transition-all hover:shadow-lg ${
                !vacuna.disponible ? 'opacity-75' : ''
              }`}
            >
              {/* Color bar */}
              <div className={`h-2 bg-gradient-to-r ${vacuna.color}`}></div>
              
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Syringe className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-xl">{vacuna.nombre}</CardTitle>
                  </div>
                  {vacuna.disponible ? (
                    <Badge className="bg-green-100 text-green-800">
                      Disponible
                    </Badge>
                  ) : (
                    <Badge variant="secondary">
                      Próximamente
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-base">
                  {vacuna.descripcion}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Stats */}
                <div className="flex flex-wrap gap-2">
                  {vacuna.stats.map((stat, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {stat}
                    </Badge>
                  ))}
                </div>

                {/* Temas cubiertos */}
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-slate-700">
                    Temas cubiertos:
                  </h4>
                  <ul className="space-y-1">
                    {vacuna.temas.map((tema, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{tema}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action button */}
                {vacuna.disponible ? (
                  <Link href={`/comunicacion/${vacuna.id}`}>
                    <Button className="w-full group">
                      Ver Estrategias
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                ) : (
                  <Button disabled className="w-full">
                    Próximamente
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-bold mb-2">¿Tienes una situación específica?</h3>
            <p className="text-slate-600 mb-4">
              Usa nuestra consulta de IA para obtener recomendaciones personalizadas
            </p>
            <Link href="/consulta">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Ir a Consulta de IA
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Info adicional */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <h4 className="font-semibold text-yellow-900 mb-2">
                Sobre estas guías
              </h4>
              <p className="text-sm text-yellow-800 leading-relaxed">
                Todas las estrategias están basadas en evidencia de fuentes oficiales: CDC, OMS, OPS, 
                American Academy of Pediatrics, American Cancer Society, y Ministerios de Salud. 
                Se actualizan regularmente para reflejar las mejores prácticas en comunicación efectiva 
                sobre vacunación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
