"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from 'next/link';
import { 
  ShieldCheck, 
  Users, 
  Calendar,
  ArrowLeft,
  MessageSquare,
  AlertCircle,
  CheckCircle,
  Target,
  TrendingUp
} from 'lucide-react';
import { StatCard } from '@/components/comunicacion/stat-card';
import { MensajeClave } from '@/components/comunicacion/mensaje-clave';
import { FAQSection } from '@/components/comunicacion/faq-section';
import { EjemploMensaje } from '@/components/comunicacion/ejemplo-mensaje';

export default function VPHPage() {
  const mensajesClave = [
    {
      icon: ShieldCheck,
      title: "Prevención de Cáncer",
      color: "bg-purple-100 text-purple-600",
      points: [
        "Previene 6 tipos de cáncer (cervical, vaginal, vulvar, anal, orofaríngeo, peneano)",
        ">90% efectividad en prevención cuando se aplica antes de exposición",
        "8 de cada 10 personas se infectarán con VPH en su vida",
        "Vacuna NO terapéutica - es preventiva antes de exposición al virus"
      ]
    },
    {
      icon: Users,
      title: "Población Objetivo",
      color: "bg-blue-100 text-blue-600",
      points: [
        "Recomendada rutinariamente 11-12 años (puede iniciar 9 años)",
        "Catch-up hasta 26 años si no completó serie",
        "Decisión compartida 27-45 años (beneficio limitado si ya expuesto)",
        "Vacuna es para TODOS: niños, niñas, personas LGBTQ+"
      ]
    },
    {
      icon: Calendar,
      title: "Esquema de Dosis",
      color: "bg-green-100 text-green-600",
      points: [
        "< 15 años: 2 dosis (0 y 6-12 meses)",
        "≥ 15 años o inmunocomprometidos: 3 dosis (0, 1-2, 6 meses)",
        "Esquema 2 dosis tiene igual efectividad que 3 dosis en menores de 15 años",
        "Intervalos mínimos: 2da dosis a los 6 meses, 3ra dosis a los 24 semanas"
      ]
    },
    {
      icon: AlertCircle,
      title: "Desmintiendo Mitos",
      color: "bg-pink-100 text-pink-600",
      points: [
        "NO afecta fertilidad (evidencia sólida de seguridad)",
        "NO promueve actividad sexual (estudios demuestran lo contrario)",
        "Protege contra cepas oncogénicas (16, 18 causan 70% cáncer cervical)",
        "Segura: >100 millones dosis administradas, monitoreo continuo"
      ]
    }
  ];

  const faqItems = [
    {
      pregunta: "¿La vacuna VPH es segura para mi hijo/a?",
      respuesta: "Sí. La vacuna VPH tiene un excelente perfil de seguridad respaldado por más de 15 años de uso y >100 millones de dosis administradas globalmente. Los efectos secundarios más comunes son leves (dolor en sitio de inyección, cefalea). Los sistemas de vigilancia (VAERS, VSD) no han encontrado problemas graves de seguridad. Múltiples estudios demuestran que NO afecta la fertilidad.",
      fuentes: ["CDC", "OMS", "AAP"]
    },
    {
      pregunta: "¿Por qué vacunar antes de que sean sexualmente activos?",
      respuesta: "La vacuna es MÁS efectiva cuando se administra ANTES de cualquier exposición al VPH. El sistema inmune de los adolescentes jóvenes genera una respuesta más robusta. Esperar hasta que sean 'mayores' significa perder la ventana de máxima protección. 8 de cada 10 personas se infectarán con VPH en algún momento de su vida.",
      fuentes: ["CDC", "American Cancer Society"]
    },
    {
      pregunta: "¿La vacuna promueve la actividad sexual temprana?",
      respuesta: "NO. Múltiples estudios demuestran que la vacunación VPH NO está asociada con inicio sexual temprano, mayor número de parejas, o embarazo adolescente. Los adolescentes vacunados tienen las MISMAS tasas de comportamiento sexual que los no vacunados. La vacuna protege contra cáncer, no cambia comportamientos.",
      fuentes: ["AAP", "CDC", "Estudios peer-reviewed"]
    },
    {
      pregunta: "Mi hijo es varón, ¿realmente necesita la vacuna VPH?",
      respuesta: "SÍ, absolutamente. Los varones pueden desarrollar cáncer de pene, ano, y orofaringe por VPH. El 90% de cánceres anales y 70% de cánceres orofaríngeos están causados por VPH. Además, vacunar a los varones protege a sus futuras parejas (inmunidad de rebaño). La recomendación es UNIVERSAL para todos los géneros desde 2011.",
      fuentes: ["CDC", "AAP", "American Cancer Society"]
    },
    {
      pregunta: "¿Por qué 2 dosis para menores de 15 años pero 3 para mayores?",
      respuesta: "Los adolescentes jóvenes (<15 años) generan una respuesta inmune más robusta con solo 2 dosis, que es equivalente a la protección de 3 dosis en personas mayores. Esto está basado en estudios inmunológicos sólidos. Iniciar la serie después de los 15 años requiere 3 dosis para alcanzar niveles protectores similares de anticuerpos.",
      fuentes: ["CDC", "OMS", "ACIP"]
    },
    {
      pregunta: "¿La vacuna afecta la fertilidad?",
      respuesta: "NO. No existe evidencia científica de que la vacuna VPH afecte la fertilidad. Múltiples estudios de gran escala han evaluado esto específicamente y no encontraron ninguna asociación. De hecho, al prevenir cáncer cervical y sus tratamientos (que SÍ pueden afectar fertilidad), la vacuna PROTEGE la capacidad reproductiva futura.",
      fuentes: ["AAP", "American College of Obstetricians and Gynecologists", "Estudios de cohorte"]
    },
    {
      pregunta: "¿Qué pasa si mi hijo/a ya inició actividad sexual?",
      respuesta: "La vacuna TODAVÍA es beneficiosa. Aunque la efectividad máxima es antes de exposición, la mayoría de adolescentes no han sido expuestos a TODAS las cepas que cubre la vacuna (9 cepas en Gardasil 9). La vacuna puede proteger contra cepas a las que aún no se han expuesto y prevenir cánceres futuros.",
      fuentes: ["CDC", "AAP"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
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
              VPH - Virus Papiloma Humano
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Estrategias de Comunicación: Vacuna VPH
            </h1>
            <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8">
              Guías basadas en evidencia para promover la vacunación contra 6 tipos de cáncer prevenibles
            </p>
            
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
              <StatCard 
                number="8/10" 
                label="personas se infectarán VPH"
                icon={<Users className="h-8 w-8" />}
              />
              <StatCard 
                number=">90%" 
                label="prevención de cánceres"
                icon={<ShieldCheck className="h-8 w-8" />}
              />
              <StatCard 
                number="6 tipos" 
                label="de cáncer prevenibles"
                icon={<Target className="h-8 w-8" />}
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
          
          <Tabs defaultValue="recomendacion" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="recomendacion" className="text-xs md:text-sm">Recomendación</TabsTrigger>
              <TabsTrigger value="fertilidad" className="text-xs md:text-sm">Fertilidad</TabsTrigger>
              <TabsTrigger value="varones" className="text-xs md:text-sm">Varones</TabsTrigger>
              <TabsTrigger value="timing" className="text-xs md:text-sm">Timing</TabsTrigger>
            </TabsList>
            
            <TabsContent value="recomendacion" className="space-y-4 mt-4">
              <EjemploMensaje
                titulo="Recomendación Presumptiva (Lenguaje Presuntivo)"
                tipo="medico"
                mensaje="Hoy vamos a aplicar las vacunas que le tocan a Juan, incluyendo la vacuna contra el VPH que previene varios tipos de cáncer. [Pausa breve]. ¿Tienen alguna pregunta sobre las vacunas de hoy?"
              />
              <p className="text-xs md:text-sm text-slate-600 italic px-4">
                💡 Nota: Este lenguaje presuntivo es 17.5 veces más efectivo que preguntar "¿Quieren que apliquemos...?"
              </p>
            </TabsContent>

            <TabsContent value="fertilidad" className="space-y-4 mt-4">
              <EjemploMensaje
                titulo="Respuesta a Preocupación sobre Fertilidad"
                tipo="respuesta"
                mensaje="Entiendo su preocupación, es algo que muchos padres preguntan. La evidencia científica es muy clara: la vacuna VPH NO afecta la fertilidad. De hecho, múltiples estudios de millones de adolescentes vacunados demuestran que no hay ninguna diferencia en fertilidad comparado con no vacunados. Lo que SÍ puede afectar fertilidad son los tratamientos para cáncer cervical, que esta vacuna previene."
              />
            </TabsContent>

            <TabsContent value="varones" className="space-y-4 mt-4">
              <EjemploMensaje
                titulo="Por Qué los Varones Necesitan Vacuna VPH"
                tipo="explicacion"
                mensaje="Los varones también están en riesgo de cánceres causados por VPH: cáncer de pene, ano, y garganta. De hecho, el cáncer de garganta por VPH está aumentando en hombres. Además, vacunar a su hijo protege a sus futuras parejas. Por eso desde 2011 la recomendación es universal para todos los géneros - niños y niñas por igual."
              />
            </TabsContent>

            <TabsContent value="timing" className="space-y-4 mt-4">
              <EjemploMensaje
                titulo="Por Qué Vacunar a los 11-12 Años"
                tipo="explicacion"
                mensaje="La vacuna funciona MEJOR cuando se aplica antes de cualquier exposición al virus. A esta edad, el sistema inmune genera la respuesta más fuerte, y solo necesita 2 dosis en vez de 3. Esperar significa perder esta ventana de máxima protección. No estamos asumiendo que será sexualmente activo pronto - estamos protegiendo su salud futura cuando la protección es más efectiva."
              />
            </TabsContent>
          </Tabs>
        </section>

        {/* Estrategias para Profesionales */}
        <section className="mb-8 md:mb-12">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
                Estrategias Probadas para Aumentar Aceptación
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm md:text-base mb-2">1. Usar Lenguaje Presuntivo</h4>
                <p className="text-xs md:text-sm text-slate-700">
                  En vez de: "¿Quieren que apliquemos la vacuna VPH hoy?"<br/>
                  Decir: "Hoy vamos a aplicar las vacunas de rutina, incluyendo la del VPH..."
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-sm md:text-base mb-2">2. Enmarcar como Prevención de Cáncer</h4>
                <p className="text-xs md:text-sm text-slate-700">
                  Enfatizar que es una "vacuna contra el cáncer" más que una "vacuna contra ITS". 
                  Los padres responden mejor al marco de prevención de cáncer.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-sm md:text-base mb-2">3. Normalizar con Recomendaciones Universales</h4>
                <p className="text-xs md:text-sm text-slate-700">
                  "Esta vacuna es recomendada rutinariamente por CDC, AAP, y todas las organizaciones médicas 
                  para TODOS los niños y niñas de 11-12 años."
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-sm md:text-base mb-2">4. Anticipar y Abordar Preocupaciones Comunes</h4>
                <p className="text-xs md:text-sm text-slate-700">
                  Proactivamente mencionar: "Algunos padres preguntan sobre fertilidad - quiero que sepan 
                  que no hay ninguna evidencia de que esta vacuna afecte la fertilidad."
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
              <Badge variant="secondary" className="text-xs">OMS - Organización Mundial de la Salud</Badge>
              <Badge variant="secondary" className="text-xs">AAP - American Academy of Pediatrics</Badge>
              <Badge variant="secondary" className="text-xs">American Cancer Society</Badge>
              <Badge variant="secondary" className="text-xs">OPS - Organización Panamericana de la Salud</Badge>
              <Badge variant="secondary" className="text-xs">MinSalud Colombia</Badge>
              <Badge variant="secondary" className="text-xs">Immunize.org</Badge>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              Última actualización: Noviembre 2024. Contenido basado en guías oficiales vigentes.
            </p>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
