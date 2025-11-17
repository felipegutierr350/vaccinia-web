"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Syringe, Phone, MapPin, Clock, FileText, AlertCircle } from "lucide-react";
import Link from "next/link";

type EPS = {
  id: string;
  nombre: string;
  telefono: string;
  whatsapp?: string;
  direccion: string;
  tiempos: {
    normal: string;
    urgente: string;
  };
  pasos: string[];
  contactos: {
    tipo: string;
    valor: string;
  }[];
};

const EPS_DATA: EPS[] = [
  {
    id: "sanitas",
    nombre: "EPS Sanitas",
    telefono: "601 375-9000",
    whatsapp: "320-255-0525",
    direccion: "Calle 100 No. 11B-67",
    tiempos: {
      normal: "5 días calendario",
      urgente: "24 horas"
    },
    pasos: [
      "Médico prescribe en MIPRES y entrega número",
      "Sanitas consulta automáticamente la prescripción",
      "En 5 días recibes SMS con Cruz Verde asignada",
      "Acude con fórmula impresa y cédula"
    ],
    contactos: [
      { tipo: "Principal", valor: "601 375-9000" },
      { tipo: "Gratuita", valor: "01 8000 919100" },
      { tipo: "WhatsApp", valor: "320-255-0525" }
    ]
  },
  {
    id: "nuevaeps",
    nombre: "Nueva EPS",
    telefono: "01 8000 954 400",
    direccion: "Carrera 85K No. 46A-66, Engativá",
    tiempos: {
      normal: "5 días calendario",
      urgente: "24 horas"
    },
    pasos: [
      "Médico inscribe vacuna en MIPRES",
      "Nueva EPS revisa prescripción electrónicamente",
      "En máximo 5 días recibes SMS/llamada con punto asignado",
      "Acude con fórmula, número MIPRES y documento"
    ],
    contactos: [
      { tipo: "Contributivo", valor: "01 8000 954 400" },
      { tipo: "Contributivo Bogotá", valor: "601 307 7022" },
      { tipo: "Subsidiado", valor: "01 8000 952 000" }
    ]
  },
  {
    id: "sura",
    nombre: "EPS Sura",
    telefono: "601 489 7941",
    whatsapp: "317 518 0237",
    direccion: "Múltiples sedes en Bogotá",
    tiempos: {
      normal: "5 días",
      urgente: "24 horas"
    },
    pasos: [
      "Profesional registra en MIPRES con número",
      "Sura procesa la solicitud",
      "Respuesta por SMS y correo electrónico",
      "Acude con documento y número MIPRES"
    ],
    contactos: [
      { tipo: "Bogotá", valor: "601 489 7941" },
      { tipo: "Nacional", valor: "01 8000 519 519" },
      { tipo: "WhatsApp", valor: "317 518 0237" }
    ]
  },
  {
    id: "famisanar",
    nombre: "EPS Famisanar",
    telefono: "601 307 8069",
    direccion: "Carrera 13A No. 77A-63",
    tiempos: {
      normal: "5 días calendario",
      urgente: "24 horas"
    },
    pasos: [
      "Médico registra vacuna en MIPRES",
      "Presenta radicación y realiza copago según plan",
      "EPS informa dónde reclamar (máximo 5 días)",
      "Lleva fórmula con firma y copia de documento"
    ],
    contactos: [
      { tipo: "PBS Bogotá", valor: "601 307 8069" },
      { tipo: "PBS Nacional", valor: "01 8000 116 662" },
      { tipo: "Email", valor: "servicioalcliente@famisanar.com.co" }
    ]
  },
  {
    id: "compensar",
    nombre: "Compensar EPS",
    telefono: "01 8000 915 202",
    direccion: "Avenida 68 No. 49A-47",
    tiempos: {
      normal: "5 días calendario",
      urgente: "24 horas"
    },
    pasos: [
      "Médico prescribe en MIPRES con número",
      "Compensar consulta automáticamente (sin autorización adicional)",
      "Recibes mensaje con proveedor asignado",
      "Acude con documento y número MIPRES"
    ],
    contactos: [
      { tipo: "Salud Nacional", valor: "01 8000 915 202" },
      { tipo: "Bogotá", valor: "601 307 7001" },
      { tipo: "Principal", valor: "01 8000 96 7070" }
    ]
  },
  {
    id: "saludtotal",
    nombre: "Salud Total EPS",
    telefono: "018000-1-14524",
    direccion: "Múltiples oficinas en Bogotá",
    tiempos: {
      normal: "5 días calendario",
      urgente: "24 horas"
    },
    pasos: [
      "Profesional registra en MIPRES",
      "Salud Total comunica por SMS/llamada",
      "Respuesta en máximo 5 días",
      "Acude con documento y fórmula"
    ],
    contactos: [
      { tipo: "Principal 24h", valor: "018000-1-14524" },
      { tipo: "Bogotá", valor: "601 485 4555" }
    ]
  },
  {
    id: "aliansalud",
    nombre: "Aliansalud EPS",
    telefono: "601 756 8000",
    direccion: "Calle 69 # 14A-31, Chapinero",
    tiempos: {
      normal: "5 días calendario",
      urgente: "24 horas"
    },
    pasos: [
      "Médico inscribe en MIPRES",
      "Comité técnico consulta y autoriza",
      "Notificación por correo/SMS",
      "Acude con documento y número"
    ],
    contactos: [
      { tipo: "Bogotá", valor: "601 756 8000" },
      { tipo: "Nacional", valor: "018000 123 703" }
    ]
  }
];

