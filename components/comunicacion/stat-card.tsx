import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  number: string;
  label: string;
  icon?: React.ReactNode;
}

export function StatCard({ number, label, icon }: StatCardProps) {
  return (
    <Card className="bg-white/10 backdrop-blur border-white/20">
      <CardContent className="p-4">
        {icon && <div className="mb-2">{icon}</div>}
        <div className="text-3xl font-bold mb-1">{number}</div>
        <div className="text-sm text-white/80">{label}</div>
      </CardContent>
    </Card>
  );
}
