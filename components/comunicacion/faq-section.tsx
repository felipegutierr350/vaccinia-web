import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface FAQItem {
  pregunta: string;
  respuesta: string;
  fuentes?: string[];
}

interface FAQSectionProps {
  items: FAQItem[];
}

export function FAQSection({ items }: FAQSectionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, idx) => (
        <AccordionItem key={idx} value={`item-${idx}`}>
          <AccordionTrigger className="text-left text-base font-semibold">
            {item.pregunta}
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-slate-700 mb-3">{item.respuesta}</p>
            {item.fuentes && item.fuentes.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {item.fuentes.map((fuente, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {fuente}
                  </Badge>
                ))}
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
