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
    noPriorizado: string;
    priorizado: string;
    urgencia: string;
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
      noPriorizado: "5 días",
      priorizado: "24 horas",
      urgencia: "24 horas"
    },
    pasos: [
      "Médico prescribe en MIPRES",
      "Sanitas consulta automáticamente",
      "SMS en 5 días con Cruz Verde",
      "Acude con fórmula y cédula"
    ],
    contactos: [
      { tipo: "Principal", valor: "601 375-9000" },
      { tipo: "WhatsApp", valor: "320-255-0525" }
    ]
  },
  {
    id: "nuevaeps",
    nombre: "Nueva EPS",
    telefono: "01 8000 954 400",
    direccion: "Carrera 85K No. 46A-66",
    tiempos: {
      noPriorizado: "5 días",
      priorizado: "1 día",
      urgencia: "24 horas"
    },
    pasos: [
      "Médico inscribe en MIPRES",
      "Nueva EPS revisa electrónicamente",
      "SMS/llamada con punto asignado",
      "Acude con fórmula y documento"
    ],
    contactos: [
      { tipo: "Contributivo", valor: "01 8000 954 400" },
      { tipo: "Subsidiado", valor: "01 8000 952 000" }
    ]
  },
  {
    id: "sura",
    nombre: "EPS Sura",
    telefono: "601 489 7941",
    whatsapp: "317 518 0237",
    direccion: "Múltiples sedes",
    tiempos: {
      noPriorizado: "5 días",
      priorizado: "24 horas",
      urgencia: "24 horas"
    },
    pasos: [
      "Registro en MIPRES",
      "Sura procesa solicitud",
      "SMS y correo con respuesta",
      "Acude con documento y MIPRES"
    ],
    contactos: [
      { tipo: "Bogotá", valor: "601 489 7941" },
      { tipo: "WhatsApp", valor: "317 518 0237" }
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
          <p className="text-slate-600">Guía para autorizar vacunas no PBS</p>
        </div>

        <Card className="mb-6 bg-blue-50 border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-blue-600" />
              ¿Qué es MIPRES?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-700">
            <p>Plataforma del Ministerio para prescribir tecnologías NO PBS.</p>
            <p className="font-semibold mt-2">✅ No requiere autorización adicional</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Selecciona tu EPS</CardTitle>
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
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-3">
                    <Badge variant="secondary" className="mb-2">Normal</Badge>
                    <p className="text-2xl font-bold">{currentEPS.tiempos.noPriorizado}</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <Badge className="mb-2 bg-orange-600">Priorizado</Badge>
                    <p className="text-2xl font-bold">{currentEPS.tiempos.priorizado}</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <Badge variant="destructive" className="mb-2">Urgencia</Badge>
                    <p className="text-2xl font-bold">{currentEPS.tiempos.urgencia}</p>
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
                      <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                        {idx + 1}
                      </div>
                      <p className="pt-1">{paso}</p>
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
                <div className="space-y-2">
                  {currentEPS.contactos.map((c, i) => (
                    <div key={i} className="border rounded p-2">
                      <p className="text-xs text-slate-600">{c.tipo}</p>
                      <p className="font-semibold">{c.valor}</p>
                    </div>
                  ))}
                  <div className="p-3 bg-slate-50 rounded flex gap-2">
                    <MapPin className="h-4 w-4 mt-0.5" />
                    <div>
                      <p className="text-xs text-slate-600">Dirección</p>
                      <p className="text-sm font-medium">{currentEPS.direccion}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {!currentEPS && (
          <Card>
            <CardHeader>
              <CardTitle>💡 Recomendaciones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>✓ Solicita registro en MIPRES</p>
              <p>✓ Guarda número de prescripción</p>
              <p>✓ Verifica tiempos según prioridad</p>
              <p>✓ Actualiza datos de contacto</p>
              <p>✓ Lleva documento y fórmula impresa</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
