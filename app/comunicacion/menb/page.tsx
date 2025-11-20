"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from 'next/link';
import { 
  Shield, 
  Users, 
  Clock,
  ArrowLeft,
  MessageSquare,
  AlertTriangle,
  CheckCircle,
  Target,
  TrendingUp
} from 'lucide-react';
import { StatCard } from '@/components/comunicacion/stat-card';
import { MensajeClave } from '@/components/comunicacion/mensaje-clave';
import { FAQSection } from '@/components/comunicacion/faq-section';
import { EjemploMensaje } from '@/components/comunicacion/ejemplo-mensaje';

export default function MenBPage() {
  const mensajesClave = [
    {
      icon: AlertTriangle,
      title: "Urgencia y Severidad",
      color: "bg-red-100 text-red-600",
      points: [
        "Puede progresar de síntomas iniciales a muerte en 24 horas",
        "1 de cada 10 casos es fatal, incluso con tratamiento",
        "Consecuencias graves: amputaciones, daño neurológico, pérdida auditiva",
        "Los adolescentes tienen riesgo aumentado (picos: <1 año y 16-23 años)"
      ]
    },
    {
      icon: Shield,
      title: "Efectividad del Lenguaje Presuntivo",
      color: "bg-blue-100 text-blue-600",
      points: [
        "Lenguaje presuntivo es 17.5 veces más efectivo que participativo",
        "\"Hoy vamos a aplicar...\" vs \"¿Quieren que apliquemos...?\"",
        "Transmite confianza del profesional en la recomendación",
        "Normaliza la vacunación como parte estándar del cuidado"
      ]
    },
    {
      icon: Users,
      title: "Método de 2 Pasos para Resistencia",
      color: "bg-green-100 text-green-600",
      points: [
        "Paso 1: Reconocer preocupación + Mantener recomendación fuerte",
        "Paso 2: Si aún resisten, repetir recomendación con nueva razón",
        "47% de padres que inicialmente rechazan ACEPTAN en 2do intento",
        "Clave: Mantener conversación abierta y no abandonar recomendación"
      ]
    },
    {
      icon: Target,
      title: "Población y Timing",
      color: "bg-purple-100 text-purple-600",
      points: [
        "Primera dosis idealmente 11-12 años (puede iniciar 10 años)",
        "Serie de 2 dosis con 6 meses de diferencia (mínimo 1 mes)",
        "Catch-up hasta 23 años (decisión compartida 24-25 años)",
        "Especialmente importante: estudiantes universitarios, dormitorios, cuarteles"
      ]
    }
  ];

  const faqItems = [
    {
      pregunta: "¿Por qué mi hijo necesita vacuna MenB si es poco común?",
      respuesta: "Aunque es poco común (aproximadamente 300 casos/año en USA), la enfermedad meningocócica es DEVASTADORA cuando ocurre: 1 de cada 10 casos es fatal y 1-2 de cada 10 sobrevivientes sufren secuelas graves permanentes (amputaciones, daño cerebral, sordera). Los adolescentes y adultos jóvenes tienen riesgo aumentado. Es una enfermedad prevenible que puede progresar de síntomas iniciales a muerte en menos de 24 horas.",
      fuentes: ["CDC", "AAP"]
    },
    {
      pregunta: "¿En qué se diferencia MenB de la vacuna meningocócica regular (MenACWY)?",
      respuesta: "Son vacunas DIFERENTES que protegen contra serogrupos distintos de meningococo. MenACWY (rutinaria a los 11-12 años y refuerzo a los 16) protege contra serogrupos A, C, W, Y. MenB protege específicamente contra serogrupo B, que causa aproximadamente 1/3 de casos en adolescentes y adultos jóvenes en USA. Ambas vacunas son importantes porque protegen contra diferentes cepas.",
      fuentes: ["CDC", "ACIP"]
    },
    {
      pregunta: "¿Cuáles son los efectos secundarios de MenB?",
      respuesta: "Los efectos secundarios más comunes son leves y temporales: dolor/enrojecimiento en sitio de inyección (>80%), fatiga (>50%), cefalea (>50%), dolores musculares (>40%), escalofríos/fiebre (20-40%). Estos síntomas típicamente duran 1-2 días. Los efectos graves son extremadamente raros. La fiebre post-vacunación es más común que con otras vacunas, pero es transitoria.",
      fuentes: ["FDA", "CDC"]
    },
    {
      pregunta: "¿Por qué esta vacuna no es 'obligatoria' como otras?",
      respuesta: "MenB es una recomendación de 'Categoría B' del ACIP, lo que significa decisión clínica compartida para adolescentes 16-23 años (edad preferida 16-18). Sin embargo, muchos estados y universidades la REQUIEREN. Como profesional de salud, yo la recomiendo FUERTEMENTE porque: (1) los adolescentes están en grupo de riesgo, (2) la enfermedad es devastadora, y (3) es prevenible. La categoría B refleja consideraciones epidemiológicas, no dudas sobre su importancia.",
      fuentes: ["ACIP", "AAP"]
    },
    {
      pregunta: "Mi hijo no vive en dormitorio universitario, ¿aún la necesita?",
      respuesta: "SÍ. Aunque el riesgo es mayor en dormitorios universitarios, los casos de meningococo B ocurren en TODA la población adolescente/adulto joven, no solo en universidades. Los factores de riesgo incluyen: compartir bebidas/utensilios, besos, exposición a humo de cigarro, infecciones respiratorias, y simplemente estar en grupos sociales de adolescentes. No podemos predecir quién se enfermará.",
      fuentes: ["CDC"]
    },
    {
      pregunta: "¿Pueden esperar hasta antes de ir a la universidad?",
      respuesta: "Aunque puede aplicarse entonces, es MEJOR vacunar antes (16-18 años ideal) porque: (1) toma 6 meses completar la serie de 2 dosis - queremos protección completa ANTES de exposiciones de riesgo, (2) la respuesta inmune puede ser mejor a edad más temprana, (3) evita el apuro de última hora antes de universidad cuando pueden faltar dosis. Idealmente, completar serie antes del último año de secundaria.",
      fuentes: ["AAP"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <Link 
            href="/comunicacion" 
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4 md:mb-6 text-sm md:text-base"
          >
            <ArrowLeft size={20} />
            Volver a Comunicación
          </Link>
          
          <div className="max-w-4xl">
            <Badge className="bg-white/20 backdrop-blur text-white border-white/30 mb-4">
              Meningococo B
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Estrategias de Comunicación: Vacuna MenB
            </h1>
            <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8">
              Cómo involucrar efectivamente a padres en la decisión de vacunación contra meningococo B
            </p>
            
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
              <StatCard 
                number="17.5x" 
                label="más efectivo lenguaje presuntivo"
                icon={<MessageSquare className="h-8 w-8" />}
              />
              <StatCard 
                number="24hrs" 
                label="de síntomas a mortalidad posible"
                icon={<Clock className="h-8 w-8" />}
              />
              <StatCard 
                number="47%" 
                label="acepta en 2do intento"
                icon={<Users className="h-8 w-8" />}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 md:py-12 max-w-7xl">
        
        {/* Mensajes Clave */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Mensajes Clave para Comunicar</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {mensajesClave.map((mensaje, idx) => (
              <MensajeClave key={idx} {...mensaje} />
            ))}
          </div>
        </section>

        {/* Método de 2 Pasos */}
        <section className="mb-8 md:mb-12">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                Método de 2 Pasos para Manejo de Resistencia
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-3 md:p-4 rounded-lg">
                <h4 className="font-semibold text-sm md:text-base text-blue-900 mb-2">📍 PASO 1: Primera Resistencia</h4>
                <p className="text-xs md:text-sm text-slate-700 mb-2">
                  <strong>Reconocer + Mantener recomendación:</strong>
                </p>
                <p className="text-xs md:text-sm text-slate-600 italic">
                  &quot;Entiendo su preocupación. Aún así, recomiendo firmemente esta vacuna porque 
                  la enfermedad meningocócica, aunque rara, puede ser devastadora y ocurre en adolescentes 
                  sanos. No quiero que su hijo sea ese caso raro.&quot;
                </p>
              </div>
              
              <div className="bg-white p-3 md:p-4 rounded-lg">
                <h4 className="font-semibold text-sm md:text-base text-blue-900 mb-2">📍 PASO 2: Si Persiste Resistencia</h4>
                <p className="text-xs md:text-sm text-slate-700 mb-2">
                  <strong>Repetir recomendación con NUEVA razón específica:</strong>
                </p>
                <p className="text-xs md:text-sm text-slate-600 italic">
                  &quot;Entiendo que aún tiene dudas. Déjeme insistir una vez más: esta vacuna protege 
                  contra una enfermedad que puede matar en menos de 24 horas. He visto casos y las 
                  consecuencias son devastadoras. Realmente quiero que su hijo esté protegido.&quot;
                </p>
              </div>

              <div className="bg-green-50 p-3 md:p-4 rounded-lg border border-green-200">
                <p className="text-xs md:text-sm text-green-900">
                  <strong>✅ Evidencia:</strong> 47% de padres que inicialmente rechazan MenB ACEPTAN 
                  cuando el médico repite la recomendación con una razón adicional. ¡No abandones la 
                  conversación después del primer &quot;no&quot;!
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Preguntas Frecuentes de Padres</h2>
          <p className="text-sm md:text-base text-slate-600 mb-6">
            Respuestas basadas en evidencia a las objeciones más comunes
          </p>
          <FAQSection items={faqItems} />
        </section>

        {/* Ejemplos de Mensajes */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ejemplos de Comunicación Efectiva</h2>
          <p className="text-sm md:text-base text-slate-600 mb-6">
            Scripts adaptables para diferentes situaciones clínicas
          </p>
          
          <Tabs defaultValue="inicial" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="inicial" className="text-xs md:text-sm">Recomendación</TabsTrigger>
              <TabsTrigger value="resistencia" className="text-xs md:text-sm">Resistencia</TabsTrigger>
              <TabsTrigger value="urgencia" className="text-xs md:text-sm">Urgencia</TabsTrigger>
              <TabsTrigger value="efectos" className="text-xs md:text-sm">Efectos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="inicial" className="space-y-4 mt-4">
              <EjemploMensaje
                titulo="Recomendación Inicial (Lenguaje Presuntivo)"
                tipo="medico"
                mensaje="Hoy vamos a aplicar la vacuna contra meningococo B. Esta protege contra una infección cerebral grave que, aunque rara, puede ser mortal en menos de 24 horas. Los adolescentes están en riesgo aumentado y quiero asegurarme que su hijo esté protegido. [Pausa breve]. ¿Tienen preguntas sobre esta vacuna?"
              />
            </TabsContent>

            <TabsContent value="resistencia" className="space-y-4 mt-4">
              <EjemploMensaje
                titulo="Manejo de Resistencia - Paso 1"
                tipo="respuesta"
                mensaje="Entiendo su preocupación sobre que es poco común. Tiene razón en que es rara, pero cuando ocurre, las consecuencias son devastadoras: 1 de cada 10 casos es fatal y muchos sobrevivientes quedan con secuelas permanentes como amputaciones o daño cerebral. Como profesional, no quiero que su hijo sea ese caso raro. Fuertemente recomiendo esta vacuna."
              />
              <EjemploMensaje
                titulo="Manejo de Resistencia - Paso 2 (si persiste)"
                tipo="respuesta"
                mensaje="Déjeme insistir una vez más porque realmente me importa la salud de su hijo: la enfermedad meningocócica puede progresar de síntomas que parecen gripe a muerte en menos de 24 horas. He visto casos y es algo que no queremos arriesgar. Esta vacuna puede prevenir eso. ¿Podemos aplicarla hoy?"
              />
            </TabsContent>

            <TabsContent value="urgencia" className="space-y-4 mt-4">
              <EjemploMensaje
                titulo="Enfatizar Severidad y Rapidez"
                tipo="explicacion"
                mensaje="Lo que hace tan peligrosa a la meningitis meningocócica es su velocidad. Un adolescente puede despertar sintiéndose bien, desarrollar lo que parece ser gripe al mediodía, y estar en estado crítico por la noche. Una vez que empieza, progresa muy rápido. Por eso es tan importante prevenir con vacunación - el tratamiento con antibióticos puede no ser suficientemente rápido."
              />
            </TabsContent>

            <TabsContent value="efectos" className="space-y-4 mt-4">
              <EjemploMensaje
                titulo="Manejo de Preocupación por Efectos Secundarios"
                tipo="respuesta"
                mensaje="Sí, la vacuna MenB puede causar más fiebre y molestias que otras vacunas - aproximadamente 1 de cada 3 adolescentes tendrá fiebre leve y dolores musculares por 1-2 días. Es incómodo pero temporal y manejable con acetaminofén. Compare eso con la alternativa: riesgo de una enfermedad que mata en 24 horas o deja secuelas permanentes. Para mí, 2 días de molestia vale la pena por esa protección."
              />
            </TabsContent>
          </Tabs>
        </section>

        {/* Estrategias Adicionales */}
        <section className="mb-8 md:mb-12">
          <Card className="border-cyan-200 bg-cyan-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <Target className="h-5 w-5 md:h-6 md:w-6 text-cyan-600" />
                Estrategias Adicionales para Aumentar Aceptación
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm md:text-base mb-2">Usar Historias Reales (con Cuidado)</h4>
                <p className="text-xs md:text-sm text-slate-700">
                  Si es apropiado: &quot;He visto/conocido casos de meningitis meningocócica y es algo que no 
                  quiero que ninguna familia experimente.&quot; Las historias personales tienen impacto, pero úsalas 
                  con sensibilidad.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-sm md:text-base mb-2">Enfatizar Timing Crítico</h4>
                <p className="text-xs md:text-sm text-slate-700">
                  &quot;Toma 6 meses completar la serie de 2 dosis. Si esperamos hasta antes de universidad, 
                  puede que no tengamos protección completa cuando más la necesita.&quot;
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-sm md:text-base mb-2">Normalizar con Pares</h4>
                <p className="text-xs md:text-sm text-slate-700">
                  &quot;Muchas universidades REQUIEREN esta vacuna. Es cada vez más estándar de cuidado 
                  para adolescentes.&quot;
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-sm md:text-base mb-2">Dar Opción de Informarse y Regresar</h4>
                <p className="text-xs md:text-sm text-slate-700">
                  Si hay resistencia fuerte después de 2 intentos: &quot;Entiendo que necesita más tiempo 
                  para pensarlo. Aquí tiene información de CDC [dar folleto]. ¿Podemos hablar nuevamente 
                  en la próxima visita en 2 semanas?&quot; Mantener la puerta abierta.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer con Fuentes */}
        <Card className="bg-slate-50 border-slate-200">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-sm md:text-base mb-3">Fuentes Oficiales:</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs">CDC - Centers for Disease Control</Badge>
              <Badge variant="secondary" className="text-xs">AAP - American Academy of Pediatrics</Badge>
              <Badge variant="secondary" className="text-xs">ACIP - Advisory Committee on Immunization Practices</Badge>
              <Badge variant="secondary" className="text-xs">Guía &quot;Conversación Abierta y Honesta&quot;</Badge>
              <Badge variant="secondary" className="text-xs">Evidencia Lenguaje Presuntivo (Opel et al.)</Badge>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              Última actualización: Noviembre 2024. Contenido basado en guías oficiales y evidencia publicada.
            </p>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
