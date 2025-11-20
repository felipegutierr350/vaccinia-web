import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare } from 'lucide-react';

interface EjemploMensajeProps {
  titulo: string;
  mensaje: string;
  tipo?: 'medico' | 'explicacion' | 'respuesta';
}

export function EjemploMensaje({ titulo, mensaje, tipo = 'medico' }: EjemploMensajeProps) {
  const colorMap = {
    medico: 'border-blue-200 bg-blue-50',
    explicacion: 'border-purple-200 bg-purple-50',
    respuesta: 'border-green-200 bg-green-50'
  };

  return (
    <Card className={colorMap[tipo]}>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold flex items-center gap-2">
          <MessageSquare className="h-4 w-4" />
          {titulo}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-700 italic leading-relaxed">
          &quot;{mensaje}&quot;
        </p>
      </CardContent>
    </Card>
  );
}
