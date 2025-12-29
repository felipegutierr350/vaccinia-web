"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Send, Bot, User, RefreshCw, Volume2, VolumeX, Loader2 } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://vaccinia-backend.onrender.com";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function InfluenzaChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [activeProfiles, setActiveProfiles] = useState({
    adulto_mayor: false,
    enfermedad_cronica: false,
    alta_exposicion: false,
  });
  
  // TTS
  const [speakingIndex, setSpeakingIndex] = useState<number | null>(null);
  const [loadingTTS, setLoadingTTS] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
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
      setSessionId(data.session_id);
      setActiveProfiles(data.active_profiles);
      setMessages([{ role: "assistant", content: data.response, timestamp: new Date() }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([{ role: "assistant", content: "Error de conexión. Verifica que el backend esté corriendo.", timestamp: new Date() }]);
    }
    setIsLoading(false);
  };

  const sendMessage = async (text?: string) => {
    const message = text || inputValue.trim();
    if (!message || isLoading) return;

    stopSpeaking();
    setMessages(prev => [...prev, { role: "user", content: message, timestamp: new Date() }]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/influenza/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, message }),
      });
      const data = await response.json();
      setSessionId(data.session_id);
      setActiveProfiles(data.active_profiles);
      setMessages(prev => [...prev, { role: "assistant", content: data.response, timestamp: new Date() }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages(prev => [...prev, { role: "assistant", content: "Error al enviar mensaje.", timestamp: new Date() }]);
    }
    setIsLoading(false);
    inputRef.current?.focus();
  };

  const speakMessage = async (text: string, index: number) => {
    if (speakingIndex === index) {
      stopSpeaking();
      return;
    }
    
    stopSpeaking();
    setLoadingTTS(index);
    
    try {
      const response = await fetch(`${API_URL}/tts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, voice: "nova" }),
      });
      
      if (!response.ok) throw new Error("TTS error");
      
      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audioRef.current = audio;
      
      audio.onplay = () => { setSpeakingIndex(index); setLoadingTTS(null); };
      audio.onended = () => { setSpeakingIndex(null); URL.revokeObjectURL(audioUrl); };
      audio.onerror = () => { setSpeakingIndex(null); setLoadingTTS(null); };
      
      await audio.play();
    } catch (error) {
      console.error("TTS error:", error);
      setLoadingTTS(null);
    }
  };
  
  const stopSpeaking = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setSpeakingIndex(null);
    setLoadingTTS(null);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const resetChat = () => {
    stopSpeaking();
    setMessages([]);
    setSessionId(null);
    setActiveProfiles({ adulto_mayor: false, enfermedad_cronica: false, alta_exposicion: false });
    startConversation();
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
                <p className="text-xs md:text-sm text-blue-100">Asistente IA basado en evidencia científica</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={resetChat} className="text-white hover:bg-white/20">
              <RefreshCw size={18} />
            </Button>
          </div>
        </div>
      </div>

      {/* Profile badges */}
      {(activeProfiles.adulto_mayor || activeProfiles.enfermedad_cronica || activeProfiles.alta_exposicion) && (
        <div className="bg-white border-b shadow-sm">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="text-gray-500">Tu perfil:</span>
              {activeProfiles.adulto_mayor && <Badge className="bg-orange-100 text-orange-800">Adulto Mayor (65+)</Badge>}
              {activeProfiles.enfermedad_cronica && <Badge className="bg-red-100 text-red-800">Condición Crónica</Badge>}
              {activeProfiles.alta_exposicion && <Badge className="bg-yellow-100 text-yellow-800">Alta Exposición</Badge>}
            </div>
          </div>
        </div>
      )}

      {/* Chat */}
      <div className="container mx-auto px-4 py-4 max-w-3xl">
        <Card className="shadow-lg border-0">
          <CardContent className="p-0">
            <div className="h-[55vh] md:h-[50vh] overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] md:max-w-[80%] rounded-2xl px-4 py-3 ${
                    msg.role === "user" ? "bg-blue-600 text-white rounded-br-md" : "bg-white shadow-md rounded-bl-md"
                  }`}>
                    <div className="flex items-start gap-2">
                      {msg.role === "assistant" && (
                        <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot size={16} className="text-blue-600" />
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="whitespace-pre-line text-sm md:text-base leading-relaxed">{msg.content}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className={`text-xs ${msg.role === "user" ? "text-blue-200" : "text-gray-400"}`}>
                            {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </span>
                          {msg.role === "assistant" && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => speakMessage(msg.content, index)}
                              disabled={loadingTTS === index}
                              className={`h-8 w-8 p-0 rounded-full ${
                                speakingIndex === index ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100 text-gray-500"
                              }`}
                              title={speakingIndex === index ? "Detener" : "Escuchar"}
                            >
                              {loadingTTS === index ? (
                                <Loader2 size={16} className="animate-spin" />
                              ) : speakingIndex === index ? (
                                <VolumeX size={16} />
                              ) : (
                                <Volume2 size={16} />
                              )}
                            </Button>
                          )}
                        </div>
                      </div>
                      {msg.role === "user" && (
                        <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <User size={16} className="text-white" />
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
                      <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center">
                        <Bot size={16} className="text-blue-600" />
                      </div>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-white rounded-b-lg">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  placeholder="Escribe tu mensaje o pregunta..."
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
              <p className="text-xs text-gray-400 text-center mt-2">
                💡 Puedes escribir naturalmente: "tengo 65 años y diabetes, ¿debo vacunarme?"
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-4 text-center text-xs md:text-sm text-gray-500">
          <p>🔬 Basado en evidencia científica (CDC/ACIP, OMS, Lancet, Cochrane)</p>
          <p className="mt-1">Las recomendaciones son orientativas. Consulta siempre con tu médico.</p>
        </div>
      </div>
    </div>
  );
}
