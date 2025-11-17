import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Syringe, MessageSquare, BookOpen, Sparkles, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Syringe className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">VaccinIA</span>
          </div>
          <div className="flex gap-4">
            <Link href="#features">
              <Button variant="ghost">Características</Button>
            </Link>
            <Link href="/mipres">
              <Button variant="outline">MIPRES</Button>
            </Link>
            <Link href="/consulta">
              <Button>Empezar Consulta</Button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-20 text-center">
        <Badge className="mb-4" variant="secondary">
          <Sparkles className="h-3 w-3 mr-1" />
          Powered by AI + Guías Oficiales Colombia
        </Badge>
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Recomendaciones de Vacunación Inteligentes
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Sistema RAG basado en IA que combina guías del PAI Colombia, IDSA 2025, 
          ACIP/CDC para brindarte recomendaciones precisas y actualizadas.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/consulta">
            <Button size="lg" className="gap-2">
              <MessageSquare className="h-5 w-5" />
              Empezar Consulta
            </Button>
          </Link>
          <Link href="/tips">
            <Button size="lg" variant="outline" className="gap-2">
              <BookOpen className="h-5 w-5" />
              Tips de Comunicación
            </Button>
          </Link>
        </div>
      </section>

      <section id="features" className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Syringe className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>30+ Vacunas Cubiertas</CardTitle>
              <CardDescription>
                COVID-19, RSV, Herpes Zóster, Tdap, VPH, Meningococo B y más
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Estrategias de Comunicación</CardTitle>
              <CardDescription>
                Lenguaje presuntivo, manejo de resistencia, scripts validados
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Basado en Evidencia</CardTitle>
              <CardDescription>
                1,171 chunks de guías oficiales con fuentes citadas
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle>Trámites MIPRES</CardTitle>
              <CardDescription>
                Guía paso a paso para autorizar vacunas no PBS en tu EPS
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-blue-100">Vacunas Cubiertas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">13</div>
              <div className="text-blue-100">Condiciones Médicas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1,171</div>
              <div className="text-blue-100">Chunks de Conocimiento</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5 seg</div>
              <div className="text-blue-100">Respuesta Promedio</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-slate-50 mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-slate-600">
          <p>VaccinIA v3.3 - Desarrollado por Dr. Iván Felipe Gutiérrez Tobar</p>
          <p className="text-sm mt-2">Instituto Nacional de Pediatría (INP) - Colombia</p>
        </div>
      </footer>
    </div>
  );
}