export default function MipresPage() {
  const [selectedEPS, setSelectedEPS] = useState<string>("");
  const currentEPS = EPS_DATA.find(eps => eps.id === selectedEPS);

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
            <Link href="/tips"><Button variant="ghost">Tips</Button></Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Trámites MIPRES</h1>
          <p className="text-slate-600">Guía para autorizar vacunas no PBS en tu EPS</p>
        </div>

        <Card className="mb-6 bg-blue-50 border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-blue-600" />
              ¿Qué es MIPRES?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-700 space-y-2">
            <p>Plataforma del Ministerio de Salud para prescribir tecnologías NO incluidas en el Plan de Beneficios en Salud (PBS).</p>
            <p className="font-semibold text-blue-900">✅ Cuando un médico prescribe por MIPRES, la EPS NO necesita autorización adicional</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Selecciona tu EPS</CardTitle>
            <CardDescription>Elige tu entidad para ver el proceso específico</CardDescription>
          </CardHeader>
          <CardContent>
            <Select value={selectedEPS} onValueChange={setSelectedEPS}>
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar EPS..." />
              </SelectTrigger>
              <SelectContent>
                {EPS_DATA.map((eps) => (
                  <SelectItem key={eps.id} value={eps.id}>{eps.nombre}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {currentEPS && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Tiempos de Respuesta
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <Badge variant="secondary" className="mb-2">Ambulatorio Normal</Badge>
                    <p className="text-3xl font-bold text-slate-700">{currentEPS.tiempos.normal}</p>
                    <p className="text-xs text-slate-600 mt-1">Para casos no urgentes</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <Badge variant="destructive" className="mb-2">Urgente/Prioritario</Badge>
                    <p className="text-3xl font-bold text-slate-700">{currentEPS.tiempos.urgente}</p>
                    <p className="text-xs text-slate-600 mt-1">Ambulatorio urgente u hospitalización</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Proceso en {currentEPS.nombre}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {currentEPS.pasos.map((paso, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                        {idx + 1}
                      </div>
                      <p className="pt-1 text-slate-700">{paso}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Contactos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {currentEPS.contactos.map((c, i) => (
                    <div key={i} className="border rounded-lg p-3">
                      <p className="text-xs text-slate-600 mb-1">{c.tipo}</p>
                      <p className="font-semibold text-slate-800">{c.valor}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-slate-50 rounded-lg flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-slate-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-600">Dirección principal</p>
                    <p className="text-sm font-medium text-slate-800">{currentEPS.direccion}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {!currentEPS && (
          <Card className="border-2 border-blue-200">
            <CardHeader>
              <CardTitle>💡 Recomendaciones Generales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">✓</span>
                <p>Solicita SIEMPRE que el médico registre en MIPRES</p>
              </div>
              <div className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">✓</span>
                <p>Guarda el número de prescripción para seguimiento</p>
              </div>
              <div className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">✓</span>
                <p>Tiempos: 5 días normal, 24 horas si es urgente</p>
              </div>
              <div className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">✓</span>
                <p>Verifica que tus datos de contacto estén actualizados</p>
              </div>
              <div className="flex gap-2">
                <span className="text-blue-600 flex-shrink-0">✓</span>
                <p>Acude con documento, fórmula impresa y firma del médico</p>
              </div>
              <div className="flex gap-2">
                <span className="text-red-600 flex-shrink-0">⚠</span>
                <p>Si no recibes respuesta, contacta a tu EPS o presenta PQR ante Superintendencia</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
