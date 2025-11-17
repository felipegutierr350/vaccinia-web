"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Syringe, Loader2, AlertCircle, TrendingUp } from "lucide-react";
import Link from "next/link";
import { vaccineAPI, type ChatResponse } from "@/lib/api";

export default function TipsPage() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ChatResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const result = await vaccineAPI.chat({ question });
      setResponse(result);
    } catch (err) {
      setError("Error al conectar. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const templates = [
    "¿Cómo convenzo a unos padres de vacunar contra Meningococo B si se resisten?",
    "¿Qué le digo a un padre que dice no confío en las vacunas?",
    "¿Cómo respondo a mi hijo ya tiene muchas vacunas?",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <nav className="border-b bg-white backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Syringe className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">VaccinIA</span>
          </Link>
          <div className="flex gap-4">
            <Link href="/"><Button variant="ghost">Inicio</Button></Link>
            <Link href="/consulta"><Button variant="ghost">Consulta</Button></Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="mb-4">
          <h1 className="text-3xl font-bold mb-1">Tips de Comunicación Efectiva</h1>
          <p className="text-slate-600 text-sm">Estrategias basadas en evidencia</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-3 mb-3 items-start">
          <div className="lg:col-span-2 space-y-3">
            <Card className="h-full flex flex-col">
              <CardHeader className="pb-2 pt-4 px-4">
                <CardTitle className="text-lg">Consulta Estrategias</CardTitle>
                <CardDescription className="text-sm">Pregunta sobre situaciones específicas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 px-4 pb-4 flex-1 flex flex-col">
                <Textarea 
                  placeholder="Ejemplo: ¿Cómo convenzo a un padre que dice que MenB es rara?" 
                  value={question} 
                  onChange={(e) => setQuestion(e.target.value)} 
                  rows={6}
                  className="text-sm resize-none flex-1"
                />
                <Button onClick={handleSubmit} disabled={loading || !question.trim()} className="w-full">
                  {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Consultando...</> : "Consultar Estrategia"}
                </Button>
                {error && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-2 rounded text-xs">
                    <AlertCircle className="h-3 w-3 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {response && (
              <Card>
                <CardHeader className="pb-2 pt-4 px-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Recomendación</CardTitle>
                    <Badge variant={response.confidence === "high" ? "default" : "secondary"} className="text-xs">
                      Confianza: {response.confidence === "high" ? "Alta" : "Media"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <div className="whitespace-pre-wrap text-sm leading-relaxed text-slate-700">
                    {response.answer}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div>
            <Card className="h-full">
              <CardHeader className="pb-2 pt-4 px-4">
                <CardTitle className="text-base">Plantillas</CardTitle>
                <CardDescription className="text-xs">Click para usar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 px-4 pb-4">
                {templates.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => setQuestion(t)}
                    className="w-full text-left bg-white hover:bg-slate-50 border border-slate-200 rounded-lg p-2.5 transition-colors duration-200"
                  >
                    <span className="text-xs text-slate-700 leading-snug block">{t}</span>
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">💡</span>
            <span className="font-semibold text-blue-900 text-sm">Tips para mejores resultados:</span>
            <span className="text-xs text-blue-700">Menciona la vacuna específica • Describe la objeción exacta • Incluye contexto relevante</span>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-3 pt-4 px-4">
            <CardTitle className="text-xl">Guía Completa de Referencia</CardTitle>
            <CardDescription className="text-sm">Estrategias validadas</CardDescription>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            <Tabs defaultValue="presuntivo">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-3">
                <TabsTrigger value="presuntivo" className="text-xs">Lenguaje</TabsTrigger>
                <TabsTrigger value="resistencia" className="text-xs">Resistencia</TabsTrigger>
                <TabsTrigger value="seguridad" className="text-xs">Seguridad</TabsTrigger>
                <TabsTrigger value="objeciones" className="text-xs">Objeciones</TabsTrigger>
                <TabsTrigger value="faq" className="text-xs">FAQ</TabsTrigger>
                <TabsTrigger value="consejos" className="text-xs">Consejos</TabsTrigger>
              </TabsList>

              <TabsContent value="presuntivo" className="space-y-3 mt-2">
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-3">
                  <Badge className="bg-green-600 mb-1.5 text-xs">✅ USAR</Badge>
                  <p className="text-base font-semibold text-green-900 mb-1.5 leading-snug">
                    &quot;Su hijo debe recibir MenB hoy. ¿Preguntas?&quot;
                  </p>
                  <p className="text-xs text-green-700 leading-relaxed">Transmite confianza y convicción</p>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3">
                  <Badge variant="destructive" className="mb-1.5 text-xs">❌ EVITAR</Badge>
                  <p className="text-base font-semibold text-red-900 mb-1.5 leading-snug">
                    &quot;¿Qué ha decidido sobre vacunar?&quot;
                  </p>
                  <p className="text-xs text-red-700 leading-relaxed">Implica debate abierto</p>
                </div>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1.5">
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                    <span className="font-bold text-blue-900 text-sm">Evidencia</span>
                  </div>
                  <p className="text-4xl font-bold text-blue-600 mb-1.5">17.5x</p>
                  <p className="text-xs text-blue-800 leading-relaxed mb-1.5">
                    Más resistencia con lenguaje participativo
                  </p>
                  <p className="text-xs text-blue-600 font-medium">[FUENTE: VaccinIA]</p>
                </div>
              </TabsContent>

              <TabsContent value="resistencia" className="space-y-3 mt-2">
                <div className="border-l-4 border-blue-600 pl-3 py-2 bg-blue-50/50">
                  <h3 className="font-bold text-sm mb-1.5 text-blue-900">PASO 1: Repita</h3>
                  <div className="bg-white border border-blue-200 p-2 rounded">
                    <p className="text-2xl font-bold text-blue-600">47%</p>
                    <p className="text-xs text-blue-800">acepta al repetir</p>
                  </div>
                </div>
                <div className="border-l-4 border-green-600 pl-3 py-2 bg-green-50/50">
                  <h3 className="font-bold text-sm mb-1 text-green-900">PASO 2: Refuerce</h3>
                  <p className="text-xs text-slate-700">24 hrs, 1/10 muere, fácil prevenir</p>
                </div>
              </TabsContent>

              <TabsContent value="seguridad" className="space-y-2 mt-2">
                <div className="bg-blue-50 border border-blue-200 rounded p-2.5">
                  <h4 className="font-bold text-blue-900 mb-1 text-xs">1. Reconozca inquietudes</h4>
                  <p className="text-xs text-blue-800">Respuestas equilibradas</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded p-2.5">
                  <h4 className="font-bold text-green-900 mb-1 text-xs">2. Razón de preguntas</h4>
                  <p className="text-xs text-green-800">Búsqueda de seguridad</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded p-2.5">
                  <h4 className="font-bold text-purple-900 mb-1 text-xs">3. Ciencia + Anécdotas</h4>
                  <p className="text-xs text-purple-800">Datos con historias</p>
                </div>
              </TabsContent>

              <TabsContent value="objeciones" className="space-y-2 mt-2">
                <div className="border rounded p-2.5">
                  <h4 className="font-semibold text-red-600 mb-1.5 text-xs">❓ MenB es rara?</h4>
                  <div className="bg-green-50 border border-green-200 p-2 rounded">
                    <p className="text-xs text-green-800">Poco común pero devastadora. 1/10 muere</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="faq" className="space-y-1.5 mt-2">
                <div className="border-l-4 border-blue-600 pl-2 py-1.5 bg-blue-50/30">
                  <p className="font-semibold text-xs mb-0.5">¿MenB vs MenACWY?</p>
                  <p className="text-xs text-slate-600">Diferentes serogrupos</p>
                </div>
              </TabsContent>

              <TabsContent value="consejos" className="mt-2">
                <div className="grid md:grid-cols-2 gap-2">
                  {[
                    { num: 1, title: "ROL", desc: "Fuente confiable", color: "blue" },
                    { num: 2, title: "CONFIANZA", desc: "Inspire confianza", color: "green" },
                    { num: 3, title: "PRESUNTIVO", desc: "17.5x efectivo", color: "purple" },
                    { num: 4, title: "SEGURIDAD", desc: "Equilibrado", color: "pink" },
                    { num: 5, title: "REPITA", desc: "47% acepta", color: "orange" },
                    { num: 6, title: "COMPROMISO", desc: "Seguimiento", color: "red" }
                  ].map((c) => (
                    <div key={c.num} className={`bg-${c.color}-50 border border-${c.color}-200 rounded p-2`}>
                      <div className="flex items-center gap-1.5">
                        <div className={`h-6 w-6 rounded-full bg-${c.color}-600 text-white flex items-center justify-center font-bold text-xs`}>
                          {c.num}
                        </div>
                        <div>
                          <h4 className="font-bold text-xs">{c.title}</h4>
                          <p className="text-xs text-slate-600">{c.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
