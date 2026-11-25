'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Send, MessageCircle } from 'lucide-react';
import ReactMarkdown, { type Components } from 'react-markdown';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  /** Error notices are shown to the visitor but not sent back as conversation */
  isError?: boolean;
}

interface ChatSectionProps {
  /** Page the chat sits on: it decides which topic a short question refers to */
  page: 'program' | 'masterclass' | 'magazine';
  /** Anchor id of the section */
  sectionId: string;
  title: React.ReactNode;
  subtitle: string;
  /** Sentence under the welcome text, "Kérdezzen bármit ..." */
  welcomeHint: string;
  /** Question buttons shown before the first message */
  suggestions: string[];
}

// Links inside answers: orange and underlined; addresses on this site open in the same tab
function markdownComponents(role: Message['role']): Components {
  const linkClass =
    role === 'assistant'
      ? 'text-orange font-semibold underline underline-offset-2 hover:text-orange/80'
      : 'underline';

  return {
    p: ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>,
    strong: ({ children }) => <span className="font-bold text-burgundy-900">{children}</span>,
    ul: ({ children }) => <ul className="list-disc ml-4 mb-2 space-y-1">{children}</ul>,
    li: ({ children }) => <li className="text-sm">{children}</li>,
    a: ({ href = '', children }) =>
      href.startsWith('/') ? (
        <Link href={href} className={linkClass}>
          {children}
        </Link>
      ) : (
        <a href={href} className={linkClass} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
          {children}
        </a>
      ),
  };
}

export default function ChatSection({
  page,
  sectionId,
  title,
  subtitle,
  welcomeHint,
  suggestions,
}: ChatSectionProps) {
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
      // The conversation so far goes with the question, so follow-ups like "és mennyibe kerül?" make sense
      const history = messages.filter((msg) => !msg.isError);
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input, history, page }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Valami hiba történt');
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error: unknown) {
      console.error('Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Elnézést, hiba történt. Kérjük, próbálja újra.';
      setMessages((prev) => [...prev, { role: 'assistant', content: errorMessage, isError: true }]);
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
    <section id={sectionId} className="py-20 bg-gray-50 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 text-lg">{subtitle}</p>
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
                <p className="text-gray-600">{welcomeHint}</p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => setInput(suggestion)}
                      className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm hover:border-orange hover:text-orange transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg p-4 ${
                    msg.role === 'user'
                      ? 'bg-orange text-white'
                      : 'bg-white text-gray-900 border border-gray-200'
                  }`}
                >
                  <ReactMarkdown components={markdownComponents(msg.role)}>{msg.content}</ReactMarkdown>
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
          <a href="mailto:mark.kurbucz@forbes.hu" className="text-orange hover:underline">
            mark.kurbucz@forbes.hu
          </a>
        </p>
      </div>
    </section>
  );
}
