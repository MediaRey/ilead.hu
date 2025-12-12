'use client';

import { useState } from 'react';
import { Send, MessageCircle, Sparkles } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  sources?: string[];
}

export default function ChatbotSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Valami hiba történt');
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.response,
        sources: data.sources,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error: unknown) {
      console.error('Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Elnézést, hiba történt. Kérjük, próbálja újra.';
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: errorMessage,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="faq" className="py-20 bg-gray-50 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">
            Kérdezzen a <span className="text-burgundy">(be) Future Ready Executive</span> programról
          </h2>
          <p className="text-gray-600 text-lg">
            Használja AI asszisztensünket a programmal kapcsolatos kérdéseire
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
          {/* Messages Area */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4 bg-gray-50">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 mt-32">
                <div className="flex justify-center mb-4">
                  <div className="bg-orange/10 p-4 rounded-full">
                    <MessageCircle className="w-12 h-12 text-orange" />
                  </div>
                </div>
                <p className="text-xl font-semibold text-gray-700 mb-2">Üdvözöljük az AI asszisztensben!</p>
                <p className="text-gray-600">Kérdezzen bármit a Future Ready Executive programról</p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  <button
                    onClick={() => setInput('Meddig tart a program?')}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm hover:border-orange hover:text-orange transition-colors"
                  >
                    Meddig tart a program?
                  </button>
                  <button
                    onClick={() => setInput('Mennyibe kerül a részvétel?')}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm hover:border-orange hover:text-orange transition-colors"
                  >
                    Mennyibe kerül a részvétel?
                  </button>
                  <button
                    onClick={() => setInput('Kinek szól a program?')}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm hover:border-orange hover:text-orange transition-colors"
                  >
                    Kinek szól a program?
                  </button>
                </div>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-lg p-4 ${
                    msg.role === 'user'
                      ? 'bg-orange text-white'
                      : 'bg-white text-gray-900 border border-gray-200'
                  }`}
                >
                  <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                  {msg.sources && msg.sources.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <div className="flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" />
                        <div className="text-xs text-gray-600">
                          <p className="font-semibold mb-1">Kapcsolódó GYIK:</p>
                          <ul className="list-disc list-inside space-y-0.5">
                            {msg.sources.slice(0, 2).map((source, i) => (
                              <li key={i} className="text-gray-700">{source}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-orange rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-orange rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-orange rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4 bg-white">
            <div className="flex space-x-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Írja be kérdését..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="px-6 py-3 bg-orange text-white rounded-lg hover:bg-navy-black disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center gap-2 font-medium"
              >
                <Send className="w-5 h-5" />
                <span className="hidden sm:inline">Küldés</span>
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Az AI asszisztens a GYIK alapján nyújt információkat. Pontos információkért vegye fel a kapcsolatot:{' '}
          <a href="mailto:info@ilead.cz" className="text-orange hover:underline">
            info@ilead.cz
          </a>
        </p>
      </div>
    </section>
  );
}
