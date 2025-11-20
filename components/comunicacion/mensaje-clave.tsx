import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from 'lucide-react';
import { Check } from 'lucide-react';

interface MensajeClaveProps {
  icon: LucideIcon;
  title: string;
  color: string;
  points: string[];
}

export function MensajeClave({ icon: Icon, title, color, points }: MensajeClaveProps) {
  return (
    <Card>
      <CardHeader>
        <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-3`}>
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
              <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
