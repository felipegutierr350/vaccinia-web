"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatCard } from "@/components/comunicacion/stat-card";
import { MensajeClave } from "@/components/comunicacion/mensaje-clave";
import { FAQSection } from "@/components/comunicacion/faq-section";
import { EjemploMensaje } from "@/components/comunicacion/ejemplo-mensaje";
import { 
  ShieldCheck, 
  Users, 
  MessageSquare,
  AlertCircle,
  TrendingUp,
  Target
} from 'lucide-react';

export default function MenBComunicacionPage() {
  const mensajesClave = [
    {
      icon: ShieldCheck,
      title: "Su rol como fuente confiable",
      color: "bg-blue-100 text-blue-600",
      points: [
        "Los profesionales de salud son la fuente MÁS confiable",
        "Recomendación efectiva = razón principal de vacunación",
        "Relación con padres aumenta aceptación",
        "Confianza en la fuente > información en sí"
      ]
    },
    {
      icon: MessageSquare,
      title: "Lenguaje presuntivo (17.5x más efectivo)",
      color: "bg-green-100 text-green-600",
      points: [
        "✅ USAR: 'Su hijo debe recibir MenB hoy. ¿Preguntas?'",
        "❌ EVITAR: '¿Qué ha decidido sobre vacunar?'",
        "Transmitir confianza y convicción",
        "Explicar impacto devastador de MenB"
      ]
    },
    {
      icon: Users,
      title: "Manejo de resistencia (Método 2 pasos)",
      color: "bg-purple-100 text-purple-600",
      points: [
        "PASO 1: Repetir recomendación → 47% acepta",
        "PASO 2: Reforzar con datos (24hrs muerte, prevención fácil)",
        "Reconocer inquietudes con empatía",
        "Medir éxito realistamente (no solo vacunación)"
      ]
    },
    {
      icon: Target,
      title: "Dar seguridad a los padres",
      color: "bg-orange-100 text-orange-600",
      points: [
        "Reconocer inquietudes (no tomar personal)",
        "Respuestas equilibradas y concisas",
        "Combinar ciencia + anécdotas personales",
        "Preguntas = búsqueda de seguridad (no desconfianza)"
      ]
    }
  ];

  const faqData = [
    {
      pregunta: "¿MenB es realmente necesaria si es rara?",
      respuesta: "Aunque poco común, MenB es devastadora: 1 de cada 10 casos muere, y sobrevivientes pueden sufrir amputaciones, pérdida auditiva o daño neurológico. Puede progresar de síntomas similares a gripe a muerte en solo 24 horas. La vacuna es la mejor prevención.",
      fuentes: ["VaccinIA", "Guías MenB"]
    },
    {
      pregunta: "¿Es segura la vacuna MenB?",
      respuesta: "SÍ. La vacuna MenB se usa mundialmente y está incluida en programas nacionales de inmunización en Reino Unido, Irlanda, Italia, Portugal y sur de Australia. Los efectos secundarios más comunes son leves: dolor en el brazo, fiebre baja.",
      fuentes: ["Programas Nacionales", "Evidencia internacional"]
    },
    {
      pregunta: "¿Cuál es la diferencia entre MenB y MenACWY?",
      respuesta: "Son DIFERENTES serogrupos del meningococo. MenB protege contra el serogrupo B, mientras que MenACWY protege contra los serogrupos A, C, W e Y. Ambas vacunas son necesarias para protección completa contra enfermedad meningocócica.",
      fuentes: ["Guías técnicas"]
    }
  ];

  const ejemplosMensajes = [
    {
      titulo: "Recomendación presuntiva efectiva",
      mensaje: "Su hijo debe recibir la vacuna MenB hoy junto con las otras vacunas de preadolescente. Así lo protegemos contra una enfermedad poco común pero devastadora. ¿Tiene alguna pregunta?",
      tipo: "medico" as const
    },
    {
      titulo: "Explicar el riesgo sin alarmar",
      mensaje: "MenB puede ser difícil de diagnosticar porque los síntomas iniciales parecen gripe. Lo crítico es que puede progresar a muerte en 24 horas. Por eso es tan importante vacunar: es la mejor manera de prevenir.",
      tipo: "explicacion" as const
    },
    {
      titulo: "Respuesta a 'es muy rara'",
      mensaje: "Tiene razón en que no es común, pero cuando ocurre es devastadora: 1 de cada 10 muere y los sobrevivientes pueden sufrir amputaciones o daño neurológico permanente. La vacunación es prevención fácil contra consecuencias graves.",
      tipo: "respuesta" as const
    },
    {
      titulo: "Compartir experiencia personal",
      mensaje: "Yo vacuné a mis propios hijos contra MenB porque he visto lo devastador que puede ser. Como médico, prefiero la prevención fácil que lamentar no haber actuado a tiempo.",
      tipo: "medico" as const
    }
  ];

  const estrategiasProfesionales = [
    {
      titulo: "Enfoque presuntivo (NO participativo)",
      descripcion: "Usar declaraciones que asuman vacunación. EVITAR preguntas abiertas. 17.5x más efectivo.",
      icon: MessageSquare
    },
    {
      titulo: "Método de 2 pasos para resistencia",
      descripcion: "1) Repetir recomendación (47% acepta). 2) Reforzar con impacto (24hrs, 1/10 muere).",
      icon: Target
    },
    {
      titulo: "Combinar datos + historias",
      descripcion: "Información clínica (programas mundiales) + anécdotas personales (vacuné a mis hijos).",
      icon: Users
    },
    {
      titulo: "Medir éxito realistamente",
      descripcion: "Vacunación, acuerdo de considerar, programar cita, o compromiso de leer material = éxito.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-4xl">
            <Badge className="bg-white/20 backdrop-blur text-white border-white/30 mb-4">
              Estrategias de Comunicación
            </Badge>
            <h1 className="text-5xl font-bold mb-4">
              Meningococo B: Conversación Abierta y Honesta
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Guía para involucrar a los padres en las vacunaciones MenB
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatCard number="17.5x" label="Más efectivo con lenguaje presuntivo" />
              <StatCard number="47%" label="Acepta al repetir recomendación" />
              <StatCard number="24hrs" label="Progresión síntomas → muerte" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Mensajes Clave */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Mensajes Clave</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mensajesClave.map((mensaje, idx) => (
              <MensajeClave key={idx} {...mensaje} />
            ))}
          </div>
        </section>

        {/* Evidencia del lenguaje presuntivo */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="h-8 w-8 text-green-600" />
                <CardTitle className="text-2xl">La Evidencia del Lenguaje Presuntivo</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4">
                  <Badge className="bg-green-600 mb-3">✅ USAR</Badge>
                  <p className="text-lg font-semibold text-green-900 mb-2">
                    &quot;Su hijo debe recibir MenB hoy. ¿Preguntas?&quot;
                  </p>
                  <p className="text-sm text-green-700">
                    Transmite confianza, convicción y asume la decisión correcta
                  </p>
                </div>
                <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4">
                  <Badge variant="destructive" className="mb-3">❌ EVITAR</Badge>
                  <p className="text-lg font-semibold text-red-900 mb-2">
                    &quot;¿Qué ha decidido sobre vacunar?&quot;
                  </p>
                  <p className="text-sm text-red-700">
                    Implica debate abierto, aumenta 17.5x la resistencia
                  </p>
                </div>
              </div>
              <div className="bg-white border border-green-200 rounded-lg p-4 text-center">
                <p className="text-4xl font-bold text-green-600 mb-2">17.5x</p>
                <p className="text-sm text-green-800">
                  Más probabilidad de resistencia con lenguaje participativo vs presuntivo
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Preguntas Frecuentes de Padres</CardTitle>
            </CardHeader>
            <CardContent>
              <FAQSection items={faqData} />
            </CardContent>
          </Card>
        </section>

        {/* Ejemplos de Mensajes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Ejemplos de Mensajes para Usar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ejemplosMensajes.map((ejemplo, idx) => (
              <EjemploMensaje key={idx} {...ejemplo} />
            ))}
          </div>
        </section>

        {/* Estrategias para Profesionales */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Estrategias para Profesionales de Salud</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {estrategiasProfesionales.map((estrategia, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                      <estrategia.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{estrategia.titulo}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">{estrategia.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Método de 2 pasos */}
        <Card className="mt-12 bg-purple-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-2xl">Método de 2 Pasos para Manejar Resistencia</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-white border-l-4 border-purple-600 p-4 rounded">
                <h3 className="font-bold text-purple-900 mb-2">PASO 1: Repetir recomendación</h3>
                <p className="text-sm text-slate-700 mb-2">
                  Reformule su recomendación de manera clara y directa
                </p>
                <div className="bg-purple-100 p-3 rounded">
                  <p className="text-2xl font-bold text-purple-600">47%</p>
                  <p className="text-xs text-purple-800">de padres acepta al repetir</p>
                </div>
              </div>
              <div className="bg-white border-l-4 border-green-600 p-4 rounded">
                <h3 className="font-bold text-green-900 mb-2">PASO 2: Reforzar con impacto</h3>
                <p className="text-sm text-slate-700">
                  Enfatizar: progresión 24 horas, 1/10 muere, prevención fácil, consecuencias devastadoras
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
