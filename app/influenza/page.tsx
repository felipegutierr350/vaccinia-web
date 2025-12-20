"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Send, Bot, User, RefreshCw } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://vaccinia-backend-v2.onrender.com";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ActiveProfiles {
  adulto_mayor: boolean;
  enfermedad_cronica: boolean;
  alta_exposicion: boolean;
}

interface ChatState {
  sessionId: string | null;
  state: string;
  activeProfiles: ActiveProfiles;
  options: string[] | null;
}

export default function InfluenzaChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatState, setChatState] = useState<ChatState>({
    sessionId: null,
    state: "welcome",
    activeProfiles: {
      adulto_mayor: false,
      enfermedad_cronica: false,
      alta_exposicion: false,
    },
    options: null,
  });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    startConversation();
  }, []);

  const startConversation = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/influenza/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "" }),
      });
      
      const data = await response.json();
      
      setChatState({
        sessionId: data.session_id,
        state: data.state,
        activeProfiles: data.active_profiles,
        options: data.options,
      });
      
      setMessages([{
        role: "assistant",
        content: data.response,
        timestamp: new Date(),
      }]);
    } catch (error) {
      console.error("Error iniciando conversación:", error);
      setMessages([{
        role: "assistant",
        content: "¡Hola! Soy Vaccinia. Parece que hay un problema de conexión. Por favor, recarga la página.",
        timestamp: new Date(),
      }]);
    }
    setIsLoading(false);
  };

  const sendMessage = async (messageText?: string) => {
    const text = messageText || inputValue.trim();
    if (!text || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: text,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/influenza/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_id: chatState.sessionId,
          message: text,
        }),
      });
      
      const data = await response.json();
      
      setChatState({
        sessionId: data.session_id,
        state: data.state,
        activeProfiles: data.active_profiles,
        options: data.options,
      });
      
      const assistantMessage: Message = {
        role: "assistant",
        content: data.response,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error enviando mensaje:", error);
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Disculpa, hubo un error. ¿Podrías intentar de nuevo?",
        timestamp: new Date(),
      }]);
    }
    
    setIsLoading(false);
    inputRef.current?.focus();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const resetChat = () => {
    setMessages([]);
    setChatState({
      sessionId: null,
      state: "welcome",
      activeProfiles: {
        adulto_mayor: false,
        enfermedad_cronica: false,
        alta_exposicion: false,
      },
      options: null,
    });
    startConversation();
  };

  const getStateBadge = () => {
    const stateLabels: Record<string, { label: string; color: string }> = {
      welcome: { label: "Bienvenida", color: "bg-blue-100 text-blue-800" },
      ask_age: { label: "Pregunta 1/4", color: "bg-purple-100 text-purple-800" },
      ask_conditions: { label: "Pregunta 2/4", color: "bg-purple-100 text-purple-800" },
      ask_exposure: { label: "Pregunta 3/4", color: "bg-purple-100 text-purple-800" },
      ask_previous_vax: { label: "Pregunta 4/4", color: "bg-purple-100 text-purple-800" },
      recommendation: { label: "Generando...", color: "bg-yellow-100 text-yellow-800" },
      free_chat: { label: "Conversación libre", color: "bg-green-100 text-green-800" },
    };
    
    const state = stateLabels[chatState.state] || { label: chatState.state, color: "bg-gray-100 text-gray-800" };
    return <Badge className={state.color}>{state.label}</Badge>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 md:py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl md:text-2xl">🦠</span>
              </div>
              <div>
                <h1 className="text-lg md:text-2xl font-bold">Vaccinia - Influenza</h1>
                <p className="text-xs md:text-sm text-blue-100">Asistente de vacunación personalizado</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {getStateBadge()}
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={resetChat}
                className="text-white hover:bg-white/20"
              >
                <RefreshCw size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Perfiles activos */}
      {chatState.state === "free_chat" && (
        <div className="bg-white border-b shadow-sm">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="text-gray-500">Tu perfil:</span>
              {chatState.activeProfiles.adulto_mayor && (
                <Badge className="bg-orange-100 text-orange-800">Adulto Mayor</Badge>
              )}
              {chatState.activeProfiles.enfermedad_cronica && (
                <Badge className="bg-red-100 text-red-800">Enfermedad Crónica</Badge>
              )}
              {chatState.activeProfiles.alta_exposicion && (
                <Badge className="bg-yellow-100 text-yellow-800">Alta Exposición</Badge>
              )}
              {!chatState.activeProfiles.adulto_mayor && 
               !chatState.activeProfiles.enfermedad_cronica && 
               !chatState.activeProfiles.alta_exposicion && (
                <Badge className="bg-gray-100 text-gray-600">General</Badge>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Chat Container */}
      <div className="container mx-auto px-4 py-4 max-w-3xl">
        <Card className="shadow-lg border-0">
          <CardContent className="p-0">
            {/* Messages Area */}
            <div className="h-[55vh] md:h-[50vh] overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] md:max-w-[75%] rounded-2xl px-4 py-3 ${
                      msg.role === "user"
                        ? "bg-blue-600 text-white rounded-br-md"
                        : "bg-white shadow-md rounded-bl-md"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {msg.role === "assistant" && (
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Bot size={14} className="text-blue-600" />
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="whitespace-pre-line text-sm md:text-base leading-relaxed">
                          {msg.content}
                        </p>
                        <p className={`text-xs mt-1 ${
                          msg.role === "user" ? "text-blue-200" : "text-gray-400"
                        }`}>
                          {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                      {msg.role === "user" && (
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <User size={14} className="text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white shadow-md rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <Bot size={14} className="text-blue-600" />
                      </div>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Options */}
            {chatState.options && chatState.options.length > 0 && (
              <div className="px-4 py-2 border-t bg-white">
                <p className="text-xs text-gray-500 mb-2">Opciones rápidas:</p>
                <div className="flex flex-wrap gap-2">
                  {chatState.options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => sendMessage(option)}
                      disabled={isLoading}
                      className="text-xs md:text-sm hover:bg-blue-50 hover:border-blue-300"
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t bg-white rounded-b-lg">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  type="text"
                  placeholder="Escribe tu mensaje..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  className="flex-1 rounded-full border-gray-200 focus:border-blue-400"
                />
                <Button
                  onClick={() => sendMessage()}
                  disabled={isLoading || !inputValue.trim()}
                  className="rounded-full w-10 h-10 md:w-12 md:h-12 bg-blue-600 hover:bg-blue-700"
                >
                  <Send size={18} />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Info Footer */}
        <div className="mt-4 text-center text-xs md:text-sm text-gray-500">
          <p>🔬 Basado en evidencia científica Q1/Q2 (Lancet, JAMA, Cochrane)</p>
          <p className="mt-1">Las recomendaciones son orientativas. Consulta siempre con tu médico.</p>
        </div>
      </div>
    </div>
  );
}
