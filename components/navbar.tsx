"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, MessageSquare, FileText, Lightbulb } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">��</span>
            <span className="font-bold text-xl text-blue-600">VaccinIA</span>
          </Link>
          
          <div className="flex space-x-6">
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
            
            <Link 
              href="/tips" 
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                pathname === "/tips" ? "bg-blue-50 text-blue-600" : "hover:bg-gray-50"
              }`}
            >
              <Lightbulb size={18} />
              <span>Tips</span>
            </Link>
            
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
        </div>
      </div>
    </nav>
  );
}
