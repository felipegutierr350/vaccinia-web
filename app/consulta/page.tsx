"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { vaccineAPI } from "@/lib/api";
import { Loader2, Sparkles, FileText, AlertCircle, Search, Brain, CheckCircle } from "lucide-react";

export default function ConsultaPage() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingStage, setLoadingStage] = useState("");
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState("");

  const templates = [
    "Embarazada de 34 semanas, ¿qué vacunas necesita?",
    "Paciente VIH con CD4 150, ¿qué vacunas necesita?",
    "¿Cómo convenzo a unos padres de vacunar contra Meningococo B si se resisten?",
    "Candidato a trasplante renal, ¿cuándo vacunar Herpes Zóster?",
    "Paciente de 76 años, ¿qué vacunas necesita?",
  ];

  const handleSubmit = async () => {
    if (!question.trim()) return;
    
    setLoading(true);
    setError("");
    setResponse(null);
    
    // Simular stages para mejor UX
    setLoadingStage("Analizando tu pregunta...");
    setTimeout(() => setLoadingStage("Buscando en 1,171 documentos médicos..."), 2000);
    setTimeout(() => setLoadingStage("Generando recomendación personalizada..."), 8000);

    try {
      const data = await vaccineAPI.chat({ question });
      setLoadingStage("¡Listo!");
      setResponse(data);
    } catch (err) {
      setError("Error al conectar con el servicio. Intenta de nuevo.");
      console.error(err);
    } finally {
      setLoading(false);
      setLoadingStage("");
    }
  };

  const renderSource = (source: any, idx: number) => {
    if (typeof source === 'string') {
      return (
        <div key={idx} className="text-xs text-gray-600 bg-gray-50 p-3 rounded border-l-2 border-blue-300">
          {source}
        </div>
      );
    }
    
    return (
      <div key={idx} className="text-xs text-gray-600 bg-gray-50 p-3 rounded border-l-2 border-blue-300">
        <div className="font-semibold text-blue-700">{source.vaccine || 'N/A'}</div>
        <div className="text-gray-500">{source.section || ''}</div>
        {source.content_preview && (
          <div className="mt-1 text-gray-600">{source.content_preview}</div>
        )}
        {source.source_file && (
          <div className="mt-1 text-xs text-gray-400">Fuente: {source.source_file}</div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Consulta de Vacunación
          </h1>
          <p className="text-gray-600">
            Escribe tu pregunta o selecciona una plantilla para empezar
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
                  placeholder="Ej: Que vacunas debo indicar a una gestante de 32 semanas de gestación, si ya recibió Tdap"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="min-h-[120px] resize-none"
                  disabled={loading}
                />
                <Button
                  onClick={handleSubmit}
                  disabled={loading || !question.trim()}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  size="lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Consultando...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Consultar con IA
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Loading stages - NUEVO */}
            {loading && (
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-center">
                      <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                    </div>
                    <p className="text-center text-blue-900 font-medium">
                      {loadingStage}
                    </p>
                    <div className="flex justify-center gap-2">
                      <div className="h-2 w-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                      <div className="h-2 w-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                      <div className="h-2 w-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                    </div>
                    <p className="text-center text-sm text-blue-700">
                      Esto puede tomar 15-30 segundos mientras analizamos literatura médica especializada
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {response && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Recomendaciones</CardTitle>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      response.confidence === 'high' 
                        ? 'bg-green-100 text-green-800'
                        : response.confidence === 'medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      Confianza: {response.confidence === 'high' ? 'Alta' : response.confidence === 'medium' ? 'Media' : 'Baja'}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {response.answer}
                    </p>
                  </div>

                  {response.sources && response.sources.length > 0 && (
                    <div className="mt-6 pt-6 border-t">
                      <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                        <FileText className="mr-2 h-4 w-4" />
                        Fuentes consultadas ({response.sources.length})
                      </h3>
                      <div className="space-y-2">
                        {response.sources.slice(0, 5).map((source: any, idx: number) => renderSource(source, idx))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {error && (
              <Card className="border-red-200 bg-red-50">
                <CardContent className="pt-6">
                  <div className="flex items-center text-red-800">
                    <AlertCircle className="mr-2 h-5 w-5" />
                    <p>{error}</p>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-blue-900 mb-2">
                  💡 Consejos para mejores resultados
                </h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Incluye la edad exacta del paciente</li>
                  <li>• Menciona condiciones médicas relevantes (VIH, cáncer, embarazo, etc.)</li>
                  <li>• Especifica si ya recibió alguna vacuna previamente</li>
                  <li>• Para embarazadas, indica las semanas de gestación</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="text-lg">Plantillas rápidas</CardTitle>
                <CardDescription className="text-sm">
                  Click para usar
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {templates.map((template, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    className="w-full h-auto py-3 px-4 text-left whitespace-normal hover:bg-blue-50 hover:border-blue-300 transition-colors"
                    onClick={() => setQuestion(template)}
                    disabled={loading}
                  >
                    <span className="text-sm leading-relaxed break-words">
                      {template}
                    </span>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
