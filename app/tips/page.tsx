"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Syringe, MessageSquare, Target, Heart, HelpCircle, Lightbulb, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function TipsPage() {
  const [selectedVaccine, setSelectedVaccine] = useState("meningococo-b");

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
            <Link href="/consulta">
              <Button variant="ghost">Consulta</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Tips de Comunicación Efectiva</h1>
          <p className="text-slate-600">
            Estrategias basadas en evidencia para mejorar la aceptación de vacunas
          </p>
        </div>

        {/* Selector de vacuna */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Selecciona la vacuna</CardTitle>
            <CardDescription>Actualmente disponible: Meningococo B</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              variant={selectedVaccine === "meningococo-b" ? "default" : "outline"}
              onClick={() => setSelectedVaccine("meningococo-b")}
            >
              Meningococo B (Bexsero)
            </Button>
          </CardContent>
        </Card>

        {/* Tabs de contenido */}
        <Tabs defaultValue="presuntivo" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
            <TabsTrigger value="presuntivo">Lenguaje</TabsTrigger>
            <TabsTrigger value="resistencia">Resistencia</TabsTrigger>
            <TabsTrigger value="seguridad">Seguridad</TabsTrigger>
            <TabsTrigger value="objeciones">Objeciones</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="consejos">Consejos</TabsTrigger>
          </TabsList>

          {/* Tab 1: Lenguaje Presuntivo */}
          <TabsContent value="presuntivo">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="h-5 w-5 text-green-600" />
                  <CardTitle>Lenguaje Presuntivo vs Participativo</CardTitle>
                </div>
                <CardDescription>El tipo de lenguaje que uses impacta dramáticamente la aceptación</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-green-600">✅ USAR ESTO</Badge>
                    <span className="font-semibold">Lenguaje Presuntivo</span>
                  </div>
                  <p className="text-lg font-medium text-green-900 mb-2">
                    "Su hijo debe recibir una vacuna MenB hoy. ¿Tiene alguna pregunta?"
                  </p>
                  <p className="text-sm text-green-700">
                    Transmite confianza y convicción. Asume que la vacunación es la norma, no una opción debatible.
                  </p>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="destructive">❌ EVITAR ESTO</Badge>
                    <span className="font-semibold">Lenguaje Participativo</span>
                  </div>
                  <p className="text-lg font-medium text-red-900 mb-2">
                    "¿Qué ha decidido sobre la aplicación de la vacuna hoy?"
                  </p>
                  <p className="text-sm text-red-700">
                    Implica que la decisión está abierta a debate. Reduce la autoridad médica.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    <span className="font-bold text-blue-900">Evidencia Científica</span>
                  </div>
                  <p className="text-3xl font-bold text-blue-600 mb-2">17.5x</p>
                  <p className="text-sm text-blue-800">
                    Los padres tienen <strong>17.5 veces más probabilidades de resistirse</strong> cuando un médico usa lenguaje participativo en lugar de presuntivo.
                  </p>
                  <p className="text-xs text-blue-600 mt-2">[FUENTE: GSK Healthcare Professional Guide]</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Por qué funciona:</h4>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• El lenguaje presuntivo transmite confianza profesional</li>
                    <li>• Asume que la vacunación es la norma</li>
                    <li>• Invita a preguntas sin cuestionar la decisión base</li>
                    <li>• Posiciona al médico como experto autorizado</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 2: Manejo de Resistencia */}
          <TabsContent value="resistencia">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-5 w-5 text-orange-600" />
                  <CardTitle>Estrategia cuando Padres se Resisten</CardTitle>
                </div>
                <CardDescription>4 pasos comprobados para aumentar la aceptación</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-bold text-lg mb-2">PASO 1: REPITA su recomendación (reformulada)</h3>
                    <p className="text-slate-700 mb-2">
                      "Entiendo sus dudas. Déjeme explicarle de otra manera por qué es tan importante..."
                    </p>
                    <div className="bg-blue-50 p-3 rounded-lg mt-2">
                      <p className="text-sm font-semibold text-blue-900">📊 Evidencia:</p>
                      <p className="text-2xl font-bold text-blue-600">47%</p>
                      <p className="text-sm text-blue-800">
                        de los padres estuvo de acuerdo cuando el profesional <strong>repetía su recomendación</strong> después de resistencia inicial.
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-600 pl-4">
                    <h3 className="font-bold text-lg mb-2">PASO 2: REFUERCE por qué es vital</h3>
                    <p className="text-slate-700">Enfatice:</p>
                    <ul className="space-y-1 text-sm text-slate-700 mt-2">
                      <li>• Rapidez de progresión (24 horas)</li>
                      <li>• Dificultad de diagnóstico temprano</li>
                      <li>• Gravedad de consecuencias (1 de cada 10 muere)</li>
                      <li>• Facilidad de prevención con vacuna</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-4">
                    <h3 className="font-bold text-lg mb-2">PASO 3: MIDA el éxito de manera realista</h3>
                    <p className="text-slate-700 mb-2">Una conversación exitosa puede resultar en:</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-green-50 p-2 rounded">✅ Vacunación inmediata</div>
                      <div className="bg-green-50 p-2 rounded">✅ Acuerdo de considerar</div>
                      <div className="bg-green-50 p-2 rounded">✅ Programar otra consulta</div>
                      <div className="bg-green-50 p-2 rounded">✅ Leer material adicional</div>
                    </div>
                    <p className="text-sm text-slate-600 mt-2 italic">No toda resistencia es rechazo final.</p>
                  </div>

                  <div className="border-l-4 border-orange-600 pl-4">
                    <h3 className="font-bold text-lg mb-2">PASO 4: MANTENGA el compromiso</h3>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Llamadas de recordatorio</li>
                      <li>• Programar futuras consultas</li>
                      <li>• Aprovechar citas de otras vacunas</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-100 p-4 rounded-lg">
                  <p className="font-semibold text-slate-900">
                    💡 Punto clave: Su recomendación firme es el factor más importante para la aceptación de vacunas.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 3: Dar Seguridad */}
          <TabsContent value="seguridad">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="h-5 w-5 text-pink-600" />
                  <CardTitle>3 Maneras de Dar Seguridad a Padres</CardTitle>
                </div>
                <CardDescription>Construye confianza con ciencia y empatía</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-bold text-blue-900 mb-2">1. RECONOZCA LAS INQUIETUDES</h3>
                    <ul className="space-y-1 text-sm text-blue-800">
                      <li>• Proporcione seguridad con respuestas equilibradas y concisas</li>
                      <li>• Discuta TANTO riesgos COMO beneficios de vacunación MenB</li>
                      <li>• No minimice sus preocupaciones</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="font-bold text-green-900 mb-2">2. RECONOZCA LA RAZÓN DETRÁS DE CADA PREGUNTA</h3>
                    <ul className="space-y-1 text-sm text-green-800">
                      <li>• Que un padre haga preguntas NO significa que se resista</li>
                      <li>• No tome las preguntas de forma personal</li>
                      <li>• Las preguntas significan que buscan seguridad mientras deciden</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h3 className="font-bold text-purple-900 mb-2">3. USE COMBINACIÓN DE CIENCIA Y ANÉCDOTAS</h3>
                    
                    <div className="mt-3 space-y-3">
                      <div>
                        <p className="font-semibold text-purple-800 mb-1">Información clínica:</p>
                        <ul className="space-y-1 text-sm text-purple-700">
                          <li>• MenB se usa mundialmente para proteger contra enfermedad mortal</li>
                          <li>• Incluida en programas de UK, Irlanda, Italia, Portugal, Australia</li>
                          <li>• Enfatice su confianza en la seguridad de la vacuna</li>
                          <li>• Remarque cómo ayuda a proteger contra enfermedad potencialmente mortal</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-purple-800 mb-1">Historias personales:</p>
                        <ul className="space-y-1 text-sm text-purple-700">
                          <li>• Comparta lo preocupado que estaría si el niño no es vacunado</li>
                          <li>• Incluya anécdotas breves</li>
                          <li>• Si tiene hijos, comparta su proceso de decisión para vacunarlos</li>
                          <li>• Comparta casos reales (si usted o colega atendieron pacientes con MenB)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-3 bg-purple-100 p-3 rounded">
                      <p className="text-sm font-semibold text-purple-900">
                        ⚖️ Balance: Ciencia + Empatía = Comunicación Efectiva
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 4: Objeciones */}
          <TabsContent value="objeciones">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <HelpCircle className="h-5 w-5 text-red-600" />
                  <CardTitle>Responder Objeciones Comunes</CardTitle>
                </div>
                <CardDescription>Scripts probados para las objeciones más frecuentes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-bold text-red-600 mb-2">❓ "¿Realmente debo vacunar si MenB es poco común?"</h3>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-green-900 mb-2">✅ Respuesta sugerida:</p>
                      <p className="text-sm text-green-800">
                        "Es cierto que MenB es poco común, pero es devastadora cuando ocurre. Lo crítico es que:
                      </p>
                      <ul className="text-sm text-green-800 mt-2 space-y-1">
                        <li>• 1 de cada 10 niños con MenB muere</li>
                        <li>• Progresa de síntomas leves a muerte en solo 24 horas</li>
                        <li>• Los síntomas se confunden con influenza, dificultando diagnóstico temprano</li>
                        <li>• Bebés menores de 1 año tienen el mayor riesgo</li>
                        <li>• Los sobrevivientes sufren secuelas graves: amputaciones, daño neurológico, pérdida auditiva</li>
                      </ul>
                      <p className="text-sm text-green-800 mt-2 font-semibold">
                        La vacuna es la única forma confiable de protección."
                      </p>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-bold text-red-600 mb-2">❓ "Me preocupa darle demasiadas vacunas"</h3>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-green-900 mb-2">✅ Respuesta sugerida:</p>
                      <p className="text-sm text-green-800">
                        "Entiendo su preocupación. Déjeme darle tranquilidad:
                      </p>
                      <ul className="text-sm text-green-800 mt-2 space-y-1">
                        <li>• La OMS confirma que múltiples vacunas simultáneas son seguras</li>
                        <li>• Los niños están expuestos a más antígenos del ambiente diario que de todas las vacunas combinadas</li>
                        <li>• El sistema inmune de los niños está diseñado para manejar múltiples estímulos</li>
                        <li>• Administrar vacunas juntas reduce visitas y protege más rápido"</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-bold text-red-600 mb-2">❓ "¿Por qué no está en el calendario oficial?"</h3>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-green-900 mb-2">✅ Respuesta sugerida:</p>
                      <p className="text-sm text-green-800">
                        "Excelente pregunta. MenB está incluida en programas nacionales de vacunación en:
                      </p>
                      <ul className="text-sm text-green-800 mt-2 space-y-1">
                        <li>• Reino Unido (desde 2015)</li>
                        <li>• Irlanda</li>
                        <li>• Italia</li>
                        <li>• Portugal</li>
                        <li>• Australia (sur)</li>
                      </ul>
                      <p className="text-sm text-green-800 mt-2">
                        Estos países la consideran suficientemente importante para cubrirla públicamente. La decisión de no incluirla en nuestro calendario no significa que no sea importante, sino que refleja prioridades presupuestarias."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 5: FAQ */}
          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <HelpCircle className="h-5 w-5 text-blue-600" />
                  <CardTitle>Preguntas Frecuentes - Respuestas Rápidas</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    {
                      q: "¿En qué se diferencia MenB de MenACWY?",
                      a: "Son vacunas diferentes para serogrupos diferentes. MenACWY protege contra serogrupos A, C, W, Y. MenB protege específicamente contra serogrupo B. Se necesitan AMBAS vacunas para protección completa contra enfermedad meningocócica. 2 de cada 3 padres desconocen que existe vacuna específica para MenB."
                    },
                    {
                      q: "¿Por qué vacunar ahora? ¿Puedo hacerlo más tarde?",
                      a: "El mayor riesgo es cuando son pequeños, especialmente menores de 1 año. Vacunar ahora garantiza protección durante el período de mayor riesgo. Postergar la vacunación deja al niño vulnerable."
                    },
                    {
                      q: "¿Es segura? ¿Qué efectos adversos tiene?",
                      a: "Sí es segura. La seguridad es vigilada por OMS y agencias regulatorias mundiales. MenB tiene perfil de seguridad aceptable. Los efectos adversos más comunes son leves: dolor en sitio de inyección, fiebre temporal, irritabilidad. Los beneficios superan ampliamente los riesgos."
                    },
                    {
                      q: "¿Cuántas dosis se requieren?",
                      a: "Múltiples dosis son necesarias para protección completa. El esquema varía según edad de inicio. Es importante completar todas las dosis para garantizar protección adecuada."
                    },
                    {
                      q: "¿Vale la pena si debo pagarla?",
                      a: "La vacuna es una inversión en prevención. Considerando que MenB puede causar muerte en 24 horas o secuelas graves de por vida (amputaciones, daño neurológico), el costo de la vacuna es mínimo comparado con el costo humano y económico de la enfermedad."
                    }
                  ].map((faq, idx) => (
                    <div key={idx} className="border-l-4 border-blue-600 pl-4 py-2">
                      <p className="font-semibold text-slate-900 mb-1">P: {faq.q}</p>
                      <p className="text-sm text-slate-700">R: {faq.a}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 6: Consejos Principales */}
          <TabsContent value="consejos">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="h-5 w-5 text-yellow-600" />
                  <CardTitle>6 Consejos Principales para Conversación Efectiva</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      num: 1,
                      title: "RECONOZCA SU ROL",
                      desc: "Usted es la fuente de información más confiable para padres. Su recomendación es el factor principal por el que los padres deciden vacunar.",
                      color: "blue"
                    },
                    {
                      num: 2,
                      title: "HABLE CON CONFIANZA",
                      desc: "Transmita convicción sobre la importancia de MenB. Su confianza inspira confianza en los padres.",
                      color: "green"
                    },
                    {
                      num: 3,
                      title: "USE LENGUAJE PRESUNTIVO",
                      desc: '"Su hijo debe recibir MenB hoy. ¿Tiene preguntas?" (NO: "¿Qué decidió sobre vacunar?")',
                      color: "purple"
                    },
                    {
                      num: 4,
                      title: "RESPONDA Y DÉ SEGURIDAD",
                      desc: "Escuche inquietudes, reconozca razones detrás de preguntas, proporcione información equilibrada.",
                      color: "pink"
                    },
                    {
                      num: 5,
                      title: "REPITA SU RECOMENDACIÓN",
                      desc: "Si hay resistencia, reformule y refuerce. 47% de padres acepta después de repetición.",
                      color: "orange"
                    },
                    {
                      num: 6,
                      title: "MANTENGA EL COMPROMISO",
                      desc: "Llamadas de recordatorio, futuras consultas, aprovechar citas de otras vacunas.",
                      color: "red"
                    }
                  ].map((consejo) => (
                    <div key={consejo.num} className={`bg-${consejo.color}-50 border border-${consejo.color}-200 rounded-lg p-4`}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`h-8 w-8 rounded-full bg-${consejo.color}-600 text-white flex items-center justify-center font-bold`}>
                          {consejo.num}
                        </div>
                        <h3 className="font-bold text-slate-900">{consejo.title}</h3>
                      </div>
                      <p className="text-sm text-slate-700">{consejo.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-6 text-white mt-6">
                  <h3 className="text-xl font-bold mb-2">💪 RECUERDE:</h3>
                  <p className="text-lg mb-3">
                    Su firme recomendación es FUNDAMENTAL para la aceptación de vacuna MenB.
                  </p>
                  <p className="text-sm opacity-90">
                    Una simple conversación hoy puede hacer enorme diferencia en la vida de las familias. MenB no solo afecta al paciente, tiene impacto negativo de por vida en salud física y psicológica de familias y cuidadores.
                  </p>
                  <p className="text-xs mt-3 opacity-75">[FUENTE: GSK Healthcare Professional Guide]</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
