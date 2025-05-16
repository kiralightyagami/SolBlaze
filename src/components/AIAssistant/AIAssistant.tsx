import React, { useState, useRef } from 'react';
import { streamChatResponse } from '../../services/geminiService';
import ReactMarkdown from 'react-markdown';
import { Send, Bot, XCircle } from 'lucide-react';

interface Message {
  type: 'user' | 'assistant';
  content: string;
}

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;

    // Add user message
    const userMessage: Message = { type: 'user', content: prompt };
    setMessages(prev => [...prev, userMessage]);
    
    // Clear input
    setPrompt('');
    setIsLoading(true);

    // Add an empty assistant message that will be updated with streaming content
    setMessages(prev => [...prev, { type: 'assistant', content: '' }]);

    try {
      await streamChatResponse(
        prompt,
        (text) => {
          // Update the last message (which is the assistant's response)
          setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = {
              type: 'assistant',
              content: text
            };
            return newMessages;
          });
          scrollToBottom();
        },
        () => {
          setIsLoading(false);
          scrollToBottom();
        }
      );
    } catch (error) {
      console.error('Error getting AI response:', error);
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = {
          type: 'assistant',
          content: 'Sorry, I encountered an error. Please try again later.'
        };
        return newMessages;
      });
      setIsLoading(false);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleAssistant = () => {
    setIsOpen(!isOpen);
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat button */}
      <button 
        onClick={toggleAssistant}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-all duration-200"
      >
        <Bot size={24} />
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col border border-gray-200 dark:border-gray-700">
          {/* Header */}
          <div className="flex justify-between items-center p-3 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-medium">SolBlaze AI Assistant</h3>
            <div className="flex">
              <button onClick={clearChat} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 mr-2">
                <XCircle size={18} />
              </button>
              <button onClick={toggleAssistant} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                &times;
              </button>
            </div>
          </div>
          
          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-3 max-h-80 space-y-3">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 dark:text-gray-400 p-4">
                Ask me anything about Solana, blockchain, or SolBlaze dashboard!
              </div>
            ) : (
              messages.map((message, index) => (
                <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white'
                    }`}
                  >
                    {message.type === 'assistant' ? (
                      <div className="prose dark:prose-invert prose-sm max-w-none">
                        <ReactMarkdown>
                          {message.content || (isLoading && index === messages.length - 1 ? 'Thinking...' : '')}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      message.content
                    )}
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input form */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 dark:border-gray-700 p-3">
            <div className="flex">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                disabled={isLoading}
                placeholder="Ask your question..."
                className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none dark:bg-gray-700 dark:text-white"
              />
              <button
                type="submit"
                disabled={isLoading || !prompt.trim()}
                className="bg-blue-600 text-white p-2 rounded-r-lg disabled:bg-blue-400"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AIAssistant; 