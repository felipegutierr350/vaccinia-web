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
  Calendar, 
  MessageSquare,
  AlertCircle,
  CheckCircle,
  Lightbulb,
  Target
} from 'lucide-react';

export default function VPHComunicacionPage() {
  const mensajesClave = [
    {
      icon: ShieldCheck,
      title: "Enfatice que la vacunación previene el cáncer",
      color: "bg-purple-100 text-purple-600",
      points: [
        "Presentar como 'prevención de cáncer' (no solo VPH)",
        "Previene 6 tipos de cáncer + verrugas genitales",
        "Usar recomendación presumptiva: 'Su hijo debe recibir...'",
        "Mejor protección antes de 15 años (98.2% eficacia)"
      ]
    },
    {
      icon: Users,
      title: "Por qué TODOS los niños necesitan la vacuna",
      color: "bg-pink-100 text-pink-600",
      points: [
        "VPH muy común: 8/10 personas se infectarán",
        "No hay tratamiento curativo, solo prevención",
        "Protección contra >90% de cánceres relacionados",
        "Protege a niñas Y niños por igual"
      ]
    },
    {
      icon: Calendar,
      title: "Calendario de vacunación",
      color: "bg-rose-100 text-rose-600",
      points: [
        "Inicio óptimo: 9-12 años (respuesta inmune máxima)",
        "Antes de 15 años: 2 dosis (6-12 meses de intervalo)",
        "Después de 15 años: 3 dosis necesarias",
        "Recuperación posible: hasta 26 años"
      ]
    },
    {
      icon: MessageSquare,
      title: "Responder preocupaciones frecuentes",
      color: "bg-orange-100 text-orange-600",
      points: [
        "Seguridad probada desde 2006 (sin efectos graves)",
        "NO afecta fertilidad (evidencia CDC)",
        "NO promueve actividad sexual temprana",
        "Protección para varones: cáncer garganta, pene, ano"
      ]
    }
  ];

  const faqData = [
    {
      pregunta: "¿Es segura la vacuna contra el VPH?",
      respuesta: "La vacuna es muy segura. Desde su autorización en 2006 no se han asociado efectos graves. Los efectos más comunes son leves: dolor, enrojecimiento o hinchazón en el brazo y fiebre leve. Los desmayos ocasionales tras cualquier inyección pueden prevenirse sentándose 15 minutos.",
      fuentes: ["AAP", "MinSalud Colombia", "American Cancer Society"]
    },
    {
      pregunta: "¿La vacuna puede causar infertilidad?",
      respuesta: "NO hay evidencia de que la vacuna cause problemas de fertilidad. Por el contrario, algunas infecciones por VPH y los tratamientos de lesiones precancerosas SÍ pueden comprometer la fertilidad; vacunar previene esos tratamientos.",
      fuentes: ["CDC", "OMS"]
    },
    {
      pregunta: "¿Promueve la actividad sexual temprana?",
      respuesta: "Estudios revisados por los CDC muestran que recibir la vacuna NO se asocia con inicio precoz de actividad sexual. El objetivo es proteger ANTES de la exposición al virus, no influir en conducta.",
      fuentes: ["CDC"]
    },
    {
      pregunta: "¿Por qué vacunar si no están sexualmente activos?",
      respuesta: "Porque el VPH es tan común que la exposición suele ocurrir poco después de iniciar vida sexual. Además, la respuesta inmunitaria es MAYOR a edades tempranas y vacunar antes de 15 años requiere solo 2 dosis vs 3 dosis después.",
      fuentes: ["AAP", "CDC"]
    },
    {
      pregunta: "¿Qué pasa si quiero esperar?",
      respuesta: "Aplazar la vacuna NO tiene ningún beneficio. Los preadolescentes obtienen igual o mayor protección cuando reciben ambas dosis a tiempo. Demorar puede implicar que necesite 3 dosis para la misma protección.",
      fuentes: ["AAP"]
    },
    {
      pregunta: "¿Es demasiado tarde si tiene 15 años o más?",
      respuesta: "NO. La vacunación se recomienda hasta los 26 años. Si se inicia después de los 15 años se necesitan 3 dosis en lugar de 2, pero aún es efectiva.",
      fuentes: ["American Cancer Society", "CDC"]
    },
    {
      pregunta: "¿El VPH afecta a los varones?",
      respuesta: "SÍ. El VPH puede causar cáncer de garganta, pene y ano en varones. La vacuna les ofrece protección contra estos cánceres y verrugas genitales.",
      fuentes: ["CDC", "American Cancer Society"]
    }
  ];

  const ejemplosMensajes = [
    {
      titulo: "Recomendación del médico (anuncio)",
      mensaje: "Hoy su hijo(a) está listo(a) para las vacunas de rutina que protegen contra difteria/tétanos/tosferina, meningitis y VPH. Estas vacunas protegen contra enfermedades graves y la vacuna contra el VPH ayuda a prevenir varios tipos de cáncer. La aplicaremos antes de que se vayan.",
      tipo: "medico" as const
    },
    {
      titulo: "Explicación del VPH",
      mensaje: "El VPH es un virus muy común que se transmite por contacto piel a piel. Puede permanecer en el cuerpo durante años y causar cáncer en el cuello uterino, garganta, ano, vulva, vagina o pene, además de verrugas genitales.",
      tipo: "explicacion" as const
    },
    {
      titulo: "Razón para vacunar temprano",
      mensaje: "Es mejor vacunar entre los 9 y 12 años porque el sistema inmunitario responde mejor y solo son necesarias dos dosis. Aplazar la vacuna no ofrece beneficio.",
      tipo: "respuesta" as const
    },
    {
      titulo: "Respuesta sobre edad tardía",
      mensaje: "Si su hijo tiene 15 años o más, aún puede vacunarse; solo necesitará tres dosis para la misma protección.",
      tipo: "respuesta" as const
    },
    {
      titulo: "Seguridad",
      mensaje: "La vacuna contra el VPH es muy segura. Los efectos secundarios más comunes son dolor o enrojecimiento en el brazo y fiebre leve. No se han asociado efectos graves desde su aprobación en 2006.",
      tipo: "respuesta" as const
    },
    {
      titulo: "Fertilidad",
      mensaje: "La vacuna no afecta la fertilidad; en realidad, algunas infecciones por VPH y los tratamientos del precáncer de cuello uterino pueden comprometer la fertilidad. Vacunar protege su salud reproductiva.",
      tipo: "respuesta" as const
    }
  ];

  const estrategiasProfesionales = [
    {
      titulo: "Combinar recomendaciones de vacunas adolescentes",
      descripcion: "Presentar VPH, meningitis y Tdap como paquete con lenguaje de declaración. Evitar preguntas abiertas.",
      icon: Target
    },
    {
      titulo: "Capacitar al personal",
      descripcion: "Todo el equipo debe usar lenguaje claro y consistente para reforzar la recomendación del médico.",
      icon: Users
    },
    {
      titulo: "Aprovechar cada oportunidad",
      descripcion: "Revisar historial en cada visita y aplicar dosis pendientes. Programar segunda dosis antes de que salgan.",
      icon: CheckCircle
    },
    {
      titulo: "Usar testimonios personales",
      descripcion: "Compartir que vacuna a sus propios hijos aumenta confianza de los padres.",
      icon: MessageSquare
    },
    {
      titulo: "Responder con empatía y brevedad",
      descripcion: "Anticipar dudas frecuentes y contestar directamente apoyándose en evidencia.",
      icon: Lightbulb
    },
    {
      titulo: "Enfatizar 'cáncer-vacuna'",
      descripcion: "Denominar como 'vacuna contra el cáncer' porque las personas responden más al temor de cáncer que a VPH.",
      icon: AlertCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-rose-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-4xl">
            <Badge className="bg-white/20 backdrop-blur text-white border-white/30 mb-4">
              Estrategias de Comunicación
            </Badge>
            <h1 className="text-5xl font-bold mb-4">
              VPH: Prevención de 6 Tipos de Cáncer
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Guía basada en evidencia para promover la vacunación contra el VPH
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatCard number="8/10" label="Personas se infectarán" />
              <StatCard number=">90%" label="Prevención con vacuna" />
              <StatCard number="6" label="Tipos de cáncer previene" />
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
          <Tabs defaultValue="medico" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="medico">Recomendaciones</TabsTrigger>
              <TabsTrigger value="explicacion">Explicaciones</TabsTrigger>
              <TabsTrigger value="respuesta">Respuestas</TabsTrigger>
            </TabsList>
            
            <TabsContent value="medico" className="space-y-4 mt-4">
              {ejemplosMensajes.filter(e => e.tipo === 'medico').map((ejemplo, idx) => (
                <EjemploMensaje key={idx} {...ejemplo} />
              ))}
            </TabsContent>
            
            <TabsContent value="explicacion" className="space-y-4 mt-4">
              {ejemplosMensajes.filter(e => e.tipo === 'explicacion').map((ejemplo, idx) => (
                <EjemploMensaje key={idx} {...ejemplo} />
              ))}
            </TabsContent>
            
            <TabsContent value="respuesta" className="space-y-4 mt-4">
              {ejemplosMensajes.filter(e => e.tipo === 'respuesta').map((ejemplo, idx) => (
                <EjemploMensaje key={idx} {...ejemplo} />
              ))}
            </TabsContent>
          </Tabs>
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

        {/* Footer con fuentes */}
        <Card className="mt-12 bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-blue-900 mb-3">Fuentes Oficiales</h3>
            <div className="flex flex-wrap gap-2">
              {["CDC", "OMS", "OPS", "AAP", "American Cancer Society", "MinSalud Colombia", "Immunize.org"].map((fuente) => (
                <Badge key={fuente} variant="secondary" className="bg-white">
                  {fuente}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
