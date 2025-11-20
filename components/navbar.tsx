"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, MessageSquare, FileText, Lightbulb, ChevronDown, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const isComunicacionActive = pathname.startsWith("/comunicacion");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">💉</span>
            <span className="font-bold text-lg md:text-xl text-blue-600">VaccinIA</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2">
            <Link 
              href="/" 
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                pathname === "/" ? "bg-blue-50 text-blue-600" : "hover:bg-gray-50"
              }`}
            >
              <Home size={18} />
              <span>Inicio</span>
            </Link>
            
            <Link 
              href="/consulta" 
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                pathname === "/consulta" ? "bg-blue-50 text-blue-600" : "hover:bg-gray-50"
              }`}
            >
              <MessageSquare size={18} />
              <span>Consulta</span>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    isComunicacionActive ? "bg-blue-50 text-blue-600" : "hover:bg-gray-50"
                  }`}
                >
                  <Lightbulb size={18} />
                  <span>Comunicación</span>
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/comunicacion" className="cursor-pointer">
                    <div className="flex items-center w-full">
                      <div className="mr-2">📋</div>
                      <div>
                        <div className="font-medium">Todas las Vacunas</div>
                        <div className="text-xs text-gray-500">Ver catálogo completo</div>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/comunicacion/vph" className="cursor-pointer">
                    <div className="flex items-center w-full">
                      <div className="mr-2">💜</div>
                      <div>
                        <div className="font-medium">VPH</div>
                        <div className="text-xs text-gray-500">Prevención de cáncer</div>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/comunicacion/menb" className="cursor-pointer">
                    <div className="flex items-center w-full">
                      <div className="mr-2">💙</div>
                      <div>
                        <div className="font-medium">Meningococo B</div>
                        <div className="text-xs text-gray-500">Lenguaje presuntivo</div>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/tips" className="cursor-pointer">
                    <div className="flex items-center w-full">
                      <div className="mr-2">💡</div>
                      <div>
                        <div className="font-medium">Tips Generales</div>
                        <div className="text-xs text-gray-500">Consulta IA + guías</div>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link 
              href="/mipres" 
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                pathname === "/mipres" ? "bg-blue-50 text-blue-600" : "hover:bg-gray-50"
              }`}
            >
              <FileText size={18} />
              <span>MIPRES</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <DropdownMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu size={24} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/" className="cursor-pointer">
                    <Home size={16} className="mr-2" />
                    Inicio
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/consulta" className="cursor-pointer">
                    <MessageSquare size={16} className="mr-2" />
                    Consulta
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/comunicacion" className="cursor-pointer">
                    <Lightbulb size={16} className="mr-2" />
                    Comunicación
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/comunicacion/vph" className="cursor-pointer pl-8">
                    💜 VPH
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/comunicacion/menb" className="cursor-pointer pl-8">
                    💙 Meningococo B
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/tips" className="cursor-pointer">
                    <Lightbulb size={16} className="mr-2" />
                    Tips
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/mipres" className="cursor-pointer">
                    <FileText size={16} className="mr-2" />
                    MIPRES
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
