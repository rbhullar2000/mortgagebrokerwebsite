"use client"; 

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hi! I'm Rob's mortgage assistant 👋 I can answer questions about mortgages, rates, and our services — or help you book a free consultation with Rob. What can I help you with today?",
};

function linkify(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  return parts.map((part, i) => {
    if (urlRegex.test(part)) {
      urlRegex.lastIndex = 0;
      const isCalendly = part.includes("calendly.com");
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: isCalendly ? "#fff" : "#1a56db",
            fontWeight: isCalendly ? 600 : 400,
            background: isCalendly
              ? "linear-gradient(135deg, #1a56db, #0e3fa8)"
              : "transparent",
            padding: isCalendly ? "4px 10px" : "0",
            borderRadius: isCalendly ? "6px" : "0",
            display: isCalendly ? "inline-block" : "inline",
            marginTop: isCalendly ? "4px" : "0",
            textDecoration: isCalendly ? "none" : "underline",
          }}
        >
          {isCalendly ? "📅 Book Free Consultation" : part}
        </a>
      );
    }
    return part;
  });
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [messages, isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();
      if (data.message) {
        setMessages([
          ...newMessages,
          { role: "assistant", content: data.message },
        ]);
      }
    } catch {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            "Sorry, I had trouble connecting. Please try again or email contact@bcmortgageteam.com",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap');
        
        .chat-widget * {
          font-family: 'DM Sans', sans-serif;
          box-sizing: border-box;
        }

        .chat-bubble-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1a56db 0%, #0e3fa8 100%);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 24px rgba(26, 86, 219, 0.45);
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.4s ease;
          z-index: 9999;
          opacity: 0;
        }

        .chat-bubble-btn.visible {
          opacity: 1;
        }

        .chat-bubble-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 6px 32px rgba(26, 86, 219, 0.55);
        }

        .chat-bubble-btn.open {
          background: linear-gradient(135deg, #374151 0%, #1f2937 100%);
        }

        .chat-panel {
          position: fixed;
          bottom: 100px;
          right: 28px;
          width: 380px;
          max-width: calc(100vw - 40px);
          height: 560px;
          max-height: calc(100vh - 130px);
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 8px 48px rgba(0,0,0,0.18);
          display: flex;
          flex-direction: column;
          z-index: 9998;
          overflow: hidden;
          opacity: 0;
          transform: translateY(16px) scale(0.97);
          pointer-events: none;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .chat-panel.open {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: all;
        }

        .chat-header {
          background: linear-gradient(135deg, #1a56db 0%, #0e3fa8 100%);
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .chat-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .chat-header-info h3 {
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          margin: 0;
          line-height: 1.2;
        }

        .chat-header-info p {
          color: rgba(255,255,255,0.75);
          font-size: 12px;
          margin: 2px 0 0;
        }

        .online-dot {
          width: 8px;
          height: 8px;
          background: #34d399;
          border-radius: 50%;
          display: inline-block;
          margin-right: 4px;
          box-shadow: 0 0 0 2px rgba(52, 211, 153, 0.3);
        }

        .messages-area {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: #f9fafb;
        }

        .messages-area::-webkit-scrollbar {
          width: 4px;
        }
        .messages-area::-webkit-scrollbar-track {
          background: transparent;
        }
        .messages-area::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 4px;
        }

        .message {
          max-width: 85%;
          line-height: 1.5;
          font-size: 14px;
        }

        .message.assistant {
          align-self: flex-start;
        }

        .message.user {
          align-self: flex-end;
        }

        .message-bubble {
          padding: 10px 14px;
          border-radius: 16px;
          white-space: pre-wrap;
          word-break: break-word;
        }

        .message.assistant .message-bubble {
          background: #fff;
          color: #111827;
          border: 1px solid #e5e7eb;
          border-bottom-left-radius: 4px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
        }

        .message.user .message-bubble {
          background: linear-gradient(135deg, #1a56db, #0e3fa8);
          color: #fff;
          border-bottom-right-radius: 4px;
        }

        .typing-indicator {
          display: flex;
          gap: 5px;
          padding: 12px 14px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          border-bottom-left-radius: 4px;
          align-self: flex-start;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
        }

        .typing-indicator span {
          width: 7px;
          height: 7px;
          background: #9ca3af;
          border-radius: 50%;
          animation: typing 1.2s infinite ease-in-out;
        }

        .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
        .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }

        @keyframes typing {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
          30% { transform: translateY(-6px); opacity: 1; }
        }

        .chat-input-area {
          padding: 12px 16px;
          border-top: 1px solid #e5e7eb;
          display: flex;
          gap: 10px;
          align-items: center;
          background: #fff;
          flex-shrink: 0;
        }

        .chat-input {
          flex: 1;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 10px 14px;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          outline: none;
          transition: border-color 0.2s;
          background: #f9fafb;
          color: #111827;
          resize: none;
        }

        .chat-input:focus {
          border-color: #1a56db;
          background: #fff;
        }

        .chat-input::placeholder {
          color: #9ca3af;
        }

        .send-btn {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: linear-gradient(135deg, #1a56db, #0e3fa8);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: opacity 0.2s, transform 0.15s;
        }

        .send-btn:hover:not(:disabled) {
          transform: scale(1.05);
        }

        .send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .chat-footer {
          text-align: center;
          padding: 6px;
          font-size: 11px;
          color: #9ca3af;
          background: #fff;
          border-top: 1px solid #f3f4f6;
        }

        .pulse-ring {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 68px;
          height: 68px;
          border-radius: 50%;
          border: 2px solid rgba(26, 86, 219, 0.4);
          animation: pulse 2.5s ease-out infinite;
          z-index: 9997;
          pointer-events: none;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.6); opacity: 0; }
        }

        @media (max-width: 480px) {
          .chat-panel {
            bottom: 0;
            right: 0;
            width: 100vw;
            max-width: 100vw;
            height: 100dvh;
            max-height: 100dvh;
            border-radius: 0;
          }
          .chat-bubble-btn, .pulse-ring {
            bottom: 20px;
            right: 20px;
          }
        }
      `}</style>

      <div className="chat-widget">
        {/* Pulse ring when closed */}
        {!isOpen && isVisible && <div className="pulse-ring" />}

        {/* Floating button */}
        <button
          className={`chat-bubble-btn ${isOpen ? "open" : ""} ${isVisible ? "visible" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open mortgage assistant chat"
        >
          {isOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
            </svg>
          )}
        </button>

        {/* Chat panel */}
        <div className={`chat-panel ${isOpen ? "open" : ""}`} role="dialog" aria-label="Mortgage assistant">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-avatar">🏡</div>
            <div className="chat-header-info">
              <h3>BC Mortgage Assistant</h3>
              <p><span className="online-dot" />Available now · Powered by AI</p>
            </div>
          </div>

          {/* Messages */}
          <div className="messages-area">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.role}`}>
                <div className="message-bubble">
                  {linkify(msg.content)}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="typing-indicator">
                <span /><span /><span />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chat-input-area">
            <input
              ref={inputRef}
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about mortgages..."
              disabled={isLoading}
            />
            <button
              className="send-btn"
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>

          <div className="chat-footer">
            Powered by Claude AI · BC Mortgage Team
          </div>
        </div>
      </div>
    </>
  );
}
