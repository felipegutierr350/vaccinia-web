"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Loader2, Syringe, AlertCircle } from "lucide-react";
import { vaccineAPI, type ChatResponse } from "@/lib/api";
import Link from "next/link";

export default function ConsultaPage() {
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
      setError("Error al conectar con el sistema. Intenta de nuevo.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const templates = [
    "Embarazada de 34 semanas, ¿qué vacunas necesita?",
    "Paciente VIH con CD4 150, ¿qué vacunas necesita?",
    "¿Cómo convenzo a unos padres de vacunar contra Meningococo B si se resisten?",
    "Candidato a trasplante renal, ¿cuándo vacunar Herpes Zóster?",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navbar */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Syringe className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">VaccinIA</span>
          </Link>
          <div className="flex gap-4">
            <Link href="/">
              <Button variant="ghost">Inicio</Button>
            </Link>
            <Link href="/tips">
              <Button variant="ghost">Tips</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Consulta de Vacunación</h1>
          <p className="text-slate-600">
            Escribe tu pregunta o selecciona una plantilla para empezar
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Área de consulta */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Escribe tu pregunta</CardTitle>
                <CardDescription>
                  Sé específico con edad, condiciones médicas, y contexto
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Ejemplo: Embarazada de 34 semanas, ¿qué vacunas necesita?"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  rows={4}
                  className="resize-none"
                />
                
                <Button 
                  onClick={handleSubmit} 
                  disabled={loading || !question.trim()}
                  className="w-full"
                  size="lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Consultando...
                    </>
                  ) : (
                    "Consultar con IA"
                  )}
                </Button>

                {error && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="h-4 w-4" />
                    <span className="text-sm">{error}</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Respuesta */}
            {response && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Recomendaciones</CardTitle>
                    <Badge variant={response.confidence === "high" ? "default" : "secondary"}>
                      Confianza: {response.confidence === "high" ? "Alta" : response.confidence === "medium" ? "Media" : "Baja"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="prose prose-slate max-w-none">
                    <div className="whitespace-pre-wrap text-slate-700">
                      {response.answer}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">Fuentes consultadas ({response.sources.length})</h4>
                    <div className="space-y-2">
                      {response.sources.slice(0, 5).map((source, idx) => (
                        <div key={idx} className="text-sm bg-slate-50 p-2 rounded">
                          <span className="font-medium">{source.vaccine}</span>
                          {source.section !== "Desconocida" && (
                            <span className="text-slate-600"> - {source.section}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar con plantillas */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Plantillas rápidas</CardTitle>
                <CardDescription>Click para usar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {templates.map((template, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    className="w-full text-left justify-start h-auto py-3 px-4"
                    onClick={() => setQuestion(template)}
                  >
                    <span className="text-sm">{template}</span>
                  </Button>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">💡 Consejos</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-blue-800 space-y-2">
                <p>• Especifica edad y condiciones médicas</p>
                <p>• Menciona semanas de embarazo si aplica</p>
                <p>• Incluye CD4 si es VIH</p>
                <p>• Para comunicación, menciona la vacuna específica</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
